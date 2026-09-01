import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedDinosaur: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Body shake (roar) or bobbing (walk)
  const bodyShakeY = isClicked 
    ? [0, -3, 3, -3, 3, -3, 0] 
    : isCart 
      ? [0, -6, 0, -6, 0] 
      : [0, 0];
  
  const bodyShakeX = isClicked 
    ? [0, -2, 2, -2, 2, -2, 0] 
    : isCart 
      ? [0, 40, 90, 140, 220] 
      : [0, 0];

  const bodyTransition = {
    duration: isClicked ? 0.8 : isCart ? 1.5 : 0.5,
    ease: 'easeInOut' as any
  };

  // Tail wagging
  const tailRotate = isClicked 
    ? [-15, 15, -15] 
    : isHovered 
      ? [-10, 10, -10] 
      : [-5, 5, -5];

  // Head tilt
  const headRotate = isClicked 
    ? [-12, -12, 0] 
    : isHovered 
      ? [0, 8, 0] 
      : [0, 0];

  // Mouth open (lower jaw)
  const jawRotate = isClicked ? [0, 20, 0] : [0, 0];

  return (
    <div className={`toy-dino-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          x: bodyShakeX,
          y: bodyShakeY
        }}
        transition={bodyTransition}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Shadow */}
          <ellipse cx="80" cy="86" rx="36" ry="6" fill="black" opacity="0.3" />

          {/* Dino Assembly */}
          <g>
            {/* Tail Group */}
            <motion.path
              d="M50 64C35 60 15 50 10 38C15 48 25 58 48 70Z"
              fill="url(#dinoGrad)"
              animate={{ rotate: tailRotate }}
              transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '48px', originY: '68px' }}
            />
            {/* Spikes on Tail */}
            <path d="M11 39L6 42L12 45Z" fill="#F97316" />
            <path d="M17 48L12 52L20 54Z" fill="#F97316" />

            {/* Back Leg */}
            <rect x="54" y="68" width="10" height="18" fill="#047857" rx="3" />
            <path d="M50 84H66L62 88H50V84Z" fill="#065F46" />

            {/* Torso / Belly */}
            <path
              d="M48 50C48 50 40 60 52 74C64 88 88 88 94 74C98 65 94 54 94 50H48Z"
              fill="url(#dinoGrad)"
            />
            <path d="M60 54C60 68 70 80 84 80C86 80 88 78 88 74C78 74 68 64 68 54H60Z" fill="#A7F3D0" opacity="0.6" />

            {/* Tiny Front Arm */}
            <path d="M88 56C94 56 98 58 98 62" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
            <path d="M98 62L101 64M98 62L99 66" stroke="#34D399" strokeWidth="2.5" />

            {/* Front Leg */}
            <rect x="74" y="68" width="12" height="18" fill="var(--success)" rx="3" />
            <path d="M70 84H88L84 88H70V84Z" fill="#047857" />

            {/* Head & Jaws Group */}
            <motion.g
              animate={{ rotate: headRotate }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ originX: '84px', originY: '50px' }}
            >
              {/* Spikes on Back of Neck */}
              <path d="M72 40L68 36L74 38Z" fill="#F97316" />
              <path d="M78 46L74 42L80 44Z" fill="#F97316" />

              {/* Upper Head */}
              <path
                d="M74 48V30C74 24 88 20 108 20C122 20 128 26 128 36C128 42 118 46 110 46H74Z"
                fill="url(#dinoGrad)"
              />
              
              {/* Eye */}
              <circle cx="94" cy="28" r="4.5" fill="white" />
              <circle cx="96" cy="28" r="2" fill="#1E293B" />
              <circle cx="98" cy="26" r="0.75" fill="white" />

              {/* Cheeks */}
              <circle cx="94" cy="35" r="2" fill="#EF4444" opacity="0.4" />

              {/* Nostril */}
              <circle cx="120" cy="32" r="1" fill="#047857" />

              {/* Upper Teeth (White Triangles) */}
              <path d="M110 46L112 42L114 46L116 42L118 46" stroke="white" strokeWidth="2" strokeLinecap="round" />

              {/* Lower Jaw (Mouth Open) */}
              <motion.g
                animate={{ rotate: jawRotate }}
                transition={{ duration: 0.4 }}
                style={{ originX: '82px', originY: '46px' }}
              >
                <path d="M82 46H114C114 46 112 56 100 56C90 56 82 50 82 46Z" fill="#059669" />
                {/* Red Tongue */}
                <path d="M88 47C94 47 98 49 98 52C94 54 88 52 88 47Z" fill="#EF4444" />
                {/* Lower Teeth */}
                <path d="M102 46L104 49L106 46L108 49L110 46" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </motion.g>
            </motion.g>
          </g>

          <defs>
            <linearGradient id="dinoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
