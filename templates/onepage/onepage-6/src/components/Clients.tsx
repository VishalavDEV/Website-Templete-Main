"use client";

import { motion } from "framer-motion";
import { clientsData } from "@/data/agencyData";

export default function Clients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden border-b border-nye-dark/10 dark:border-nye-light/10">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-nye-dark/45 dark:text-nye-light/45 uppercase">
            TRUSTED BY FORWARD-THINKING BRANDS
          </span>
        </div>

        {/* Minimal grid of client logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center"
        >
          {clientsData.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center p-6 border border-nye-dark/5 dark:border-nye-light/5 rounded-xl w-full max-w-[160px] aspect-video hover:bg-nye-dark/5 dark:hover:bg-nye-light/5 hover:border-nye-orange/30 transition-all duration-300 select-none cursor-default"
            >
              {/* Elegant typographic mark */}
              <span className="font-black text-xl tracking-widest text-nye-dark/40 dark:text-nye-light/40 group-hover:text-nye-dark dark:group-hover:text-nye-light transition-colors duration-300">
                {client.logoText}
              </span>
              {/* Small dot decoration */}
              <span className="w-1 h-1 rounded-full bg-nye-orange mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
