import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ReadingProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/[0.04] z-50 pointer-events-none">
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="h-full bg-[#0066FF] w-full shadow-[0_0_12px_rgba(0,102,255,0.6)]"
      />
    </div>
  );
};
