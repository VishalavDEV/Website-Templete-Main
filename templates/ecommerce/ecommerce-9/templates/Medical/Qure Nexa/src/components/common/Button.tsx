import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'emergency' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.97]';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:via-teal-600 hover:to-emerald-600 text-white shadow-md hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5 border border-teal-400/30 focus:ring-teal-500',
    secondary: 'bg-teal-50/90 text-teal-800 hover:bg-teal-100 hover:text-teal-900 border border-teal-200/80 hover:border-teal-300 focus:ring-teal-500 shadow-2xs hover:-translate-y-0.5',
    outline: 'bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 border border-slate-300 hover:border-teal-500 hover:text-teal-700 focus:ring-teal-500 shadow-2xs hover:shadow-md hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-slate-100/80 text-slate-700 hover:text-slate-900 focus:ring-slate-400',
    danger: 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white shadow-md hover:shadow-lg focus:ring-rose-500 border border-transparent hover:-translate-y-0.5',
    emergency: 'bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/40 focus:ring-red-500 animate-pulse border border-rose-400/40',
    glass: 'bg-white/30 backdrop-blur-xl hover:bg-white/40 text-slate-800 border border-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-0.5'
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-bold'
  };

  return (
    <button
      id={id}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
