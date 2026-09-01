import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'accent' | 'outline' | 'primary';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  style = {},
  variant = 'accent'
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.innerWidth < 1024) return; // Disable on touch/mobile
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * 0.25; // max pull
    const distanceY = (clientY - centerY) * 0.25;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: 'var(--accent-cobalt)',
          color: '#FFFFFF',
          border: 'none'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          border: '1px solid rgba(255,255,255,0.3)'
        };
      case 'primary':
      default:
        return {
          backgroundColor: '#111827',
          color: '#FFFFFF',
          border: 'none'
        };
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.5 }}
      onClick={onClick}
      className={`btn ${className}`}
      style={{
        ...getVariantStyles(),
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        ...style
      }}
    >
      {/* Shine Effect Overlay */}
      <motion.div
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          transform: 'skewX(-20deg)',
          pointerEvents: 'none'
        }}
      />
      <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </span>
    </motion.button>
  );
};
