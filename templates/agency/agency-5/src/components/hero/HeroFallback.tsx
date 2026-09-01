import React from 'react';
import { motion } from 'framer-motion';

export const HeroFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Ambient Glowing Glass Rings */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-[var(--accent-color)]/30 bg-gradient-to-tr from-[var(--accent-color)]/10 via-transparent to-transparent shadow-2xl backdrop-blur-3xl flex items-center justify-center p-8"
      >
        <div className="w-full h-full rounded-full border border-[var(--border-color)] flex items-center justify-center p-8">
          <div className="w-full h-full rounded-full border border-[var(--accent-color)]/50 bg-[var(--card-bg)]/40 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-color)] opacity-70">
              [ 3D SPATIAL ENGINE ]
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
