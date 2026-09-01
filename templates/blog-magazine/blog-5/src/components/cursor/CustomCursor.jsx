import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'view' | 'text'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest?.('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else if (e.target.closest?.('a, button, [role="button"], input, select')) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion || !isVisible) return null;

  const getCursorVariants = () => {
    switch (cursorType) {
      case 'view':
        return {
          width: 80,
          height: 80,
          backgroundColor: 'rgba(0, 85, 255, 0.92)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          scale: 1,
        };
      case 'pointer':
        return {
          width: 44,
          height: 44,
          backgroundColor: 'rgba(0, 85, 255, 0.12)',
          border: '1.5px solid rgba(0, 85, 255, 0.6)',
          scale: 1,
        };
      case 'text':
        return {
          width: 60,
          height: 60,
          backgroundColor: 'rgba(255, 94, 58, 0.2)',
          border: '1.5px solid rgba(255, 94, 58, 0.8)',
          scale: 1,
        };
      default:
        return {
          width: 14,
          height: 14,
          backgroundColor: '#0055FF',
          border: '1.5px solid #FFFFFF',
          scale: 1,
        };
    }
  };

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={getCursorVariants()}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-white font-mono text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-xs shadow-lg hidden md:flex"
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-center leading-none"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
