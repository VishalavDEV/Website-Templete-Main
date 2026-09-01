import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 2; // Fast but clean loading
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Curved route animation path values
  const pathX = progress; // Left to Right
  const pathY = Math.sin((progress / 100) * Math.PI) * 40; // Sinusoidal curve height 40px

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-tr from-[#fdf2f8] via-[#f8fafc] to-[#ecfeff] text-stone-800 overflow-hidden"
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Main Loading Scene */}
      <div className="relative w-80 h-40 flex flex-col items-center justify-center">
        {/* Soft Background Radial Light */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#ff2a74]/10 to-[#00d2ff]/10 blur-3xl" />

        {/* SVG Route Path Line */}
        <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 320 160">
          {/* Static Route Trail (dashed) */}
          <path
            d="M 40,80 Q 160,10 280,80"
            fill="none"
            stroke="rgba(15, 23, 42, 0.08)"
            strokeWidth="3"
            strokeDasharray="6,6"
          />
          {/* Animated drawing route */}
          <motion.path
            d="M 40,80 Q 160,10 280,80"
            fill="none"
            stroke="url(#loadingRouteGrad)"
            strokeWidth="4"
            strokeDasharray="400"
            strokeDashoffset={400 - (progress / 100) * 400}
            transition={{ ease: "easeOut" }}
          />

          <defs>
            <linearGradient id="loadingRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff2a74" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Flying Airplane along the curve */}
        <div 
          className="absolute z-10 pointer-events-none transition-all duration-75 ease-out"
          style={{
            transform: `translate(${pathX * 2.4 - 120}px, ${-pathY + 5}px) rotate(${((50 - progress) / 50) * -15}deg)`
          }}
        >
          <Plane size={28} className="text-[#ff2a74] fill-[#ff2a74] transform rotate-45" />
          {/* Cloud particle trailing behind plane */}
          <div className="absolute -left-3 top-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-300 to-cyan-300 blur-[1px] animate-ping" />
        </div>
      </div>

      {/* Progress Info & Dynamic Text */}
      <div className="w-64 flex flex-col items-center mt-6">
        <h3 className="text-sm font-heading font-extrabold uppercase tracking-widest text-[#ff2a74] mb-3 flex items-center gap-1">
          Packing your bags
          <span className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-[#ff2a74] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-1 rounded-full bg-[#ff2a74] animate-bounce" style={{ animationDelay: '200ms' }} />
            <span className="w-1 h-1 rounded-full bg-[#ff2a74] animate-bounce" style={{ animationDelay: '400ms' }} />
          </span>
        </h3>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-200/80 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#ff2a74] to-[#0066ff]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <span className="text-[10px] text-stone-500/80 font-bold uppercase tracking-wider mt-2.5">
          Preparing Journey • {progress}%
        </span>
      </div>

      <div className="absolute bottom-8 text-[9px] font-bold text-stone-400 tracking-widest uppercase">
        WANDERLY EXPLORATIONS
      </div>
    </motion.div>
  );
}
