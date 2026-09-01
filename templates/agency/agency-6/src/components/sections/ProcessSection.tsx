import React, { useState } from 'react';
import { ScrollReveal } from '../common/ScrollReveal';
import { ArrowRight, Check } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Strategic Audit & Market Diagnostic',
    description: 'We analyze your competitive landscape, technological debt, customer telemetry, and unexploited market white space to establish clear baseline objectives.',
    deliverables: ['Competitive Diagnostic Deck', 'Technology Architecture Audit', 'User Telemetry Blueprint'],
    duration: '2 - 3 Weeks'
  },
  {
    number: '02',
    title: 'DEFINE',
    tagline: 'Category Positioning & System Architecture',
    description: 'Defining the brand architecture, user journeys, 3D visual language, and backend API parameters before laying a single line of production code.',
    deliverables: ['Positioning Playbook', 'Figma Interactive Wireframe', 'API & Database Schema'],
    duration: '3 - 4 Weeks'
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: '3D Prototyping & Swiss Typographic Systems',
    description: 'Engineering the visual atmosphere. Crafting custom WebGL lighting, micro-interactions, responsive typography, and spatial components.',
    deliverables: ['Design Token Library', 'Interactive 3D WebGL Prototype', 'Motion Design System'],
    duration: '4 - 6 Weeks'
  },
  {
    number: '04',
    title: 'BUILD',
    tagline: 'Full-Stack Engineering & AI Agent Deployment',
    description: 'Production frontend and backend implementation. Optimizing GPU shaders, multi-agent AI connections, and sub-100ms page load speeds.',
    deliverables: ['Production Codebase', 'Security & Speed Audit', 'Multi-Agent API Pipelines'],
    duration: '5 - 8 Weeks'
  },
  {
    number: '05',
    title: 'SCALE',
    tagline: 'Launch, Telemetry & EBITDA Impact',
    description: 'Global launch execution, executive handover, live user monitoring, and iterative enhancements to drive long-term EBITDA growth.',
    deliverables: ['Launch Execution Protocol', 'Executive Analytics Portal', 'Ongoing SLA Support'],
    duration: 'Ongoing'
  }
];

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section className="py-28 sm:py-36 bg-[#f8f7f4] relative overflow-hidden select-none border-b-2 border-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#090909]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#090909] font-black block mb-2">
                THE VANTA FORM METHODOLOGY // ARCHITECTURE
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase text-[#090909] tracking-tighter">
                OUR 5-PHASE PROCESS
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#4a4d55] font-mono font-bold leading-relaxed">
              A disciplined, engineering-grade delivery framework designed to guarantee market dominance.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Timeline Bar */}
        <div className="py-12 overflow-x-auto scrollbar-none">
          <div className="flex items-center min-w-[700px] justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#090909] -translate-y-1/2 z-0" />

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative z-10 flex flex-col items-center gap-2 group cursor-pointer`}
                >
                  <div
                    className={`w-14 h-14 rounded-none border-2 flex items-center justify-center font-mono text-xs font-black transition-all duration-300 ${
                      isActive
                        ? 'bg-[#090909] text-[#D1FF00] border-[#090909] scale-125 shadow-2xl'
                        : isPassed
                        ? 'bg-[#D1FF00] text-[#090909] border-[#090909]'
                        : 'bg-white text-[#090909] border-[#090909] hover:bg-[#D1FF00]'
                    }`}
                  >
                    {isPassed ? <Check className="w-5 h-5 stroke-[3]" /> : step.number}
                  </div>

                  <span
                    className={`font-mono text-xs uppercase tracking-widest font-black transition-colors ${
                      isActive ? 'text-[#090909]' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Content */}
        <div className="bg-[#090909] text-[#f8f7f4] rounded-none p-8 sm:p-12 border-2 border-[#090909] shadow-2xl mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#D1FF00] text-[#090909] font-mono text-xs uppercase font-black rounded-none border border-[#090909]">
                  PHASE {activeStep.number} // {activeStep.duration}
                </span>
                <span className="font-mono text-xs uppercase text-[#D1FF00] tracking-widest font-bold">
                  {activeStep.tagline}
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-serif font-black text-white uppercase tracking-tighter">
                {activeStep.title}
              </h3>

              <p className="text-base font-mono text-gray-300 leading-relaxed max-w-2xl">
                {activeStep.description}
              </p>

              <div className="pt-4 space-y-2">
                <span className="font-mono text-xs text-[#D1FF00] uppercase tracking-widest font-black">
                  CORE DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeStep.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#111111] border border-white/15 rounded-none text-xs font-mono font-bold text-gray-200"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Phase Counter Illustration */}
            <div className="lg:col-span-4 text-center border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
              <div className="text-7xl sm:text-9xl font-serif font-black text-[#D1FF00]/20 select-none">
                {activeStep.number}
              </div>
              <p className="font-mono text-xs text-[#D1FF00] uppercase tracking-widest font-black mt-2">
                VANTA FORM METHODOLOGY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
