import React, { useState } from 'react';
import { useMouseGlow } from '../hooks/useMouseGlow';
import { ChevronRight } from 'lucide-react';

export default function FeatureCard({ feature, index, onSelect }) {
  const { mousePosition, handleMouseMove } = useMouseGlow();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(feature)}
      className="group relative rounded-2xl glass-panel p-6 sm:p-7 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden border border-cyber-red/20 hover:border-cyber-red/60 shadow-glass-card hover:shadow-neon-red"
    >
      {/* Dynamic Cursor Spotlight with Gaming Red Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 60, 0.16), transparent 80%)`,
        }}
      />

      {/* Top Header: Pillar Number & Icon */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs text-rose-400 tracking-widest uppercase">
          // PILLAR 0{index + 1}
        </span>
        <div className="w-11 h-11 rounded-xl bg-cyber-red/10 border border-cyber-red/30 flex items-center justify-center text-cyber-crimson group-hover:text-white group-hover:bg-cyber-red/30 group-hover:border-cyber-red transition-all duration-300 shadow-neon-red">
          <feature.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      {/* Feature Title */}
      <h3 className="font-display font-bold text-xl text-white group-hover:text-cyber-crimson transition-colors duration-200">
        {feature.title}
      </h3>

      {/* Feature Tagline */}
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
        {feature.description}
      </p>

      {/* Micro Spec Highlight Pill */}
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="text-rose-300 font-semibold bg-cyber-red/10 px-2.5 py-1 rounded-md border border-cyber-red/30">
          {feature.highlight}
        </span>
        <span className="text-slate-400 group-hover:text-white flex items-center space-x-0.5 transition-colors">
          <span>Explore</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
}
