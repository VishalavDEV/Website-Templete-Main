import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'info' | 'dot' | 'status';
  isOnline?: boolean;
}

export function Badge({ className = '', variant = 'default', isOnline, children, ...props }: BadgeProps) {
  const baseStyle = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold transition-all';
  
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground shadow-sm',
    secondary: 'border-transparent bg-secondary text-secondary-foreground shadow-sm',
    outline: 'text-foreground border-border bg-transparent',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    success: 'border-transparent bg-success text-success-foreground',
    warning: 'border-transparent bg-warning text-warning-foreground',
    info: 'border-transparent bg-info text-info-foreground',
    dot: 'border-0 bg-transparent p-0 flex items-center gap-1.5 text-foreground font-medium',
    status: 'border-0 px-2 py-1 rounded text-[11px] uppercase font-bold tracking-wider',
  };

  if (variant === 'dot') {
    return (
      <span className={`${variants.dot} ${className}`} {...props}>
        <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-success' : 'bg-muted-foreground'}`}></span>
        <span>{children}</span>
      </span>
    );
  }

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
