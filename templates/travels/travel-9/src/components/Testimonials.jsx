import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'John Miller',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      quote: 'The Paris landmark tours were completely breathtaking. Our guides knew all the historical details, and the hotel was situated right near the Eiffel Tower.'
    },
    {
      id: 2,
      name: 'Linda Ross',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      quote: 'The simplest booking process I have ever experienced. Exploria arranged everything from our flight transfers to restaurant reservations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      location: 'Madrid, Spain',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      quote: 'Our Cairo pyramids trek was coordinated perfectly. Having a private driver during our tour made us feel incredibly safe and comfortable.',
      rating: 5
    }
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="font-sans font-black text-xs tracking-wider text-[#2563EB] uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#2563EB]" />
            Guest Reviews
            <span className="w-8 h-[2px] bg-[#2563EB]" />
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-[#0F172A] tracking-tight uppercase leading-tight">
            Loved By Travelers
          </h2>
        </div>

        {/* Carousel Block */}
        <div className="relative bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-3xl min-h-[220px] flex items-center justify-center select-none shadow-sm">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 max-w-2xl"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                "{reviews[index].quote}"
              </p>

              {/* Avatar detail */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2563EB] shadow-sm"
                />
                <div className="text-left leading-tight">
                  <span className="block font-sans font-black text-sm text-[#0F172A]">{reviews[index].name}</span>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{reviews[index].location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-100 hover:bg-slate-50 text-[#0F172A] flex items-center justify-center shadow-md cursor-pointer transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-100 hover:bg-slate-50 text-[#0F172A] flex items-center justify-center shadow-md cursor-pointer transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
