import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const CustomCursor: React.FC = () => {
  const { cursorType, previewImage, previewText } = useCustomCursor();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follow
  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on reduced motion or mobile touch
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible || cursorType === 'hidden') return null;

  const isPreview = cursorType === 'preview' && previewImage;
  const isHover = cursorType === 'hover' || cursorType === 'pointer';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Primary Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[var(--accent-color)] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPreview ? 0 : isHover ? 12 : 8,
          height: isPreview ? 0 : isHover ? 12 : 8,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />

      {/* Smooth Outer Ring / Preview Card */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-[var(--cursor-ring)] backdrop-blur-[2px] transition-colors duration-200 ${
          isPreview
            ? 'rounded-2xl border-[var(--border-color)] bg-[var(--surface-color)] p-2 shadow-2xl overflow-hidden'
            : isHover
            ? 'bg-[var(--accent-color)]/20 border-[var(--accent-color)]'
            : 'bg-transparent'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPreview ? 260 : isHover ? 64 : 36,
          height: isPreview ? 180 : isHover ? 64 : 36,
          borderRadius: isPreview ? 16 : 9999,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      >
        {isPreview ? (
          <div className="relative w-full h-full rounded-xl overflow-hidden group">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                {previewText || 'VIEW PROJECT →'}
              </span>
            </div>
          </div>
        ) : isHover && previewText ? (
          <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-color)] select-none">
            {previewText}
          </span>
        ) : null}
      </motion.div>
    </div>
  );
};
