import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeMouseMove = window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500 pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0)',
          borderColor: isHovered ? '#6366f1' : '#a855f7'
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.6 }}
      />
      {/* Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.3 : 1
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      />
    </>
  );
}
