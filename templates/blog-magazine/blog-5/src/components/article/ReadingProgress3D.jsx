import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * 3D Rotating Geometric Reading Progress Indicator
 */
export function ReadingProgress3D() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [percent, setPercent] = useState(0);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    mass: 0.1,
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const rotateX = useTransform(smoothProgress, [0, 1], [15, 75]);
  const rotateY = useTransform(smoothProgress, [0, 1], [0, 180]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1.15]);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-[#E5E7EB] p-2.5 sm:p-3 rounded-full shadow-[0_12px_30px_-5px_rgba(0,85,255,0.15)] select-none">
      {/* 3D Morphing Geometric Core */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center perspective-[600px]">
        {/* Ambient SVG Ring Fill */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-[#F3F4F6]"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <motion.path
            className="text-[#0055FF]"
            strokeDasharray="100, 100"
            strokeDashoffset={100 - percent}
            strokeWidth="3"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        {/* 3D Rotating Cube / Polygon Gyroscope */}
        <motion.div
          style={{
            rotate: shouldReduceMotion ? 0 : rotate,
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            scale,
            transformStyle: 'preserve-3d',
          }}
          className="w-4 h-4 rounded-md bg-gradient-to-tr from-[#0055FF] to-[#7000FF] shadow-sm flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-xs bg-white" />
        </motion.div>
      </div>

      {/* Numerical Percentage */}
      <div className="pr-1.5 flex flex-col text-left leading-none">
        <span className="font-mono text-xs font-bold text-[#111827]">
          {percent}%
        </span>
        <span className="font-mono text-[0.5625rem] text-[#6B7280] uppercase tracking-wider">
          READING
        </span>
      </div>
    </div>
  );
}
