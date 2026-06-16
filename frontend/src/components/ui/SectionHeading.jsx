import { motion } from "framer-motion";

const SectionHeading = ({ index, tag, title, subtitle, center = false }) => {
  return (
    <motion.div
      className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}>
      <div
        className={`flex items-center gap-3 mb-3 font-mono text-sm tracking-wide text-cyan-500 dark:text-cyan-400 ${
          center ? "justify-center" : ""
        }`}>
        <span className="h-px w-8 bg-cyan-500/60 dark:bg-cyan-400/60" />
        {index} — {tag}
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-fuchsia-400">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
