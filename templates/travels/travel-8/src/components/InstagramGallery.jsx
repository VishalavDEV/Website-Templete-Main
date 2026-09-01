import React from 'react';
import { motion } from 'framer-motion';

export default function InstagramGallery() {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=400&q=80',
      tilt: -6,
      delay: 0.1
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=400&q=80',
      tilt: 5,
      delay: 0.2
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      tilt: -3,
      delay: 0.3
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=400&q=80',
      tilt: 6,
      delay: 0.4
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-[#0A0E14] text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-slate-400">
            - Follow Us -
          </span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white uppercase tracking-wider">
            We are on Instagram
          </h2>
        </div>

        {/* Scattered Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto pt-8 select-none">
          {images.map((img) => (
            <motion.a
              key={img.id}
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 35, rotate: img.tilt }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: img.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                rotate: img.tilt * 0.2, 
                scale: 1.05, 
                z: 10,
                boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.05)'
              }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-pointer bg-slate-900 group"
            >
              <img
                src={img.url}
                alt={`Instagram gallery card index ${img.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* Social tag link */}
        <div className="pt-8">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-sans font-medium uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors"
          >
            @AETHER_YACHTS
          </a>
        </div>

      </div>
    </section>
  );
}
