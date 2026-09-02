import React from 'react';
import { Activity, HeartPulse } from 'lucide-react';

export function HealthLogo({ className = "h-5 text-[#E82127]" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-lg bg-[#E82127] text-white flex items-center justify-center shadow-xs">
        <HeartPulse className="w-4 h-4 animate-pulse" />
      </div>
      <span className="font-extrabold tracking-[0.22em] text-sm text-[#111827] uppercase">
        TELE<span className="text-[#E82127]">CARE</span>
      </span>
    </div>
  );
}
