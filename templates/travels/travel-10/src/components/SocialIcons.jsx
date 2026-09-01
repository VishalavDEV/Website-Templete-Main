import React from 'react';
import { motion } from 'framer-motion';

// Custom inline SVG icons matching Lucide's original brand designs
const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function SocialIcons() {
  const containerVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.9,
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center space-x-4 border-l border-gray-150 pl-4 h-6"
    >
      <motion.a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover={{ scale: 1.18, y: -2 }}
        className="text-primary-navy/50 hover:text-accent-gold transition-colors duration-300"
        aria-label="Visit Facebook page"
      >
        <FacebookIcon className="w-4 h-4" />
      </motion.a>
      
      <motion.a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover={{ scale: 1.18, y: -2 }}
        className="text-primary-navy/50 hover:text-accent-gold transition-colors duration-300"
        aria-label="Visit Instagram page"
      >
        <InstagramIcon className="w-4 h-4" />
      </motion.a>
    </motion.div>
  );
}
