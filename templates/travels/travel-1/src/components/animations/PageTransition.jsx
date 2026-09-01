import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1500); // matches transition duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* 1. Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>

      {/* 2. Slide Overlay (Cinematic Travel Map curtain) */}
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 bg-slate-900 z-50 pointer-events-none flex flex-col items-center justify-center"
          initial={{ x: '100%' }}
          animate={{ x: ['100%', '0%', '0%', '-100%'] }}
          transition={{ 
            times: [0, 0.35, 0.65, 1],
            duration: 1.5,
            ease: 'easeInOut'
          }}
        >
          {/* Inside the overlay: Map outlines and dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
          
          {/* Animated Flight Path line */}
          <svg className="absolute w-full h-1/2 text-slate-800" fill="none">
            <motion.path
              d="M 0,200 Q 300,50 600,200 T 1200,200"
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="3"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>

          {/* 3. Airplane Zooming Across */}
          <motion.div
            className="absolute"
            initial={{ x: '-100vw', y: 50, rotate: 10 }}
            animate={{ x: '100vw', y: -50, rotate: -10 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center">
              {/* Glowing Plane Vector */}
              <svg className="w-16 h-16 text-teal-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-teal-400 mt-2 opacity-50 blur-[1px]" />
            </div>
          </motion.div>

          {/* Dynamic Transition Text */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, times: [0, 0.3, 0.7, 1] }}
            className="text-2xl md:text-3xl font-extrabold tracking-widest text-indigo-400 uppercase mt-4 z-10"
          >
            Preparing Boarding Pass...
          </motion.h2>
        </motion.div>
      )}
    </div>
  );
}
