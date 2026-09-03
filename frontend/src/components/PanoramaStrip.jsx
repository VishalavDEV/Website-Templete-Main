import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';

const STRIP_IMAGES = [
  {
    id: 'strip-1',
    title: 'Alpine Peak Glow',
    location: 'Swiss Alps',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'strip-2',
    title: 'Red Rock Canyon',
    location: 'Utah, USA',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'strip-3',
    title: 'Venetian Sunset Alleys',
    location: 'Venice, Italy',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'strip-4',
    title: 'Spring Flora Harmony',
    location: 'Kyoto, Japan',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'strip-5',
    title: 'Mist Canopy Highlands',
    location: 'Black Forest',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'strip-6',
    title: 'Emerald Coastline Solitude',
    location: 'Amalfi, Italy',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=85',
  }
];

export default function PanoramaStrip({ onOpenLightbox }) {
  return (
    <section id="strip" className="relative w-full py-16 bg-[#0a0a0a] overflow-hidden scroll-mt-16 border-t border-white/5">
      
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#e74c3c] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Panoramic Strip</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5" style={{ fontFamily: 'var(--font-heading)' }}>
            Continuous Horizon Gallery
          </h3>
        </div>
        <div className="text-xs text-gray-400 hidden sm:block">
          Scroll / Hover over tiles to expand
        </div>
      </div>

      {/* Panorama Strip Scroll Container */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-4 sm:px-8 scrollbar-thin scrollbar-thumb-white/20">
        {STRIP_IMAGES.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item, STRIP_IMAGES)}
            className="group relative flex-shrink-0 w-72 sm:w-96 h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-[#e74c3c]/50"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#e74c3c] uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded">
                  {item.location}
                </span>
                <h4 className="text-base font-bold text-white mt-1 group-hover:text-[#e74c3c] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h4>
              </div>

              <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-[#e74c3c] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
