import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Swiss Alps Cabin',
    location: 'Zermatt, Switzerland',
    image: '/place_alps.jpg',
    rating: '4.9',
    price: '$240',
    type: 'Alpine Adventure',
  },
  {
    name: 'Kyoto Temple Pass',
    location: 'Kyoto, Japan',
    image: '/place_kyoto.jpg',
    rating: '4.8',
    price: '$180',
    type: 'Cultural Heritage',
  },
  {
    name: 'Amalfi Cliffside',
    location: 'Positano, Italy',
    image: '/place_amalfi.jpg',
    rating: '4.9',
    price: '$320',
    type: 'Coastal Getaway',
  },
];

export default function Places() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="places" className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12 border-b border-gray-100 bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[1.5px] bg-accent-gold" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent-gold uppercase">
              Featured Destinations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-navy font-serif">
            Destinations that inspire
          </h2>
        </div>
        <p className="text-sm text-muted-gray max-w-xs font-light mt-4 md:mt-0">
          Hand-picked scenic spots around the world designed for high-adrenaline explorations and peaceful retreats.
        </p>
      </div>

      {/* Destinations Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Wrap */}
            <div className="relative overflow-hidden aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover select-none"
              />
              {/* Type Badge */}
              <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-primary-navy font-extrabold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm border border-gray-100 shadow-xs z-20">
                {dest.type}
              </span>
            </div>

            {/* Details */}
            <div className="p-6 flex flex-col text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center text-xs text-muted-gray font-light">
                  <MapPin className="w-3.5 h-3.5 text-accent-gold mr-1 shrink-0" />
                  {dest.location}
                </span>
                <span className="flex items-center text-xs font-semibold text-primary-navy">
                  <Star className="w-3.5 h-3.5 text-accent-gold fill-accent-gold mr-1 shrink-0" />
                  {dest.rating}
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
                {dest.name}
              </h3>

              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-xs text-muted-gray">Starting from</span>
                <span className="text-sm font-extrabold text-primary-navy">
                  {dest.price} <span className="text-xs font-normal text-muted-gray">/ night</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
