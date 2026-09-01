"use client";

import { motion } from "framer-motion";
import { capabilitiesData } from "@/data/agencyData";

export default function Capabilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="capabilities" className="relative py-24 md:py-32 bg-nye-dark text-nye-light overflow-hidden">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-nye-purple/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Heading & Philosophy */}
          <div className="lg:col-span-5">
            <span className="text-xs font-black tracking-widest text-nye-orange uppercase block mb-3">04 / STRUCTURE</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-8">
              SMALL TEAM.<br />
              BIG OUTPUT.
            </h2>
            <p className="text-base text-nye-mauve max-w-sm leading-relaxed font-medium">
              We operate as a high-density team. No account managers, middle-men, or bureaucratic drag. You speak directly to the creators designing your products.
            </p>
          </div>

          {/* Right Block: Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12"
          >
            {capabilitiesData.map((cap) => (
              <motion.div 
                key={cap.id} 
                variants={itemVariants}
                className="border-b border-nye-light/10 pb-6 flex flex-col justify-between group hover:border-nye-orange transition-colors duration-300"
              >
                <div>
                  {/* Oversized Stat Number */}
                  <div className="text-5xl md:text-7xl font-black text-nye-light tracking-tighter group-hover:text-nye-orange transition-colors duration-300 mb-4">
                    {cap.value}
                  </div>
                  {/* Label */}
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-nye-orange mb-2">
                    {cap.label}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-nye-mauve leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
