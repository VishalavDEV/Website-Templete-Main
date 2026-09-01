import React from 'react';

export function StatusIndicator({ status = 'online' }: { status?: 'online' | 'offline' | 'busy' | 'away' }) {
  const colors = {
    online: 'bg-success',
    offline: 'bg-muted-foreground',
    busy: 'bg-destructive',
    away: 'bg-warning',
  };
  return (
    <span className="flex items-center gap-1.5 select-none text-[10px] font-bold text-muted-foreground uppercase">
      <span className={`h-2 w-2 rounded-full ${colors[status]}`}></span>
      <span>{status}</span>
    </span>
  );
}
