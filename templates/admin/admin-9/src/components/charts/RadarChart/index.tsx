import React from 'react';

export function RadarChart({ title = 'Skill Distribution' }) {
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col items-center select-none space-y-3">
      <h4 className="text-xs font-bold text-muted-foreground uppercase w-full">{title}</h4>
      <svg viewBox="0 0 120 120" className="h-32 w-32 shrink-0 text-primary">
        {/* Poly webbing */}
        <polygon points="60,10 102,40 102,90 60,110 18,90 18,40" fill="none" stroke="currentColor" strokeOpacity="0.1" />
        <polygon points="60,35 88,55 88,80 60,90 32,80 32,55" fill="none" stroke="currentColor" strokeOpacity="0.1" />
        {/* Radar Fill */}
        <polygon points="60,20 90,45 80,85 60,80 40,70 28,45" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="text-[10px] text-muted-foreground font-bold">Mock Attribute Metrics Web</div>
    </div>
  );
}
