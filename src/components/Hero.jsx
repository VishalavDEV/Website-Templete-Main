import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Leaf, 
  Droplets, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { heroData } from '../data/content';

export default function Hero({ onOpenVideo, onOpenContact }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-forest-950 text-white">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="Lush sustainable agriculture fields at golden hour"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
        />
        {/* Layered Gradient Overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Floating Animated Badges - Positioned in Outer Wings (XL+ Screens Only to Prevent Overlap) */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full hidden xl:block">
        {/* Left Wing Badge: 100% Certified Organic */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-6 2xl:left-14 pointer-events-auto"
        >
          <div className="glass-dark p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-500/30 hover:border-emerald-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-inner shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">Certified Organic</div>
              <div className="text-sm font-bold text-white whitespace-nowrap">0% Synthetic Residue</div>
            </div>
          </div>
        </motion.div>

        {/* Right Wing Badge 1: 65,000+ Acres Telemetry */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[24%] right-6 2xl:right-14 pointer-events-auto"
        >
          <div className="glass-dark p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-wheat-500/30 hover:border-wheat-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-wheat-500/20 border border-wheat-400/30 flex items-center justify-center text-wheat-400 shadow-inner shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-wheat-300 uppercase tracking-wider">Telemetry Coverage</div>
              <div className="text-sm font-bold text-white whitespace-nowrap">65,000+ Active Acres</div>
            </div>
          </div>
        </motion.div>

        {/* Right Wing Badge 2: 42% Water Conserved */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="absolute bottom-[28%] right-6 2xl:right-14 pointer-events-auto"
        >
          <div className="glass-dark p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-teal-500/30 hover:border-teal-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shadow-inner shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider">Water Conservation</div>
              <div className="text-sm font-bold text-white whitespace-nowrap">42% Reduced Usage</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center flex flex-col items-center">
        
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/90 border border-forest-600/70 backdrop-blur-md mb-6 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-wheat-400" />
          <span className="text-xs sm:text-sm font-semibold text-emerald-200 tracking-wide">
            {heroData.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.15] mb-6 max-w-3xl"
        >
          {heroData.titlePart1} <br />
          <span className="text-gradient-gold italic">
            {heroData.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-forest-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-wheat-500 to-wheat-600 hover:from-wheat-400 hover:to-wheat-500 text-forest-950 font-bold text-base px-8 py-4 rounded-full shadow-xl hover:shadow-glow-amber transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-5 h-5 text-forest-950" />
          </a>

          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-forest-900/90 hover:bg-forest-800 text-white font-semibold text-base px-7 py-4 rounded-full border border-forest-600/80 hover:border-forest-400 backdrop-blur-md transition-all group hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-full bg-wheat-500 text-forest-950 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Overview</span>
          </button>
        </motion.div>

        {/* Clean, Centered Highlights Bar under CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-forest-800/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-center"
        >
          <div className="flex items-center gap-2 text-forest-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Non-GMO Biologicals</span>
          </div>
          <div className="flex items-center gap-2 text-forest-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Autonomous Drone Fleet</span>
          </div>
          <div className="flex items-center gap-2 text-forest-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verifiable Carbon MRV</span>
          </div>
          <div className="flex items-center gap-2 text-forest-200 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>John Deere & ISOBUS Sync</span>
          </div>
        </motion.div>

      </div>

      {/* Decorative Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none" />
    </section>
  );
}
