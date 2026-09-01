import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'unset';
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#111111',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <motion.h1
          initial={{ letterSpacing: '4px', opacity: 0, y: 10 }}
          animate={{ letterSpacing: '12px', opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            color: '#ffffff',
            fontWeight: '300',
            margin: '0 0 10px 0',
            textTransform: 'uppercase'
          }}
        >
          AURELIA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            color: '#c5a880',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            margin: 0
          }}
        >
          HAVEN RESORT
        </motion.p>
        
        {/* Animated thin gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
          style={{
            height: '1px',
            backgroundColor: '#c5a880',
            margin: '20px auto 0'
          }}
        />
      </div>
    </motion.div>
  );
}
