import React, { useState } from 'react';
import { Tag, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrackBookingForm() {
  const [bookingRef, setBookingRef] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (bookingRef.trim()) {
      alert(`Checking booking status for reference: ${bookingRef}`);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <div>
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Tag className="w-5 h-5 text-primary" />
          <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-800">
            Track Your Booking
          </h3>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed mt-4 font-sans font-normal">
          Enter your 8-character alphanumeric booking reference to review itinerary updates, check flight details, or adjust hotel reservations.
        </p>
      </div>

      <form onSubmit={handleTrack} className="space-y-4 pt-2">
        <div className="space-y-1">
          <label htmlFor="ref-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Booking Reference</label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="ref-input"
              type="text"
              required
              placeholder="e.g. RM-8392-AX"
              value={bookingRef}
              onChange={(e) => setBookingRef(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary hover:bg-primary-light text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors"
        >
          <span>View Booking</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </form>
    </div>
  );
}
