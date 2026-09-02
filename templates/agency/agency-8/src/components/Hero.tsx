import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowDown, Globe2, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { InteractiveHeroVisual } from './InteractiveHeroVisual';
import { CursorType } from '../types';

interface HeroProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal, setCursorType }) => {
  const [timeString, setTimeString] = useState('');
  const { scrollY } = useScroll();

  // Scroll parallax transformations
  const heroTextY = useTransform(scrollY, [0, 600], [0, -70]);
  const heroVisualScale = useTransform(scrollY, [0, 600], [1, 1.05]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const headlineLines = ['WE CREATE', 'DIGITAL', 'EXPERIENCES.'];

  // Staggered choreographed animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-noise"
    >
      {/* Ambient background subtle lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#0066FF]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Kinetic Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Immersive UI Tag & Coordinates */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#0066FF] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                <span>Creative Agency / 2026</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#888888]">
                <span>//</span>
                <span>{timeString || 'UTC 12:00'}</span>
              </div>
            </motion.div>

            {/* Massive line-by-line Kinetic Typography with Stroke on Line 3 */}
            <div className="space-y-1 select-none">
              <div className="overflow-hidden">
                <motion.h1
                  variants={lineVariants}
                  className="font-display text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.4rem] font-extrabold uppercase leading-[0.88] tracking-tighter text-[#FAF9F6]"
                >
                  WE CREATE
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={lineVariants}
                  className="font-display text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.4rem] font-extrabold uppercase leading-[0.88] tracking-tighter text-[#FAF9F6]"
                >
                  DIGITAL
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={lineVariants}
                  className="font-display text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.4rem] font-extrabold uppercase leading-[0.88] tracking-tighter text-stroke-immersive"
                >
                  EXPERIENCES.
                </motion.h1>
              </div>
            </div>

            {/* Supporting Description with Vertical Cobalt Accent Line */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 sm:gap-8 items-start pt-2"
            >
              <div className="w-px h-14 sm:h-16 bg-[#0066FF] mt-1 shrink-0" />
              <p className="max-w-md text-base sm:text-lg text-[#888888] leading-relaxed">
                Strategy, design and technology for ambitious brands looking to redefine their digital presence.
              </p>
            </motion.div>

            {/* CTA Buttons - Immersive UI Signature */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4"
            >
              <MagneticButton
                id="hero-explore-work-btn"
                as="a"
                href="#work"
                onClick={handleScrollToWork}
                onCursorEnter={() => setCursorType('button')}
                onCursorLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white text-[11px] uppercase tracking-widest font-bold hover:brightness-110 cursor-pointer transition-all duration-300 shadow-[0_0_24px_rgba(0,102,255,0.35)]"
              >
                <span>Explore Our Work</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">&nearr;</span>
              </MagneticButton>

              <MagneticButton
                id="hero-start-project-btn"
                onClick={onOpenProjectModal}
                onCursorEnter={() => setCursorType('button')}
                onCursorLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-2 px-8 py-4 border border-[#ffffff20] text-[#FAF9F6] text-[11px] uppercase tracking-widest font-bold hover:bg-[#ffffff10] transition-all duration-300 cursor-pointer"
              >
                <span>Start a Project</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Step 7 Interactive Hero Visual */}
          <motion.div
            style={{ scale: heroVisualScale }}
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <InteractiveHeroVisual
              onCursorEnter={() => setCursorType('pointer')}
              onCursorLeave={() => setCursorType('default')}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator & Brand Badges Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-10 flex items-end justify-between text-xs border-t border-[#ffffff10]"
      >
        <div className="flex items-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-gradient-to-b from-[#FAF9F6]/50 to-transparent" />
            <div className="text-[9px] uppercase tracking-[0.3em] text-[#888888] vertical-rl font-mono">
              Scroll
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] mb-1.5 opacity-60">
              Trusted By
            </span>
            <div className="flex gap-4 sm:gap-6 items-center">
              <span className="text-xs sm:text-sm font-bold opacity-60 tracking-tighter text-[#FAF9F6]">NOVA</span>
              <span className="text-xs sm:text-sm font-bold opacity-60 tracking-tighter text-[#FAF9F6]">VANTA</span>
              <span className="text-xs sm:text-sm font-bold opacity-60 tracking-tighter text-[#FAF9F6]">NORTH</span>
              <span className="text-xs sm:text-sm font-bold opacity-60 tracking-tighter text-[#FAF9F6]">ARC</span>
            </div>
          </div>
        </div>

        <a
          href="#work"
          onClick={handleScrollToWork}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="group flex items-center gap-3 text-[#888888] hover:text-[#FAF9F6] transition-colors"
          aria-label="Scroll down to work"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">View Archive</span>
          <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/10 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#0066FF] transition-transform group-hover:translate-y-0.5" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};
