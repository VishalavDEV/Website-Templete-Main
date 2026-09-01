'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, ShieldCheck, Flower2, Sun, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface IngredientCard {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  accentBg: string;
  borderColor: string;
  iconColor: string;
  badgeBg: string;
}

const INGREDIENTS: IngredientCard[] = [
  {
    id: 'rose-oil',
    name: 'Damask Rose Oil',
    subtitle: 'Deep Hydration & Natural Dew',
    description: 'Cold-pressed petals rich in omega fatty acids and antioxidants to restore damaged moisture barrier.',
    badge: '100% Organic',
    icon: Flower2,
    accentBg: 'bg-[#FDF2F0]',
    borderColor: 'border-[#F7D8D3]',
    iconColor: 'text-[#D98A7F]',
    badgeBg: 'bg-[#D98A7F]/15 text-[#B86B60]',
  },
  {
    id: 'peptide-matrix',
    name: 'Peptide Matrix',
    subtitle: 'Plumping & Collagen Support',
    description: 'Biocompatible tri-peptide complex that visibly smooths fine lip lines and supports long-term volume.',
    badge: 'Clinical Grade',
    icon: ShieldCheck,
    accentBg: 'bg-[#FDF8F3]',
    borderColor: 'border-[#F3E5D8]',
    iconColor: 'text-[#C69C6D]',
    badgeBg: 'bg-[#C69C6D]/15 text-[#8F6A3D]',
  },
  {
    id: 'cocoa-butter',
    name: 'Raw Cocoa Butter',
    subtitle: '24-Hour Lipid Shield',
    description: 'Nourishing botanical lipids that create a feather-light protective lock against dry wind and cold.',
    badge: 'Raw & Unrefined',
    icon: Heart,
    accentBg: 'bg-[#FAF5F0]',
    borderColor: 'border-[#EFE3D8]',
    iconColor: 'text-[#8C6246]',
    badgeBg: 'bg-[#8C6246]/15 text-[#63432D]',
  },
  {
    id: 'plant-squalane',
    name: 'Plant Squalane',
    subtitle: 'Weightless Softness',
    description: 'Sugar-cane derived bio-lipid that mimics natural skin oils for non-tacky, instant absorption.',
    badge: 'Sugarcane Derived',
    icon: Droplets,
    accentBg: 'bg-[#F4F9F6]',
    borderColor: 'border-[#D8EBE2]',
    iconColor: 'text-[#5B9B82]',
    badgeBg: 'bg-[#5B9B82]/15 text-[#3D6B5A]',
  },
  {
    id: 'wild-honey',
    name: 'Wildflower Honey',
    subtitle: 'Soothing Barrier Repair',
    description: 'Natural humectant extract that draws airborne hydration into lip cells for smooth cushion glow.',
    badge: 'Pure Extract',
    icon: Sun,
    accentBg: 'bg-[#FDFBF2]',
    borderColor: 'border-[#F5ECD2]',
    iconColor: 'text-[#D4A017]',
    badgeBg: 'bg-[#D4A017]/15 text-[#96700E]',
  },
];

export const IngredientHighlights: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] py-8 md:py-10 px-4 sm:px-6 md:px-12 border-y border-stone-200/60 overflow-hidden">
      {/* Decorative Subtle Background Pattern */}
      <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[#D98A7F]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#C69C6D]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D98A7F]/30 bg-[#D98A7F]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#B86B60] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Clean Formula Core</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Key Ingredient Highlights
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-xl">
              Biocompatible plant actives engineered for deep lip cell renewal, zero fillers, and plush hydration.
            </p>
          </div>

          <Link
            href="/#ingredients"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B86B60] hover:text-[#D98A7F] transition-colors group"
          >
            <span>Explore Full Formulation</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Row of Ingredient Cards (Box Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {INGREDIENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative flex flex-col justify-between rounded-2xl border ${item.borderColor} ${item.accentBg} p-5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default`}
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-white shadow-xs border ${item.borderColor} ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-base font-bold text-[#1C1917] group-hover:text-[#D98A7F] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-stone-500 mb-2">
                    {item.subtitle}
                  </p>

                  {/* Benefit Description */}
                  <p className="text-xs text-stone-600 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                {/* Footer Checkmark Indicator */}
                <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center gap-1.5 text-[11px] font-medium text-stone-500">
                  <CheckCircle2 className={`h-3.5 w-3.5 ${item.iconColor}`} />
                  <span>100% Clean Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
