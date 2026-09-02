import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  MapPin, 
  Maximize2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { galleryItems } from '../data/content';

export default function GalleryPortfolio({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Drone Tech', 'Harvest', 'Soil Science', 'Greenhouse', 'Fields'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5 text-forest-700" />
            <span>Field Dispatches & Visual Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight mb-4"
          >
            Living Proof Across <br />
            <span className="text-forest-700 italic">50,000+ Enrolled Acres</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-earth-700"
          >
            Explore real imagery from partner farms implementing autonomous biological agriculture across varied microclimates.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-forest-800 border border-forest-200 hover:bg-forest-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onOpenLightbox(item, index)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-forest-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-forest-950/80 text-wheat-300 text-xs font-bold backdrop-blur-md border border-forest-700/60">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-wheat-500/90 text-forest-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base font-bold font-display text-white leading-snug mb-1 group-hover:text-wheat-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-forest-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
