import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedCar: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  // Determine animation settings based on state
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Chassis Vibration
  const vibrationY = isHovered 
    ? [0, -2, 0, -2, 0] 
    : isClicked 
      ? [0, -4, 0, -4, 0, -4, 0] 
      : [0, -0.5, 0, -0.5, 0];
  
  const vibrationTransition = {
    duration: isHovered ? 0.15 : isClicked ? 0.1 : 0.6,
    repeat: Infinity,
    ease: 'easeInOut' as any
  };

  // Car translation path (moving off-screen and back)
  let animateTranslateX: any = [0, 0];
  let translateTransition: any = {};

  if (isClicked) {
    animateTranslateX = [0, -10, 200, -200, 0];
    translateTransition = {
      duration: 1.8,
      times: [0, 0.1, 0.5, 0.75, 1],
      ease: 'easeInOut' as any
    };
  } else if (isCart) {
    animateTranslateX = [0, -10, 300];
    translateTransition = {
      duration: 1.0,
      times: [0, 0.1, 1],
      ease: 'easeIn' as any
    };
  }

  // Wheel Rotation
  const wheelRotate = isClicked || isCart 
    ? [0, 360 * 4] 
    : isHovered 
      ? [0, 360] 
      : [0, 5, 0];

  const wheelTransition = {
    duration: isClicked || isCart ? 1.0 : isHovered ? 0.5 : 2,
    repeat: isClicked || isCart ? 1 : Infinity,
    ease: 'linear' as any
  };

  return (
    <div className={`toy-car-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ x: animateTranslateX }}
        transition={translateTransition}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Exhaust Smoke (only during hover/click) */}
          {(isHovered || isClicked) && (
            <motion.g>
              <motion.circle
                cx="15"
                cy="68"
                r="3"
                fill="#94A3B8"
                opacity={0.8}
                animate={{ x: [-5, -25], y: [-2, -15], scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.1 }}
              />
              <motion.circle
                cx="15"
                cy="68"
                r="2"
                fill="#CBD5E1"
                opacity={0.6}
                animate={{ x: [-8, -35], y: [2, -8], scale: [1, 2.2], opacity: [0.6, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.3 }}
              />
            </motion.g>
          )}

          {/* Road shadow */}
          <ellipse cx="80" cy="78" rx="65" ry="8" fill="black" opacity="0.4" />

          {/* Main Car Body Group with Vibration */}
          <motion.g
            animate={{ y: vibrationY }}
            transition={vibrationTransition}
          >
            {/* Spoiler */}
            <path d="M15 48L32 44L28 54L13 54Z" fill="var(--secondary)" />
            <rect x="18" y="54" width="6" height="10" fill="#E11D48" />

            {/* Rear bumper */}
            <path d="M22 64H38V72H22V64Z" fill="#B91C1C" />

            {/* Main Chassis body */}
            <path
              d="M30 64C30 52 40 42 62 42H115C128 42 145 52 148 64H150C155 64 157 68 152 72C148 74 135 74 135 74H28C28 74 18 74 15 72C12 70 14 64 22 64H30Z"
              fill="url(#carGrad)"
            />

            {/* Neon Accent Stripe */}
            <path d="M35 66H130C132 66 138 67 140 68L120 70H38L35 66Z" fill="var(--accent)" />

            {/* Cabin Glass */}
            <path d="M60 44L75 30H108L120 44H60Z" fill="rgba(0, 242, 254, 0.45)" stroke="var(--accent)" strokeWidth="1" />
            <path d="M80 32L92 32L88 42H75L80 32Z" fill="white" opacity="0.3" />

            {/* Headlights */}
            <path d="M142 62L149 64V68L142 66Z" fill="#FDE047" />
            {/* Headlight beam */}
            <motion.polygon
              points="149,64 190,52 190,80 149,68"
              fill="url(#lightBeam)"
              opacity={0.4}
              animate={{ opacity: isHovered || isClicked ? [0.4, 0.7, 0.4] : 0 }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </motion.g>

          {/* Front Wheel */}
          <motion.g
            cx="120"
            cy="74"
            animate={{ rotate: wheelRotate }}
            transition={wheelTransition}
            style={{ originX: '120px', originY: '74px' }}
          >
            <circle cx="120" cy="74" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <circle cx="120" cy="74" r="9" fill="#94A3B8" />
            <circle cx="120" cy="74" r="4" fill="#0F172A" />
            {/* Wheel Spokes */}
            <line x1="120" y1="65" x2="120" y2="83" stroke="#0F172A" strokeWidth="2" />
            <line x1="111" y1="74" x2="129" y2="74" stroke="#0F172A" strokeWidth="2" />
          </motion.g>

          {/* Rear Wheel */}
          <motion.g
            cx="48"
            cy="74"
            animate={{ rotate: wheelRotate }}
            transition={wheelTransition}
            style={{ originX: '48px', originY: '74px' }}
          >
            <circle cx="48" cy="74" r="14" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <circle cx="48" cy="74" r="9" fill="#94A3B8" />
            <circle cx="48" cy="74" r="4" fill="#0F172A" />
            {/* Wheel Spokes */}
            <line x1="48" y1="65" x2="48" y2="83" stroke="#0F172A" strokeWidth="2" />
            <line x1="39" y1="74" x2="57" y2="74" stroke="#0F172A" strokeWidth="2" />
          </motion.g>

          {/* Gradients definition */}
          <defs>
            <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
