import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/landingData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timeoutRef.current);
  }, [isPaused, currentIndex]);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Ambient background glows */}
      <div className="aurora-glow-1 bottom-10 right-1/4 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE VALIDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            Trusted by the World's Most <br />
            <span className="gradient-text-accent">Demanding AI & Spatial Pioneers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Read how global engineering leaders rely on AETHERIA NEXUS to eliminate latency and deploy mission-critical autonomous intelligence.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Active Testimonial Card */}
          <div className="relative min-h-[380px] sm:min-h-[320px] rounded-3xl glass-panel bg-[#0d121f]/95 border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Background watermark quote icon */}
            <Quote className="absolute right-6 bottom-6 w-36 h-36 text-white/[0.02] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Rating Stars & Metric Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {current.metrics}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed italic mb-8">
                    "{current.quote}"
                  </blockquote>
                </div>

                {/* Author Info & Verified Company Tag */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/40 shadow-md"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                        {current.name}
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {current.role}, <span className="text-purple-300">{current.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-2xl glass-panel-subtle text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-2xl glass-panel-subtle text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
