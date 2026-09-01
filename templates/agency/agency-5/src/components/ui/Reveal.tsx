import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  width?: 'fit-content' | '100%';
  distance?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  width = '100%',
  distance = 35,
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || direction === 'none') {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: direction === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
      style={{ width: width === 'fit-content' ? 'fit-content' : '100%' }}
    >
      {children}
    </motion.div>
  );
};
