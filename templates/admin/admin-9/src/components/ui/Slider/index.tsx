import React from 'react';

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        type="range"
        ref={ref}
        className={`w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer border border-border accent-primary focus:outline-none ${className}`}
        {...props}
      />
    );
  }
);
Slider.displayName = 'Slider';
