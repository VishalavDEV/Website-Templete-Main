import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      price: '$1,200',
      rating: '4.9',
      tag: 'Cultural'
    },
    {
      id: 2,
      name: 'Swiss Alps, Switzerland',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      price: '$1,599',
      rating: '4.8',
      tag: 'Adventure'
    },
    {
      id: 3,
      name: 'Amalfi Coast, Italy',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80',
      price: '$2,100',
      rating: '4.7',
      tag: 'Romantic'
    },
    {
      id: 4,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      price: '$950',
      rating: '4.9',
      tag: 'Tropical'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 15
      }
    }
  };

  return (
    <section id="destinations" className="py-24 md:py-32 bg-slate-50 pt-[140px] md:pt-[180px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="font-display font-extrabold text-[10px] tracking-widest text-accent uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            Top Destinations
            <span className="w-8 h-[2px] bg-accent" />
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight leading-tight uppercase">
            Explore Featured <br />
            Destinations
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            Find the perfect getaway, from serene tropical beaches to historical sites and thrilling mountain hikes.
          </p>
        </div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(13, 27, 42, 0.05), 0 10px 10px -5px rgba(13, 27, 42, 0.02)' }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100/80 shadow-sm flex flex-col justify-between group cursor-pointer h-full transition-all"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none" />
                
                {/* Tag overlay */}
                <span className="absolute top-4 left-4 bg-white/95 text-primary text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {dest.tag}
                </span>

                {/* Price tag */}
                <span className="absolute bottom-4 right-4 bg-accent text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                  Starts {dest.price}
                </span>
              </div>

              {/* Body Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{dest.name.split(',')[1].trim()}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-primary group-hover:text-accent transition-colors leading-snug">
                    {dest.name}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xs">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span>{dest.rating} Rating</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Explore Details &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
