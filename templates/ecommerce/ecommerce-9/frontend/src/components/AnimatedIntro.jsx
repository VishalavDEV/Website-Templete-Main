import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedIntro = ({ onComplete }) => {
  const [step, setStep] = useState(0); // 0: dot, 1: circuit, 2: tv frame, 3: power on/logo, 4: ready button

  useEffect(() => {
    // Stage durations
    const timers = [
      setTimeout(() => setStep(1), 1000), // Circuit drawing
      setTimeout(() => setStep(2), 2200), // TV outline
      setTimeout(() => setStep(3), 3500), // Power on & logo scan
      setTimeout(() => setStep(4), 5000)  // Ready / Enter button
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#02050e',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Orbitron', sans-serif"
    }}>
      {/* Background stars/particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Intro Canvas */}
      <div style={{ position: 'relative', width: '380px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Step 0: Center Blue Dot */}
        {step >= 0 && step < 3 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#00f0ff',
              boxShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff',
              zIndex: 5
            }}
          />
        )}

        {/* Step 1: Circuit Lines (Animated SVG) */}
        {step >= 1 && (
          <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 400 300">
            {/* Draw electronic paths from center out */}
            <motion.path
              d="M 200 150 L 100 150 L 70 120 L 70 80 L 120 80"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 200 150 L 300 150 L 330 180 L 330 220 L 280 220"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 200 150 L 200 50 L 250 50"
              fill="none"
              stroke="#0066ff"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path
              d="M 200 150 L 200 250 L 150 250"
              fill="none"
              stroke="#0066ff"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </svg>
        )}

        {/* Step 2: TV Frame Outline appearing */}
        {step >= 2 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, borderImageSource: 'none' }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              position: 'absolute',
              width: '320px',
              height: '190px',
              border: '2px solid rgba(0, 240, 255, 0.4)',
              borderRadius: '8px',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(3, 7, 18, 0.85)',
              overflow: 'hidden',
              zIndex: 3
            }}
          >
            {/* TV Screen Power On Flash / Light Sweep */}
            {step >= 3 && (
              <motion.div
                initial={{ top: '-100%', opacity: 1 }}
                animate={{ top: '100%', opacity: [1, 1, 0] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '40px',
                  background: 'linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.8), transparent)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            )}

            {/* TV Content (Logo & Powering Glow) */}
            {step >= 3 && (
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Holographic glowing display */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid #00f0ff',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.8), inset 0 0 10px rgba(0, 240, 255, 0.4)',
                    color: '#00f0ff',
                    fontSize: '26px',
                    fontWeight: 'bold',
                    textShadow: '0 0 10px #00f0ff'
                  }}
                >
                  ⚡
                </motion.div>

                {/* Brand Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{
                    fontSize: '20px',
                    fontWeight: '900',
                    color: '#fff',
                    marginTop: '12px',
                    letterSpacing: '0.25em',
                    textShadow: '0 0 10px rgba(0, 240, 255, 0.6)'
                  }}
                >
                  BLUECORE
                </motion.h1>

                {/* Screen horizontal grid scanning overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.05) 50%, transparent 50%)',
                  backgroundSize: '100% 4px',
                  pointerEvents: 'none'
                }} />
              </div>
            )}
          </motion.div>
        )}

        {/* TV Stand Base */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '22px',
              width: '80px',
              height: '15px',
              background: 'linear-gradient(to bottom, #111b33, #02050e)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderBottom: 'none',
              borderRadius: '4px 4px 0 0',
              zIndex: 2
            }}
          />
        )}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '15px',
              width: '140px',
              height: '8px',
              background: 'linear-gradient(to bottom, #1e293b, #090d16)',
              borderRadius: '2px',
              boxShadow: '0 5px 10px rgba(0,0,0,0.5)',
              zIndex: 2
            }}
          />
        )}
      </div>

      {/* Brand Text and Enter Button (Step 4) */}
      <AnimatePresence>
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '25px',
              zIndex: 4
            }}
          >
            <p style={{
              color: '#94a3b8',
              fontSize: '13px',
              letterSpacing: '0.3em',
              marginBottom: '30px',
              textTransform: 'uppercase'
            }}>
              POWER YOUR FUTURE.
            </p>

            <motion.button
              onClick={onComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: '2px'
              }}
            >
              <div style={{
                border: '1px solid #00f0ff',
                borderRadius: '4px',
                padding: '12px 35px',
                color: '#00f0ff',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.25), inset 0 0 8px rgba(0, 240, 255, 0.1)',
                textShadow: '0 0 5px rgba(0, 240, 255, 0.5)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.6), inset 0 0 15px rgba(0, 240, 255, 0.3)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.25), inset 0 0 8px rgba(0, 240, 255, 0.1)';
                e.currentTarget.style.color = '#00f0ff';
              }}
              >
                ENTER SHOWROOM
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedIntro;
