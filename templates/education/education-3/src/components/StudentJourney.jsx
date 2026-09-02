import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STUDENT_JOURNEY_STEPS } from '../data/stats';
import { Compass, BookOpen, Cpu, Users, Rocket, ArrowDown } from 'lucide-react';

const STEP_ICONS = [Compass, BookOpen, Cpu, Users, Rocket];

export default function StudentJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-24 relative bg-slate-950/80 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-electric-400 uppercase">
            PATHWAY TO EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            The Scholar Journey.
          </h2>
          <p className="text-slate-400 text-sm font-light">
            From initial curiosity to global venture launch or research doctorate, trace your progression through our 5-stage synthesis framework.
          </p>
        </div>

        {/* 5-Step Interactive Horizontal / Vertical Stepper Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {STUDENT_JOURNEY_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl glass-panel border transition-all duration-300 flex flex-col items-center text-center gap-2 ${
                  isActive
                    ? 'border-electric-400 bg-slate-900 shadow-lg shadow-electric-500/20 scale-105'
                    : 'border-white/10 hover:border-white/20 bg-slate-950/50 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isActive ? 'bg-electric-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black font-mono text-white">{step.number}</span>
                <span className="text-xs font-bold font-display text-slate-200">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Editorial Highlight Card */}
        <div className="relative rounded-3xl glass-panel border border-white/10 p-8 lg:p-12 overflow-hidden bg-slate-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stage Text & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-violetAccent-400">
                  {STUDENT_JOURNEY_STEPS[activeStepIndex].number}
                </span>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-electric-400">
                    STAGE {activeStepIndex + 1} OF 5
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    {STUDENT_JOURNEY_STEPS[activeStepIndex].title}
                  </h3>
                </div>
              </div>

              <h4 className="text-lg text-electric-300 font-medium">
                "{STUDENT_JOURNEY_STEPS[activeStepIndex].subtitle}"
              </h4>

              <p className="text-slate-300 text-base font-light leading-relaxed max-w-xl">
                {STUDENT_JOURNEY_STEPS[activeStepIndex].description}
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % STUDENT_JOURNEY_STEPS.length)}
                  className="px-6 py-3 rounded-full bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs tracking-wider flex items-center gap-2"
                >
                  <span>NEXT STAGE ({STUDENT_JOURNEY_STEPS[(activeStepIndex + 1) % STUDENT_JOURNEY_STEPS.length].title})</span>
                  <ArrowDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
            </div>

            {/* Stage Image Illustration */}
            <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden glass-panel border border-white/10">
              <motion.img
                key={activeStepIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={STUDENT_JOURNEY_STEPS[activeStepIndex].image}
                alt={STUDENT_JOURNEY_STEPS[activeStepIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
