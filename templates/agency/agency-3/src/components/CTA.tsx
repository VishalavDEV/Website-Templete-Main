"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-near-black py-32 md:py-44 lg:py-56 overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-cream/[0.03]" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-cream/[0.03]" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-cream/[0.03]" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream/[0.03]" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-cream/[0.03]" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-cream/[0.03]" />
      </div>

      {/* Accent gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-terracotta/10 to-transparent" />

      <div className="px-6 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-6xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-micro text-warm-orange mb-8 md:mb-12"
          >
            [LET&apos;S WORK TOGETHER]
          </motion.div>

          {/* Main CTA text */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream leading-[0.9] tracking-[-0.04em] mb-12 md:mb-20"
            style={{ fontFamily: "var(--font-display)" }}
          >
            HAVE A
            <br />
            GOOD IDEA?
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-warm-orange leading-[0.9] tracking-[-0.04em] mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LET&apos;S MAKE
            <br />
            IT GREAT.
          </motion.h3>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <a
              href="mailto:hello@axiom.studio"
              className="group flex items-center gap-3 text-micro text-cream hover:text-warm-orange transition-colors duration-300 pb-2 border-b border-cream/20 hover:border-warm-orange/40"
            >
              START A PROJECT
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
            <a
              href="mailto:hello@axiom.studio"
              className="text-micro text-warm-gray hover:text-cream transition-colors duration-300 pb-2 border-b border-warm-gray/20"
            >
              hello@axiom.studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
