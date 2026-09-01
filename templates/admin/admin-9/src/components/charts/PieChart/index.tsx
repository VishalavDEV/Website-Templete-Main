import React from 'react';

export function PieChart({ title = 'Distribution Pie' }) {
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col items-center select-none space-y-3">
      <h4 className="text-xs font-bold text-muted-foreground uppercase w-full">{title}</h4>
      <svg viewBox="0 0 100 100" className="h-32 w-32 shrink-0">
        <circle cx="50" cy="50" r="25" fill="transparent" stroke="var(--primary)" strokeWidth="50" strokeDasharray="78 158" strokeDashoffset="0" />
        <circle cx="50" cy="50" r="25" fill="transparent" stroke="var(--secondary)" strokeWidth="50" strokeDasharray="40 158" strokeDashoffset="-78" />
        <circle cx="50" cy="50" r="25" fill="transparent" stroke="var(--border)" strokeWidth="50" strokeDasharray="40 158" strokeDashoffset="-118" />
      </svg>
      <div className="flex gap-4 text-xs font-semibold justify-center">
        <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded bg-primary"></span> <span>Node A (50%)</span></div>
        <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded bg-secondary"></span> <span>Node B (25%)</span></div>
      </div>
    </div>
  );
}
