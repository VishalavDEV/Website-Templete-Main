import React, { useState, useRef } from 'react';
import { 
  Eye, Zap, Flame, Shield, Sparkles, Layers, 
  Cpu, BatteryCharging, Feather, Wifi, Sliders, CheckCircle2,
  Maximize2, Palette, Scan, Radio, Volume2, Move, Crosshair
} from 'lucide-react';

const VIEW_MODES = [
  { id: 'hero', name: 'Gaming Studio', icon: Flame, badge: '8K Photoreal' },
  { id: 'hotspots', name: 'Tactical Hotspots', icon: Crosshair, badge: 'Spec Inspect' },
  { id: 'xray', name: 'Internal Silicon X-Ray', icon: Layers, badge: 'Thermal HUD' },
  { id: 'colorway', name: 'Battle Finishes', icon: Palette, badge: '4 Finishes' },
];

const COLORWAYS = [
  { id: 'crimson', name: 'Crimson Fury', hex: '#FF003C', accent: 'from-cyber-red to-cyber-crimson', glow: 'rgba(255, 0, 60, 0.45)' },
  { id: 'amber', name: 'Solar Amber', hex: '#F97316', accent: 'from-orange-500 to-amber-600', glow: 'rgba(249, 115, 22, 0.4)' },
  { id: 'obsidian', name: 'Obsidian Stealth', hex: '#E11D48', accent: 'from-rose-600 to-slate-900', glow: 'rgba(225, 29, 72, 0.35)' },
  { id: 'titanium', name: 'Titanium Frost', hex: '#F43F5E', accent: 'from-slate-200 to-rose-400', glow: 'rgba(244, 63, 94, 0.35)' },
];

const HOTSPOTS = [
  {
    id: 'display',
    title: '240Hz Lumina OLED Gaming Matrix',
    pos: 'top-[32%] left-[48%]',
    desc: '3.2K resolution, 240Hz ProMotion, 0.1ms latency, and 1200 nits HDR for zero ghosting.',
    metric: '240Hz • 0.1ms Latency',
    icon: Eye
  },
  {
    id: 'keyboard',
    title: 'Per-Key Optical RGB Deck',
    pos: 'top-[68%] left-[42%]',
    desc: '0.2ms actuation optical switches with Aura Sync RGB underglow and glass haptic trackpad.',
    metric: '1.5mm Travel • 8000Hz Polling',
    icon: Zap
  },
  {
    id: 'cooling',
    title: 'Liquid Metal Vapor Chamber Exhaust',
    pos: 'top-[65%] right-[18%]',
    desc: 'Gallium-indium liquid metal paired with dual-phase vapor chambers keeping loads sub-65°C.',
    metric: '< 0.5dB Whisper Fanless',
    icon: Flame
  },
  {
    id: 'hinge',
    title: '180° Zero-Gap Liquid Metal Hinge',
    pos: 'top-[52%] left-[54%]',
    desc: 'Dual-cam titanium hinge designed for 180° lay-flat collaborative esports review.',
    metric: '180° Full Lay-Flat',
    icon: Shield
  }
];

export default function LaptopRealShowcase({ onSelectFeature, playClick }) {
  const [activeMode, setActiveMode] = useState('hero');
  const [activeColor, setActiveColor] = useState(COLORWAYS[0]);
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[0]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleModeChange = (modeId) => {
    playClick?.();
    setActiveMode(modeId);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-14 px-4 sm:px-6">
      
      {/* Frame Container */}
      <div className="relative rounded-3xl glass-panel-glow p-5 sm:p-8 overflow-hidden border border-cyber-red/30 shadow-2xl">
        
        {/* Top Header & View Modes Switcher */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 relative z-20">
          
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-red animate-ping" />
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                TENFIVE LAPTOP — Gaming Showcase Studio
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Switch view modes to inspect real 8K gaming photography, internal thermal HUD, and battle finishes
            </p>
          </div>

          {/* View Mode Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-obsidian-900/90 border border-cyber-red/20">
            {VIEW_MODES.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => handleModeChange(mode.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyber-red to-cyber-crimson text-white font-bold shadow-neon-red'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-cyber-crimson" />
                  <span>{mode.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Real Laptop Interactive Viewport Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full min-h-[420px] sm:min-h-[500px] rounded-2xl overflow-hidden flex items-center justify-center p-4 sm:p-8 select-none bg-radial-gradient"
          style={{ perspective: '1200px' }}
        >
          {/* Dynamic Ambient Gaming Neon Glows */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-60"
            style={{ backgroundColor: activeColor.glow }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-40"
            style={{ backgroundColor: activeColor.glow }}
          />

          {/* Real Laptop High-Res Image with 3D Tilt */}
          <div
            className="relative max-w-2xl sm:max-w-3xl w-full flex items-center justify-center transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Real Studio Image */}
            <img
              src="/laptop_hero.jpg"
              alt="TENFIVE LAPTOP Gaming Flagship"
              className={`w-full h-auto object-contain max-h-[460px] rounded-2xl drop-shadow-[0_25px_60px_rgba(255,0,60,0.4)] transition-all duration-500 ${
                activeMode === 'xray' ? 'filter invert hue-rotate-140 brightness-125 contrast-125 opacity-85' : ''
              }`}
            />

            {/* Red Laser Scanline in Hero Mode */}
            {activeMode === 'hero' && (
              <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyber-red to-transparent shadow-[0_0_20px_#FF003C] animate-scanline" />
              </div>
            )}

            {/* Internal X-Ray Silicon Holographic HUD Overlay (Red Gaming HUD) */}
            {activeMode === 'xray' && (
              <div className="absolute inset-0 rounded-2xl border-2 border-cyber-red/60 bg-cyber-red/5 flex flex-col justify-between p-6 pointer-events-none animate-fade-in">
                <div className="flex justify-between items-start text-[11px] font-mono text-rose-300">
                  <div className="p-2 rounded bg-obsidian-950/90 border border-cyber-red/40 shadow-neon-red">
                    <span>⚡ 3NM MONOLITHIC NEURAL GPU: 68 TOPS</span>
                  </div>
                  <div className="p-2 rounded bg-obsidian-950/90 border border-cyber-red/40 shadow-neon-red">
                    <span>❄️ LIQUID METAL DUAL VAPOR CHAMBER: 65W TDP</span>
                  </div>
                </div>

                <div className="flex justify-between items-end text-[11px] font-mono text-rose-300">
                  <div className="p-2 rounded bg-obsidian-950/90 border border-cyber-red/40 shadow-neon-red">
                    <span>🔋 99.8WH HIGH-DENSITY SILICON ANODE</span>
                  </div>
                  <div className="p-2 rounded bg-obsidian-950/90 border border-cyber-red/40 shadow-neon-red">
                    <span>🪶 GRADE-5 TITANIUM UNIBODY: 890G</span>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Tactical Hotspot Pins */}
            {activeMode === 'hotspots' && (
              <>
                {HOTSPOTS.map((spot) => {
                  const isSelected = activeHotspot.id === spot.id;
                  const Icon = spot.icon;
                  return (
                    <div key={spot.id} className={`absolute z-30 ${spot.pos}`}>
                      <button
                        onClick={() => {
                          playClick?.();
                          setActiveHotspot(spot);
                        }}
                        className={`relative group p-2 rounded-full transition-all duration-300 ${
                          isSelected ? 'scale-125' : 'hover:scale-110'
                        }`}
                        aria-label={spot.title}
                      >
                        <span className="absolute inset-0 rounded-full bg-cyber-red/40 animate-ping" />
                        <span className={`relative flex items-center justify-center w-7 h-7 rounded-full border shadow-neon-red transition-all ${
                          isSelected
                            ? 'bg-cyber-red text-white border-white font-bold'
                            : 'bg-obsidian-950/90 text-cyber-crimson border-cyber-red'
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    </div>
                  );
                })}
              </>
            )}

          </div>

          {/* Floating Instructions Bottom Badge */}
          <div className="absolute bottom-4 left-4 pointer-events-none z-10 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-cyber-red/30 text-[11px] font-mono text-rose-200 backdrop-blur-md">
            <Move className="w-3.5 h-3.5 text-cyber-red" />
            <span>Move cursor to tilt 3D perspective</span>
          </div>

          <div className="absolute top-4 right-4 pointer-events-none z-10 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-red/10 border border-cyber-red/30 text-[11px] font-mono text-rose-300 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-cyber-red animate-pulse" />
            <span>Gaming 8K Studio</span>
          </div>

        </div>

        {/* Mode-Specific Interactive Controls */}

        {/* 1. Colorway Palette Customizer */}
        {activeMode === 'colorway' && (
          <div className="mt-6 p-5 rounded-2xl glass-panel border border-cyber-red/20 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
            <div>
              <span className="text-[10px] font-mono text-cyber-crimson uppercase tracking-wider">
                // FINISH CUSTOMIZER
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Selected Battle Armor: <span className="text-cyber-crimson">{activeColor.name}</span>
              </h4>
            </div>

            <div className="flex items-center space-x-3">
              {COLORWAYS.map((color) => (
                <button
                  key={color.id}
                  onClick={() => {
                    playClick?.();
                    setActiveColor(color);
                  }}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                    activeColor.id === color.id
                      ? 'border-cyber-red bg-cyber-red/20 text-white font-bold shadow-neon-red'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/40"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. Hotspot Selected Detail Card */}
        {activeMode === 'hotspots' && activeHotspot && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-panel border border-cyber-red/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in shadow-glass-card">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-cyber-red/15 border border-cyber-red/40 flex items-center justify-center text-cyber-crimson shadow-neon-red shrink-0">
                <activeHotspot.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyber-crimson uppercase tracking-wider">
                  // ACTIVE TACTICAL PIN
                </span>
                <h4 className="font-display font-bold text-xl text-white mt-0.5">
                  {activeHotspot.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">{activeHotspot.desc}</p>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-cyber-red/10 border border-cyber-red/40 text-rose-300 font-mono text-xs font-bold shrink-0 self-start sm:self-auto shadow-neon-red">
              {activeHotspot.metric}
            </div>
          </div>
        )}

        {/* 3. Hero & X-Ray Summary Card */}
        {(activeMode === 'hero' || activeMode === 'xray') && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-panel border border-cyber-red/20 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
            <div>
              <span className="text-[10px] font-mono text-cyber-crimson uppercase tracking-wider">
                // GAMING ARCHITECTURAL OVERVIEW
              </span>
              <h4 className="font-display font-bold text-xl text-white mt-0.5">
                TENFIVE LAPTOP Gaming Pro
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Combining ultra-thin aerospace unibody manufacturing with zero-compromise AAA gaming and generative AI throughput.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-cyber-red/10 border border-cyber-red/30 text-rose-200">
                🔥 3nm Neural Core
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-cyber-red/10 border border-cyber-red/30 text-rose-200">
                ⚡ 240Hz OLED
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-cyber-red/10 border border-cyber-red/30 text-rose-200">
                🪶 0.89cm Profile
              </span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
