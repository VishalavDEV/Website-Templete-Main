import React from 'react';
import { motion } from 'framer-motion';

const FloatingProduct = ({ type, style }) => {
  // Return corresponding interactive SVG based on type
  const renderSVG = () => {
    switch (type) {
      case 'smartphone':
        return (
          <motion.div
            style={{ width: '60px', height: '100px' }}
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <svg viewBox="0 0 60 100" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' }}>
              <rect x="5" y="5" width="50" height="90" rx="6" fill="#0b1329" stroke="#00f0ff" strokeWidth="2" />
              <rect x="8" y="8" width="44" height="84" rx="4" fill="rgba(0, 240, 255, 0.1)" />
              {/* Notch */}
              <rect x="22" y="10" width="16" height="4" rx="2" fill="#00f0ff" />
              {/* Home bar */}
              <line x1="20" x2="40" y1="88" y2="88" stroke="#00f0ff" strokeWidth="1.5" />
            </svg>
          </motion.div>
        );
      case 'laptop':
        return (
          <motion.div
            style={{ width: '100px', height: '70px' }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 100 70" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' }}>
              {/* Lid */}
              <motion.path
                d="M 15 45 L 25 15 L 75 15 L 85 45 Z"
                fill="#0b1329"
                stroke="#00f0ff"
                strokeWidth="1.5"
                animate={{ d: [
                  "M 15 45 L 25 15 L 75 15 L 85 45 Z",
                  "M 15 45 L 18 8 L 82 8 L 85 45 Z",
                  "M 15 45 L 25 15 L 75 15 L 85 45 Z"
                ]}}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              {/* Screen Content inside lid */}
              <rect x="24" y="17" width="52" height="26" fill="rgba(0, 240, 255, 0.05)" />
              {/* Base */}
              <path d="M 5 45 L 95 45 L 90 52 L 10 52 Z" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
              <rect x="25" y="47" width="50" height="3" rx="1" fill="#00f0ff" />
            </svg>
          </motion.div>
        );
      case 'headphones':
        return (
          <motion.div
            style={{ width: '80px', height: '80px' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <svg viewBox="0 0 80 80" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 66, 255, 0.5))' }}>
              {/* Headband */}
              <path d="M 20 45 A 20 20 0 0 1 60 45" fill="none" stroke="#00f0ff" strokeWidth="3.5" />
              {/* Left Cup */}
              <rect x="14" y="40" width="10" height="20" rx="4" fill="#0b1329" stroke="#0066ff" strokeWidth="2" />
              {/* Right Cup */}
              <rect x="56" y="40" width="10" height="20" rx="4" fill="#0b1329" stroke="#0066ff" strokeWidth="2" />
            </svg>
          </motion.div>
        );
      case 'watch':
        return (
          <motion.div
            style={{ width: '70px', height: '70px' }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <svg viewBox="0 0 70 70" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' }}>
              {/* Strap */}
              <rect x="28" y="5" width="14" height="60" rx="4" fill="#0b1329" stroke="#0066ff" strokeWidth="1" />
              {/* Case */}
              <circle cx="35" cy="35" r="18" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
              {/* Display dial */}
              <circle cx="35" cy="35" r="13" fill="rgba(0, 240, 255, 0.15)" />
              {/* Watch hands */}
              <line x1="35" y1="35" x2="35" y2="26" stroke="#00f0ff" strokeWidth="2" />
              <line x1="35" y1="35" x2="43" y2="35" stroke="#00f0ff" strokeWidth="1.5" />
            </svg>
          </motion.div>
        );
      case 'camera':
        return (
          <motion.div
            style={{ width: '80px', height: '60px' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 80 60" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' }}>
              {/* Body */}
              <rect x="10" y="15" width="60" height="40" rx="4" fill="#0b1329" stroke="#00f0ff" strokeWidth="2" />
              {/* Prism hump */}
              <path d="M 30 15 L 35 8 L 45 8 L 50 15 Z" fill="#0b1329" stroke="#00f0ff" strokeWidth="1.5" />
              {/* Lens ring */}
              <circle cx="40" cy="35" r="14" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
              {/* Lens glass reflection (zooming circle) */}
              <motion.circle
                cx="40"
                cy="35"
                r="8"
                fill="rgba(0, 240, 255, 0.25)"
                animate={{ r: [6, 10, 6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              {/* Flash light red */}
              <circle cx="20" cy="23" r="2" fill="#ff0055" />
            </svg>
          </motion.div>
        );
      case 'speaker':
        return (
          <motion.div
            style={{ width: '70px', height: '80px' }}
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 70 80" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' }}>
              {/* Speaker Cabinet */}
              <rect x="12" y="5" width="46" height="70" rx="6" fill="#0b1329" stroke="#00f0ff" strokeWidth="2" />
              {/* Top Tweeter */}
              <circle cx="35" cy="25" r="8" fill="#1e293b" stroke="#0066ff" strokeWidth="1.5" />
              <circle cx="35" cy="25" r="4" fill="#00f0ff" />
              {/* Main Cone (pulsing scale) */}
              <motion.circle
                cx="35"
                cy="52"
                r="14"
                fill="#1e293b"
                stroke="#00f0ff"
                strokeWidth="2"
                animate={{ r: [13, 15, 13] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              />
              <circle cx="35" cy="52" r="7" fill="#0066ff" />
            </svg>
          </motion.div>
        );
      case 'controller':
        return (
          <motion.div
            style={{ width: '80px', height: '60px' }}
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 80 60" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' }}>
              {/* Body Controller */}
              <path d="M 15 15 C 30 10, 50 10, 65 15 C 75 25, 70 52, 60 52 C 55 52, 50 42, 40 42 C 30 42, 25 52, 20 52 C 10 52, 5 25, 15 15 Z" fill="#0b1329" stroke="#00f0ff" strokeWidth="2" />
              {/* D-Pad */}
              <path d="M 22 25 L 26 25 L 26 21 L 28 21 L 28 25 L 32 25 L 32 27 L 28 27 L 28 31 L 26 31 L 26 27 L 22 27 Z" fill="#0066ff" />
              {/* Action buttons */}
              <circle cx="58" cy="23" r="2.5" fill="#00f0ff" />
              <circle cx="53" cy="28" r="2.5" fill="#00f0ff" />
              <circle cx="63" cy="28" r="2.5" fill="#00f0ff" />
              <circle cx="58" cy="33" r="2.5" fill="#00f0ff" />
              {/* LED glow bar */}
              <motion.path
                d="M 32 15 L 48 15"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="2.5"
                animate={{ stroke: ["#00f0ff", "#0066ff", "#00f0ff"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="floating-hero-product" style={{
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 5,
      ...style
    }}>
      {renderSVG()}
    </div>
  );
};

export default FloatingProduct;
