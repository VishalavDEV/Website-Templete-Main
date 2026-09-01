import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'link' | 'fab';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    const baseStyle = 'inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm active:scale-98',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/95 shadow-sm active:scale-98',
      outline: 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground',
      ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
      success: 'bg-success text-success-foreground hover:bg-success/90 shadow-sm active:scale-98',
      link: 'bg-transparent text-primary hover:underline p-0 underline-offset-4',
      fab: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl hover:scale-105 rounded-full aspect-square',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

export function ButtonGroup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex rounded-lg border border-border bg-card overflow-hidden divide-x divide-border shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function SplitButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-lg shadow-sm bg-primary text-primary-foreground divide-x divide-primary-foreground/20">
      <button onClick={onClick} className="px-4 py-2 text-sm font-medium hover:bg-primary/90 rounded-l-lg transition-colors cursor-pointer">
        {label}
      </button>
      <div className="relative group h-full">
        <button className="px-2.5 py-2 hover:bg-primary/90 rounded-r-lg transition-colors cursor-pointer h-full flex items-center">
          ▼
        </button>
        <div className="hidden group-hover:block absolute right-0 mt-1 w-40 bg-card text-foreground rounded-lg border border-border shadow-xl p-1 z-50">
          {children}
        </div>
      </div>
    </div>
  );
}
