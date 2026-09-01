import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import DiagonalImageCollage from './DiagonalImageCollage';
import SocialIcons from './SocialIcons';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  // Continuous floating animation for the entire card
  const cardFloatVariants = {
    animate: {
      y: [-6, 6, -6],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const entranceVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const lineVariants = {
    initial: { width: 40, backgroundColor: '#D4A253' },
    hover: { 
      width: 90, 
      backgroundColor: '#0A1128',
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } 
    },
  };

  const arrowVariants = {
    initial: { x: 0, opacity: 0 },
    hover: { x: 4, opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={cardFloatVariants}
      animate="animate"
      className="w-full max-w-6xl mx-auto px-4 md:px-0 py-6 md:py-12"
    >
      <motion.div
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
        className="bg-white border border-gray-150 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col"
      >
        {/* Navbar inside the top of the card */}
        <Navbar />

        {/* Hero Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 p-6 md:p-12 items-stretch">
          {/* Left Column: Collage (Span 6 on medium and up) */}
          <div className="col-span-1 md:col-span-6 w-full flex flex-col justify-between">
            <div className="w-full h-full flex items-center justify-center">
              <DiagonalImageCollage />
            </div>
            
            {/* Social Icons positioned beneath the Collage on larger screens, aligned with the layout */}
            <div className="hidden md:flex items-center mt-6">
              <span className="text-[10px] uppercase tracking-widest text-muted-gray font-semibold mr-4">
                Explore More
              </span>
              <SocialIcons />
            </div>
          </div>

          {/* Right Column: Hero copywriting */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-1 md:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-8 md:pl-4 lg:pl-8 text-left"
          >
            {/* Tiny accent badge */}
            <motion.div 
              variants={textItemVariants}
              className="flex items-center space-x-2"
            >
              <span className="w-6 h-[1.5px] bg-accent-gold" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent-gold uppercase">
                Adventure Awaits
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={textItemVariants}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-primary-navy leading-[1.05]"
            >
              Let's Travel
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              variants={textItemVariants}
              className="text-lg lg:text-xl font-medium tracking-wide text-primary-navy/80 font-sans"
            >
              Your <span className="text-accent-gold font-bold italic">adventure</span> starts here
            </motion.h2>

            {/* Body Copy */}
            <motion.p
              variants={textItemVariants}
              className="text-sm lg:text-base leading-relaxed text-muted-gray max-w-md font-light"
            >
              Immerse yourself in breathtaking landscapes, climb peaks that touch the sky, and explore the hidden corners of our beautiful planet. Uncover stories that last a lifetime.
            </motion.p>

            {/* CTA Button Link */}
            <motion.div variants={textItemVariants} className="pt-2">
              <motion.a
                href="#explore"
                initial="initial"
                whileHover="hover"
                className="inline-flex items-center space-x-4 cursor-pointer group"
              >
                <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-primary-navy uppercase transition-colors duration-300 group-hover:text-accent-gold">
                  Read Now
                </span>
                
                {/* Extending line beside text */}
                <div className="flex items-center">
                  <motion.div
                    variants={lineVariants}
                    className="h-[2px]"
                  />
                  <motion.span
                    variants={arrowVariants}
                    className="text-primary-navy group-hover:text-accent-gold"
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.span>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Icons stack under content for mobile screen view */}
            <div className="flex md:hidden items-center pt-4 border-t border-gray-100">
              <span className="text-[10px] uppercase tracking-widest text-muted-gray font-semibold mr-4">
                Explore More
              </span>
              <SocialIcons />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
