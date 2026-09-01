// ============================================================================
// XTRA HARDWARE-ACCELERATED MOTION PHYSICS & VARIANTS
// (Strictly composite properties only: transform & opacity)
// ============================================================================

export const springPhysics = {
  // Snappy spring for buttons and interactive stickers
  snappy: {
    type: "spring",
    stiffness: 420,
    damping: 26,
    mass: 0.8
  },
  // Bouncy spring for dopamine pops and badges
  bouncy: {
    type: "spring",
    stiffness: 480,
    damping: 20,
    mass: 0.85
  },
  // Smooth spring for cards and layout transitions
  gentle: {
    type: "spring",
    stiffness: 300,
    damping: 32,
    mass: 1
  },
  // High impact kinetic punch
  kinetic: {
    type: "spring",
    stiffness: 550,
    damping: 22,
    mass: 0.7
  }
};

// Container Stagger Variants
export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0.02) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Hardware-Accelerated Kinetic Fade Up (GPU composite only)
export const kineticFadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springPhysics.gentle
  }
};

// Hardware-Accelerated Dopamine Pop
export const dopaminePop = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -3
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: springPhysics.bouncy
  }
};

// Kinetic Letter Reveal for Headlines
export const kineticLetter = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateZ: 4
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: springPhysics.snappy
  }
};

// Tactile Hover - transform only (no layout recalculations)
export const brutalistHover = {
  rest: {
    x: 0,
    y: 0,
    transition: { duration: 0.12, ease: "easeOut" }
  },
  hover: {
    x: -3,
    y: -3,
    transition: springPhysics.snappy
  },
  tap: {
    x: 1,
    y: 1,
    scale: 0.95,
    transition: { duration: 0.06 }
  }
};

// Sticker Tilt & Scale
export const stickerHover = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.12 }
  },
  hover: {
    scale: 1.06,
    rotate: 2.5,
    transition: springPhysics.bouncy
  },
  tap: {
    scale: 0.92,
    transition: { duration: 0.06 }
  }
};
