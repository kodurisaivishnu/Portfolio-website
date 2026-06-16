import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { experiences } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="px-4 md:px-8 py-24 max-w-5xl mx-auto">
      <SectionHeading index="02" tag="Experience" title="Where I've made impact" />

      <div className="relative ml-2">
        {/* vertical line */}
        <span className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="relative pl-11 pb-12 last:pb-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}>
            <span className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-white dark:bg-gray-950 border-[3px] border-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />

            <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  {exp.role}{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">
                    · {exp.company}
                  </span>
                </h3>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                  {exp.duration}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">
                  {exp.mode}
                </span>
                {exp.cert && (
                  <a
                    href={exp.cert}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                    <ExternalLink size={13} /> Certificate
                  </a>
                )}
                {exp.linkedin && (
                  <a
                    href={exp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                    <Linkedin size={13} /> LinkedIn
                  </a>
                )}
              </div>

              <ul className="mt-4 space-y-2">
                {exp.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 text-sm text-gray-600 dark:text-gray-300">
                    <span className="absolute left-0 text-cyan-500">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
