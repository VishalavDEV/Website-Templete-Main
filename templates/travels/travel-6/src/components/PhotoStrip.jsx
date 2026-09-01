import React from 'react';
import { motion } from 'framer-motion';

const stripPhotos = [
  {
    id: 1,
    title: 'Alpine Hiking',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    rotate: -1.5
  },
  {
    id: 2,
    title: 'Coastal Cliffs',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    rotate: 1.5
  },
  {
    id: 3,
    title: 'Hillside Village',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    rotate: -1
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

export default function PhotoStrip() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stripPhotos.map((photo) => (
          <motion.div
            key={photo.id}
            variants={itemVariants}
            className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ 
              scale: 1.04, 
              rotate: photo.rotate,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {/* Background Image */}
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-near-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Absolute Text overlay */}
            <div className="absolute bottom-6 left-6 text-white text-left">
              <span className="text-[10px] tracking-widest uppercase font-extrabold text-brand-orange mb-1 block">
                Adventure awaits
              </span>
              <h4 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
                {photo.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
