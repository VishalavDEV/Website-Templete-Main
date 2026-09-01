/**
 * Spring configurations for editorial motion
 */
export const transitions = {
  editorial: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  gentleSpring: { type: 'spring', damping: 28, stiffness: 220, mass: 0.2 },
  magneticSpring: { type: 'spring', damping: 15, stiffness: 260, mass: 0.08 },
};

/**
 * Bento Grid Stagger Container
 */
export const bentoGridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * 3D Staggered Item Entrance (Rotates subtly on X-axis and scales into view)
 */
export const bentoGridItem = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
    rotateX: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Masked Headline Reveal for Broadside Typography
 */
export const headlineMaskReveal = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
