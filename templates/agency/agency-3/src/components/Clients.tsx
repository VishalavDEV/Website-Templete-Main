"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "ATLAS",
  "MERIDIAN",
  "CRAFT",
  "VERA",
  "LUMA",
  "NOMA",
  "KORA",
  "MONO",
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-cream py-20 md:py-28">
      <div className="px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-micro text-warm-gray mb-3">TRUSTED BY</div>
          <div className="w-12 h-px bg-near-black/15" />
        </motion.div>

        {/* Client list - editorial typography */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
            >
              <span
                className="text-xl md:text-2xl lg:text-3xl font-light text-near-black/20 hover:text-near-black/50 transition-colors duration-500 cursor-default tracking-[0.05em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Marquee accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-20 overflow-hidden"
        >
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="text-micro text-warm-gray/20 tracking-[0.2em] shrink-0"
                >
                  {client}
                  <span className="mx-6 text-warm-orange/20">◆</span>
                </span>
              ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-near-black/10" />
    </section>
  );
}
