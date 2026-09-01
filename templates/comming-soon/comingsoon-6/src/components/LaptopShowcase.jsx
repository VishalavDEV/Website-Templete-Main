import React, { useState, useRef } from 'react';
import { Sparkles, Zap, Eye, Cpu, ShieldCheck, Flame, Radio } from 'lucide-react';

const HOTSPOTS = [
  {
    id: 'display',
    title: 'Lumina OLED 240Hz',
    desc: 'Border-less quantum matrix with true blacks & 1200 nits peak brightness.',
    position: 'top-[30%] left-[50%] -translate-x-1/2',
    icon: Eye,
    tag: 'Visuals'
  },
  {
    id: 'keyboard',
    title: 'Per-Key RGB Optical Switches',
    desc: '0.2ms actuation with full Aura Sync programmable underglow.',
    position: 'top-[68%] left-[42%]',
    icon: Zap,
    tag: 'Tactile'
  },
  {
    id: 'cooling',
    title: 'Liquid Metal Vapor Exhaust',
    desc: '0dB whisper fanless architecture with custom copper cold plate.',
    position: 'top-[78%] right-[22%]',
    icon: Flame,
    tag: 'Thermals'
  },
  {
    id: 'lightbar',
    title: 'Edge-to-Edge Aura Lightbar',
    desc: 'Dynamic RGB ambient edge illumination synced with on-screen action.',
    position: 'bottom-[4%] left-[28%]',
    icon: Radio,
    tag: 'Aesthetic'
  }
];

export default function LaptopShowcase({ onSelectHotspot }) {
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[0]);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({
      rotateX: -y * 16,
      rotateY: x * 18,
      scale: 1.02
    });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-10 px-4">
      
      {/* Visualizer Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl glass-panel-glow p-6 sm:p-10 overflow-hidden border border-cyber-cyan/30 shadow-2xl transition-all duration-300"
        style={{ perspective: '1200px' }}
      >
        {/* Ambient Underglow Lights mirroring laptop RGB */}
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-cyber-cyan/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-fuchsia-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        
        {/* Top Badges & Interactive Mode Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-20">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
            <span className="text-white font-bold">AURA PRO X1</span>
            <span className="text-cyber-cyan">• 3D Interactive Showcase</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-obsidian-900/80 p-1 rounded-xl border border-white/10">
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => {
                  setActiveHotspot(spot);
                  onSelectHotspot?.(spot);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeHotspot.id === spot.id
                    ? 'bg-cyber-cyan text-obsidian-950 font-bold shadow-neon-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {spot.tag}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Floating Laptop Stage */}
        <div
          className="relative mx-auto flex items-center justify-center transition-transform duration-200 ease-out py-4"
          style={{
            transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Glowing Shadow Base */}
          <div className="absolute -bottom-6 w-3/4 h-12 bg-cyber-cyan/30 rounded-full blur-2xl pointer-events-none" />

          {/* Real Laptop Image with Ambient Filter & Glow */}
          <div className="relative max-w-xl sm:max-w-2xl w-full flex justify-center group">
            <img
              src="/laptop.jpg"
              alt="AURA PRO X1 Flagship Laptop"
              className="w-full h-auto object-contain max-h-[460px] drop-shadow-[0_20px_50px_rgba(0,240,255,0.35)] rounded-2xl relative z-10 transition-all duration-500"
            />

            {/* Futuristic Scanning Laser Sweep across screen */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_15px_#00F0FF] animate-scanline" />
            </div>

            {/* Interactive Hotspot Trigger Pins */}
            {HOTSPOTS.map((spot) => (
              <div
                key={spot.id}
                className={`absolute z-30 ${spot.position}`}
              >
                <button
                  onClick={() => {
                    setActiveHotspot(spot);
                    onSelectHotspot?.(spot);
                  }}
                  className={`relative group/pin p-2 rounded-full transition-all duration-300 ${
                    activeHotspot.id === spot.id
                      ? 'scale-125'
                      : 'hover:scale-110'
                  }`}
                  aria-label={spot.title}
                >
                  <span className="absolute inset-0 rounded-full bg-cyber-cyan/30 animate-ping" />
                  <span className={`relative flex items-center justify-center w-6 h-6 rounded-full border shadow-neon-cyan ${
                    activeHotspot.id === spot.id
                      ? 'bg-cyber-cyan text-obsidian-950 border-white'
                      : 'bg-obsidian-900/90 text-cyber-cyan border-cyber-cyan'
                  }`}>
                    <spot.icon className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Hotspot Detail Card */}
        {activeHotspot && (
          <div className="relative z-20 mt-6 p-4 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan shrink-0">
                <activeHotspot.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-display font-bold text-white text-base">{activeHotspot.title}</h4>
                  <span className="text-[10px] font-mono uppercase text-cyber-cyan px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20">
                    {activeHotspot.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">{activeHotspot.desc}</p>
              </div>
            </div>
            
            <span className="text-xs font-mono text-slate-400 self-end sm:self-center shrink-0">
              💡 Hover & Move cursor to inspect 3D angle
            </span>
          </div>
        )}

      </div>

    </div>
  );
}
