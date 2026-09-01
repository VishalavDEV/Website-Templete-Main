import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'indigo' | 'slate' | 'green' | 'blue' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'indigo',
  size = 'md',
  icon,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px] font-bold tracking-widest gap-1',
    md: 'px-2.5 py-1 text-xs font-bold tracking-wider gap-1.5'
  };

  const variantClasses = {
    indigo: 'bg-indigo-50 text-indigo-700 border border-indigo-200/80',
    amber: 'bg-amber-50 text-amber-900 border border-amber-300/80',
    slate: 'bg-slate-100 text-slate-800 border border-slate-200',
    green: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    blue: 'bg-blue-50 text-blue-800 border border-blue-200',
    dark: 'bg-slate-900 text-indigo-400 border border-slate-700',
    outline: 'bg-transparent text-slate-700 border border-slate-300'
  };

  return (
    <span
      className={`inline-flex items-center rounded-sm uppercase ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </span>
  );
};

