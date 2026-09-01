import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return touch || reducedMotion;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Target hover elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: isHovered ? 'rgba(23, 22, 20, 0.9)' : 'rgba(23, 22, 20, 0.6)',
        color: '#F3F0EA',
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        mixBlendMode: isHovered ? 'normal' : 'difference',
        backdropFilter: isHovered ? 'blur(4px)' : 'none',
      }}
      animate={{
        x: position.x - (isHovered ? 32 : 6),
        y: position.y - (isHovered ? 32 : 6),
        width: isHovered ? 64 : 12,
        height: isHovered ? 64 : 12,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 350,
        mass: 0.5,
      }}
    >
      {isHovered && cursorText}
    </motion.div>
  );
};
