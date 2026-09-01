import React from 'react';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-500 border border-blue-500/20',
    secondary: 'bg-app-secondary hover:bg-app-hover text-app-primary border border-app focus:ring-gray-400',
    outline: 'border border-app text-app-primary hover:bg-app-hover focus:ring-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 border border-red-500/20',
    ghost: 'text-app-secondary hover:text-app-primary hover:bg-app-hover focus:ring-gray-400',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 border border-emerald-500/20'
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5',
    md: 'text-sm px-3.5 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5'
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        icon && <span className="inline-flex shrink-0">{icon}</span>
      )}
      {children}
    </button>
  );
};
