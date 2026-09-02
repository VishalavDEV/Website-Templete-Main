import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F4EFE6] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Quote className="w-3.5 h-3.5 text-forest-700" />
            <span>Grower Testimonials & Field Validation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight mb-4"
          >
            Trusted By Generational Growers & <br />
            <span className="text-forest-700 italic">Agribusiness Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-earth-700"
          >
            Read firsthand accounts from commercial row-crop growers, vineyard directors, and organic cooperatives.
          </motion.p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-forest-100 overflow-hidden">
            
            {/* Background Decorative Quote Icon */}
            <div className="absolute top-6 right-8 text-forest-50 pointer-events-none">
              <Quote className="w-32 h-32 stroke-[1]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Rating stars & metric */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-1 text-wheat-500">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-wheat-500" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    {current.metric}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-2xl font-serif text-forest-950 leading-relaxed mb-8 italic">
                  "{current.quote}"
                </blockquote>

                {/* Author Info and Farm details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-forest-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-forest-200 shadow-md"
                    />
                    <div>
                      <h4 className="text-base font-bold text-forest-950 font-display">
                        {current.author}
                      </h4>
                      <p className="text-xs text-forest-700 font-semibold">{current.role}</p>
                      <div className="flex items-center gap-2 text-xs text-earth-600 mt-0.5">
                        <span className="font-medium text-forest-900">{current.farmName}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          {current.location}
                        </span>
                        <span>•</span>
                        <span>{current.acres}</span>
                      </div>
                    </div>
                  </div>

                  {/* Slider Prev / Next Controls */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={prevTestimonial}
                      className="w-11 h-11 rounded-full border border-forest-200 hover:border-forest-700 bg-white hover:bg-forest-50 text-forest-800 flex items-center justify-center transition-all shadow-sm"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-11 h-11 rounded-full bg-forest-800 hover:bg-forest-900 text-white flex items-center justify-center transition-all shadow-md"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-forest-800'
                      : 'w-2 bg-forest-200 hover:bg-forest-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
