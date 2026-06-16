import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
} from "react-icons/si";
import SectionHeading from "./ui/SectionHeading";
import { achievements, codingProfiles } from "../data/portfolio";

const icons = {
  LeetCode: <SiLeetcode className="text-yellow-500" size={28} />,
  GeeksforGeeks: <SiGeeksforgeeks className="text-green-600" size={28} />,
  CodeChef: <SiCodechef className="text-[#5b4638] dark:text-amber-200" size={28} />,
  HackerRank: <SiHackerrank className="text-green-500" size={28} />,
  Codeforces: <SiCodeforces className="text-blue-600" size={28} />,
};

const CodingProfiles = () => {
  return (
    <section id="achievements" className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeading index="05" tag="Achievements" title="Milestones & rankings" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            className="glass rounded-2xl p-7 text-center hover:-translate-y-1.5 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
            <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">
              {a.big}
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {a.label}
            </p>
            {a.cert && (
              <a
                href={a.cert}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                <ExternalLink size={12} /> Proof
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* real stats snapshot */}
      <motion.div
        className="mt-12 glass rounded-2xl p-3 md:p-4 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}>
        <img
          src="/p0_cooding.png"
          alt="Coding profile statistics across CodeChef, LeetCode and GeeksforGeeks"
          className="w-full rounded-xl"
        />
      </motion.div>

      <h3 className="mt-16 mb-7 text-center text-xl font-bold text-gray-800 dark:text-gray-200">
        Competitive Programming Profiles
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {codingProfiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-xl px-5 py-4 flex items-center gap-4 min-w-[230px] hover:-translate-y-1.5 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}>
            <div>{icons[p.name]}</div>
            <div className="text-left">
              <div className="font-semibold flex items-center gap-1.5 text-gray-900 dark:text-white">
                {p.name}
                <ExternalLink
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
                {p.detail}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
