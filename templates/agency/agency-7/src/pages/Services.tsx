import React from 'react';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 space-y-20">
      {/* 1. Services Header */}
      <section className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
          CAPABILITIES & PRACTICES
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          DESIGN & CREATIVE SERVICES
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
          From deep UX research and design token architecture to immersive 3D WebGL experiences and high-density product interfaces.
        </p>
      </section>

      {/* 2. Services Accordion List */}
      <section className="space-y-6">
        <ServicesAccordion />
      </section>

      {/* 3. Technology Stack & Deliverables Grid */}
      <section className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 md:p-14 shadow-xl space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            TECHNICAL ECOSYSTEM
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            TOOLS & FRAMEWORKS WE MASTERY
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs">
          {[
            { name: 'Figma', cat: 'Design Systems' },
            { name: 'React 19', cat: 'Frontend Engine' },
            { name: 'Three.js', cat: '3D WebGL' },
            { name: 'Tailwind CSS', cat: 'Token Styling' },
            { name: 'Motion', cat: 'Kinetic Motion' },
            { name: 'TypeScript', cat: 'Type Safety' },
          ].map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-center space-y-1"
            >
              <div className="font-bold text-neutral-900 dark:text-neutral-100">{item.name}</div>
              <div className="text-[10px] text-neutral-400">{item.cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="rounded-3xl bg-neutral-950 text-white p-8 md:p-14 space-y-6 shadow-2xl">
        <div className="max-w-xl space-y-4">
          <span className="font-mono text-xs uppercase text-blue-400 font-bold flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>CUSTOM ENGAGEMENTS</span>
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            NEEDS A CUSTOM TAILORED PROPOSAL?
          </h2>
          <p className="text-sm text-neutral-400 font-light">
            We collaborate with founding teams and enterprise product directors on fixed-scope sprints or dedicated quarterly retainers.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold transition-colors shadow-lg"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
