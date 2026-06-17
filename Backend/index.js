import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// behind Render/other proxies — needed to read the real client IP
app.set("trust proxy", true);

//middlewares
app.use(cors());
app.use(express.json());

// ---- email config (Resend HTTPS API — works on hosts that block SMTP) ----
const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Recipient = the portfolio owner's inbox. EMAIL_USER kept for backward compat.
const MAIL_TO = process.env.MAIL_TO || process.env.EMAIL_USER;
// Sender. onboarding@resend.dev needs NO verified domain, but only delivers to
// the email you registered your Resend account with — which is MAIL_TO here.
const MAIL_FROM = process.env.MAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";

const sendEmail = async ({ subject, html, text, replyTo }) => {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [MAIL_TO],
      reply_to: replyTo,
      subject,
      html,
      text,
    }),
  });
  if (!resp.ok) {
    const detail = await resp.text();
    throw new Error(`Resend ${resp.status}: ${detail}`);
  }
  return resp.json();
};

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const getClientIp = (req) => {
  const fwd = req.headers["x-forwarded-for"];
  if (fwd) return fwd.split(",")[0].trim();
  return req.ip || req.socket?.remoteAddress || "unknown";
};

// ---- health checks ----
// Liveness: is the server up?
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: Math.round(process.uptime()),
    time: new Date().toISOString(),
    provider: "resend",
    emailConfigured: Boolean(RESEND_API_KEY && MAIL_TO),
  });
});

// Readiness: is the Resend API key valid? (no email is sent)
app.get("/api/health/email", async (req, res) => {
  if (!RESEND_API_KEY || !MAIL_TO) {
    return res.status(503).json({
      emailReady: false,
      reason: "missing_credentials",
      message: "RESEND_API_KEY and/or MAIL_TO (EMAIL_USER) are not set.",
    });
  }
  try {
    const r = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${RESEND_API_KEY}` },
    });
    if (r.ok) {
      return res.status(200).json({
        emailReady: true,
        to: MAIL_TO,
        from: MAIL_FROM,
        message: "Resend API key is valid — ready to send.",
      });
    }
    return res.status(502).json({
      emailReady: false,
      reason: "auth_failed",
      message: `Resend ${r.status}: ${await r.text()}`,
      hint: "API key may be wrong or revoked. Check RESEND_API_KEY on the server.",
    });
  } catch (error) {
    res.status(502).json({
      emailReady: false,
      reason: "request_failed",
      message: error.message,
    });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message, meta = {} } = req.body;

  if (!RESEND_API_KEY) {
    return res.status(503).json({ message: "Email service not configured." });
  }

  // ---- metadata: server-derived (authoritative) + client-supplied ----
  const metadata = {
    "IP address": getClientIp(req),
    "User agent": req.headers["user-agent"] || "unknown",
    "Page URL": meta.pageUrl || req.headers["referer"] || "direct",
    Referrer: meta.referrer || "direct",
    "Local time": meta.localTime || "—",
    Timezone: meta.timezone || "—",
    Language: meta.language || "—",
    Screen: meta.screen || "—",
    Viewport: meta.viewport || "—",
    Platform: meta.platform || "—",
    "Received (server, UTC)": new Date().toISOString(),
  };

  const metaRows = Object.entries(metadata)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;white-space:nowrap;vertical-align:top">${esc(
          k
        )}</td><td style="padding:4px 0;color:#111827;word-break:break-all">${esc(
          v
        )}</td></tr>`
    )
    .join("");

  const metaText = Object.entries(metadata)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    await sendEmail({
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text:
        `Name: ${name}\nEmail: ${email}\n\n${message}\n\n` +
        `--- Visitor metadata ---\n${metaText}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;color:#111827">
          <h2 style="margin:0 0 4px">New message from your portfolio</h2>
          <p style="margin:0 0 16px;color:#6b7280">${esc(subject)}</p>
          <table style="border-collapse:collapse;font-size:14px;margin-bottom:20px">
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Name</td><td style="padding:4px 0"><b>${esc(
              name
            )}</b></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Email</td><td style="padding:4px 0"><a href="mailto:${esc(
              email
            )}">${esc(email)}</a></td></tr>
          </table>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px;line-height:1.6">${esc(
            message
          )}</div>
          <h3 style="margin:24px 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#6b7280">Visitor metadata</h3>
          <table style="border-collapse:collapse;font-size:12px">${metaRows}</table>
        </div>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
