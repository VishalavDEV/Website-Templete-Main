import React, { useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function DiagonalImageCollage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring animations for smooth mouse parallax
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const mouseXSpring = useSpring(0, springConfig);
  const mouseYSpring = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseXSpring.set(x);
    mouseYSpring.set(y);
  };

  const handleMouseLeave = () => {
    mouseXSpring.set(0);
    mouseYSpring.set(0);
  };

  // Parallax transforms for the three image layers
  // Mountain lake (Top-left) shifts slightly to the top-left
  const mountainX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const mountainY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

  // City skyline (Seam inset) shifts in the opposite horizontal direction for depth
  const cityX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const cityY = useTransform(mouseYSpring, [-0.5, 0.5], [-8, 8]);

  // Hiker valley (Bottom-right) shifts slightly more intensely
  const hikerX = useTransform(mouseXSpring, [-0.5, 0.5], [-18, 18]);
  const hikerY = useTransform(mouseYSpring, [-0.5, 0.5], [18, -18]);

  // Entrance variants
  const mountainEntrance = {
    hidden: { x: -200, y: -200, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
  };

  const cityEntrance = {
    hidden: { x: 250, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
  };

  const hikerEntrance = {
    hidden: { y: 250, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
  };

  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[550px]">
      {/* MOBILE VIEW (Stacked images with clean borders) */}
      <div className="flex flex-col space-y-4 md:hidden w-full pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative h-[200px] rounded-xl overflow-hidden shadow-md"
        >
          <img 
            src="/mountain_lake.jpg" 
            alt="Majestic Mountain Lake" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-bold px-2 py-1 rounded-sm border border-white/20">
            Mountain Lake
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative h-[150px] rounded-xl overflow-hidden shadow-md"
        >
          <img 
            src="/city_skyline.jpg" 
            alt="Cityscape Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-bold px-2 py-1 rounded-sm border border-white/20">
            Metropolis Seam
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative h-[220px] rounded-xl overflow-hidden shadow-md"
        >
          <img 
            src="/hiker_valley.jpg" 
            alt="Hiker Overlooking Valley" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-bold px-2 py-1 rounded-sm border border-white/20">
            Hiker's Valley
          </div>
        </motion.div>
      </div>

      {/* DESKTOP/TABLET VIEW (Diagonal split collage with parallax hover) */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden bg-white cursor-pointer select-none rounded-bl-2xl md:rounded-bl-none"
      >
        {/* Layer 1: Mountain Lake (Top-Left Triangle) */}
        <motion.div
          variants={mountainEntrance}
          initial="hidden"
          animate="visible"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 75%)' }}
          className="absolute inset-0 z-10 overflow-hidden"
        >
          <motion.div 
            style={{ x: mountainX, y: mountainY }}
            className="w-full h-full scale-110"
          >
            <img
              src="/mountain_lake.jpg"
              alt="Mountain Lake"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* Layer 2: City Skyline (Middle Seam Inset) */}
        <motion.div
          variants={cityEntrance}
          initial="hidden"
          animate="visible"
          style={{ clipPath: 'polygon(0 75%, 100% 0, 100% 20%, 0 85%)' }}
          className="absolute inset-0 z-20 overflow-hidden"
        >
          <motion.div 
            style={{ x: cityX, y: cityY }}
            className="w-full h-full scale-115"
          >
            <img
              src="/city_skyline.jpg"
              alt="City Skyline"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* Layer 3: Hiker Valley (Bottom-Right/Left Triangle) */}
        <motion.div
          variants={hikerEntrance}
          initial="hidden"
          animate="visible"
          style={{ clipPath: 'polygon(0 85%, 100% 20%, 100% 100%, 0 100%)' }}
          className="absolute inset-0 z-30 overflow-hidden"
        >
          <motion.div 
            style={{ x: hikerX, y: hikerY }}
            className="w-full h-full scale-110"
          >
            <img
              src="/hiker_valley.jpg"
              alt="Hiker Valley"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* Crisp White Borders (SVG Overlay) */}
        <svg 
          className="absolute inset-0 w-full h-full z-40 pointer-events-none"
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Seam line between mountain lake and city skyline */}
          <line 
            x1="0" 
            y1="75" 
            x2="100" 
            y2="0" 
            stroke="white" 
            strokeWidth="1.5" 
            vectorEffect="non-scaling-stroke"
          />
          {/* Seam line between city skyline and hiker */}
          <line 
            x1="0" 
            y1="85" 
            x2="100" 
            y2="20" 
            stroke="white" 
            strokeWidth="1.5" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
