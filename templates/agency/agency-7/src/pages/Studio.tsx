import React from 'react';
import { teamMembers } from '../data/team';
import { TeamCard } from '../components/TeamCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { Compass, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Studio: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 space-y-24">
      {/* 1. Studio Introduction & Hero Manifesto */}
      <section className="space-y-8 border-b border-neutral-200 dark:border-neutral-800 pb-16">
        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Compass className="h-3.5 w-3.5" />
          <span>STUDIO MANIFESTO // 2026</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          WE ARE STRATA AGENCY. <br />
          <span className="text-blue-600 dark:text-blue-400 italic">FORM FOLLOWS FUNCTION & DEPTH.</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
          We operate at the intersection of architectural precision, digital interaction design, and 3D web technologies. We believe true craftsmanship is achieved when every visual element serves a mathematical and psychological purpose.
        </p>
      </section>

      {/* 2. Philosophy Columns */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md space-y-4">
          <div className="font-mono text-xs uppercase text-blue-600 dark:text-blue-400 font-bold">
            01 // RESTRAINT OVER NOISE
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Editorial Precision
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Eliminating unnecessary visual clutter. We prioritize generous negative space, strict typographic scales, and high-contrast ergonomics.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md space-y-4">
          <div className="font-mono text-xs uppercase text-blue-600 dark:text-blue-400 font-bold">
            02 // SPATIAL CANVAS
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            3D WebGL Craft
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Dissolving flat browser screens into interactive 3D spatial viewports, giving digital products the physical weight and depth of architecture.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md space-y-4">
          <div className="font-mono text-xs uppercase text-blue-600 dark:text-blue-400 font-bold">
            03 // TOKENIZED SCALABILITY
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Design Tokens
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Bridging Figma and React frontend codebases with robust token architectures that scale effortlessly across multi-brand enterprise systems.
          </p>
        </div>
      </section>

      {/* 3. 6-Step Process Timeline */}
      <ProcessTimeline />

      {/* 4. Leadership & Team Section */}
      <section id="team" className="space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            LEADERSHIP
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            OUR CREATIVE TEAM
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-light">
            Architects, product strategists, and creative engineers obsessed with visual craft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 5. Studio Recognition & Awards */}
      <section className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white p-8 md:p-14 space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>ACCOLADES // 2022–2026</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              AWARDS & RECOGNITION
            </h2>
          </div>

          <Link
            to="/about"
            className="font-mono text-xs text-blue-400 font-bold uppercase hover:underline"
          >
            View Complete Awards Table →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="text-blue-400 font-bold text-lg">AWWWARDS</div>
            <div className="text-white mt-1">Site of the Day (3x)</div>
            <div className="text-neutral-500 text-[10px]">Aether, Mono House, Orbit</div>
          </div>
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="text-blue-400 font-bold text-lg">WEBBY AWARDS</div>
            <div className="text-white mt-1">Best Visual Design Winner</div>
            <div className="text-neutral-500 text-[10px]">Archive 01 Museum</div>
          </div>
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="text-blue-400 font-bold text-lg">RED DOT</div>
            <div className="text-white mt-1">Best of the Best Interface</div>
            <div className="text-neutral-500 text-[10px]">Flux Mobility EV HMI</div>
          </div>
        </div>
      </section>
    </div>
  );
};
