import React from 'react';

export function Heatmap({ title = 'Server Load Matrix' }) {
  const rows = 4;
  const cols = 8;
  const loadColors = [
    'bg-primary/5 border-border/20', 
    'bg-primary/20 border-primary/10', 
    'bg-primary/50 border-primary/30', 
    'bg-primary border-primary/40'
  ];

  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-3 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <div className="grid grid-rows-4 gap-1">
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex gap-1 justify-between">
            {Array.from({ length: cols }).map((_, c) => {
              const weight = Math.floor(Math.random() * loadColors.length);
              return (
                <div 
                  key={c} 
                  className={`flex-1 aspect-square rounded border ${loadColors[weight]} hover:scale-105 transition-transform cursor-pointer`}
                  title={`Cell R${r+1}C${c+1}: Load ${weight}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
