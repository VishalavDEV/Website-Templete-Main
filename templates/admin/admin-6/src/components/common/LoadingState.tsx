import React from 'react';

interface LoadingStateProps {
  rows?: number;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ rows = 5 }) => {
  return (
    <div className="w-full space-y-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl animate-pulse">
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/4 mb-4"></div>
      {Array.from({ length: rows }).map((_, idx) => (
        <div key={idx} className="flex items-center gap-4 py-2">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/6"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/6 ml-auto"></div>
        </div>
      ))}
    </div>
  );
};
