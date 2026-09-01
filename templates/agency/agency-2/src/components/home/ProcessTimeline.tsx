import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    timeline: 'WEEK 01–02',
    headline: 'Immersion & Market Scrutiny',
    description: 'We immerse ourselves into your category ecosystem, customer friction points, and cultural trends to uncover uncontested whitespace.',
    deliverables: ['Stakeholder Interviews', 'Competitive Matrix', 'Technical Feasibility Map'],
  },
  {
    step: '02',
    title: 'DEFINE',
    timeline: 'WEEK 03–04',
    headline: 'Strategy & Narrative Blueprint',
    description: 'We articulate your unfair advantage into an unmistakable brand manifesto, verbal guidelines, and information architecture.',
    deliverables: ['Positioning Thesis', 'Verbal Identity Book', 'Core User Journeys'],
  },
  {
    step: '03',
    title: 'CREATE',
    timeline: 'WEEK 05–08',
    headline: 'Tactile Art Direction & UI Systems',
    description: 'We sculpt living design systems, custom typography, cinematic 3D assets, and interactive prototypes tested at 60 frames per second.',
    deliverables: ['Figma Design System', 'Motion Guidelines', 'Interactive Prototypes'],
  },
  {
    step: '04',
    title: 'BUILD',
    timeline: 'WEEK 09–12',
    headline: 'Creative Engineering & Integration',
    description: 'We engineer lightweight React/WebGL architectures, headless CMS integrations, micro-animations, and sub-100ms load times.',
    deliverables: ['Production Codebase', 'CMS Configuration', 'Cross-Device QA Report'],
  },
  {
    step: '05',
    title: 'LAUNCH',
    timeline: 'WEEK 13+',
    headline: 'Global Release & Impact Tracking',
    description: 'We orchestrate launch media, digital out-of-home synchronization, performance telemetry, and post-launch retainer scaling.',
    deliverables: ['Go-Live Orchestration', 'Analytics Telemetry', 'Retainer Playbook'],
  },
];

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-ink-border gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 — METHODOLOGY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-primary uppercase">
            HOW WE <span className="text-stroke-strong">WORK</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-ink-secondary leading-relaxed">
          A disciplined five-stage choreography ensuring uncompromising creative vision converts smoothly into robust production software.
        </p>
      </div>

      {/* Interactive Step Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-12">
        {STEPS.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(idx)}
            className={`p-4 rounded-xl text-left transition-all duration-300 border ${
              activeStep === idx
                ? 'glass-panel-strong border-accent-coral shadow-glass-elevated'
                : 'glass-panel-subtle border-ink-border/70 hover:border-ink-primary/30'
            }`}
            data-cursor="LINK"
          >
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className={`font-bold ${activeStep === idx ? 'text-accent-coral' : 'text-ink-muted'}`}>
                {s.step}
              </span>
              <span className="text-[10px] text-ink-muted uppercase">{s.timeline}</span>
            </div>
            <h4 className="font-display font-bold text-base sm:text-lg uppercase text-ink-primary">
              {s.title}
            </h4>
          </button>
        ))}
      </div>

      {/* Active Phase Detail Display */}
      <div className="mt-8 glass-panel p-8 sm:p-12 rounded-3xl border border-ink-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-semibold">
              <span>PHASE {STEPS[activeStep].step}</span>
              <span>•</span>
              <span>{STEPS[activeStep].timeline}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-ink-primary">
              {STEPS[activeStep].headline}
            </h3>

            <p className="text-base text-ink-secondary leading-relaxed">
              {STEPS[activeStep].description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-warm-white p-6 rounded-2xl border border-ink-border space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              Core Milestones & Deliverables:
            </span>
            <ul className="space-y-3">
              {STEPS[activeStep].deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-ink-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent-coral shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
