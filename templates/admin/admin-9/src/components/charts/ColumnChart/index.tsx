import React from 'react';

export function ColumnChart({ data = [65, 45, 85, 30, 95, 75], labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'], title = 'Quarterly Statistics' }) {
  const maxVal = Math.max(...data, 100);
  return (
    <div className="w-full bg-card border border-border p-5 rounded-xl shadow-sm space-y-4 select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">{title}</h4>
      <div className="h-44 flex items-end justify-between gap-2.5 px-2 bg-muted/10 rounded-lg p-2.5">
        {data.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center h-full justify-end gap-1.5 group">
            <div className="relative w-full flex justify-center items-end h-full">
              <div 
                className="bg-primary hover:bg-primary/90 w-full rounded-t-md transition-all duration-300 relative shadow-sm"
                style={{ height: `${val / maxVal * 100}%` }}
              >
                <div className="hidden group-hover:block absolute bottom-[105%] left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                  {val}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground shrink-0">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
