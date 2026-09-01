import React, { useRef, useState, useCallback, useEffect } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees
  perspective?: number; // perspective in pixels
  glareEffect?: boolean;
  scale?: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1000,
  glareEffect = true,
  scale = 1.015,
  disabled = false,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [currentScale, setCurrentScale] = useState(1);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || prefersReducedMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position relative to center: range from -1 to 1
      const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

      // Invert Y for natural intuitive tilt
      const rX = -mouseY * maxTilt;
      const rY = mouseX * maxTilt;

      setRotX(rX);
      setRotY(rY);
      setCurrentScale(scale);

      if (glareEffect) {
        const glareX = ((e.clientX - rect.left) / width) * 100;
        const glareY = ((e.clientY - rect.top) / height) * 100;
        setGlarePos({ x: glareX, y: glareY, opacity: 0.18 });
      }
    },
    [disabled, prefersReducedMotion, maxTilt, scale, glareEffect]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled || prefersReducedMotion) return;
    setIsHovered(true);
    setCurrentScale(scale);
  }, [disabled, prefersReducedMotion, scale]);

  const handleMouseLeave = useCallback(() => {
    if (disabled || prefersReducedMotion) return;
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
    setCurrentScale(1);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, [disabled, prefersReducedMotion]);

  if (disabled || prefersReducedMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className="transform-gpu transition-transform"
      onClick={onClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${currentScale}, ${currentScale}, ${currentScale})`,
          transition: isHovered
            ? 'transform 0.12s cubic-bezier(0.2, 0, 0, 1)'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transformStyle: 'preserve-3d'
        }}
        className={`relative will-change-transform ${className}`}
      >
        {children}

        {/* Dynamic 3D Glare Specular Highlight */}
        {glareEffect && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.7), transparent 70%)`
            }}
          />
        )}
      </div>
    </div>
  );
};
