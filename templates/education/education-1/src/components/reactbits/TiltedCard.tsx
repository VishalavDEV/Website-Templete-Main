import React, { useRef, useState } from 'react';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotateX(-yPct * maxTilt * 2);
    setRotateY(xPct * maxTilt * 2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative inline-block w-full ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};
