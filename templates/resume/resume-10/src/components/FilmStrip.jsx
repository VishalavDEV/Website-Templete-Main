import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { filmStripFrames } from '../data/directorData';
import { Film, ChevronLeft, ChevronRight, Sliders } from 'lucide-react';

const FilmStrip = () => {
  const scrollRef = useRef(null);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = 320; // width of each frame card
    const index = Math.round(scrollPosition / itemWidth);
    if (index >= 0 && index < filmStripFrames.length) {
      setActiveFrameIndex(index);
    }
  };

  const scrollToFrame = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = direction === 'next' ? 340 : -340;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="film-strip" className="py-24 bg-neutral-900 text-white overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-meta text-xs tracking-[0.3em] text-amber-400 uppercase block mb-2">
              INTERACTIVE CHRONOLOGY
            </span>
            <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-white uppercase tracking-tight">
              FRAME BY FRAME
            </h2>
            <div className="w-16 h-[1.5px] bg-amber-400 mt-4" />
          </div>

          <div className="flex items-center gap-6">
            {/* Frame Counter Display */}
            <div className="font-mono-meta text-sm tracking-widest text-neutral-300 bg-neutral-950 px-4 py-2 border border-neutral-800">
              <span className="text-amber-400 font-bold">{filmStripFrames[activeFrameIndex].frameId}</span>
              <span className="text-neutral-500"> / {filmStripFrames[activeFrameIndex].total}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToFrame('prev')}
                className="p-3 bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-400 transition-colors"
                aria-label="Previous Frame"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToFrame('next')}
                className="p-3 bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-400 transition-colors"
                aria-label="Next Frame"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL FILM STRIP CAROUSEL WITH FILM SPROCKET HOLES */}
      <div className="relative py-8 bg-neutral-950/80 border-y border-neutral-800">
        
        {/* Top Film Sprocket Hole Track */}
        <div className="flex gap-4 px-4 overflow-hidden mb-4 opacity-40 select-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-neutral-800 rounded-xs shrink-0" />
          ))}
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center gap-8 px-6 sm:px-12 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing py-4"
        >
          {filmStripFrames.map((frame, index) => {
            const isActive = activeFrameIndex === index;
            return (
              <motion.div
                key={frame.frameId}
                onClick={() => setActiveFrameIndex(index)}
                className={`relative shrink-0 w-[300px] sm:w-[360px] border transition-all duration-500 bg-neutral-900 ${
                  isActive
                    ? 'border-amber-400 scale-105 shadow-2xl shadow-amber-500/10 z-10'
                    : 'border-neutral-800 opacity-65 hover:opacity-100 scale-98'
                }`}
              >
                {/* Frame Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-black">
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono-meta tracking-widest text-amber-400 border border-white/10">
                    {frame.frameId}
                  </div>
                </div>

                {/* Frame Details */}
                <div className="p-5 border-t border-neutral-800 font-mono-meta text-xs">
                  <div className="flex items-center justify-between text-neutral-400 text-[10px] tracking-widest mb-1 uppercase">
                    <span>{frame.film}</span>
                    <span>{frame.year}</span>
                  </div>
                  <h4 className="font-serif-title text-xl font-normal text-white uppercase mb-2">
                    {frame.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                    {frame.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Film Sprocket Hole Track */}
        <div className="flex gap-4 px-4 overflow-hidden mt-4 opacity-40 select-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-neutral-800 rounded-xs shrink-0" />
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-right font-mono-meta text-[10px] text-neutral-500 uppercase tracking-widest">
        SWIPE OR DRAG HORIZONTALLY TO EXPLORE SCENE CHRONOLOGY
      </div>
    </section>
  );
};

export default FilmStrip;
