import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const jump = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + jump, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#faf8f2',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          {/* Animated Atmospheric Glow behind loader */}
          <div
            className="ambient-glow ambient-rose animate-pulse-glow"
            style={{ width: 450, height: 450 }}
          />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 420, width: '100%' }}>
            {/* Spinning Emblem Core */}
            <div style={{ position: 'relative', width: 90, height: 90, margin: '0 auto 2rem auto' }}>
              <div
                className="animate-spin-slow"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px dashed rgba(200, 120, 115, 0.35)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 12,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, #c87873, #dfba89)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 10px 25px rgba(200, 120, 115, 0.4)',
                }}
              >
                <Layers size={32} />
              </div>
            </div>

            {/* Brand Title */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#1e1b18',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              AURA<span style={{ color: '#c87873' }}>FLOW</span>
            </h2>

            <p style={{ fontSize: '0.85rem', color: '#766e65', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2rem' }}>
              Calibrating Atmospheric Layers...
            </p>

            {/* Progress Bar Container */}
            <div
              style={{
                width: '100%',
                height: 4,
                backgroundColor: 'rgba(200, 120, 115, 0.15)',
                borderRadius: 9999,
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1rem',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #c87873, #dfba89)',
                  boxShadow: '0 0 12px rgba(200, 120, 115, 0.5)',
                  transition: 'width 0.1s ease',
                }}
              />
            </div>

            {/* Percentage Display */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#5e5750',
                fontFamily: 'monospace',
              }}
            >
              <span>MULTIPLY BLEND MODE</span>
              <span style={{ color: '#b35d58' }}>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
