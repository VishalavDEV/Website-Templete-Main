import React from 'react';
import { ThreeDCard } from './ThreeDCard';

interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  floating?: boolean;
  enable3D?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  children,
  className = '',
  hover = true,
  glass = false,
  floating = false,
  enable3D = false,
  onClick
}) => {
  const baseClasses = glass
    ? 'glass-card rounded-3xl backdrop-blur-xl border border-white/70 shadow-xl'
    : 'bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/70 shadow-md';

  const hoverClasses = hover && !enable3D
    ? 'floating-card hover:border-teal-400/60 hover:bg-white cursor-pointer'
    : '';

  const floatAnimation = floating ? 'animate-float-card' : '';

  const content = (
    <div
      id={id}
      onClick={!enable3D ? onClick : undefined}
      className={`${baseClasses} ${hoverClasses} ${floatAnimation} ${className}`}
    >
      {children}
    </div>
  );

  if (enable3D) {
    return (
      <ThreeDCard onClick={onClick} id={id}>
        {content}
      </ThreeDCard>
    );
  }

  return content;
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-6 sm:p-7 border-b border-slate-100/80 ${className}`}>{children}</div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-6 sm:p-7 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-6 sm:p-7 bg-slate-50/60 border-t border-slate-100/80 rounded-b-3xl ${className}`}>{children}</div>
);
