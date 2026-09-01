'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, CheckCircle2, Heart, Sparkles, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Sophia Laurent',
    handle: '@sophiaglow',
    location: 'Paris, France',
    rating: 5,
    productName: 'Rose Lip Oil',
    image: '/templates/ecommerce/ecommerce-1/images/polaroid-studio.png',
    review: 'The Rose Lip Oil is genuinely my absolute holy grail now. It leaves the most insane glass-like sheen without feeling sticky at all. 10/10 cushion softness!',
    verified: true,
  },
  {
    id: 2,
    name: 'Elena Rostova',
    handle: '@elena_glows',
    location: 'Milan, Italy',
    rating: 5,
    productName: 'Overnight Lip Mask',
    image: '/templates/ecommerce/ecommerce-1/images/benefits-product.png',
    review: 'I apply the Overnight Lip Mask every single evening before bed and wake up with completely plump, flake-free lips. Soft Glow changed my lip care game.',
    verified: true,
  },
  {
    id: 3,
    name: 'Chloe Bennett',
    handle: '@chloebeauty',
    location: 'London, UK',
    rating: 5,
    productName: 'Vanilla Lip Balm',
    image: '/templates/ecommerce/ecommerce-1/images/silk-texture.png',
    review: 'Subtle, luxurious vanilla aroma and pure barrier moisture. Works amazingly under lipstick or on its own for everyday glow.',
    verified: true,
  },
  {
    id: 4,
    name: 'Mia Takahashi',
    handle: '@miaglows',
    location: 'Tokyo, Japan',
    rating: 5,
    productName: 'Cherry Tinted Lip Balm',
    image: '/templates/ecommerce/ecommerce-1/images/weekly-highlight-product.png',
    review: 'The buildable berry wash is so flattering! Perfect Pinterest aesthetic packaging and incredible natural hydration.',
    verified: true,
  },
];

const GLOW_STATS = [
  { metric: '98%', label: 'Felt immediate cushion lip hydration' },
  { metric: '96%', label: 'Reported smoother lip texture in 3 days' },
  { metric: '99%', label: 'Loved the non-sticky high-shine oil finish' },
  { metric: '4.95 ★', label: 'Average rating across 15,000+ reviews' },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="w-full bg-[#FDF4F6]/60 px-6 py-14 md:px-12 md:py-20 border-b border-[#F3D0D7]/60">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white px-4 py-1.5 text-xs font-bold uppercase text-[#B76E79] shadow-xs">
            <Heart className="h-3.5 w-3.5 fill-[#B76E79]" />
            <span>Community Love</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2D2224]">
            Customer Reviews & Glow Results
          </h2>

          <p className="text-[#7E6B6E] text-sm sm:text-base font-body">
            Real beauty lovers sharing their Soft Glow lip transformation stories.
          </p>
        </div>

        {/* Glow Stats Counter Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GLOW_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-[#F3D0D7] bg-white p-5 text-center space-y-1 shadow-xs hover:border-[#B76E79] transition-colors"
            >
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#B76E79] block">
                {stat.metric}
              </span>
              <span className="text-xs text-[#7E6B6E] font-medium block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Pinterest/Instagram Style Review Cards Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-[#F3D0D7] bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="space-y-4">
                {/* Photo frame */}
                <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#FFF9F5] border border-[#F3D0D7]/50">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#B76E79] backdrop-blur-md border border-[#F3D0D7]">
                    {review.productName}
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex text-amber-400 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-xs text-[#2D2224] leading-relaxed italic font-body">
                  "{review.review}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F3D0D7]/60 mt-4">
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#2D2224]">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-[#7E6B6E] font-medium block">
                    {review.handle} • {review.location}
                  </span>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#9E5661] bg-[#F7DDE2] px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
