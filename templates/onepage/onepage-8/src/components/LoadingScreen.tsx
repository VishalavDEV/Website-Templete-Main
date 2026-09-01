import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const checkpoints = [
      { p: 14, text: 'CALIBRATING QUANTUM FIELD...' },
      { p: 48, text: 'LOADING NEURAL WEIGHT MATRICES...' },
      { p: 79, text: 'SYNCHRONIZING 3D WEBGL PIPELINE...' },
      { p: 100, text: 'SYSTEM ONLINE // READY' }
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < checkpoints.length) {
        setProgress(checkpoints[currentIdx].p);
        setStatusText(checkpoints[currentIdx].text);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, 320);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#030407] text-white select-none px-6"
        >
          {/* Subtle background matrix grid */}
          <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0,transparent_70%)] pointer-events-none" />

          {/* 3D Wireframe Rotating Geometry Simulation */}
          <div className="relative w-36 h-36 mb-10 flex items-center justify-center">
            {/* Outer spinning square */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute inset-0 border border-cyan-500/20 rounded-2xl"
            />
            {/* Inner spinning diamond */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute inset-4 border border-cyan-400/40 rounded-lg"
            />
            {/* Center pulsing core */}
            <motion.div
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-300 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              <Cpu className="w-5 h-5 text-cyan-300" />
            </motion.div>
          </div>

          {/* Status logs */}
          <div className="flex flex-col items-center text-center max-w-sm w-full space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400/80">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span>AI // HUMAN // MACHINE // KERNEL</span>
            </div>

            <h2 className="font-mono text-sm tracking-widest text-slate-200 uppercase font-semibold h-6">
              {statusText}
            </h2>

            {/* Progress bar */}
            <div className="w-full bg-slate-900/80 h-1.5 rounded-full overflow-hidden border border-slate-800 p-px">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-emerald-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between items-center w-full font-mono text-xs text-slate-400 pt-1">
              <span className="text-slate-500">BOOT_SEQ_0x8F</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-8 flex items-center space-x-2 text-[10px] font-mono text-slate-600 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/70" />
            <span>NEURAL REPOSITORIES VERIFIED • PRODUCTION STACK</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
