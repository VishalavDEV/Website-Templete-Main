import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/mockData';
import { ChevronRight, Sparkles } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
            The Patient Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
            Predictable care. <br />
            <span className="italic font-normal text-[#C97873]">Every step of the way.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal mt-3 leading-relaxed">
            From your very first intake consultation to continuous decades of organ health protection, experience a seamlessly coordinated clinical journey.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <div className="relative border-b-2 border-[#E5DDD8] pb-10 mb-10 flex justify-between items-start">
            {JOURNEY_STEPS.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center cursor-pointer group w-40 text-center relative"
                >
                  {/* Step Connector line */}
                  {idx < JOURNEY_STEPS.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 transition-colors duration-300 ${
                        idx < activeStepIndex ? 'bg-[#C97873]' : 'bg-[#E5DDD8]'
                      }`}
                    />
                  )}

                  {/* Step Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm font-bold z-10 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C97873] text-white scale-125 shadow-md ring-4 ring-[#FAF0EE]'
                        : 'bg-white border-2 border-[#E5DDD8] text-[#542F3B] group-hover:border-[#C97873]'
                    }`}
                  >
                    {item.step}
                  </div>

                  <span className={`text-xs font-bold font-sans mt-4 transition-colors ${isActive ? 'text-[#C97873]' : 'text-[#542F3B]'}`}>
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Step Highlight Box */}
          <div className="p-8 rounded-2xl bg-white border border-[#E5DDD8] shadow-sm flex items-center justify-between gap-8 animate-in fade-in duration-300">
            <div>
              <div className="text-xs uppercase font-bold text-[#C97873] tracking-wider mb-1">
                Step {JOURNEY_STEPS[activeStepIndex].step} of 06
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#542F3B]">
                {JOURNEY_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-sm text-[#70696C] font-sans font-normal mt-2 max-w-2xl leading-relaxed">
                {JOURNEY_STEPS[activeStepIndex].desc}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="btn-secondary px-4 py-2 text-xs font-semibold disabled:opacity-40"
              >
                Previous Step
              </button>
              <button
                disabled={activeStepIndex === JOURNEY_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                className="btn-primary px-4 py-2 text-xs font-semibold disabled:opacity-40"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline (Shown on Mobile/Tablet) */}
        <div className="lg:hidden space-y-6">
          {JOURNEY_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-6 bg-white rounded-2xl border border-[#E5DDD8] shadow-xs flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FAF0EE] text-[#C97873] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#542F3B]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#70696C] font-sans font-normal mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
