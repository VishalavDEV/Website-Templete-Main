"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/agencyData";

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="process" className="relative py-24 md:py-32 bg-nye-dark text-nye-light overflow-hidden">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-4 border-b border-nye-light/10 pb-8">
          <div>
            <span className="text-xs font-black tracking-widest text-nye-orange uppercase block mb-3">06 / METHODOLOGY</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              THE INTENT PROCESS
            </h2>
          </div>
          <p className="text-sm text-nye-mauve max-w-sm font-medium">
            How we translate abstract business challenges into production-ready digital products.
          </p>
        </div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {/* Subtle connecting lines (only visible on large screens) */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-nye-light/10 -z-10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-nye-purple via-nye-orange to-nye-teal origin-left"
            />
          </div>

          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="relative flex flex-col items-start group"
            >
              {/* Step indicator node */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-nye-dark border-2 border-nye-light/20 flex items-center justify-center font-mono text-xs font-black text-nye-mauve group-hover:border-nye-orange group-hover:text-nye-orange transition-colors duration-300 relative">
                  {step.number}
                  {/* Glowing core indicator */}
                  <span className="absolute inset-1.5 rounded-full bg-nye-orange scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </div>
                
                {/* Horizontal line for mobile/tablet visual guide */}
                <div className="w-12 h-0.5 bg-nye-light/10 md:hidden"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-nye-light group-hover:text-nye-orange transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-nye-mauve leading-relaxed max-w-sm">
                {step.description}
              </p>

              {/* Hover effect bottom bar */}
              <div className="w-full h-1 bg-gradient-to-r from-nye-purple to-nye-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 mt-6 rounded-full" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
