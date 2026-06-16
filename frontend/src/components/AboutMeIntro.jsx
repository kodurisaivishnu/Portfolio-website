import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { about } from "../data/portfolio";
import { ArrowDown } from "lucide-react";

const AboutMeIntro = () => {
  return (
    <section id="about" className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeading
        index="01"
        tag="About"
        title="Turning raw data into reliable systems"
      />

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <motion.div
          className="space-y-5 text-base md:text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}>
          <p>
            I'm a final-year{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Computer Science engineer
            </span>{" "}
            at RGUKT Basar (CGPA 8.83/10), currently working as a{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Software Engineer in Data Engineering at Dexur
            </span>
            , where I design pipelines that process large-scale healthcare
            datasets.
          </p>
          <p>
            My focus is{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              backend engineering, distributed systems and performance
              optimization
            </span>{" "}
            — building event-driven ingestion systems, optimizing batch
            processing under heavy workloads, and indexing analytics for
            real-time dashboards.
          </p>
          <p>
            With{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              2000+ DSA problems
            </span>{" "}
            solved across major platforms, I bring strong foundations in system
            design, algorithms and clean, scalable architecture to everything I
            build.
          </p>

          {/* quick facts */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {about.quickFacts.map((f, i) => (
              <motion.div
                key={f.label}
                className="glass rounded-xl px-4 py-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-base">{f.icon}</span>
                  {f.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {f.value}
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#experience"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-cyan-300 hover:gap-3 transition-all">
            See what I've built
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        <div className="grid gap-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="glass rounded-2xl p-5 hover:translate-x-1.5 transition-transform"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <h4 className="flex items-center gap-3 font-semibold text-gray-900 dark:text-white">
                <span className="text-2xl">{h.icon}</span>
                {h.title}
              </h4>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeIntro;
