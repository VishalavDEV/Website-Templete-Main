import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Atom, Binary, Compass, Globe } from 'lucide-react';

export default function CTASection({ onOpenAdmissions }) {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 border-t border-white/10">
      
      {/* Background Animated Particle Grid & Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-electric-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violetAccent-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      {/* Floating Academic Symbols in Background */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-12 p-4 rounded-2xl glass-panel border border-white/10 text-electric-400 hidden md:block"
      >
        <Atom className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 p-4 rounded-2xl glass-panel border border-white/10 text-violetAccent-400 hidden md:block"
      >
        <Binary className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-24 p-3 rounded-xl glass-panel border border-white/10 text-cyan-400 hidden lg:block"
      >
        <Compass className="w-6 h-6" />
      </motion.div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-electric-500/30 text-electric-300 text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-spin-slow" />
          <span>JOIN THE NEXT GENERATION OF SCHOLARS</span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-display leading-[1.08]">
          "Your Future Starts With What <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-cyan-300 to-violetAccent-400">
            You Learn Today."
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Enroll in accredited degree programs, access 24/7 supercomputing sandboxes, and collaborate with world-leading research chairs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAdmissions}
            data-cursor="APPLY"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-electric-600 via-electric-500 to-violetAccent-600 text-white font-bold text-sm tracking-wider shadow-2xl shadow-electric-500/40 hover:shadow-electric-500/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/programs')}
            data-cursor="EXPLORE"
            className="px-8 py-4 rounded-full glass-panel border border-white/20 text-slate-200 hover:text-white hover:border-electric-400 font-bold text-sm tracking-wider hover:bg-white/5 active:scale-95 transition-all duration-300"
          >
            EXPLORE PROGRAMS
          </button>
        </div>

      </div>
    </section>
  );
}
