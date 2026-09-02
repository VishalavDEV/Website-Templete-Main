import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CursorType } from '../../types';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  image: string;
  deliverable: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2018',
    title: 'THE BEGINNING',
    subtitle: 'Foundation of an independent digital craft studio',
    description: 'Founded with a rebellious drive to bridge high-concept art direction and cutting-edge web engineering, stripping away agency bloat.',
    metrics: '03 Founders • 12 Projects',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    deliverable: 'Boutique Design & Frontend Architecture',
  },
  {
    year: '2020',
    title: 'FIRST GLOBAL CLIENTS',
    subtitle: 'Expanding across continents & enterprise scale',
    description: 'Scaled operations across EMEA and North America, delivering multi-award platforms for visionary venture funds and high-growth brands.',
    metrics: '4 International Awards • 14 Global Launches',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    deliverable: 'Design Systems & High-Load Web Apps',
  },
  {
    year: '2022',
    title: 'EXPANDING THE STUDIO',
    subtitle: 'Establishing creative technology labs',
    description: 'Built dedicated creative engineering and generative interaction labs in London and New York, pushing real-time shader pipelines and spatial UX.',
    metrics: '12 Specialists • 20+ Enterprise Engagements',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    deliverable: 'WebGL, 3D Canvas & Kinetic Typography',
  },
  {
    year: '2024',
    title: 'NEW DIGITAL EXPERIENCES',
    subtitle: 'Pioneering intelligent interface systems',
    description: 'Pioneered spatial, tactile, and intelligent software experiences for category leaders, uniting human-centered craft with performant architectures.',
    metrics: '35 Global Clients • Site of the Year Nominee',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    deliverable: 'Spatial UI & Autonomous Experience Design',
  },
  {
    year: '2026',
    title: "BUILDING WHAT'S NEXT",
    subtitle: 'The frontier of digital luxury and immersion',
    description: 'Redefining modern brand velocity with full-spectrum autonomous digital craft, zero compromise on micro-interaction polish, and enduring value.',
    metrics: '120+ Completed Systems • Future-Ready',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
    deliverable: 'Next-Gen Multi-Platform Ecosystems',
  },
];

interface JourneyTimelineProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ setCursorType }) => {
  const [activeIdx, setActiveIdx] = useState<number>(4); // Default to current 2026
  const activeMilestone = MILESTONES[activeIdx];

  return (
    <section className="py-28 sm:py-40 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                OUR EVOLUTION
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#FAF9F6]"
            >
              OUR JOURNEY
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888888] max-w-md text-sm sm:text-base leading-relaxed"
          >
            Eight years of deliberate growth, unyielding artistic conviction, and compounding digital breakthroughs.
          </motion.p>
        </div>

        {/* Desktop Interactive Timeline & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Year Selectors with Progress Indicator */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative pl-6 border-l border-[#ffffff15] space-y-4 sm:space-y-6">
              {MILESTONES.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={item.year}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setCursorType('pointer')}
                    onMouseLeave={() => setCursorType('default')}
                    className={`relative p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? 'bg-white/[0.04] border border-[#0066FF]/40 text-[#FAF9F6]'
                        : 'hover:bg-white/[0.02] border border-transparent text-[#888888] hover:text-[#FAF9F6]'
                    }`}
                  >
                    {/* Active Accent Dot on Progress Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTimelinePill"
                        className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#0066FF] ring-4 ring-[#0066FF]/20"
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-4">
                        <span className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${isActive ? 'text-[#0066FF]' : 'text-[#888888] group-hover:text-[#FAF9F6]'}`}>
                          {item.year}
                        </span>
                        <span className="font-display text-sm sm:text-base font-bold uppercase tracking-tight">
                          {item.title}
                        </span>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#0066FF] rotate-45' : 'text-[#888888] group-hover:text-[#FAF9F6]'}`} />
                    </div>

                    <p className={`text-xs mt-2 line-clamp-1 font-mono ${isActive ? 'text-[#FAF9F6]/80' : 'text-[#888888]'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Milestone Dynamic Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A0A0A] border border-[#ffffff15] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8"
              >
                {/* Visual Imagery */}
                <div
                  onMouseEnter={() => setCursorType('project', 'TIMELINE ↗')}
                  onMouseLeave={() => setCursorType('default')}
                  className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#111111] border border-white/10 group cursor-pointer"
                >
                  <img
                    src={activeMilestone.image}
                    alt={activeMilestone.title}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase rounded-full">
                      YEAR {activeMilestone.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-[#0066FF] text-[10px] font-mono tracking-widest text-white uppercase font-bold shadow-lg">
                      {activeMilestone.metrics}
                    </span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                      PHASE // {activeMilestone.title}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs font-mono text-[#888888]">{activeMilestone.subtitle}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-[#FAF9F6] tracking-tight">
                    {activeMilestone.title}
                  </h3>

                  <p className="text-[#888888] text-base sm:text-lg leading-relaxed font-normal">
                    {activeMilestone.description}
                  </p>
                </div>

                {/* Deliverables Banner */}
                <div className="pt-6 border-t border-[#ffffff10] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                  <div className="text-[#888888]">
                    <span className="text-[#FAF9F6] font-bold block mb-0.5">KEY MILESTONE DELIVERABLE:</span>
                    <span>{activeMilestone.deliverable}</span>
                  </div>
                  <div className="text-[#0066FF] font-bold tracking-wider uppercase">
                    CHAPTER 0{activeIdx + 1} OF 05
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
