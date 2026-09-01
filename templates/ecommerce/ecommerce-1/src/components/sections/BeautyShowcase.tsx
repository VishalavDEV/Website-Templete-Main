'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Star } from 'lucide-react';

const FLOATING_ITEMS = [
  {
    id: 'vanilla-balm',
    name: 'Vanilla Lip Balm',
    image: '/templates/ecommerce/ecommerce-1/images/vanilla-balm.png',
    position: 'top-1/2 -left-6 sm:left-4 -translate-y-1/2',
    rotate: -22,
    delay: '0s',
    size: 'h-40 w-28 sm:h-48 sm:w-36',
  },
  {
    id: 'rose-oil',
    name: 'Rose Lip Oil',
    image: '/templates/ecommerce/ecommerce-1/images/lip-oil.png',
    position: 'top-1/2 -right-6 sm:right-4 -translate-y-1/2',
    rotate: 22,
    delay: '1.5s',
    size: 'h-40 w-28 sm:h-48 sm:w-36',
  },
  {
    id: 'cherry-tint',
    name: 'Cherry Tinted Lip Balm',
    image: '/templates/ecommerce/ecommerce-1/images/cherry-tint.png',
    position: '-top-6 left-12 sm:left-28',
    rotate: -12,
    delay: '0.8s',
    size: 'h-32 w-24 sm:h-36 sm:w-28',
  },
  {
    id: 'overnight-mask',
    name: 'Overnight Lip Mask',
    image: '/templates/ecommerce/ecommerce-1/images/overnight-mask.png',
    position: '-top-6 right-12 sm:right-28',
    rotate: 14,
    delay: '2.4s',
    size: 'h-32 w-24 sm:h-36 sm:w-28',
  },
  {
    id: 'strawberry-balm',
    name: 'Strawberry Lip Balm',
    image: '/templates/ecommerce/ecommerce-1/images/strawberry-balm.png',
    position: '-bottom-10 left-16 sm:left-36',
    rotate: 10,
    delay: '3.2s',
    size: 'h-32 w-24 sm:h-36 sm:w-28',
  },
  {
    id: 'honey-balm',
    name: 'Honey Lip Balm',
    image: '/templates/ecommerce/ecommerce-1/images/honey-balm.png',
    position: '-bottom-10 right-16 sm:right-36',
    rotate: -12,
    delay: '1.8s',
    size: 'h-32 w-24 sm:h-36 sm:w-28',
  },
];

export const BeautyShowcase: React.FC = () => {
  return (
    <section id="story" className="relative w-full overflow-hidden bg-[#FAF8F5] px-6 py-10 md:px-12 md:py-14 scroll-mt-16">
      {/* Background Subtle Gradient Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#D98A7F]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl text-center space-y-10 relative">
        {/* Decorative Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white/90 px-4 py-1.5 shadow-xs backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#D98A7F]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-600">
            Skin-First Lip Philosophy
          </span>
        </motion.div>

        {/* Headline Stage surrounded by 6 Floating Product Cards */}
        <div className="relative min-h-[320px] sm:min-h-[380px] flex items-center justify-center py-12">
          {/* Render 6 Floating Product Images surrounding the text */}
          {FLOATING_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`absolute ${item.position} z-0 hidden lg:block`}
            >
              <div
                className={`relative ${item.size} animate-float group cursor-pointer`}
                style={{ animationDelay: item.delay }}
              >
                <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-xs border border-white/60 shadow-lg group-hover:scale-110 transition-transform duration-500" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2 drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}

          {/* Centered Headline Content */}
          <div className="max-w-2xl px-4 space-y-4 z-10 relative bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 leading-tight"
            >
              Let your natural{' '}
              <span className="font-accent text-5xl sm:text-6xl md:text-7xl text-[#D98A7F] font-normal">
                beauty
              </span>{' '}
              shine.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-600 text-sm sm:text-base leading-relaxed font-body"
            >
              Formulated for skin-first minimalist routines. We blend restorative peptides with raw plant lipids to create multi-use glosses that cushion lips while protecting your natural moisture barrier.
            </motion.p>

            <div className="pt-2 flex items-center justify-center gap-6 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5 text-[#D98A7F] fill-current" /> 100% Cruelty-Free
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-current" /> Dermatologist Approved
              </span>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Gallery Row (shows all 6 floating products neatly on smaller screens) */}
        <div className="lg:hidden flex items-center justify-center gap-4 overflow-x-auto pb-4 no-scrollbar pt-4">
          {FLOATING_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative h-28 w-24 flex-shrink-0 rounded-2xl bg-white p-2 border border-stone-200 shadow-sm flex items-center justify-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-1 drop-shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Fine-line elegant divider */}
        <div className="relative mx-auto flex items-center justify-center w-full max-w-xs pt-4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          <div className="absolute h-1.5 w-1.5 rounded-full bg-[#D98A7F]" />
        </div>
      </div>
    </section>
  );
};
