import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
            <div className="text-2xl font-bold whitespace-nowrap overflow-hidden border-r-4 border-black dark:border-white animate-typing w-[18ch]">
              KODURI SAI VISHNU
            </div>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#about_me"
              className="hover:text-blue-500 dark:hover:text-blue-300">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 dark:hover:text-blue-300">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 dark:hover:text-blue-300">
              Experience
            </a>
            <a
              href="#about_me"
              className="hover:text-blue-500 dark:hover:text-blue-300">
              Achievements
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 dark:hover:text-blue-300">
              Contact
            </a>
            {/* Toggle Button */}
            <button
              onClick={() => setDark(!dark)}
              className="ml-4 text-xl hover:text-yellow-400"
              title="Toggle Dark Mode">
              {dark ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* Toggle for mobile */}
            <button
              onClick={() => setDark(!dark)}
              className="text-xl hover:text-yellow-400"
              title="Toggle Dark Mode">
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow-md">
          <a
            href="#"
            className="block hover:text-blue-500 dark:hover:text-blue-300">
            About
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 dark:hover:text-blue-300">
            Projects
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 dark:hover:text-blue-300">
            Experience
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 dark:hover:text-blue-300">
            Achievements
          </a>
          <a
            href="#"
            className="block hover:text-blue-500 dark:hover:text-blue-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
