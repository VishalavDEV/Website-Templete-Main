import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ text = 'AURELIA HAVEN • SECLUDED SANCTUARY • SLOW LIVING • RECONNECT • NATURE INSPIRED • ' }) {
  // Repeat text a few times to ensure it fills screen
  const repeatedText = Array(4).fill(text).join('');

  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      backgroundColor: '#111111',
      borderTop: '1px solid rgba(197, 168, 128, 0.2)',
      borderBottom: '1px solid rgba(197, 168, 128, 0.2)',
      padding: '24px 0',
      boxSizing: 'border-box'
    }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35
        }}
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          fontWeight: '300',
          letterSpacing: '4px',
          color: '#c5a880',
          textTransform: 'uppercase',
          paddingLeft: '100%' // Push start offscreen slightly
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
}
