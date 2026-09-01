"use client";

import { motion } from "framer-motion";
import { metricsData } from "@/data/agencyData";

export default function Results() {
  return (
    <section className="relative py-24 md:py-36 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden border-b border-nye-dark/10 dark:border-nye-light/10">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-black tracking-widest text-nye-orange uppercase block mb-3">05 / IMPACT</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase max-w-xl">
            METRICS THAT PROVE INTENTION.
          </h2>
        </div>

        {/* Oversized typography list layout */}
        <div className="flex flex-col gap-12 md:gap-20">
          {metricsData.map((metric, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              key={metric.id}
              className={`flex flex-col lg:flex-row items-baseline justify-between border-b border-nye-dark/10 dark:border-nye-light/10 pb-12 gap-6 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Massive Metric Number */}
              <div className="text-7xl sm:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-r from-nye-dark via-nye-purple to-nye-orange dark:from-nye-light dark:via-nye-violet dark:to-nye-orange">
                {metric.value}
              </div>

              {/* Metric Meta */}
              <div className="max-w-md lg:text-left">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-nye-teal dark:text-nye-mauve mb-3">
                  {metric.label}
                </h3>
                <p className="text-sm md:text-base text-nye-dark/70 dark:text-nye-light/70 leading-relaxed font-medium">
                  {metric.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Horizontal Marquee Text */}
        <div className="relative mt-24 w-screen -left-6 md:-left-12 overflow-hidden py-4 border-y border-nye-dark/10 dark:border-nye-light/10 select-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-16 whitespace-nowrap text-3xl font-black tracking-tight uppercase"
          >
            <span>* INTENT AGENCY *</span>
            <span>STRATEGY MEETS DESIGN</span>
            <span>* NO TEMPLATES *</span>
            <span>DIGITAL EXCELLENCE</span>
            <span>* MODERN BRANDING *</span>
            <span>NEXT-GEN DEV</span>
            <span>* INTENT AGENCY *</span>
            <span>STRATEGY MEETS DESIGN</span>
            <span>* NO TEMPLATES *</span>
            <span>DIGITAL EXCELLENCE</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
