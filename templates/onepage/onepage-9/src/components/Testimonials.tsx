import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { ChevronLeft, ChevronRight, Quote, Star, Award, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#FAF9F6] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">06 /</span>
              <span>EXECUTIVE VOICE &amp; REVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              WHAT C-SUITE LEADERS REPORT
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Direct feedback and performance benchmarks from Chief Technology Officers and VP Engineering partners.
          </p>
        </div>

        {/* Testimonial Editorial Panel */}
        <div className="mt-12 bg-white border border-slate-300 p-8 sm:p-12 relative shadow-xl space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 font-mono text-xs">
            <div className="inline-flex items-center space-x-2 text-emerald-700 font-bold bg-emerald-100 px-3 py-1 border border-emerald-300">
              <TrendingUp className="w-4 h-4" />
              <span>VERIFIED PERFORMANCE: {active.performanceMetric}</span>
            </div>

            <div className="text-slate-500 font-bold">
              REVIEW {currentIndex + 1} OF {TESTIMONIALS.length}
            </div>
          </div>

          <blockquote className="text-2xl sm:text-3xl font-serif text-slate-950 leading-relaxed font-normal">
            "{active.quote}"
          </blockquote>

          {/* Author Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-200">
            <div className="flex items-center space-x-4">
              <img
                src={active.avatar}
                alt={active.name}
                className="w-14 h-14 object-cover border-2 border-slate-900 shadow-sm shrink-0"
              />
              <div>
                <h4 className="text-base font-bold text-slate-950 font-sans uppercase">{active.name}</h4>
                <p className="text-xs font-mono font-bold text-emerald-700">{active.title}</p>
                <p className="text-xs font-mono text-slate-500">{active.company}</p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center space-x-2 font-mono text-xs">
              <button
                onClick={prevSlide}
                className="p-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors border border-slate-900"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors border border-slate-900"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
