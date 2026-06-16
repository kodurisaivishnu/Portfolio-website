import { useEffect, useState } from "react";

// Thin gradient bar at the very top that tracks page scroll.
const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setPct(scrolled * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 transition-[width] duration-150"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
