import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MoveHorizontal } from 'lucide-react';
import { CursorType } from '../types';

interface CustomCursorProps {
  cursorType: CursorType;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorType,
  cursorText,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid, responsive trailing
  const springConfig = { damping: 30, stiffness: 450, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Secondary spring for subtle trailing follower dot
  const trailingSpringConfig = { damping: 40, stiffness: 280, mass: 0.8 };
  const trailX = useSpring(mouseX, trailingSpringConfig);
  const trailY = useSpring(mouseY, trailingSpringConfig);

  useEffect(() => {
    // Detect touch-only device or reduced motion preference
    const checkEnvironment = () => {
      // A device is touch-only if it supports coarse pointers but doesn't have a fine pointer (like a mouse/trackpad)
      const isTouchOnly =
        window.matchMedia('(pointer: coarse)').matches &&
        !window.matchMedia('(pointer: fine)').matches;

      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      return isTouchOnly || prefersReduced;
    };

    if (checkEnvironment()) {
      setIsTouchOrReduced(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter as any);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter as any);
    };
  }, [mouseX, mouseY]);

  if (isTouchOrReduced || !isVisible) return null;

  // Determine active badge mode
  const isBadgeMode =
    cursorType === 'project' ||
    cursorType === 'image' ||
    cursorType === 'article' ||
    cursorType === 'cta' ||
    cursorType === 'drag';

  const isPointerOrButton =
    cursorType === 'pointer' || cursorType === 'button' || cursorType === 'link';

  const isText = cursorType === 'text';

  // Get default label for badge modes
  const getBadgeLabel = () => {
    if (cursorText && cursorText.trim().length > 0) return cursorText;
    switch (cursorType) {
      case 'project':
        return 'EXPLORE ↗';
      case 'image':
        return 'VIEW ↗';
      case 'article':
        return 'READ ↗';
      case 'cta':
        return 'START ↗';
      case 'drag':
        return 'DRAG';
      default:
        return 'VIEW ↗';
    }
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
    >
      {/* Subdued Ambient Glow Follower */}
      {!isBadgeMode && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none -z-10"
          style={{
            x: trailX,
            y: trailY,
            translateX: '-50%',
            translateY: '-50%',
            backgroundColor: 'rgba(0, 102, 255, 0.12)',
            filter: 'blur(6px)',
          }}
        />
      )}

      {/* Primary Dynamic Follower */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <AnimatePresence mode="wait">
          {isBadgeMode ? (
            /* Badge Cursor Mode (Project, Image, Article, CTA, Drag) */
            <motion.div
              key={`badge-${cursorType}-${cursorText}`}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 450 }}
              className="px-4 py-2 rounded-full bg-[#0066FF] text-white font-mono font-bold text-[10px] sm:text-[11px] tracking-widest flex items-center gap-1.5 shadow-2xl border border-white/30 uppercase select-none shadow-[#0066FF]/40 backdrop-blur-md"
            >
              {cursorType === 'drag' ? (
                <MoveHorizontal className="w-3 h-3" />
              ) : (
                <span>{getBadgeLabel()}</span>
              )}
            </motion.div>
          ) : isText ? (
            /* Text Input Cursor Mode */
            <motion.div
              key="cursor-text"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.15 }}
              className="w-0.5 h-5 bg-[#0066FF] rounded-full"
            />
          ) : isPointerOrButton ? (
            /* Link / Pointer / Button Magnetic Hover Mode */
            <motion.div
              key="cursor-pointer"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.4 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', damping: 22, stiffness: 450 }}
              className="w-7 h-7 rounded-full border border-[#0066FF] bg-[#0066FF]/20 flex items-center justify-center backdrop-blur-[2px]"
            >
              {cursorType === 'link' ? (
                <ArrowUpRight className="w-3 h-3 text-[#FAF9F6]" />
              ) : (
                <div className="w-1.5 h-1.5 bg-[#FAF9F6] rounded-full shadow-[0_0_8px_#FAF9F6]" />
              )}
            </motion.div>
          ) : (
            /* Default Dot Mode */
            <motion.div
              key="cursor-default"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-3.5 h-3.5 rounded-full border border-[#0066FF]/80 flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-[#FAF9F6] rounded-full shadow-[0_0_4px_#FAF9F6]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
