import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const StudioSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Large Studio Monograph Image */}
        <div className="lg:col-span-6 space-y-6">
          <div className="overflow-hidden rounded-3xl border border-ink-border aspect-[4/5] relative group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Valence Studio Interior"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-panel-strong p-4 rounded-xl text-xs font-mono flex items-center justify-between">
              <span className="text-ink-primary font-semibold">ZURICH ARCHIVE LAB</span>
              <span className="text-accent-coral">EST. 2024</span>
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy & Strategic Manifesto */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>06 — THE STUDIO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
              SMALL TEAM. <br />
              <span className="text-accent-coral">BIG AMBITION.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-ink-primary leading-relaxed font-normal">
            We are an independent collective of directors, strategists, and creative engineers. We purposely limit our active engagements to three partners per quarter to ensure intense partner-level dedication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-ink-border text-xs">
            <div className="space-y-2">
              <h4 className="font-mono font-bold uppercase tracking-wider text-ink-primary">
                01 / INTENTIONAL CRAFT
              </h4>
              <p className="text-ink-secondary leading-relaxed">
                No junior handoffs or opaque account managers. You collaborate directly with master practitioners.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono font-bold uppercase tracking-wider text-ink-primary">
                02 / TECHNICAL RIGOR
              </h4>
              <p className="text-ink-secondary leading-relaxed">
                Design and engineering operate in tandem from day one, eliminating the friction of translation.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <MagneticButton
              variant="primary"
              size="md"
              onClick={() => navigate('/studio')}
            >
              LEARN MORE ABOUT OUR CULTURE
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
