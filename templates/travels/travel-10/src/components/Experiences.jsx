import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Alpine Climber',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    content: 'Scaling the Swiss Alps with TerraBound was a life-altering experience. The route planning and support were absolutely flawless.',
    stars: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Landscape Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    content: 'Every corner of the Kyoto temple tour was beautifully timed for the best lighting. Truly curated by people who love travel.',
    stars: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Solo Explorer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    content: 'Traveling solo can be daunting, but the community and guidance provided by TerraBound made me feel safe and excited every single day.',
    stars: 5,
  },
];

export default function Experiences() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="experiences" className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12 border-b border-gray-100 bg-white">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center space-x-2 justify-center mb-3">
          <span className="w-6 h-[1.5px] bg-accent-gold" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent-gold uppercase">
            Traveler Experiences
          </span>
          <span className="w-6 h-[1.5px] bg-accent-gold" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-navy font-serif">
          What our explorers say
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="flex flex-col p-8 bg-gray-50 border border-gray-100 rounded-2xl relative"
          >
            {/* Quote Icon Overlay */}
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-navy/5 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
              ))}
            </div>

            {/* Content */}
            <p className="text-sm leading-relaxed text-muted-gray italic font-light mb-6 flex-grow">
              "{review.content}"
            </p>

            {/* Avatar & User Details */}
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-200/50">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-primary-navy">{review.name}</span>
                <span className="text-[10px] text-muted-gray font-medium">{review.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
