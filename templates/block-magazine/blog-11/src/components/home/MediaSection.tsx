import React, { useState } from 'react';
import { Play, X, Film, Volume2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const MEDIA_CARDS = [
  {
    id: 'vid-01',
    title: 'Autonomous Swarms Harvesting Wheat at Sunset',
    duration: '03:42',
    category: 'ROBOTICS FIELDWORK',
    image: '/images/ai_robotic_field.jpg',
    description: 'Cinematic 4K footage of 6 electric autonomous combines operating synchronously without human cab drivers.'
  },
  {
    id: 'vid-02',
    title: 'Micro-Drones Pollinating Almond Orchards',
    duration: '02:15',
    category: 'MICRO-BOTS',
    image: '/images/ai_drone_pollination.jpg',
    description: 'High-speed camera capturing micro-quadcopters transferring pollen grains using soft silicone wands.'
  },
  {
    id: 'vid-03',
    title: 'AI Lab: Sequencing Heat-Resilient Soybean Genetics',
    duration: '04:10',
    category: 'GENOMICS DOCUMENTARY',
    image: '/images/ai_vertical_farm.jpg',
    description: 'Inside the bio-informatic labs engineering CRISPR gene edits for crops thriving in extreme weather.'
  }
];

export const MediaSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<typeof MEDIA_CARDS[0] | null>(null);

  return (
    <section className="py-20 bg-theme-primary border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="CINEMATIC MEDIA"
          title="SEE THE FUTURE"
          subtitle="Watch high-definition documentary shorts highlighting real-world agrotech deployments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MEDIA_CARDS.map(card => (
            <div
              key={card.id}
              onClick={() => setActiveVideo(card)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-theme-surface border border-neutral-200 dark:border-neutral-800 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden block">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  hoverZoom
                  className="w-full h-full object-cover block"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-emerald-600/90 text-forest-900 dark:text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-black/85 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono-tech text-white font-bold">
                  {card.duration}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-emerald-800 dark:text-emerald-400 font-bold">
                  {card.category}
                </span>
                <h3 className="text-base sm:text-lg font-serif-editorial font-bold text-theme-primary line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-theme-secondary line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal Simulator */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
            <div className="max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
              <div className="p-3.5 sm:p-4 border-b border-neutral-800 flex items-center justify-between text-white shrink-0">
                <span className="text-[10px] sm:text-xs font-mono-tech text-emerald-400 flex items-center gap-2 font-bold line-clamp-1">
                  <Film className="w-4 h-4 shrink-0" /> AGROTECH REEL — {activeVideo.category}
                </span>
                <button onClick={() => setActiveVideo(null)} className="text-neutral-400 hover:text-white p-1">
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-80 block"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-black/50 text-white space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-600/90 flex items-center justify-center animate-pulse">
                    <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif-editorial font-bold max-w-xl text-white">
                    {activeVideo.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-mono-tech text-neutral-300">
                    [SIMULATED 4K EDITORIAL REEL] — 60 FPS
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 text-white text-[11px] sm:text-xs font-mono-tech flex justify-between items-center bg-neutral-950 shrink-0">
                <span>DURATION: {activeVideo.duration}</span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold"
                >
                  CLOSE PLAYER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
