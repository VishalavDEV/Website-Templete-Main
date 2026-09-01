import React from 'react';
import { services } from '../data/services';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Reveal } from '../components/ui/Reveal';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

export const Services: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Services Overview' }]} />

        <Reveal direction="up">
          <div className="space-y-6">
            <Badge variant="accent">CAPABILITIES & METHODOLOGY</Badge>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
              FIVE CORE DISCIPLINES FOR MARKET DOMINANCE.
            </h1>
            <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
              From initial strategy deconstruction to sub-second WebGL frontend engineering and ongoing conversion optimization.
            </p>
          </div>
        </Reveal>

        {/* Detailed Service Cards Grid */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <Reveal key={service.slug} direction="up" delay={idx * 0.08}>
              <div className="p-8 md:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-[var(--accent-color)]">{service.number}</span>
                    <Badge variant="surface">CAPABILITY 0{idx + 1}</Badge>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[var(--text-color)] font-display">
                    {service.title}
                  </h2>

                  <p className="text-base text-[var(--secondary-color)] leading-relaxed font-light">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-color)] block">Key Deliverables:</span>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)]">
                          • {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button href={`/services/${service.slug}`} variant="primary" size="md">
                      Explore Capability Spec →
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-[var(--border-color)]">
                  <ImageWithFallback
                    src={service.hoverImage}
                    alt={service.title}
                    fallbackTitle={service.title}
                    fallbackCategory="CAPABILITY"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProcessTimeline />
      <TestimonialsCarousel />
      <FinalCTA />
    </div>
  );
};
