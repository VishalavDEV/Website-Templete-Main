import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Search, Camera, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const photos = [
    { id: 1, title: "Eiffel sunset", cat: "Destinations", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", loc: "Paris, France" },
    { id: 2, title: "Lagoon Swing", cat: "Beaches", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", loc: "Bali, Indonesia" },
    { id: 3, title: "Matterhorn Peak", cat: "Mountains", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", loc: "Switzerland Alps" },
    { id: 4, title: "Marina Towers", cat: "Cities", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", loc: "Dubai, UAE" },
    { id: 5, title: "Jungle Elephant", cat: "Wildlife", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80", loc: "Kerala, India" },
    { id: 6, title: "Sushi Platter", cat: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", loc: "Tokyo, Japan" },
    { id: 7, title: "Ritz Suite", cat: "Hotels", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", loc: "Paris, France" },
    { id: 8, title: "Taj Mahal views", cat: "Destinations", img: "https://images.unsplash.com/photo-1477587458883-471a5cd08bc4?auto=format&fit=crop&w=600&q=80", loc: "Rajasthan, India" }
  ];

  const filteredPhotos = filter === 'All'
    ? photos
    : photos.filter(p => p.cat.toLowerCase() === filter.toLowerCase());

  // Offset rotation mapping to make the grid feel like a dynamic polaroid stack
  const getSkew = (id) => {
    const angles = [-1.5, 1, -2, 1.5, -1, 2, -1.5, 2];
    return angles[id % angles.length];
  };

  return (
    <div className="w-full min-h-screen pt-28 px-6 pb-20 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Wanderlust <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">Gallery</span>
        </h1>
        <p className="text-slate-400 text-sm">
          A dynamic portfolio of snapshots. Hover to tilt, zoom, and see coordinates.
        </p>
      </div>

      {/* Categories filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {['All', 'Destinations', 'Beaches', 'Mountains', 'Cities', 'Wildlife', 'Food', 'Hotels'].map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              filter === c 
                ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Offset skew grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
        <AnimatePresence>
          {filteredPhotos.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              style={{ rotate: `${getSkew(p.id)}deg` }}
              whileHover={{ rotate: '0deg', scale: 1.05, y: -4 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-lg group p-3"
            >
              {/* Polaroid Frame Container */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Pin details overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-[9px] text-slate-200 font-bold px-2 py-0.5 rounded-full flex items-center">
                    <MapPin className="w-3 h-3 mr-0.5 text-teal-400" />
                    {p.loc}
                  </span>
                  <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    <Camera className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Title under picture */}
              <div className="pt-3 px-1 text-center">
                <h4 className="font-extrabold text-xs text-slate-300 uppercase tracking-widest">{p.title}</h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
