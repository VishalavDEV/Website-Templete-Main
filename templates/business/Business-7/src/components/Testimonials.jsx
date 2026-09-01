import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials({ template }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const testimonials = template.testimonials;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        enter: { opacity: 0, x: 30 },
        center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, x: -30, transition: { duration: 0.3, ease: 'easeIn' } },
      };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white border-b border-brand-border/40 scroll-mt-10">
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="text-xs font-bold tracking-[0.25em] text-brand-accent mb-6 block uppercase">
          TESTIMONIALS
        </span>

        {/* Big Decorative Quote Icon */}
        <div className="flex justify-center mb-10 text-brand-accent/15">
          <Quote size={56} className="fill-current" />
        </div>

        {/* Carousel Content */}
        <div className="relative overflow-hidden min-h-[260px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center max-w-2xl px-4"
            >
              {/* Quote Text */}
              <blockquote className={`text-lg md:text-xl lg:text-2xl text-brand-text font-medium leading-relaxed italic mb-8 ${template.themeClass}`}>
                "{testimonials[index].quote}"
              </blockquote>

              {/* Client Info Block */}
              <div className="flex items-center space-x-3 text-left">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-10 h-10 rounded-full border border-brand-border/60 object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-[10px] text-brand-muted uppercase tracking-widest mt-0.5">
                    {testimonials[index].role} at <span className="text-brand-accent font-bold">{testimonials[index].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Toggle Arrows */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center space-x-6 mt-12">
            <button
              onClick={handlePrev}
              className="p-2 border border-brand-border rounded-full text-brand-muted hover:text-brand-accent hover:border-brand-accent hover:scale-105 transition-all duration-200 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-[10px] font-mono text-brand-muted select-none">
              {index + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 border border-brand-border rounded-full text-brand-muted hover:text-brand-accent hover:border-brand-accent hover:scale-105 transition-all duration-200 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
