import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-8 md:p-14 shadow-2xl backdrop-blur-md"
    >
      <Quote className="h-12 w-12 text-blue-600/30 dark:text-blue-400/30 mb-6" />

      <div className="min-h-[160px] md:min-h-[140px] flex flex-col justify-between">
        <blockquote className="font-serif text-xl md:text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-relaxed italic">
          "{current.quote}"
        </blockquote>

        <div className="mt-8 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-6">
          <div className="flex items-center space-x-4">
            <img
              src={current.avatar}
              alt={current.client}
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
            />
            <div>
              <div className="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {current.client}
              </div>
              <div className="font-mono text-xs text-neutral-500">
                {current.role} // <span className="text-blue-600 dark:text-blue-400 font-bold">{current.company}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-blue-500 transition-colors"
              title="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-mono text-xs text-neutral-400">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-blue-500 transition-colors"
              title="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
