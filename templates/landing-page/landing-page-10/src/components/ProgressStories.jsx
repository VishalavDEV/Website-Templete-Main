import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROGRESS_JOURNEYS } from '../data/progress';
import { TrendingUp, Activity, Sparkles, User, CheckCircle } from 'lucide-react';

export default function ProgressStories() {
  const [selectedJourneyId, setSelectedJourneyId] = useState('mira');
  const activeJourney = PROGRESS_JOURNEYS.find((j) => j.id === selectedJourneyId) || PROGRESS_JOURNEYS[0];

  return (
    <section id="progress" className="py-24 md:py-36 bg-[#171816] text-[#F3F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-3">
              INDIVIDUAL JOURNEYS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
              Progress looks <span className="editorial-italic font-normal text-[#D8D4C8]">different for everyone.</span>
            </h2>
          </div>
          <p className="text-base text-[#D8D4C8]/80 max-w-md font-light leading-relaxed">
            We measure success through sustained vitality, sleep recovery, and habit longevity—not arbitrary numbers on a scale.
          </p>
        </div>

        {/* Member Selector Tabs */}
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
          {PROGRESS_JOURNEYS.map((journey) => {
            const isActive = journey.id === selectedJourneyId;
            return (
              <button
                key={journey.id}
                onClick={() => setSelectedJourneyId(journey.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-heading font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#B56F4D] text-[#F3F0E8] shadow-lg'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                <img
                  src={journey.avatar}
                  alt={journey.name}
                  className="w-7 h-7 rounded-full object-cover border border-white/20"
                />
                <span>{journey.name}'S PATH</span>
              </button>
            );
          })}
        </div>

        {/* Journey Card Layout */}
        <div className="bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Member Meta & Testimonial */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={activeJourney.avatar}
                alt={activeJourney.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#B56F4D]"
              />
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#F3F0E8]">{activeJourney.name}</h3>
                <p className="text-xs text-[#D8D4C8]/70 font-mono">{activeJourney.profession}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B56F4D]">Primary Goal</span>
                <p className="text-sm font-semibold text-white">{activeJourney.goal}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">Timeframe</span>
                <p className="text-sm font-light text-white/80">{activeJourney.timeframe}</p>
              </div>
            </div>

            <div className="bg-[#3E5142]/40 p-6 rounded-2xl border border-white/10">
              <p className="editorial-italic text-base text-[#F3F0E8] leading-relaxed">
                "{activeJourney.testimonial}"
              </p>
            </div>
          </div>

          {/* Right Column: Visual Data Timeline Story */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D8D4C8] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#B56F4D]" />
                Abstract Progress Visualization
              </span>
              <span className="text-xs font-mono text-emerald-400">Sustainable Adaptation</span>
            </div>

            {/* Stepped Timeline Progress Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeJourney.weeks.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4 relative group hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#B56F4D]">{step.week}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">
                      Score: {step.energyScore}%
                    </span>
                  </div>

                  {/* Visual Energy Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-white/60">
                      <span>Vitality Index</span>
                      <span>{step.energyScore}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#B56F4D] to-[#3E5142] rounded-full transition-all duration-700"
                        style={{ width: `${step.energyScore}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-white/90 leading-tight">
                    {step.state}
                  </p>

                  <p className="text-[11px] font-light text-white/60 italic pt-2 border-t border-white/10">
                    "{step.note}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
