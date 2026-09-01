import React from 'react';

export function GaugeChart({ percent = 70, title = 'System Performance' }) {
  // SVG circular arc dashmath
  const r = 35;
  const circ = 2 * Math.PI * r;
  const strokeDash = circ / 2; // half circle gauge
  const filledDash = (percent / 100) * strokeDash;

  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col items-center select-none space-y-3">
      <h4 className="text-xs font-bold text-muted-foreground uppercase w-full">{title}</h4>
      <div className="relative h-32 w-32 flex items-center justify-center shrink-0 overflow-hidden">
        <svg viewBox="0 0 100 100" className="h-full w-full rotate-[-180deg]">
          <circle cx="50" cy="50" r={r} fill="transparent" stroke="var(--border)" strokeWidth="8" strokeDasharray={`${strokeDash} ${circ}`} strokeLinecap="round" />
          <circle cx="50" cy="50" r={r} fill="transparent" stroke="var(--primary)" strokeWidth="8" strokeDasharray={`${filledDash} ${circ}`} strokeLinecap="round" />
        </svg>
        <div className="absolute top-[40%] text-center">
          <span className="text-2xl font-extrabold text-foreground">{percent}%</span>
          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Utilization</p>
        </div>
      </div>
    </div>
  );
}
