import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorldMap() {
  const [hoveredPin, setHoveredPin] = useState(null);

  const pins = [
    {
      id: 'banff',
      name: 'Banff National Park, Canada',
      description: 'Stunning glacial lakes, alpine hikes, and thick coniferous forests in the Canadian Rockies.',
      x: '20%',
      y: '35%',
      trips: '3 Stories'
    },
    {
      id: 'machu-picchu',
      name: 'Machu Picchu, Peru',
      description: 'Lost Incan citadel set high in the Andes mountains, surrounded by misty cloud forests.',
      x: '32%',
      y: '68%',
      trips: '2 Stories'
    },
    {
      id: 'swiss-alps',
      name: 'Lauterbrunnen, Switzerland',
      description: 'Stunning alpine valley with 72 waterfalls, towering peaks, and traditional wooden chalets.',
      x: '48%',
      y: '38%',
      trips: '5 Stories'
    },
    {
      id: 'serengeti',
      name: 'Serengeti Safari, Tanzania',
      description: 'Untamed grasslands hosting the annual Great Migration of wildebeest and predators.',
      x: '54%',
      y: '62%',
      trips: '4 Stories'
    },
    {
      id: 'kyoto',
      name: 'Kyoto, Japan',
      description: 'Historical temples, bamboo forests, traditional tea houses, and cherry blossom gardens.',
      x: '78%',
      y: '42%',
      trips: '6 Stories'
    },
    {
      id: 'great-barrier',
      name: 'Great Barrier Reef, Australia',
      description: 'World\'s largest coral reef ecosystem, teeming with marine biodiversity and crystal waters.',
      x: '84%',
      y: '76%',
      trips: '3 Stories'
    }
  ];

  return (
    <section id="map" className="py-24 md:py-32 bg-[#0D1B2A] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            Interactive Logbook
            <span className="w-8 h-[2px] bg-accent" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight uppercase">
            Where We Have <br />
            Traveled
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
            Hover over our map pins to explore stories, packing guides, and photo journals from our favorite destinations around the world.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[2/1] bg-[#09111C] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl p-4">
          
          {/* Background Stylized Dot Grid World Map Grid */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-slate-300">
              {/* Simplified world map SVG path grid */}
              <path d="M150,150 Q180,120 220,130 T280,180 T350,150 T400,120 T480,150 T550,180 T630,160 T700,130 T780,150 T850,160 T920,200 L950,220 L980,300 L900,320 L840,400 L800,430 L850,480 L880,480 L800,400 L760,380 L680,420 L620,380 L580,330 L550,380 L480,350 L420,380 L350,300 L320,350 L280,380 L220,420 L180,350 L150,280 Z" className="fill-slate-800" />
              <path d="M500,200 L550,250 L600,280 L550,300 L500,280 Z" className="fill-slate-800" />
            </svg>
          </div>

          {/* Interactive Pins */}
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute"
              style={{ left: pin.x, top: pin.y }}
              onMouseEnter={() => setHoveredPin(pin.id)}
              onMouseLeave={() => setHoveredPin(null)}
            >
              <div className="relative flex items-center justify-center cursor-pointer">
                {/* Continuous Pulse Loop Ring */}
                <motion.div
                  animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute w-5 h-5 rounded-full bg-accent pointer-events-none"
                />
                
                {/* Pin Dot */}
                <motion.div 
                  whileHover={{ scale: 1.25 }}
                  className="w-3 h-3 rounded-full bg-accent border-2 border-white shadow-md relative z-10 flex items-center justify-center"
                >
                  <MapPin className="w-2.5 h-2.5 text-white hidden" />
                </motion.div>

                {/* Tooltip Overlay */}
                <AnimatePresence>
                  {hoveredPin === pin.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-6 w-[240px] bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl z-20 pointer-events-none flex flex-col gap-2 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{pin.trips}</span>
                        <Info className="w-3 h-3 text-slate-500" />
                      </div>
                      <h4 className="font-display font-extrabold text-sm text-white">{pin.name}</h4>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{pin.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
