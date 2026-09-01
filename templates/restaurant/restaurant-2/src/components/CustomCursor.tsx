import React, { useEffect } from 'react';

export const CustomCursor: React.FC = () => {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.querySelector('.custom-cursor-dot') as HTMLElement;
    const ring = document.querySelector('.custom-cursor-ring') as HTMLElement;

    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrameId = requestAnimationFrame(renderCursor);
    };
    animationFrameId = requestAnimationFrame(renderCursor);

    const interactiveSelector = 'a, button, .gallery-item, .signature-card, .event-card, .chef-card, .menu-filter-btn, input, select, textarea';

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        dot.classList.add('hovered');
        ring.classList.add('hovered');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        dot.classList.remove('hovered');
        ring.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot"></div>
      <div className="custom-cursor-ring"></div>
    </>
  );
};
