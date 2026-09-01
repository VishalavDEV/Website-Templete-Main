import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
    scale: 0.98,
    filter: 'blur(4px)'
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    y: -15,
    scale: 0.98,
    filter: 'blur(4px)'
  }
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 1, 0.5, 1], // ease-out-quint
  duration: 0.5
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: '100%', minHeight: '80vh' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
