import React from 'react';

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full select-none h-44">
      <div className="h-8 w-8 border-3 border-primary border-t-transparent animate-spin rounded-full"></div>
      <p className="text-[10px] text-muted-foreground font-semibold mt-3 uppercase tracking-wider">Syncing database caches...</p>
    </div>
  );
}
