import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-all duration-700">
      {/* Dynamic Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radiant Floating Gradient Orbs using Theme Variables */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[15%] w-[550px] h-[550px] rounded-full blur-[120px] transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[25%] w-[650px] h-[650px] rounded-full blur-[130px] transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, var(--orb-3) 0%, transparent 70%)',
        }}
      />

      {/* Top & Bottom vignette gradients using theme background */}
      <div
        className="absolute top-0 inset-x-0 h-40 transition-colors duration-500"
        style={{
          background: 'linear-gradient(to bottom, var(--bg-base) 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-40 transition-colors duration-500"
        style={{
          background: 'linear-gradient(to top, var(--bg-base) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
