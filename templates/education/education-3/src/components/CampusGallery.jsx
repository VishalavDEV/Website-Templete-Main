import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CAMPUS_LOCATIONS } from '../data/campus';
import { MapPin, ArrowUpRight, Maximize2, X, Sparkles } from 'lucide-react';

export default function CampusGallery() {
  const navigate = useNavigate();
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section className="py-24 relative bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              <MapPin className="w-4 h-4" />
              <span>SPATIAL ENVIRONMENT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Campus Experience.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Architected for deep research, physical prototyping, and collaborative synthesis.
          </p>
        </div>

        {/* Masonry Image Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPUS_LOCATIONS.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedFacility(facility)}
              data-cursor="VIEW"
              className={`relative rounded-3xl overflow-hidden glass-panel border border-white/10 group cursor-pointer h-[340px] md:h-[400px] ${facility.size}`}
            >
              {/* Image */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-slate-950/80 text-electric-300 border border-white/10 backdrop-blur-md">
                  {facility.category}
                </span>
              </div>

              {/* Hover Trigger Button */}
              <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-950/80 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Content Overlay (Reveals on Hover / Visible) */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 space-y-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-12">
                <div className="text-[11px] font-mono text-electric-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{facility.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                  {facility.title}
                </h3>

                <p className="text-xs text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {facility.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-electric-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>INSPECT SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facility Spec Modal Popup */}
        <AnimatePresence>
          {selectedFacility && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedFacility(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full rounded-3xl glass-panel border border-electric-500/30 p-8 bg-slate-900 shadow-2xl overflow-hidden space-y-6"
              >
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-64 rounded-2xl overflow-hidden relative">
                  <img src={selectedFacility.image} alt={selectedFacility.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-mono bg-electric-600 text-white">
                    {selectedFacility.category}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-electric-400 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedFacility.location}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white font-display">
                    {selectedFacility.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {selectedFacility.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-electric-400" />
                  <span>SPECIFICATIONS: {selectedFacility.specs}</span>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSelectedFacility(null);
                      navigate('/campus');
                    }}
                    className="px-6 py-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs"
                  >
                    VIRTUAL CAMPUS TOUR →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
