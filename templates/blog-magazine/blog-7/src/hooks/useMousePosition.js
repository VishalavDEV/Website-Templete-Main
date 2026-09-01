import { useState, useEffect } from 'react';

/**
 * Tracks normalized mouse coordinates (-0.5 to +0.5) and raw viewport positions.
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    let frameId;

    const onMouseMove = (e) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: e.clientX / innerWidth - 0.5,
          normalizedY: e.clientY / innerHeight - 0.5,
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return mousePosition;
}
