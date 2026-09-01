import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedTeddy: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Ear wiggle rotation
  const earRotate = isClicked 
    ? [-15, 15, -15, 15, 0] 
    : isHovered 
      ? [-8, 8, -8, 8, 0] 
      : [-3, 3, -3, 0];

  const earTransition = {
    duration: 0.6,
    repeat: isHovered || isClicked ? 3 : Infinity,
    repeatDelay: isHovered || isClicked ? 0 : 2.5
  };

  // Arm Wave (Left paw)
  const armWave = isHovered 
    ? [0, -40, -10, -40, -10, 0] 
    : isClicked 
      ? [0, -45, 0, -45, 0] 
      : 0;

  // Jump (Click state)
  const jumpY = isClicked ? [0, -22, 0, -10, 0] : 0;
  const jumpRotate = isClicked ? [0, 5, -5, 0] : 0;
  const slideX = isCart ? [0, 220] : 0;

  return (
    <div className={`toy-teddy-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          y: jumpY,
          rotate: jumpRotate,
          x: slideX
        }}
        transition={{
          duration: isClicked ? 1.4 : isCart ? 1.0 : 0.5,
          ease: 'easeInOut'
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Shadow */}
          <ellipse cx="80" cy="85" rx="30" ry="5" fill="black" opacity="0.3" />

          {/* Teddy Structure */}
          <g>
            {/* Left Ear */}
            <motion.g
              cx="54"
              cy="24"
              animate={{ rotate: earRotate }}
              transition={earTransition}
              style={{ originX: '54px', originY: '24px' }}
            >
              <circle cx="54" cy="24" r="11" fill="#B45309" />
              <circle cx="54" cy="24" r="6" fill="#F472B6" opacity="0.8" />
            </motion.g>

            {/* Right Ear */}
            <motion.g
              cx="106"
              cy="24"
              animate={{ rotate: earRotate }}
              transition={earTransition}
              style={{ originX: '106px', originY: '24px' }}
            >
              <circle cx="106" cy="24" r="11" fill="#B45309" />
              <circle cx="106" cy="24" r="6" fill="#F472B6" opacity="0.8" />
            </motion.g>

            {/* Left Arm (paw) - Waving */}
            <motion.g
              cx="52"
              cy="52"
              animate={{ rotate: armWave }}
              transition={{ duration: 1.2, ease: 'easeInOut', repeat: isHovered ? Infinity : 0 }}
              style={{ originX: '52px', originY: '52px' }}
            >
              <ellipse cx="44" cy="56" rx="9" ry="14" fill="#B45309" transform="rotate(-30 44 56)" />
              <circle cx="44" cy="56" r="4.5" fill="#FCD34D" />
            </motion.g>

            {/* Right Arm (paw) - Static */}
            <g>
              <ellipse cx="116" cy="56" rx="9" ry="14" fill="#B45309" transform="rotate(30 116 56)" />
              <circle cx="116" cy="56" r="4.5" fill="#FCD34D" />
            </g>

            {/* Left Leg */}
            <ellipse cx="64" cy="78" rx="10" ry="7" fill="#92400E" />
            <circle cx="64" cy="78" r="5" fill="#FCD34D" />

            {/* Right Leg */}
            <ellipse cx="96" cy="78" rx="10" ry="7" fill="#92400E" />
            <circle cx="96" cy="78" r="5" fill="#FCD34D" />

            {/* Body */}
            <ellipse cx="80" cy="62" rx="22" ry="18" fill="#B45309" />
            {/* Belly Patch */}
            <ellipse cx="80" cy="62" rx="13" ry="11" fill="#FCD34D" opacity="0.9" />

            {/* Head */}
            <circle cx="80" cy="38" r="20" fill="#B45309" />

            {/* Snout */}
            <ellipse cx="80" cy="44" rx="7.5" ry="5.5" fill="#FCD34D" />
            <ellipse cx="80" cy="41.5" rx="3.5" ry="2.5" fill="#1E293B" /> {/* Nose */}
            <path d="M80 44V47C80 47 78 48 77 48" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" />
            <path d="M80 44V47C80 47 82 48 83 48" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" />

            {/* Eyes */}
            <circle cx="72" cy="34" r="2.5" fill="#1E293B" />
            <circle cx="73" cy="33" r="0.75" fill="white" />
            <circle cx="88" cy="34" r="2.5" fill="#1E293B" />
            <circle cx="89" cy="33" r="0.75" fill="white" />

            {/* Pink cheeks */}
            <circle cx="68" cy="39" r="1.5" fill="#F472B6" opacity="0.6" />
            <circle cx="92" cy="39" r="1.5" fill="#F472B6" opacity="0.6" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
