"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse ourselves in your world. Understanding your audience, market, and ambitions before we touch a single pixel.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Strategy crystallizes vision. We establish the framework that guides every creative decision ahead.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Concepts become form. We explore, iterate, and refine until every detail serves a purpose and tells a story.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Ideas become real. Our team brings designs to life with meticulous craftsmanship and modern technology.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We orchestrate the reveal. Strategic rollouts that make an impact from day one.",
  },
  {
    number: "06",
    title: "Grow",
    description:
      "The relationship doesn't end at launch. We optimize, evolve, and scale what works.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-cream py-24 md:py-32 lg:py-40">
      <div className="px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-micro text-warm-orange mb-4">[APPROACH]</div>
            <h2
              className="text-display font-bold text-near-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OUR
              <br />
              PROCESS
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-0 max-w-sm"
          >
            <p className="text-body-lg text-warm-gray">
              A disciplined creative methodology refined through years of
              practice.
            </p>
          </motion.div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-near-black/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.08,
              }}
              className="relative border-b md:border-b-0 md:border-r border-near-black/10 last:border-r-0 last:border-b-0 lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(3)]:border-b lg:[&:nth-child(6)]:border-r-0"
            >
              <div className="p-6 md:p-8 lg:p-10 h-full">
                {/* Step number */}
                <div
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-near-black/[0.04] leading-none mb-4 md:mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </div>

                {/* Step title */}
                <h3
                  className="text-xl md:text-2xl font-semibold text-near-black mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-sm text-warm-gray leading-relaxed">
                  {step.description}
                </p>

                {/* Connection line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-px w-px h-4 bg-warm-orange/30 -translate-y-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-near-black/10" />
    </section>
  );
}
