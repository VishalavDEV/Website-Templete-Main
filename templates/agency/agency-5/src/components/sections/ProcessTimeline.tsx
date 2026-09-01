import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const steps = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Deconstruction & Research',
    description: 'We audit legacy codebases, analyze competitor positioning, and synthesize user archetypes to identify singular market opportunities.',
    deliverables: ['Technical Audit', 'User Interviews', 'Competitive Matrix']
  },
  {
    step: '02',
    title: 'DEFINE',
    subtitle: 'Architecture & Tokens',
    description: 'We formulate the digital blueprint — defining light/dark token systems, routing architecture, and measurable performance benchmarks.',
    deliverables: ['Design Tokens', 'Information Architecture', 'Sprint Roadmap']
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Spatial UI & Motion',
    description: 'We build high-contrast typographic systems, tactile micro-animations, and photorealistic 3D canvas visuals that command focus.',
    deliverables: ['Interactive Prototypes', '3D WebGL Assets', 'Design System']
  },
  {
    step: '04',
    title: 'BUILD',
    subtitle: 'High-Throughput Code',
    description: 'Our engineering team writes zero-bloat React, TypeScript, and WebGL code tested across all major device viewports.',
    deliverables: ['Clean React Codebase', 'Accessibility Audit', 'Lighthouse 99+ Score']
  },
  {
    step: '05',
    title: 'LAUNCH',
    subtitle: 'Edge Deployment & CRO',
    description: 'We deploy to high-availability multi-region cloud infrastructure, configure funnel telemetry, and execute continuous optimization.',
    deliverables: ['Edge CDN Setup', 'Conversion Telemetry', 'Post-Launch SLA']
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--surface-color)] border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          number="04"
          badge="METHODOLOGY"
          title="THE BYTEORA 5-STEP STUDIO PROCESS."
          align="split"
          description="A disciplined agile methodology engineered to turn ambitious strategy into flawless digital products without timeline friction."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => (
            <Reveal key={item.step} direction="up" delay={index * 0.1} className="h-full">
              <div className="group relative h-full flex flex-col justify-between p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-[var(--accent-color)]">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--secondary-color)]">
                      STEP {index + 1}/5
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-color)] font-display group-hover:text-[var(--accent-color)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--secondary-color)]">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[var(--secondary-color)] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--border-color)] mt-6 space-y-1">
                  <span className="text-[10px] font-mono text-[var(--accent-color)] uppercase">Outputs:</span>
                  {item.deliverables.map((d, i) => (
                    <div key={i} className="text-[11px] font-mono text-[var(--text-color)]">
                      • {d}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
