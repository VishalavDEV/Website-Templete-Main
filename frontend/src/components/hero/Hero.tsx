import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, MapPin, ArrowDown } from 'lucide-react';
import { HERO_SLIDES } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#0b0c10] pt-28 sm:pt-36 pb-8 sm:pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Carousel with Ken-Burns Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.07 }}
            exit={{ opacity: 0, scale: 1.11 }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeInOut' },
              scale: { duration: 9, ease: 'linear' },
            }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Editorial Multi-layer Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/60 to-[#0b0c10]/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10]/75 via-[#0b0c10]/35 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-15">
        <div className="max-w-7xl mx-auto h-full border-x border-white/20 flex justify-between">
          <div className="border-r border-white/20 h-full w-1/3" />
          <div className="border-r border-white/20 h-full w-1/3" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex-1 flex flex-col justify-end">
        <div className="max-w-5xl">
          {/* Category & Location Badges */}
          <motion.div
            key={`meta-${currentSlide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2.5 mb-3 text-xs font-mono tracking-wider"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1f2833]/90 backdrop-blur-md border border-[#66fcf1]/40 text-[#66fcf1] rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66fcf1] animate-ping" />
              {currentSlide.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#c5c6c7]/90 px-2 py-1 bg-[#0b0c10]/50 backdrop-blur-sm rounded-sm">
              <MapPin className="w-3.5 h-3.5 text-[#45a29e]" />
              {currentSlide.location}
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            key={`title-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-['Syne'] tracking-tight text-white leading-[1.02] mb-4 max-w-4xl"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Subtitle / Artist Statement */}
          <motion.p
            key={`desc-${currentSlide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-xs sm:text-sm md:text-base text-[#c5c6c7]/90 max-w-2xl mb-4 font-light leading-relaxed"
          >
            {currentSlide.subtitle}
          </motion.p>

          {/* Camera Info & EXIF Banner */}
          <motion.div
            key={`exif-${currentSlide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="inline-flex items-center gap-2 text-[11px] font-mono text-[#c5c6c7]/85 bg-[#0b0c10]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 mb-6"
          >
            <Camera className="w-3.5 h-3.5 text-[#66fcf1]" />
            <span>{currentSlide.cameraInfo}</span>
          </motion.div>
        </div>

        {/* Bottom Bar: Carousel Controls, Progress, & Scroll Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/10">
          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? 'w-10 bg-[#66fcf1] shadow-[0_0_10px_#66fcf1]'
                      : 'w-3 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 font-mono text-xs text-[#c5c6c7]/70 ml-2">
              <span className="text-[#66fcf1] font-bold">0{currentIndex + 1}</span>
              <span>/</span>
              <span>0{HERO_SLIDES.length}</span>
            </div>

            <div className="flex items-center gap-1 ml-3 border-l border-white/10 pl-3">
              <button
                onClick={prevSlide}
                className="p-1.5 text-[#c5c6c7] hover:text-[#66fcf1] hover:bg-white/10 rounded transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 text-[#c5c6c7] hover:text-[#66fcf1] hover:bg-white/10 rounded transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Scroll Indicator */}
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5c6c7]/70 hover:text-[#66fcf1] transition-colors"
          >
            <span>Explore Works</span>
            <div className="w-6 h-6 rounded-full border border-white/25 flex items-center justify-center group-hover:border-[#66fcf1] transition-colors">
              <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform text-[#66fcf1]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
