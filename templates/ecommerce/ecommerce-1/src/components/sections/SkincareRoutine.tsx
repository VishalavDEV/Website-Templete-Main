'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, CheckCircle2, ShoppingBag, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ROUTINE_STEPS = [
  {
    step: 'Step 01',
    title: 'Exfoliate & Prep',
    subtitle: 'Buff away dryness',
    product: PRODUCTS.find((p) => p.id === 'chocolate-lip-scrub') || PRODUCTS[6],
    benefit: 'Organic cane sugar gently polishes rough texture while cocoa butter restores moisture.',
  },
  {
    step: 'Step 02',
    title: 'Hydrate & Cushion',
    subtitle: 'Instant peptide lock',
    product: PRODUCTS.find((p) => p.id === 'vanilla-lip-balm') || PRODUCTS[1],
    benefit: 'Conditioning raw cocoa butter & peptide matrix soak deep to soothe and repair.',
  },
  {
    step: 'Step 03',
    title: 'Rose Petal Glow',
    subtitle: 'High-shine lipid finish',
    product: PRODUCTS.find((p) => p.id === 'rose-lip-oil') || PRODUCTS[0],
    benefit: 'Damask rose oil & plant squalane give a mirror-glass glossy sheen without stickiness.',
  },
  {
    step: 'Step 04',
    title: 'Overnight Recovery',
    subtitle: 'Tri-ceramide sleep mask',
    product: PRODUCTS.find((p) => p.id === 'overnight-lip-mask') || PRODUCTS[3],
    benefit: 'Velvety sleep cocoon repairs the delicate skin barrier while you sleep.',
  },
];

export const SkincareRoutine: React.FC = () => {
  const { addToCart } = useCart();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = ROUTINE_STEPS[activeStepIndex];

  // Total routine bundle price
  const bundleTotalPrice = ROUTINE_STEPS.reduce((sum, item) => sum + item.product.price, 0);
  const bundleDiscountPrice = Math.round(bundleTotalPrice * 0.85); // 15% discount for complete bundle

  const handleAddBundle = () => {
    ROUTINE_STEPS.forEach((item) => {
      addToCart(item.product);
    });
  };

  return (
    <section id="routine" className="w-full bg-[#FFF9F5] px-6 py-14 md:px-12 md:py-20 border-b border-[#F3D0D7]/60">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white px-4 py-1.5 text-xs font-bold uppercase text-[#B76E79] shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Soft Glow Method</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2D2224]">
            4-Step Lip Skincare Routine
          </h2>

          <p className="text-[#7E6B6E] text-sm sm:text-base font-body">
            A skin-first ritual engineered to restore lip moisture barrier, cushion volume, and natural radiance.
          </p>
        </div>

        {/* Routine Steps Tabs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ROUTINE_STEPS.map((stepItem, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={stepItem.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative flex flex-col text-left p-4 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'border-[#B76E79] bg-white shadow-md ring-2 ring-[#F7DDE2]'
                    : 'border-[#F3D0D7] bg-[#FDF4F6]/60 hover:bg-white'
                }`}
              >
                <span className="text-[10px] font-bold tracking-wider text-[#B76E79] uppercase">
                  {stepItem.step}
                </span>
                <span className="font-heading text-lg font-bold text-[#2D2224] mt-0.5">
                  {stepItem.title}
                </span>
                <span className="text-xs text-[#7E6B6E] mt-1 line-clamp-1">
                  {stepItem.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-[#F3D0D7] bg-white p-6 sm:p-10 shadow-lg">
          {/* Left: Product Photo with Gentle Animation */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-80 sm:h-96 rounded-2xl bg-[#FFF9F5] p-6 border border-[#F3D0D7]/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full flex items-center justify-center"
              >
                <Image
                  src={activeStep.product.image}
                  alt={activeStep.product.name}
                  fill
                  className="object-contain p-2 drop-shadow-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Step Explanation & Single Action */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#B76E79] px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider">
                  {activeStep.step}
                </span>
                <span className="text-xs font-bold text-[#7E6B6E] uppercase tracking-widest">
                  {activeStep.product.category}
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#2D2224]">
                {activeStep.product.name}
              </h3>

              <p className="text-[#7E6B6E] text-base leading-relaxed">
                {activeStep.benefit}
              </p>

              {/* Ingredients list */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D2224] block">
                  Key Active Ingredients:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStep.product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#F7DDE2] px-3 py-1 text-xs font-medium text-[#9E5661]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Single Item CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F3D0D7]/60 pt-6">
              <div>
                <span className="text-xs text-[#7E6B6E] block font-medium">Single Step Price</span>
                <span className="font-heading text-3xl font-bold text-[#2D2224]">
                  ₹{activeStep.product.price}.00
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(activeStep.product)}
                className="flex items-center gap-2 rounded-full bg-[#B76E79] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#9E5661] transition-all"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add Step {activeStepIndex + 1} to Cart</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Complete Routine Bundle Offer Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#F7DDE2] via-[#FDF4F6] to-[#FFF9F5] border border-[#F3D0D7] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#9E5661] text-xs font-bold uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>Complete 4-Step Routine Bundle (Save 15%)</span>
            </div>
            <h4 className="font-heading text-2xl sm:text-3xl font-bold text-[#2D2224]">
              Get the Full Soft Glow Routine
            </h4>
            <p className="text-xs sm:text-sm text-[#7E6B6E]">
              Includes Lip Scrub + Vanilla Balm + Rose Lip Oil + Overnight Sleep Mask
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-[#7E6B6E] line-through block">₹{bundleTotalPrice}.00</span>
              <span className="font-heading text-3xl font-bold text-[#9E5661]">
                ₹{bundleDiscountPrice}.00
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddBundle}
              className="flex items-center gap-2 rounded-full bg-[#2D2224] px-7 py-4 text-xs font-bold text-white shadow-lg hover:bg-[#B76E79] transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add Full Routine Bundle</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
