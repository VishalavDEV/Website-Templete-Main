import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'indigo' | 'slate' | 'emerald' | 'purple' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  icon
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium",
    md: "px-3 py-1 text-xs font-medium tracking-wide uppercase"
  };

  const variantStyles = {
    blue: "bg-zinc-100 text-zinc-900 border border-zinc-300/80",
    indigo: "bg-slate-100 text-slate-900 border border-slate-300/80",
    slate: "bg-slate-100 text-slate-800 border border-slate-200/80",
    emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    purple: "bg-purple-50 text-purple-800 border border-purple-200",
    amber: "bg-amber-50 text-amber-800 border border-amber-200"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </span>
  );
};
