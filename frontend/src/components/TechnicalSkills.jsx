import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
// import { SiVisualstudio } from "react-icons/si";
import { FaCode } from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiAnaconda,
} from "react-icons/si";
import Card from "./ui/Card";

const skills = [
  { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
  { name: "React.js", icon: <SiReact size={40} className="text-blue-400" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
  { name: "C++", icon: <SiCplusplus size={40} className="text-blue-400" /> },
  {
    name: "Express.js",
    icon: <SiExpress size={40} className="text-gray-700" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "C", icon: <SiC size={40} className="text-blue-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="text-black dark:text-white" />,
  },
  {
    name: "VS Code",
    icon: <FaCode size={40} className="text-blue-500" />,
  },
  {
    name: "Anaconda",
    icon: <SiAnaconda size={40} className="text-green-700" />,
  },
  {
    name: "Linux",
    icon: <FaLinux size={40} className="text-black dark:text-white" />,
  },
  { name: "Windows", icon: <FaWindows size={40} className="text-blue-500" /> },
];

const TechnicalSkills = () => {
  return (
    <section className="px-6 md:px-16 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
        Technical Skills
      </h2>



      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <Card
            key={idx}
            className="p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-md">
            {skill.icon}
            <span className="text-base font-medium mt-1 text-gray-700 dark:text-white">
              {skill.name}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
