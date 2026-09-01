import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Adventure Enthusiast',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment: 'Booking our Kyoto tour with Wayfarer was the highlight of our year. Everything from the hotel accommodations to the custom tea ceremonies was organized flawlessly.',
    },
    {
      id: 2,
      name: 'Marcus Chang',
      role: 'Cultural Explorer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment: 'An incredible travel experience. The custom mountain trail itinerary in Peru was spectacular, and the local guides were incredibly friendly and helpful.',
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Luxury Traveler',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment: 'The yacht cruise along the Amalfi Coast was absolutely stunning. Excellent attention to detail and priority customer service at every port. Will definitely book again!',
    }
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative quote mark */}
      <Quote className="absolute left-10 top-10 w-48 h-48 text-slate-100/50 pointer-events-none -rotate-6" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            Testimonials
            <span className="w-8 h-[2px] bg-accent" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight leading-tight uppercase">
            What Our Travelers Say
          </h2>
        </div>

        {/* Slider Box */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="space-y-8"
            >
              {/* Star rating */}
              <div className="flex justify-center gap-1 text-amber-500">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-sans italic text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                "{reviews[index].comment}"
              </p>

              {/* User Profiling */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/25 p-0.5"
                />
                <div>
                  <h4 className="font-display font-extrabold text-base text-primary leading-none">
                    {reviews[index].name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 block">
                    {reviews[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center items-center gap-6 pt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-accent hover:border-accent transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? 'w-6 bg-accent' : 'w-2.5 bg-slate-200'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-accent hover:border-accent transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
