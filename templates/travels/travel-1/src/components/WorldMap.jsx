import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, MapPin, Compass, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MOCK_DESTINATIONS } from '../data/travelData';

export default function WorldMap() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState(MOCK_DESTINATIONS);
  const [selectedDest, setSelectedDest] = useState(MOCK_DESTINATIONS[1]);
  const [origin] = useState({ name: 'Chennai', x: 620, y: 260 }); // map coords in 1000x500 grid
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/destinations')
      .then(res => {
        setDestinations(res.data);
        // Default select Dubai (id 2)
        if (res.data.length > 1) {
          setSelectedDest(res.data[1]);
        }
      })
      .catch(err => console.error("Error fetching destinations for map", err));
  }, []);

  const getBezierPath = (startX, startY, endX, endY) => {
    // Control point bends upwards
    const controlX = (startX + endX) / 2;
    const controlY = Math.min(startY, endY) - 120;
    return `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
  };

  return (
    <div className="glass-panel rounded-3xl p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* SVG World Map Column */}
        <div className="lg:col-span-2 relative bg-slate-950/90 rounded-2xl p-2 border border-slate-900 overflow-hidden shadow-inner dark-section">
          {/* Cyber grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:25px_25px] opacity-20 pointer-events-none" />
          
          <svg viewBox="0 0 1000 500" className="w-full h-auto text-slate-700 select-none">
            {/* SVG Definitions for Gradients */}
            <defs>
              <linearGradient id="cyber-continent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#0f172a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#115e59" stopOpacity="0.45" />
              </linearGradient>
            </defs>

            {/* Latitude / Longitude Fine Dotted Lines Grid */}
            <g stroke="rgba(148, 163, 184, 0.04)" strokeWidth="1" strokeDasharray="3 3">
              {/* Vertical longitude lines */}
              <line x1="100" y1="0" x2="100" y2="500" />
              <line x1="200" y1="0" x2="200" y2="500" />
              <line x1="300" y1="0" x2="300" y2="500" />
              <line x1="400" y1="0" x2="400" y2="500" />
              <line x1="500" y1="0" x2="500" y2="500" />
              <line x1="600" y1="0" x2="600" y2="500" />
              <line x1="700" y1="0" x2="700" y2="500" />
              <line x1="800" y1="0" x2="800" y2="500" />
              <line x1="900" y1="0" x2="900" y2="500" />
              {/* Horizontal latitude lines */}
              <line x1="0" y1="100" x2="1000" y2="100" />
              <line x1="0" y1="200" x2="1000" y2="200" />
              <line x1="0" y1="300" x2="1000" y2="300" />
              <line x1="0" y1="400" x2="1000" y2="400" />
            </g>

            {/* Futuristic Scanning Radar beam */}
            <line 
              x1="500" y1="250" x2="1000" y2="250" 
              stroke="rgba(45, 212, 191, 0.04)" 
              strokeWidth="3.5" 
              transform-origin="500 250" 
              className="animate-spin" 
              style={{ animationDuration: '24s' }} 
            />

            {/* Radar scan circular coordinate rings */}
            <circle cx="500" cy="250" r="150" fill="none" stroke="rgba(148, 163, 184, 0.02)" strokeWidth="1" />
            <circle cx="500" cy="250" r="300" fill="none" stroke="rgba(148, 163, 184, 0.02)" strokeWidth="1" />

            {/* World Coordinates HUD Details */}
            <text x="30" y="40" fill="rgba(148, 163, 184, 0.15)" className="text-[9px] font-mono select-none">SYS.NAV_GRID_v2.0</text>
            <text x="30" y="55" fill="rgba(45, 212, 191, 0.1)" className="text-[8px] font-mono select-none">LAT: 13.0827 N | LON: 80.2707 E</text>
            <text x="860" y="470" fill="rgba(148, 163, 184, 0.15)" className="text-[9px] font-mono select-none text-right">COORD_TRACK_ACTIVE</text>

            {/* 1. Futuristic Detailed Continents Outline */}
            {/* North America */}
            <path 
              d="M 50,80 C 120,60 180,90 220,60 C 250,90 280,120 270,160 C 290,170 280,200 250,210 C 220,200 210,230 180,240 C 160,220 130,240 110,260 C 90,220 70,240 50,200 C 40,180 35,140 50,80 Z" 
              fill="url(#cyber-continent-grad)" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="1.5" 
            />
            {/* South America */}
            <path 
              d="M 180,240 C 200,240 230,250 240,280 C 260,300 270,330 280,360 C 270,390 250,420 230,460 C 210,480 190,470 190,440 C 180,410 170,380 170,340 C 160,310 150,280 180,240 Z" 
              fill="url(#cyber-continent-grad)" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="1.5" 
            />
            {/* Africa */}
            <path 
              d="M 430,200 C 470,180 520,170 550,190 C 570,220 590,250 580,290 C 560,320 550,350 520,380 C 500,410 480,420 470,390 C 460,360 450,330 430,300 C 410,270 410,230 430,200 Z" 
              fill="url(#cyber-continent-grad)" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="1.5" 
            />
            {/* Eurasia */}
            <path 
              d="M 380,50 C 420,30 500,20 580,30 C 650,20 750,30 850,50 C 900,60 950,100 920,140 C 890,160 850,150 820,180 C 800,210 830,240 850,260 C 840,280 800,280 770,260 C 740,240 720,260 700,250 C 670,230 650,250 630,270 C 620,290 600,280 590,260 C 580,240 560,240 550,220 C 530,210 500,230 480,220 C 450,210 440,160 420,150 C 400,140 370,120 380,50 Z" 
              fill="url(#cyber-continent-grad)" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="1.5" 
            />
            {/* Australia */}
            <path 
              d="M 760,340 C 780,330 810,320 830,330 C 850,340 860,370 850,390 C 840,410 810,420 780,410 C 760,400 750,370 760,340 Z" 
              fill="url(#cyber-continent-grad)" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="1.5" 
            />

            {/* 2. Origin Pin (Chennai, India) */}
            <circle cx={origin.x} cy={origin.y} r="6" className="fill-teal-400 animate-ping opacity-75" />
            <circle cx={origin.x} cy={origin.y} r="4" className="fill-teal-400" />
            <text x={origin.x - 10} y={origin.y - 12} className="fill-teal-300 text-[10px] font-bold tracking-wider">Origin</text>

            {/* 3. Destination Flight Path Route Curve & Airplane */}
            {selectedDest && (
              <>
                {/* Dotted curve background */}
                <path
                  id="flight-path-curve"
                  d={getBezierPath(origin.x, origin.y, selectedDest.mapX * 10, selectedDest.mapY * 10)}
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.3)"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                />

                {/* Draw solid glowing overlay path */}
                <motion.path
                  d={getBezierPath(origin.x, origin.y, selectedDest.mapX * 10, selectedDest.mapY * 10)}
                  fill="none"
                  stroke="rgba(45, 212, 191, 0.7)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Flying Plane along the Bezier curve */}
                <g>
                  <path
                    d="M-6,-6 L6,0 L-6,6 L-3,0 Z"
                    fill="#2dd4bf"
                    className="drop-shadow-[0_0_8px_rgba(45,212,191,0.9)]"
                  >
                    <animateMotion
                      dur="3.2s"
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href="#flight-path-curve" />
                    </animateMotion>
                  </path>
                </g>
              </>
            )}

            {/* 4. Destination Pulsing Dots */}
            {destinations.map((dest) => {
              const dx = dest.mapX * 10;
              const dy = dest.mapY * 10;
              const isSelected = selectedDest && selectedDest.id === dest.id;

              return (
                <g 
                  key={dest.id} 
                  className="cursor-pointer"
                  onClick={() => setSelectedDest(dest)}
                >
                  {/* Outer Pulsing Aura */}
                  <circle 
                    cx={dx} 
                    cy={dy} 
                    r={isSelected ? 10 : 7} 
                    className={`${isSelected ? 'fill-indigo-500/40' : 'fill-slate-500/20'} animate-ping`}
                  />
                  {/* Inner Glowing Core */}
                  <circle 
                    cx={dx} 
                    cy={dy} 
                    r={isSelected ? 5 : 4} 
                    className={`transition-colors duration-300 ${isSelected ? 'fill-indigo-400' : 'fill-slate-400 hover:fill-indigo-300'}`}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Destination Details Panel */}
        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {selectedDest ? (
              <motion.div
                key={selectedDest.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="relative rounded-2xl overflow-hidden h-40">
                  <img 
                    src={selectedDest.image} 
                    alt={selectedDest.name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute bottom-3 left-3 bg-indigo-500/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedDest.country}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-slate-800 tracking-wide">{selectedDest.name}</h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">{selectedDest.description}</p>
                </div>

                {/* Travel route telemetry */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Flight Time</p>
                      <p className="text-xs font-bold text-slate-850">
                        {Math.abs(Math.floor((selectedDest.mapX - 62) * 0.25)) + 2} Hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-600">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Est. Cost</p>
                      <p className="text-xs font-bold text-slate-850">${selectedDest.averagePrice}</p>
                    </div>
                  </div>
                </div>

                {/* Popular Attractions list */}
                <div>
                  <h4 className="text-xs font-bold text-indigo-650 uppercase tracking-widest mb-2">Must Visit Places</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDest.attractions.map((att, idx) => (
                      <span key={idx} className="bg-slate-100 border border-slate-200 text-[10px] text-slate-700 px-2.5 py-1 rounded-md">
                        {att}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore button */}
                <button
                  onClick={() => navigate(`/destinations/${selectedDest.id}`)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                >
                  <span>Explore Packages</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500">
                <span>Select a coordinate on map to check travel routes</span>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
