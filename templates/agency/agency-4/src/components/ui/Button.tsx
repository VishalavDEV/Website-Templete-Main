import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'terracotta-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D96B43] focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-5 py-2 text-xs tracking-wider uppercase',
    md: 'px-7 py-3 text-sm tracking-wide',
    lg: 'px-9 py-4 text-base tracking-wide font-semibold'
  };

  const variantStyles = {
    primary: 'bg-[#D96B43] text-white hover:bg-[#C25832] shadow-sm hover:shadow-md hover:shadow-[#D96B43]/20',
    secondary: 'bg-[#1A1918] text-white hover:bg-[#2A2826] shadow-sm',
    outline: 'border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white',
    'terracotta-outline': 'border border-[#D96B43] text-[#D96B43] hover:bg-[#D96B43] hover:text-white',
    ghost: 'text-[#1A1918] hover:text-[#D96B43] hover:bg-[#F5F2EC]'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.button>
  );
};
