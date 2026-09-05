import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function Testimonials() {
  const { setCursorState } = useCursor();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      position: 'VP of Product',
      company: 'Nova Pay',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      quote:
        'LOOP AGENCY transformed our entire digital ecosystem. The level of motion design, micro-interaction detail, and performance optimization surpassed all our expectations.',
    },
    {
      name: 'Marcus Vance',
      position: 'Founder & CEO',
      company: 'Orbit Studios',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      quote:
        'Working with LOOP AGENCY felt like a true partnership. Their creative direction and web development skills helped us raise our Series B funding within months of launch.',
    },
    {
      name: 'Elena Rostova',
      position: 'Head of Marketing',
      company: 'Velora Fashion',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      quote:
        'Our e-commerce conversion rate increased by 64% following LOOP AGENCY’s redesign. Their team delivers high-end aesthetics backed by conversion engineering.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#05070f] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          badge="WHAT CLIENTS SAY"
          title="TESTIMONIALS & REVIEWS"
          center={true}
        />

        <div className="relative glass-panel rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-14 overflow-hidden">
          <Quote className="absolute top-4 sm:top-6 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 text-white/5 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4 sm:space-y-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl md:text-3xl font-syne font-medium leading-relaxed text-slate-200 max-w-3xl italic">
                "{current.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] shrink-0"
                />
                <div className="text-left">
                  <h4 className="text-base sm:text-lg font-syne font-bold text-white">
                    {current.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-mono text-cyan-400">
                    {current.position} — <span className="text-slate-400">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5">
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 sm:w-8 bg-cyan-400' : 'w-1.5 sm:w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={handlePrev}
                onMouseEnter={() => setCursorState('button')}
                onMouseLeave={() => setCursorState('default')}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => setCursorState('button')}
                onMouseLeave={() => setCursorState('default')}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black text-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
