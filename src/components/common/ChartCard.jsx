import React from 'react';
import { motion } from 'framer-motion';

export default function ChartCard({ title, subtitle, action, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {action && (
          <div className="shrink-0">
            {action}
          </div>
        )}
      </div>

      <div className="w-full flex-1 min-h-[260px]">
        {children}
      </div>
    </motion.div>
  );
}
