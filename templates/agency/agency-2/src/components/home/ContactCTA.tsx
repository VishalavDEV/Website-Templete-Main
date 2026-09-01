import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const ContactCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="glass-panel-strong p-8 sm:p-16 rounded-3xl border border-ink-border text-center space-y-8 bg-mesh-subtle">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold mx-auto">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INITIATE ENGAGEMENT</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-ink-primary leading-[0.95]">
            HAVE A PROJECT <br />
            <span className="text-accent-coral">IN MIND?</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Tell us what you&rsquo;re building. Submit our interactive project brief in under 2 minutes, and our leadership team will respond within 24 hours.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            variant="secondary"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            START A PROJECT BRIEF
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            variant="outline"
            size="lg"
            onClick={() => navigate('/services')}
          >
            VIEW OUR SERVICES
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
