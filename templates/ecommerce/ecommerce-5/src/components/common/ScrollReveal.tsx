import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'image-reveal' | 'scale-reveal';
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  className = '',
  style = {},
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale-reveal':
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'image-reveal':
        return {
          hidden: { clipPath: 'inset(0 100% 0 0)' },
          visible: { clipPath: 'inset(0 0% 0 0)' },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
