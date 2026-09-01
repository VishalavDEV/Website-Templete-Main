import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Sparkles,
  Layers,
  Palette,
  Server,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu: Cpu,
  Sparkles: Sparkles,
  Layers: Layers,
  Palette: Palette,
  Server: Server,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
              <Cpu size={13} />
              <span>02 / TECHNICAL CAPACITIES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-2xl leading-[1.05]">
              Engineering & Creative <span className="font-serif italic font-normal text-[#D4AF37]">Mastery</span>.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
              Deep expertise spanning high-throughput frontend systems, multimodal AI agent interfaces, and zero-runtime design token engineering.
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              type="button"
              id="skills-filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-extrabold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`skills-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-extrabold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.name.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const CategoryIcon = ICON_MAP[category.iconName] || Cpu;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                  {/* Subtle Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CategoryIcon size={20} />
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-white/[0.05] px-2.5 py-1 rounded-lg border border-white/10">
                        {category.skills.length} Specialties
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-light">
                      {category.description}
                    </p>

                    {/* Skill Progress Indicators */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="flex flex-col gap-1.5 p-2 rounded-xl hover:bg-white/[0.04] transition-colors"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                              {skill.featured && (
                                <Flame size={12} className="text-[#D4AF37]" title="Core Specialty" />
                              )}
                              {skill.name}
                            </span>
                            <span className="font-mono font-bold text-[#D4AF37]">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5E6BE] rounded-full"
                            />
                          </div>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    <span className="flex items-center gap-1 text-[#D4AF37]">
                      <CheckCircle2 size={12} />
                      Production Tested
                    </span>
                    <span>Verified Stack</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
