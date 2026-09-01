"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  isInView: parentInView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (parentInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [parentInView, value]);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 184,
    prefix: "+",
    suffix: "%",
    label: "Conversion increase",
    description: "Average lift across all campaigns",
  },
  {
    number: 4,
    prefix: "",
    suffix: ".7×",
    label: "Client growth",
    description: "Average revenue multiplier",
  },
  {
    number: 42,
    prefix: "",
    suffix: "M+",
    label: "Total reach",
    description: "People touched by our work",
  },
  {
    number: 28,
    prefix: "",
    suffix: "",
    label: "Brands launched",
    description: "From zero to market",
  },
];

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-near-black py-28 md:py-40 lg:py-52 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-terracotta/5 to-transparent" />

      <div className="px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <div className="text-micro text-warm-orange mb-4">[IMPACT]</div>
          <h2
            className="text-display font-bold text-cream leading-[0.95] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WORK THAT
            <br />
            <span className="text-warm-orange italic">DELIVERS.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream leading-none tracking-[-0.04em] mb-4 md:mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedNumber
                  value={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="text-micro text-warm-orange mb-2">{stat.label}</div>
              <p className="text-xs text-warm-gray hidden md:block">
                {stat.description}
              </p>

              {/* Subtle line */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-cream/5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
