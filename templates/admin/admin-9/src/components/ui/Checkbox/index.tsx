import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 select-none">
        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
          <input
            type="checkbox"
            ref={ref}
            className={`h-4.5 w-4.5 rounded border border-input bg-card text-primary focus:ring-ring focus:ring-offset-background focus:ring-2 cursor-pointer checked:bg-primary ${className}`}
            {...props}
          />
          <span className="text-foreground">{label}</span>
        </label>
        {error && <p className="text-[10px] text-destructive">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';
