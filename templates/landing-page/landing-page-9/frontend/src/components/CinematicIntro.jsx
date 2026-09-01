import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Sparkles, Gauge, Zap } from 'lucide-react';

export default function CinematicIntro({ onComplete }) {
  const [phase, setPhase] = useState(0); 
  // 0: Initial black & brand, 1: Headlight ignition in darkness, 2: Tachometer rev / power on, 3: Shutter release

  useEffect(() => {
    // Phase 1: Brand reveal (0ms - 900ms)
    const t1 = setTimeout(() => setPhase(1), 900);
    // Phase 2: Headlights ignite in darkness (900ms - 1800ms)
    const t2 = setTimeout(() => setPhase(2), 1800);
    // Phase 3: RPM rev & system readiness (1800ms - 2700ms)
    const t3 = setTimeout(() => setPhase(3), 2700);
    // Phase 4: Curtain reveal to landing page (3400ms)
    const t4 = setTimeout(() => onComplete(), 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          y: -80,
          filter: 'blur(20px)',
          transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed inset-0 z-[100] bg-[#050507] flex flex-col items-center justify-center overflow-hidden select-none"
      >
        {/* Ambient background particle glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F2994A]/[0.05] rounded-full blur-[140px]"></div>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-cyan-400/[0.04] rounded-full blur-[120px]"
            />
          )}
        </div>

        {/* Phase 0 & 1: Brand & Headlight Silhouette Ignition */}
        <div className="relative z-10 flex flex-col items-center max-w-lg text-center px-6">
          
          {/* Animated Halo Rings in Darkness */}
          <div className="relative w-80 h-36 flex items-center justify-between mb-8">
            {/* Left Halo Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                scale: phase >= 1 ? 1 : 0.5,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-16 h-10 rounded-full border-2 border-white/90 shadow-[0_0_40px_15px_rgba(255,255,255,1),0_0_80px_35px_rgba(180,225,255,0.8),0_0_120px_50px_rgba(242,153,74,0.4)] flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <div className="w-8 h-4 rounded-full bg-white blur-[2px] shadow-[0_0_20px_#fff]"></div>
              </div>
              {/* Anamorphic Blue Flare */}
              {phase >= 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "240px", opacity: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-1/2 right-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-white blur-[1px]"
                />
              )}
            </motion.div>

            {/* Center Grille Badge Outline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 0.6 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-6 rounded-md border border-white/20 flex items-center justify-center text-[9px] font-mono text-white/50 tracking-widest"
            >
              M2
            </motion.div>

            {/* Right Halo Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                scale: phase >= 1 ? 1 : 0.5,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-16 h-10 rounded-full border-2 border-white/90 shadow-[0_0_40px_15px_rgba(255,255,255,1),0_0_80px_35px_rgba(180,225,255,0.8),0_0_120px_50px_rgba(242,153,74,0.4)] flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <div className="w-8 h-4 rounded-full bg-white blur-[2px] shadow-[0_0_20px_#fff]"></div>
              </div>
              {/* Anamorphic Blue Flare */}
              {phase >= 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "240px", opacity: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-l from-transparent via-cyan-300 to-white blur-[1px]"
                />
              )}
            </motion.div>
          </div>

          {/* Brand Logo & Sequence Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              ExquDrive<span className="text-[#F2994A]">.</span>
            </h2>
            
            <p className="mt-2 text-xs uppercase tracking-[0.3em] font-mono text-[#8E8E93]">
              {phase === 0 && "SYSTEM INITIALIZATION"}
              {phase === 1 && "IGNITING V12 BI-TURBO BEAM"}
              {phase >= 2 && "PREPARING SOVEREIGN COCKPIT"}
            </p>
          </motion.div>

          {/* Progress Bar & Telemetry */}
          <div className="w-64 mt-6">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: phase === 0 ? "30%" : phase === 1 ? "65%" : "100%",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#F2994A] to-[#FFAF68] shadow-[0_0_12px_#F2994A]"
              />
            </div>
            
            <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-white/40">
              <span>RPM 7,200</span>
              <span className="text-[#F2994A]">READY</span>
            </div>
          </div>

        </div>

        {/* Skip Intro Button */}
        <button
          onClick={onComplete}
          className="absolute bottom-8 right-8 z-20 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 hover:border-[#F2994A] text-white/60 hover:text-white bg-black/40 backdrop-blur-md transition-all flex items-center gap-2"
        >
          <span>Skip Intro</span>
          <Sparkles className="w-3.5 h-3.5 text-[#F2994A]" />
        </button>

      </motion.div>
    </AnimatePresence>
  );
}
