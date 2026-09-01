import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const stats = [
    { label: 'Countries Explored', value: '50+' },
    { label: 'Happy Travelers', value: '12K+' },
    { label: 'Average Rating', value: '4.9/5' },
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12 border-b border-gray-100 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="col-span-1 md:col-span-6 flex flex-col space-y-6 text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="w-6 h-[1.5px] bg-accent-gold" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent-gold uppercase">
              Our Journey
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary-navy font-serif"
          >
            We curate stories, not just itineraries.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base leading-relaxed text-muted-gray font-light"
          >
            Founded by a group of outdoor enthusiasts and professional globetrotters, we believe traveling is about connecting with the raw pulse of the planet. From deep valleys to peak summits, we guide you through the path less traveled.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-primary-navy">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs tracking-wider text-muted-gray uppercase font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Scenic highway picture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="col-span-1 md:col-span-6"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Soft decorative visual overlay */}
            <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/about_travel.jpg"
              alt="Road winding towards mountains"
              className="w-full h-[320px] md:h-[400px] object-cover"
            />
            
            {/* Absolute positioning badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-3 rounded-lg border border-gray-100 shadow-sm z-20">
              <p className="text-xs font-bold text-primary-navy uppercase tracking-widest">
                The Open Road
              </p>
              <p className="text-[10px] text-accent-gold font-medium mt-0.5">
                New routes added monthly
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
