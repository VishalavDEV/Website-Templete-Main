import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedBall: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Spin rotation
  const spinRotate = isClicked || isCart 
    ? [0, 360 * 3]
    : isHovered 
      ? [0, 360] 
      : [0, -10, 10, 0];

  const spinTransition = {
    duration: isClicked || isCart ? 1.0 : isHovered ? 1.5 : 3.0,
    repeat: Infinity,
    ease: (isHovered || isClicked || isCart ? 'linear' : 'easeInOut') as any
  };

  // Bounce path coordinates (Click state)
  const bounceY = isClicked 
    ? [0, -50, 0, -30, 0, -15, 0] 
    : isCart 
      ? [0, -40, 0, -30, -100] 
      : [0, 0];

  // Squash and stretch parameters
  const bounceScaleY = isClicked 
    ? [0.8, 1.15, 0.8, 1.1, 0.8, 1.05, 0.9, 1] 
    : isCart 
      ? [0.8, 1.15, 0.8, 1.1, 1] 
      : [1, 1];

  const bounceScaleX = isClicked 
    ? [1.2, 0.85, 1.2, 0.9, 1.2, 0.95, 1.1, 1] 
    : isCart 
      ? [1.2, 0.85, 1.2, 0.9, 1] 
      : [1, 1];

  const bounceTransition = {
    duration: isClicked ? 1.5 : isCart ? 1.2 : 0.5,
    ease: 'easeInOut' as any
  };

  const ballTranslateX = isCart ? [0, 60, 120, 180, 220] : [0, 0];

  return (
    <div className={`toy-ball-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          x: ballTranslateX,
          y: bounceY,
          scaleY: bounceScaleY,
          scaleX: bounceScaleX
        }}
        transition={bounceTransition}
        style={{ width: '100%', height: '100%', originY: 1 }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Floor Shadow (scales down as ball rises) */}
          <motion.ellipse
            cx="80"
            cy="86"
            animate={{
              rx: isClicked || isCart ? [30, 12, 30, 16, 30, 20, 30] : [30, 30],
              ry: isClicked || isCart ? [4, 1.5, 4, 2, 4, 3, 4] : [4, 4],
              opacity: isClicked || isCart ? [0.4, 0.1, 0.4, 0.15, 0.4, 0.2, 0.4] : [0.4, 0.4]
            }}
            fill="black"
            transition={bounceTransition}
          />

          {/* Ball Circle with Spin Rotation */}
          <motion.g
            cx="80"
            cy="54"
            animate={{ rotate: spinRotate }}
            transition={spinTransition}
            style={{ originX: '80px', originY: '54px' }}
          >
            {/* Main Sphere outline */}
            <circle cx="80" cy="54" r="26" fill="url(#ballGrad)" stroke="#1E293B" strokeWidth="1.5" />

            {/* Neon Stripes / Curved Ribbons */}
            <path d="M54 54C54 42 66 30 80 30C66 30 54 42 54 54Z" fill="var(--secondary)" opacity="0.85" />
            <path d="M80 30C94 30 106 42 106 54C106 42 94 30 80 30Z" fill="var(--accent)" opacity="0.85" />
            <path d="M54 54C54 66 66 78 80 78C66 78 54 66 54 54Z" fill="var(--primary)" opacity="0.85" />
            <path d="M80 78C94 78 106 66 106 54C106 66 94 78 80 78Z" fill="#FBBF24" opacity="0.85" />

            {/* Center Core Cap */}
            <circle cx="80" cy="54" r="4.5" fill="white" stroke="#1E293B" strokeWidth="1" />
          </motion.g>

          <defs>
            <radialGradient id="ballGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
