import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/70 dark:border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#top" className="flex items-center gap-2.5 font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_12px] shadow-cyan-400/70" />
            <span className="text-lg tracking-tight text-gray-900 dark:text-white">
              Sai&nbsp;Vishnu
            </span>
          </a>

          <div className="hidden md:flex space-x-7 items-center">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 dark:text-cyan-300"
                      : "text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-300"
                  }`}>
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all">
              Get in touch
            </a>
            <button
              onClick={() => setDark(!dark)}
              className="text-xl hover:scale-110 transition-transform"
              title="Toggle theme">
              {dark ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setDark(!dark)}
              className="text-xl"
              title="Toggle theme">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-200 dark:border-white/10">
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="block py-1.5 text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-cyan-300">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
