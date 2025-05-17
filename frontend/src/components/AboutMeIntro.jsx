import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AboutMeIntro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section ref={ref} className="px-6 md:px-16 py-12 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}>
        About Me
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.3 }}>
        I'm a passionate{" "}
        <span className="text-blue-500 font-semibold">Computer Science</span>{" "}
        undergraduate at RGUKT Basar (2026), holding a{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text font-bold">
          9.33/10 GPA
        </span>
        . I love building full-stack apps, solving complex problems, and writing
        clean, optimized code.
      </motion.p>
    </section>
  );
};

export default AboutMeIntro;
