import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import servicesData from '../data/services.json';
import { Service } from '../types';
import { MagneticButton } from '../components/common/MagneticButton';
import { FaqAccordion } from '../components/home/FaqAccordion';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const services = servicesData as Service[];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CAPABILITIES & METHODOLOGY</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
          SERVICES & <br />
          <span className="text-stroke-strong">PRACTICES</span>
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-ink-secondary leading-relaxed">
          We bring high-level strategy, bespoke visual identity, and creative engineering together under a single, unified studio rhythm.
        </p>
      </div>

      {/* Services Breakdown Cards */}
      <div className="space-y-16">
        {services.map((service, idx) => (
          <div
            key={service.id}
            className="glass-panel p-8 sm:p-14 rounded-3xl border border-ink-border space-y-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-ink-border pb-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-accent-coral font-bold">
                  {service.number} / 06 — CORE DISCIPLINE
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
                  {service.title}
                </h2>
              </div>

              <MagneticButton
                variant="outline"
                size="sm"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                VIEW DISCIPLINE DETAILS
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-lg font-medium text-ink-primary leading-relaxed">
                  {service.tagline}
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
                    Core Capabilities & Outputs:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs font-mono text-ink-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-coral shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-ink-border aspect-[16/11]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <FaqAccordion />

      {/* Bottom CTA */}
      <div className="glass-panel-strong p-8 sm:p-14 rounded-3xl border border-ink-border text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary">
          DISCUSS YOUR PROJECT REQUIREMENTS
        </h3>
        <p className="text-sm text-ink-secondary max-w-md mx-auto">
          Need a combined brand identity and digital platform sprint? Let&rsquo;s tailor a scope of engagement.
        </p>
        <MagneticButton variant="secondary" size="lg" onClick={() => navigate('/contact')}>
          START A PROJECT BRIEF
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </div>
  );
};
