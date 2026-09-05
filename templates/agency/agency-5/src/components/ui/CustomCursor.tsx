import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const CustomCursor: React.FC = () => {
  const { cursorType, previewText } = useCustomCursor();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follow
  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    const updatePos = (clientX: number, clientY: number) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
      if (!isVisible) setIsVisible(true);
    };

    const moveMouse = (e: MouseEvent) => {
      updatePos(e.clientX, e.clientY);
    };

    const movePointer = (e: PointerEvent) => {
      updatePos(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('pointermove', movePointer);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('pointermove', movePointer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible || cursorType === 'hidden') return null;

  const isHover = cursorType === 'hover' || cursorType === 'pointer' || cursorType === 'preview';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[var(--accent-color)] mix-blend-difference pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHover ? 12 : 8,
          height: isHover ? 12 : 8,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />

      {/* Smooth Outer Ring */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-[var(--cursor-ring)] backdrop-blur-[2px] transition-colors duration-200 pointer-events-none ${
          isHover ? 'bg-[var(--accent-color)]/20 border-[var(--accent-color)]' : 'bg-transparent'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHover ? 54 : 32,
          height: isHover ? 54 : 32,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      >
        {isHover && previewText && (
          <span className="text-[9px] font-bold tracking-widest uppercase text-[var(--text-color)] select-none font-mono">
            {previewText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
