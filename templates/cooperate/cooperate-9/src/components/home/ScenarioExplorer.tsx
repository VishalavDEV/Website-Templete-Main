import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ADVISORY_SCENARIOS, AdvisoryScenario } from '../../data/scenarios';

export const ScenarioExplorer: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(ADVISORY_SCENARIOS[5].id); // Default to 'Preparing for Exit'

  const selectedScenario = ADVISORY_SCENARIOS.find((s) => s.id === selectedScenarioId) || ADVISORY_SCENARIOS[0];

  return (
    <section id="scenarios" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              03 / DECISION PATHWAYS
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              ADVISORY SCENARIO EXPLORER
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              What are you solving for?
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              Every major corporate transition requires deliberate sequencing. Select your current strategic imperative to explore the fiduciary execution pathway.
            </p>
          </div>
        </div>

        {/* SCENARIO SELECTOR PILLS */}
        <div className="py-8 border-b border-[#E5E5E5] overflow-x-auto">
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {ADVISORY_SCENARIOS.map((scenario) => {
              const isSelected = scenario.id === selectedScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#191919] text-white shadow-xs'
                      : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919]'
                  }`}
                >
                  {scenario.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* ADVISORY PATHWAY DETAILS */}
        <div className="pt-12 space-y-12">
          {/* Objective Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 bg-[#F4F3F3] rounded-xl border border-[#E5E5E5]/60 items-center">
            <div className="md:col-span-8 space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono">
                STRATEGIC MANDATE • {selectedScenario.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                {selectedScenario.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#191919]/70 leading-relaxed">
                {selectedScenario.challengeStatement}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col md:items-end justify-center space-y-2 border-t md:border-t-0 md:border-l border-[#E5E5E5] pt-4 md:pt-0 md:pl-6">
              <div className="text-left md:text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 block font-mono">TIME HORIZON</span>
                <span className="text-xs font-semibold text-[#191919] font-mono">{selectedScenario.timeHorizon}</span>
              </div>
              <div className="text-left md:text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 block font-mono">TARGET BENCHMARK</span>
                <span className="text-xs font-semibold text-[#191919] font-mono">{selectedScenario.keyMetric}</span>
              </div>
            </div>
          </div>

          {/* SEQUENTIAL 5-STEP PATHWAY */}
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium block">
              EXECUTION SEQUENCING & DELIVERABLES
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {selectedScenario.pathway.map((step, idx) => (
                <div
                  key={step.stepNumber}
                  className="p-5 bg-white border border-[#E5E5E5] rounded-xl flex flex-col justify-between hover:border-[#191919]/40 transition-colors duration-200 group relative"
                >
                  {/* Step number and subtle indicator */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
                      <span className="text-xs font-mono font-semibold text-[#191919]/40 group-hover:text-[#191919]">
                        STEP {step.stepNumber}
                      </span>
                      {idx < selectedScenario.pathway.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#191919]/30 hidden lg:block" />
                      )}
                    </div>

                    <h4 className="font-serif text-lg text-[#191919] font-normal leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs text-[#191919]/70 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E5E5E5]/60">
                    <span className="text-[9px] uppercase tracking-wider text-[#191919]/40 block font-mono">
                      KEY DELIVERABLE
                    </span>
                    <span className="text-[11px] font-medium text-[#191919] mt-0.5 block leading-tight">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome Box */}
          <div className="p-5 bg-white border border-[#E5E5E5] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono block">
                PROJECTED STRATEGIC OUTCOME
              </span>
              <p className="text-sm font-serif text-[#191919] mt-0.5">
                {selectedScenario.expectedOutcome}
              </p>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#191919] text-white rounded text-xs font-medium hover:bg-[#191919]/90 transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Initiate Scenario Scoping
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
