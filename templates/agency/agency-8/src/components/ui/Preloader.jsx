import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2s loader
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-[#05070f] p-8 md:p-16 overflow-hidden select-none"
        >
          {/* Top subtle bar */}
          <div className="w-full flex justify-between items-center text-xs tracking-widest text-slate-500 uppercase font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              LOOP CREATIVE LABS
            </span>
            <span>2026 EDITION</span>
          </div>

          {/* Center Brand Hero Reveal */}
          <div className="relative flex flex-col items-center justify-center text-center max-w-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-4"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter font-syne text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                LOOP<span className="text-cyan-400">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm md:text-base text-slate-400 tracking-wide font-light max-w-md"
            >
              We Build Digital Experiences That Move Brands Forward
            </motion.p>
          </div>

          {/* Bottom Progress & Laser Bar */}
          <div className="w-full max-w-xl flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="text-xs tracking-widest text-slate-500 font-mono">LOADING SYSTEM</span>
              <span className="text-4xl md:text-5xl font-extrabold font-syne text-cyan-400">
                {progress}%
              </span>
            </div>

            {/* Expanding Laser Line Container */}
            <div className="relative w-full h-1 bg-slate-800/60 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_15px_#22d3ee]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
