import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, icon, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-center w-full max-w-[180px]">
      <div className="text-4xl mb-2 text-blue-500">{icon}</div>

      {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}

      <div className="text-sm text-gray-600 dark:text-gray-300">{children}</div>
    </motion.div>
  );
};

export default Card;
