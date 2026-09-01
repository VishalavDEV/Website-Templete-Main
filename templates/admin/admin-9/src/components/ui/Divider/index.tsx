import React from 'react';

export function Divider({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  if (children) {
    return (
      <div className={`flex items-center w-full my-4 text-xs font-medium text-muted-foreground/60 select-none ${className}`}>
        <div className="flex-1 border-t border-border/60"></div>
        <span className="mx-4">{children}</span>
        <div className="flex-1 border-t border-border/60"></div>
      </div>
    );
  }
  return <hr className={`border-t border-border my-4 w-full ${className}`} />;
}
