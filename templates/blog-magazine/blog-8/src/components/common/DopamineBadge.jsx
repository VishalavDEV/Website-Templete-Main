import React from 'react';
import { motion } from 'framer-motion';
import { stickerHover } from '../../utils/motion';
import clsx from 'clsx';

export function DopamineBadge({
  children,
  variant = 'pink',
  className = '',
  icon: Icon,
  size = 'md',
  onClick
}) {
  const variantStyles = {
    pink: 'bg-[#FF007A] text-white shadow-[3px_3px_0px_#0A0A0E]',
    blue: 'bg-[#0047FF] text-white shadow-[3px_3px_0px_#0A0A0E]',
    lime: 'bg-[#10FF70] text-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E]',
    yellow: 'bg-[#FFE600] text-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E]',
    purple: 'bg-[#9D00FF] text-white shadow-[3px_3px_0px_#0A0A0E]',
    orange: 'bg-[#FF5500] text-white shadow-[3px_3px_0px_#0A0A0E]',
    white: 'bg-white text-[#0A0A0E] shadow-[3px_3px_0px_#0A0A0E]'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-wide',
    lg: 'text-sm px-4 py-1.5 font-bold'
  };

  return (
    <motion.span
      variants={stickerHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1.5 font-mono uppercase font-extrabold border-2 border-[#0A0A0E] cursor-default select-none rounded-none',
        variantStyles[variant] || variantStyles.pink,
        sizeStyles[size] || sizeStyles.md,
        onClick && 'cursor-pointer',
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 stroke-[2.5]" />}
      {children}
    </motion.span>
  );
}

export default DopamineBadge;
