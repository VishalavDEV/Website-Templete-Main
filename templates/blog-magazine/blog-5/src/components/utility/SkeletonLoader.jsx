import React from 'react';
import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <div className="glass-card rounded-3xl p-6 bg-white/90 border border-white/80 space-y-4 overflow-hidden relative">
      {/* Shimmer Effect */}
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EBF4FF]/60 to-transparent pointer-events-none"
      />

      <div className="aspect-[16/10] rounded-2xl bg-[#F3F4F6]" />
      <div className="h-4 w-1/3 rounded-full bg-[#E5E7EB]" />
      <div className="h-6 w-3/4 rounded-full bg-[#E5E7EB]" />
      <div className="h-4 w-full rounded-full bg-[#F3F4F6]" />
    </div>
  );
}

export function Continuous3DSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
        }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0055FF] to-[#FF5E3A] p-[2px] shadow-lg perspective-[600px]"
      >
        <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center font-heading font-black text-xs text-[#0055FF]">
          Z
        </div>
      </motion.div>
    </div>
  );
}
