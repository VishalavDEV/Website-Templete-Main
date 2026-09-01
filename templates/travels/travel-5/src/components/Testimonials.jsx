import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      location: 'Portland, Oregon',
      avatarColor: 'bg-primary/20 text-primary',
      initials: 'SJ',
      rating: 5,
      quote: 'Scaling the Patagonia summits with Roam & Wild was the highlight of my decade. The guides were exceptionally skilled, and the gear was absolutely top-notch.',
      tour: 'Patagonia Summit Trek'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      location: 'Vancouver, Canada',
      avatarColor: 'bg-secondary/20 text-secondary',
      initials: 'MC',
      rating: 5,
      quote: "I'd never stood on a surfboard before Maui Tube. By day three, I was carving down standard waves thanks to their video feedback and local coaches. Incredible!",
      tour: 'Maui Tube Riding'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      location: 'Prague, Czech Republic',
      avatarColor: 'bg-accent-yellow/30 text-charcoal',
      initials: 'ER',
      rating: 5,
      quote: 'Pitching camp in the absolute dark-sky preserve was surreal. Seeing the Milky Way clearly while enjoying gourmet fireside meals was worth every penny.',
      tour: 'Milky Way Camping'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white overflow-hidden scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section title */}
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">
          Traveler Logs
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-charcoal mb-16">
          Loved by Explorers
        </h2>

        {/* Carousel Container */}
        <div className="relative bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-16 shadow-lg min-h-[350px] flex flex-col justify-between">
          
          {/* Quote Icon overlay */}
          <div className="absolute top-8 left-8 text-primary/10">
            <Quote className="w-16 h-16 fill-current" />
          </div>

          <div className="relative flex-grow flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6 w-full"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 text-accent-yellow">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-lg md:text-2xl font-light italic leading-relaxed max-w-2xl mx-auto">
                  "{current.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg shadow-inner ${current.avatarColor}`}>
                    {current.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-extrabold text-charcoal uppercase tracking-tight">
                      {current.name}
                    </h4>
                    <span className="text-xs text-gray-400 font-light block">
                      {current.location}
                    </span>
                    <span className="text-[10px] bg-primary/15 text-primary-dark font-semibold uppercase px-2 py-0.5 rounded-full inline-block mt-1">
                      {current.tour}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100/60">
            {/* Index Tracker */}
            <div className="flex gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-600 p-3 rounded-full transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-600 p-3 rounded-full transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
