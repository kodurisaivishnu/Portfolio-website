import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-900 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="w-screen flex flex-wrap items-center justify-center sm:gap-30  mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#about_me" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#about_me" className="hover:underline me-4 md:me-6">
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            KODURI SAI VISHNU™
          </a>
          . All Rights Reserved.
        </span>

        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link
              href="https://github.com/kodurisaivishnu"
              target="_blank"
              rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/kodurisaivishnu"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:kodurisaivishnu@gmail.com">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
