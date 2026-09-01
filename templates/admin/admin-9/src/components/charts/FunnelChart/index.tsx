import React from 'react';

export function FunnelChart({ title = 'Conversion Funnel' }) {
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-3 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <svg viewBox="0 0 200 100" className="w-full h-36 text-primary flex justify-center">
        {/* Funnel segments */}
        <polygon points="20,10 180,10 160,30 40,30" className="fill-primary/80" />
        <polygon points="42,32 158,32 140,55 60,55" className="fill-primary/60" />
        <polygon points="62,57 138,57 120,80 80,80" className="fill-primary/45" />
      </svg>
    </div>
  );
}
