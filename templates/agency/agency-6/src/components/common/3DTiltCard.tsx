import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;

    // Calculate rotation (-12deg to +12deg)
    const rX = ((mouseY - height / 2) / (height / 2)) * -10;
    const rY = ((mouseX - width / 2) / (width / 2)) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({ x: xPct, y: yPct, opacity: 0.25 });
  };

  const handleMouseLeaveCard = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
    if (onMouseLeave) onMouseLeave();
  };

  const handleMouseEnterCard = () => {
    if (onMouseEnter) onMouseEnter();
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
      className={`relative perspective-1000 transition-transform duration-200 ease-out cursor-pointer ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
      }}
    >
      {/* Light Flare Glare Effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glarePosition.opacity}), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};
