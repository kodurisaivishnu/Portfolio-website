import nodemailer from "nodemailer";
import express from 'express';
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

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message, meta = {} } = req.body;

  // ---- server-derived metadata (authoritative) ----
  const serverMeta = {
    ip: getClientIp(req),
    userAgent: req.headers["user-agent"] || "unknown",
    referer: req.headers["referer"] || meta.pageUrl || "direct",
    receivedAt: new Date().toISOString(),
  };

  // ---- merge with client-supplied metadata ----
  const metadata = {
    "IP address": serverMeta.ip,
    "User agent": serverMeta.userAgent,
    "Page URL": meta.pageUrl || serverMeta.referer,
    Referrer: meta.referrer || "direct",
    "Local time": meta.localTime || "—",
    Timezone: meta.timezone || "—",
    Language: meta.language || "—",
    Screen: meta.screen || "—",
    Viewport: meta.viewport || "—",
    Platform: meta.platform || "—",
    "Received (server, UTC)": serverMeta.receivedAt,
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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
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
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
