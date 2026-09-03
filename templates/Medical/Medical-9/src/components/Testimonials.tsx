import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
              Patient Voices & Outcomes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
              Real stories of <br />
              <span className="italic font-normal text-[#C97873]">calm, practical care.</span>
            </h2>
          </div>

          {/* Controls Prev/Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-white border border-[#E5DDD8] text-[#542F3B] hover:bg-[#542F3B] hover:text-white hover:border-[#542F3B] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#C97873]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-white border border-[#E5DDD8] text-[#542F3B] hover:bg-[#542F3B] hover:text-white hover:border-[#542F3B] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#C97873]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Active Slide Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E5DDD8] shadow-sm relative overflow-hidden transition-all duration-300">
          
          <Quote className="absolute top-6 right-8 w-20 h-20 text-[#FAF0EE] -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            
            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C97873] text-[#C97873]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#542F3B] leading-snug">
              "{current.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#F2ECE9]">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C97873] shrink-0">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-sans font-bold text-base text-[#542F3B]">{current.author}</h3>
                <p className="text-xs text-[#C97873] font-bold">{current.role}</p>
                <p className="text-[11px] text-[#70696C] font-normal">{current.careDuration}</p>
              </div>
            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#C97873]' : 'w-2 bg-[#E5DDD8]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
