import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const render = () => {
      // Smooth interpolation for premium movement
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animFrame = requestAnimationFrame(render);

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        setLabel(cursorType);
        setHovered(true);
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setLabel('');
        setHovered(false);
      }
    };

    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrame);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: hovered ? '70px' : '20px',
        height: hovered ? '70px' : '20px',
        borderRadius: '50%',
        backgroundColor: hovered ? 'rgba(255, 90, 54, 0.9)' : 'rgba(13, 44, 30, 0.2)',
        border: hovered ? 'none' : '1px solid var(--color-forest)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease',
      }}
    >
      {hovered && label && (
        <span
          style={{
            color: '#FFFFFF',
            fontSize: '9px',
            fontWeight: 'bold',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            pointerEvents: 'none',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
