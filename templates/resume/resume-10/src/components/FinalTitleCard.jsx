import React from 'react';
import { motion } from 'framer-motion';

const FinalTitleCard = () => {
  return (
    <section className="py-24 bg-neutral-950 text-white border-b border-neutral-800 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono-meta text-xs tracking-[0.4em] text-neutral-500 uppercase mb-6"
        >
          — SCENE TRANSITION —
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-100 uppercase tracking-wide leading-tight mb-6"
        >
          END OF THIS CHAPTER.
          <span className="block italic text-amber-400 font-normal mt-2">
            THE NEXT ONE STARTS WITH A CONVERSATION.
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-32 h-[1px] bg-neutral-700 mx-auto mt-8 origin-center"
        />

      </div>
    </section>
  );
};

export default FinalTitleCard;
