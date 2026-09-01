import React from 'react';
import { motion } from 'framer-motion';

export const renderProductSVG = (id, category, hovered = false, rotateYDeg = 0) => {
  const accent = '#00f0ff';
  const shadow = 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.45))';

  // Base wrappers with rotation
  const wrap = (content) => (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: '600px',
      transformStyle: 'preserve-3d'
    }}>
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotateYDeg}deg)`
        }}
      >
        {content}
      </motion.div>
    </div>
  );

  switch (category) {
    case 'tv':
      return wrap(
        <svg viewBox="0 0 160 120" style={{ width: '85%', height: '85%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          <rect x="10" y="15" width="140" height="82" rx="4" fill="#0b1329" stroke="#00f0ff" strokeWidth="2.5" />
          {/* Inner display screen */}
          <rect x="14" y="19" width="132" height="74" fill={hovered ? 'rgba(0, 240, 255, 0.15)' : 'rgba(0, 240, 255, 0.04)'} style={{ transition: 'all 0.3s' }} />
          {/* Holographic grid lines inside screen */}
          {hovered && (
            <g opacity="0.3">
              <line x1="20" y1="19" x2="20" y2="93" stroke="#00f0ff" strokeWidth="0.5" />
              <line x1="60" y1="19" x2="60" y2="93" stroke="#00f0ff" strokeWidth="0.5" />
              <line x1="100" y1="19" x2="100" y2="93" stroke="#00f0ff" strokeWidth="0.5" />
              <line x1="140" y1="19" x2="140" y2="93" stroke="#00f0ff" strokeWidth="0.5" />
            </g>
          )}
          {/* Stand */}
          <path d="M 65 97 L 70 108 L 90 108 L 95 97 Z" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
          <rect x="55" y="108" width="50" height="4" rx="2" fill="#00f0ff" />
        </svg>
      );
    case 'mobiles':
      return wrap(
        <svg viewBox="0 0 100 160" style={{ width: '55%', height: '85%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          <rect x="10" y="10" width="80" height="140" rx="12" fill="#0b1329" stroke="#00f5ff" strokeWidth="2.5" />
          <rect x="14" y="14" width="72" height="132" rx="9" fill={hovered ? 'rgba(0, 245, 255, 0.15)' : 'rgba(0, 245, 255, 0.03)'} style={{ transition: 'all 0.3s' }} />
          {/* Notch / Dynamic Island */}
          <rect x="35" y="18" width="30" height="8" rx="4" fill="#00f5ff" />
          {/* Camera lenses on back (if flipped) */}
          <circle cx="50" cy="80" r="15" fill="none" stroke="rgba(0, 245, 255, 0.1)" strokeWidth="1" />
        </svg>
      );
    case 'laptops':
      return wrap(
        <svg viewBox="0 0 160 120" style={{ width: '85%', height: '85%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          {/* Open lid */}
          <path d="M 30 80 L 40 25 L 120 25 L 130 80 Z" fill="#0b1329" stroke="#0066ff" strokeWidth="2.5" />
          {/* Screen inside lid */}
          <polygon points="41,29 119,29 128,78 32,78" fill={hovered ? 'rgba(0, 102, 255, 0.18)' : 'rgba(0, 102, 255, 0.04)'} style={{ transition: 'all 0.3s' }} />
          {/* Keyboard base */}
          <path d="M 12 80 L 148 80 L 140 98 L 20 98 Z" fill="#1e293b" stroke="#00f0ff" strokeWidth="2.5" />
          {/* Touchpad */}
          <rect x="68" y="88" width="24" height="8" rx="1" fill="#0b1329" stroke="#00f0ff" strokeWidth="1" />
        </svg>
      );
    case 'audio':
      return wrap(
        <svg viewBox="0 0 120 120" style={{ width: '80%', height: '80%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          {/* Headband */}
          <path d="M 30 65 A 30 30 0 0 1 90 65" fill="none" stroke="#00f0ff" strokeWidth="4.5" strokeLinecap="round" />
          {/* Earcups */}
          <rect x="20" y="55" width="16" height="30" rx="6" fill="#0b1329" stroke="#0066ff" strokeWidth="2.5" />
          <rect x="84" y="55" width="16" height="30" rx="6" fill="#0b1329" stroke="#0066ff" strokeWidth="2.5" />
          {/* Decorative LED rings */}
          <circle cx="28" cy="70" r="4" fill="none" stroke="#00f0ff" strokeWidth="1" />
          <circle cx="92" cy="70" r="4" fill="none" stroke="#00f0ff" strokeWidth="1" />
        </svg>
      );
    case 'cameras':
      return wrap(
        <svg viewBox="0 0 140 110" style={{ width: '80%', height: '80%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          <rect x="15" y="25" width="110" height="70" rx="6" fill="#0b1329" stroke="#cbd5e1" strokeWidth="2.5" />
          {/* Lens body */}
          <circle cx="70" cy="60" r="26" fill="#1e293b" stroke="#00f0ff" strokeWidth="2.5" />
          {/* Lens reflection ring */}
          <circle cx="70" cy="60" r="15" fill="none" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="2" />
          {hovered && (
            <motion.circle
              cx="70"
              cy="60"
              r="20"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="0.5"
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
          {/* Flash */}
          <rect x="25" y="35" width="18" height="10" rx="2" fill="#334155" />
          {/* Top Dial */}
          <rect x="95" y="19" width="15" height="6" fill="#cbd5e1" />
        </svg>
      );
    case 'smart-watches':
      return wrap(
        <svg viewBox="0 0 100 120" style={{ width: '70%', height: '80%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          {/* Straps */}
          <rect x="42" y="10" width="16" height="100" rx="4" fill="#0b1329" stroke="#0066ff" strokeWidth="1.5" />
          {/* Bezel */}
          <circle cx="50" cy="60" r="28" fill="#1e293b" stroke="#00f5ff" strokeWidth="3" />
          {/* Glass display */}
          <circle cx="50" cy="60" r="22" fill={hovered ? 'rgba(0, 245, 255, 0.2)' : 'rgba(0, 245, 255, 0.05)'} style={{ transition: 'all 0.3s' }} />
          {/* Dial markers */}
          <line x1="50" y1="42" x2="50" y2="45" stroke="#00f5ff" strokeWidth="2" />
          <line x1="50" y1="78" x2="50" y2="75" stroke="#00f5ff" strokeWidth="2" />
          {/* Battery level gauge */}
          <path d="M 38 60 A 12 12 0 0 1 62 60" fill="none" stroke="#00f0ff" strokeWidth="1" />
        </svg>
      );
    case 'gaming':
      return wrap(
        <svg viewBox="0 0 140 100" style={{ width: '80%', height: '80%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          <path d="M 25 25 C 50 15, 90 15, 115 25 C 130 40, 125 80, 110 80 C 100 80, 90 68, 70 68 C 50 68, 40 80, 30 80 C 15 80, 10 40, 25 25 Z" fill="#0b1329" stroke="#00f0ff" strokeWidth="2.5" />
          {/* D Pad */}
          <line x1="40" y1="40" x2="40" y2="52" stroke="#0066ff" strokeWidth="3" />
          <line x1="34" y1="46" x2="46" y2="46" stroke="#0066ff" strokeWidth="3" />
          {/* Dual Joysticks */}
          <circle cx="52" cy="54" r="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />
          <circle cx="88" cy="54" r="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />
          {/* Right Action pad */}
          <circle cx="95" cy="40" r="3.5" fill="#00f0ff" />
          <circle cx="105" cy="46" r="3.5" fill="#00f0ff" />
        </svg>
      );
    case 'appliances':
      return wrap(
        <svg viewBox="0 0 120 120" style={{ width: '80%', height: '80%', filter: hovered ? shadow : 'none', transition: 'filter 0.3s' }}>
          {/* Round robot shape */}
          <circle cx="60" cy="60" r="48" fill="#0b1329" stroke="#00f5ff" strokeWidth="3" />
          {/* Inner bumper panel */}
          <path d="M 20 40 A 42 42 0 0 1 100 40" fill="none" stroke="#0066ff" strokeWidth="2" />
          {/* LiDAR turret */}
          <circle cx="60" cy="60" r="14" fill="#1e293b" stroke="#00f5ff" strokeWidth="2" />
          <circle cx="60" cy="60" r="6" fill="#00f5ff" />
          {/* Status LEDs */}
          <circle cx="48" cy="90" r="2.5" fill="#ff0055" />
          <circle cx="60" cy="90" r="2.5" fill="#00f5ff" />
          <circle cx="72" cy="90" r="2.5" fill="#00f5ff" />
        </svg>
      );
    default:
      return wrap(
        <svg viewBox="0 0 100 100" style={{ width: '80%', height: '80%' }}>
          <circle cx="50" cy="50" r="40" fill="#0b1329" stroke="#00f0ff" strokeWidth="2" />
        </svg>
      );
  }
};

const ProductImage = ({ id, category, hovered = false, rotateYDeg = 0, style = {} }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      ...style
    }}>
      {renderProductSVG(id, category, hovered, rotateYDeg)}
    </div>
  );
};

export default ProductImage;
