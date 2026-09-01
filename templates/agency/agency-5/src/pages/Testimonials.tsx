import React from 'react';
import { testimonials } from '../data/testimonials';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Client Reviews' }]} />

        <div className="space-y-6">
          <Badge variant="accent">CLIENT ENDORSEMENTS</Badge>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
            PROVEN IMPACT ACROSS GLOBAL INDUSTRY LEADERS.
          </h1>
          <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
            Read how our technical precision and graphic restraint delivered measurable business growth for our partners.
          </p>
        </div>

        {/* Carousel Section */}
        <TestimonialsCarousel />

        {/* All Reviews Grid */}
        <div className="space-y-8 pt-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--text-color)] font-display">
            All Verified Partner Endorsements ({testimonials.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-6 h-6 text-[var(--accent-color)]" />
                    <div className="flex text-[var(--accent-color)]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-base text-[var(--text-color)] leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-color)] uppercase font-display">{t.author}</h4>
                      <p className="text-xs text-[var(--secondary-color)] font-mono">{t.role} · {t.company}</p>
                    </div>
                  </div>

                  {t.metric && (
                    <Badge variant="accent" size="sm">
                      {t.metric}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
