import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const STAGES = [
  {
    step: '01',
    title: 'Traditional Farming',
    subtitle: 'Manual observation, seasonal almanacs, and blanket uniform fertilization.',
    description: 'For centuries, agriculture relied on broad seasonal heuristics and uniform application of water and fertilizer across entire acreage, resulting in significant resource wastage.',
    image: '/images/pexels-quang-nguyen-vinh-222549-2158048.jpg',
    stat: '1900s - 1980s Era'
  },
  {
    step: '02',
    title: 'Connected Farming',
    subtitle: 'Introduction of GPS-guided tractors and localized weather stations.',
    description: 'The late 20th century saw satellite positioning guide tractor steering lines, reducing overlap and introducing basic micro-climate weather monitoring.',
    image: '/images/pexels-brett-sayles-5087172.jpg',
    stat: '1990s - 2010s Era'
  },
  {
    step: '03',
    title: 'Sensor-Driven Farming',
    subtitle: 'Subterranean probes, canopy cameras, and real-time telemetry streams.',
    description: 'Sub-surface soil sensors and multispectral cameras began broadcasting volumetric moisture and chlorophyll indices continuously to central farm computers.',
    image: '/images/pexels-cottonbro-4921204.jpg',
    stat: '2015 - 2022 Era'
  },
  {
    step: '04',
    title: 'AI-Assisted Farming',
    subtitle: 'Deep neural networks predicting leaf disease, stress, and optimal yield dates.',
    description: 'Generative and vision AI models synthesize satellite imagery, weather patterns, and soil data to recommend precise daily micro-adjustments for every crop row.',
    image: '/images/ai_neural_crops.jpg',
    stat: '2023 - 2025 Era'
  },
  {
    step: '05',
    title: 'Autonomous Farm Ecosystems',
    subtitle: 'Self-operating swarm robotics, micro-laser weeders, and closed-loop drip networks.',
    description: 'The modern paradigm: 24/7 solar electric swarm bots, drone micro-pollination, laser weed destruction, and closed-loop hydroponic water recycling operating autonomously.',
    image: '/images/ai_robotic_field.jpg',
    stat: '2026+ Present & Beyond'
  }
];

export const AgriStorytelling: React.FC = () => {
  const [activeStage, setActiveStage] = useState(4);

  return (
    <section className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="THE EVOLUTION OF AGRONOMY"
          title="From Traditional Fields to Autonomous Ecosystems"
          subtitle="Click or scroll through the 5 pivotal stages of agricultural technology advancement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Stage Selector Tabs */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-forest-900 text-white border-emerald-500 shadow-lg scale-[1.01]'
                      : 'bg-theme-surface text-theme-primary border-neutral-200 dark:border-neutral-800 hover:border-emerald-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] sm:text-xs font-mono-tech font-bold ${isActive ? 'text-emerald-300' : 'text-emerald-800 dark:text-emerald-400'}`}>
                      STAGE {stage.step}
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-mono-tech px-2 py-0.5 rounded font-bold ${isActive ? 'bg-emerald-800 text-emerald-200' : 'bg-theme-muted text-theme-secondary'}`}>
                      {stage.stat}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-serif-editorial font-bold mb-1 ${isActive ? 'text-white' : 'text-theme-primary'}`}>
                    {stage.title}
                  </h3>

                  <p className={`text-xs ${isActive ? 'text-neutral-200' : 'text-theme-secondary'} line-clamp-2 sm:line-clamp-none`}>
                    {stage.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-black aspect-video sm:aspect-[4/3] group block">
              <ImageWithFallback
                key={activeStage}
                src={STAGES[activeStage].image}
                alt={STAGES[activeStage].title}
                hoverZoom={false}
                className="w-full h-full object-cover block transition-all duration-700 opacity-90"
              />

              {/* Gradient Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] sm:text-xs font-mono-tech text-emerald-400 uppercase tracking-widest mb-1.5 sm:mb-2 flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> STAGE {STAGES[activeStage].step} ARCHITECTURE
                </span>

                <h3 className="text-xl sm:text-3xl font-serif-editorial font-bold text-white mb-1.5 sm:mb-2 leading-tight">
                  {STAGES[activeStage].title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                  {STAGES[activeStage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
