import React from 'react';
import { motion } from 'framer-motion';

export default function CollectionCircle({ title, image, link }) {
  return (
    <motion.a
      href={link}
      className="flex flex-col items-center group cursor-pointer"
      whileHover="hover"
    >
      {/* Circular Container with soft shadow and hover transitions */}
      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-neutral-200">
        
        {/* Hover zoom + subtle rotation */}
        <motion.div
          variants={{
            hover: { scale: 1.06, rotate: 1.5 }
          }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Delicate inner border */}
        <div className="absolute inset-0 rounded-full border border-black/5 pointer-events-none" />
      </div>

      {/* Underlined title label below */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-serif text-[#0a0a0a] group-hover:text-[#6b1d2f] transition-colors duration-300">
          {title}
        </h3>
        <div className="h-[1px] w-8 bg-black/20 mx-auto mt-2 group-hover:w-16 group-hover:bg-[#6b1d2f] transition-all duration-500 ease-out" />
      </div>
    </motion.a>
  );
}
