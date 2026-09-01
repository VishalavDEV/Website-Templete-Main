import React from 'react';
import { motion } from 'framer-motion';
import { brutalistHover } from '../../utils/motion';
import clsx from 'clsx';

export function MaximalistButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  ...props
}) {
  const variants = {
    primary: 'bg-[#FF007A] text-white hover:bg-[#FF1A88]',
    secondary: 'bg-[#0047FF] text-white hover:bg-[#1A5CFF]',
    accent: 'bg-[#10FF70] text-[#0A0A0E] hover:bg-[#33FF85]',
    yellow: 'bg-[#FFE600] text-[#0A0A0E] hover:bg-[#FFF033]',
    black: 'bg-[#0A0A0E] text-white hover:bg-[#2C2D35]',
    outline: 'bg-white text-[#0A0A0E] hover:bg-[#FFEBF3]'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-bold gap-1.5',
    md: 'px-5 py-2.5 text-sm font-extrabold gap-2',
    lg: 'px-7 py-3.5 text-base font-black gap-2.5'
  };

  return (
    <motion.button
      variants={brutalistHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center font-heading uppercase tracking-wider border-2 border-[#0A0A0E] cursor-pointer transition-colors select-none',
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 stroke-[2.5]" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 stroke-[2.5]" />}
    </motion.button>
  );
}

export default MaximalistButton;
