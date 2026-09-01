import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Enable custom cursor cursor-none styling on body
    document.body.classList.add('toy-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setIsActive(true);
        if (type === 'drive') setCursorText('🚗 DRIVE');
        else if (type === 'play') setCursorText('🧸 PLAY');
        else if (type === 'activate') setCursorText('🤖 ACTIVATE');
        else if (type === 'build') setCursorText('🧱 BUILD');
        else if (type === 'add-cart') setCursorText('📦 ADD TO BOX');
        else if (type === 'collect') setCursorText('💖 COLLECT');
        else if (type === 'launch') setCursorText('🚀 LAUNCH');
        else if (type === 'bounce') setCursorText('⚽ BOUNCE');
        else if (type === 'steer') setCursorText('🚂 CHUG');
        else if (type === 'roar') setCursorText('🦖 ROAR');
        else setCursorText('✨ CHOOSE');
      } else {
        setIsActive(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('toy-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      {cursorText && <div className="cursor-label">{cursorText}</div>}
    </div>
  );
};
