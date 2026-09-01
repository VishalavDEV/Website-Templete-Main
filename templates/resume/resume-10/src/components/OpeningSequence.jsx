import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OpeningSequence = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white select-none pointer-events-none"
        >
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-mono-meta text-xs tracking-[0.35em] text-neutral-400 uppercase mb-4"
            >
              DIRECTOR ARCHIVE / 2026
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="font-serif-title text-4xl sm:text-6xl md:text-7xl tracking-[0.15em] font-light text-neutral-100 uppercase"
            >
              ELIAS ROWAN
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="mt-4 flex items-center justify-center gap-3 text-xs font-mono-meta tracking-[0.25em] text-neutral-400"
            >
              <span>FILM DIRECTOR</span>
              <span className="text-neutral-600">•</span>
              <span>VISUAL STORYTELLER</span>
            </motion.div>
          </div>

          {/* Thin progress bar line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-700 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSequence;
