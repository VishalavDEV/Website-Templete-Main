import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);
  const [viewMode, setViewMode] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, .btn, .interactive-hover');
      const isImage = target.closest('img, .gallery-img, .equipment-img, .trainer-img');

      setExpanded(!!isInteractive);
      setViewMode(!!isImage && !isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className={`custom-cursor ${expanded ? 'expanded' : ''} ${viewMode ? 'view-mode' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`
      }}
    />
  );
};

export default CustomCursor;
