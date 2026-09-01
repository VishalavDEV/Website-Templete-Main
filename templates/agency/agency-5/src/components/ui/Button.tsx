import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { useCustomCursor } from '../../hooks/useCustomCursor';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  showIcon?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  showIcon = true,
  isLoading = false,
  children,
  className = '',
  onMouseEnter,
  onMouseLeave,
  disabled,
  ...props
}) => {
  const { setCursorHover, resetCursor } = useCustomCursor();

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider uppercase',
    md: 'px-6 py-3.5 text-xs md:text-sm font-bold tracking-wider uppercase',
    lg: 'px-8 py-4 text-sm md:text-base font-bold tracking-wider uppercase',
  };

  const variantClasses = {
    primary:
      'bg-[var(--accent-color)] text-[#0A0A0A] hover:bg-[#b8f522] border border-transparent shadow-lg shadow-[var(--accent-color)]/10',
    secondary:
      'bg-[var(--text-color)] text-[var(--bg-color)] hover:opacity-90 border border-transparent',
    outline:
      'bg-transparent text-[var(--text-color)] border border-[var(--border-color)] hover:border-[var(--text-color)] hover:bg-[var(--card-hover)]',
    text:
      'bg-transparent text-[var(--text-color)] hover:text-[var(--accent-color)] p-0 border-none underline-offset-4 hover:underline',
  };

  const baseClasses = `relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${
    sizeClasses[size]
  } ${variantClasses[variant]} ${className}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setCursorHover();
    if (onMouseEnter) onMouseEnter(e as any);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    resetCursor();
    if (onMouseLeave) onMouseLeave(e as any);
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-1" />
      ) : null}
      <span>{children}</span>
      {showIcon && variant !== 'text' && !isLoading && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${baseClasses}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={`group ${baseClasses}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`group ${baseClasses}`}
      disabled={disabled || isLoading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </button>
  );
};
