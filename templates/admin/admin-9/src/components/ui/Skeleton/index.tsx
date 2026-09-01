import React from 'react';

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-muted animate-pulse rounded-md border border-border/20 ${className}`}></div>
  );
}
