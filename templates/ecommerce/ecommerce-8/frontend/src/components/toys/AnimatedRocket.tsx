import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedRocket: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Rumble shake
  const rumbleX = isClicked 
    ? [-3, 3, -3, 3, -3, 3, 0] 
    : isHovered 
      ? [-1, 1, -1, 1, -1, 1, 0] 
      : [0, 0];

  const rumbleTransition = {
    duration: isClicked ? 0.1 : 0.2,
    repeat: isClicked || isHovered ? Infinity : 0,
    ease: 'linear' as any
  };

  // Launch trajectory path
  let launchTranslateY: any = [0, 0];
  let launchTranslateX: any = [0, 0];
  let launchScale: any = [1, 1];
  let launchTransition: any = {};

  if (isClicked) {
    launchTranslateY = [0, 4, -200, 100, 0];
    launchScale = [1, 1.05, 0.2, 0.8, 1];
    launchTransition = {
      duration: 2.2,
      times: [0, 0.1, 0.5, 0.75, 1],
      ease: 'easeInOut' as any
    };
  } else if (isCart) {
    launchTranslateY = [0, 4, -300];
    launchTranslateX = [0, 10, 200];
    launchScale = [1, 1.1, 0.1];
    launchTransition = {
      duration: 1.2,
      times: [0, 0.1, 1],
      ease: 'easeIn' as any
    };
  }

  return (
    <div className={`toy-rocket-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          y: launchTranslateY,
          x: launchTranslateX,
          scale: launchScale
        }}
        transition={launchTransition}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Pad shadow */}
          <ellipse cx="80" cy="86" rx="20" ry="4" fill="black" opacity="0.35" />

          {/* Engine Exhaust Flame (only when firing) */}
          {(isHovered || isClicked || isCart) && (
            <motion.g
              animate={{ scaleY: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.15, repeat: Infinity }}
              style={{ originX: '80px', originY: '74px' }}
            >
              {/* Smoke clouds */}
              <circle cx="70" cy="80" r="6" fill="#64748B" opacity="0.6" />
              <circle cx="90" cy="80" r="6" fill="#64748B" opacity="0.6" />
              <circle cx="80" cy="84" r="8" fill="#475569" opacity="0.8" />
              {/* Rocket Booster Flame */}
              <path d="M74 74L80 92L86 74H74Z" fill="#F97316" />
              <path d="M76 74L80 85L84 74H76Z" fill="#FDE047" />
            </motion.g>
          )}

          {/* Rocket Body with Rumble Shake */}
          <motion.g
            animate={{ x: rumbleX }}
            transition={rumbleTransition}
          >
            {/* Left Fin */}
            <path d="M64 54L52 74H64V54Z" fill="var(--secondary)" />

            {/* Right Fin */}
            <path d="M96 54L108 74H96V54Z" fill="var(--secondary)" />

            {/* Main Rocket Tube */}
            <rect x="64" y="24" width="32" height="50" fill="url(#rocketGrad)" rx="4" stroke="#475569" strokeWidth="1" />

            {/* Nose Cone */}
            <path d="M64 24C64 24 64 6 80 6C96 6 96 24 96 24H64Z" fill="var(--secondary)" />

            {/* Porthole Window */}
            <circle cx="80" cy="38" r="7" fill="#00F2FE" stroke="#475569" strokeWidth="1.5" />
            {/* Glass shine */}
            <path d="M76 34C79 32 82 32 84 34" stroke="white" strokeWidth="1" strokeLinecap="round" />
            {/* Inside pilot smiley emoji */}
            <circle cx="80" cy="38" r="3" fill="#FBBF24" />

            {/* Paint details (Stripe) */}
            <rect x="64" y="48" width="32" height="4" fill="var(--accent)" />

            {/* Engine nozzle */}
            <rect x="72" y="74" width="16" height="4" fill="#334155" rx="1" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
