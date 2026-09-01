import React from 'react';

export function BarChart({ data = [45, 80, 55, 95], labels = ['Node A', 'Node B', 'Node C', 'Node D'], title = 'Horizontal Bars' }) {
  const maxVal = Math.max(...data, 100);
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-4 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <div className="space-y-3">
        {data.map((val, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-16 text-xs text-muted-foreground font-semibold truncate text-right">{labels[i]}</span>
            <div className="flex-1 bg-muted rounded-full h-3.5 overflow-hidden border border-border/30">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${val / maxVal * 100}%` }}
              ></div>
            </div>
            <span className="w-8 text-xs text-foreground font-bold">{val}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
