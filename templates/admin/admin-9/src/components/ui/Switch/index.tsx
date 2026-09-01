import React from 'react';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = '', label, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            className="sr-only peer"
            {...props}
          />
          <div className="w-9 h-5 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:border-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
        </div>
        {label && <span className="text-xs font-semibold text-foreground">{label}</span>}
      </label>
    );
  }
);
Switch.displayName = 'Switch';
