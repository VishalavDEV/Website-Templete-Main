"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-cream"
    >
      {/* Top metadata bar */}
      <div className="absolute top-24 md:top-28 left-6 md:left-10 lg:left-16 right-6 md:right-10 lg:right-16 flex justify-between items-start z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-micro text-warm-gray"
        >
          INDEPENDENT CREATIVE AGENCY
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-micro text-warm-gray text-right hidden md:block"
        >
          EST. 2026 — GLOBAL / REMOTE
        </motion.div>
      </div>

      {/* Abstract geometric elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-32 right-10 md:right-20 lg:right-32 w-24 h-32 md:w-40 md:h-56 border border-warm-orange/20 z-0"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-48 left-8 md:left-24 lg:left-40 w-16 h-16 md:w-24 md:h-24 bg-terracotta/10 rounded-full z-0"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 right-1/4 w-3 h-3 bg-warm-orange rounded-full z-0"
      />

      {/* Dot grid pattern */}
      <div className="absolute top-1/3 right-8 md:right-16 opacity-10 z-0 hidden md:block">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-near-black" />
          ))}
        </div>
      </div>

      {/* Main hero content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-32"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-micro text-warm-orange mb-6 md:mb-8"
        >
          [CREATIVE AGENCY / 2026]
        </motion.div>

        {/* Main headline */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-hero font-bold text-near-black leading-[0.88] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WE MAKE
            <br />
            <span className="text-warm-orange">BRANDS</span>
            <br />
            IMPOSSIBLE
            <br />
            TO IGNORE.
          </motion.h1>

          {/* Floating element beside headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden lg:block absolute top-8 right-0 xl:right-16 w-48 xl:w-64"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-terracotta/20 via-mauve/10 to-warm-orange/15 border border-warm-orange/10 relative overflow-hidden">
              {/* Abstract collage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-hero font-bold text-near-black/5 leading-none select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AX
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="w-full h-px bg-near-black/10 mb-2" />
                <div className="text-micro text-warm-gray">ART DIRECTION</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtitle and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <p className="text-body-lg text-warm-gray max-w-md leading-relaxed">
            We craft bold identities and digital experiences that cut through the
            noise and make people feel something.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 text-micro text-near-black hover:text-warm-orange transition-colors duration-300 pb-1 border-b border-near-black/15 hover:border-warm-orange/40"
            >
              START A PROJECT
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
            <a
              href="#work"
              className="group flex items-center gap-2 text-micro text-warm-gray hover:text-near-black transition-colors duration-300 pb-1 border-b border-warm-gray/15"
            >
              VIEW OUR WORK
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-6 md:left-10 lg:left-16 flex items-center gap-2 text-warm-gray"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
          <span className="text-micro">SCROLL</span>
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-near-black/10" />
    </section>
  );
}
