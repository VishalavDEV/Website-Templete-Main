import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [isDateFocused, setIsDateFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for trips in ${location || 'anywhere'} on ${date || 'any date'}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-panel p-4 md:p-3 rounded-[32px] md:rounded-full w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-2 shadow-2xl border border-white/10"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      {/* Location Input */}
      <motion.div
        className={`flex-1 w-full flex items-center gap-3 px-6 py-3 rounded-2xl md:rounded-full transition-all duration-300 ${
          isLocationFocused ? 'bg-white/10 ring-2 ring-brand-coral/50' : 'bg-transparent'
        }`}
        animate={{ scale: isLocationFocused ? 1.02 : 1 }}
      >
        <MapPin className="w-6 h-6 text-brand-coral shrink-0" />
        <div className="flex-1 flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Location</span>
          <input
            type="text"
            placeholder="Where to? (e.g. Kyoto, Bali)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setIsLocationFocused(true)}
            onBlur={() => setIsLocationFocused(false)}
            className="bg-transparent border-none outline-none text-white placeholder-white/40 text-sm font-semibold w-full focus:ring-0 p-0"
          />
        </div>
      </motion.div>

      {/* Divider */}
      <div className="hidden md:block w-[1px] h-10 bg-white/10 self-center" />

      {/* Date Input */}
      <motion.div
        className={`flex-1 w-full flex items-center gap-3 px-6 py-3 rounded-2xl md:rounded-full transition-all duration-300 ${
          isDateFocused ? 'bg-white/10 ring-2 ring-brand-orange/50' : 'bg-transparent'
        }`}
        animate={{ scale: isDateFocused ? 1.02 : 1 }}
      >
        <Calendar className="w-6 h-6 text-brand-orange shrink-0" />
        <div className="flex-1 flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => setIsDateFocused(true)}
            onBlur={() => setIsDateFocused(false)}
            className="bg-transparent border-none outline-none text-white placeholder-white/40 text-sm font-semibold w-full focus:ring-0 p-0 [color-scheme:dark]"
          />
        </div>
      </motion.div>

      {/* Search Button */}
      <div className="w-full md:w-auto flex justify-end shrink-0">
        <motion.button
          type="submit"
          className="w-full md:w-14 md:h-14 py-4 md:py-0 rounded-2xl md:rounded-full bg-gradient-to-r from-brand-coral to-brand-orange text-white flex items-center justify-center shadow-lg hover:shadow-brand-orange/30 focus:outline-none cursor-pointer"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(247, 148, 29, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: ["0 0 0px rgba(242, 84, 91, 0)", "0 0 12px rgba(242, 84, 91, 0.3)", "0 0 0px rgba(242, 84, 91, 0)"]
          }}
          transition={{
            boxShadow: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
        >
          <Search className="w-5 h-5 shrink-0 hidden md:block" />
          <span className="md:hidden font-bold tracking-wider uppercase text-sm">Search Destinations</span>
        </motion.button>
      </div>
    </motion.form>
  );
}
