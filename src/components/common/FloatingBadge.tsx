import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FloatingBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  children,
  icon,
  className,
  delay = 0,
  duration = 6,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay,
        },
      }}
      className={cn(
        'inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card backdrop-blur-xl',
        'border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30',
        'text-xs md:text-sm font-medium text-neutral-800 dark:text-neutral-200',
        className
      )}
    >
      {icon && <div className="text-cyan-500 dark:text-cyan-400">{icon}</div>}
      <span>{children}</span>
    </motion.div>
  );
};
