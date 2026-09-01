import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppLoader({ onComplete }) {
  const [stage, setStage] = useState('walking'); // walking -> open -> fly -> exit

  useEffect(() => {
    // Stage transition times
    const walkTimer = setTimeout(() => setStage('open'), 3000);
    const openTimer = setTimeout(() => setStage('fly'), 4200);
    const exitTimer = setTimeout(() => setStage('exit'), 6200);
    const completeTimer = setTimeout(() => onComplete(), 7200);

    return () => {
      clearTimeout(walkTimer);
      clearTimeout(openTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[400px] h-[400px] rounded-full border border-indigo-500 animate-pulse-glow" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-teal-500 animate-ping opacity-10" />
      </div>

      <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
        {/* Ground Line */}
        <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-slate-800 rounded-full" />

        {/* 1. Walking Traveller */}
        {stage === 'walking' && (
          <motion.div
            initial={{ x: -180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.8, ease: 'easeOut' }}
            className="absolute bottom-6 flex flex-col items-center"
          >
            {/* Person Silhouette SVG with walking micro-animation */}
            <svg className="w-16 h-20 text-indigo-400" viewBox="0 0 100 100" fill="currentColor">
              {/* Head */}
              <circle cx="50" cy="18" r="8" />
              {/* Torso */}
              <path d="M45,28 L55,28 L52,60 L48,60 Z" />
              {/* Suitcase in hand */}
              <rect x="22" y="38" width="16" height="12" rx="2" className="fill-amber-500 animate-bounce" />
              <path d="M28,38 L28,34 L32,34 L32,38" stroke="#f59e0b" strokeWidth="2" fill="none" />
              {/* Walking Legs */}
              <motion.path
                d="M48,60 L38,88"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ d: ["M48,60 L38,88", "M48,60 L50,88", "M48,60 L38,88"] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              />
              <motion.path
                d="M52,60 L62,88"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ d: ["M52,60 L62,88", "M52,60 L48,88", "M52,60 L62,88"] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              />
              {/* Swing arm */}
              <motion.path
                d="M45,32 L35,50"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                animate={{ d: ["M45,32 L35,50", "M45,32 L55,50", "M45,32 L35,50"] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        )}

        {/* 2. Suitcase in the Center */}
        <div className="absolute bottom-6 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Suitcase Box */}
            <svg className="w-24 h-24 text-amber-600" viewBox="0 0 100 100" fill="currentColor">
              {/* Suitcase Base */}
              <rect x="20" y="45" width="60" height="40" rx="4" />
              {/* Metal Latches */}
              <rect x="32" y="45" width="6" height="8" fill="#cbd5e1" />
              <rect x="62" y="45" width="6" height="8" fill="#cbd5e1" />
              {/* Handle */}
              <path d="M42,45 L42,38 L58,38 L58,45" stroke="#d97706" strokeWidth="4" fill="none" />
              
              {/* Lid that rotates open */}
              <motion.path
                d="M20,45 L80,45 L80,45 Z"
                stroke="#b45309"
                strokeWidth="2"
                animate={stage !== 'walking' ? { transform: 'scaleY(-1) translateY(-90px)' } : {}}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="origin-bottom"
              />
            </svg>

            {/* Glowing magic particle inside open suitcase */}
            {stage !== 'walking' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-10 h-10 bg-indigo-500 rounded-full blur-xl animate-ping" />
                <div className="w-6 h-6 bg-teal-400 rounded-full blur-md" />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* 3. Airplane Flying out of Suitcase */}
        {stage === 'fly' && (
          <motion.div
            initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1, 1.5, 3],
              x: [0, 60, -80, 200],
              y: [0, -60, -120, -220],
              rotate: [0, 45, 90, 15]
            }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="absolute z-30"
          >
            {/* Glowing Aeroplane vector */}
            <svg className="w-12 h-12 text-teal-300 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-300 to-amber-400 glow-text mb-2">
          TRAVELVERSE
        </h1>
        <p className="text-slate-400 text-sm md:text-base tracking-widest uppercase">
          Your Journey Begins Here
        </p>
      </motion.div>

      {/* Custom loading bar indicator */}
      <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
        <motion.div 
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6.8, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-indigo-500 to-teal-400"
        />
      </div>
    </div>
  );
}
