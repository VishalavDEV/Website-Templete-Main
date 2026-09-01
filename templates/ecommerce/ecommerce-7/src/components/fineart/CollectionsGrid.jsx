import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/fineart/config';
import CollectionCircle from './CollectionCircle';

export default function CollectionsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <section id="collections" className="py-24 md:py-32 bg-[#f5f4f1] text-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans block mb-4">
            Curated Portfolios
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide">
            Collections
          </h2>
        </div>

        {/* Dynamic Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 justify-items-center"
        >
          {siteConfig.collections.map((col, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CollectionCircle
                title={col.title}
                image={col.image}
                link={col.link}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
