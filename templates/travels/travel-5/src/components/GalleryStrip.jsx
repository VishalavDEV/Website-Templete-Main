import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function GalleryStrip() {
  const photos = [
    { id: 1, img: './assets/beach_surfing.jpg', likes: '1.2k', comments: 45, tag: '#surfMaui' },
    { id: 2, img: './assets/mountain_hiking.jpg', likes: '890', comments: 32, tag: '#wildSummit' },
    { id: 3, img: './assets/camping_stars.jpg', likes: '2.4k', comments: 110, tag: '#milkywayCamp' },
    { id: 4, img: './assets/tropical_lagoon.jpg', likes: '1.7k', comments: 54, tag: '#lagoonVibe' },
    { id: 5, img: './assets/mountain_hiking.jpg', likes: '950', comments: 28, tag: '#patagoniaW' },
    { id: 6, img: './assets/beach_surfing.jpg', likes: '3.1k', comments: 142, tag: '#waveRiders' }
  ];

  return (
    <section id="gallery" className="py-12 bg-charcoal scroll-mt-16">
      {/* Small Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <div>
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Social Coordinates
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold uppercase text-white mt-1">
            Wild Moments on Instagram
          </h2>
        </div>
        <a 
          href="#" 
          className="text-white/60 hover:text-accent-yellow text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10 hover:border-accent-yellow/30 px-4 py-2 rounded-full bg-white/5"
        >
          <InstagramIcon className="w-4 h-4 text-primary" />
          @RoamAndWild
        </a>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -4 }}
            className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-white/5 shadow-md"
          >
            {/* Image */}
            <img
              src={photo.img}
              alt="Gallery highlight"
              className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-secondary/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              
              {/* Top tag */}
              <span className="text-[10px] font-bold text-accent-yellow tracking-wider">
                {photo.tag}
              </span>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-2.5 rounded-full shadow-lg border border-white/15 scale-75 group-hover:scale-100 transition-transform duration-300">
                <Compass className="w-5 h-5 text-white animate-spin-slow" />
              </div>

              {/* Bottom Stats */}
              <div className="flex justify-between items-center text-xs font-semibold pt-12">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-current text-primary" />
                  {photo.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 text-accent-yellow" />
                  {photo.comments}
                </span>
              </div>

            </div>

            {/* Light Flare line */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
