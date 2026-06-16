import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, ScrollText } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { education, certifications } from "../data/portfolio";

const AboutMe = () => {
  return (
    <section id="education" className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeading
        index="06"
        tag="Education & Certifications"
        title="Background"
      />

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Education */}
        <motion.div
          className="glass rounded-2xl p-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}>
          <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-6">
            <GraduationCap className="text-indigo-500" /> Education
          </h3>
          {education.map((e, i) => (
            <div
              key={e.school}
              className={`pb-5 mb-5 ${
                i < education.length - 1
                  ? "border-b border-gray-200/70 dark:border-white/10"
                  : ""
              }`}>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {e.school}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {e.degree} · {e.detail}
              </p>
              <p className="mt-1 font-mono text-sm text-cyan-600 dark:text-cyan-400">
                {e.grade}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="glass rounded-2xl p-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-6">
            <ScrollText className="text-indigo-500" /> Certifications
          </h3>
          {certifications.map((c, i) => (
            <div
              key={c.title}
              className={`pb-5 mb-5 ${
                i < certifications.length - 1
                  ? "border-b border-gray-200/70 dark:border-white/10"
                  : ""
              }`}>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {c.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {c.issuer}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {c.detail}
              </p>
              {c.cert && (
                <a
                  href={c.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                  <ExternalLink size={12} /> View certificate
                </a>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
