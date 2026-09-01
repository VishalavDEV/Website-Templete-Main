import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedLego: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Assembly flag
  const isAssembled = isClicked || isCart;

  // Keyframes for the 4 Lego bricks
  // 1. Blue Brick (Base 2x4)
  const blueX = isAssembled ? 0 : isHovered ? 18 : 22;
  const blueY = isAssembled ? 0 : isHovered ? 12 : 16;
  const blueRotate = isAssembled ? 0 : isHovered ? 8 : 12;

  // 2. Red Brick (Left Pillar 2x2)
  const redX = isAssembled ? 0 : isHovered ? -16 : -22;
  const redY = isAssembled ? 0 : isHovered ? -12 : -18;
  const redRotate = isAssembled ? 0 : isHovered ? -12 : -18;

  // 3. Green Brick (Right Pillar 2x2)
  const greenX = isAssembled ? 0 : isHovered ? 14 : 20;
  const greenY = isAssembled ? 0 : isHovered ? -14 : -20;
  const greenRotate = isAssembled ? 0 : isHovered ? 10 : 15;

  // 4. Yellow Brick (Top Arch 2x2)
  const yellowX = isAssembled ? 0 : isHovered ? -10 : -14;
  const yellowY = isAssembled ? 0 : isHovered ? -22 : -28;
  const yellowRotate = isAssembled ? 0 : isHovered ? -6 : -10;

  // Cart animation (swooping whole stack up/right)
  const stackTranslateX = isCart ? [0, 20, 220] : 0;
  const stackTranslateY = isCart ? [0, -10, -220] : 0;
  const stackScale = isCart ? [1, 1.1, 0.4] : 1;

  return (
    <div className={`toy-lego-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ 
          x: stackTranslateX,
          y: stackTranslateY,
          scale: stackScale
        }}
        transition={{
          duration: isCart ? 1.2 : 0.5,
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
          {/* Base shadow */}
          <ellipse cx="80" cy="88" rx="42" ry="5" fill="black" opacity="0.35" />

          {/* Group 1: Blue Brick (Base) - Target: cx=80, cy=72 */}
          <motion.g
            animate={{ x: blueX, y: blueY, rotate: blueRotate }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ originX: '80px', originY: '72px' }}
          >
            {/* Studs */}
            <rect x="62" y="60" width="8" height="4" fill="#1D4ED8" rx="1" />
            <rect x="74" y="60" width="8" height="4" fill="#1D4ED8" rx="1" />
            <rect x="86" y="60" width="8" height="4" fill="#1D4ED8" rx="1" />
            <rect x="98" y="60" width="8" height="4" fill="#1D4ED8" rx="1" />
            {/* Brick block (2x4) */}
            <rect x="58" y="64" width="50" height="16" fill="#2563EB" rx="1" stroke="#1E40AF" strokeWidth="1" />
          </motion.g>

          {/* Group 2: Red Brick (Left) - Target: cx=68, cy=52 */}
          <motion.g
            animate={{ x: redX, y: redY, rotate: redRotate }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ originX: '68px', originY: '52px' }}
          >
            {/* Studs */}
            <rect x="62" y="40" width="8" height="4" fill="#B91C1C" rx="1" />
            <rect x="74" y="40" width="8" height="4" fill="#B91C1C" rx="1" />
            {/* Brick block (2x2) */}
            <rect x="58" y="44" width="26" height="16" fill="#DC2626" rx="1" stroke="#991B1B" strokeWidth="1" />
          </motion.g>

          {/* Group 3: Green Brick (Right) - Target: cx=92, cy=52 */}
          <motion.g
            animate={{ x: greenX, y: greenY, rotate: greenRotate }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ originX: '92px', originY: '52px' }}
          >
            {/* Studs */}
            <rect x="86" y="40" width="8" height="4" fill="#047857" rx="1" />
            <rect x="98" y="40" width="8" height="4" fill="#047857" rx="1" />
            {/* Brick block (2x2) */}
            <rect x="82" y="44" width="26" height="16" fill="#059669" rx="1" stroke="#065F46" strokeWidth="1" />
          </motion.g>

          {/* Group 4: Yellow Brick (Top) - Target: cx=80, cy=32 */}
          <motion.g
            animate={{ x: yellowX, y: yellowY, rotate: yellowRotate }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ originX: '80px', originY: '32px' }}
          >
            {/* Studs */}
            <rect x="74" y="20" width="8" height="4" fill="#B45309" rx="1" />
            <rect x="86" y="20" width="8" height="4" fill="#B45309" rx="1" />
            {/* Brick block (2x2) */}
            <rect x="70" y="24" width="26" height="16" fill="#D97706" rx="1" stroke="#92400E" strokeWidth="1" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
