import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, Sparkles, Shield, Cpu, Flame, ArrowRight } from 'lucide-react';
import { HeroVisual } from '../components/HeroVisual';
import { StatsSection } from '../components/StatsSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InsightsSection } from '../components/InsightsSection';
import { audioService } from '../utils/audio';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox: (imageUrl: string, caption?: string) => void;
}

export function HomePage({ onNavigate, onOpenLightbox }: HomePageProps) {
  const scrollToServices = () => {
    audioService.playClick();
    const el = document.getElementById('services-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#0A0B0F]">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/15 via-indigo-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Massive Serif Italic Typography & Clean Minimalist CTAs (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6 px-3 py-1 border border-violet-500/30 bg-violet-500/5 rounded-full text-[10px] font-bold text-violet-400 uppercase tracking-[0.2em] w-fit"
              >
                Future-Ready Studio 2026
              </motion.div>

              {/* Massive Hero Headline with Clean Minimalist Serif Italic Flair */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-[88px] leading-[0.92] font-bold tracking-tighter mb-8 italic font-serif text-white"
              >
                We build brands <br />
                that move <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400">
                  people.
                </span>
              </motion.h1>

              {/* Supporting Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#A6ACB8] text-lg max-w-lg mb-10 leading-relaxed font-light"
              >
                We blend high-end strategy with creative technology to build digital products and visual identities for the world's most ambitious companies.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <button
                  id="hero-explore-work-btn"
                  onClick={() => {
                    audioService.playClick();
                    onNavigate('/work');
                  }}
                  className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-violet-600/30 uppercase tracking-wider"
                >
                  EXPLORE OUR WORK
                </button>

                <button
                  id="hero-philosophy-btn"
                  onClick={() => {
                    audioService.playClick();
                    onNavigate('/about');
                  }}
                  className="flex items-center gap-2 text-sm font-bold border-b border-white/20 pb-1 hover:border-violet-500 text-white transition-all uppercase tracking-wider"
                >
                  <span>OUR PHILOSOPHY</span>
                  <ArrowRight className="w-4 h-4 text-violet-400" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Stacked Geometric Minimalist Visual Showcase (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <HeroVisual onSelectProject={(slug) => onNavigate(`/work/${slug}`)} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 flex items-center justify-between text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GLOBAL STUDIO // 60 FPS ENGINE</span>
          </div>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* 2. STATS / METRICS SECTION */}
      <StatsSection />

      {/* 3. ABOUT EDITORIAL SECTION */}
      <section className="py-24 md:py-32 relative bg-[#0A0B0F] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
                <Shield className="w-3.5 h-3.5" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Small team. Big thinking. Measurable impact.
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We deliberately operate as a tight, senior-only collective of multidisciplinary creators, technologists, and brand architects. We do not pass your vision down to junior delegates or hide behind layers of corporate bureaucracy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[#12141F] border border-white/8 space-y-1">
                  <span className="text-violet-400 font-bold block">01 / UNCOMPROMISED CRAFT</span>
                  <p className="text-gray-400 text-[11px]">Every pixel, spring curve, and shader is obsessively tuned.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#12141F] border border-white/8 space-y-1">
                  <span className="text-cyan-400 font-bold block">02 / MATHEMATICAL RIGOR</span>
                  <p className="text-gray-400 text-[11px]">Sub-100ms load times and verifiable enterprise conversion gains.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    audioService.playClick();
                    onNavigate('/about');
                  }}
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
                >
                  <span>Learn More About Our Collective</span>
                  <ArrowRight className="w-4 h-4 text-violet-400" />
                </button>
              </div>
            </div>

            {/* Right Asymmetrical Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#12141F] shadow-2xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
                  alt="Horizon Studio Team Collaboration"
                  className="w-full h-80 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-gray-400">STUDIO MANIFESTO // v2.6</span>
                  <span className="text-violet-400">SAN FRANCISCO · TOKYO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES INTERACTIVE SECTION */}
      <ServicesSection
        onSelectService={(slug) => onNavigate(`/services/${slug}`)}
        onNavigateToProcess={() => {
          const el = document.getElementById('process-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. PROCESS SECTION */}
      <ProcessSection />

      {/* 6. PORTFOLIO CASE STUDIES */}
      <PortfolioSection
        onSelectProject={(slug) => onNavigate(`/work/${slug}`)}
        onOpenLightbox={onOpenLightbox}
        onViewAllWork={() => onNavigate('/work')}
      />

      {/* 7. CLIENT MARQUEE & TESTIMONIALS */}
      <TestimonialsSection />

      {/* 8. INSIGHTS EDITORIAL */}
      <InsightsSection
        onSelectArticle={(slug) => onNavigate(`/insights/${slug}`)}
        onViewAllInsights={() => onNavigate('/insights')}
      />
    </div>
  );
}
