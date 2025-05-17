import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Intro = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        await controls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 1 },
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
    sequence();
  }, [controls]);

  return (
    <div className="mb-0 px-4 md:px-8">
      {/* Centered Animated Text */}
      <div className="text-center overflow-hidden">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}>
          I am a Developer and a Competitive Programmer
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={controls}>
          I build beautiful apps and solve challenging problems.
        </motion.p>
      </div>

      {/* Left-aligned Project Section Heading */}
      <div className="mt-10 text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-red-100 underline underline-offset-4 font font-sans">
          MY PROJECTS AND WORKS:
        </h2>
      </div>
    </div>
  );
};

export default Intro;
