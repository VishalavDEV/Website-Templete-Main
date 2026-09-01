import React from 'react';

export function DonutChart({ title = 'Asset Segmentations' }) {
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col items-center select-none space-y-3">
      <h4 className="text-xs font-bold text-muted-foreground uppercase w-full">{title}</h4>
      <div className="relative h-32 w-32 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full rotate-[-90deg]">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--primary)" strokeWidth="15" strokeDasharray="125 251" strokeDashoffset="0" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--secondary)" strokeWidth="15" strokeDasharray="75 251" strokeDashoffset="-125" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--accent)" strokeWidth="15" strokeDasharray="51 251" strokeDashoffset="-200" />
        </svg>
        <div className="absolute flex flex-col items-center text-center">
          <span className="text-base font-extrabold text-foreground">251</span>
          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Total</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 text-[10px] font-bold justify-center">
        <div className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary"></span> <span>Sector 1 (50%)</span></div>
        <div className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-secondary"></span> <span>Sector 2 (30%)</span></div>
        <div className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-accent"></span> <span>Sector 3 (20%)</span></div>
      </div>
    </div>
  );
}
