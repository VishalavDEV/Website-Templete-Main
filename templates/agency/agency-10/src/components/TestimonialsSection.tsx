import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIdx];

  return (
    <section id="testimonials-section" className="py-20 bg-slate-50/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 font-display">
            Direct Feedback from Enterprise Leadership.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            What chief technology officers, engineering directors, and product vice presidents say about partnering with Axiom.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-100/80 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed italic">
                &ldquo;{current.testimonial}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-2">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{current.name}</p>
                  <p className="text-xs text-slate-500">
                    {current.role} &bull; <span className="font-semibold text-slate-700">{current.company}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Project Delivered & Metric Badges */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Engagement Scope:
                </p>
                <p className="text-xs font-bold text-slate-900 mt-0.5">
                  {current.projectType}
                </p>
              </div>

              {current.metricHighlight && (
                <div className="pt-3 border-t border-slate-200/60">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Verified Outcome:
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900 font-display">
                      {current.metricHighlight}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Production telemetry benchmark
                  </p>
                </div>
              )}

              {/* Carousel Controls */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {activeIdx + 1} / {TESTIMONIALS_DATA.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 cursor-pointer shadow-2xs"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 cursor-pointer shadow-2xs"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Testimonial Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-white border-blue-500 shadow-sm'
                  : 'bg-white/60 border-slate-200 hover:bg-white'
              }`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 line-clamp-3 italic">
                &ldquo;{item.testimonial}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">{item.name}</p>
                  <p className="text-[10px] text-slate-500">{item.company}</p>
                </div>
                {item.metricHighlight && (
                  <span className="text-[11px] font-bold text-emerald-600 font-mono">
                    {item.metricHighlight.split(' ')[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
