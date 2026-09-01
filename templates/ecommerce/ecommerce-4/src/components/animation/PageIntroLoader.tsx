import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageIntroLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only play once per browser session
    const hasPlayed = sessionStorage.getItem('orvana_intro_played');
    return !hasPlayed;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('orvana_intro_played', 'true');
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#F6F5F1',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Brand Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '0.18em',
              color: '#161616',
              display: 'block',
              lineHeight: 1
            }}
          >
            ORVANA
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.28em',
              color: 'var(--accent-blue)',
              textTransform: 'uppercase',
              marginTop: '0.5rem',
              display: 'block'
            }}
          >
            DIGITAL DEPARTMENT STORE
          </span>
        </motion.div>

        {/* Expanding Thin Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          style={{
            height: '2px',
            backgroundColor: 'var(--accent-blue)',
            borderRadius: '1px'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};
