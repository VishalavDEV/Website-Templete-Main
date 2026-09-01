import React, { useState } from 'react';
import { Network, Activity, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export const AiIntelligence: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'PATHOLOGY' | 'HYDRATION' | 'GENOMICS'>('PATHOLOGY');

  return (
    <section className="py-20 bg-[#0B1710] text-white relative overflow-hidden">
      {/* Radial Gradient Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] sm:w-[800px] h-[300px] sm:h-[500px] bg-emerald-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          label="ARTIFICIAL INTELLIGENCE"
          title="INTELLIGENCE IN EVERY ACRE"
          subtitle="Watch how neural vision models synthesize multi-spectral canopy data, satellite telemetry, and soil metrics to predict disease outbreaks and harvest windows."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual AI Field Container (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl bg-black aspect-[16/10] block">
              <ImageWithFallback
                src="/images/ai_neural_crops.jpg"
                alt="AI Neural Crop Visualization"
                hoverZoom={false}
                className="w-full h-full object-cover opacity-80 block"
              />

              {/* Animated Neural SVG Lines Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Neural Nodes */}
                <circle cx="20%" cy="30%" r="5" fill="#4ade80" className="animate-ping" />
                <circle cx="50%" cy="40%" r="6" fill="#38bdf8" />
                <circle cx="80%" cy="35%" r="5" fill="#a78bfa" className="animate-pulse" />
                <circle cx="35%" cy="70%" r="6" fill="#4ade80" />
                <circle cx="70%" cy="75%" r="5" fill="#38bdf8" />

                {/* Connecting Synapses */}
                <line x1="20%" y1="30%" x2="50%" y2="40%" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-80" />
                <line x1="50%" y1="40%" x2="80%" y2="35%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-80" />
                <line x1="50%" y1="40%" x2="35%" y2="70%" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-80" />
                <line x1="35%" y1="70%" x2="70%" y2="75%" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-80" />
              </svg>

              {/* Live Metric Float Tag */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-black/85 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-emerald-500/50 text-[10px] sm:text-xs font-mono-tech flex items-center gap-2 text-white font-bold shadow-lg">
                <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-bold">NEURAL VISION v4.8</span>
              </div>
            </div>
          </div>

          {/* Controls & Model Explanations (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex gap-1.5 sm:gap-2 p-1.5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-emerald-900/60">
              <button
                onClick={() => setActiveModel('PATHOLOGY')}
                className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono-tech font-bold transition-all ${
                  activeModel === 'PATHOLOGY'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                PATHOLOGY
              </button>
              <button
                onClick={() => setActiveModel('HYDRATION')}
                className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono-tech font-bold transition-all ${
                  activeModel === 'HYDRATION'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                HYDRATION
              </button>
              <button
                onClick={() => setActiveModel('GENOMICS')}
                className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono-tech font-bold transition-all ${
                  activeModel === 'GENOMICS'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                GENOMICS
              </button>
            </div>

            {/* Model Insight Box */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-900/95 border border-emerald-800/60 space-y-4 text-white shadow-xl">
              {activeModel === 'PATHOLOGY' && (
                <>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono-tech uppercase font-bold">
                    <ShieldCheck className="w-4 h-4" /> CANOPY PATHOLOGY PREDICTOR
                  </div>
                  <h4 className="text-xl font-serif-editorial font-bold text-white">
                    Early Fungal &amp; Microbial Outbreak Detection
                  </h4>
                  <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                    By evaluating multispectral leaf pigment reflectances across 240 light wavelengths, our vision transformer spots cellular membrane degradation up to 14 days before rust or chlorosis symptoms become visible to human eyes.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono-tech">
                    <div className="p-3 rounded-xl bg-black/70 border border-emerald-950">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">ACCURACY</span>
                      <span className="text-emerald-400 font-bold text-base">99.4%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/70 border border-emerald-950">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">LATENCY</span>
                      <span className="text-emerald-400 font-bold text-base">12 ms</span>
                    </div>
                  </div>
                </>
              )}

              {activeModel === 'HYDRATION' && (
                <>
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-mono-tech uppercase font-bold">
                    <Activity className="w-4 h-4" /> ACOUSTIC TRANSPIRATION ENGINE
                  </div>
                  <h4 className="text-xl font-serif-editorial font-bold text-white">
                    Microscopic Cavitation &amp; Moisture Stress
                  </h4>
                  <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                    Piezoelectric stem transducers measure acoustic micro-bubbles popping inside plant xylem channels. The AI adjusts micro-drip flow rates in real-time, preventing drought stress while eliminating water waste.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono-tech">
                    <div className="p-3 rounded-xl bg-black/70 border border-emerald-950">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">WATER SAVED</span>
                      <span className="text-sky-400 font-bold text-base">48.2%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/70 border border-emerald-950">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">PULSE FREQ</span>
                      <span className="text-sky-400 font-bold text-base">100 Hz</span>
                    </div>
                  </div>
                </>
              )}

              {activeModel === 'GENOMICS' && (
                <>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono-tech uppercase font-bold">
                    <Zap className="w-4 h-4" /> PROTEIN STRUCTURAL GENERATOR
                  </div>
                  <h4 className="text-xl font-serif-editorial font-bold text-white">
                    Climate-Resilient Seed Gene Modeling
                  </h4>
                  <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                    Generative AI protein folding models simulate stomatal pore opening reactions during 40°C+ thermal spikes, guiding gene edits to engineer heat-tolerant wheat and soybean varieties.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono-tech">
                    <div className="p-3 rounded-xl bg-black/70 border border-emerald-950">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">HEAT THRESHOLD</span>
                      <span className="text-purple-400 font-bold text-base">+4.5 °C</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/70 border border-emerald-950">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">PROTEIN CANDIDATES</span>
                      <span className="text-purple-400 font-bold text-base">14,200</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
