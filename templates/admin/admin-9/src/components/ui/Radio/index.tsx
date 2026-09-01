import React from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 select-none">
        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
          <input
            type="radio"
            ref={ref}
            className={`h-4.5 w-4.5 rounded-full border border-input bg-card text-primary focus:ring-ring focus:ring-2 focus:ring-offset-background cursor-pointer ${className}`}
            {...props}
          />
          <span className="text-foreground">{label}</span>
        </label>
        {error && <p className="text-[10px] text-destructive">{error}</p>}
      </div>
    );
  }
);
Radio.displayName = 'Radio';
