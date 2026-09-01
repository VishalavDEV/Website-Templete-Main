import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    name: 'DISCOVER',
    title: 'Contextual Research & User Audit',
    description: 'We immerse ourselves in your domain, interviewing users, auditing existing friction points, and mapping user psychological models.',
    deliverables: ['Contextual User Interviews', 'Behavioral Journey Maps', 'Heuristic Audits'],
    image: '/src/assets/images/service_ux_research_1787881426246.jpg',
  },
  {
    number: '02',
    name: 'FRAME',
    title: 'Product Strategy & IA Framing',
    description: 'We translate raw research into concrete information architecture, core feature matrices, and scalable spatial design systems.',
    deliverables: ['Information Architecture Map', 'Feature Matrix', 'Product Value Map'],
    image: '/src/assets/images/service_prod_strategy_1787881442168.jpg',
  },
  {
    number: '03',
    name: 'EXPLORE',
    title: 'Low-Fidelity Wireframing & Design Tokens',
    description: 'Iterative layout exploration in Figma, testing spatial density, grid proportions, and foundational typography pairings.',
    deliverables: ['Low-Fi Wireframe Decks', 'Typographic Specs', 'Color & Token Foundations'],
    image: '/src/assets/images/service_design_system_1787881469264.jpg',
  },
  {
    number: '04',
    name: 'BUILD',
    title: 'High-Fidelity UI & Interactive Prototype',
    description: 'Polishing high-density interface components with micro-interactions, dark/light themes, and interactive prototype flows.',
    deliverables: ['High-Fidelity Figma System', 'Framer Prototype', 'Micro-Interaction Specs'],
    image: '/src/assets/images/service_ui_ux_design_1787881454335.jpg',
  },
  {
    number: '05',
    name: 'REFINE',
    title: 'Creative Development & 3D Shaders',
    description: 'Engineering the frontend in React, Vite, and Three.js with sub-pixel perfection, responsive clamps, and WCAG AA compliance.',
    deliverables: ['Production React Codebase', 'WebGL Shader Engine', 'Storybook Documentation'],
    image: '/src/assets/images/service_creative_3d_1787881502863.jpg',
  },
  {
    number: '06',
    name: 'LAUNCH',
    title: 'Quality Assurance & Continuous Evolution',
    description: 'Rigorous cross-browser QA testing, performance profiling, and post-launch analytics telemetry integration.',
    deliverables: ['Cross-Device QA Audit', 'Performance Optimization', 'Post-Launch Telemetry'],
    image: '/src/assets/images/service_prototyping_1787881485704.jpg',
  },
];

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  return (
    <section className="space-y-8">
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
        <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
          AGENCY METHODOLOGY
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
          OUR 6-STEP PROCESS
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 max-w-lg font-light">
          A disciplined, architectural framework for taking ambitious digital concepts from raw research to flawless production execution.
        </p>
      </div>

      {/* Step Buttons Bar */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={s.number}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 min-w-[130px] p-4 rounded-xl border transition-all text-left ${
                isActive
                  ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 shadow-md scale-102'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:border-neutral-400'
              }`}
            >
              <div className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                {s.number}
              </div>
              <div
                className={`font-mono text-xs uppercase tracking-wider font-bold mt-1 ${
                  isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {s.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Display Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-10 shadow-xl">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/20">
            <span>STEP {currentStep.number} // {currentStep.name}</span>
          </div>

          <h3 className="font-serif text-2xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            {currentStep.title}
          </h3>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
            {currentStep.description}
          </p>

          <div className="space-y-2 pt-2">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
              CORE DELIVERABLES:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-200 font-medium">
              {currentStep.deliverables.map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
          <img
            src={currentStep.image}
            alt={currentStep.title}
            className="h-full w-full object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};
