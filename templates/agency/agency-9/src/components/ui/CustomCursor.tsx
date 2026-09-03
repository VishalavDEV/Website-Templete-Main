import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'project' | 'image'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / fine pointer support
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (!target) return;

      // Check hover targets up the DOM tree
      const projectItem = target.closest('[data-cursor="project"]');
      const imageItem = target.closest('[data-cursor="image"]') || target.tagName === 'IMG';
      const linkItem = target.closest('a, button, [data-cursor="link"], input, textarea, select');

      if (projectItem) {
        setCursorVariant('project');
        setCursorText(projectItem.getAttribute('data-cursor-text') || 'VIEW →');
        setIsHovered(true);
      } else if (imageItem) {
        setCursorVariant('image');
        setCursorText('EXPLORE');
        setIsHovered(true);
      } else if (linkItem) {
        setCursorVariant('link');
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorVariant('default');
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer follow cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#D65F3F] flex items-center justify-center font-display text-[10px] tracking-widest text-[#FAF7F1] bg-[#332832]/80 backdrop-blur-sm shadow-xl"
        animate={{
          x: position.x - (isHovered ? 40 : 10),
          y: position.y - (isHovered ? 40 : 10),
          width: isHovered ? 80 : 20,
          height: isHovered ? 80 : 20,
          scale: isHovered ? 1 : 0.6,
          opacity: 1
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.2
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-1 font-bold tracking-wider text-[9px] uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Immediate center point pin */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D65F3F] rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovered ? 0 : 0.8
        }}
        transition={{ duration: 0.05 }}
      />
    </>
  );
};
