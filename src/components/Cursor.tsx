import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'view' | 'drag'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch or reduced motion
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [role="button"], [data-cursor]');
      const customCursorData = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      const customCursorText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (customCursorText) {
        setCursorType('view');
        setCursorText(customCursorText);
      } else if (customCursorData === 'view') {
        setCursorType('view');
        setCursorText('VIEW');
      } else if (customCursorData === 'drag') {
        setCursorType('drag');
        setCursorText('DRAG');
      } else if (interactive) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-violet-400 mix-blend-difference"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          width: cursorType === 'default' ? 6 : 4,
          height: cursorType === 'default' ? 6 : 4,
          opacity: cursorType === 'view' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Fluid Outer Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-mono font-medium tracking-wider text-[10px]"
        animate={{
          x: cursorType === 'view' ? position.x - 36 : position.x - (cursorType === 'pointer' ? 24 : 16),
          y: cursorType === 'view' ? position.y - 36 : position.y - (cursorType === 'pointer' ? 24 : 16),
          width: cursorType === 'view' ? 72 : cursorType === 'pointer' ? 48 : 32,
          height: cursorType === 'view' ? 72 : cursorType === 'pointer' ? 48 : 32,
          backgroundColor: cursorType === 'view' ? 'rgba(139, 92, 246, 0.92)' : cursorType === 'pointer' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
          borderColor: cursorType === 'view' ? 'rgba(255, 255, 255, 0.3)' : cursorType === 'pointer' ? 'rgba(139, 92, 246, 0.6)' : 'rgba(255, 255, 255, 0.15)',
          borderWidth: 1,
          color: cursorType === 'view' ? '#FFFFFF' : '#9CA3AF',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      >
        {cursorType === 'view' && <span>{cursorText || 'VIEW'}</span>}
      </motion.div>
    </>
  );
}
