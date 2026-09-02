import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Building2 } from 'lucide-react';
import { testimonials, clientLogos } from '../data/testimonials';
import { audioService } from '../utils/audio';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    audioService.playClick();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    audioService.playClick();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 relative bg-[#0A0B0F] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Continuous Client Ecosystem Marquee */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-[#A6ACB8] uppercase tracking-widest font-bold">
              Trusted by category leaders worldwide
            </span>
          </div>

          <div
            className="relative overflow-hidden w-full py-4 border-y border-white/5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0B0F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0B0F] to-transparent z-10 pointer-events-none" />

            {/* Marquee Row */}
            <div className="flex gap-12 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
              {[...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/30 transition-all"
                >
                  <Building2 className="w-4 h-4 text-violet-400 opacity-60" />
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold tracking-wider text-gray-300">
                      {client.name}
                    </span>
                    <span className="text-[9px] font-mono text-gray-500">{client.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Section */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 font-bold">
              <Quote className="w-3.5 h-3.5" />
              <span>Partner Endorsements</span>
            </div>
          </div>

          <div className="p-8 sm:p-14 rounded-2xl bg-[#151821]/70 backdrop-blur-xl border border-white/10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center space-y-8"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F4F5F7] leading-relaxed font-serif max-w-2xl">
                  "{current.quote}"
                </p>

                {current.metric && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    <span>Verified Result: {current.metric}</span>
                  </div>
                )}

                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-violet-500/40 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="text-base font-bold text-white">{current.author}</h4>
                    <p className="text-xs text-gray-400 font-mono">{current.role}</p>
                    <p className="text-xs text-violet-400 font-mono">{current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/8">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      audioService.playClick();
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'w-8 bg-violet-500' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  id="testimonial-prev-btn"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-violet-600 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="testimonial-next-btn"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-violet-600 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
