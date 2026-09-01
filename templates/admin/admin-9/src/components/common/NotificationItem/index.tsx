import React from 'react';
import { Bell } from 'lucide-react';

export function NotificationItem() {
  return (
    <div className="flex gap-3 p-3.5 bg-card border border-border rounded-xl max-w-sm select-none shadow-sm animate-in fade-in duration-200">
      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><Bell className="h-4 w-4" /></div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-foreground">SSL Credentials updated</p>
        <p className="text-[10px] text-muted-foreground mt-0.5 truncate">Server nodes successfully synced SSL certifications.</p>
      </div>
    </div>
  );
}
