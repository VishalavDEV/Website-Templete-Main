import React from 'react';
import { Hero3D } from '../components/Hero3D';
import { ClientMarquee } from '../components/ClientMarquee';
import { ProjectGrid } from '../components/ProjectGrid';
import { DesignWall } from '../components/DesignWall';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-36 pb-20">
      {/* 1. Hero 3D Section */}
      <Hero3D />

      {/* 2. Client Logo Ticker */}
      <ClientMarquee />

      {/* 3. Selected Work Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              CURATED SHOWCASE // 2026
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
              SELECTED WORK
            </h2>
          </div>

          <Link
            to="/work"
            className="group flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>View All 6 Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ProjectGrid projects={projectsData} showFilter={true} limit={4} />
      </section>

      {/* 4. Interactive Before / After Design Slider */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 md:p-12 shadow-xl space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold flex items-center space-x-2">
              <Layers className="h-4 w-4" />
              <span>THE CRAFT OF TRANSFORMATION</span>
            </span>
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              FROM WIREFRAME TO FLUID UI
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
              Slide back and forth to inspect how low-fidelity structural blueprints evolve into production-ready visual design.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 5. The Design Wall (Interactive Workspace) */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <DesignWall />
      </section>

      {/* 6. Agency 6-Step Process Timeline */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <ProcessTimeline />
      </section>

      {/* 7. Client Testimonials */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            CLIENT RECOGNITION
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            WHAT PARTNERS SAY
          </h2>
        </div>
        <TestimonialSlider />
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900 via-indigo-950 to-neutral-950 p-8 md:p-16 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-blue-300 font-bold">
              <Zap className="h-4 w-4" />
              <span>READY TO SHIFT?</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              LET'S MAKE SOMETHING WORTH REMEMBERING.
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed">
              Have an ambitious digital product, 3D web experience, or brand identity project? Let's collaborate.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 rounded-full bg-white text-neutral-900 hover:bg-blue-400 hover:text-white px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-xl"
                data-cursor="START"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
