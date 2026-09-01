import React from 'react';

interface BadgeProps {
  id?: string;
  variant?: 'teal' | 'blue' | 'emerald' | 'amber' | 'rose' | 'slate' | 'purple' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  id,
  variant = 'teal',
  size = 'md',
  children,
  className = '',
  dot = false
}) => {
  const variantStyles = {
    teal: 'bg-teal-50/90 text-teal-800 border-teal-200/80 shadow-2xs',
    blue: 'bg-sky-50/90 text-sky-800 border-sky-200/80 shadow-2xs',
    emerald: 'bg-emerald-50/90 text-emerald-800 border-emerald-200/80 shadow-2xs',
    amber: 'bg-amber-50/90 text-amber-900 border-amber-200/80 shadow-2xs',
    rose: 'bg-rose-50/90 text-rose-800 border-rose-200/80 shadow-2xs',
    slate: 'bg-slate-100/90 text-slate-700 border-slate-200 shadow-2xs',
    purple: 'bg-purple-50/90 text-purple-800 border-purple-200/80 shadow-2xs',
    glass: 'bg-white/40 backdrop-blur-md text-slate-900 border-white/60 shadow-md'
  };

  const dotColors = {
    teal: 'bg-teal-500',
    blue: 'bg-sky-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
    slate: 'bg-slate-500',
    purple: 'bg-purple-500',
    glass: 'bg-teal-500'
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-wider',
    md: 'text-xs px-3 py-1 font-bold tracking-wide',
    lg: 'text-sm px-3.5 py-1.5 font-extrabold tracking-wide'
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-sm whitespace-nowrap leading-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} shrink-0 animate-pulse`} />}
      {children}
    </span>
  );
};
