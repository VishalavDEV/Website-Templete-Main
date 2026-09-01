import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Editorial Motion Primitives
 * Timing Tokens:
 * - Micro: 200–300ms
 * - Content: 500–800ms
 * - Hero: 800–1200ms
 */

export function FadeIn({
  children,
  duration = 0.5,
  delay = 0,
  className = '',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 20,
  className = '',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay, delayChildren },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  duration = 0.5,
  className = '',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden bg-[#EAE7DF] ${aspectRatio} ${className}`}>
      <motion.img
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06, opacity: 0.92 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
}

/**
 * Editorial Page Mask / Curtain Reveal Transition
 */
export function PageMaskTransition({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CurtainReveal({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="absolute inset-0 bg-[#FAF9F5] z-20 pointer-events-none"
      />
    </div>
  );
}
