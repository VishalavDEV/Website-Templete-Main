import React from 'react';

export function Label({ children, className = '', required }: { children: React.ReactNode; className?: string; required?: boolean }) {
  return (
    <label className={`block text-xs font-bold text-foreground select-none uppercase tracking-wider ${className}`}>
      {children}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
  );
}
