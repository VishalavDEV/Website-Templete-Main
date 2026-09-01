import React from 'react';
import { motion } from 'framer-motion';
import { Ship } from 'lucide-react';

export default function AnimatedShip({ className = '', speed = 15 }) {
  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-2xl bg-gradient-to-b from-[#070b19] to-blue-900/40 border border-white/5 shadow-inner ${className}`}>
      
      {/* Sun glow in background */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#ffcc00]/15 rounded-full blur-2xl" />

      {/* Ship */}
      <motion.div
        initial={{ x: '-20%', y: 22 }}
        animate={{ 
          x: '120%',
          y: [22, 24, 21, 23, 22],
          rotate: [-1, 2, -1, 1, -1]
        }}
        transition={{
          x: { repeat: Infinity, duration: speed, ease: 'linear' },
          y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 5, ease: 'easeInOut' }
        }}
        className="absolute bottom-6 flex items-end z-10"
      >
        <div className="relative p-2.5 bg-gradient-to-tr from-sky-900 to-indigo-950 rounded-lg border border-white/10 shadow-lg text-white">
          <Ship size={24} className="text-white" />
          
          {/* Deck cabin details */}
          <div className="absolute top-1 left-2 w-4 h-1 bg-white/40 rounded-3xs" />
          <div className="absolute top-1 right-2 w-2 h-1 bg-white/40 rounded-3xs" />
          
          {/* Water ripples behind ship */}
          <div className="absolute bottom-0 left-[-15px] w-4 h-1 bg-white/20 blur-xs rounded-full" />
        </div>
      </motion.div>

      {/* Wave layers (Back Wave) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-sky-800/20 fill-sky-800/20 opacity-70 z-5" style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, #ff9900 0%, transparent 70%)',
        animation: 'float 3s ease-in-out infinite'
      }} />

      {/* Foreground Waves (Front Wave) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-sky-950 to-sky-700/60 z-20"
        style={{
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          animation: 'float-slow 4s ease-in-out infinite'
        }}
      />
    </div>
  );
}
