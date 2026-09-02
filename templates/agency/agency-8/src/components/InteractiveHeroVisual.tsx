import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface InteractiveHeroVisualProps {
  onCursorEnter?: () => void;
  onCursorLeave?: () => void;
}

export const InteractiveHeroVisual: React.FC<InteractiveHeroVisualProps> = ({
  onCursorEnter,
  onCursorLeave,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string>('FORM');

  // Motion values for smooth 3D tilt & parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { damping: 24, stiffness: 180 });
  const rotateY = useSpring(mouseX, { damping: 24, stiffness: 180 });

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(isTouchDevice);

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX - (rect.left + rect.width / 2);
      const clientY = e.clientY - (rect.top + rect.height / 2);

      const normX = Math.max(-1, Math.min(1, clientX / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, clientY / (rect.height / 2)));

      mouseX.set(normX * 6);
      mouseY.set(-normY * 6);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onCursorEnter}
      onMouseLeave={onCursorLeave}
      className="relative w-full h-[480px] sm:h-[560px] lg:h-[600px] flex items-center justify-center perspective-[1200px] select-none"
    >
      {/* 3D Motion Container */}
      <motion.div
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-[420px] sm:max-w-[460px] h-[440px] sm:h-[520px] flex items-center justify-center"
      >
        {/* Layer 1: Back Card (Tilted -4deg with Aura Project & Concentric Radar) */}
        <div className="absolute w-full h-full bg-[#111111] border border-white/10 -rotate-3 sm:-rotate-4 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-rotate-1">
          {/* Blue aura gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 via-transparent to-transparent pointer-events-none" />

          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
              alt="Aura Experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Concentric Pulser Ring Artwork */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full flex items-center justify-center pointer-events-none">
            <div className="w-36 h-36 border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border border-[#0066FF]/30 rounded-full animate-ping opacity-30" />
            </div>
          </div>

          {/* Card Label Bottom */}
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#888888] mb-1">
                Featured Project
              </div>
              <div className="text-2xl font-editorial italic text-[#FAF9F6]">
                Aura Brand Experience
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#0066FF] px-2.5 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30">
              LIVE
            </span>
          </div>
        </div>

        {/* Layer 2: Front Card (Tilted 2deg, Offset, High-Contrast Typography Deck) */}
        <div className="absolute w-full h-full bg-[#0A0A0A] border border-[#ffffff20] rotate-2 translate-x-2 sm:translate-x-4 -translate-y-2 sm:-translate-y-4 rounded-2xl flex flex-col p-8 sm:p-10 justify-between shadow-[0_30px_70px_rgba(0,0,0,0.9)] hover:rotate-0 transition-all duration-500">
          {/* Top Metrology Header */}
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#888888] font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span>Selected Works</span>
            </div>
            <div className="text-xs font-mono text-[#888888] opacity-60">
              01 / 08
            </div>
          </div>

          {/* Center Project Typography Rows */}
          <div className="flex flex-col gap-6 sm:gap-7 my-auto">
            {/* North */}
            <div
              onMouseEnter={() => setHoveredProject('NORTH')}
              className={`flex justify-between items-center transition-all duration-300 cursor-pointer ${
                hoveredProject === 'NORTH'
                  ? 'opacity-100 text-[#0066FF]'
                  : 'opacity-40 grayscale text-[#FAF9F6] hover:opacity-75'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter font-display">
                NORTH
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest">
                Digital Platform
              </span>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* Mono */}
            <div
              onMouseEnter={() => setHoveredProject('MONO')}
              className={`flex justify-between items-center transition-all duration-300 cursor-pointer ${
                hoveredProject === 'MONO'
                  ? 'opacity-100 text-[#0066FF]'
                  : 'opacity-40 grayscale text-[#FAF9F6] hover:opacity-75'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter font-display">
                MONO
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest">
                Identity
              </span>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* Form */}
            <div
              onMouseEnter={() => setHoveredProject('FORM')}
              className={`flex justify-between items-center transition-all duration-300 cursor-pointer ${
                hoveredProject === 'FORM'
                  ? 'opacity-100 text-[#0066FF]'
                  : 'opacity-40 grayscale text-[#FAF9F6] hover:opacity-75'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter font-display">
                FORM
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest">
                Commerce
              </span>
            </div>
          </div>

          {/* Bottom Metrology Footer */}
          <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-[0.2em] text-[#888888] pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-white/30" />
              <span>Explore Works</span>
            </div>
            <span className="text-[#0066FF] flex items-center gap-1 font-bold">
              2026 ARCHIVE &nearr;
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
