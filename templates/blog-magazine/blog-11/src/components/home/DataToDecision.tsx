import React, { useState } from 'react';
import { Database, Radio, Cpu, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const STAGES = [
  {
    step: 1,
    title: 'RAW FIELD DATA',
    icon: Database,
    subtitle: 'Soil, Satellite & Micro-Climate Inputs',
    description: 'Continuous telemetry collected from subterranean soil probes, hyperspectral satellites, micro-drones, and ambient weather sensors.'
  },
  {
    step: 2,
    title: 'SENSORY GRID',
    icon: Radio,
    subtitle: 'LoRaWAN Edge Mesh Telemetry',
    description: 'Data packets transmitted via low-power wireless mesh networks to local farm edge hubs without internet latency.'
  },
  {
    step: 3,
    title: 'AI MODEL ENGINE',
    icon: Cpu,
    subtitle: 'Neural Transformers & Computer Vision',
    description: 'Quantized neural networks run inference over canopy imagery, identifying pathogen stress, moisture deficit, and nitrogen levels.'
  },
  {
    step: 4,
    title: 'AGRONOMIC PREDICTION',
    icon: TrendingUp,
    subtitle: 'Micro-Targeted Action Plan',
    description: 'AI calculates exact water drop volumes, targeted fungicide micro-doses, and projected harvest readiness dates.'
  },
  {
    step: 5,
    title: 'AUTONOMOUS ACTION',
    icon: ArrowRight,
    subtitle: 'Swarm Robotics & Micro-Drip Dispatch',
    description: 'Solar swarm robots and micro-drip emitters execute targeted field operations with zero waste.'
  },
  {
    step: 6,
    title: 'OPTIMAL YIELD',
    icon: CheckCircle,
    subtitle: '+34% Harvest Boost & Zero Runoff',
    description: 'Higher crop yields per acre achieved with 48% water reduction and zero environmental synthetic runoff.'
  }
];

export const DataToDecision: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="DECISION ARCHITECTURE"
          title="From Data to Decision"
          subtitle="Explore how raw sensory telemetry transforms into autonomous field action and increased crop yields."
        />

        {/* Pipeline Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative">
          {STAGES.map(stage => {
            const isSelected = activeStep === stage.step;
            const Icon = stage.icon;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`group cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-forest-900 text-white border-emerald-500 shadow-xl scale-[1.02]'
                    : 'bg-theme-surface text-theme-primary border-neutral-200 dark:border-neutral-800 hover:border-emerald-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono-tech text-[11px] sm:text-xs font-bold ${
                      isSelected ? 'bg-emerald-500 text-black' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300'
                    }`}>
                      {stage.step}
                    </span>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-emerald-300' : 'text-neutral-400 group-hover:text-emerald-600'}`} />
                  </div>

                  <h3 className={`text-xs sm:text-sm font-mono-tech font-bold tracking-wider mb-1 uppercase leading-tight ${isSelected ? 'text-white' : 'text-theme-primary'}`}>
                    {stage.title}
                  </h3>

                  <p className={`text-[10px] sm:text-[11px] font-sans font-medium line-clamp-2 ${isSelected ? 'text-emerald-200' : 'text-theme-secondary'}`}>
                    {stage.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-200/30 dark:border-neutral-800/30 text-[9px] sm:text-[10px] font-mono-tech uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  {isSelected ? 'ACTIVE VIEW' : 'CLICK TO VIEW'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-theme-surface border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-forest-900 text-white flex items-center justify-center font-mono-tech text-lg sm:text-xl font-bold shrink-0">
              {STAGES[activeStep - 1].step}
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-bold">
                STAGE {STAGES[activeStep - 1].step} DETAIL
              </span>
              <h4 className="text-base sm:text-xl font-serif-editorial font-bold text-theme-primary leading-tight">
                {STAGES[activeStep - 1].title} — {STAGES[activeStep - 1].subtitle}
              </h4>
              <p className="text-xs text-theme-secondary font-sans mt-1 max-w-2xl leading-relaxed">
                {STAGES[activeStep - 1].description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-none border-neutral-200 dark:border-neutral-800 justify-end">
            <button
              onClick={() => setActiveStep(prev => (prev > 1 ? prev - 1 : 6))}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-mono-tech text-theme-primary font-bold hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              &larr; PREVIOUS
            </button>
            <button
              onClick={() => setActiveStep(prev => (prev < 6 ? prev + 1 : 1))}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-forest-900 dark:bg-emerald-600 text-white text-xs font-mono-tech hover:bg-forest-800 transition-colors shadow-sm font-bold"
            >
              NEXT STAGE &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
