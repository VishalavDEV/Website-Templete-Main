import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveParent = target.closest('[data-cursor]');
      if (interactiveParent) {
        const cursorType = interactiveParent.getAttribute('data-cursor');
        setCursorText(cursorType === 'view' ? 'VIEW' : cursorType === 'read' ? 'READ' : cursorType === 'flip' ? 'FLIP' : '');
        setIsHovered(true);
      } else if (target.closest('a, button, input, [role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
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
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Outer Cursor Bubble - ENFORCE POINTER-EVENTS-NONE ON ALL CURSOR ELEMENTS */}
      <div
        className={`pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? 'w-14 h-14 bg-forest-900/80 dark:bg-emerald-500/80 text-white backdrop-blur-xs shadow-xl scale-100'
            : 'w-5 h-5 border-2 border-forest-800/60 dark:border-emerald-400/60 bg-transparent scale-100'
        }`}
      >
        {cursorText && (
          <span className="pointer-events-none text-[10px] font-mono-tech tracking-widest font-bold text-white">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
