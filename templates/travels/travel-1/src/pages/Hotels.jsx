import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Compass, Building, Check, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { MOCK_HOTELS } from '../data/travelData';

export default function Hotels() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState(MOCK_HOTELS);
  const [filterLocation, setFilterLocation] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/hotels')
      .then(res => setHotels(res.data))
      .catch(err => console.error("Error fetching hotels", err));
  }, []);

  const locations = ['All', 'Paris', 'Dubai', 'Maldives', 'Switzerland', 'Tokyo', 'London', 'India'];

  const filteredHotels = filterLocation === 'All'
    ? hotels
    : hotels.filter(h => {
        if (filterLocation === 'India') {
          return h.location.toLowerCase().includes('india');
        }
        return h.location.toLowerCase().includes(filterLocation.toLowerCase());
      });

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">Hotels & Resorts</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Book handpicked luxury resorts, private villas, and premium suites with world-class amenities.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {locations.map(loc => (
          <button
            key={loc}
            onClick={() => setFilterLocation(loc)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              filterLocation === loc 
                ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Grid of Hotels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredHotels.map((hotel, idx) => {
          const isHovered = hoveredCard === hotel.id;
          return (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredCard(hotel.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(`/hotels/${hotel.id}`)}
              className="relative glass-panel rounded-3xl overflow-hidden cursor-pointer group border border-slate-800 shadow-md flex flex-col justify-between"
            >
              {/* Hotel Image with "Door Opening" hover animation */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Left/Right "Door" sliding overlay on hover */}
                <div className="absolute inset-0 z-10 pointer-events-none flex">
                  <div className={`w-1/2 h-full bg-slate-950/60 border-r border-slate-800/40 transition-transform duration-500 ease-in-out origin-left ${isHovered ? 'scale-x-0' : 'scale-x-100'}`} />
                  <div className={`w-1/2 h-full bg-slate-950/60 border-l border-slate-800/40 transition-transform duration-500 ease-in-out origin-right ${isHovered ? 'scale-x-0' : 'scale-x-100'}`} />
                </div>

                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent z-10" />

                {/* Floating star sparks on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <div className="absolute inset-0 z-20 pointer-events-none flex justify-around items-center px-6">
                      {[1, 2, 3].map((s) => (
                        <motion.div
                          key={s}
                          initial={{ y: 20, opacity: 0, scale: 0 }}
                          animate={{ y: -30, opacity: [0, 1, 0], scale: [0, 1.2, 0.8] }}
                          exit={{ opacity: 0 }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            delay: s * 0.3,
                            ease: 'easeOut'
                          }}
                          className="text-yellow-400"
                        >
                          <Star className="w-5 h-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                {/* Location pin */}
                <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[10px] text-slate-200 font-semibold px-2.5 py-1 rounded-full flex items-center z-20">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-teal-400" />
                  {hotel.location}
                </span>

                {/* Rating */}
                <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-[10px] text-amber-400 font-bold px-2.5 py-1 rounded-full flex items-center z-20">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {hotel.rating}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {hotel.name}
                  </h3>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities.slice(0, 2).map((am, i) => (
                      <span key={i} className="text-[9px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-slate-500 block">Starting Price</span>
                    <span className="text-sm font-black text-teal-400">${hotel.price} <span className="text-[10px] font-normal text-slate-500">/ night</span></span>
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center">
                    Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredHotels.length === 0 && (
        <div className="text-center py-20 text-slate-500 space-y-2">
          <Building className="w-12 h-12 text-slate-700 mx-auto animate-pulse" />
          <p className="text-sm">No hotels found matching your search filters.</p>
        </div>
      )}
    </div>
  );
}
