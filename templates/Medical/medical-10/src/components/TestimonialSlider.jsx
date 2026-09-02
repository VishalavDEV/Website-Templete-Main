import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonialsData";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-cyan-500/20 max-w-4xl mx-auto overflow-hidden">
      <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-400 p-1 bg-slate-900 shadow-xl glow-cyan">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-slate-950 p-1.5 rounded-full shadow-lg">
              <Quote className="w-4 h-4" />
            </div>
          </div>

          {/* Review text */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-1 text-amber-400 mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <p className="text-slate-200 text-base md:text-lg italic leading-relaxed font-light">
              "{current.quote}"
            </p>

            <div className="mt-4">
              <h4 className="text-lg font-bold text-white">{current.name}</h4>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">
                {current.role} • {current.location}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex space-x-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? "w-8 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500 text-white transition-colors border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500 text-white transition-colors border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
