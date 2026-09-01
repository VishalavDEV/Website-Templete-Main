import React, { useEffect, useRef } from 'react';

export default function FloatingDishPreview({ activeImg, isActive }) {
  const previewRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateFloatingPos = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (previewRef.current) {
        previewRef.current.style.left = `${currentX}px`;
        previewRef.current.style.top = `${currentY}px`;
      }
      animId = requestAnimationFrame(updateFloatingPos);
    };

    animId = requestAnimationFrame(updateFloatingPos);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={previewRef}
      className={`floating-dish-preview ${isActive ? 'is-active' : ''}`}
      id="floating-dish-preview"
    >
      <img src={activeImg || 'assets/images/dish_burrata.jpg'} alt="Dish preview" />
    </div>
  );
}
