import React from 'react';

export function ProgressChart({ value = 75, max = 100, title = 'Task Progress' }) {
  const pct = (value / max) * 100;
  return (
    <div className="w-full bg-card border border-border p-4 rounded-xl shadow-sm flex items-center gap-4 select-none">
      <div className="relative h-14 w-14 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
          <path className="text-muted" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="text-primary" stroke="currentColor" strokeWidth="3" strokeDasharray={`${pct}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <span className="absolute text-xs font-bold text-foreground">{Math.round(pct)}%</span>
      </div>
      <div>
        <h4 className="text-xs font-bold text-foreground">{title}</h4>
        <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">Mock completion ratios</p>
      </div>
    </div>
  );
}
