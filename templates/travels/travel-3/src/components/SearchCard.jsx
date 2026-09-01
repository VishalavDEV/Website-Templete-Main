import React, { useState } from 'react';
import { Search, MapPin, Calendar, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SearchCard() {
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');

  const destinationsList = [
    { value: 'kyoto', label: 'Kyoto, Japan' },
    { value: 'swiss-alps', label: 'Swiss Alps, Switzerland' },
    { value: 'amalfi-coast', label: 'Amalfi Coast, Italy' },
    { value: 'bali', label: 'Bali, Indonesia' },
    { value: 'cappadocia', label: 'Cappadocia, Turkey' },
    { value: 'serengeti', label: 'Serengeti, Tanzania' },
  ];

  const durationList = [
    { value: 'short', label: '3-5 Days' },
    { value: 'medium', label: '1 Week' },
    { value: 'long', label: '2 Weeks' },
    { value: 'extended', label: '2+ Weeks' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${keyword || 'Anywhere'} in ${destination || 'All Destinations'} for ${duration || 'Any Duration'}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto bg-white rounded-2xl md:rounded-full p-6 md:p-4 shadow-xl border border-slate-100 flex flex-col md:flex-row items-stretch md:items-center gap-4 relative z-20"
    >
      {/* Keyword Field */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100">
        <Compass className="w-5 h-5 text-primary shrink-0" />
        <div className="w-full">
          <label htmlFor="keyword-search" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Search Keyword</label>
          <input
            id="keyword-search"
            type="text"
            placeholder="e.g. Adventure, Relax, Food..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full text-sm font-semibold text-slate-700 bg-transparent border-none outline-none placeholder:text-slate-400 mt-0.5"
          />
        </div>
      </div>

      {/* Destination Dropdown */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100">
        <MapPin className="w-5 h-5 text-accent shrink-0" />
        <div className="w-full">
          <label htmlFor="destination-select" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Destination</label>
          <select
            id="destination-select"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full text-sm font-semibold text-slate-700 bg-transparent border-none outline-none mt-0.5 cursor-pointer"
          >
            <option value="">Where are you going?</option>
            {destinationsList.map(d => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Duration Dropdown */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2">
        <Calendar className="w-5 h-5 text-primary shrink-0" />
        <div className="w-full">
          <label htmlFor="duration-select" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Duration</label>
          <select
            id="duration-select"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full text-sm font-semibold text-slate-700 bg-transparent border-none outline-none mt-0.5 cursor-pointer"
          >
            <option value="">Choose Duration</option>
            {durationList.map(dur => (
              <option key={dur.value} value={dur.value}>{dur.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Circular Search Button */}
      <motion.button
        whileHover={{ scale: 1.08, backgroundColor: '#5849D6' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSearch}
        aria-label="Submit Search"
        className="bg-primary text-white h-14 md:h-12 w-full md:w-12 rounded-xl md:rounded-full flex items-center justify-center shadow-lg shadow-primary/20 shrink-0 cursor-pointer font-bold gap-2 md:gap-0"
      >
        <span className="md:hidden text-sm uppercase tracking-wider">Find Adventures</span>
        <Search className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
