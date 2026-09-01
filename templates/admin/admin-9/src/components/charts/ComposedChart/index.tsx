import React from 'react';

export function ComposedChart({ title = 'Revenue vs Conversions' }) {
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-3 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <svg viewBox="0 0 200 100" className="w-full h-36 text-primary">
        {/* Columns */}
        <rect x="25" y="30" width="15" height="60" rx="2" className="fill-primary/20" />
        <rect x="65" y="15" width="15" height="75" rx="2" className="fill-primary/20" />
        <rect x="105" y="45" width="15" height="45" rx="2" className="fill-primary/20" />
        <rect x="145" y="25" width="15" height="65" rx="2" className="fill-primary/20" />
        
        {/* Line */}
        <polyline fill="none" stroke="var(--secondary)" strokeWidth="2" points="32.5,50 72.5,25 112.5,60 152.5,35" />
        <circle cx="72.5" cy="25" r="3" className="fill-card stroke-secondary stroke-2" />
        <circle cx="112.5" cy="60" r="3" className="fill-card stroke-secondary stroke-2" />
      </svg>
    </div>
  );
}
