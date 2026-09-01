import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest('a, button, input, textarea, select')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;

    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Tiny center dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 dark:bg-blue-400 transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isHovered && cursorText ? 0 : 1,
        }}
      />

      {/* Trailing circle or expanded badge */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 ease-out ${
          cursorText
            ? 'h-16 w-16 bg-blue-600/90 dark:bg-blue-500/90 border-blue-400 text-white font-mono text-[10px] tracking-widest font-bold uppercase shadow-xl scale-110'
            : isHovered
            ? 'h-12 w-12 border-blue-600/60 dark:border-blue-400/60 bg-blue-500/10 backdrop-blur-xs scale-100'
            : 'h-8 w-8 border-neutral-400/40 dark:border-neutral-600/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && <span className="animate-fade-in">{cursorText}</span>}
      </div>
    </>
  );
};
