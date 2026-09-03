import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Star, Heart, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  // Parallax scroll hooks
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const gridY = useTransform(scrollY, [0, 500], [0, -80]);

  // Framer Motion staggered variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  // Subtle floating variant configurations
  const getFloatAnimation = (yOffset, duration, delay) => ({
    animate: {
      y: [0, yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex items-center overflow-hidden bg-charcoal">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
      >
        <img 
          src="./assets/camping_stars.jpg" 
          alt="Adventure Background" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary-dark/90 via-charcoal/80 to-primary/20 z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Headline & Tagline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: textY }}
          className="lg:col-span-5 text-white flex flex-col justify-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent-yellow px-4 py-2 rounded-full w-fit mb-6 text-sm font-semibold tracking-wider uppercase"
          >
            <Compass className="w-4 h-4 animate-spin-slow" />
            Voted #1 Adventure Operator
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight uppercase"
          >
            Escape the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-yellow">
              Ordinary
            </span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="relative mt-4 mb-8"
          >
            <p className="font-script text-4xl md:text-5xl text-accent-yellow transform -rotate-2 origin-left inline-block">
              Travel & Adventure
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-white/80 font-light text-base md:text-lg max-w-md mb-8 leading-relaxed"
          >
            Dive into the wild, surf perfect tubes, scale majestic peaks, and experience custom journeys tailored just for your wild soul.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#tours"
              className="bg-primary text-white font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg shadow-primary/45 hover:bg-primary-dark transition-all"
            >
              Explore Trips
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#customize"
              className="border border-white/20 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-full hover:bg-white/5 transition-all"
            >
              Custom Trip
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Dynamic Asymmetric Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: gridY }}
          className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {/* Card 1: Full bleed Beach Surfing Photo (Tall) */}
          <motion.div
            variants={itemVariants}
            {...getFloatAnimation(-8, 5.5, 0.2)}
            whileHover={{ scale: 1.03 }}
            className="relative h-[250px] md:h-[380px] rounded-3xl overflow-hidden group shadow-xl border border-white/10"
          >
            <img 
              src="./assets/beach_surfing.jpg" 
              alt="Surfing Adventure" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                Surfing
              </span>
              <h3 className="font-bold text-base mt-2 flex items-center gap-1">
                Maui Waves <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Mini Website Preview Card (Compact) */}
          <motion.div
            variants={itemVariants}
            {...getFloatAnimation(-12, 6, 0.8)}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-4 flex flex-col justify-between h-[180px] md:h-[220px] shadow-xl text-white overflow-hidden relative"
          >
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] text-white/50 tracking-wider">roamwild.com</span>
            </div>
            
            {/* Mock website content */}
            <div className="my-3 space-y-2 flex-grow">
              <div className="h-3 w-3/4 bg-white/20 rounded-full" />
              <div className="h-5 w-full bg-gradient-to-r from-primary to-accent-yellow rounded-lg flex items-center px-2 text-[9px] font-bold">
                WILD SUMMIT CO.
              </div>
              <div className="flex justify-between items-center gap-2 mt-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="./assets/mountain_hiking.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow space-y-1">
                  <div className="h-2 w-full bg-white/20 rounded-full" />
                  <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-white/60">
              <span>Online Booking</span>
              <span className="text-accent-yellow font-semibold">Active</span>
            </div>
          </motion.div>

          {/* Card 3: Full bleed Mountain Hiking Photo (Standard) */}
          <motion.div
            variants={itemVariants}
            {...getFloatAnimation(-6, 5, 0.4)}
            whileHover={{ scale: 1.03 }}
            className="relative h-[200px] md:h-[280px] rounded-3xl overflow-hidden group shadow-xl border border-white/10 col-span-2 md:col-span-1"
          >
            <img 
              src="./assets/mountain_hiking.jpg" 
              alt="Mountain Trek" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                Trekking
              </span>
              <h3 className="font-bold text-base mt-2 flex items-center gap-1">
                Patagonia Summit <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
            </div>
          </motion.div>

          {/* Card 4: Mini website builder card with stats (Interactive style) */}
          <motion.div
            variants={itemVariants}
            {...getFloatAnimation(-10, 6.5, 0.6)}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-5 flex flex-col justify-between h-[210px] md:h-[260px] shadow-xl text-white col-span-1 border border-white/15"
          >
            <div className="flex justify-between items-start">
              <div className="bg-white/20 p-2.5 rounded-2xl">
                <Heart className="w-6 h-6 fill-white text-white" />
              </div>
              <span className="text-[11px] bg-accent-yellow text-charcoal font-extrabold uppercase px-2 py-0.5 rounded-full">
                HOT DEAL
              </span>
            </div>
            
            <div className="my-auto space-y-1">
              <div className="text-3xl font-extrabold">12k+</div>
              <div className="text-xs text-white/80 font-medium uppercase tracking-wider">
                Happy Explorers
              </div>
              <div className="flex gap-0.5 text-accent-yellow mt-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>

            <div className="text-[11px] text-white/70 border-t border-white/15 pt-3">
              "The custom planning was flawless."
            </div>
          </motion.div>

          {/* Card 5: Full Bleed Camping Stars (Standard size) */}
          <motion.div
            variants={itemVariants}
            {...getFloatAnimation(-7, 5.8, 1.0)}
            whileHover={{ scale: 1.03 }}
            className="relative h-[220px] md:h-[300px] rounded-3xl overflow-hidden group shadow-xl border border-white/10 col-span-1 md:col-span-2"
          >
            <img 
              src="./assets/camping_stars.jpg" 
              alt="Night Camping" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-accent-yellow text-charcoal text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded-full">
                Camping
              </span>
              <h3 className="font-bold text-base mt-2 flex items-center gap-1">
                Stargazing Hikes <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
