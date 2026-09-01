import React from 'react';
import { motion } from 'framer-motion';

export function DopamineSkeleton() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-6 select-none">
      <div className="relative">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.15, 1]
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 2, ease: "linear" },
            scale: { repeat: Infinity, duration: 1, ease: "easeInOut" }
          }}
          className="w-16 h-16 rounded-full bg-[#FF007A] border-3 border-[#0A0A0E] shadow-[4px_4px_0px_#0047FF] flex items-center justify-center text-white font-y2k font-black text-2xl"
        >
          X
        </motion.div>
      </div>

      <div className="text-center space-y-2">
        <div className="font-y2k font-black text-xl text-[#0A0A0E] tracking-tight">
          LOADING <span className="text-[#FF007A]">GRAIL ARCHIVE</span>...
        </div>
        <div className="font-mono text-xs text-[#626470] font-bold">
          INITIALIZING GPU-ACCELERATED TEXTURES
        </div>
      </div>

      <div className="w-48 h-2 bg-[#FAFAFD] border-2 border-[#0A0A0E] overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="w-full h-full bg-[#10FF70]"
        />
      </div>
    </div>
  );
}

export default DopamineSkeleton;
