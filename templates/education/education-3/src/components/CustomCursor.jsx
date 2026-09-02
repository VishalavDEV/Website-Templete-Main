import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({
    variant: 'default', // default, hover, view, explore
    text: '',
    visible: false
  });

  useEffect(() => {
    // Only activate custom cursor on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }
    };

    const onMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        if (cursorType === 'VIEW') {
          setCursorState((prev) => ({ ...prev, variant: 'badge', text: 'VIEW' }));
        } else if (cursorType === 'EXPLORE') {
          setCursorState((prev) => ({ ...prev, variant: 'badge', text: 'EXPLORE' }));
        } else if (cursorType === 'APPLY') {
          setCursorState((prev) => ({ ...prev, variant: 'badge', text: 'APPLY' }));
        } else {
          setCursorState((prev) => ({ ...prev, variant: 'hover', text: '' }));
        }
      } else if (e.target.closest('a, button, input, select, textarea')) {
        setCursorState((prev) => ({ ...prev, variant: 'hover', text: '' }));
      } else {
        setCursorState((prev) => ({ ...prev, variant: 'default', text: '' }));
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!cursorState.visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-electric-400 rounded-full z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: cursorState.variant === 'hover' ? 1.5 : cursorState.variant === 'badge' ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }}
      />

      {/* Outer Ring / Badge */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center font-bold tracking-widest text-[10px] ${
          cursorState.variant === 'badge'
            ? 'bg-electric-500/90 text-white border-electric-400 shadow-lg shadow-electric-500/30'
            : cursorState.variant === 'hover'
            ? 'bg-electric-500/10 border-electric-400/80 backdrop-blur-xs'
            : 'bg-transparent border-slate-400/30'
        }`}
        animate={{
          x: position.x - (cursorState.variant === 'badge' ? 36 : 18),
          y: position.y - (cursorState.variant === 'badge' ? 36 : 18),
          width: cursorState.variant === 'badge' ? 72 : 36,
          height: cursorState.variant === 'badge' ? 72 : 36,
          scale: cursorState.variant === 'hover' ? 1.4 : 1
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.2 }}
      >
        {cursorState.variant === 'badge' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
