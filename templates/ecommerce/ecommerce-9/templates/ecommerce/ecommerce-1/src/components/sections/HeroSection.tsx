'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ShoppingBag, Check, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';

// Curated Hero Featured Products List for Instant Switcher
const HERO_PRODUCTS: Product[] = [
  PRODUCTS[0], // Rose Lip Oil
  PRODUCTS[1], // Vanilla Lip Balm
  PRODUCTS[3], // Overnight Lip Mask
  PRODUCTS[4], // Strawberry Lip Balm
];

export const HeroSection: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product>(HERO_PRODUCTS[0]);

  // Spring tilt physics for product container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rawRotateX = useTransform(mouseY, [-250, 250], [4, -4]);
  const rawRotateY = useTransform(mouseX, [-250, 250], [-4, 4]);

  const springConfig = { stiffness: 300, damping: 25, mass: 0.5 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-[#FFF9F5] via-[#FDF4F6] to-[#F7DDE2]/60 px-6 py-10 md:px-12 md:py-16 flex items-center"
    >
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-[#F7DDE2] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-[#B76E79]/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Soft Feminine Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          {/* Micro Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white/90 px-4 py-1.5 backdrop-blur-md w-fit shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#B76E79]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#7E6B6E]">
              Soft Glow Beauty • Clean & Biocompatible
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl font-extrabold tracking-tight text-[#2D2224] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]"
            >
              Radiate your <br />
              <span className="font-heading italic text-[#B76E79] font-normal">
                Soft Glow.
              </span>
            </motion.h1>
          </div>

          {/* Dynamic Active Product Tagline & Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2 max-w-xl"
            >
              <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase block">
                ✨ Featured: {selectedProduct.name} • {selectedProduct.tagline}
              </span>
              <p className="text-base text-[#7E6B6E] sm:text-lg leading-relaxed font-body">
                {selectedProduct.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Hero Product Pill Switcher */}
          <div className="space-y-3 pt-1">
            <span className="text-xs font-bold text-[#7E6B6E]/80 uppercase tracking-widest block">
              Select Soft Glow Formula:
            </span>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {HERO_PRODUCTS.map((prod) => {
                const isSelected = selectedProduct.id === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`magnetic-target flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#B76E79] text-white shadow-md ring-2 ring-[#F7DDE2]'
                        : 'bg-white/90 text-[#2D2224] border border-[#F3D0D7] hover:border-[#B76E79]'
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-white' : 'bg-[#B76E79]'}`} />
                    <span>{prod.name}</span>
                    {isSelected && <Check className="h-3 w-3 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons & Rating Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Rounded Pill CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => addToCart(selectedProduct)}
              className="magnetic-target flex items-center gap-3 rounded-full bg-[#B76E79] px-8 py-4 text-sm font-semibold tracking-wider text-white shadow-lg hover:bg-[#9E5661] transition-all duration-250"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add {selectedProduct.name} (₹{selectedProduct.price})</span>
            </motion.button>

            {/* Shop Link Button */}
            <Link href="/shop">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="magnetic-target flex items-center gap-2 rounded-full border border-[#F3D0D7] bg-white px-6 py-4 text-sm font-semibold tracking-wider text-[#2D2224] hover:border-[#B76E79] hover:text-[#B76E79] shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Explore Shop</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>

            {/* Customer Rating Pill */}
            <div className="flex items-center gap-2.5 rounded-full border border-[#F3D0D7] bg-white/90 px-4 py-2 backdrop-blur-md shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#2D2224]">
                {selectedProduct.rating}/5 <span className="text-[#7E6B6E] font-normal">({selectedProduct.reviewsCount.toLocaleString()}+ Reviews)</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Beauty Model + Product Floating Showcase */}
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Main Card Frame */}
          <div className="relative h-[480px] sm:h-[530px] w-full max-w-md overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-b from-white via-[#FFF9F5] to-[#F7DDE2]/50 shadow-2xl flex items-center justify-center p-6 group">
            {/* Model Background Image subtle preview */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src="/templates/ecommerce/ecommerce-1/images/hero-model.png"
                alt="Soft Glow Beauty Model"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Badge Banner */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
              <span className="rounded-full bg-[#B76E79] px-3.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-xs">
                {selectedProduct.badge || 'SOFT GLOW'}
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#9E5661] uppercase backdrop-blur-md border border-[#F3D0D7]">
                Skin-First Beauty
              </span>
            </div>

            {/* Floating Product Image with Soft Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full flex items-center justify-center py-8 z-10"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative h-[320px] sm:h-[350px] w-full"
                >
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_30px_rgba(183,110,121,0.25)] transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Product Info Card Overlay */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#F3D0D7] bg-white/95 p-4 backdrop-blur-md shadow-lg flex items-center justify-between z-20">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold tracking-widest text-[#B76E79] uppercase block">
                  {selectedProduct.category}
                </span>
                <p className="font-heading text-lg font-bold text-[#2D2224]">
                  {selectedProduct.name}
                </p>
                <p className="text-[11px] text-[#7E6B6E] font-medium">{selectedProduct.tagline}</p>
              </div>

              <div className="text-right">
                <span className="font-heading text-xl font-bold text-[#2D2224] block">
                  ₹{selectedProduct.price}.00
                </span>
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="text-[11px] font-bold text-[#B76E79] hover:underline"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
