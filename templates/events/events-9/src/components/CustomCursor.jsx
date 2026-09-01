import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    if (window.innerWidth > 1024) {
      document.body.classList.add('has-custom-cursor');
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target;
      const isClickable = target.closest('a, button, input, select, textarea, .clickable, .gallery-card, .event-card, .video-card');
      setHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <div 
        className="custom-cursor-dot" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      <div 
        className={`custom-cursor-ring ${hovered ? 'hovered' : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
    </>
  );
}
