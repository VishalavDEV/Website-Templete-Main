import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RHYTHM_STAGES } from '../data/rhythm';
import { Sun, Moon, Clock, Sparkles, ChevronRight, Activity, Zap } from 'lucide-react';

export default function DailyRhythm() {
  const [activeStageId, setActiveStageId] = useState('move');
  const activeStage = RHYTHM_STAGES.find((s) => s.id === activeStageId) || RHYTHM_STAGES[0];
  const activeIndex = RHYTHM_STAGES.findIndex((s) => s.id === activeStageId);

  return (
    <section id="daily-rhythm" className="py-24 md:py-32 relative overflow-hidden transition-colors duration-700 bg-[#F3F0E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171816]/5 text-xs font-semibold uppercase tracking-widest text-[#B56F4D] mb-4">
              <Clock className="w-3.5 h-3.5" />
              SIGNATURE INTERACTION
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#171816] tracking-tight">
              YOUR DAY, <span className="editorial-italic font-normal text-[#B56F4D]">REIMAGINED.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#171816]/70 max-w-md font-light">
            Wellness is not built in rare intense workouts. It is sculpted through the natural flow of your daily decisions.
          </p>
        </div>

        {/* Timeline Selector Bar */}
        <div className="relative mb-12 p-2 bg-[#D8D4C8]/50 rounded-2xl md:rounded-full backdrop-blur-sm border border-[#171816]/5">
          {/* Progress bar background indicator */}
          <div className="hidden md:block absolute top-1/2 left-6 right-6 h-1 bg-[#171816]/10 -translate-y-1/2 z-0" />
          <motion.div
            className="hidden md:block absolute top-1/2 left-6 h-1 bg-[#B56F4D] -translate-y-1/2 z-0 transition-all duration-500 rounded-full"
            style={{ width: `${(activeIndex / (RHYTHM_STAGES.length - 1)) * 90}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 relative z-10">
            {RHYTHM_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`group relative px-4 py-3.5 rounded-xl md:rounded-full transition-all duration-300 flex flex-col items-center justify-center text-center ${
                    isActive
                      ? 'bg-[#171816] text-[#F3F0E8] shadow-lg scale-[1.02]'
                      : 'hover:bg-[#F3F0E8]/80 text-[#171816]/70 hover:text-[#171816]'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold tracking-wider mb-0.5 ${isActive ? 'text-[#B56F4D]' : 'text-[#171816]/50'}`}>
                    {stage.time}
                  </span>
                  <span className="text-sm font-heading font-semibold uppercase tracking-wide">
                    {stage.phase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stage Interactive Panel */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                activeStage.darkTheme ? 'bg-[#171816] text-[#F3F0E8]' : 'bg-[#D8D4C8]/30 text-[#171816] border border-[#171816]/10'
              }`}
            >
              {/* Left Column: Stage Guidance */}
              <div className="lg:col-span-6 flex flex-col items-start space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: activeStage.accentColor }}
                  >
                    {activeStage.time} — {activeStage.tagline}
                  </span>
                  {activeStage.darkTheme ? (
                    <Moon className="w-4 h-4 text-indigo-300" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-600" />
                  )}
                </div>

                <h3 className="text-2xl sm:text-4xl font-heading font-extrabold leading-snug">
                  {activeStage.title}
                </h3>

                <p className="text-base font-light leading-relaxed opacity-85">
                  {activeStage.description}
                </p>

                {/* Coach Note Box */}
                <div
                  className={`p-5 rounded-2xl border ${
                    activeStage.darkTheme
                      ? 'bg-white/5 border-white/10 text-white/90'
                      : 'bg-[#F3F0E8] border-[#171816]/10 text-[#171816]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#B56F4D]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AURELIS Coach Insight</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium italic">
                    "{activeStage.coachingNote}"
                  </p>
                </div>

                {/* Metrics pill strip */}
                <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-current/10">
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider opacity-60">Intensity</span>
                    <span className="text-xs sm:text-sm font-bold font-heading">{activeStage.metrics.intensity}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider opacity-60">Duration</span>
                    <span className="text-xs sm:text-sm font-bold font-heading">{activeStage.metrics.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono tracking-wider opacity-60">Primary Focus</span>
                    <span className="text-xs sm:text-sm font-bold font-heading truncate block">{activeStage.metrics.focus}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage Environment */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/20">
                  <img
                    src={activeStage.image}
                    alt={activeStage.phase}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Indicator on Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-[#B56F4D] text-white">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-mono text-white/70">Stage Completed</p>
                        <p className="text-xs font-semibold">{activeStage.phase} Rhythm Active</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const nextIdx = (activeIndex + 1) % RHYTHM_STAGES.length;
                        setActiveStageId(RHYTHM_STAGES[nextIdx].id);
                      }}
                      className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors"
                    >
                      Next Stage
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
