import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedTrain: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Wheel rotation
  const wheelRotate = isClicked || isCart 
    ? [0, 360 * 4] 
    : isHovered 
      ? [0, 360] 
      : [0, 0];

  const wheelTransition = {
    duration: isClicked || isCart ? 1.2 : 0.8,
    repeat: Infinity,
    ease: 'linear' as any
  };

  // Linkage rod translation (eccentric rotation matching wheels)
  const rodX = isClicked || isCart ? [0, -4, 0, 4, 0] : [0, 0];
  const rodY = isClicked || isCart ? [0, 4, 0, -4, 0] : [0, 0];

  // Train slide translation path
  let trainTranslateX: any = [0, 0];
  let trainTransition: any = {};

  if (isClicked) {
    trainTranslateX = [0, -10, 180, -180, 0];
    trainTransition = {
      duration: 2.0,
      times: [0, 0.1, 0.5, 0.75, 1],
      ease: 'easeInOut' as any
    };
  } else if (isCart) {
    trainTranslateX = [0, -10, 300];
    trainTransition = {
      duration: 1.2,
      times: [0, 0.1, 1],
      ease: 'easeIn' as any
    };
  }

  return (
    <div className={`toy-train-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ x: trainTranslateX }}
        transition={trainTransition}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Track Railway */}
          <line x1="10" y1="84" x2="150" y2="84" stroke="#475569" strokeWidth="3" />
          <line x1="20" y1="84" x2="20" y2="90" stroke="#334155" strokeWidth="2" />
          <line x1="40" y1="84" x2="40" y2="90" stroke="#334155" strokeWidth="2" />
          <line x1="60" y1="84" x2="60" y2="90" stroke="#334155" strokeWidth="2" />
          <line x1="80" y1="84" x2="80" y2="90" stroke="#334155" strokeWidth="2" />
          <line x1="100" y1="84" x2="100" y2="90" stroke="#334155" strokeWidth="2" />
          <line x1="120" y1="84" x2="120" y2="90" stroke="#334155" strokeWidth="2" />
          <line x1="140" y1="84" x2="140" y2="90" stroke="#334155" strokeWidth="2" />

          {/* Steam Puffs */}
          {(isHovered || isClicked || isCart || state === 'idle') && (
            <g>
              <motion.circle
                cx="124"
                cy="26"
                r="3"
                fill="white"
                opacity={0.8}
                animate={{ y: [-5, -25], x: [0, -12], scale: [1, 3], opacity: [0.8, 0] }}
                transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 0.1 }}
              />
              <motion.circle
                cx="124"
                cy="26"
                r="2"
                fill="#E2E8F0"
                opacity={0.6}
                animate={{ y: [-2, -18], x: [1, -5], scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.4 }}
              />
            </g>
          )}

          {/* Headlight beam */}
          {(isHovered || isClicked || isCart) && (
            <motion.polygon
              points="145,54 185,42 185,74 145,58"
              fill="url(#trainLightBeam)"
              opacity={0.4}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}

          {/* Locomotive Body */}
          <g>
            {/* Cargo Box (only in Cart state) */}
            {isCart && (
              <g>
                <rect x="15" y="44" width="26" height="24" fill="#B45309" rx="1" />
                <line x1="15" y1="44" x2="41" y2="68" stroke="#78350F" strokeWidth="1.5" />
                <line x1="41" y1="44" x2="15" y2="68" stroke="#78350F" strokeWidth="1.5" />
                {/* Connecting coupler */}
                <line x1="41" y1="62" x2="52" y2="62" stroke="#475569" strokeWidth="3" />
              </g>
            )}

            {/* Cabin */}
            <path d="M50 38H80V68H50V38Z" fill="url(#trainCabinGrad)" />
            <path d="M46 38H84V42H46V38Z" fill="#B91C1C" /> {/* Roof */}
            <rect x="56" y="46" width="16" height="12" fill="#00F2FE" opacity="0.6" rx="2" /> {/* Window */}

            {/* Boiler Cylinder */}
            <path d="M80 48H132V68H80V48Z" fill="var(--primary)" />
            {/* Boiler bands */}
            <rect x="94" y="46" width="3" height="23" fill="#D97706" />
            <rect x="114" y="46" width="3" height="23" fill="#D97706" />

            {/* Chimney / Funnel */}
            <path d="M120 48L118 28H130L128 48H120Z" fill="#334155" />
            <ellipse cx="124" cy="28" rx="6" ry="2" fill="#EF4444" />

            {/* Cowcatcher / Front Grill */}
            <path d="M132 68L148 76H132V68Z" fill="#E11D48" />

            {/* Front Light */}
            <rect x="132" y="52" width="10" height="8" fill="#FBBF24" rx="1" />
          </g>

          {/* Wheel Back 1 */}
          <motion.g
            cx="64"
            cy="76"
            animate={{ rotate: wheelRotate }}
            transition={wheelTransition}
            style={{ originX: '64px', originY: '76px' }}
          >
            <circle cx="64" cy="76" r="10" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="64" cy="76" r="6" fill="#64748B" />
            <circle cx="64" cy="73" r="2.5" fill="#EF4444" />
          </motion.g>

          {/* Wheel Middle 2 */}
          <motion.g
            cx="94"
            cy="76"
            animate={{ rotate: wheelRotate }}
            transition={wheelTransition}
            style={{ originX: '94px', originY: '76px' }}
          >
            <circle cx="94" cy="76" r="10" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="94" cy="76" r="6" fill="#64748B" />
            <circle cx="94" cy="73" r="2.5" fill="#EF4444" />
          </motion.g>

          {/* Wheel Front 3 */}
          <motion.g
            cx="120"
            cy="76"
            animate={{ rotate: wheelRotate }}
            transition={wheelTransition}
            style={{ originX: '120px', originY: '76px' }}
          >
            <circle cx="120" cy="76" r="10" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="120" cy="76" r="6" fill="#64748B" />
            <circle cx="120" cy="73" r="2.5" fill="#EF4444" />
          </motion.g>

          {/* Linkage Connecting Rod */}
          <motion.line
            x1="64"
            y1="73"
            x2="120"
            y2="73"
            stroke="#94A3B8"
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ x: rodX, y: rodY }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.line
            x1="64"
            y1="73"
            x2="120"
            y2="73"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ x: rodX, y: rodY }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />

          <defs>
            <linearGradient id="trainCabinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="trainLightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
