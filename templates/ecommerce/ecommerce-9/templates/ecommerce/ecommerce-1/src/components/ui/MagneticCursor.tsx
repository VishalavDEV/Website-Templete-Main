'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MagneticCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.magnetic-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-[#D98A7F]/40 bg-[#D98A7F]/10 backdrop-blur-[2px] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isHovered ? 48 : 24,
        height: isHovered ? 48 : 24,
        scale: isHovered ? 1.04 : 1,
        backgroundColor: isHovered ? 'rgba(217, 138, 127, 0.18)' : 'rgba(217, 138, 127, 0.08)',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      <motion.div
        className="h-2 w-2 rounded-full bg-[#D98A7F] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovered ? 1.4 : 1,
        }}
      />
    </motion.div>
  );
};
