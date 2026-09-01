'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export const BrandStory: React.FC = () => {
  // Mouse tilt position for 3D polaroid card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#FAF8F5] px-6 py-10 md:py-14 md:px-12 border-t border-stone-200/60 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Centered Editorial Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D98A7F]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-stone-600">
              XYZ Beauty Philosophy
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-stone-900 italic">
            "Born from a passion for lip care, we believe in <span className="font-bold not-italic text-[#D98A7F]">soft confidence</span>, effortless glow, and high-performance clean formulas."
          </h2>

          <div className="space-y-4 max-w-xl text-stone-600 font-body text-sm sm:text-base leading-relaxed">
            <p>
              At XYZ Beauty, we stripped away unnecessary fillers, harsh synthetics, and sticky textures to engineer biocompatible lip treatments that work in harmony with your skin.
            </p>
            <p>
              Every tube is crafted with clean plant lipids, bioactive peptides, and sustainable packaging designed to look stunning on your vanity.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div>
              <span className="font-accent text-3xl text-stone-900 block">XYZ Beauty Labs</span>
              <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider">
                Los Angeles, California
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Mouse Tilting Lifestyle Polaroid Card */}
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-stone-200/80 rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Polaroid Photo Window */}
            <div className="relative h-80 w-full overflow-hidden rounded-xl bg-stone-100">
              <Image
                src="/templates/ecommerce/ecommerce-1/images/polaroid-studio.png"
                alt="Formulation Studio Lifestyle Polaroid"
                fill
                className="object-cover"
              />
            </div>

            {/* Handwritten Polaroid Caption */}
            <div className="pt-4 text-center">
              <p className="font-accent text-2xl text-stone-800">Formulating batch No. 04 ✨</p>
              <p className="text-[10px] font-semibold text-stone-400 tracking-widest uppercase mt-1">
                XYZ Studio • 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
