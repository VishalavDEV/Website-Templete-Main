import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const TESTIMONIALS = [
    {
      quote: "AURELIS helped me stop starting over. For the first time, movement became part of my life instead of something I had to force.",
      author: "Mira Ellison",
      role: "Momentum Member • Creative Director",
      duration: "12-Week Program Completed"
    },
    {
      quote: "I spent years jumping between extreme 6-day bodybuilder plans and complete burnouts. AURELIS taught me that 3 focused sessions and proper sleep beat chaotic intensity every time.",
      author: "Leon Vance",
      role: "Foundation Member • Systems Architect",
      duration: "8-Week Program Completed"
    },
    {
      quote: "The coaching isn't just workout routines. It's an entire philosophy on how to eat, sleep, and navigate heavy work travel without losing momentum.",
      author: "Elena Rostova",
      role: "Evolve Concierge Member • Founder",
      duration: "Ongoing Coaching — 1 Year"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-28 md:py-36 bg-[#F3F0E8] text-[#171816] relative overflow-hidden border-t border-[#D8D4C8]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Small Label */}
        <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-4">
          MEMBER REFLECTIONS
        </span>

        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mb-16">
          Change that <span className="editorial-italic font-normal text-[#3E5142]">fits real life.</span>
        </h2>

        {/* Cinematic Typographic Quote Carousel */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Quote className="w-12 h-12 text-[#B56F4D]/40 mx-auto" />

              <blockquote className="text-2xl sm:text-4xl md:text-4xl font-heading font-normal leading-snug text-[#171816] max-w-3xl mx-auto">
                "{TESTIMONIALS[currentIndex].quote}"
              </blockquote>

              <div className="space-y-1">
                <p className="text-lg font-bold font-heading text-[#171816]">
                  {TESTIMONIALS[currentIndex].author}
                </p>
                <p className="text-xs font-mono text-[#B56F4D] uppercase tracking-wider">
                  {TESTIMONIALS[currentIndex].role} — {TESTIMONIALS[currentIndex].duration}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots & Buttons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-[#171816]/20 hover:bg-[#171816] hover:text-[#F3F0E8] transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#B56F4D]' : 'w-2 bg-[#D8D4C8]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-[#171816]/20 hover:bg-[#171816] hover:text-[#F3F0E8] transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
