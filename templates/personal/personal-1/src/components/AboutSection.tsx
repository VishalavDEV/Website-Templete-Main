import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  Code2,
  Cpu,
  ArrowUpRight,
  Maximize2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

const TABS = [
  { id: 'story', label: 'Personal Story', icon: Compass },
  { id: 'philosophy', label: 'Design Philosophy', icon: Sparkles },
  { id: 'values', label: 'Engineering Values', icon: Code2 },
  { id: 'highlights', label: 'Career Highlights', icon: Award },
];

const TIMELINE_MILESTONES = [
  {
    year: '2024 — Present',
    title: 'Principal Creative Technologist',
    org: 'NeuralCraft Systems',
    desc: 'Guiding enterprise AI studios on generative WebGPU workspaces and tactile design systems.',
  },
  {
    year: '2020 — 2023',
    title: 'Staff UI Infrastructure Engineer',
    org: 'Stripe',
    desc: 'Architected global checkout micro-interactions and zero-CLS performance standards.',
  },
  {
    year: '2018 — 2020',
    title: 'Senior Systems Fellow',
    org: 'Vercel / Next.js',
    desc: 'Authored open-source design token runtimes with over 45,000 GitHub stars.',
  },
  {
    year: '2015 — 2018',
    title: 'Creative Developer & Prototyper',
    org: 'Google Creative Lab',
    desc: 'Produced 18+ high-visibility Chrome Experiments and WebGL spatial demos for Google I/O.',
  },
];

const CORE_VALUES = [
  {
    title: 'Sub-Millisecond Tactile Feedback',
    desc: 'Interactions must respond within 16ms to feel physically tangible. No sluggish layout shifts or dropped frames.',
    icon: Cpu,
  },
  {
    title: 'Zero AI Slop & Mathematical Typography',
    desc: 'Every layout follows strict optical stepping, generous negative space, and disciplined color harmony.',
    icon: Layers,
  },
  {
    title: 'Accessible by Architectural Design',
    desc: '100% WCAG AAA screen-reader support and comprehensive keyboard navigation baked in from the first commit.',
    icon: CheckCircle2,
  },
  {
    title: 'Pragmatic Engineering Rigor',
    desc: 'High test coverage, strict TypeScript typing, modular decoupling, and zero runtime bloat.',
    icon: Code2,
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'values' | 'highlights'>('story');

  return (
    <section
      id="about"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Glow matching theme */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <Compass size={13} />
            <span>01 / ABOUT & PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl leading-[1.05]">
            Where Human Intuition Meets{' '}
            <span className="font-serif italic font-normal text-[#D4AF37]">High-Performance</span> Systems.
          </h2>
        </div>

        {/* Main Grid: 4K Editorial Photography & Dynamic Content Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4K Editorial Image Showcase with Hover Inspect */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={PERSONAL_INFO.lifestyleImage}
                  alt={`${PERSONAL_INFO.name} in Studio`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                
                {/* Inspect Fullscreen Button */}
                <button
                  type="button"
                  id="about-inspect-photo-btn"
                  onClick={() => onOpenLightbox(PERSONAL_INFO.lifestyleImage, `${PERSONAL_INFO.fullName} — Creative Technologist Studio Space`)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  title="View 4K Photograph"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                  <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold block">
                    San Francisco Studio · 2025
                  </span>
                  <p className="text-xs text-neutral-300 mt-1 font-sans">
                    Bridging spatial computing, multimodal LLM pipelines, and production grade frontends.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="font-serif font-bold text-3xl text-[#D4AF37]">12+ Yrs</div>
                <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider mt-1">Continuous Ship Velocity</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="font-serif font-bold text-3xl text-white">48+ Ships</div>
                <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider mt-1">Enterprise Deployments</div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Editorial Navigation */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Interactive Tab Switcher */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    id={`about-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-extrabold'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 text-neutral-300 leading-relaxed text-sm sm:text-base"
                >
                  <p className="font-medium text-white text-lg">
                    I am {PERSONAL_INFO.name}, a Staff-caliber Creative Technologist and AI Experience Architect based in San Francisco & Zurich.
                  </p>
                  <p>
                    Over the last 12 years, I have lived at the frontier where software engineering, spatial visual design, and emerging machine intelligence converge. I do not view frontend as mere presentation; I treat it as the high-stakes interface between complex computational models and human cognitive intuition.
                  </p>
                  <p>
                    From re-architecting payment status animations at Stripe handling peak Black Friday volumes to developing multimodal canvas workspaces powered by WebGPU and Gemini, my work is driven by an obsession with sub-millisecond responsiveness and timeless aesthetic dignity.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-bold text-xs uppercase tracking-widest group"
                    >
                      <span>Explore Career Timeline</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === 'philosophy' && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5 text-neutral-300 text-sm sm:text-base"
                >
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    The Anti-Slop Digital Manifesto
                  </h3>
                  <p className="leading-relaxed text-neutral-400">
                    The modern web is inundated with generic, homogenized SaaS templates—cluttered hero sections, low-contrast washed-out cards, and superficial purple gradients.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="font-bold text-white text-sm mb-1 uppercase tracking-wider">Architectural Restraint</div>
                      <div className="text-xs text-neutral-400">Removing visual clutter until only the indispensable remains.</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="font-bold text-white text-sm mb-1 uppercase tracking-wider">Optical Typography</div>
                      <div className="text-xs text-neutral-400">Strict mathematical stepping paired with high-contrast editorial hierarchy.</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="font-bold text-white text-sm mb-1 uppercase tracking-wider">Haptic Fluid Motion</div>
                      <div className="text-xs text-neutral-400">Spring physics that model mass, tension, and kinetic energy authentically.</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="font-bold text-white text-sm mb-1 uppercase tracking-wider">Spatial Multi-Modality</div>
                      <div className="text-xs text-neutral-400">Designing for voice, vision, and canvas manipulation in unison.</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {CORE_VALUES.map((val) => {
                    const ValIcon = val.icon;
                    return (
                      <div
                        key={val.title}
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 transition-colors flex flex-col"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-3">
                          <ValIcon size={18} />
                        </div>
                        <h4 className="font-display font-bold text-white text-sm mb-1.5">
                          {val.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === 'highlights' && (
                <motion.div
                  key="highlights"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  {TIMELINE_MILESTONES.map((mile) => (
                    <div
                      key={mile.title + mile.year}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase">
                          {mile.year}
                        </span>
                        <h4 className="font-display font-bold text-white text-sm mt-0.5">
                          {mile.title} · <span className="text-neutral-400">{mile.org}</span>
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1">{mile.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
