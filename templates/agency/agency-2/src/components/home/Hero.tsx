import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MagneticButton } from '../common/MagneticButton';
import { HeroServiceList } from './HeroServiceList';
import { FloatingStatusCard } from './FloatingStatusCard';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollToWork = () => {
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/work');
    }
  };

  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-12 max-w-7xl mx-auto z-10 select-none">
      {/* Top Row: Left Label + Right Strategic Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-ink-primary border border-ink-border">
            <span className="w-2 h-2 rounded-full bg-accent-coral animate-ping" />
            <Sparkles className="w-3 h-3 text-accent-coral" />
            <span>INDEPENDENT CREATIVE STUDIO</span>
          </div>

          <div className="hidden lg:block pt-6">
            <HeroServiceList />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col lg:items-end justify-start text-left lg:text-right space-y-4">
          <p className="max-w-md text-sm sm:text-base text-ink-secondary leading-relaxed font-normal">
            Strategy, identity, digital experiences and motion for brands ready to move differently. We craft enduring visual worlds rooted in editorial rigor.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-ink-muted">
            <span>BERLIN / ZURICH / TOKYO</span>
            <span>•</span>
            <span className="text-accent-coral font-semibold">AVAILABLE Q3/Q4</span>
          </div>
        </div>
      </div>

      {/* Center/Bottom Headline & Interactive Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12 sm:pt-20">
        {/* Giant Display Headline */}
        <div className="lg:col-span-8 space-y-6">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-bold tracking-tighter text-ink-primary uppercase leading-[0.92]">
            WE TURN <br />
            <span className="text-stroke-strong hover:text-ink-primary transition-colors duration-500">
              GOOD IDEAS
            </span> <br />
            INTO <span className="text-accent-coral">CULTURE.</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={handleScrollToWork}
            >
              VIEW OUR WORK
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              variant="glass"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4 text-accent-coral" />
            </MagneticButton>
          </div>
        </div>

        {/* Floating Hero Status Card (Bottom-Right on Desktop) */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end">
          <FloatingStatusCard />
        </div>
      </div>

      {/* Mobile Service List Fallback */}
      <div className="block lg:hidden pt-8 border-t border-ink-border/50 mt-6">
        <HeroServiceList />
      </div>
    </section>
  );
};
