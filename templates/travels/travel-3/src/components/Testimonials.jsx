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
      comment: 'Booking with Roamify was the best decision of our year. Our trip to the Swiss Alps was organized flawlessly—from hotels to our incredible local guide. Truly an unforgettable adventure!',
    },
    {
      id: 2,
      name: 'Marcus Chang',
      role: 'Cultural Traveler',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment: 'The Kyoto temple tour exceeded all expectations. We got to experience local tea ceremonies and secret spots that regular tour groups missed. Excellent 24/7 client support too.',
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Luxury Vacationer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment: 'The Amalfi Coast yacht cruise was absolutely breathtaking. Every detail was curated with care and premium taste. I highly recommend their custom luxury packages to anyone!',
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
      {/* Decorative quotes background watermark */}
      <Quote className="absolute right-12 top-12 w-64 h-64 text-slate-100/50 -rotate-12 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="font-sans font-bold text-xs tracking-widest text-primary uppercase">
            Testimonials
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-800 tracking-tight leading-tight">
            What Our Travelers Say
          </h2>
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[340px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="space-y-8"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 text-amber-500">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-amber-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
                "{reviews[index].comment}"
              </p>

              {/* Reviewer Details */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 p-0.5"
                />
                <div>
                  <h4 className="font-sans font-extrabold text-base text-slate-800 leading-none">
                    {reviews[index].name}
                  </h4>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1 block">
                    {reviews[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 pt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? 'w-6 bg-primary' : 'w-2.5 bg-slate-200'
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
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
