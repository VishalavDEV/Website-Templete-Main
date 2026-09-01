import React from 'react';

export interface TimelineItem {
  title: string;
  description: string;
  time: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-6 relative pl-6 border-l border-border/80 ml-3">
      {items.map((item, i) => (
        <div key={i} className="relative space-y-1">
          {/* Timeline Dot */}
          <span className="absolute -left-[30px] top-1 h-3.5 w-3.5 rounded-full bg-primary border-2 border-card flex items-center justify-center shadow-sm"></span>
          <div className="flex justify-between items-baseline gap-4">
            <h4 className="text-xs font-bold text-foreground">{item.title}</h4>
            <span className="text-[10px] text-muted-foreground/60 font-semibold">{item.time}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
