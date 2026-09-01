import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedAirplane: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Float/Bobbing (idle/hover)
  const bobY = isClicked || isCart ? [0, 0] : [0, -8, 0];
  const bobTransition = {
    duration: 2.2,
    repeat: Infinity,
    ease: 'easeInOut' as any
  };

  // Propeller spin
  const propRotate = isClicked || isCart 
    ? [0, 360 * 10] 
    : isHovered 
      ? [0, 360 * 5] 
      : [0, 360];

  const propTransition = {
    duration: isClicked || isCart ? 1.0 : isHovered ? 0.3 : 1.5,
    repeat: Infinity,
    ease: 'linear' as any
  };

  // Flight loop stunt sequence (click state)
  let flightPathX: any = [0, 0];
  let flightPathY: any = [0, 0];
  let flightRotate: any = [0, 0];
  let flightTransition: any = {};

  if (isClicked) {
    flightPathX = [0, 60, 100, 110, 70, 0];
    flightPathY = [0, -15, -60, -90, -30, 0];
    flightRotate = [0, -15, -150, -270, -360, 0];
    flightTransition = {
      duration: 1.8,
      ease: 'easeInOut' as any
    };
  } else if (isCart) {
    flightPathX = [0, -20, 260];
    flightPathY = [0, 5, -80];
    flightRotate = [0, 10, -15];
    flightTransition = {
      duration: 1.2,
      ease: 'easeIn' as any
    };
  }

  return (
    <div className={`toy-airplane-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          x: flightPathX,
          y: flightPathY,
          rotate: flightRotate
        }}
        transition={flightTransition}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Shadow (follows bobbing) */}
          <motion.ellipse
            cx="80"
            cy="88"
            animate={{
              rx: isClicked || isCart ? [0, 0] : [35, 25, 35],
              ry: isClicked || isCart ? [0, 0] : [4, 2, 4],
              opacity: isClicked || isCart ? [0, 0] : 0.25
            }}
            fill="black"
            transition={bobTransition}
          />

          {/* Plane Body with floating float */}
          <motion.g
            animate={{ y: bobY }}
            transition={bobTransition}
          >
            {/* Package Cargo hanging (only in Cart state) */}
            {isCart && (
              <g>
                <line x1="80" y1="58" x2="60" y2="82" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
                {/* Small package */}
                <rect x="46" y="82" width="22" height="15" fill="#B45309" rx="2" />
                {/* Gift Ribbon */}
                <line x1="57" y1="82" x2="57" y2="97" stroke="#EF4444" strokeWidth="2" />
                <line x1="46" y1="89" x2="68" y2="89" stroke="#EF4444" strokeWidth="2" />
              </g>
            )}

            {/* Back Tail Wing */}
            <path d="M22 46L8 28V48L22 52Z" fill="var(--secondary)" />

            {/* Jet Engines / Exhaust Glow */}
            {(isHovered || isClicked || isCart) && (
              <polygon points="12,46 2,42 2,52 12,48" fill="#F97316">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="0.2s" repeatCount="indefinite" />
              </polygon>
            )}

            {/* Wings Backing */}
            <path d="M86 52L54 78L46 76L74 48Z" fill="#3B82F6" />

            {/* Fuselage / Main Cabin Body */}
            <path
              d="M20 48C20 38 48 34 88 34C118 34 146 38 152 48C146 58 118 60 88 60C48 60 20 58 20 48Z"
              fill="url(#planeGrad)"
            />

            {/* Cockpit Window */}
            <path d="M112 36C122 36 134 40 138 46H104C104 40 108 36 112 36Z" fill="#00F2FE" opacity="0.7" />

            {/* Wings Front overlay */}
            <path d="M96 46L68 84L58 82L86 42Z" fill="var(--primary)" />
            <path d="M88 43L66 76L62 75L82 40Z" fill="white" opacity="0.3" />

            {/* Propeller Mount Spinner (Nose cone) */}
            <path d="M152 44C154 44 156 46 156 48C156 50 154 52 152 52Z" fill="#EF4444" />

            {/* Propeller blades */}
            <motion.g
              cx="154"
              cy="48"
              animate={{ rotate: propRotate }}
              transition={propTransition}
              style={{ originX: '154px', originY: '48px' }}
            >
              <ellipse cx="154" cy="30" rx="3" ry="16" fill="#F8FAFC" opacity="0.9" />
              <ellipse cx="154" cy="66" rx="3" ry="16" fill="#F8FAFC" opacity="0.9" />
            </motion.g>
          </motion.g>

          <defs>
            <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="60%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="#E0F2FE" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
