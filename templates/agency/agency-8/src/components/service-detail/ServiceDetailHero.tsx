import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';
import { MagneticButton } from '../MagneticButton';
import { CursorType } from '../../types';

interface ServiceDetailHeroProps {
  service: ServiceDetailConfig;
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({
  service,
  onOpenProjectModal,
  setCursorType,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityVisual = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-[#080808]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#0066FF]/[0.05] rounded-full blur-[180px] pointer-events-none" />

      {/* Top subtle grid lines */}
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        {/* Number / Category Badge Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-[#0066FF] font-bold">
            {service.badge}
          </span>
          <span className="text-white/20">•</span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888] hidden sm:inline-block">
            CAPABILITY SPECIFICATION
          </span>
        </motion.div>

        {/* Main Grid: Headline & Visual Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Line-by-Line Kinetic Headline & Description */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div className="space-y-1 select-none">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.9]"
                >
                  {service.headline.line1}
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92]"
                >
                  {service.headline.line2}
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.9]"
                >
                  {service.headline.line3}
                </motion.h1>
              </div>
            </div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg lg:text-xl text-[#888888] leading-relaxed max-w-xl font-normal"
            >
              {service.heroDescription}
            </motion.p>

            {/* Metadata Tags + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <MagneticButton
                onClick={onOpenProjectModal}
                onCursorEnter={() => setCursorType('button')}
                onCursorLeave={() => setCursorType('default')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] hover:bg-[#0055dd] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-full shadow-lg shadow-[#0066FF]/20"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>

              <div className="flex flex-wrap gap-2">
                {service.heroMetadata.map((meta, i) => (
                  <span
                    key={meta}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/10 text-[11px] font-mono tracking-wider text-[#FAF9F6]/80 uppercase rounded"
                  >
                    {meta}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Mask / Clip Animation */}
          <div className="lg:col-span-5">
            <motion.div
              style={{ y: yVisual, opacity: opacityVisual }}
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', opacity: 0, scale: 0.95 }}
              animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setCursorType('project', 'PREVIEW')}
              onMouseLeave={() => setCursorType('default')}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#111111] border border-white/15 shadow-2xl group cursor-pointer"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Float Glass Indicator */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between pointer-events-none">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#0066FF] block font-bold">
                    CAPABILITY FOCUS
                  </span>
                  <span className="font-display font-bold text-sm uppercase text-[#FAF9F6]">
                    {service.title} ARCHITECTURE
                  </span>
                </div>
                <span className="font-mono text-xs text-[#888888]">
                  {service.number} / 06
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Telemetry Line */}
      <div className="max-w-7xl mx-auto w-full pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#666666] uppercase tracking-widest">
        <span>SCROLL TO EXPLORE SPECIFICATION</span>
        <span className="text-[#0066FF]">CAPABILITY CASE STUDY</span>
      </div>
    </section>
  );
};
