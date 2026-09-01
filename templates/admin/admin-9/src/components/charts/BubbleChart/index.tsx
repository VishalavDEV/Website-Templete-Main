import React from 'react';

export function BubbleChart({ title = '3D Volume Distribution' }) {
  const bubbles = [
    { x: 20, y: 80, r: 6 },
    { x: 50, y: 40, r: 12 },
    { x: 75, y: 65, r: 8 },
    { x: 85, y: 25, r: 15 }
  ];
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-3 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <svg viewBox="0 0 100 100" className="w-full h-36 bg-muted/10 border border-border/30 rounded-lg p-2 text-secondary">
        {bubbles.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.r} className="fill-secondary/30 stroke-secondary stroke-1.5" />
        ))}
      </svg>
    </div>
  );
}
