'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FEATURE_TOOLTIPS } from '@/data/products';
import { FeatureTooltip } from '@/types';
import { Sparkles, Info, ShieldCheck, Droplets, HeartPulse, CheckCircle2 } from 'lucide-react';

export const FeatureBreakdown: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<FeatureTooltip>(FEATURE_TOOLTIPS[0]);

  return (
    <section id="ingredients" className="relative w-full overflow-hidden bg-[#141210] px-6 py-12 md:py-16 text-white md:px-12 scroll-mt-16">
      {/* Textured Silk Fluid Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <Image
          src="/templates/ecommerce/ecommerce-1/images/silk-texture.png"
          alt="Silk Cream Fluid Texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Subtle Ambient Radial Glow Behind Canvas */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D98A7F]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D98A7F]/30 bg-[#D98A7F]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#D98A7F] uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Biocompatible Formula
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Soft Beauty, Made To Be Felt
          </h2>
          <p className="text-stone-300 font-body text-sm sm:text-base leading-relaxed">
            Clean plant lipids, biocompatible actives, and restorative peptides for long-lasting cushion softness.
          </p>
        </div>

        {/* Ingredient Navigation Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {FEATURE_TOOLTIPS.map((tooltip) => {
            const isSelected = activeTooltip.id === tooltip.id;
            return (
              <button
                key={tooltip.id}
                onClick={() => setActiveTooltip(tooltip)}
                className={`magnetic-target flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#D98A7F] text-stone-950 shadow-lg shadow-[#D98A7F]/25 scale-105'
                    : 'border border-stone-800 bg-stone-900/80 text-stone-300 hover:border-stone-700 hover:bg-stone-800'
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    isSelected ? 'bg-stone-950' : 'bg-[#D98A7F]'
                  }`}
                />
                <span>{tooltip.title}</span>
              </button>
            );
          })}
        </div>

        {/* Center Stage Studio Framed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Active Highlight Info & Formula Stats */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTooltip.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-stone-800/90 bg-stone-900/90 p-8 backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden"
              >
                {/* Gold Highlight Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D98A7F] via-[#FAF0CA] to-[#C69C6D]" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#D98A7F]">
                    <Info className="h-4 w-4" />
                    <span className="text-xs font-bold tracking-widest uppercase">
                      ACTIVE FORMULA INGREDIENT
                    </span>
                  </div>
                  <span className="rounded-full bg-stone-800 border border-stone-700 px-3 py-1 text-[10px] font-bold text-stone-400 uppercase">
                    Key Active
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-3xl font-bold text-white leading-tight">
                    {activeTooltip.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#D98A7F] mt-1">
                    {activeTooltip.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed font-body">
                  {activeTooltip.description}
                </p>

                {/* Efficacy Guarantee Badges */}
                <div className="space-y-2.5 pt-4 border-t border-stone-800">
                  <div className="flex items-center gap-3 text-xs text-stone-300">
                    <CheckCircle2 className="h-4 w-4 text-[#D98A7F]" />
                    <span>Dermatologist Tested & Hypoallergenic</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-300">
                    <Droplets className="h-4 w-4 text-[#D98A7F]" />
                    <span>24-Hour Continuous Hydration Barrier</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-300">
                    <ShieldCheck className="h-4 w-4 text-[#D98A7F]" />
                    <span>100% Vegan & Cruelty-Free Lipids</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Micro Feature Grid Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-800/80 bg-stone-900/60 p-4 text-center backdrop-blur-md">
                <span className="font-heading text-3xl font-bold text-[#D98A7F]">100%</span>
                <p className="text-[11px] text-stone-400 font-medium mt-0.5">Biocompatible Actives</p>
              </div>
              <div className="rounded-2xl border border-stone-800/80 bg-stone-900/60 p-4 text-center backdrop-blur-md">
                <span className="font-heading text-3xl font-bold text-[#FAF0CA]">24HR</span>
                <p className="text-[11px] text-stone-400 font-medium mt-0.5">Moisture Lock</p>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Studio Photography Frame Showcase */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-3xl border-2 border-stone-700/60 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between group">
              {/* Gold/Bronze Decorative Corner Accents */}
              <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-[#D98A7F]/40" />
              <div className="absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-[#D98A7F]/40" />
              <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-[#D98A7F]/40" />
              <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-[#D98A7F]/40" />

              {/* Top Studio Frame Bar */}
              <div className="relative z-20 flex items-center justify-between text-xs text-stone-400 border-b border-stone-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#D98A7F] animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-300">
                    XYZ Studio • Lip Mask Formula Frame
                  </span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-stone-500">
                  Ref: BIOC-LIP-2026
                </span>
              </div>

              {/* Large Studio Photo Container filling frame cleanly */}
              <div className="relative my-auto flex items-center justify-center h-full w-full py-4">
                {/* Background Texture Card Frame */}
                <div className="absolute inset-x-8 inset-y-4 rounded-2xl bg-stone-900/80 border border-stone-800 overflow-hidden shadow-inner opacity-70">
                  <Image
                    src="/templates/ecommerce/ecommerce-1/images/raspberry-macro.png"
                    alt="Botanical Lip Lipid Texture Macro Photography"
                    fill
                    className="object-cover opacity-30 mix-blend-luminosity"
                  />
                </div>

                {/* Primary Framed Product Image with Smooth Motion Animation */}
                <motion.div
                  key={activeTooltip.id}
                  initial={{ scale: 0.94, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[320px] sm:h-[380px] w-full max-w-lg z-10 flex items-center justify-center"
                >
                  <Image
                    src="/templates/ecommerce/ecommerce-1/images/benefits-product.png"
                    alt="Overnight Lip Mask Benefits Studio Product Photography"
                    fill
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    priority
                  />
                </motion.div>

                {/* Interactive Hotspot Nodes on Product Image */}
                {FEATURE_TOOLTIPS.map((tooltip) => {
                  const isActive = activeTooltip.id === tooltip.id;
                  return (
                    <motion.button
                      key={tooltip.id}
                      onClick={() => setActiveTooltip(tooltip)}
                      style={{
                        top: `${tooltip.position.y}%`,
                        left: `${tooltip.position.x}%`,
                      }}
                      whileHover={{ scale: 1.25 }}
                      className={`absolute z-20 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#D98A7F] text-stone-950 ring-4 ring-[#D98A7F]/40 shadow-lg shadow-[#D98A7F]/50 scale-110'
                          : 'bg-stone-900/90 text-stone-300 border border-stone-600 hover:border-[#D98A7F]'
                      }`}
                      title={tooltip.title}
                    >
                      <span className="text-[11px] font-bold">{tooltip.id === 'shea-butter' ? '1' : tooltip.id === 'peptide-complex' ? '2' : tooltip.id === 'hyaluronic-acid' ? '3' : '4'}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom Studio Frame Footer overlay */}
              <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-800/80 pt-4 bg-stone-950/40 backdrop-blur-md rounded-b-2xl px-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-heading text-lg font-bold text-[#D98A7F]">
                    Overnight Lip Mask
                  </span>
                  <span className="text-stone-400 font-mono text-[11px]">
                    | 15ml / 0.5 fl oz
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-stone-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <HeartPulse className="h-3.5 w-3.5 text-[#D98A7F]" />
                    Collagen Synthesis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#FAF0CA]" />
                    Restorative Velvet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
