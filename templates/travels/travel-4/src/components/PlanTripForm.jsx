import React, { useState } from 'react';
import { MapPin, Calendar, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlanTripForm() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [tripType, setTripType] = useState('adventure');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${destination || 'Anywhere'} | Dates: ${dates || 'Flexible'} | Type: ${tripType}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <Compass className="w-5 h-5 text-accent" />
        <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-800">
          Plan Your Trip
        </h3>
      </div>
      
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Destination input */}
        <div className="space-y-1">
          <label htmlFor="destination-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="destination-input"
              type="text"
              required
              placeholder="e.g. Kyoto, Japan"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Travel Dates */}
        <div className="space-y-1">
          <label htmlFor="dates-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Travel Dates</label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="dates-input"
              type="text"
              placeholder="e.g. Oct 12 - Oct 20"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Trip Type Dropdown */}
        <div className="sm:col-span-2 space-y-1">
          <label htmlFor="trip-type-select" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Trip Type</label>
          <select
            id="trip-type-select"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all duration-200 cursor-pointer"
          >
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
            <option value="family">Family</option>
            <option value="honeymoon">Honeymoon</option>
          </select>
        </div>

        {/* Submit button */}
        <div className="sm:col-span-2 pt-2">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#D05C12' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-accent text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-accent/10 transition-colors"
          >
            <span>Search Trips</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </form>
    </div>
  );
}
