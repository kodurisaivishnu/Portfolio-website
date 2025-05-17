import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

const platforms = [
  {
    name: "LeetCode",
    icon: <SiLeetcode size={40} className="text-yellow-500" />,
    description: "Solved 600+ problems | Peak Rating: 1550+| top 30% globally",
    link: "https://leetcode.com/u/ksv-1288/",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks size={40} className="text-green-600" />,
    description: "Solved 500+ problems | 4-Star Badge Holder|top 5% globally",
    link: "https://www.geeksforgeeks.org/user/kodurisaxytp/",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef size={40} className="text-[#5b4638]" />,
    description: "Rated 2⭐ | Max Rating: 1420+",
    link: "https://www.codechef.com/users/ksv_1288",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={40} className="text-blue-600" />,
    description: "Max Rating: 940+ | Solved 69+ problems",
    link: "https://codeforces.com/profile/kodurisaivishnu",
  },
];

const CodingProfiles = () => {
  return (
    <section className="px-6 md:px-16 py-12 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        Coding Profiles
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {platforms.map((platform, idx) => (
          <motion.a
            key={idx}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}>
            <div>{platform.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                {platform.name}
                <FaExternalLinkAlt size={14} />
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {platform.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
