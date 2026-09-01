import React from 'react';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

export default function AnimatedCar({ className = '', speed = 8 }) {
  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-2xl bg-gradient-to-b from-blue-950/20 to-[#070b19] border border-white/5 shadow-inner ${className}`}>
      
      {/* Background Skyline / City */}
      <div className="absolute bottom-0 left-0 right-0 h-28 opacity-10 pointer-events-none flex items-end justify-around">
        <div className="w-16 h-20 bg-white rounded-t-xs" />
        <div className="w-12 h-24 bg-white rounded-t-xs" />
        <div className="w-20 h-16 bg-white rounded-t-xs" />
        <div className="w-14 h-22 bg-white rounded-t-xs" />
        <div className="w-18 h-18 bg-white rounded-t-xs" />
      </div>

      {/* Highway / Road */}
      <div className="absolute bottom-4 left-0 right-0 h-10 bg-zinc-900 border-t border-zinc-700 shadow-lg">
        {/* Winding/straight lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-yellow-400 opacity-60" style={{
          backgroundImage: 'linear-gradient(90deg, transparent, transparent 20px, #facc15 20px, #facc15 40px)',
          backgroundSize: '80px 100%',
          animation: 'wave-flow 2s linear infinite'
        }} />
      </div>

      {/* Animated Car */}
      <motion.div
        initial={{ x: '-15%', y: 14 }}
        animate={{ 
          x: '115%',
          y: [14, 15, 14] 
        }}
        transition={{
          x: { repeat: Infinity, duration: speed, ease: 'linear' },
          y: { repeat: Infinity, duration: 0.2, ease: 'easeInOut' }
        }}
        className="absolute bottom-4 flex items-center"
      >
        <div className="relative p-2 bg-gradient-to-br from-[#ffcc00] to-[#ffe066] rounded-lg border border-white/20 shadow-md">
          <Car size={16} className="text-white" />
          
          {/* Exhaust smoke */}
          <motion.div 
            className="absolute left-[-8px] bottom-1 w-2 h-2 bg-white/20 rounded-full blur-xs"
            animate={{ scale: [1, 2, 0], opacity: [0.8, 0.4, 0] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
          />

          {/* Headlight beam */}
          <div className="absolute right-[-10px] top-1.5 w-3 h-2 bg-yellow-200/50 rounded-full blur-xs" />
        </div>
      </motion.div>

      {/* Road sign */}
      <div className="absolute bottom-10 left-12 p-1 bg-green-800 border border-white/30 text-white rounded-xs text-[6px] tracking-wider font-extrabold flex flex-col items-center">
        <span>ROUTE 66</span>
        <div className="w-0.5 h-6 bg-zinc-500 mt-1" />
      </div>
    </div>
  );
}
