import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 sm:py-28 md:py-32 bg-[#1A1918] text-white relative overflow-hidden">
      {/* Glow circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Client Voices"
          title="Endorsements from industry visionaries."
          subtitle="Discover how our partners describe the transformative impact of our strategic & creative collaboration."
          lightMode
        />

        {/* 2-Column Split Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-8">
          
          {/* Left Column: Full-Height Case Study Visual */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] border border-white/10 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.projectVisual || current.projectImage}
                alt={current.projectTitle || current.company}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#D96B43]">
                Case Study Highlight
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                {current.projectTitle || current.company}
              </h4>
            </div>
          </div>

          {/* Right Column: Dynamic Quote Slider */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-md flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#D96B43] opacity-80" />
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D96B43] text-[#D96B43]" />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg sm:text-2xl lg:text-3xl font-display font-medium leading-snug sm:leading-relaxed text-gray-100 italic"
                >
                  "{current.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author Details & Carousel Controls */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D96B43]"
                />
                <div>
                  <h4 className="text-base font-bold font-display text-white">{current.author}</h4>
                  <p className="text-xs text-gray-400">{current.role} • <span className="text-[#D96B43]">{current.company}</span></p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3 self-end sm:self-auto">
                <span className="text-xs text-gray-400 font-semibold mr-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#D96B43] hover:bg-[#D96B43] text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#D96B43] hover:bg-[#D96B43] text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Next testimonial"
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
};
