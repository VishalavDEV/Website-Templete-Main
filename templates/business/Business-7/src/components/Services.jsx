import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function Services({ template }) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-accent mb-3 uppercase">
            WHAT WE DO
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text ${template.themeClass}`}>
            Tailored Expertise & Services
          </h2>
          <div className="h-[2px] w-12 bg-brand-accent mt-6" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {template.services.map((service, index) => {
            // Dynamically resolve icon from Lucide React
            const LucideIcon = Icons[service.icon] || Icons.HelpCircle;

            // Alternate styles slightly so they don't look completely uniform
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.name}
                variants={prefersReducedMotion ? {} : cardVariants}
                className={`group border border-brand-border/60 p-8 flex flex-col justify-between h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand-accent focus-within:border-brand-accent ${
                  isEven ? 'bg-white' : 'bg-brand-light/20'
                }`}
              >
                {/* Card Top Block */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold text-brand-accent/50 tracking-wider">
                      {service.number}
                    </span>
                    <div className="p-3 bg-brand-light text-brand-muted group-hover:bg-brand-accent/10 group-hover:text-brand-accent rounded-sm transition-all duration-300 scale-100 group-hover:scale-110">
                      <LucideIcon size={20} className="stroke-[2]" />
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold text-brand-text mb-4 transition-colors duration-300 group-hover:text-brand-accent ${template.themeClass}`}>
                    {service.name}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Card Bottom: Slide Arrow */}
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-text group-hover:text-brand-accent transition-colors duration-300">
                  <span className="tracking-widest uppercase">DISCOVER</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 text-brand-accent font-bold">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
