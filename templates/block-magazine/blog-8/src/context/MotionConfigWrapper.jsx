import React from 'react';
import { MotionConfig } from 'framer-motion';

/**
 * MotionConfigWrapper standardizes spring-based physics and reduced motion behavior across Xtra.
 */
export function MotionConfigWrapper({ children }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        mass: 0.8
      }}
    >
      {children}
    </MotionConfig>
  );
}

export default MotionConfigWrapper;
