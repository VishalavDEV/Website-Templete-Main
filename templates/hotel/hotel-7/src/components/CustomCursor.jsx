import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is touch or screen size is mobile
    const checkDevice = () => {
      const mobileOrTouch = 
        window.innerWidth < 1024 || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobileOrTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return () => window.removeEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }} 
      />
      <div 
        className="custom-cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }} 
      />
    </>
  );
}
