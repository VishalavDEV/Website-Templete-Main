import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Compass, Tag, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { MOCK_TOURS } from '../data/travelData';

export default function Tours() {
  const navigate = useNavigate();
  const [tours, setTours] = useState(MOCK_TOURS);
  const [selectedMode, setSelectedMode] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:8080/api/tours')
      .then(res => setTours(res.data))
      .catch(err => console.error("Error fetching tours", err));
  }, []);

  const filteredTours = selectedMode === 'All'
    ? tours
    : tours.filter(t => t.travelMode.toLowerCase() === selectedMode.toLowerCase());

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Vacation <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Tours</span>
        </h1>
        <p className="text-slate-600 text-sm">
          Browse our action-packed, multi-day vacation packages matching your favorite travel mode.
        </p>
      </div>

      {/* Mode Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {['All', 'Car', 'Train', 'Aeroplane', 'Ship'].map(mode => (
          <button
            key={mode}
            onClick={() => setSelectedMode(mode)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-colors ${
              selectedMode === mode 
                ? 'bg-indigo-500/20 border-indigo-500 text-indigo-650' 
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-indigo-600 hover:bg-slate-200'
            }`}
          >
            {mode === 'Aeroplane' ? 'Flight' : mode}
          </button>
        ))}
      </div>

      {/* Grid of Tours with Viewport Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTours.map((tour, idx) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -8 }}
            className="glass-panel rounded-3xl overflow-hidden cursor-pointer group border border-slate-200 shadow-md flex flex-col justify-between"
            onClick={() => navigate(`/tours/${tour.id}`)}
          >
            {/* Header image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[10px] text-slate-200 font-bold px-2.5 py-1 rounded-full flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-teal-400" />
                {tour.destination}
              </span>

              <span className="absolute bottom-3 right-3 bg-indigo-500/80 text-[10px] text-white font-bold px-2 py-0.5 rounded-md">
                By {tour.travelMode}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {tour.name}
                </h3>
                
                {/* Activities summary */}
                <div className="flex flex-wrap gap-1">
                  {tour.activities.slice(0, 2).map((act, i) => (
                    <span key={i} className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-slate-500 block">Duration</span>
                  <span className="text-xs text-slate-700 font-bold flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                    {tour.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-slate-500 block">Price</span>
                  <span className="text-sm font-black text-slate-800">${tour.price}</span>
                </div>
              </div>

              {/* Book button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/booking?tourId=${tour.id}`);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:text-indigo-600 hover:border-slate-300 hover:bg-slate-200 transition-colors"
              >
                Book Package
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTours.length === 0 && (
        <div className="text-center py-20 text-slate-500 space-y-2">
          <Compass className="w-12 h-12 text-slate-700 mx-auto animate-spin" />
          <p className="text-sm">No vacation packages found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
