import { motion } from "framer-motion";

const experiences = [
  {
    title: "GSSoC'24 Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote",
    duration: "Oct 2024 – Nov 2024",
    description: [
      "Exposed to various open-source projects.",
      "Worked with the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Codsoft",
    location: "Remote",
    duration: "Aug 2023 – Sep 2023",
    description: [
      "Worked on the design and development of fully responsive web pages.",
      "Utilized HTML, CSS, and JavaScript for front-end development.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 px-4 md:px-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
        Experience
      </h2>

      <div className="w-full space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-indigo-600">
                {exp.title}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.duration}
              </span>
            </div>
            <h4 className="text-md font-medium text-gray-800 dark:text-gray-200">
              {exp.company} — <span className="italic">{exp.location}</span>
            </h4>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
