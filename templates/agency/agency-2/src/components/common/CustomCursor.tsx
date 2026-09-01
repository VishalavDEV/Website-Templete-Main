import React, { useEffect, useState } from 'react';
import { useMagneticCursor } from '../../hooks/useMagneticCursor';

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText, isEnabled } = useMagneticCursor();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled || !isVisible) return null;

  const isView = cursorType === 'VIEW';
  const isDrag = cursorType === 'DRAG';
  const isLink = cursorType === 'LINK';
  const isOpen = cursorType === 'OPEN';

  let sizeClass = 'w-4 h-4 -ml-2 -mt-2 bg-accent-coral';
  if (isLink) sizeClass = 'w-10 h-10 -ml-5 -mt-5 bg-accent-coral/20 border border-accent-coral';
  if (isView) sizeClass = 'w-24 h-24 -ml-12 -mt-12 bg-accent-coral text-warm-white';
  if (isDrag) sizeClass = 'w-20 h-20 -ml-10 -mt-10 bg-ink-primary text-warm-white';
  if (isOpen) sizeClass = 'w-16 h-16 -ml-8 -mt-8 bg-accent-lavender text-ink-primary';

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center text-center font-mono uppercase tracking-wider font-semibold text-[10px] transition-all duration-300 backdrop-blur-[2px] shadow-lg ${sizeClass}`}
      >
        {(isView || isDrag || isOpen) && (
          <span className="leading-tight px-1 select-none animate-fadeIn">
            {cursorText || (isView ? 'VIEW PROJECT' : isDrag ? 'DRAG' : 'OPEN')}
          </span>
        )}
      </div>
    </div>
  );
};
