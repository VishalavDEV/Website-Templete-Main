import React from 'react';
import { motion } from 'framer-motion';

export default function Destinations() {
  const items = [
    {
      id: 1,
      title: 'Amalfi Coast, Italy',
      category: 'Mediterranean Cruise',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Lauterbrunnen, Switzerland',
      category: 'Alpine Seclusion',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Kyoto, Japan',
      category: 'Zen Sanctuary',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section id="experience" className="py-32 md:py-40 bg-[#0A0E14] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-20">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-slate-400">
            - Curated Destinations -
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white uppercase tracking-wider">
            Bespoke Experiences
          </h2>
        </div>

        {/* Overlapping/Staggered Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="bg-[#0e141c] rounded-3xl overflow-hidden border border-white/5 shadow-lg group cursor-pointer flex flex-col justify-between h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Details */}
              <div className="p-6 text-center space-y-2">
                <span className="block text-[8px] font-sans font-medium text-slate-500 uppercase tracking-widest">
                  {dest.category}
                </span>
                <h3 className="font-serif font-light text-xl text-white group-hover:text-slate-200 transition-colors">
                  {dest.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
