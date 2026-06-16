import { motion } from "framer-motion";

const stages = [
  { name: "Apache Airflow", note: "DAG · ingest_healthcare", pct: 100, color: "from-emerald-500 to-teal-400", dot: "bg-emerald-400" },
  { name: "Apache Kafka", note: "stream · async queue", pct: 82, color: "from-indigo-500 to-violet-400", dot: "bg-indigo-400" },
  { name: "AWS S3 + Lambda", note: "event · file upload", pct: 64, color: "from-amber-500 to-orange-400", dot: "bg-amber-400" },
  { name: "OpenSearch", note: "index · 2700+ hospitals", pct: 91, color: "from-cyan-500 to-sky-400", dot: "bg-cyan-400" },
];

const HeroVisual = () => {
  return (
    <div className="glass rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200/60 dark:border-white/10 bg-black/5 dark:bg-black/30">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 font-mono text-xs text-gray-500 dark:text-gray-400">
          data-pipeline
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-emerald-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          live
        </span>
      </div>

      {/* pipeline stages */}
      <div className="p-5 space-y-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${s.dot} animate-pulse`} />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {s.name}
                </span>
              </div>
              <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500">
                {s.pct}%
              </span>
            </div>
            <div className="font-mono text-[11px] text-gray-400 dark:text-gray-500 mb-1.5 pl-4">
              {s.note}
            </div>
            <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* footer stat */}
      <div className="px-5 py-3 border-t border-gray-200/60 dark:border-white/10 bg-black/5 dark:bg-black/20 flex items-center justify-between font-mono text-[11px]">
        <span className="text-gray-500 dark:text-gray-400">
          throughput
        </span>
        <span className="text-emerald-500 font-semibold">
          ▲ 90% manual work automated
        </span>
      </div>
    </div>
  );
};

export default HeroVisual;
