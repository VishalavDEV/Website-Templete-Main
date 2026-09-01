import React from 'react';

export interface ActivityProps {
  user: string;
  action: string;
  target: string;
  time: string;
}

export function ActivityItem({ user = 'Alice Smith', action = 'updated authorization file', target = 'SEC-A992', time = '12 mins ago' }: ActivityProps) {
  return (
    <div className="flex gap-3 text-xs py-2 select-none border-b border-border/40 last:border-0">
      <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
      <div className="flex-1 min-w-0">
        <p className="text-foreground">
          <strong className="font-bold">{user}</strong> <span className="text-muted-foreground">{action}</span> <strong className="font-semibold text-primary">{target}</strong>
        </p>
        <p className="text-[10px] text-muted-foreground/60 mt-0.5">{time}</p>
      </div>
    </div>
  );
}
