import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasLoaded = sessionStorage.getItem('studio_app_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !hasLoaded && !prefersReducedMotion;
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!showLoader) {
      onComplete?.();
      return;
    }

    // Fast counter animation reaching 100% in ~550ms
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowLoader(false);
            sessionStorage.setItem('studio_app_intro_seen', 'true');
            onComplete?.();
          }, 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25 + 15);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [showLoader, onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="global-site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#080808] flex flex-col justify-between p-8 sm:p-12 select-none pointer-events-auto"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#888888]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-ping" />
              <span>STUDIO // ARCHITECTURE</span>
            </span>
            <span>2026 EDITION</span>
          </div>

          {/* Center Brand typography */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tighter text-[#FAF9F6] uppercase">
                STUDIO
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-[#666666]">
                Design & Technology
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Numerical Counter */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-[#888888]">
              <span className="uppercase tracking-widest">INITIALIZING EXPERIENCE</span>
              <span className="text-[#0066FF] font-bold">{Math.min(100, counter)}%</span>
            </div>
            <div className="w-full h-0.5 bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#0066FF]"
                style={{ width: `${Math.min(100, counter)}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
