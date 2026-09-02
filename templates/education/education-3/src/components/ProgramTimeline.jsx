import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PROGRAM_TIMELINE } from '../data/programs';
import { ChevronDown, Clock, Award, Briefcase, GraduationCap, ArrowRight, Filter } from 'lucide-react';

export default function ProgramTimeline({ onOpenAdmissions }) {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(PROGRAM_TIMELINE[0].id);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'AI & Data', 'Business', 'Design', 'Science'];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAM_TIMELINE
    : PROGRAM_TIMELINE.filter(p => p.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-24 relative bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC CURRICULUM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Program Explorer.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-electric-600 text-white shadow-md shadow-electric-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-electric-500/30 space-y-8">
          
          {/* Timeline Year Marker Badge */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-electric-600 border-4 border-[#0B0F19] flex items-center justify-center text-white font-mono text-xs font-extrabold shadow-lg shadow-electric-500/50">
            '26
          </div>

          <div className="text-xs font-mono text-electric-400 tracking-widest uppercase mb-8 pt-1">
            2026 ACADEMIC FELLOWSHIP & DEGREE OFFERINGS
          </div>

          {filteredPrograms.map((program, index) => {
            const isExpanded = expandedId === program.id;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot Node */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isExpanded
                    ? 'bg-electric-400 border-white shadow-[0_0_15px_rgba(59,130,246,0.8)] scale-125'
                    : 'bg-slate-900 border-slate-600 group-hover:border-electric-400'
                }`} />

                {/* Program Timeline Item Container */}
                <div
                  onClick={() => toggleExpand(program.id)}
                  data-cursor="EXPLORE"
                  className={`rounded-2xl glass-panel border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isExpanded
                      ? 'border-electric-500/50 bg-slate-900/80 shadow-xl shadow-electric-500/10'
                      : 'border-white/10 hover:border-white/20 bg-slate-950/40 hover:bg-slate-900/40'
                  }`}
                >
                  {/* Summary Bar */}
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-electric-500/20 text-electric-300 border border-electric-500/30">
                          {program.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {program.level}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                        {program.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 self-end md:self-center">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-semibold text-slate-300 flex items-center justify-end gap-1">
                          <Clock className="w-3.5 h-3.5 text-electric-400" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-500">
                          {program.difficulty}
                        </div>
                      </div>

                      <div className={`w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-electric-600 text-white' : ''
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="px-6 pb-8 md:px-8 border-t border-white/10 pt-6 space-y-6"
                      >
                        <p className="text-slate-300 text-sm leading-relaxed font-light">
                          {program.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Core Subjects */}
                          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-white/5">
                            <div className="text-xs font-mono uppercase text-electric-400 font-bold tracking-wider flex items-center gap-1.5">
                              <GraduationCap className="w-4 h-4" />
                              <span>CORE MODULES</span>
                            </div>
                            <ul className="space-y-1.5">
                              {program.subjects.map((subj, sIdx) => (
                                <li key={sIdx} className="text-xs text-slate-300 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                                  <span>{subj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Career Pathways */}
                          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-white/5">
                            <div className="text-xs font-mono uppercase text-violetAccent-400 font-bold tracking-wider flex items-center gap-1.5">
                              <Briefcase className="w-4 h-4" />
                              <span>CAREER DESTINATIONS</span>
                            </div>
                            <ul className="space-y-1.5">
                              {program.careerPaths.map((career, cIdx) => (
                                <li key={cIdx} className="text-xs text-slate-300 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-violetAccent-400" />
                                  <span>{career}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Certification & Action Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                            <Award className="w-4 h-4 text-cyan-400" />
                            <span>{program.certification}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenAdmissions();
                              }}
                              className="px-5 py-2 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs tracking-wider shadow-lg shadow-electric-500/30"
                            >
                              APPLY NOW
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/programs/${program.id}`);
                              }}
                              className="px-4 py-2 rounded-xl glass-panel border border-white/10 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
