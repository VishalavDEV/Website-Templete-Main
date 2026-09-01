import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export function ObserverCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.08 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorType(target.getAttribute('data-cursor') || 'default');
        setCursorText(target.getAttribute('data-cursor-text') || '');
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const onLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [cursorX, cursorY, isVisible, shouldReduceMotion]);

  if (shouldReduceMotion || !isVisible) return null;

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#1A1917',
      mixBlendMode: 'normal',
      scale: 1,
    },
    pointer: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(26, 25, 23, 0.08)',
      border: '1px solid rgba(26, 25, 23, 0.35)',
      mixBlendMode: 'normal',
      scale: 1,
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: '#1A1917',
      mixBlendMode: 'difference',
      scale: 1,
    },
  };

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={cursorVariants[cursorType] || cursorVariants.default}
      transition={{ type: 'spring', damping: 24, stiffness: 350 }}
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono text-[0.625rem] font-bold uppercase tracking-widest text-white hidden md:flex"
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-1 leading-tight"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
