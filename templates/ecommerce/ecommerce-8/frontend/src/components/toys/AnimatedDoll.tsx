import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedDoll: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Breathing movement
  const breatheScaleY = isHovered ? [1, 1.03, 1] : [1, 1.015, 1];
  const breatheDuration = isHovered ? 1.0 : 2.0;

  // Arm Wave animation (rotate right arm)
  const armWaveRotate = isHovered 
    ? [0, -35, 10, -35, 10, 0] 
    : isClicked 
      ? [0, -45, 0, -45, 0] 
      : [0, 0];

  // Dance / Spin (clicked state)
  const danceY = isClicked ? [0, -25, 0, -15, 0] : [0, 0];
  const danceRotate = isClicked ? [0, 180, 360] : isCart ? [0, 360] : [0, 0];
  const danceX = isCart ? [0, 200] : [0, 0];

  return (
    <div className={`toy-doll-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          y: danceY,
          rotate: danceRotate,
          x: danceX
        }}
        transition={{
          duration: isClicked ? 1.5 : isCart ? 1.0 : 0.5,
          ease: 'easeInOut' as any
        }}
        style={{ width: '100%', height: '100%', originX: 0.5, originY: 0.5 }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Floor Shadow */}
          <ellipse cx="80" cy="85" rx="35" ry="6" fill="black" opacity="0.3" />

          {/* Dancing Doll Base Structure */}
          <motion.g
            animate={{ scaleY: breatheScaleY }}
            transition={{ duration: breatheDuration, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originX: '80px', originY: '85px' }}
          >
            {/* Left Arm (Static/Subtle float) */}
            <motion.path
              d="M58 48C50 42 42 46 36 52"
              stroke="#FBCFE8"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{ rotate: isHovered ? [0, 10, 0] : [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ originX: '58px', originY: '48px' }}
            />

            {/* Right Arm (Waving) */}
            <motion.path
              d="M102 48C110 42 118 46 124 52"
              stroke="#FBCFE8"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{ rotate: armWaveRotate }}
              transition={{ duration: 1.2, ease: 'easeInOut', repeat: isHovered ? Infinity : 0 }}
              style={{ originX: '102px', originY: '48px' }}
            />

            {/* Legs / Pointe Shoes */}
            <rect x="74" y="65" width="4" height="20" fill="#FBCFE8" rx="2" />
            <rect x="82" y="65" width="4" height="20" fill="#FBCFE8" rx="2" />
            {/* Ballet Shoes */}
            <path d="M72 83H78L76 87H72V83Z" fill="var(--secondary)" />
            <path d="M82 83H88L86 87H82V83Z" fill="var(--secondary)" />

            {/* Gown Skirt */}
            <path
              d="M52 56L34 76C34 76 45 82 80 82C115 82 126 76 126 76L108 56H52Z"
              fill="url(#dressGrad)"
            />
            {/* Sparkles on Skirt */}
            <circle cx="55" cy="70" r="1.5" fill="white" opacity="0.8" />
            <circle cx="80" cy="74" r="2" fill="white" opacity="0.9" />
            <circle cx="105" cy="68" r="1.5" fill="white" opacity="0.8" />
            <circle cx="70" cy="64" r="1" fill="white" opacity="0.7" />
            <circle cx="90" cy="64" r="1" fill="white" opacity="0.7" />

            {/* Bodice */}
            <path d="M62 46V58H98V46C98 46 80 50 62 46Z" fill="#F43F5E" />
            <path d="M72 48L80 56L88 48" stroke="white" strokeWidth="1" />

            {/* Neck & Head */}
            <rect x="76" y="38" width="8" height="10" fill="#FDD1E7" />
            <circle cx="80" cy="30" r="12" fill="#FDD1E7" />

            {/* Face details */}
            {/* Eyes */}
            <circle cx="76" cy="28" r="1.5" fill="#1E293B" />
            <circle cx="84" cy="28" r="1.5" fill="#1E293B" />
            {/* Cheeks */}
            <circle cx="73" cy="32" r="1.5" fill="#F43F5E" opacity="0.5" />
            <circle cx="87" cy="32" r="1.5" fill="#F43F5E" opacity="0.5" />
            {/* Smile */}
            <path d="M78 33C78 35 82 35 82 33" stroke="#F43F5E" strokeWidth="1" strokeLinecap="round" />

            {/* Hair */}
            <path d="M68 28C68 18 92 18 92 28C92 22 68 22 68 28Z" fill="#F59E0B" />
            <circle cx="80" cy="16" r="5" fill="#F59E0B" /> {/* Hair Bun */}

            {/* Tiara / Crown */}
            <path d="M72 19L75 13L80 16L85 13L88 19Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
            <circle cx="80" cy="15" r="1" fill="#EF4444" />
          </motion.g>

          {/* Gradients definition */}
          <defs>
            <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
