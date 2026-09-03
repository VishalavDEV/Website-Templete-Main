import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #c87873 0%, #e08a85 50%, #dfba89 100%)',
        zIndex: 99999,
        boxShadow: '0 0 10px rgba(200, 120, 115, 0.6)',
      }}
    />
  );
}
