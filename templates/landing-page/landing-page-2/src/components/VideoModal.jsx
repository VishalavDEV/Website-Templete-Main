import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle, Cpu, Zap, Activity } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const chapters = [
    { time: '0:00', title: '1. Neural Mesh Spin-up', desc: 'Auto-clustering 42 edge cognitive agents' },
    { time: '0:45', title: '2. Spatial 3D Synthesis', desc: 'Real-time WebGL rendering from prompt' },
    { time: '1:20', title: '3. Quantum Enclave Verification', desc: 'Post-quantum Kyber cryptographic audit' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay-wrapper">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="modal-dialog-card max-w-4xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white truncate">
                  AETHERIA NEXUS 3.5 — Architecture Walkthrough
                </span>
              </div>
              <button
                onClick={onClose}
                className="modal-close-button"
                aria-label="Close video walkthrough"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          {/* Interactive Simulated Video Player Canvas */}
          <div className="relative aspect-video bg-[#04060a] flex items-center justify-center overflow-hidden group">
            {/* Animated Canvas simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18)_0%,transparent_70%)]" />
            
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30" />

            {/* Simulated Live UI Overlay */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-cyan-400">
              <Activity className="w-4 h-4 animate-spin text-cyan-400" />
              <span>LIVE INFERENCE TRACE: 8.2ms</span>
            </div>

            <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-emerald-400">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>AGENTS: 42 CLUSTERS SYNCED</span>
            </div>

            {/* Central Animated Hologram Demonstration */}
            <div className="relative flex flex-col items-center justify-center text-center p-8">
              <motion.div
                animate={{
                  rotate: isPlaying ? 360 : 0,
                  scale: isPlaying ? [1, 1.08, 1] : 1
                }}
                transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity } }}
                className="w-32 h-32 rounded-3xl border-2 border-purple-500/50 bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)] mb-6"
              >
                <Zap className="w-14 h-14 text-cyan-300" />
              </motion.div>

              <h4 className="text-xl font-bold text-white mb-1">
                {chapters[activeChapter].title}
              </h4>
              <p className="text-sm text-slate-400 max-w-md">
                {chapters[activeChapter].desc}
              </p>
            </div>

            {/* Player Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col gap-2">
              {/* Progress track */}
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <motion.div
                  animate={{ width: isPlaying ? ['0%', '100%'] : '50%' }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-slate-400">01:14 / 02:00</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
                    4K 120FPS HDR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#07090e] border-t border-white/10">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-4 text-left transition-colors flex flex-col gap-1 ${
                  activeChapter === idx
                    ? 'bg-purple-600/15 border-b-2 border-purple-500'
                    : 'hover:bg-white/5 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>{ch.time}</span>
                  {activeChapter === idx && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                </div>
                <span className="text-xs font-semibold text-white">{ch.title}</span>
                <span className="text-[11px] text-slate-400 truncate">{ch.desc}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
