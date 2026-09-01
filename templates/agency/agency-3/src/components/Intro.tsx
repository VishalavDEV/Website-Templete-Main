"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-cream py-24 md:py-32 lg:py-40">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left column — metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-row lg:flex-col gap-6 lg:gap-0 justify-between lg:justify-start"
          >
            <div>
              <div className="text-micro text-warm-gray mb-1">FOUNDED</div>
              <div
                className="text-2xl font-light text-near-black"
                style={{ fontFamily: "var(--font-display)" }}
              >
                2026
              </div>
            </div>
            <div className="lg:mt-8">
              <div className="text-micro text-warm-gray mb-1">BASED IN</div>
              <div
                className="text-2xl font-light text-near-black"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GLOBAL
              </div>
            </div>
            <div className="lg:mt-8">
              <div className="text-micro text-warm-gray mb-1">TYPE</div>
              <div
                className="text-2xl font-light text-near-black"
                style={{ fontFamily: "var(--font-display)" }}
              >
                INDEPENDENT
              </div>
            </div>
          </motion.div>

          {/* Right column — main statement */}
          <div className="lg:col-span-9 lg:col-start-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2
                className="text-section font-bold text-near-black leading-[0.92] tracking-[-0.03em] mb-10 md:mb-14"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WE BUILD IDENTITIES,
                <br />
                DIGITAL EXPERIENCES,
                <br />
                AND IDEAS PEOPLE{" "}
                <span className="italic text-terracotta">REMEMBER.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            >
              <p className="text-body-lg text-warm-gray leading-relaxed">
                Axiom is a multidisciplinary creative studio working at the
                intersection of strategy, design, and technology. We help
                ambitious brands find their voice and amplify it across every
                touchpoint.
              </p>
              <p className="text-body-lg text-warm-gray leading-relaxed">
                From brand identity to digital product design, we bring a
                meticulous eye and a restless curiosity to every project. We
                don&apos;t do ordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-near-black/10" />
    </section>
  );
}
