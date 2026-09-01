import React from 'react';
import { Sparkles } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative z-10 py-28 sm:py-40 px-6 sm:px-12 bg-ink-primary text-warm-white my-12 overflow-hidden select-none">
      {/* Background kinetic grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFDF9 1px, transparent 1px), linear-gradient(to bottom, #FFFDF9 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUR MANIFESTO</span>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95] max-w-5xl">
            WE DON&rsquo;T FOLLOW <br />
            <span className="text-stroke text-warm-white/40 hover:text-warm-white transition-colors duration-500">
              THE NEXT THING.
            </span> <br />
            WE MAKE <span className="text-accent-coral">THE NEXT THING.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-warm-white/20 text-warm-white/70">
          <div className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-accent-lavender">
            // PHILOSOPHY 01
          </div>
          <div className="md:col-span-8 space-y-4 text-base sm:text-lg leading-relaxed text-warm-white/90">
            <p>
              In a world flooded with automated templates and homogenized algorithms, true distinction requires craft, restraint, and an uncompromising dedication to visual tactility.
            </p>
            <p className="text-sm text-warm-white/60">
              We design brand systems and digital architectures that refuse to blend into the background. Every transition is felt, every typographic choice is deliberate, and every interaction leaves an indelible mark.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
