import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, Trees, Waves } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      title: 'Ocean Beach',
      description: 'Ride waves, soak in sun, and explore reef lagoons.',
      image: './assets/beach_surfing.jpg',
      icon: Waves,
      count: '12 Tours',
      color: 'from-blue-600/80 to-teal-500/50',
    },
    {
      title: 'Alpine Peak',
      description: 'Conquer heights, traverse glaciers, and witness horizons.',
      image: './assets/mountain_hiking.jpg',
      icon: Trees,
      count: '18 Tours',
      color: 'from-orange-600/80 to-amber-500/50',
    },
    {
      title: 'Wild Camping',
      description: 'Stargaze under galaxy dust, pitch tents, and campfire.',
      image: './assets/camping_stars.jpg',
      icon: Flame,
      count: '9 Tours',
      color: 'from-indigo-600/80 to-purple-500/50',
    },
    {
      title: 'Tropical Lagoons',
      description: 'Escape to private islands, sand beaches, and coral diving.',
      image: './assets/tropical_lagoon.jpg',
      icon: Compass,
      count: '15 Tours',
      color: 'from-teal-600/80 to-emerald-500/50',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="destinations" className="py-24 px-6 md:px-12 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">
              Where to go
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-charcoal">
              Explore by category
            </h2>
            <p className="text-gray-500 font-light mt-4">
              Find your next thrill or peaceful escape. We provide highly curated experiences across four unique terrains.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="text-sm font-semibold text-primary-dark border-b border-primary/20 pb-1 cursor-pointer hover:border-primary transition-all">
              View all coordinates
            </span>
          </div>
        </div>

        {/* Categories Row/Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="relative h-[380px] rounded-3xl overflow-hidden group shadow-lg cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Saturated Overlay with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} mix-blend-multiply opacity-70 group-hover:opacity-85 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  
                  {/* Top content */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <Icon className="w-6 h-6 text-accent-yellow" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {category.count}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-accent-yellow transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-xs font-light leading-relaxed max-h-0 group-hover:max-h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Subtle border line light flare */}
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
