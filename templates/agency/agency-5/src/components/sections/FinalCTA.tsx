import React from 'react';
import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--surface-color)] border-b border-[var(--border-color)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal direction="scale" className="w-full">
          <div className="relative rounded-3xl p-10 md:p-20 bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden space-y-8 text-center max-w-5xl mx-auto">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-center">
              <Badge variant="accent" size="md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Elevate Your Brand?</span>
              </Badge>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display leading-tight">
              LET'S BUILD <span className="text-[var(--accent-color)]">WHAT'S NEXT.</span>
            </h2>

            <p className="text-base sm:text-xl text-[var(--secondary-color)] max-w-2xl mx-auto font-light leading-relaxed">
              We are currently accepting new client partnerships for Q4 2026. Schedule a strategic consultation with our partners today.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg">
                Start A Project Now
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                Explore Case Studies
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
