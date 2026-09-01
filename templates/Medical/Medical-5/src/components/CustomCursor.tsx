import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touchCheck || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorType('pointer');
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle follower ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B6FAE]/40"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'pointer' ? '38px' : '26px',
          height: cursorType === 'pointer' ? '38px' : '26px',
          backgroundColor: cursorType === 'pointer' ? 'rgba(232, 221, 242, 0.35)' : 'transparent',
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
        }}
      />
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#8B6FAE] transition-all duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'pointer' ? '5px' : '6px',
          height: cursorType === 'pointer' ? '5px' : '6px',
          opacity: cursorType === 'text' ? 0.3 : 1,
        }}
      />
    </>
  );
};
