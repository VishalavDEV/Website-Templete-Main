import React from 'react';
import { motion } from 'framer-motion';
import { Train } from 'lucide-react';

export default function AnimatedTrain({ className = '', speed = 12 }) {
  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-2xl bg-gradient-to-b from-purple-950/20 to-[#070b19] border border-white/5 shadow-inner ${className}`}>
      
      {/* Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 1000 200" className="w-full h-full fill-white" preserveAspectRatio="none">
          <polygon points="0,200 150,70 300,160 450,40 600,130 800,50 1000,180 1000,200" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 200" className="w-full h-full fill-white" preserveAspectRatio="none">
          <polygon points="0,200 200,120 400,160 650,110 850,170 1000,140 1000,200" />
        </svg>
      </div>

      {/* Railway Track */}
      <div className="absolute bottom-4 left-0 right-0 h-1.5 bg-zinc-700/60 border-t border-b border-zinc-500/30">
        {/* Track ties */}
        <div className="w-full h-full bg-repeating-linear-gradient" style={{
          backgroundImage: 'linear-gradient(90deg, transparent, transparent 15px, #fff 15px, #fff 17px)',
          opacity: 0.15
        }} />
      </div>

      {/* Animated Train */}
      <motion.div
        initial={{ x: '-15%' }}
        animate={{ x: '115%' }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear'
        }}
        className="absolute bottom-4 flex items-end"
      >
        {/* Locomotive */}
        <div className="relative flex items-center bg-gradient-to-r from-[#ff9900] to-[#ffd700] h-5 rounded-l-md rounded-tr-md px-3 border border-white/20 shadow-lg">
          <Train size={12} className="text-white mr-1 -mt-0.5" />
          <span className="text-[7px] font-bold text-white tracking-widest font-heading">VISTAEXPRESS</span>
          
          {/* Headlight */}
          <div className="absolute right-0 top-1 w-4 h-3 bg-yellow-300/40 rounded-full blur-xs" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)' }} />
        </div>

        {/* Train Carriages */}
        <div className="flex gap-0.5 ml-0.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-10 h-4 bg-zinc-800/80 border border-white/10 rounded-xs flex items-center justify-around px-1 shadow-md">
              <div className="w-1.5 h-1 bg-sky-300/40 rounded-2xs" />
              <div className="w-1.5 h-1 bg-sky-300/40 rounded-2xs" />
              <div className="w-1.5 h-1 bg-sky-300/40 rounded-2xs" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pine trees along track */}
      <div className="absolute bottom-2 left-6 opacity-30">
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[14px] border-b-emerald-600" />
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[10px] border-b-emerald-700 -mt-1.5" />
      </div>
      <div className="absolute bottom-2 right-12 opacity-20">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[18px] border-b-emerald-600" />
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[14px] border-b-emerald-700 -mt-2" />
      </div>
    </div>
  );
}
