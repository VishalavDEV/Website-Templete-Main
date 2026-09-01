import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices / mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovered ? '40px' : '16px',
        height: isHovered ? '40px' : '16px',
        borderRadius: '50%',
        backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.25)' : 'rgba(124, 58, 237, 0.8)',
        border: isHovered ? '2px solid #06b6d4' : 'none',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${position.x - (isHovered ? 20 : 8)}px, ${position.y - (isHovered ? 20 : 8)}px, 0)`,
        transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease',
        boxShadow: isHovered ? '0 0 20px rgba(6, 182, 212, 0.5)' : '0 0 10px rgba(124, 58, 237, 0.5)'
      }}
    />
  );
};
