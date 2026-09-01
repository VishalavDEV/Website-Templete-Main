import React, { useEffect, useState } from 'react';

export interface CursorState {
  text: string;
  variant: 'default' | 'hover' | 'card' | 'drag' | 'menu';
}

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
        document.body.classList.add('custom-cursor-enabled');
      }
    };

    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  const hasLabel = cursorState.text !== '';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Outer Circle */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ease-out border ${
          hasLabel
            ? 'w-24 h-24 bg-black text-lime-400 border-lime-400/50 shadow-2xl scale-100 font-mono text-xs font-bold tracking-widest'
            : cursorState.variant === 'hover'
            ? 'w-12 h-12 bg-lime-400 border-black/80 scale-110 shadow-lg'
            : 'w-8 h-8 bg-black/10 border-black/30 backdrop-blur-xs'
        }`}
      >
        {hasLabel ? (
          <span className="uppercase tracking-widest text-[10px] animate-pulse">
            {cursorState.text}
          </span>
        ) : (
          <div
            className={`rounded-full transition-all duration-200 ${
              cursorState.variant === 'hover'
                ? 'w-2 h-2 bg-black'
                : 'w-1.5 h-1.5 bg-black/80'
            }`}
          />
        )}
      </div>
    </div>
  );
};
