import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    text: "This trip was absolutely life-changing! Exploring the ancient temples in Kyoto and walking through the bamboo forests felt like a dream. The guides were extremely knowledgeable and everything was perfectly coordinated. Highly recommend Explorer!",
    name: "Sophia Martinez",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 2,
    text: "I've travelled with many agencies, but none have matched the premium service of Explorer. The Swiss Alps tour had breathtaking views and perfect hotel stays. The hiking trails were challenging yet accessible. Can't wait for the next trip!",
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 3,
    text: "Amalfi Coast was stunning! Watching the sunset over the hillside villages while enjoying authentic Italian cuisine was magical. The itinerary was very balanced, giving us plenty of free time to wander along the colorful streets.",
    name: "Emma Watson",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 4,
    text: "The safari in Serengeti was outstanding. We saw the big five on our first day! Our driver was fantastic at spotting wildlife. The luxury tent setup under the African night sky was a beautiful experience. 10 out of 10!",
    name: "Marcus Vance",
    location: "Atlanta, GA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 4
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleAvatarClick = (idx) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Auto-play carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-5xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.span
          className="font-script text-3xl md:text-4xl text-brand-coral mb-2 block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Review & Testimonials
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-light tracking-widest uppercase text-charcoal mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Top Reviews for Explorer
        </motion.h2>
        <motion.p
          className="text-muted-gray max-w-xl mx-auto font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hear from our global explorers who embarked on lifetime adventures with our curated tours.
        </motion.p>
      </div>

      {/* Quote Card and Nav Buttons */}
      <div className="relative mb-12 flex items-center justify-between gap-4">
        {/* Left Nav */}
        <motion.button
          onClick={handlePrev}
          className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center text-charcoal hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer shrink-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Large Gradient Quote Card */}
        <div className="flex-1 w-full min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="w-full bg-gradient-to-r from-brand-coral to-brand-orange text-white p-8 md:p-12 rounded-[36px] shadow-2xl relative flex flex-col justify-between items-center text-center overflow-hidden"
              initial={{ opacity: 0, x: direction * 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Background watermark quote */}
              <Quote className="absolute top-6 left-6 w-24 h-24 text-white/10 transform rotate-180 select-none pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < activeTestimonial.rating
                        ? 'text-white fill-white'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl font-light italic leading-relaxed mb-6 max-w-2xl relative z-10">
                "{activeTestimonial.text}"
              </p>

              {/* Author name visible on card for mobile viewports */}
              <div className="md:hidden mt-2">
                <h4 className="font-bold text-lg">{activeTestimonial.name}</h4>
                <p className="text-white/70 text-xs">{activeTestimonial.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Nav */}
        <motion.button
          onClick={handleNext}
          className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center text-charcoal hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer shrink-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Avatar Row */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Avatars Container */}
        <div className="flex items-center justify-center gap-4 py-2">
          {testimonialsData.map((test, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={test.id} className="relative cursor-pointer">
                {/* Active Highlight Ring */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-brand-coral"
                    layoutId="highlight-ring"
                    initial={false}
                    animate={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                  />
                )}
                {/* Avatar Image */}
                <motion.img
                  onClick={() => handleAvatarClick(idx)}
                  src={test.avatar}
                  alt={test.name}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white relative z-10 transition-all duration-300 shadow-md ${
                    isActive ? 'scale-110 shadow-lg' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'
                  }`}
                  whileHover={{ scale: isActive ? 1.1 : 1.15 }}
                />
              </div>
            );
          })}
        </div>

        {/* Name and Location Label of Active Reviewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-bold text-charcoal">{activeTestimonial.name}</h4>
            <p className="text-muted-gray text-xs md:text-sm">{activeTestimonial.location}</p>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Nav buttons */}
        <div className="flex md:hidden gap-4 mt-2">
          <motion.button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-charcoal"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-charcoal"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
