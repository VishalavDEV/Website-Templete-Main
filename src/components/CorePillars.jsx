import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Scan, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { corePillars } from '../data/content';

const iconMap = {
  Activity,
  Scan,
  RotateCcw,
};

export default function CorePillars({ onSelectService }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="pillars" className="py-24 bg-[#FDFBF7] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wheat-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Zap className="w-3.5 h-3.5 text-forest-700" />
            <span>Core Pillars of Technology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight mb-5"
          >
            Where Biological Harmony Meets <br />
            <span className="text-forest-700 italic">Autonomous Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-earth-700 leading-relaxed"
          >
            We eliminate the guesswork in organic agriculture. Our tri-pillar framework integrates subterranean biosensors, automated aerial AI, and living microbial inputs.
          </motion.p>
        </div>

        {/* 3-Column Interactive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch"
        >
          {corePillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Activity;
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl p-8 border border-forest-100/80 shadow-md hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full"
              >
                {/* Top Accent bar on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-forest-600 via-wheat-500 to-emerald-500 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    {/* Icon Header & Metric Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-forest-800 text-wheat-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 group-hover:bg-forest-900 transition-all duration-300">
                        <IconComponent className="w-7 h-7 stroke-[1.75]" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200/60">
                        <Sparkles className="w-3 h-3 text-wheat-600" />
                        {pillar.metric}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-forest-600">
                        {pillar.tagline}
                      </span>
                      <h3 className="text-2xl font-bold font-display text-forest-950 mt-1 group-hover:text-forest-700 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-earth-700 text-sm leading-relaxed mb-6 min-h-[3.5rem]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Benefit checkmarks */}
                  <div className="space-y-2.5 pt-4 border-t border-forest-50 mb-6">
                    {pillar.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-forest-900 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-forest-800 group-hover:text-forest-600 transition-colors pt-2"
                >
                  <span>Explore Technical Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
