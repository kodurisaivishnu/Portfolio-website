import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-indigo-500 hover:underline">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200">
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200">
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.emailHref}
            title="Email"
            className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200">
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={profile.phoneHref}
            title="Phone"
            className="p-2.5 rounded-lg glass hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-200">
            <Phone className="h-5 w-5" />
          </a>
        </div>

        <hr className="my-6 border-gray-200 dark:border-white/10" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2026 Koduri Sai Vishnu · Designed &amp; built with care.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
