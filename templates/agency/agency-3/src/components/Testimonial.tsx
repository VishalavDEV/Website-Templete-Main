"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-cream-dark py-28 md:py-40 lg:py-52 overflow-hidden"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-16 left-6 md:left-10 lg:left-16">
        <span
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-near-black/[0.02] leading-none select-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;
        </span>
      </div>

      <div className="px-6 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto lg:mx-0 lg:ml-auto lg:mr-16 xl:mr-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-near-black leading-[1.05] tracking-[-0.02em] mb-12 md:mb-16"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;THEY TURNED A GOOD IDEA INTO SOMETHING PEOPLE
              <span className="text-warm-orange italic"> COULDN&apos;T IGNORE.</span>&rdquo;
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-1"
          >
            <div className="w-8 h-px bg-warm-orange mb-4" />
            <div
              className="text-lg md:text-xl font-medium text-near-black"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Elena Marchetti
            </div>
            <div className="text-micro text-warm-gray mt-1">
              FOUNDER, VERA BEAUTY
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-near-black/10" />
    </section>
  );
}
