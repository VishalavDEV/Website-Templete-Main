import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, duration = 0.8, yOffset = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: duration, delay: delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}
