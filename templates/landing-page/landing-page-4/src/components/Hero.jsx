import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle2, Shield, Zap, TrendingUp, Users } from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { openAuthModal, openDemoModal } = useModal();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Radial Amber Backdrop Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/20 via-amber-600/5 to-transparent blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center">
        
        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={() => openAuthModal('growth')}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-500/30 text-xs md:text-sm font-medium text-amber-300 shadow-lg shadow-amber-500/10 backdrop-blur-md mb-6 hover:border-amber-500/60 transition-all cursor-pointer group"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-semibold text-white">Flowzen 2.0 Engine</span>
          <span className="text-zinc-500">•</span>
          <span>Next-Gen Autonomous Workspace</span>
          <ArrowRight size={13} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6"
        >
          Turn Complex Work Into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 drop-shadow-[0_0_35px_rgba(245,169,0,0.35)]">
            Simple Momentum.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-9"
        >
          Bring your teams, tasks, automation, and real-time insights together in one intelligent workspace built to help ambitious businesses move 3x faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => openAuthModal('growth')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            Start Building Free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={openDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/15 backdrop-blur-md hover:border-white/30 transition-all duration-200 cursor-pointer"
          >
            <Play size={16} className="text-amber-400 fill-amber-400" />
            Book a Live Demo
          </button>
        </motion.div>

        {/* Micro Credibility Rating Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 mb-14"
        >
          <div className="flex items-center gap-1 text-amber-400">
            {'★★★★★'}
            <span className="text-zinc-300 font-semibold ml-1.5">4.9/5</span>
            <span className="text-zinc-500">(1,800+ reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Shield size={14} className="text-amber-400" />
            <span>SOC2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Zap size={14} className="text-amber-400" />
            <span>No Credit Card Required</span>
          </div>
        </motion.div>

        {/* Hero Visual Showcase Container with Perspective & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Subtle Outer Glow Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-b from-amber-500/30 via-transparent to-amber-500/10 rounded-3xl blur-xl opacity-75 -z-10"></div>

          {/* Floating Metric Badge 1: Top Left */}
          <div className="hidden lg:flex items-center gap-3 absolute -top-6 -left-6 z-20 p-3 rounded-2xl bg-[#0c0c10]/90 border border-amber-500/30 shadow-xl shadow-black/80 backdrop-blur-xl animate-float-slow">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <TrendingUp size={20} />
            </div>
            <div className="text-left">
              <div className="text-[11px] text-zinc-400 font-medium">Sprint Velocity</div>
              <div className="text-sm font-bold text-white flex items-center gap-1">
                +342% Speed
                <span className="text-[10px] text-emerald-400">▲ 24%</span>
              </div>
            </div>
          </div>

          {/* Floating Metric Badge 2: Bottom Right */}
          <div className="hidden lg:flex items-center gap-3 absolute -bottom-6 -right-6 z-20 p-3 rounded-2xl bg-[#0c0c10]/90 border border-white/15 shadow-xl shadow-black/80 backdrop-blur-xl animate-float-reverse">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-left">
              <div className="text-[11px] text-zinc-400 font-medium">Auto-Handoff</div>
              <div className="text-sm font-bold text-white">40M+ Runs Completed</div>
            </div>
          </div>

          {/* Interactive Live Dashboard Mockup */}
          <DashboardMockup />

        </motion.div>

      </div>
    </section>
  );
}
