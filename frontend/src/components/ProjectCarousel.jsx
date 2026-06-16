import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/portfolio";

const ProjectCarousel = () => {
  return (
    <section id="projects" className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <SectionHeading index="04" tag="Projects" title="Things I've built" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group relative glass rounded-2xl p-7 flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}>
            {/* top accent */}
            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 z-10" />

            {/* screenshot or branded placeholder */}
            <div className="-mx-7 -mt-7 mb-5 h-44 overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
                    p.accent || "from-indigo-500 to-cyan-500"
                  }`}>
                  <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {p.icon}
                  </span>
                </div>
              )}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/40 text-white text-xs font-medium backdrop-blur">
                {p.type}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 my-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-5">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
                  <ExternalLink size={16} /> Live
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
