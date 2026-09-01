'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, Star, Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

export const BestOfWeek: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProduct = PRODUCTS[0]; // Rose Lip Oil

  return (
    <section className="w-full bg-[#FFF9F5] px-6 py-12 md:py-16 md:px-12 border-b border-[#F3D0D7]/60">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#B76E79]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#7E6B6E]">
            WEEKLY HIGHLIGHT
          </span>
        </div>

        {/* Split Feature Container */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#F3D0D7] bg-white shadow-xl lg:grid-cols-12">
          {/* Left Column: Product Details & Quick Action */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-12 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#F7DDE2] px-3.5 py-1 text-xs font-bold text-[#9E5661]">
                  #1 EDITORS CHOICE
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span>4.95 / 5.0 Rating</span>
                </div>
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2D2224]">
                Rose Lip Oil
              </h2>

              <p className="text-[#7E6B6E] text-sm sm:text-base leading-relaxed font-body">
                Our viral nourishing lip oil infused with Bulgarian damask rose extract and cold-pressed jojoba lipids. Restores dry lips while leaving a dewy, non-sticky rose sheen.
              </p>

              {/* Flavor Profile Notes */}
              <div className="rounded-2xl bg-[#FFF9F5] p-4 border border-[#F3D0D7] space-y-1">
                <span className="text-xs font-bold tracking-wider text-[#B76E79] uppercase">
                  Botanical Aroma Profile
                </span>
                <p className="font-heading text-lg font-bold text-[#2D2224]">
                  🌹 Fresh Bulgarian Damask Rose Petals
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 text-xs font-semibold text-[#2D2224]">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#B76E79]" />
                  <span>Visible volume boost with plush cushion softness</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#B76E79]" />
                  <span>Locks in 24-hour hydration barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#B76E79]" />
                  <span>Non-tacky glassy mirror shine finish</span>
                </li>
              </ul>
            </div>

            {/* Pricing & Add to Bag CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F3D0D7]/60 pt-6">
              <div>
                <span className="text-xs text-[#7E6B6E] font-medium block">Standard Size (10ml)</span>
                <span className="font-heading text-3xl font-bold text-[#2D2224]">₹599.00</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(featuredProduct)}
                className="magnetic-target flex items-center gap-3 rounded-full bg-[#B76E79] px-8 py-4 text-sm font-semibold tracking-wider text-white shadow-lg hover:bg-[#9E5661] transition-all duration-300"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Photography */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full w-full overflow-hidden bg-gradient-to-br from-[#FFF9F5] to-[#F7DDE2]/40 flex items-center justify-center p-8">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative h-80 sm:h-96 w-full"
            >
              <Image
                src="/templates/ecommerce/ecommerce-1/images/weekly-highlight-product.png"
                alt="Rose Lip Oil Product Photography"
                fill
                className="object-contain drop-shadow-xl transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <div className="absolute bottom-6 right-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#2D2224] backdrop-blur-md border border-[#F3D0D7] shadow-xs">
              Rose Lip Oil • Pure Rose Lipids
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
