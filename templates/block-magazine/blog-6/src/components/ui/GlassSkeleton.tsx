import React from 'react';

export const GlassSkeleton: React.FC<{ className?: string }> = ({ className = 'h-64' }) => {
  return (
    <div className={`w-full rounded-3xl glass-card-airy bg-slate-100/60 animate-pulse border border-slate-200/50 ${className}`} />
  );
};
