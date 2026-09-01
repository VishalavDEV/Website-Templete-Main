import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface TactileButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  primary: 'bg-slate-900 hover:bg-blue-600 text-white shadow-md hover:shadow-blue-500/20',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200',
  glass: 'glass-card-airy bg-white/90 hover:bg-white text-slate-800 border border-white/90 shadow-sm hover:shadow-md',
  ghost: 'bg-transparent hover:bg-slate-100/80 text-slate-700 hover:text-slate-900',
  accent: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs rounded-full',
  md: 'px-5 py-2.5 text-xs font-semibold rounded-full',
  lg: 'px-7 py-3.5 text-sm font-bold rounded-full',
};

export const TactileButton: React.FC<TactileButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 20,
        mass: 0.7,
      }}
      className={`inline-flex items-center justify-center gap-2 tracking-tight transition-colors duration-200 cursor-pointer select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
