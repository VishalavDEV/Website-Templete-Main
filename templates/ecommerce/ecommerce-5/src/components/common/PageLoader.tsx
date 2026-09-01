import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep initial screen loader under 900ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#171614',
            color: '#F3F0EA',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              letterSpacing: '0.28em',
              fontWeight: '400',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            AUREL
          </motion.h1>

          <div style={{ width: '80px', height: '1px', backgroundColor: 'rgba(243, 240, 234, 0.2)', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--accent-bronze)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
