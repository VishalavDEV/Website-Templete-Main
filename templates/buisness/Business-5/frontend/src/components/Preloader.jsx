import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ finishLoading }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated SVG Logo representing building futures */}
        <svg className="w-20 h-20 mb-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main outer triangle */}
          <motion.path
            d="M50 15 L85 75 L15 75 Z"
            stroke="#a855f7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.6, ease: 'easeInOut' },
              opacity: { duration: 0.3 }
            }}
          />
          {/* Inner crystal core */}
          <motion.path
            d="M50 40 L68 70 L32 70 Z"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.2, ease: 'easeInOut', delay: 0.4 },
              opacity: { duration: 0.2, delay: 0.4 }
            }}
          />
          {/* Glowing node at apex */}
          <motion.circle
            cx="50"
            cy="15"
            r="4"
            fill="#a855f7"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ delay: 1.4, duration: 0.6 }}
          />
        </svg>

        {/* Text Reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            className="text-base font-extrabold font-mono tracking-[0.35em] text-white"
          >
            LUMORA LABS
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-[9px] font-mono tracking-[0.2em] uppercase text-indigo-200 mt-2"
        >
          VENTURE ENGINE INITIALIZING
        </motion.p>

        {/* Horizontal indicator */}
        <div className="w-40 h-[2px] bg-slate-900 rounded-full mt-6 overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              repeat: 0, 
              duration: 2.2, 
              ease: 'easeInOut' 
            }}
            onAnimationComplete={finishLoading}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
