import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Scroll-reveal wrapper using Framer Motion's useInView hook.
 * Wraps children with a fade+slide-up animation when entering the viewport.
 *
 * @param {number} delay - animation delay in seconds
 * @param {string} direction - 'up' | 'down' | 'left' | 'right'
 * @param {number} distance - pixels to travel
 */
const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  className = '',
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '0px 0px -40px 0px', amount: 0.1 });

  const directionMap = {
    up:    { y: distance, x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = inView
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...directionMap[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ willChange: inView ? 'auto' : 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
