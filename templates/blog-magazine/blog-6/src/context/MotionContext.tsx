import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useReducedMotion, Variants, Transition } from 'framer-motion';

// ==============================================================================
// DESIGN MAG — PHASE 1: FRAMER MOTION SYSTEM & PERFORMANCE ARCHITECTURE
// All animation variants strictly target compositor-only properties (transform & opacity)
// to eliminate layout thrashing and maintain 60fps.
// ==============================================================================

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

export interface MotionTokens {
  // Global Spring Physics Profiles
  springSnappy: SpringConfig;
  springCinematic: SpringConfig;
  springGentle: SpringConfig;
  
  // Transition Presets
  transitionSnappy: Transition;
  transitionCinematic: Transition;
  
  // High-Performance Variants (Compositor-Only)
  maskHeadlineReveal: Variants;
  maskSubtitleReveal: Variants;
  staggerContainer: Variants;
  floatingCardVariant: Variants;
  badgePopVariant: Variants;
  parallaxLayerVariant: Variants;
  
  // Accessibility
  prefersReducedMotion: boolean;
}

const MotionContext = createContext<MotionTokens | null>(null);

export const MotionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const motionTokens: MotionTokens = useMemo(() => {
    // Spring physics configurations
    const springSnappy: SpringConfig = {
      stiffness: 260,
      damping: 24,
      mass: 0.9,
    };

    const springCinematic: SpringConfig = {
      stiffness: 140,
      damping: 26,
      mass: 1.1,
    };

    const springGentle: SpringConfig = {
      stiffness: 90,
      damping: 20,
      mass: 1.2,
    };

    const transitionSnappy: Transition = shouldReduceMotion
      ? { duration: 0.01 }
      : {
          type: 'spring',
          ...springSnappy,
        };

    const transitionCinematic: Transition = shouldReduceMotion
      ? { duration: 0.01 }
      : {
          type: 'spring',
          ...springCinematic,
        };

    // Staggered Container Variant
    const staggerContainer: Variants = {
      hidden: { opacity: 0 },
      visible: (customDelay = 0) => ({
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.12,
          delayChildren: customDelay,
        },
      }),
    };

    // Text-Masking Reveal Variant for Massive Display Headline
    // Uses translateY from 105% to 0% with 0 layout reflow
    const maskHeadlineReveal: Variants = {
      hidden: {
        y: '105%',
        opacity: 0.001,
      },
      visible: {
        y: '0%',
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0.01 }
          : {
              type: 'spring',
              stiffness: 120,
              damping: 22,
              mass: 1.0,
            },
      },
    };

    // Text-Masking Subtitle Reveal
    const maskSubtitleReveal: Variants = {
      hidden: {
        y: '100%',
        opacity: 0,
      },
      visible: {
        y: '0%',
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0.01 }
          : {
              type: 'spring',
              stiffness: 160,
              damping: 24,
              mass: 0.95,
            },
      },
    };

    // Floating Glassmorphism Card Variant
    const floatingCardVariant: Variants = {
      hidden: {
        y: 40,
        opacity: 0,
        scale: 0.96,
      },
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: shouldReduceMotion
          ? { duration: 0.01 }
          : {
              type: 'spring',
              stiffness: 150,
              damping: 25,
              mass: 1,
              delay: 0.35,
            },
      },
    };

    // Pill Badge Pop Variant
    const badgePopVariant: Variants = {
      hidden: {
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0.01 }
          : {
              type: 'spring',
              stiffness: 280,
              damping: 20,
              mass: 0.8,
            },
      },
    };

    // Parallax Layer Variant
    const parallaxLayerVariant: Variants = {
      hidden: { opacity: 0, scale: 1.04 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: shouldReduceMotion
          ? { duration: 0.01 }
          : {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            },
      },
    };

    return {
      springSnappy,
      springCinematic,
      springGentle,
      transitionSnappy,
      transitionCinematic,
      maskHeadlineReveal,
      maskSubtitleReveal,
      staggerContainer,
      floatingCardVariant,
      badgePopVariant,
      parallaxLayerVariant,
      prefersReducedMotion: shouldReduceMotion,
    };
  }, [shouldReduceMotion]);

  return <MotionContext.Provider value={motionTokens}>{children}</MotionContext.Provider>;
};

export const useMotionTokens = (): MotionTokens => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotionTokens must be used within a MotionProvider');
  }
  return context;
};
