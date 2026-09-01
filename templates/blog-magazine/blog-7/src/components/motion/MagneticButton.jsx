import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';

export function MagneticButton({
  children,
  className = '',
  strength = 0.28,
  onClick,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(strength);

  if (shouldReduceMotion) {
    return (
      <div className={className} onClick={onClick} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
