import React from 'react';
import { clsx } from 'clsx';

export type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'purple'
  | 'neutral'
  | 'in_progress'
  | 'completed'
  | 'urgent';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot = false
}) => {
  const styles: Record<BadgeVariant, string> = {
    default: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    success: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    completed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    danger: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    urgent: 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-semibold animate-pulse',
    info: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    in_progress: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    neutral: 'bg-gray-500/15 text-gray-400 border-gray-500/30'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px] font-medium',
    md: 'px-2.5 py-1 text-xs font-medium'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-md border tracking-wide',
        styles[variant] || styles.default,
        sizes[size],
        className
      )}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
};
