import React from 'react';
import { motion } from 'framer-motion';

interface ToyProps {
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedRobot: React.FC<ToyProps> = ({ state = 'idle', className = '', style }) => {
  const isHovered = state === 'hover';
  const isClicked = state === 'click';
  const isCart = state === 'cart';

  // Eye blinking
  const eyeOpacity = [1, 1, 0.1, 1, 1, 1, 0.1, 1];
  
  // Head wiggle on hover
  const headRotate = isHovered ? [0, -5, 5, -5, 0] : 0;
  
  // Walking animation (Legs and Arms swinging)
  const leftLegRotate = isClicked || isCart ? [-20, 20, -20] : 0;
  const rightLegRotate = isClicked || isCart ? [20, -20, 20] : 0;
  
  const leftArmRotate = isClicked || isCart ? [25, -25, 25] : isHovered ? [0, -10, 0] : 0;
  const rightArmRotate = isClicked || isCart ? [-25, 25, -25] : isHovered ? [0, 10, 0] : 0;

  // Translation offset
  const walkX = isCart ? [0, 220] : isClicked ? [0, -15, 15, -10, 0] : 0;

  return (
    <div className={`toy-robot-wrapper ${className}`} style={{ ...style, position: 'relative', width: '100%', height: '100%' }}>
      <motion.div
        animate={{ x: walkX }}
        transition={{
          duration: isCart ? 1.5 : isClicked ? 2.0 : 0.5,
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
          <ellipse cx="80" cy="88" rx="28" ry="5" fill="black" opacity="0.4" />

          {/* Robot Body Group */}
          <g>
            {/* Left Arm */}
            <motion.g
              cx="54"
              cy="48"
              animate={{ rotate: leftArmRotate }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '54px', originY: '48px' }}
            >
              {/* Shoulder & Arm */}
              <rect x="42" y="46" width="12" height="6" fill="#64748B" rx="2" />
              <path d="M44 52V68C44 70 42 72 40 72H38" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
              {/* Claw */}
              <path d="M34 70C34 74 42 74 42 70" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>

            {/* Right Arm */}
            <motion.g
              cx="106"
              cy="48"
              animate={{ rotate: rightArmRotate }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '106px', originY: '48px' }}
            >
              {/* Shoulder & Arm */}
              <rect x="106" y="46" width="12" height="6" fill="#64748B" rx="2" />
              <path d="M116 52V68C116 70 118 72 120 72H122" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
              {/* Claw */}
              <path d="M126 70C126 74 118 74 118 70" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>

            {/* Left Leg */}
            <motion.g
              cx="70"
              cy="76"
              animate={{ rotate: leftLegRotate }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '70px', originY: '76px' }}
            >
              <rect x="66" y="74" width="8" height="12" fill="#475569" rx="1" />
              <rect x="62" y="84" width="14" height="4" fill="#334155" rx="1" />
            </motion.g>

            {/* Right Leg */}
            <motion.g
              cx="90"
              cy="76"
              animate={{ rotate: rightLegRotate }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '90px', originY: '76px' }}
            >
              <rect x="86" y="74" width="8" height="12" fill="#475569" rx="1" />
              <rect x="84" y="84" width="14" height="4" fill="#334155" rx="1" />
            </motion.g>

            {/* Torso / Body Panel */}
            <rect x="56" y="42" width="48" height="34" fill="url(#botBodyGrad)" rx="6" stroke="#475569" strokeWidth="1.5" />
            {/* Screen indicator */}
            <rect x="62" y="48" width="36" height="14" fill="#0F172A" rx="3" />
            {/* Neon Soundwaves */}
            <line x1="68" y1="55" x2="68" y2="55" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="y2" values="51;59;51" dur="0.8s" repeatCount="indefinite" />
            </line>
            <line x1="74" y1="55" x2="74" y2="55" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="y2" values="49;61;49" dur="0.5s" repeatCount="indefinite" />
            </line>
            <line x1="80" y1="55" x2="80" y2="55" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="y2" values="52;58;52" dur="0.7s" repeatCount="indefinite" />
            </line>
            <line x1="86" y1="55" x2="86" y2="55" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="y2" values="50;60;50" dur="0.6s" repeatCount="indefinite" />
            </line>
            <line x1="92" y1="55" x2="92" y2="55" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="y2" values="53;57;53" dur="0.9s" repeatCount="indefinite" />
            </line>

            {/* Glowing Heart Core */}
            <circle cx="80" cy="69" r="3.5" fill="#EF4444">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* Head Neck */}
            <rect x="74" y="38" width="12" height="6" fill="#64748B" />

            {/* Head Group with Hover tracking */}
            <motion.g
              cx="80"
              cy="38"
              animate={{ rotate: headRotate }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ originX: '80px', originY: '38px' }}
            >
              {/* Ears / Antennas */}
              <line x1="62" y1="28" x2="56" y2="28" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
              <line x1="98" y1="28" x2="104" y2="28" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />

              <line x1="80" y1="18" x2="80" y2="10" stroke="#475569" strokeWidth="2.5" />
              {/* Antenna bulb */}
              <circle cx="80" cy="8" r="3.5" fill="var(--secondary)">
                <animate attributeName="fill" values="#FF4D6D;#00F2FE;#FF4D6D" dur="1s" repeatCount="indefinite" />
              </circle>

              {/* Head block */}
              <rect x="62" y="18" width="36" height="22" fill="url(#botHeadGrad)" rx="4" stroke="#475569" strokeWidth="1.5" />

              {/* Glowing Eyes */}
              <motion.g
                animate={{ opacity: eyeOpacity }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              >
                <rect x="68" y="24" width="8" height="6" fill="var(--accent)" rx="1.5" />
                <rect x="84" y="24" width="8" height="6" fill="var(--accent)" rx="1.5" />
                {/* Pupils */}
                <circle cx="72" cy="27" r="1.5" fill="#0F172A" />
                <circle cx="88" cy="27" r="1.5" fill="#0F172A" />
              </motion.g>

              {/* Mouth grid */}
              <line x1="72" y1="34" x2="88" y2="34" stroke="#334155" strokeWidth="2" strokeDasharray="2,2" />
            </motion.g>
          </g>

          <defs>
            <linearGradient id="botBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="botHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
