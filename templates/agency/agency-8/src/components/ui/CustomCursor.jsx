import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export default function CustomCursor() {
  const { cursorVariant, cursorText } = useCursor();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      height: 36,
      width: 36,
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      borderColor: 'rgba(59, 130, 246, 0.6)',
      borderWidth: '1.5px',
      mixBlendMode: 'normal',
    },
    button: {
      height: 56,
      width: 56,
      backgroundColor: 'rgba(6, 182, 212, 0.25)',
      borderColor: 'rgba(6, 182, 212, 0.8)',
      borderWidth: '2px',
      scale: 1.1,
    },
    view: {
      height: 90,
      width: 90,
      backgroundColor: '#3b82f6',
      borderColor: '#60a5fa',
      borderWidth: '2px',
      color: '#ffffff',
      fontWeight: 'bold',
      boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
    },
    text: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: '1px',
    }
  };

  return (
    <>
      {/* Central Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#22d3ee]"
        style={{
          x: mouseX,
          y: mouseY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Outer Spring Follower Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-xs tracking-widest uppercase transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          transform: 'translate(-50%, -50%)',
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorVariant === 'view' && (
          <span className="font-syne tracking-wider text-[11px] font-bold text-white drop-shadow">
            {cursorText || 'VIEW'}
          </span>
        )}
      </motion.div>
    </>
  );
}
