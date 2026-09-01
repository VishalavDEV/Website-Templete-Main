import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useZMag } from '../../context/ZMagContext';

/**
 * Global Page Transition Wrapper
 */
export function PageTransition({ children, locationKey }) {
  const shouldReduceMotion = useReducedMotion();
  const { isReducedMotionActive } = useZMag();

  const isReduced = shouldReduceMotion || isReducedMotionActive;

  return (
    <motion.div
      key={locationKey}
      initial={isReduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={isReduced ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
