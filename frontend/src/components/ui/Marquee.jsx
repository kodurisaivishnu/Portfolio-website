import { highlights } from "../../data/portfolio";

// Infinite horizontal scroll of career highlights (pauses on hover).
const Marquee = () => {
  const items = [...highlights, ...highlights]; // duplicated for seamless loop
  return (
    <div className="relative py-6 border-y border-gray-200/70 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-gray-950 to-transparent" />

      <div className="marquee gap-4">
        {items.map((h, i) => (
          <span
            key={i}
            className="mx-2 whitespace-nowrap px-5 py-2 rounded-full glass text-sm font-medium text-gray-700 dark:text-gray-200">
            {h}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
