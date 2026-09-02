import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Globe,
  Award,
  CheckCircle2,
  Code,
  Sparkles,
  Palette,
  Terminal,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO, STATS, SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { cn } from '../../utils/cn';

const skillCategoryIcons: Record<string, React.ReactNode> = {
  Code: <Code className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Terminal: <Terminal className="w-4 h-4" />,
};

export const AboutSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title="Bridging the gap between pure aesthetics & engineering precision."
          highlightedWord="engineering precision."
          description="A senior creative developer obsessed with spatial design, micro-interactions, responsive typography, and uncompromising performance."
        />

        {/* Top Grid: Profile & Bio + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Avatar & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] max-w-full">
              {/* Soft Halo Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-indigo-500/15 to-sky-500/15 rounded-3xl blur-2xl transform -rotate-3 scale-105" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-slate-200 p-2 shadow-xl bg-white">
                <ImageWithFallback
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fallbackTitle={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-2xl filter grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none rounded-2xl" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display font-bold text-xl">{PERSONAL_INFO.name}</div>
                  <div className="text-xs font-mono text-blue-200">
                    {PERSONAL_INFO.role}
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 glass-panel border px-4 py-2.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5 backdrop-blur-xl"
              >
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.yearsExperience} Experience
                  </div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                    Design & Code
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Pill Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-panel border px-4 py-2.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5 backdrop-blur-xl"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.clientSatisfaction}
                  </div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                    Positive Feedback
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bio Story & Quick Pills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
              <p>
                Hello, I’m <span className="text-neutral-900 dark:text-white font-semibold">{PERSONAL_INFO.name}</span>. 
                I operate at the convergence of software engineering and human-centered design. Over the past 7+ years, I’ve designed and coded digital products, design systems, and experimental 3D web environments for startups and industry leaders.
              </p>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                My philosophy is straightforward: interfaces should feel tangible, weightless, and instantly responsive. I don't just assemble UI components—I craft custom interaction choreographies, fine-tune spring physics curves, and write clean, maintainable TypeScript architectures that scale.
              </p>
            </div>

            {/* Quick Badges / Meta Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Location</div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border">
                <div className="p-2 rounded-xl bg-violet-500/10 text-violet-500 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Availability</div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.availability}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Timezone</div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.timezone} (Flexible Sync)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Core Focus</div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                    React 19, Three.js, Design Systems
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group"
              >
                <span>Inquire about a new design or engineering engagement</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-card border relative overflow-hidden group hover:border-cyan-500/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-900 dark:text-white mb-2 gradient-text-cyan">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Matrix Section */}
        <div className="rounded-3xl glass-panel border p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-2">
                <Code className="w-3.5 h-3.5" />
                Technical Competence
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white">
                Interactive Skills Matrix
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
              Evaluated based on production deployment experience, benchmarked testing, and architectural maturity.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-neutral-200 dark:border-white/10">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all outline-none',
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-md'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5'
                  )}
                >
                  <span>{skillCategoryIcons[cat.icon]}</span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Animated Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-2xl glass-card border flex flex-col justify-between gap-3 group hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          Core
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-neutral-400">
                        {skill.experienceYears}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar with smooth fill */}
                  <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.05 * idx,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
