import React, { useState, useEffect, useRef } from 'react';
import { 
  RotateCw, Eye, Zap, Flame, Shield, Sparkles, 
  Compass, CheckCircle2, Cpu, BatteryCharging, Feather, Wifi, MousePointer
} from 'lucide-react';

const SCROLL_MILESTONES = [
  {
    range: [0, 60],
    angleLabel: '0° FRONT VIEW',
    title: '1200-Nit Lumina OLED Matrix',
    category: 'Visual Masterclass',
    metric: '240Hz ProMotion • 3.2K',
    desc: 'Edge-to-edge borderless quantum OLED panel with infinite contrast, 0.1ms response time, and 100% DCI-P3 cinematic mastering.',
    specs: ['3200 x 2000 Native Resolution', '1,000,000:1 Dynamic Contrast', 'True 10-Bit Color Depth'],
    icon: Eye
  },
  {
    range: [60, 130],
    angleLabel: '90° RIGHT PROFILE',
    title: '0.89cm Aerospace Titanium Chassis',
    category: 'Precision Unibody',
    metric: '890g Ultraportable Mass',
    desc: 'CNC-machined from Grade-5 titanium alloy with razor-sharp chamfers and dual 80Gbps Thunderbolt 5 ports.',
    specs: ['0.89cm Tapered Profile', 'Grade-5 Titanium Shell', '100% Recycled Magnesium Core'],
    icon: Feather
  },
  {
    range: [130, 220],
    angleLabel: '180° REAR EXHAUST',
    title: 'Liquid Metal Vapor Thermal Loop',
    category: 'Zero-Decibel Cooling',
    metric: '< 0.5dB Whisper Fanless',
    desc: 'Dual-phase sintered copper vapor chambers paired with Gallium-Indium liquid metal thermal conductor keeping sustained loads cool.',
    specs: ['65W Sustained Thermal Headroom', 'Zero-Dust Self-Cleaning Channels', 'Superconducting Copper Pipes'],
    icon: Flame
  },
  {
    range: [220, 300],
    angleLabel: '270° LEFT PROFILE & I/O',
    title: 'Dual 80Gbps Thunderbolt 5 & Wi-Fi 7',
    category: 'High-Speed Connectivity',
    metric: '80Gbps Unified Throughput',
    desc: 'Next-gen unified bus architecture driving triple 8K displays, external eGPU compute clusters, and 140W GaN fast charging.',
    specs: ['2x Thunderbolt 5 (80Gbps)', 'Wi-Fi 7 Tri-Band (320MHz)', '140W GaN Fast Charging'],
    icon: Wifi
  },
  {
    range: [300, 360],
    angleLabel: '360° COMPUTE DECK',
    title: '3nm Neural Silicon & Optical RGB Deck',
    category: 'Silicon & Input',
    metric: '68 TOPS Sustained AI Engine',
    desc: 'Proprietary monolithic silicon balancing heavy generative ML workflows with a 0.2ms optical switch keyboard and glass haptic trackpad.',
    specs: ['16 Hybrid CPU Cores', '32-Core Neural Cluster', '0.2ms Optical Actuation Keys'],
    icon: Cpu
  }
];

export default function LaptopScroll360Viewer({ onSelectFeature }) {
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const startRotRef = useRef(0);

  // 1. Scroll-driven rotation on window scroll
  useEffect(() => {
    const handleWindowScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      // Calculate how far container has scrolled into view (0 to 1)
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      if (elementTop <= windowH && elementTop + elementHeight >= 0) {
        const progress = Math.max(0, Math.min(1, (windowH - elementTop) / (windowH + elementHeight)));
        const deg = (progress * 360) % 360;
        setRotationDegrees(deg);
      }
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  // 2. Mouse Wheel & Drag 360 rotation support inside component
  const handleWheel = (e) => {
    e.preventDefault();
    setRotationDegrees((prev) => {
      const next = (prev + e.deltaY * 0.3) % 360;
      return next < 0 ? next + 360 : next;
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    startRotRef.current = rotationDegrees;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    const next = (startRotRef.current + deltaX * 0.7) % 360;
    setRotationDegrees(next < 0 ? next + 360 : next);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Mobile Touch Support
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      startXRef.current = e.touches[0].clientX;
      startRotRef.current = rotationDegrees;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    const next = (startRotRef.current + deltaX * 0.7) % 360;
    setRotationDegrees(next < 0 ? next + 360 : next);
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Determine current active milestone based on rotation degrees
  const currentAngle = Math.round(rotationDegrees);
  const activeMilestone = SCROLL_MILESTONES.find(
    (m) => currentAngle >= m.range[0] && currentAngle <= m.range[1]
  ) || SCROLL_MILESTONES[0];

  const IconComponent = activeMilestone.icon;

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto my-14 px-4 sm:px-6">
      
      {/* Visualizer Glass Container */}
      <div className="relative rounded-3xl glass-panel-glow p-5 sm:p-8 overflow-hidden border border-cyber-cyan/30 shadow-2xl">
        
        {/* Top Header & Degree Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 relative z-20">
          
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-ping" />
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                TENFIVE LAPTOP — Scroll-Driven 360° Rotation
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Scroll page, wheel, or drag horizontally to spin the laptop 360° and reveal architecture specs
            </p>
          </div>

          {/* Real-Time Live Degree Gauge */}
          <div className="flex items-center space-x-3 px-4 py-2 rounded-2xl bg-obsidian-900/90 border border-cyber-cyan/40 shadow-neon-cyan">
            <RotateCw className="w-4 h-4 text-cyber-cyan animate-spin-slow" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Rotation Angle</span>
              <span className="font-mono font-bold text-base text-white">
                {currentAngle}° <span className="text-xs text-cyber-cyan font-normal">/ 360°</span>
              </span>
            </div>
          </div>

        </div>

        {/* 360° Circular Progress Track */}
        <div className="w-full bg-obsidian-900/90 h-1.5 rounded-full overflow-hidden border border-white/10 mb-6 relative">
          <div
            className="h-full bg-gradient-to-r from-cyber-cyan via-fuchsia-500 to-cyber-cyan transition-all duration-75"
            style={{ width: `${(rotationDegrees / 360) * 100}%` }}
          />
        </div>

        {/* 360° Interactive Viewport Stage */}
        <div
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center bg-obsidian-950/90 select-none border border-white/5"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient Glowing Halos */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyber-cyan/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          {/* 360° Dynamic Rotating Laptop Model Construct */}
          <div
            className="relative transition-transform duration-75 ease-out flex flex-col items-center justify-center"
            style={{
              transform: `rotateY(${rotationDegrees}deg) rotateX(16deg) scale(1.05)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top Screen Lid (112° Open) */}
            <div
              className="relative w-72 sm:w-96 md:w-[460px] h-44 sm:h-56 md:h-64 rounded-t-2xl p-2.5 bg-gradient-to-b from-[#182333] to-[#0c131d] border-2 border-cyber-cyan/40 shadow-2xl origin-bottom"
              style={{
                transform: 'rotateX(-68deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Screen Display */}
              <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-obsidian-950 via-[#071d37] to-[#2e0847] border border-cyber-cyan/30 relative flex flex-col items-center justify-center text-center p-4">
                
                {/* Holographic Wallpaper */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.3)_0%,_transparent_70%)]" />
                
                <div className="relative z-10">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-cyber-cyan uppercase">
                    // TENFIVE PRO • 360° REVEAL
                  </span>
                  <h2 className="font-display font-black text-xl sm:text-3xl text-white mt-1 drop-shadow-[0_0_25px_rgba(0,240,255,0.7)]">
                    TENFIVE LAPTOP
                  </h2>
                  <p className="text-[11px] sm:text-xs font-mono text-slate-300 mt-1">
                    ⚡ {activeMilestone.angleLabel}
                  </p>
                </div>

                {/* Cyber Scanline */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent h-2 animate-scanline" />
              </div>

              {/* Glowing Monogram Logo on Back of Lid (Visible when rotated around) */}
              <div
                className="absolute inset-0 rounded-t-2xl bg-gradient-to-b from-[#141d2b] to-[#080d15] border-2 border-cyber-cyan/40 flex items-center justify-center p-4 backface-hidden"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="w-20 h-20 rounded-2xl bg-cyber-cyan/15 border-2 border-cyber-cyan flex items-center justify-center shadow-neon-cyan">
                  <span className="font-display font-black text-3xl text-white">10:5</span>
                </div>
              </div>
            </div>

            {/* Zero-Gap Hinge Bar */}
            <div className="w-64 sm:w-80 md:w-[420px] h-3 bg-gradient-to-r from-obsidian-900 via-slate-700 to-obsidian-900 rounded-sm border-t border-b border-cyber-cyan/50 shadow-md relative z-20 flex items-center justify-center">
              <span className="text-[7px] font-mono text-cyber-cyan font-bold tracking-widest uppercase">
                TENFIVE PRECISION HINGE
              </span>
            </div>

            {/* Bottom Keyboard Deck & Trackpad */}
            <div className="relative w-72 sm:w-96 md:w-[460px] h-48 sm:h-60 md:h-72 rounded-b-2xl p-4 bg-gradient-to-b from-[#101826] to-[#070b12] border-2 border-t-0 border-cyber-cyan/40 shadow-2xl">
              
              {/* Keyboard Grid */}
              <div className="w-full h-32 sm:h-40 md:h-48 rounded-xl bg-obsidian-950/90 border border-white/10 p-2.5 flex flex-col justify-between">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div key={row} className="flex gap-1 justify-between h-4 sm:h-5">
                    {Array.from({ length: 12 }).map((_, col) => (
                      <div
                        key={col}
                        className="flex-1 rounded-sm bg-slate-900/80 border border-cyber-cyan/20 hover:border-cyber-cyan transition-colors"
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Glass Haptic Trackpad */}
              <div className="w-24 sm:w-32 h-10 sm:h-14 mx-auto mt-2 rounded-lg bg-slate-900/70 border border-cyber-cyan/30" />

              {/* Edge RGB Lightbar */}
              <div className="absolute -bottom-1 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_15px_#00F0FF]" />
            </div>

          </div>

          {/* Floating Instructions Banner */}
          <div className="absolute bottom-4 left-4 pointer-events-none z-10 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-md">
            <MousePointer className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>Scroll page or drag to rotate 360°</span>
          </div>

          <div className="absolute top-4 right-4 pointer-events-none z-10 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>{activeMilestone.angleLabel}</span>
          </div>

        </div>

        {/* Live Synchronized Architecture Spec Card (Updates on 360° scroll rotation) */}
        {activeMilestone && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-panel border border-cyber-cyan/30 animate-fade-in shadow-glass-card">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-cyber-cyan/15 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan shadow-neon-cyan">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">
                    // 360° REVEAL AT {activeMilestone.angleLabel} • {activeMilestone.category}
                  </span>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-white mt-0.5">
                    {activeMilestone.title}
                  </h4>
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyber-cyan/20 to-fuchsia-500/20 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs font-bold self-start md:self-auto shadow-neon-cyan">
                {activeMilestone.metric}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {activeMilestone.desc}
            </p>

            {/* Spec Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeMilestone.specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
