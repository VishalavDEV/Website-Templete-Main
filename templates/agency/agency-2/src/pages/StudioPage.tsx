import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Award, Globe, Heart, ShieldCheck } from 'lucide-react';
import { TeamSection } from '../components/home/TeamSection';
import { ClientWall } from '../components/home/ClientWall';
import { MagneticButton } from '../components/common/MagneticButton';

export const StudioPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-24">
      {/* Studio Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT VALENCE STUDIO</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
          ROOTED IN CRAFT. <br />
          <span className="text-stroke-strong">DRIVEN BY CULTURE.</span>
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl text-ink-secondary leading-relaxed">
          Founded in Zurich with satellite studios in Tokyo and London, Valence is an independent creative studio operating at the intersection of brand architecture, tactile design systems, and creative technology.
        </p>
      </div>

      {/* Main Studio Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 overflow-hidden rounded-3xl border border-ink-border aspect-[16/10]">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
            alt="Valence Studio Interior"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="md:col-span-4 overflow-hidden rounded-3xl border border-ink-border aspect-[4/5] bg-paper">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
            alt="Design Material Studies"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Philosophy & Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase text-accent-coral font-bold block">
            OUR CORE CODE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
            PRINCIPLES WE OPERATE BY
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed">
            We don&rsquo;t believe in endless bureaucracy or generic agency formulas. We protect creative focus and foster deep partnerships.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              num: '01',
              title: 'NO INTERMEDIARIES',
              desc: 'You work directly with lead directors and engineers who personally craft every deliverable.',
            },
            {
              num: '02',
              title: 'TACTILE OVER TRENDS',
              desc: 'We look to architectural permanence and physical materials rather than fleeting social media fads.',
            },
            {
              num: '03',
              title: '60FPS PERFORMANCE',
              desc: 'Elegance without speed is incomplete. Every interaction is engineered for instant fluidity.',
            },
            {
              num: '04',
              title: 'LIMITED CAPACITY',
              desc: 'We limit our studio to 3 concurrent client partnerships per quarter to guarantee obsession.',
            },
          ].map((val) => (
            <div key={val.num} className="glass-panel p-6 rounded-2xl border border-ink-border space-y-2">
              <span className="text-xs font-mono text-accent-coral font-bold">{val.num}</span>
              <h4 className="font-display font-bold text-lg uppercase text-ink-primary">{val.title}</h4>
              <p className="text-xs text-ink-secondary leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-ink-border space-y-8">
        <div className="flex items-center justify-between border-b border-ink-border pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Award className="w-4 h-4" />
            <span>INDUSTRY HONORS</span>
          </div>
          <span className="text-xs font-mono text-ink-muted">2024–2026</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <span className="text-2xl font-display font-bold text-ink-primary block">14×</span>
            <span className="text-ink-secondary">Awwwards Site of the Day / Month</span>
          </div>
          <div>
            <span className="text-2xl font-display font-bold text-ink-primary block">8×</span>
            <span className="text-ink-secondary">FWA of the Day</span>
          </div>
          <div>
            <span className="text-2xl font-display font-bold text-ink-primary block">4×</span>
            <span className="text-ink-secondary">Red Dot Best of the Best</span>
          </div>
          <div>
            <span className="text-2xl font-display font-bold text-ink-primary block">2×</span>
            <span className="text-ink-secondary">D&AD Yellow Pencil</span>
          </div>
        </div>
      </div>

      {/* Leadership & Team Section */}
      <TeamSection />

      {/* Client Roster */}
      <ClientWall />

      {/* Bottom CTA */}
      <div className="glass-panel-strong p-8 sm:p-14 rounded-3xl border border-ink-border text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
          JOIN OUR ROSTER OF PARTNERS
        </h3>
        <p className="text-sm text-ink-secondary max-w-md mx-auto">
          We are currently scheduling strategic partnerships for Q3/Q4.
        </p>
        <MagneticButton variant="secondary" size="lg" onClick={() => navigate('/contact')}>
          START A PROJECT BRIEF
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </div>
  );
};
