import React from 'react';
import { Compass, Sparkles, Footprints, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InterestsGrid() {
  const interests = [
    {
      id: 1,
      title: 'Forest Camping',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
      tag: 'Wilderness',
      icon: Flame
    },
    {
      id: 2,
      title: 'Mountain Hiking',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      tag: 'Altitude',
      icon: Footprints
    },
    {
      id: 3,
      title: 'Ocean Surfing',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      tag: 'Coastal',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'Desert Expeditions',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
      tag: 'Arid Trails',
      icon: Compass
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-slate-400 uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-slate-200" />
            Wander Areas
            <span className="w-8 h-[2px] bg-slate-200" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight leading-tight uppercase">
            Choose Your Interest
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            Sort through our travel catalog by activity type. We have logs ranging from low-altitude camping to high-altitude mountain climbing.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((int, index) => {
            const Icon = int.icon;
            return (
              <motion.div
                key={int.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}
                className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full shadow-sm group cursor-pointer"
                onClick={() => alert(`Showing posts categorized under: ${int.title}`)}
              >
                <img
                  src={int.image}
                  alt={int.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay sunset gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-accent/20 to-transparent pointer-events-none" />

                {/* Details */}
                <div className="absolute bottom-6 left-6 text-white space-y-2 z-10 select-none">
                  <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/10 backdrop-blur-md flex items-center justify-center text-white mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-extrabold tracking-widest uppercase text-slate-300 block">
                    {int.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-lg uppercase tracking-wider text-white">
                    {int.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
