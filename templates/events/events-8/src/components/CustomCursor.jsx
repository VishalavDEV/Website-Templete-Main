import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

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
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  useEffect(() => {
    let animFrame;
    const updateTrail = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      animFrame = requestAnimationFrame(updateTrail);
    };
    animFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrame);
  }, [pos]);

  return (
    <>
      {/* Center Dot */}
      <div
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          width: isClicking ? '4px' : '6px',
          height: isClicking ? '4px' : '6px',
          backgroundColor: '#00ff66',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px #00ff66'
        }}
      />
      {/* Outer Ring Trail */}
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: trailPos.y,
          left: trailPos.x,
          width: isHovered ? '48px' : isClicking ? '20px' : '32px',
          height: isHovered ? '48px' : isClicking ? '20px' : '32px',
          border: `1px solid ${isHovered ? '#00ff66' : 'rgba(0, 255, 102, 0.4)'}`,
          backgroundColor: isHovered ? 'rgba(0, 255, 102, 0.1)' : 'transparent',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
          boxShadow: isHovered ? '0 0 20px rgba(0, 255, 102, 0.4)' : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
