import { useEffect, useRef, useState } from "react";

// Animates a numeric value up from 0 when it scrolls into view.
// Preserves prefixes/suffixes like "+", "%", and decimals (e.g. "8.83").
const CountUp = ({ value, duration = 1500, className }) => {
  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : String(value);
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
          if (reduce) {
            setDisplay(target);
            return;
          }
          let start;
          const step = (t) => {
            if (!start) start = t;
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setDisplay(target * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
