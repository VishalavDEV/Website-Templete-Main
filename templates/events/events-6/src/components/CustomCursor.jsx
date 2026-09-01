import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  const [cursorType, setCursorType] = useState('default'); // 'default' | 'button' | 'image' | 'text'
  const [hoverLabel, setHoverLabel] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target;
      const isButton = target.closest('button, a, .btn-primary, .btn-secondary, select, input[type="submit"]');
      const isImage = target.closest('.gallery-item, .artist-card, .event-card-img-wrapper, .hero-performer-container');
      const isInput = target.closest('input[type="text"], input[type="email"], textarea');

      if (isImage) {
        setCursorType('image');
        setHoverLabel('VIEW');
      } else if (isButton) {
        setCursorType('button');
        setHoverLabel('');
      } else if (isInput) {
        setCursorType('text');
        setHoverLabel('');
      } else {
        setCursorType('default');
        setHoverLabel('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth lerp animation loop via requestAnimationFrame
    let animationFrameId;
    const render = () => {
      // Lerp equation: follower += (target - follower) * ease
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.2;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Central Sharp Glow Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: cursorType === 'button' ? '8px' : cursorType === 'image' ? '0px' : '10px',
          height: cursorType === 'button' ? '8px' : cursorType === 'image' ? '0px' : '10px',
          backgroundColor: '#FFC928',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 12px #FFC928',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          willChange: 'transform',
        }}
      />

      {/* Fluid Trailing & Morphing Ring */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: cursorType === 'button' ? '54px' : cursorType === 'image' ? '64px' : '36px',
          height: cursorType === 'button' ? '54px' : cursorType === 'image' ? '64px' : '36px',
          backgroundColor: cursorType === 'image' ? 'rgba(245, 185, 0, 0.85)' : cursorType === 'button' ? 'rgba(255, 201, 40, 0.15)' : 'transparent',
          border: cursorType === 'image' ? 'none' : '1.5px solid rgba(245, 185, 0, 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          boxShadow: cursorType === 'button' ? '0 0 25px rgba(245, 185, 0, 0.4)' : cursorType === 'image' ? '0 0 35px rgba(255, 201, 40, 0.8)' : 'none',
          backdropFilter: cursorType === 'image' ? 'blur(4px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
          fontWeight: 900,
          fontSize: '0.65rem',
          letterSpacing: '1px',
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease',
          willChange: 'transform',
        }}
      >
        {hoverLabel && <span>{hoverLabel}</span>}
      </div>
    </>
  );
}
