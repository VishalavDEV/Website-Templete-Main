"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/agencyData";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Floating thumbnail preview details for hover effects
  const servicePreviews = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop"
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden border-b border-nye-dark/10 dark:border-nye-light/10">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-nye-orange uppercase block mb-3">02 / EXPERTISE</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-sm text-nye-dark/60 dark:text-nye-light/60 max-w-sm font-medium">
            We focus on digital craftsmanship. Decades of combined experience squeezed into custom-fit client strategies.
          </p>
        </div>

        {/* Services Rows List */}
        <div className="relative border-t border-nye-dark/15 dark:border-nye-light/15">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="relative border-b border-nye-dark/15 dark:border-nye-light/15 py-8 md:py-12 group cursor-pointer overflow-hidden transition-colors duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Color Reveal on Hover */}
              <div 
                className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-y-100 ${
                  index % 3 === 0 ? "bg-nye-teal" : index % 3 === 1 ? "bg-nye-purple" : "bg-nye-navy"
                }`}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 relative z-10 px-2 md:px-6">
                
                {/* Number */}
                <div className="md:col-span-1 text-xs font-mono font-black text-nye-dark/40 dark:text-nye-light/40 group-hover:text-nye-light transition-colors">
                  {service.number}
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-nye-dark dark:text-nye-light group-hover:text-nye-light transition-colors flex items-center gap-3">
                    {service.title}
                    {/* Small accent dot */}
                    <span className={`w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.accentColor}`}></span>
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-sm md:text-base text-nye-dark/70 dark:text-nye-light/70 group-hover:text-nye-light/80 transition-colors leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-nye-dark/10 dark:border-nye-light/10 flex items-center justify-center group-hover:border-nye-light group-hover:bg-nye-light group-hover:text-nye-dark transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Floating Image Preview on Hover (Desktop Only) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 3, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -5, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-48 h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-nye-light z-20 pointer-events-none"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={servicePreviews[index]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
