import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SearchBar from './SearchBar';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax transform for the background image (moves slower than page scroll)
  const bgY = useTransform(scrollY, [0, 800], ['0%', '25%']);
  // Parallax transform for the content overlay (moves slightly, creating depth)
  const textY = useTransform(scrollY, [0, 800], ['0%', '15%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 18
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-[95vh] min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background Image Container with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')`,
          y: bgY
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-near-black/50 to-near-black/90 z-10 pointer-events-none" />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16"
        style={{ y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.span
          className="font-script text-3xl md:text-4xl text-brand-orange mb-3 block"
          variants={itemVariants}
        >
          Explorer and Travel
        </motion.span>

        {/* Heading */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase text-white tracking-tight leading-none mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Let's Go Now
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white/80 max-w-2xl text-base md:text-lg lg:text-xl font-light leading-relaxed mb-12 drop-shadow"
          variants={itemVariants}
        >
          Discover hidden gems, pristine waters, and breathtaking mountain trails. 
          Your next unforgettable adventure is just a click away. Let's make memories together.
        </motion.p>

        {/* Floating Search Bar */}
        <motion.div className="w-full" variants={itemVariants}>
          <SearchBar />
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none hidden md:block">
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-brand-orange rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
