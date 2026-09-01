import React, { useEffect, useState } from 'react';
import { CursorState } from '../types';

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');

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
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorState.variant !== 'default';
  const hasText = Boolean(cursorState.text);

  return (
    <div
      id="custom-cursor-root"
      className="pointer-events-none fixed top-0 left-0 z-9999 will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: 'transform 0.08s ease-out',
      }}
    >
      {/* Center glowing core */}
      <div
        className={`relative -top-1/2 -left-1/2 flex items-center justify-center rounded-full transition-all duration-200 ${
          isExpanded
            ? 'w-16 h-16 bg-cyan-500/20 border border-cyan-400 backdrop-blur-xs shadow-[0_0_20px_rgba(6,182,212,0.6)]'
            : 'w-3 h-3 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
        }`}
      >
        {/* Trailing ripple ring when expanded */}
        {isExpanded && (
          <div className="absolute inset-0 rounded-full border border-cyan-300/40 animate-ping" />
        )}

        {/* Action badge text */}
        {hasText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-200 uppercase whitespace-nowrap select-none">
            {cursorState.text}
          </span>
        )}
      </div>
    </div>
  );
};
