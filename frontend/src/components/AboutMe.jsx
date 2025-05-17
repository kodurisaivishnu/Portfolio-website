import React from "react";
import { motion } from "framer-motion";
import AboutMeIntro from "./AboutMeIntro";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutMe = () => {
  
  const sections = [
    {
      title: "Education",
      content: [
        {
          label: "B.Tech. in Computer Science and Engineering",
          sub: "Rajiv Gandhi University of Knowledge Technologies, Basar",
          detail: "Expected May 2026 | GPA: 9.33/10.00",
          extra:
            "Coursework: DSA (Java), DBMS, Computer Networks, OS, Linear Algebra (Python), Machine Learning",
        },
        {
          label: "Pre-University Course (MPC)",
          sub: "Rajiv Gandhi University of Knowledge Technologies, Basar",
          detail: "2022 | GPA: 9.01/10.00",
        },
        {
          label: "SSC",
          sub: "ZPHS Girls and Boys, Julapalli",
          detail: "2020 | GPA: 10.00/10.00",
        },
      ],
    },
    
  ];

  return (
    
    <section className="px-6 py-12 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
          About Me
        </h2> */}
        {sections.map((section, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="mb-10 bg-white dark:bg-gray-700 shadow-md rounded-xl p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
              {section.title}
            </h3>
            {section.content.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
                  {item.label}
                </h4>
                {item.sub && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.sub}
                  </p>
                )}
                {item.detail && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.detail}
                  </p>
                )}
                {item.extra && (
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-medium text-blue-500">
                      {item.extra}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
