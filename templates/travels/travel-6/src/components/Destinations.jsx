import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Compass } from 'lucide-react';

const destinationsData = [
  {
    id: 1,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    price: '$1,499',
    duration: '6 Days',
    rating: '4.9',
    category: 'Culture'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    price: '$999',
    duration: '7 Days',
    rating: '4.8',
    category: 'Tropical'
  },
  {
    id: 3,
    name: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    price: '$2,199',
    duration: '8 Days',
    rating: '4.95',
    category: 'Coastal'
  },
  {
    id: 4,
    name: 'Swiss Alps, Switzerland',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    price: '$2,499',
    duration: '5 Days',
    rating: '4.9',
    category: 'Adventure'
  },
  {
    id: 5,
    name: 'Reykjavik, Iceland',
    image: 'https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&w=800&q=80',
    price: '$1,899',
    duration: '6 Days',
    rating: '4.7',
    category: 'Nature'
  },
  {
    id: 6,
    name: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    price: '$2,899',
    duration: '9 Days',
    rating: '4.92',
    category: 'Safari'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 18
    }
  }
};

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          className="font-script text-3xl md:text-4xl text-brand-coral mb-2 block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Choose your
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-light tracking-widest uppercase text-charcoal"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Destination
        </motion.h2>
        <motion.div
          className="w-16 h-[2px] bg-gradient-to-r from-brand-coral to-brand-orange mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Grid of Destination Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {destinationsData.map((dest) => (
          <motion.div
            key={dest.id}
            variants={cardVariants}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-shadow duration-300 flex flex-col h-full"
            whileHover={{ y: -12 }}
          >
            {/* Image Wrap */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                whileHover={{ scale: 1.1 }}
              />
              {/* Category tag */}
              <span className="absolute top-4 left-4 bg-near-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {dest.category}
              </span>
              {/* Overlay shadow for text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content info */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-charcoal group-hover:text-brand-coral transition-colors duration-200">
                  {dest.name}
                </h3>
                <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-orange">
                  {dest.price}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between text-muted-gray border-t border-gray-100 pt-4 text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>{dest.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-charcoal font-bold">{dest.rating}</span>
                </div>
                <button className="text-brand-coral flex items-center gap-1 hover:text-brand-orange transition-colors font-semibold group/btn">
                  Book Now
                  <Compass className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
