import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'outline' | 'surface';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-[11px] font-bold tracking-widest uppercase',
    md: 'px-4 py-1.5 text-xs font-bold tracking-widest uppercase',
  };

  const variantClasses = {
    accent: 'bg-[var(--accent-color)] text-[#0A0A0A]',
    outline: 'border border-[var(--border-color)] text-[var(--secondary-color)] bg-transparent',
    surface: 'bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};
