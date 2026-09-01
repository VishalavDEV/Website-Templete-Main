/* src/components/common/Logo.tsx */
import React from 'react';
import { Layers } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-extrabold shadow-sm">
        <Layers className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-black tracking-wider uppercase text-foreground leading-none">Tis</span>
        <span className="text-[9px] font-bold text-muted-foreground uppercase leading-none mt-0.5">Admin</span>
      </div>
    </div>
  );
}
