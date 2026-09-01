"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative bg-dark-section py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background geometric element */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cream/[0.03] rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-cream/[0.03] -rotate-6" />
      </div>

      <div className="px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left — Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="text-micro text-warm-orange mb-4">[ABOUT US]</div>
            <h2
              className="text-section font-bold text-cream leading-[0.92] tracking-[-0.03em] mb-10 md:mb-14"
              style={{ fontFamily: "var(--font-display)" }}
            >
              WE&apos;RE A SMALL TEAM
              <br />
              WITH <span className="text-warm-orange italic">BIG IDEAS.</span>
            </h2>

            <div className="space-y-6 max-w-xl">
              <p className="text-body-lg text-warm-gray-light leading-relaxed">
                Strategy gives ideas direction. Design gives them form. Technology
                makes them real. We sit at the intersection of all three — and
                we&apos;ve built our studio around that belief.
              </p>
              <p className="text-body-lg text-warm-gray-light leading-relaxed">
                Every project starts with curiosity. We ask questions that others
                don&apos;t, look for angles others miss, and refuse to settle for
                the expected.
              </p>
            </div>
          </motion.div>

          {/* Right — Image and metadata */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10"
          >
            {/* Abstract visual */}
            <div className="aspect-[3/4] bg-gradient-to-br from-terracotta/10 via-mauve/5 to-warm-orange/10 border border-cream/[0.08] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-8xl md:text-9xl font-bold text-cream/[0.03] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    A
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="w-full h-px bg-cream/10 mb-3" />
                <div className="text-micro text-warm-gray/60">STUDIO — 2026</div>
              </div>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-micro text-warm-gray/50 mb-1">TEAM</div>
                <div
                  className="text-2xl font-light text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  12 CREATIVES
                </div>
              </div>
              <div>
                <div className="text-micro text-warm-gray/50 mb-1">PROJECTS</div>
                <div
                  className="text-2xl font-light text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  120+ DELIVERED
                </div>
              </div>
              <div>
                <div className="text-micro text-warm-gray/50 mb-1">FOCUS</div>
                <div
                  className="text-2xl font-light text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  QUALITY
                </div>
              </div>
              <div>
                <div className="text-micro text-warm-gray/50 mb-1">ETHOS</div>
                <div
                  className="text-2xl font-light text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  BOLD
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
