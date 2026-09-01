import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { FARM_TIMELINE } from '../../data/timeline';

export const DayIn2035Timeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(2);
  const activeStep = FARM_TIMELINE[selectedIdx];

  return (
    <section className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="24-HOUR FUTURE VISION"
          title="A DAY ON THE FARM — 2035"
          subtitle="Select a time below to witness how an autonomous, AI-guided farm operates from dawn to dusk."
        />

        {/* Time Selector Buttons */}
        <div className="flex items-center justify-start md:justify-between gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800 scrollbar-none">
          {FARM_TIMELINE.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.time}
                onClick={() => setSelectedIdx(idx)}
                className={`flex flex-col items-center py-2.5 sm:py-3 px-4 sm:px-5 rounded-2xl transition-all duration-300 font-mono-tech shrink-0 border ${
                  isSelected
                    ? 'bg-forest-900 text-white border-emerald-500 shadow-lg scale-[1.02]'
                    : 'bg-theme-surface text-theme-primary border-neutral-200 dark:border-neutral-800 hover:border-emerald-600'
                }`}
              >
                <span className={`text-base sm:text-lg font-bold ${isSelected ? 'text-emerald-300' : 'text-theme-primary'}`}>{item.time}</span>
                <span className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold ${isSelected ? 'text-emerald-200' : 'text-theme-muted'}`}>{item.stage.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Time Visual & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-theme-surface p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
          {/* Visual Container */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 block">
            <ImageWithFallback
              key={activeStep.time}
              src={activeStep.image}
              alt={activeStep.title}
              hoverZoom={false}
              className="w-full h-full object-cover block transition-opacity duration-500"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white font-mono-tech text-[10px] sm:text-xs font-bold flex items-center gap-1.5 sm:gap-2 border border-emerald-500/40">
              <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-400" /> {activeStep.time} HRS — {activeStep.stage}
            </div>
          </div>

          {/* Details & Metrics */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-bold block mb-1.5 sm:mb-2">
                SCHEDULED EVENT
              </span>
              <h3 className="text-xl sm:text-3xl font-serif-editorial font-bold text-theme-primary leading-tight">
                {activeStep.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-theme-secondary font-sans leading-relaxed">
              {activeStep.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              {activeStep.metrics.map((m, i) => (
                <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-theme-muted border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[8px] sm:text-[9px] font-mono-tech text-theme-muted block uppercase font-bold">{m.label}</span>
                  <span className="text-xs sm:text-sm font-mono-tech font-bold text-emerald-800 dark:text-emerald-400">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
