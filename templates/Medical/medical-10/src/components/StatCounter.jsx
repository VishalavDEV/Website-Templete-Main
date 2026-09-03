import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCounter({ value, suffix = "", title, icon: Icon }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = numericValue / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4">
        {Icon && (
          <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Icon className="w-7 h-7" />
          </div>
        )}
        <div>
          <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">
            {count}
            {suffix || value.replace(/[0-9]/g, "")}
          </div>
          <div className="text-sm font-medium text-slate-400 mt-1">{title}</div>
        </div>
      </div>
    </motion.div>
  );
}
