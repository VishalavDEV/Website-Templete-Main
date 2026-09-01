import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Zap, Flame, Shield, ArrowRight, Check } from 'lucide-react';
import { fetchVehicles } from '../services/api';

export default function FleetShowcase({ onSelectVehicle }) {
  const [vehicles, setVehicles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Track Coupe', 'Supercar', 'Ultra Luxury', 'Prestige SUV'];

  useEffect(() => {
    setLoading(true);
    fetchVehicles(selectedCategory).then(data => {
      setVehicles(data);
      setLoading(false);
    });
  }, [selectedCategory]);

  return (
    <section id="fleet" className="relative w-full py-24 bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2994A] mb-2">
              <Flame className="w-4 h-4 text-[#F2994A]" />
              <span>Live Inventory &bull; Instant Dispatch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              The Sovereign Fleet.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#F2994A] text-black shadow-lg shadow-[#F2994A]/25'
                    : 'bg-white/[0.04] text-[#8E8E99] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-[#111116]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden hover:border-[#F2994A]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
              >
                {/* Image Container with Badges */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black/40">
                  <img
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/30"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#F2994A]">
                    {vehicle.category}
                  </div>

                  {/* Daily Rate Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-2xl flex items-baseline gap-1">
                    <span className="text-lg font-display font-bold text-white">${vehicle.dailyRate}</span>
                    <span className="text-[10px] uppercase font-mono text-[#8E8E99]">/ day</span>
                  </div>
                </div>

                {/* Body Specs & Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-[#F2994A] transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-[#8E8E99] line-clamp-2 mb-6">
                      {vehicle.tagline}
                    </p>

                    {/* Spec Indicators */}
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/[0.06] mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono text-[#8E8E99] flex items-center gap-1 mb-1">
                          <Zap className="w-3 h-3 text-[#F2994A]" /> Power
                        </span>
                        <span className="text-base font-display font-bold text-white">{vehicle.horsepower} HP</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono text-[#8E8E99] flex items-center gap-1 mb-1">
                          <Gauge className="w-3 h-3 text-[#F2994A]" /> 0-60 MPH
                        </span>
                        <span className="text-base font-display font-bold text-white">{vehicle.acceleration}s</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono text-[#8E8E99] flex items-center gap-1 mb-1">
                          <Shield className="w-3 h-3 text-[#F2994A]" /> Top Speed
                        </span>
                        <span className="text-base font-display font-bold text-white">{vehicle.topSpeed} MPH</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Trigger */}
                  <button
                    onClick={() => onSelectVehicle(vehicle)}
                    className="w-full py-3.5 rounded-full bg-white/[0.05] hover:bg-[#F2994A] border border-white/10 hover:border-[#F2994A] text-white hover:text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-[0_0_25px_rgba(242,153,74,0.4)]"
                  >
                    <span>Reserve Configuration</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
