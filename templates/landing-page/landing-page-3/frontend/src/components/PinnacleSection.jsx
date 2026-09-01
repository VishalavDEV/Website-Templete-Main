import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, ShieldCheck, Zap } from 'lucide-react';

export default function PinnacleSection({ onOpenBooking }) {
  return (
    <section id="about" className="relative w-full py-24 bg-[#070709] overflow-hidden border-t border-white/[0.06]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F2994A]/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2994A] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F2994A]"></span>
              <span>The Grand Tour standard</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.08]">
              Pinnacle of <br className="hidden sm:inline"/>
              Driving Luxury.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-[#9C9CA4] text-sm sm:text-base leading-relaxed"
          >
            Curated precision machinery engineered without compromise. Experience unbridled power, bespoke tailored cockpits, and door-to-door white glove delivery.
          </motion.div>
        </div>

        {/* Parallax Mountain Road Hero Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[420px] sm:h-[540px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl group"
        >
          {/* Background image with hover zoom */}
          <img
            src="/images/pinnacle_mountain.jpg"
            alt="Mountain Pass Luxury Driving Experience"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Luxury Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/20 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/80 via-transparent to-transparent"></div>

          {/* Floating Feature Overlays on Image */}
          <div className="absolute bottom-8 left-6 sm:left-12 max-w-lg z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Compass className="w-3.5 h-3.5 text-[#F2994A]" />
              Alpine Pass Access
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Unrestricted High-Elevation Performance
            </h3>
            <p className="text-sm text-white/70 mb-4 line-clamp-2">
              All vehicles equipped with dynamic torque vectoring, sport exhaust valves, and real-time telematics.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2994A] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg shadow-[#F2994A]/30 hover:scale-105 active:scale-95"
            >
              <span>Book Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Badge top right */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs uppercase tracking-widest text-white/90 font-mono">100% Concierge Protected</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
