import React, { useState } from 'react';
import { Eye, EyeOff, Search } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefixText?: string;
  suffixText?: string;
  isFloating?: boolean;
  isInline?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', label, error, leftIcon, rightIcon, prefixText, suffixText, isFloating, isInline, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const computedType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const inputWrapperClass = `flex items-center w-full rounded-lg border border-input bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${
      error ? 'border-destructive' : ''
    }`;

    const innerInput = (
      <div className="relative w-full">
        {isFloating && (
          <label className="absolute left-3 top-[-8px] bg-card px-1 text-[10px] font-medium text-muted-foreground transition-all">
            {label}
          </label>
        )}
        <div className={inputWrapperClass}>
          {prefixText && <span className="text-muted-foreground mr-1.5 font-medium select-none text-xs">{prefixText}</span>}
          {leftIcon && <span className="text-muted-foreground mr-2">{leftIcon}</span>}
          {type === 'search' && !leftIcon && <Search className="h-4 w-4 text-muted-foreground mr-2" />}
          
          <input
            type={computedType}
            ref={ref}
            className={`w-full bg-transparent focus:outline-none placeholder:text-muted-foreground/60 text-foreground disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
          />

          {suffixText && <span className="text-muted-foreground ml-1.5 font-medium select-none text-xs">{suffixText}</span>}
          {rightIcon && !isPassword && <span className="text-muted-foreground ml-2">{rightIcon}</span>}
          
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>
        {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
      </div>
    );

    if (isInline) {
      return (
        <div className="flex flex-row items-center gap-4 w-full">
          {label && (
            <label className="w-1/3 text-sm font-medium text-foreground text-right">
              {label}
            </label>
          )}
          <div className="flex-1">{innerInput}</div>
        </div>
      );
    }

    return (
      <div className="w-full space-y-1.5">
        {label && !isFloating && (
          <label className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        {innerInput}
      </div>
    );
  }
);
Input.displayName = 'Input';
