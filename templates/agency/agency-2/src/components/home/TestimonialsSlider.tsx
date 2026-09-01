import React, { useState } from 'react';
import { Sparkles, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import testimonialsData from '../../data/testimonials.json';
import { Testimonial } from '../../types';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = testimonialsData as Testimonial[];
  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="flex items-center justify-between pb-8 border-b border-ink-border">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 — TESTIMONIALS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-accent-coral">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-ink-border glass-panel hover:bg-warm-white flex items-center justify-center text-ink-primary hover:border-accent-coral transition-colors"
                aria-label="Previous testimonial"
                data-cursor="LINK"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-ink-border glass-panel hover:bg-warm-white flex items-center justify-center text-ink-primary hover:border-accent-coral transition-colors"
                aria-label="Next testimonial"
                data-cursor="LINK"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Huge Editorial Quote Block */}
        <div className="glass-panel p-8 sm:p-16 rounded-3xl border border-ink-border relative animate-fadeIn">
          <Quote className="w-12 h-12 text-accent-coral/20 absolute top-8 right-8 sm:top-12 sm:right-12" />

          <blockquote className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-primary leading-tight max-w-4xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="mt-10 pt-8 border-t border-ink-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {current.image && (
                <img
                  src={current.image}
                  alt={current.client}
                  className="w-12 h-12 rounded-full object-cover border border-accent-coral/50"
                />
              )}
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-ink-primary">
                  {current.client}
                </h4>
                <p className="text-xs font-mono text-ink-secondary">
                  {current.role} — <span className="text-ink-primary font-semibold">{current.company}</span>
                </p>
              </div>
            </div>

            <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-semibold self-start sm:self-auto">
              Project: {current.project}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
