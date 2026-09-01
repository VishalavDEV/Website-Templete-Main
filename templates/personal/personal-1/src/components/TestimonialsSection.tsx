import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquareQuote,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Quote,
  Sparkles,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
            <MessageSquareQuote size={14} />
            <span>08 / EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-3xl">
            Trusted by Leaders at <span className="text-amber-400">Scale</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl">
            Unfiltered feedback from VPs of Design, CTOs, and Founders building industry-defining tech products.
          </p>
        </div>

        {/* Featured Testimonial Carousel Deck */}
        <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-800 p-8 sm:p-12 shadow-2xl backdrop-blur-md overflow-hidden">
          
          <Quote
            size={120}
            className="absolute -top-6 -right-6 text-neutral-800/20 pointer-events-none select-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Avatar & Role */}
              <div className="lg:col-span-4 flex flex-col items-start gap-4">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl">
                  <img
                    src={activeItem.avatar}
                    alt={activeItem.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="font-display font-bold text-xl text-white">
                    {activeItem.name}
                  </div>
                  <div className="text-xs font-mono text-amber-400 font-medium">
                    {activeItem.role}
                  </div>
                  <div className="text-xs text-neutral-400 font-semibold mt-0.5">
                    {activeItem.company}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-neutral-400 ml-1.5">5.0 / 5.0</span>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 bg-neutral-950 px-3 py-1 rounded-lg border border-neutral-800">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>Verified Executive Engagement</span>
                </div>
              </div>

              {/* Right Column: Quote & Detailed Feedback */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <p className="font-display font-semibold text-lg sm:text-2xl text-white leading-relaxed mb-6 italic">
                    "{activeItem.quote}"
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {activeItem.detailedFeedback}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs font-mono text-amber-400">
                    Project: {activeItem.projectRelation}
                  </span>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id="testimonials-prev-btn"
                      onClick={prevTestimonial}
                      className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-xs font-mono text-neutral-400 px-2">
                      {currentIndex + 1} / {TESTIMONIALS.length}
                    </span>
                    <button
                      type="button"
                      id="testimonials-next-btn"
                      onClick={nextTestimonial}
                      className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
