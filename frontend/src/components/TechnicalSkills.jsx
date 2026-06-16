import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { skillGroups } from "../data/portfolio";

const TechnicalSkills = () => {
  return (
    <section id="skills" className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeading index="03" tag="Skills" title="My technical toolkit" />

      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="glass rounded-2xl p-6 hover:-translate-y-1.5 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
            <h4 className="flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white mb-5">
              <span className="text-2xl">{group.icon}</span>
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg font-mono text-sm bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
