import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Clock, MapPin, Star, X, Sparkles, Navigation } from 'lucide-react';
import { fetchExperiences } from '../services/api';

export default function Experiences() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [hoveredBg, setHoveredBg] = useState('');
  const [selectedExp, setSelectedExp] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchExperiences();
      setExperiences(data);
      if (data.length > 0) {
        setHoveredBg(data[0].image); // Default backdrop
      }
    }
    loadData();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-850 pt-28 pb-20 px-6 overflow-hidden">
      
      {/* Dynamic blurred environment backdrop */}
      <AnimatePresence>
        {hoveredBg && (
          <motion.div
            key={hoveredBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-105 pointer-events-none"
            style={{ backgroundImage: `url(${hoveredBg})` }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Curated Encounters</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-stone-850 mt-1">
            Travel Experiences.
          </h1>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed font-medium">
            From deep-diving below warm turquoise reef channels to climbing early dawn ridges in the high Himalayas. Move your mouse over each tile to reveal its visual story.
          </p>
        </div>

        {/* Curated grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredBg(exp.image)}
              onClick={() => setSelectedExp(exp)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-200/70 transition-all flex flex-col justify-between cursor-pointer"
            >
              {/* Card Image Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Float Duration Badge */}
                <div className="absolute top-4 right-4 py-1 px-2.5 bg-white/95 rounded-lg flex items-center gap-1 border border-stone-100 shadow-sm text-stone-700 text-[10px] font-bold">
                  <Clock size={10} className="text-[#ff2a74]" />
                  <span>{exp.duration}</span>
                </div>

                {/* Category tag */}
                <span className="absolute bottom-4 left-4 text-[9px] font-heading font-extrabold uppercase tracking-widest text-white bg-[#ff2a74] py-1 px-3 rounded-full shadow-sm">
                  {exp.category}
                </span>
              </div>

              {/* Card Body content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[9px] font-extrabold text-stone-400 uppercase tracking-wide">
                    <MapPin size={9} className="text-stone-400" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-stone-800 text-lg mt-0.5 group-hover:text-[#ff2a74] transition-colors">
                    {exp.name}
                  </h3>
                  
                  <p className="text-stone-500 text-xs mt-2 leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-[#ff2a74]">
                    <Star size={12} className="fill-current" />
                    <span className="text-xs font-bold text-stone-700">{exp.rating} Rating</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-stone-400">COST: <span className="text-stone-850 font-black">{exp.priceIndicator}</span></span>
                    <button className="py-1.5 px-3 bg-stone-50 group-hover:bg-[#ff2a74] text-stone-600 group-hover:text-white rounded-lg text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer border border-stone-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Excursion Details Modal Overlay */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white max-w-lg w-full rounded-3xl shadow-2xl relative overflow-hidden border border-stone-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={selectedExp.image}
                  alt={selectedExp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/25" />
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-[#ff2a74] hover:text-white text-stone-700 rounded-full shadow-md cursor-pointer border border-stone-200 transition-colors"
                >
                  <X size={16} />
                </button>

                <span className="absolute bottom-4 left-6 py-1 px-3.5 bg-[#ff2a74] text-white text-[9px] font-heading font-extrabold tracking-widest uppercase rounded-full shadow-sm">
                  {selectedExp.category}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="flex items-center gap-2.5 text-[9px] font-extrabold text-stone-400 uppercase tracking-widest">
                  <MapPin size={9} className="text-[#ff2a74]" />
                  <span>{selectedExp.location}</span>
                  <span>•</span>
                  <Clock size={9} className="text-[#0066ff]" />
                  <span>{selectedExp.duration}</span>
                  <span>•</span>
                  <span>Rating: {selectedExp.rating} / 5.0</span>
                </div>

                <h2 className="font-heading font-black text-stone-850 text-xl md:text-2xl mt-3.5 leading-tight">
                  {selectedExp.name}
                </h2>

                <p className="text-stone-500 text-xs md:text-sm mt-3 leading-relaxed font-medium">
                  {selectedExp.description}
                </p>

                <div className="mt-6 pt-4 border-t border-stone-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[9px] text-stone-400 font-bold block uppercase tracking-wider">Estimated Cost Tier</span>
                    <span className="text-xl font-heading font-black text-stone-850 mt-0.5 block">
                      {selectedExp.priceIndicator === '$$$' ? 'Premium ($$$)' : selectedExp.priceIndicator === '$$' ? 'Mid-range ($$)' : 'Economy ($)'}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      navigate(`/planner?dest=${encodeURIComponent(selectedExp.location.split(',')[0])}`);
                      setSelectedExp(null);
                    }}
                    className="btn-primary py-3 px-6 shadow-md text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Configure Custom Route
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
