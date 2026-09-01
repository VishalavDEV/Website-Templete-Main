import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

/**
 * 3D Interactive Logo Component
 * Combines CSS 3D Transforms with studio lighting reflections and mouse responsiveness
 */
export function LogoCanvas3D({ className = '' }) {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-[800px] cursor-pointer inline-flex items-center gap-2 select-none group ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#0055FF] via-[#3B82F6] to-[#7000FF] p-[1.5px] shadow-[0_10px_25px_-5px_rgba(0,85,255,0.3)] transition-shadow duration-300 group-hover:shadow-[0_15px_30px_-4px_rgba(0,85,255,0.45)]"
      >
        {/* Luminous Core Body with Studio Glass Reflection */}
        <div
          style={{ transform: 'translateZ(12px)' }}
          className="w-full h-full rounded-[10px] bg-white/95 backdrop-blur-md flex items-center justify-center relative overflow-hidden"
        >
          {/* Subtle Dynamic Glare */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-black/5 pointer-events-none" />

          {/* 3D Embossed Z Icon */}
          <span
            style={{ transform: 'translateZ(18px)' }}
            className="font-sans font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#0055FF] to-[#7000FF]"
          >
            Z
          </span>
        </div>
      </motion.div>

      {/* Brand Wordmark with Modern Spacing */}
      <div className="flex flex-col text-left leading-none">
        <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter text-[#111827] group-hover:text-[#0055FF] transition-colors">
          Z MAG
        </span>
        <span className="font-mono text-[0.5625rem] font-bold uppercase tracking-[0.25em] text-[#6B7280]">
          Hyper &bull; Spatial
        </span>
      </div>
    </div>
  );
}
