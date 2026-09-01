import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import servicesData from '../../data/services.json';
import { Service } from '../../types';
import { MagneticButton } from '../common/MagneticButton';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('brand-strategy');
  const navigate = useNavigate();
  const services = servicesData as Service[];

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-ink-border gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 — CAPABILITIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-primary uppercase">
            WHAT WE <span className="text-stroke-strong">DO</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-ink-secondary leading-relaxed">
          From high-level category positioning to microsecond shader choreography, our disciplines are deeply integrated under one roof.
        </p>
      </div>

      {/* Interactive Service Rows */}
      <div className="divide-y divide-ink-border pt-4">
        {services.map((service) => {
          const isExpanded = expandedId === service.id;

          return (
            <div
              key={service.id}
              className={`group transition-all duration-300 ${
                isExpanded ? 'bg-warm-white/80 rounded-2xl shadow-glass-subtle my-3 border border-ink-border/80' : 'hover:bg-warm-white/40'
              }`}
            >
              {/* Row Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                className="py-6 sm:py-8 px-4 sm:px-6 flex items-center justify-between cursor-pointer select-none"
                data-cursor="LINK"
              >
                <div className="flex items-center gap-6 sm:gap-12">
                  <span className="font-mono text-sm sm:text-base text-accent-coral font-semibold">
                    {service.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden md:inline-block text-xs font-mono text-ink-muted uppercase">
                    {service.capabilities.length} CAPABILITIES
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border border-ink-border flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 bg-ink-primary text-warm-white' : 'group-hover:border-ink-primary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Expanded Content Drawer */}
              {isExpanded && (
                <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn border-t border-ink-border/40">
                  <div className="lg:col-span-6 space-y-6">
                    <p className="text-base text-ink-primary font-medium leading-relaxed">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block">
                        Deliverables & Outputs:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-xs font-mono px-3 py-1 rounded-full bg-paper border border-ink-border text-ink-secondary"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <MagneticButton
                        variant="primary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/services/${service.id}`);
                        }}
                      >
                        EXPLORE {service.title} ARCHITECTURE
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="lg:col-span-6 overflow-hidden rounded-xl border border-ink-border aspect-[16/10] bg-paper">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <MagneticButton
          variant="outline"
          size="lg"
          onClick={() => navigate('/services')}
        >
          VIEW COMPLETE METHODOLOGY & SCOPES
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </section>
  );
};
