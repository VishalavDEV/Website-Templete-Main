import { useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

/**
 * Tracks scroll velocity and returns physics-based skew and momentum transforms.
 * @param {React.RefObject} targetRef - Optional ref for a specific container
 * @param {number} maxSkew - Maximum degree of skew (default: 6deg)
 */
export function useScrollVelocity(targetRef = null, maxSkew = 6) {
  const scrollOptions = targetRef ? { target: targetRef, offset: ['start end', 'end start'] } : {};
  const { scrollY, scrollYProgress } = useScroll(scrollOptions);

  const rawVelocity = useVelocity(scrollY);

  // Smooth spring dampener for refined editorial movement
  const smoothVelocity = useSpring(rawVelocity, {
    damping: 35,
    stiffness: 240,
    mass: 0.1,
  });

  // Skew maps between -maxSkew and +maxSkew based on scroll speed
  const skewX = useTransform(smoothVelocity, [-1800, 1800], [-maxSkew, maxSkew]);
  const scale = useTransform(smoothVelocity, [-2000, 0, 2000], [0.97, 1, 0.97]);

  return { smoothVelocity, skewX, scale, scrollYProgress };
}
