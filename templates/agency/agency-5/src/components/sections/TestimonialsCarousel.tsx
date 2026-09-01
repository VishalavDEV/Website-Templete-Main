import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setCursorHover, resetCursor } = useCustomCursor();
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Autoplay timer that pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="py-24 bg-[var(--bg-color)] border-b border-[var(--border-color)] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <SectionHeading
          number="05"
          badge="CLIENT ENDORSEMENTS"
          title="TRUSTED BY FOUNDERS & CHIEF TECHNOLOGY OFFICERS."
          align="split"
          description="Read what executives at Hyperion, Veritas Capital, Kairo Horology, and Lumina BioTech say about our studio partnership."
        />

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Client Testimonials Carousel"
          className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 md:p-14 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        >
          {/* Top Row: Quote Icon + Rating */}
          <div className="flex items-center justify-between pb-8 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <Quote className="w-8 h-8 text-[var(--accent-color)]" />
              {current.metric && (
                <Badge variant="accent" size="sm">
                  {current.metric}
                </Badge>
              )}
            </div>

            <div className="flex gap-1 text-[var(--accent-color)]">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          {/* Animated Quote Body */}
          <div className="py-8 min-h-[180px] md:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-3xl font-extrabold text-[var(--text-color)] leading-snug font-display">
                  "{current.quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Author Info & Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-[var(--border-color)]">
            {/* Author Metadata */}
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[var(--accent-color)] shadow-md"
              />
              <div>
                <h4 className="text-lg font-bold text-[var(--text-color)] uppercase font-display">
                  {current.author}
                </h4>
                <p className="text-xs text-[var(--secondary-color)] font-mono">
                  {current.role} · <span className="text-[var(--text-color)]">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mr-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-8 bg-[var(--accent-color)]'
                        : 'w-2 bg-[var(--border-color)] hover:bg-[var(--secondary-color)]'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevSlide}
                onMouseEnter={() => setCursorHover()}
                onMouseLeave={resetCursor}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                onMouseEnter={() => setCursorHover()}
                onMouseLeave={resetCursor}
                aria-label="Next Testimonial"
                className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
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
