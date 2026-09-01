import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstagramStrip() {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' },
    { id: 3, url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80' },
    { id: 4, url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80' },
    { id: 5, url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' },
    { id: 6, url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section id="gallery" className="py-0 overflow-hidden bg-slate-50 border-t border-b border-slate-100">
      <div className="grid grid-cols-3 sm:grid-cols-6">
        {images.map((img, index) => (
          <motion.a
            key={img.id}
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="relative aspect-square overflow-hidden group cursor-pointer block"
          >
            <img
              src={img.url}
              alt={`Instagram post photo grid index ${img.id}`}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
            {/* Hover overlay with Instagram icon */}
            <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <Instagram className="w-6 h-6 animate-pulse" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
