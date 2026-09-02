import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'flat' | 'dark' | 'outline' | 'glass';
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  onClick,
  id
}) => {
  const variantStyles = {
    default: 'bg-white border border-slate-200 shadow-sm text-slate-900',
    flat: 'bg-slate-50 border border-slate-200 text-slate-900',
    dark: 'bg-[#0B1325] border border-slate-800 text-white shadow-xl',
    outline: 'bg-transparent border border-slate-300 text-slate-900',
    glass: 'bg-white/90 backdrop-blur-md border border-slate-200 shadow-md text-slate-900'
  };

  const hoverStyle = hoverEffect
    ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/50 cursor-pointer'
    : '';

  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-md overflow-hidden p-6 md:p-8 ${variantStyles[variant]} ${hoverStyle} ${className}`}
    >
      {children}
    </div>
  );
};
