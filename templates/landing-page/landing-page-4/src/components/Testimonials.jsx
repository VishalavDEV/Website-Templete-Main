import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 relative bg-[#070709] border-t border-white/[0.06] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Customer Proof & Reviews
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Loved by Modern Teams{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Worldwide.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            See how engineering leaders and product teams ship higher-quality releases with Flowzen.
          </p>
        </div>

        {/* Testimonial Active Card Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -25, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-8 md:p-12 rounded-3xl bg-[#0d0d12]/90 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/90 relative"
            >
              {/* Top Row: Stars + Quote Icon + Highlight Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F5A900" stroke="#F5A900" />
                  ))}
                  <span className="text-xs font-mono font-bold text-zinc-300 ml-2">5.0 Verified</span>
                </div>

                <div className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  {current.highlight}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-lg md:text-2xl text-zinc-100 font-medium leading-relaxed mb-10 tracking-tight">
                "{current.quote}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/40 shadow-lg shadow-amber-500/20"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-400">
                      {current.role} • <span className="text-amber-400 font-medium">{current.company}</span>
                    </p>
                  </div>
                </div>

                {/* Desktop Prev / Next Controls */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:bg-amber-500 hover:text-black hover:border-amber-400 transition-all text-white"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white/[0.04] border border-white/10 hover:bg-amber-500 hover:text-black hover:border-amber-400 transition-all text-white"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dots Pagination & Mobile Buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="sm:hidden p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-8 bg-amber-400' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="sm:hidden p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
