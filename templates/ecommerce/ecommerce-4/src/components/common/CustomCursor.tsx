import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const cardContainer = target.closest('.card-premium, .img-container, .category-tile');
        if (cardContainer) {
          setIsVisible(true);
          if (cardContainer.classList.contains('category-tile')) {
            setCursorText('EXPLORE');
          } else {
            setCursorText('VIEW');
          }
        } else {
          setIsVisible(false);
        }
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, []);

  if (!isVisible || window.innerWidth < 1024) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.15 }}
        style={{
          position: 'fixed',
          top: position.y - 22,
          left: position.x - 22,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-blue)',
          color: '#FFFFFF',
          fontSize: '0.6rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 800,
          boxShadow: '0 4px 15px rgba(56, 87, 255, 0.35)',
          backdropFilter: 'blur(4px)'
        }}
      >
        {cursorText}
      </motion.div>
    </AnimatePresence>
  );
};
