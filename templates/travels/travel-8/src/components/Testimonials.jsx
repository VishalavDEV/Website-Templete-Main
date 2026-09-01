import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Monaco Cruise Traveler',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      comment: 'An absolutely flawless ocean excursion. The privacy on the deck lounge and custom itinerary designed by Aether exceeded all luxury standards.'
    },
    {
      id: 2,
      name: 'Marcus Chang',
      role: 'Amalfi Coast Charterer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      comment: 'Bespoke, refined, and completely secure. Having our personal guide lead us to private coves was a memory that our family will treasure forever.'
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Patagonia Explorer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      comment: 'The yacht interior, chef menus, and harbor transfers were perfect. Standard of excellence in every detail.'
    }
  ];

  return (
    <section className="py-32 bg-[#0A0E14] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-slate-400">
            - Guest Journal -
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white uppercase tracking-wider">
            Refined Testimonials
          </h2>
        </div>

        {/* Quote Block with Soft Gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent p-12 border border-white/5 min-h-[180px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-serif italic text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed max-w-2xl mx-auto"
            >
              "{reviews[index].comment}"
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Avatar Row */}
        <div className="flex justify-center items-center gap-6 pt-4 select-none">
          {reviews.map((rev, i) => (
            <motion.button
              key={rev.id}
              whileHover={{ scale: 1.15 }}
              onClick={() => setIndex(i)}
              className="relative focus:outline-none cursor-pointer"
              aria-label={`Show testimonial of ${rev.name}`}
            >
              <img
                src={rev.avatar}
                alt={rev.name}
                className={`w-12 h-12 rounded-full object-cover p-0.5 border-2 transition-all duration-300 ${
                  index === i ? 'border-white scale-110' : 'border-transparent opacity-40 hover:opacity-75'
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Reviewer Details */}
        <div className="pt-2">
          <span className="block font-sans text-[10px] font-bold tracking-[0.25em] text-white uppercase leading-none">
            {reviews[index].name}
          </span>
          <span className="block text-[8px] text-slate-500 uppercase tracking-widest mt-1.5 font-sans font-medium">
            {reviews[index].role}
          </span>
        </div>

      </div>
    </section>
  );
}
