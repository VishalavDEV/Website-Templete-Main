import React from 'react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  perspective?: number;
  depth?: number;
  onClick?: () => void;
  id?: string;
  style?: React.CSSProperties;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  onClick,
  id,
  style = {}
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      style={style}
      className={`relative w-full h-full ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
