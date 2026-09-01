import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export default function AnimatedAirplane({ className = '', style = {}, duration = 20, delay = 0 }) {
  return (
    <div className={`relative ${className}`} style={{ ...style, width: '100%' }}>
      <motion.div
        initial={{ x: '-10%', y: 0, rotate: 10, opacity: 0 }}
        animate={{
          x: ['-10%', '110%'],
          y: [0, -30, 20, -10, 0],
          opacity: [0, 1, 1, 0],
          rotate: [10, 5, 15, 8, 12],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          delay: delay,
          ease: 'easeInOut',
        }}
        className="absolute flex items-center"
      >
        {/* Plane trail line */}
        <div className="w-24 h-px border-t border-dashed border-sky-400/40 mr-2" />
        
        {/* Plane Body */}
        <div className="relative p-2 bg-gradient-to-br from-[#ffcc00]/10 to-[#ffd700]/10 rounded-full border border-white/10 backdrop-blur-sm shadow-xl">
          <Plane className="text-[#ffd700] transform rotate-45" size={28} />
          
          {/* Engines glow */}
          <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-yellow-500 blur-xs -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-sky-400 blur-xs -translate-y-1/2" />
        </div>
      </motion.div>
    </div>
  );
}
