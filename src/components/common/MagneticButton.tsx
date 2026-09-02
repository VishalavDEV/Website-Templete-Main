import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  magneticStrength?: number;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  magneticStrength = 0.25,
  download,
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * magneticStrength;
    const y = (clientY - (top + height / 2)) * magneticStrength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3 text-xs md:text-sm font-semibold',
    lg: 'px-8 py-4 text-sm md:text-base font-bold',
  };

  const variantClasses = {
    primary:
      'relative group bg-slate-900 text-white shadow-lg shadow-blue-500/10 hover:bg-blue-600 hover:shadow-blue-500/25 overflow-hidden transition-all duration-300',
    secondary:
      'bg-white text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 border border-slate-200/90 shadow-sm transition-all',
    outline:
      'border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all bg-white shadow-sm',
    ghost:
      'text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-all',
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 15, mass: 0.1 }}
      className={cn(
        'inline-flex items-center justify-center gap-2.5 rounded-full tracking-wide transition-all cursor-pointer select-none',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block outline-none">
      {content}
    </button>
  );
};
