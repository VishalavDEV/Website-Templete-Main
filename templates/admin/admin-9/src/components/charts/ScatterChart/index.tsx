import React from 'react';

export function ScatterChart({ title = 'Correlation Plot' }) {
  const points = [
    { x: 20, y: 80 }, { x: 40, y: 70 }, { x: 50, y: 50 },
    { x: 60, y: 40 }, { x: 75, y: 35 }, { x: 80, y: 20 }
  ];
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-3 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <svg viewBox="0 0 100 100" className="w-full h-36 bg-muted/10 border border-border/30 rounded-lg p-2 text-primary">
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3.5" className="fill-primary stroke-card stroke-[1.5]" />
        ))}
      </svg>
    </div>
  );
}
