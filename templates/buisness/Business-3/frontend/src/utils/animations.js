const getPrefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const reduce = getPrefersReducedMotion();

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: reduce ? 0.05 : 0.6, ease: 'easeOut' }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: reduce ? 0 : 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: reduce ? 0.05 : 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: reduce ? 0 : -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: reduce ? 0.05 : 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: reduce ? 0 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: reduce ? 0.05 : 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: reduce ? 1 : 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: reduce ? 0.05 : 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduce ? 0.01 : 0.12
    }
  }
};

export const hoverScale = reduce ? {} : {
  scale: 1.02,
  y: -5,
  transition: { duration: 0.3, ease: 'easeOut' }
};

export const hoverTap = reduce ? {} : {
  scale: 0.98
};

export const floatAnimation = reduce ? {} : {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const pulseAnimation = reduce ? {} : {
  scale: [1, 1.05, 1],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};
