import React from 'react';

export function Progress({ value = 0, max = 100, className = '' }: { value: number; max?: number; className?: string }) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);
  return (
    <div className={`w-full bg-muted rounded-full h-2 overflow-hidden border border-border ${className}`}>
      <div className="bg-primary h-full rounded-full transition-all duration-300" style={{ width: `${percent}%` }}></div>
    </div>
  );
}
