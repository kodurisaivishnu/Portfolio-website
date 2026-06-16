import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import HeroVisual from "./ui/HeroVisual";
import CountUp from "./ui/CountUp";

function useTypedRole(roles) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i % roles.length];
    let timeout;
    if (!del && text === word) {
      timeout = setTimeout(() => setDel(true), 1400);
    } else if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            del
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1)
          ),
        del ? 45 : 95
      );
    }
    return () => clearTimeout(timeout);
  }, [text, del, i, roles]);

  return text;
}

const badges = [
  { text: "💻 Software Engineer", pos: "-top-3 -left-6", delay: "0s" },
  { text: "⚙️ Data Engineering", pos: "top-1/3 -right-8", delay: "1.3s" },
  { text: "💡 2000+ DSA", pos: "-bottom-3 left-2", delay: "2.1s" },
  { text: "🏆 Top 250 / 30k+", pos: "bottom-10 -right-6", delay: "0.7s" },
];

const HeroSection = () => {
  const role = useTypedRole(profile.roles);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.9fr] gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-gray-600 dark:text-gray-300 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Available · Software Engineer @ Dexur
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
            {profile.firstName}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-fuchsia-400">
              {profile.lastName}
            </span>
          </h1>

          <div className="mt-5 font-mono text-lg md:text-2xl text-cyan-600 dark:text-cyan-300 h-8">
            {role}
            <span className="type-caret">&nbsp;</span>
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-300">
            {profile.tagline} {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all">
              View my work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass text-gray-800 dark:text-white hover:-translate-y-0.5 transition-all">
              <Mail size={18} /> Contact me
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200"
              title="GitHub">
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200"
              title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a
              href={profile.emailHref}
              className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200"
              title="Email">
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-9 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <CountUp
                  value={s.num}
                  className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300"
                />
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — animated live data-pipeline visual + floating badges */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-fuchsia-500 rounded-3xl scale-110" />

            <HeroVisual />

            {/* floating badges */}
            {badges.map((b) => (
              <div
                key={b.text}
                className={`float-badge absolute ${b.pos} glass rounded-xl px-3 py-2 shadow-lg hidden md:block`}
                style={{ animationDelay: b.delay }}>
                <div className="text-xs font-bold text-gray-900 dark:text-white">
                  {b.text}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden md:flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-cyan-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}>
        <span className="font-mono text-[11px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
