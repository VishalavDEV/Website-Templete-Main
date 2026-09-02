import React, { useState } from 'react';
import { motion } from 'motion/react';

export const EditorialMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const words = [
    'DESIGN',
    'TECHNOLOGY',
    'STRATEGY',
    'CULTURE',
    'BRANDING',
    'DIGITAL ERGONOMICS',
    'VISCERAL CRAFT',
    'HUMAN INTUITION',
  ];

  // Repeat for continuous seamless loop
  const marqueeItems = [...words, ...words, ...words];

  return (
    <div
      className="py-6 sm:py-8 bg-[#050507] border-y border-[#ffffff10] overflow-hidden select-none relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        animate={{
          x: isPaused ? '0%' : ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 32,
          ease: 'linear',
        }}
      >
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-display font-bold text-sm sm:text-base lg:text-lg tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors">
              {item}
            </span>
            <span className="text-[#0066FF] font-mono text-xs">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
