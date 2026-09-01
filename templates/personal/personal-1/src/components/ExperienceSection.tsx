import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCE[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="experience"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <Briefcase size={13} />
            <span>03 / CAREER TIMELINE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-2xl leading-[1.05]">
            A Track Record of <span className="font-serif italic font-normal text-[#D4AF37]">High-Impact</span> Leadership.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
            12+ years delivering mission-critical web systems, flagship developer tools, and design engineering for global technology giants.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {EXPERIENCE.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-black border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all shadow-md shadow-[#D4AF37]/30" />

                {/* Experience Card */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all p-6 md:p-8 shadow-2xl backdrop-blur-xl">
                  
                  {/* Card Main Bar */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    id={`exp-item-toggle-${item.id}`}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo Badge */}
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-serif font-extrabold text-base text-[#D4AF37] shrink-0 shadow-inner">
                        {item.logoText}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-extrabold text-lg md:text-xl text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                            {item.role}
                          </h3>
                          <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                            {item.type}
                          </span>
                        </div>

                        <div className="text-sm font-semibold text-neutral-300 mt-0.5">
                          {item.company}
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mt-1 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="text-neutral-500" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-neutral-500" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center">
                      {item.highlightMetric && (
                        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 text-xs font-mono font-bold">
                          <TrendingUp size={13} />
                          <span>{item.highlightMetric}</span>
                        </div>
                      )}
                      <button
                        type="button"
                        className="p-2 rounded-xl bg-white/[0.04] text-neutral-400 group-hover:text-[#D4AF37] border border-white/10 transition-colors"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Container */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden pt-6 mt-6 border-t border-white/10"
                      >
                        <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans font-light">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          
                          {/* Core Responsibilities */}
                          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] font-bold mb-3">
                              Key Responsibilities
                            </div>
                            <ul className="space-y-2">
                              {item.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed font-light">
                                  <CheckCircle2 size={13} className="text-[#D4AF37] mt-0.5 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quantifiable Achievements */}
                          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] font-bold mb-3">
                              Quantifiable Impact
                            </div>
                            <ul className="space-y-2">
                              {item.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed font-light">
                                  <TrendingUp size={13} className="text-[#D4AF37] mt-0.5 shrink-0" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex items-center gap-2 flex-wrap pt-2">
                          <span className="text-xs font-mono text-neutral-400 mr-2 uppercase tracking-wider">Technologies:</span>
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono px-3 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
