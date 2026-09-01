import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, MapPin, DollarSign, ArrowRight } from 'lucide-react';

export default function WorldMap() {
  const navigate = useNavigate();
  const [selectedDest, setSelectedDest] = useState(null);
  const [origin, setOrigin] = useState({ x: 230, y: 150 }); // Default USA/NY

  const destinations = [
    { id: 'usa', name: 'USA', country: 'United States', x: 230, y: 150, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=300&q=80', price: 1900, desc: 'Central Park walks, Broadway shows, and the city skyline of New York.' },
    { id: 'france', name: 'France', country: 'France', x: 380, y: 125, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80', price: 1500, desc: 'Eiffel views, Louvre museums, Seine River cruises, and romantic cafes.' },
    { id: 'switzerland', name: 'Switzerland', country: 'Switzerland', x: 395, y: 132, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80', price: 2200, desc: 'High glacial peaks, skiing sloped trails, and wooden cabins in the Swiss Alps.' },
    { id: 'italy', name: 'Italy', country: 'Italy', x: 405, y: 145, image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300&q=80', price: 1600, desc: 'Colosseum walks, Venice canals, historical squares, and Italian food treks.' },
    { id: 'india', name: 'India', country: 'India', x: 520, y: 185, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80', price: 750, desc: 'Sailing backwaters of Kerala and exploring sandstone palaces in Rajasthan.' },
    { id: 'indonesia', name: 'Indonesia', country: 'Indonesia', x: 590, y: 245, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80', price: 900, desc: 'Volcano treks, tiered rice paddies, and Uluwatu cliff sunset dances.' },
    { id: 'japan', name: 'Japan', country: 'Japan', x: 670, y: 145, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80', price: 1800, desc: 'Ultra-modern neon towers combined with ancient shrines and cherry trees.' },
    { id: 'australia', name: 'Australia', country: 'Australia', x: 690, y: 290, image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=300&q=80', price: 2100, desc: 'Surfing Sydney beaches, exploring coral reefs, and wild highway road trips.' }
  ];

  const handleSelect = (dest) => {
    if (selectedDest && selectedDest.id === dest.id) {
      setSelectedDest(null);
    } else {
      setOrigin(selectedDest ? { x: selectedDest.x, y: selectedDest.y } : { x: 230, y: 150 });
      setSelectedDest(dest);
    }
  };

  const getCurvePath = (x1, y1, x2, y2) => {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2 - 60; // offset upward for clean arc
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  };

  return (
    <div className="relative w-full bg-white border border-stone-200 rounded-3xl p-6 overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Map Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 z-10 relative">
        <div>
          <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest">Wanderly Coordinates</span>
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-stone-800 mt-1">
            Your Next Adventure Is Somewhere Here.
          </h2>
        </div>
        <div className="flex gap-2 text-xs text-stone-500 bg-stone-100 py-2 px-4 rounded-xl border border-stone-200">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff2a74] animate-pulse" /> Nodes
          </span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 border-t border-dashed border-[#0066ff]" /> Flight Paths
          </span>
        </div>
      </div>

      {/* SVG Canvas Map */}
      <div className="relative w-full overflow-x-auto select-none" data-cursor="compass">
        <div className="min-w-[800px] aspect-[800/400] relative">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* Outline World Map (Simplified Nodes) */}
            <g className="fill-slate-100 stroke-slate-200" strokeWidth="1">
              {/* North America */}
              <path d="M 80,80 L 150,80 L 250,110 L 260,180 L 180,220 L 140,180 L 70,160 Z" />
              {/* South America */}
              <path d="M 230,230 L 270,250 L 310,310 L 290,380 L 250,380 L 210,280 Z" />
              {/* Europe & Asia */}
              <path d="M 330,100 L 450,80 L 650,80 L 730,120 L 750,190 L 680,240 L 590,260 L 530,220 L 460,250 L 360,200 L 340,140 Z" />
              {/* Africa */}
              <path d="M 370,210 L 430,210 L 490,250 L 470,330 L 420,350 L 380,270 Z" />
              {/* Australia */}
              <path d="M 640,290 L 720,295 L 700,360 L 630,340 Z" />
            </g>

            {/* Flight Path Arc */}
            {selectedDest && (
              <>
                <motion.path
                  d={getCurvePath(origin.x, origin.y, selectedDest.x, selectedDest.y)}
                  fill="none"
                  stroke="url(#mapRouteGradient)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />

                {/* Flying Airplane along path */}
                <motion.g
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  style={{
                    offsetPath: `path("${getCurvePath(origin.x, origin.y, selectedDest.x, selectedDest.y)}")`,
                    offsetRotate: 'auto 90deg',
                  }}
                >
                  <g>
                    <Plane size={18} className="text-[#ff2a74] transform -rotate-90 fill-[#ff2a74]" />
                  </g>
                </motion.g>
              </>
            )}

            {/* Gradients */}
            <defs>
              <linearGradient id="mapRouteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff2a74" />
                <stop offset="100%" stopColor="#0066ff" />
              </linearGradient>
            </defs>

            {/* Destination Hotspots */}
            {destinations.map((dest) => {
              const isSelected = selectedDest?.id === dest.id;
              return (
                <g
                  key={dest.id}
                  onClick={() => handleSelect(dest)}
                  className="cursor-pointer group"
                >
                  {/* Pulsing ring */}
                  <circle
                    cx={dest.x}
                    cy={dest.y}
                    r={isSelected ? 16 : 8}
                    className="fill-transparent stroke-[#ff2a74]/30"
                    strokeWidth="1.5"
                    style={{
                      transformOrigin: `${dest.x}px ${dest.y}px`,
                      animation: 'pulse-ring 2.2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite',
                    }}
                  />
                  
                  {/* Inner filled dot */}
                  <circle
                    cx={dest.x}
                    cy={dest.y}
                    r={isSelected ? 6 : 4}
                    className={`transition-all duration-300 ${
                      isSelected
                        ? 'fill-[#ff2a74] scale-110'
                        : 'fill-[#ff2a74]/80 group-hover:fill-[#ff2a74]'
                    }`}
                  />

                  {/* Text Label */}
                  <text
                    x={dest.x}
                    y={dest.y - 12}
                    textAnchor="middle"
                    className={`font-heading text-[10px] font-bold transition-all duration-300 ${
                      isSelected
                        ? 'fill-[#ff2a74] scale-105 font-extrabold'
                        : 'fill-stone-500 group-hover:fill-stone-800'
                    }`}
                  >
                    {dest.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Destination Details Overlay Card */}
        <AnimatePresence>
          {selectedDest && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 glass-card p-4 border border-stone-200/80 shadow-2xl z-30"
              data-cursor="route"
            >
              <div className="flex gap-4">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  className="w-20 h-20 object-cover rounded-xl border border-stone-100 shadow-sm"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#ff2a74] uppercase tracking-wide">
                      <MapPin size={10} />
                      <span>{selectedDest.country}</span>
                    </div>
                    <h3 className="font-heading font-bold text-stone-850 text-sm mt-0.5">
                      {selectedDest.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 leading-normal line-clamp-2 mt-1">
                      {selectedDest.desc}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-stone-100">
                    <span className="text-xs font-heading font-extrabold text-stone-800 flex items-center">
                      Est. Budget: <DollarSign size={12} className="ml-1 -mr-0.5" />{selectedDest.price}
                    </span>
                    <button
                      onClick={() => navigate(selectedDest.id === 'australia' || selectedDest.id === 'usa' || selectedDest.id === 'italy' ? '/destinations' : `/destinations/${selectedDest.id}`)}
                      className="flex items-center gap-1 bg-[#ff2a74] hover:opacity-90 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
