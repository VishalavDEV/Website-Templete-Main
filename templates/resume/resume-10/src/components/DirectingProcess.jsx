import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { directingProcess } from '../data/directorData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const DirectingProcess = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <section id="process" className="py-24 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            {directingProcess.sectionLabel}
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
            {directingProcess.title}
          </h2>
          <p className="text-neutral-600 text-base font-light mt-2 max-w-xl">
            {directingProcess.subtitle}
          </p>
          <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
        </div>

        {/* FLOWING PROCESS PATH NAVIGATION */}
        <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center min-w-max gap-2 border-b border-neutral-300 pb-4">
            {directingProcess.phases.map((phase, index) => {
              const isActive = activePhaseIndex === index;
              return (
                <React.Fragment key={phase.number}>
                  <button
                    onClick={() => setActivePhaseIndex(index)}
                    className={`flex items-center gap-3 px-5 py-3 font-mono-meta text-xs tracking-widest uppercase transition-all border ${
                      isActive
                        ? 'bg-neutral-950 text-white border-neutral-950 font-bold shadow-xs'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <span className={isActive ? 'text-amber-400' : 'text-neutral-400'}>
                      {phase.number}
                    </span>
                    <span>{phase.name}</span>
                  </button>

                  {index < directingProcess.phases.length - 1 && (
                    <div className="w-6 h-[1px] bg-neutral-300 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PHASE DETAILED FEATURE SPREAD */}
        {(() => {
          const currentPhase = directingProcess.phases[activePhaseIndex];
          return (
            <motion.div
              key={currentPhase.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 border border-neutral-200 shadow-xs"
            >
              {/* LEFT: Phase Info */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono-meta text-xs tracking-widest text-neutral-500 uppercase mb-3">
                    <span className="text-amber-700 font-bold">{currentPhase.number}</span>
                    <span>•</span>
                    <span>{currentPhase.subtitle}</span>
                  </div>

                  <h3 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight mb-6">
                    {currentPhase.name}
                  </h3>

                  <p className="text-neutral-700 text-base leading-relaxed font-light mb-8">
                    {currentPhase.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="font-mono-meta text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2">
                      KEY DELIVERABLES & METHODOLOGY:
                    </div>
                    {currentPhase.details.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-mono-meta text-neutral-600">
                        <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next/Prev Navigation inside phase */}
                <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                  <button
                    disabled={activePhaseIndex === 0}
                    onClick={() => setActivePhaseIndex(prev => prev - 1)}
                    className="px-4 py-2 border border-neutral-300 font-mono-meta text-xs uppercase disabled:opacity-40 hover:bg-neutral-100 transition-colors"
                  >
                    Previous Phase
                  </button>
                  <button
                    disabled={activePhaseIndex === directingProcess.phases.length - 1}
                    onClick={() => setActivePhaseIndex(prev => prev + 1)}
                    className="px-4 py-2 bg-neutral-950 text-white font-mono-meta text-xs uppercase disabled:opacity-40 hover:bg-neutral-800 transition-colors"
                  >
                    Next Phase
                  </button>
                </div>
              </div>

              {/* RIGHT: Phase Visual Representation */}
              <div className="lg:col-span-6 relative">
                <div className="relative border border-neutral-300 p-2 bg-neutral-100 shadow-md">
                  <img
                    src={currentPhase.image}
                    alt={currentPhase.name}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="mt-3 p-3 bg-neutral-900 text-white font-mono-meta text-[11px] tracking-widest flex items-center justify-between">
                    <span>STAGE IMAGE: {currentPhase.name}</span>
                    <span className="text-neutral-400">STAGE {activePhaseIndex + 1} OF 5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}

      </div>
    </section>
  );
};

export default DirectingProcess;
