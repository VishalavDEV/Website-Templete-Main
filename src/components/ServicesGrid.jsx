import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Plane, 
  Droplets, 
  Cpu, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { servicesData } from '../data/content';

const iconMap = {
  ShieldAlert,
  Plane,
  Droplets,
  Cpu,
  TrendingUp,
  Sparkles,
};

export default function ServicesGrid({ onSelectService, onOpenContact }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Bio-Formulations', 'Robotics & Aerial AI', 'IoT & Water Preservation', 'Controlled Environment Ag', 'Carbon & Sustainability'];

  const filteredServices = activeFilter === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-24 bg-[#FDFBF7] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-forest-700" />
            <span>Integrated Solutions Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight mb-5"
          >
            Engineered For Regenerative Scale & <br />
            <span className="text-forest-700 italic">Uncompromising Yield</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-earth-700"
          >
            From field edge to grain elevator, our turnkey hardware and biological ecosystems deliver higher margins without toxic agrochemical dependencies.
          </motion.p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-forest-800 text-white shadow-md shadow-forest-900/20'
                  : 'bg-white text-forest-800 border border-forest-200 hover:bg-forest-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6-Card Services Grid with Symmetrical Height and Baseline Alignment */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden border border-forest-100 shadow-md hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full"
              >
                {/* Card Top: Image Header with Embedded Badges & Icon */}
                <div className="relative h-56 w-full overflow-hidden shrink-0 bg-forest-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-forest-950/40" />
                  
                  {/* Category & Status Tags (Top) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-forest-900/90 text-wheat-400 text-xs font-bold backdrop-blur-md border border-forest-700 shadow-sm truncate max-w-[65%]">
                      {service.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-forest-950 text-[11px] font-bold shrink-0 shadow-sm">
                      {service.tag}
                    </span>
                  </div>

                  {/* Clean Integrated Icon Badge (Bottom Right inside Image) */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-forest-900/90 text-wheat-400 border border-forest-700/80 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-forest-800 transition-all duration-300 z-10">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Middle & Bottom: Content + Perfectly Aligned Footer */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-forest-950 group-hover:text-forest-700 transition-colors mb-2.5 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-earth-700 text-sm leading-relaxed mb-6 min-h-[4.25rem]">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Symmetrical Bottom Actions (Metric + CTA Button) */}
                  <div className="space-y-3 pt-2">
                    <div className="bg-forest-50/80 px-3.5 py-2.5 rounded-xl border border-forest-100 flex items-center justify-between text-xs font-semibold text-forest-800">
                      <span className="text-earth-600 font-medium">Impact Metric</span>
                      <span className="text-forest-950 font-bold">{service.stats}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-forest-50 group-hover:bg-forest-800 text-forest-800 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                    >
                      <span>View Technical Blueprint</span>
                      <ArrowUpRight className="w-4 h-4 text-forest-600 group-hover:text-wheat-400 transition-colors" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Solution Footer Banner */}
        <div className="mt-16 bg-gradient-to-r from-forest-900 to-forest-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-forest-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-wheat-500/20 border border-wheat-400/30 flex items-center justify-center text-wheat-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white">Need a Custom Agronomy Formulation or Fleet Deployment?</h4>
              <p className="text-forest-200 text-xs sm:text-sm mt-0.5">Our agronomy PhDs design tailored microbial cocktails and drone flight plans for large-scale acreage.</p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-wheat-500 hover:bg-wheat-400 text-forest-950 font-bold text-sm shadow-md transition-all shrink-0"
          >
            Request Agronomist Call
          </button>
        </div>

      </div>
    </section>
  );
}
