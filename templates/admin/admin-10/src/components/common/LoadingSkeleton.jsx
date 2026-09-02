import React from 'react';

export function StatCardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm animate-pulse space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-28"></div>
        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
      </div>
      <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-36"></div>
      <div className="flex items-center gap-2">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-16"></div>
        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-24"></div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="animate-pulse border-b border-slate-100 dark:border-slate-800/60">
      <td className="py-4 px-4"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-20"></div></td>
      <td className="py-4 px-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-28"></div></div></td>
      <td className="py-4 px-4"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-32"></div></td>
      <td className="py-4 px-4"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-16"></div></td>
      <td className="py-4 px-4"><div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-20"></div></td>
      <td className="py-4 px-4"><div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-16 ml-auto"></div></td>
    </tr>
  );
}
