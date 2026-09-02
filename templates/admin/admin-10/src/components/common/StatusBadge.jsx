import React from 'react';

export default function StatusBadge({ status }) {
  const getBadgeStyle = (statusVal) => {
    const s = String(statusVal).toLowerCase();
    switch (s) {
      case 'completed':
      case 'active':
      case 'in stock':
      case 'ready':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/50';
      case 'processing':
      case 'pending':
      case 'low stock':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/50';
      case 'cancelled':
      case 'suspended':
      case 'out of stock':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800/50';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
    }
  };

  const getDotColor = (statusVal) => {
    const s = String(statusVal).toLowerCase();
    switch (s) {
      case 'completed':
      case 'active':
      case 'in stock':
      case 'ready':
        return 'bg-emerald-500';
      case 'processing':
      case 'pending':
      case 'low stock':
        return 'bg-amber-500';
      case 'cancelled':
      case 'suspended':
      case 'out of stock':
        return 'bg-rose-500';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(status)} transition-colors duration-150`}>
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(status)} animate-pulse-subtle`} />
      {status}
    </span>
  );
}
