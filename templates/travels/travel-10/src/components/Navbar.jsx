import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search } from 'lucide-react';

const navItems = ['Home', 'About', 'Places', 'Experiences'];

export default function Navbar() {
  const navContainerVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const dotVariants = {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.5, 1],
      backgroundColor: '#D4A253',
      transition: {
        repeat: Infinity,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const searchVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: 15,
      color: '#D4A253',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.nav
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-gray-100 bg-white relative z-50 rounded-t-2xl"
    >
      {/* Brand Logo */}
      <motion.div 
        variants={navItemVariants}
        className="flex items-center space-x-2 cursor-pointer group"
      >
        <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-150 transition-colors group-hover:border-accent-gold/40">
          <Compass className="w-5 h-5 text-primary-navy group-hover:text-accent-gold transition-colors duration-300" />
        </div>
        <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
          Terra<span className="text-accent-gold">Bound</span>
        </span>
      </motion.div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            variants={navItemVariants}
            whileHover="hover"
            className="flex items-center space-x-2 text-xs md:text-sm font-semibold tracking-widest text-primary-navy/70 hover:text-accent-gold uppercase transition-colors duration-300 cursor-pointer"
          >
            {/* Dot Bullet */}
            <motion.span
              variants={dotVariants}
              initial="initial"
              className="w-1.5 h-1.5 rounded-full bg-primary-navy/40"
            />
            <span>{item}</span>
          </motion.a>
        ))}
      </div>

      {/* Search Icon */}
      <motion.button
        variants={navItemVariants}
        whileHover="hover"
        initial="initial"
        className="p-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer text-primary-navy/70 focus:outline-none"
        aria-label="Search places"
      >
        <motion.div variants={searchVariants}>
          <Search className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </motion.nav>
  );
}
