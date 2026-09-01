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
      reviews: '238 reviews',
      tag: 'Cultural'
    },
    {
      id: 2,
      name: 'Swiss Alps, Switzerland',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      price: '$1,599',
      rating: '4.8',
      reviews: '194 reviews',
      tag: 'Adventure'
    },
    {
      id: 3,
      name: 'Amalfi Coast, Italy',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80',
      price: '$2,100',
      rating: '4.7',
      reviews: '156 reviews',
      tag: 'Romantic'
    },
    {
      id: 4,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      price: '$950',
      rating: '4.9',
      reviews: '312 reviews',
      tag: 'Tropical'
    },
    {
      id: 5,
      name: 'Cappadocia, Turkey',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      price: '$1,100',
      rating: '4.8',
      reviews: '175 reviews',
      tag: 'Historical'
    },
    {
      id: 6,
      name: 'Serengeti Safari, Tanzania',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
      price: '$2,499',
      rating: '4.9',
      reviews: '128 reviews',
      tag: 'Wildlife'
    }
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="destinations" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="font-sans font-bold text-xs tracking-widest text-primary uppercase">
            Top Destinations
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-800 tracking-tight leading-tight">
            Explore Our Featured <br />
            Destinations
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            Find the perfect getaway, from serene tropical beaches to historical sites and thrilling mountain hikes.
          </p>
        </div>

        {/* Staggered Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                <img
                  src={dest.image}
                  alt={`Scenic view of ${dest.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-white/95 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                  {dest.tag}
                </span>
                <span className="absolute bottom-4 right-4 bg-primary text-white text-sm font-black px-4 py-1.5 rounded-full shadow-md">
                  {dest.price}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{dest.name.split(',')[1].trim()}</span>
                  </div>
                  <h3 className="font-sans font-extrabold text-xl text-slate-800 group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-1 text-amber-500 font-extrabold text-sm">
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                    <span>{dest.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{dest.reviews}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
