import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SmartPageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
  variant?: 'default' | 'editorial' | 'project' | 'fade';
}

export const SmartPageTransition: React.FC<SmartPageTransitionProps> = ({
  children,
  routeKey,
  variant = 'default',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div key={routeKey} className="w-full">
        {children}
      </div>
    );
  }

  // Define transition configs for various page types
  const getVariants = () => {
    switch (variant) {
      case 'editorial':
        return {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
        };
      case 'project':
        return {
          initial: { opacity: 0, scale: 0.98, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.98, y: -16 },
        };
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case 'default':
      default:
        return {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      key={routeKey}
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1], // fluid cubic bezier
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
