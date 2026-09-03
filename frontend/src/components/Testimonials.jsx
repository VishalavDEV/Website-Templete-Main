import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sophia & Liam Montgomery",
    event: "Lake Como Destination Wedding",
    text: "Elena did not just capture our wedding; she immortalized the pure atmosphere and joy of the weekend. Every single photo looks like a scene straight out of a high-fashion cinema reel.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Marcus Vance",
    event: "Outdoor Gear & Apparel Lookbook",
    text: "The speed, creative vision, and remote mountain endurance of the PhotoM4 crew were extraordinary. Our marketing campaign engagement went up by 180% following the campaign launch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Aria Lindqvist",
    event: "Editorial Fashion Portrait Session",
    text: "I was nervous about being in front of the camera, but Elena’s direction was effortless, warm, and empowering. The 48-hour sneak peek exceeded every expectation I had.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const review = REVIEWS[currentIdx];

  return (
    <section id="reviews" className="relative w-full py-24 sm:py-32 bg-[#111111] text-white overflow-hidden scroll-mt-16 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#e74c3c] uppercase">
              CLIENT TESTIMONIALS
            </span>
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Words From The Heart
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl bg-[#171717] border border-white/10 p-8 sm:p-14 shadow-2xl">
          <Quote className="w-16 h-16 text-[#e74c3c]/15 absolute top-6 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#e74c3c]"
                />
                <div>
                  <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {review.name}
                  </h4>
                  <div className="text-xs text-[#e74c3c] font-medium">
                    {review.event}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIdx ? 'w-8 bg-[#e74c3c]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#e74c3c] text-white transition-colors border border-white/10"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#e74c3c] text-white transition-colors border border-white/10"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
