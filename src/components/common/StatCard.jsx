import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, change, isPositive, icon: Icon, color = "brand", delay = 0 }) {
  const colorStyles = {
    brand: {
      bg: 'bg-blue-50 dark:bg-blue-950/40 text-brand-600 dark:text-brand-400 border-blue-100 dark:border-blue-900/50',
      pill: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/50',
      pill: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400'
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50',
      pill: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400'
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/50',
      pill: 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400'
    }
  };

  const currentTheme = colorStyles[color] || colorStyles.brand;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background Accent Glow */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800/30 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
          {title}
        </span>
        <div className={`p-3 rounded-xl border ${currentTheme.bg} transition-transform duration-200 group-hover:scale-110`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between relative z-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {value}
        </h3>

        <div className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
          isPositive
            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50'
            : 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-3.5 h-3.5" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5" />
          )}
          <span>{change}</span>
        </div>
      </div>

      <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 relative z-10">
        vs. previous month
      </p>
    </motion.div>
  );
}
