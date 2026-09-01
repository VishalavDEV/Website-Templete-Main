import React, { memo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Zap, TrendingUp, Award, BookOpen } from 'lucide-react';
import { useMotionTokens } from '../../context/MotionContext';
import { ParallaxImage } from './ParallaxImage';
import { EditorialCard } from './EditorialCard';

export interface CinematicHeroProps {
  onSelectCategory?: (category: string) => void;
  onReadFeature?: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = memo(({ onSelectCategory, onReadFeature }) => {
  const heroRef = useRef<HTMLElement>(null);
  const {
    maskHeadlineReveal,
    maskSubtitleReveal,
    staggerContainer,
    badgePopVariant,
    prefersReducedMotion,
  } = useMotionTokens();

  // Scroll Parallax Hooks (Optimized compositor transforms)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // Dynamic parallax transforms bounded for zero lag on all devices
  const bgTextParallaxY = useTransform(smoothScroll, [0, 1], [0, 70]);
  const bgMeshOpacity = useTransform(smoothScroll, [0, 0.8], [1, 0.3]);
  const fgHeadlineParallaxY = useTransform(smoothScroll, [0, 1], [0, 35]);
  const cardParallaxY = useTransform(smoothScroll, [0, 1], [0, -50]);

  // Curated categories with mapping
  const trendingTopics = [
    { label: 'Spatial Realism', category: 'Spatial Realism', bg: 'bg-blue-50/90 text-blue-700 border-blue-200/80 hover:bg-blue-600 hover:text-white' },
    { label: 'Synthetic AI', category: 'AI Synthetics', bg: 'bg-purple-50/90 text-purple-700 border-purple-200/80 hover:bg-purple-600 hover:text-white' },
    { label: 'Bio-Timber', category: 'Architecture', bg: 'bg-emerald-50/90 text-emerald-700 border-emerald-200/80 hover:bg-emerald-600 hover:text-white' },
    { label: '4D Typography', category: 'Typography', bg: 'bg-rose-50/90 text-rose-700 border-rose-200/80 hover:bg-rose-600 hover:text-white' },
    { label: 'Glass & Light', category: 'Computational Design', bg: 'bg-amber-50/90 text-amber-800 border-amber-200/80 hover:bg-amber-600 hover:text-white' },
  ];

  const handleTopicClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-4 pb-14 sm:pt-6 sm:pb-20 md:pt-8 md:pb-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-x-clip"
    >
      {/* Rich Multi-Chromatic Atmospheric Glow Orbs (GPU Accelerated & Responsive) */}
      <motion.div
        style={{ opacity: bgMeshOpacity }}
        className="absolute -top-16 -left-16 w-72 h-72 sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-600/18 via-indigo-600/12 to-transparent rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -z-10"
      />
      <motion.div
        style={{ opacity: bgMeshOpacity }}
        className="absolute top-24 -right-16 w-72 h-72 sm:w-[480px] sm:h-[480px] lg:w-[650px] lg:h-[650px] bg-gradient-to-bl from-rose-500/16 via-purple-600/12 to-transparent rounded-full blur-[70px] sm:blur-[110px] pointer-events-none -z-10"
      />

      {/* Massive Background Ghost Typography (Responsive & Parallax-Damped) */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : bgTextParallaxY }}
        className="absolute top-2 left-0 right-0 select-none pointer-events-none opacity-[0.04] -z-10 flex justify-between overflow-hidden px-2 max-w-full"
      >
        <span className="font-display font-extrabold text-[15vw] leading-none tracking-tighter text-slate-900 truncate">
          SPATIAL
        </span>
        <span className="font-display font-extrabold text-[15vw] leading-none tracking-tighter text-blue-900 truncate">
          MAG
        </span>
      </motion.div>

      {/* Hero Header Area: Staggered Text Masking Reveals */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col mb-8 sm:mb-12"
      >
        {/* Top Eyebrow & Live Issue Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
          <motion.div variants={badgePopVariant} className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="glass-pill px-3 sm:px-4 py-1 sm:py-1.5 rounded-full flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold text-slate-800 shadow-sm border border-slate-200/90 bg-white/90">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-xs" />
              <span className="text-blue-600 font-bold uppercase tracking-wider">ISSUE 08</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700">The Spatial Horizons</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/80 border border-amber-200/70 text-amber-800 text-xs font-mono">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Curated by Awwwards Jurors</span>
            </div>
          </motion.div>

          {/* Trending Categories Pills with Active Filtering Handlers */}
          <motion.div variants={badgePopVariant} className="hidden lg:flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mr-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Topics:
            </span>
            {trendingTopics.map((topic) => (
              <button
                key={topic.label}
                onClick={() => handleTopicClick(topic.category)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold border shadow-xs cursor-pointer transition-all duration-200 ${topic.bg}`}
              >
                {topic.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Responsive Headline 1: "DESIGN MAG." */}
        <motion.div style={{ y: prefersReducedMotion ? 0 : fgHeadlineParallaxY }} className="flex flex-col">
          <div className="mask-reveal-container">
            <motion.h1
              variants={maskHeadlineReveal}
              className="type-display-hero tracking-tighter uppercase select-none text-slate-900 flex items-baseline flex-wrap"
            >
              <span>DESIGN</span>
              <span className="font-serif italic font-normal text-gradient-electric ml-2 sm:ml-4">
                Mag.
              </span>
            </motion.h1>
          </div>

          {/* Dynamic Headline 2: "THE SPATIAL ERA" + Subtitle */}
          <div className="mask-reveal-container -mt-1 sm:-mt-2 md:-mt-3">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
              <motion.span
                variants={maskHeadlineReveal}
                className="type-display-lg font-display font-extrabold uppercase text-slate-900 tracking-tight"
              >
                THE SPATIAL ERA
              </motion.span>

              {/* Sub-headline description masked */}
              <div className="mask-reveal-container max-w-xl pb-1">
                <motion.p
                  variants={maskSubtitleReveal}
                  className="type-lead text-slate-600 font-normal leading-relaxed"
                >
                  Documenting the intersection of high-density spatial aesthetics, fluid typography, and tactile digital realism. An independent quarterly publication for pioneers.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Layered Parallax Hero Visual Stage & Overlapping Glassmorphic Editorial Card */}
      <div className="relative w-full">
        {/* Parallax Image Component (Background Depth) */}
        <ParallaxImage
          imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          altText="Architectural Glass Pavilion on Coastal Horizon"
          badgeText="ISSUE 08 RETROSPECTIVE"
        />

        {/* Floating Overlapping Glassmorphic Editorial Card */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : cardParallaxY }}
          className="relative lg:absolute lg:-bottom-10 lg:right-8 z-20 mt-6 lg:mt-0 flex justify-end w-full lg:w-auto"
        >
          <EditorialCard
            category="Cover Feature"
            issueNumber="Vol. 42 / 08"
            title="The Architecture of Weightlessness: Spatial Interfaces & Post-Digital Realism"
            excerpt="How modern computational kinetics, quantum glass aesthetics, and depth typography are reshaping human interaction in physical and spatial computing environments."
            readTime="6 min read"
            readersCount="3,480 reading"
            audioDuration="4:20 min audio"
            onReadClick={onReadFeature}
          />
        </motion.div>
      </div>

      {/* Hero Footnote Bar: Responsive Metrics Grid */}
      <div className="mt-14 sm:mt-20 pt-6 sm:pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card-airy bg-white/85 border border-slate-200/70 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 font-medium">Readership</span>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-slate-900 mt-2">142k+</span>
          <span className="text-[11px] text-slate-500 mt-0.5">Across 86 Countries</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card-airy bg-white/85 border border-slate-200/70 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 font-medium">Current Issue</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase bg-blue-50 text-blue-600">New</span>
          </div>
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-blue-600 mt-2">No. 08</span>
          <span className="text-[11px] text-slate-500 mt-0.5">18 Essays & 6 Dialogues</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card-airy bg-white/85 border border-slate-200/70 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 font-medium">Print Quality</span>
            <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600" />
          </div>
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-slate-900 mt-2">Smyth Sewn</span>
          <span className="text-[11px] text-slate-500 mt-0.5">Fedrigoni 140gsm</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card-airy bg-white/85 border border-slate-200/70 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 font-medium">Accolades</span>
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
          </div>
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-slate-900 mt-2">Site of Day</span>
          <span className="text-[11px] text-slate-500 mt-0.5">Awwwards Winner</span>
        </div>
      </div>
    </section>
  );
});

CinematicHero.displayName = 'CinematicHero';
