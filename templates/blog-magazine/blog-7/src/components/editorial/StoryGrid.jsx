import React from 'react';
import { StoryCard } from './StoryCard';
import { motion, useReducedMotion } from 'framer-motion';

export function StoryGrid({
  articles = [],
  columns = 3,
  variant = 'medium',
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={containerVariants}
      className={`grid ${gridColsClass} gap-6 ${className}`}
    >
      {articles.map((art) => (
        <motion.div key={art.id} variants={itemVariants}>
          <StoryCard article={art} variant={variant} />
        </motion.div>
      ))}
    </motion.div>
  );
}
