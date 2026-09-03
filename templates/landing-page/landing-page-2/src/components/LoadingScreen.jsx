import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Neural Mesh...');

  useEffect(() => {
    const statusSteps = [
      { at: 15, text: 'Calibrating Spatial Vector Nodes...' },
      { at: 45, text: 'Synchronizing Cognitive Agent Swarm...' },
      { at: 75, text: 'Establishing Post-Quantum Secure Enclave...' },
      { at: 95, text: 'Ready to Launch AETHERIA NEXUS...' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        const bounded = Math.min(next, 100);

        const currentStatus = statusSteps.slice().reverse().find((s) => bounded >= s.at);
        if (currentStatus) setStatusText(currentStatus.text);

        return bounded;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)', transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07090e] overflow-hidden select-none"
    >
      {/* Background Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-500/30 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Brand Holographic Core */}
        <div className="relative flex items-center justify-center w-28 h-28 mb-8">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-purple-500/40"
          />

          {/* Inner counter-rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-cyan-400/50 border-t-transparent border-l-transparent"
          />

          {/* Central pulsating core icon */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], boxShadow: ['0 0 20px rgba(139,92,246,0.4)', '0 0 40px rgba(6,182,212,0.8)', '0 0 20px rgba(139,92,246,0.4)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30 text-white"
          >
            <Cpu className="w-8 h-8 animate-pulse text-white" />
          </motion.div>

          {/* Tiny orbital particle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-start justify-center"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
          </motion.div>
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="text-2xl font-bold tracking-wider text-white">
            AETHERIA
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono font-semibold">
            NEXUS 3.5
          </span>
        </motion.div>

        {/* Dynamic Status Text */}
        <p className="text-xs text-slate-400 font-mono tracking-tight h-5 mb-6">
          {statusText}
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-2 rounded-full bg-slate-800/80 border border-white/5 overflow-hidden p-[1px] relative shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex justify-between w-full mt-2 text-[11px] font-mono text-slate-400 font-semibold">
          <span>SYSTEM READY</span>
          <span className="text-cyan-400">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
