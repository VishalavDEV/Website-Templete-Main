import React, { useState, useRef } from 'react';
import { 
  Maximize2, Eye, Zap, Flame, Shield, Sparkles, 
  RotateCw, Compass, Layers, CheckCircle2, Sliders, Monitor, Laptop, ArrowRight
} from 'lucide-react';

const VIEW_ANGLES = [
  {
    id: 'flat',
    name: '180° Lay-Flat Studio',
    angle: 180,
    hingeAngle: 180,
    category: 'Collaborative Canvas',
    headline: '180° Zero-Gap Precision Hinge',
    metric: '180° Dual-Plane Layout',
    desc: 'Lays completely flat at 180 degrees for effortless collaborative reviews, group sharing, and stylus touch canvas workflows without hinge wobbling.',
    specs: ['Liquid-Metal Dual Cam Hinge', 'Tested for 150,000+ Cycles', '100% Zero Chassis Gap']
  },
  {
    id: 'standard',
    name: '115° Workstation',
    angle: 115,
    hingeAngle: 115,
    category: 'Daily Pro Performance',
    headline: 'Ergonomic Productivity Angle',
    metric: 'Optimal Viewing Posture',
    desc: 'The gold standard 115° tilt optimized for anti-glare viewing, perfect webcam eye-level centering, and wrist rest comfort.',
    specs: ['Anti-Reflective 1200-Nit OLED', '1080p FHD IR Privacy Shutter', 'Low Blue Light TUV Certified']
  },
  {
    id: 'cinema',
    name: '90° Upright Cinema',
    angle: 90,
    hingeAngle: 90,
    category: 'Immersive Media',
    headline: 'Pure Bezel-Less Viewing',
    metric: '94% Screen-to-Body Ratio',
    desc: 'Upright 90° orientation dedicated to maximum color contrast and spatial Dolby Atmos audio dispersion.',
    specs: ['100% DCI-P3 Color Mastery', '6-Speaker Spatial Acoustic Array', 'HDR10+ & Dolby Vision']
  },
  {
    id: 'profile',
    name: 'Side Profile & I/O',
    angle: 45,
    hingeAngle: 115,
    category: 'Chassis Architecture',
    headline: '0.89cm Ultra-Thin Profile',
    metric: '890g Titanium Unibody',
    desc: 'Razor-thin CNC machined Grade-5 titanium edge showcasing integrated dual Thunderbolt 5 and high-speed USB-C charging.',
    specs: ['2x Thunderbolt 5 (80Gbps)', 'Ultra-Low 0.89cm Taper', 'Anodized Scratch-Resistant Finish']
  }
];

export default function Laptop180Viewer({ onSelectFeature }) {
  const [selectedAngle, setSelectedAngle] = useState(VIEW_ANGLES[0]);
  const [hingeSlider, setHingeSlider] = useState(180);
  const [panRotation, setPanRotation] = useState(0); // -90 to +90 deg
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const containerRef = useRef(null);

  // Mouse / Touch 180° Pan Dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    startXRef.current = e.clientX;
    setPanRotation((prev) => Math.max(-90, Math.min(90, prev + deltaX * 0.4)));
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      startXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    startXRef.current = e.touches[0].clientX;
    setPanRotation((prev) => Math.max(-90, Math.min(90, prev + deltaX * 0.4)));
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleSelectPreset = (preset) => {
    setSelectedAngle(preset);
    setHingeSlider(preset.hingeAngle);
    if (preset.id === 'profile') {
      setPanRotation(45);
    } else {
      setPanRotation(0);
    }
    onSelectFeature?.(preset);
  };

  // Screen tilt in 3D: 180 deg = flat (0 deg offset), 90 deg = upright (-90 deg offset)
  const screenAngleDegrees = (180 - hingeSlider);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 px-4 sm:px-6">
      
      {/* Visualizer Glass Frame */}
      <div className="relative rounded-3xl glass-panel-glow p-5 sm:p-8 overflow-hidden border border-cyber-cyan/30 shadow-2xl">
        
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 relative z-20">
          
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-ping" />
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                TENFIVE LAPTOP — 180° Lay-Flat & Hinge Showcase
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Adjust the 180° hinge slider or drag horizontally across the 180° panoramic arc
            </p>
          </div>

          {/* Angle Presets Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-obsidian-900/90 border border-white/10">
            {VIEW_ANGLES.map((anglePreset) => (
              <button
                key={anglePreset.id}
                onClick={() => handleSelectPreset(anglePreset)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedAngle.id === anglePreset.id
                    ? 'bg-cyber-cyan text-obsidian-950 font-bold shadow-neon-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {anglePreset.name}
              </button>
            ))}
          </div>

        </div>

        {/* 180 Degree Interactive Hinge Slider Bar */}
        <div className="mb-6 p-4 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <Sliders className="w-4 h-4 text-cyber-cyan shrink-0" />
            <div className="flex items-baseline space-x-2">
              <span className="text-xs font-mono text-slate-300">Hinge Flex:</span>
              <span className="text-base font-mono font-bold text-cyber-cyan">{hingeSlider}°</span>
              <span className="text-[10px] font-mono text-slate-400">
                {hingeSlider === 180 ? '(Full Lay-Flat Mode)' : hingeSlider === 115 ? '(Workstation Mode)' : hingeSlider === 90 ? '(Cinema Upright)' : '(Custom Angle)'}
              </span>
            </div>
          </div>

          {/* Range Slider */}
          <div className="w-full sm:w-72 flex items-center space-x-3">
            <span className="text-[11px] font-mono text-slate-400">90°</span>
            <input
              type="range"
              min="90"
              max="180"
              value={hingeSlider}
              onChange={(e) => {
                const val = Number(e.target.value);
                setHingeSlider(val);
                const closest = VIEW_ANGLES.find(a => Math.abs(a.hingeAngle - val) < 15);
                if (closest) setSelectedAngle(closest);
              }}
              className="w-full h-1.5 bg-obsidian-900 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
            />
            <span className="text-[11px] font-mono text-slate-400">180°</span>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono text-slate-400">
            <Compass className="w-3.5 h-3.5 text-cyber-violet" />
            <span>Pan: {Math.round(panRotation)}°</span>
          </div>

        </div>

        {/* Interactive 180° Viewport Stage */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center bg-obsidian-950/80 select-none"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient Lighting halos */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyber-cyan/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          {/* 3D Transformable Laptop Construct */}
          <div
            className="relative transition-transform duration-150 ease-out flex flex-col items-center justify-center"
            style={{
              transform: `rotateY(${panRotation}deg) rotateX(24deg) scale(1.02)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top Screen Lid with Dynamic 180° Hinge Rotation */}
            <div
              className="relative w-72 sm:w-96 md:w-[460px] h-44 sm:h-56 md:h-64 rounded-t-2xl p-2.5 bg-gradient-to-b from-[#161f2e] to-[#0c121c] border-2 border-cyber-cyan/40 shadow-2xl transition-all duration-300 origin-bottom"
              style={{
                transform: `rotateX(${-screenAngleDegrees}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* OLED Display Surface with Cyber Hologram Screen */}
              <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-obsidian-950 via-[#07192f] to-[#200732] border border-cyber-cyan/30 relative flex flex-col items-center justify-center text-center p-4">
                
                {/* Glowing Background Vectors */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.25)_0%,_transparent_70%)]" />
                
                {/* Hologram Title on Screen */}
                <div className="relative z-10">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-cyber-cyan uppercase">
                    // TENFIVE OS • NEURAL V4
                  </span>
                  <h2 className="font-display font-black text-xl sm:text-3xl text-white mt-1 drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                    TENFIVE LAPTOP
                  </h2>
                  <p className="text-[11px] sm:text-xs font-mono text-slate-300 mt-1">
                    {hingeSlider === 180 ? '⚡ 180° LAY-FLAT STUDIO CANVAS ACTIVE' : '⚡ 3NM QUANTUM ARCHITECTURE'}
                  </p>
                </div>

                {/* Cyber Scanline effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyber-cyan/15 to-transparent h-1.5 animate-scanline" />
              </div>

              {/* Webcam & Sensor Bar */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-obsidian-950 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shadow-neon-cyan" />
              </div>
            </div>

            {/* Precision 180° Zero-Gap Hinge Bar */}
            <div className="w-64 sm:w-80 md:w-[420px] h-3 bg-gradient-to-r from-obsidian-900 via-slate-700 to-obsidian-900 rounded-sm border-t border-b border-cyber-cyan/50 shadow-md relative z-20 flex items-center justify-center">
              <span className="text-[7px] font-mono text-cyber-cyan font-bold tracking-widest uppercase">
                180° HINGE
              </span>
            </div>

            {/* Bottom Keyboard Deck & Trackpad */}
            <div className="relative w-72 sm:w-96 md:w-[460px] h-48 sm:h-60 md:h-72 rounded-b-2xl p-4 bg-gradient-to-b from-[#0e1522] to-[#080d15] border-2 border-t-0 border-cyber-cyan/40 shadow-2xl">
              
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

          {/* Floating Instructions */}
          <div className="absolute bottom-4 left-4 pointer-events-none z-10 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Drag horizontally to rotate 180° view • Use slider above for hinge</span>
          </div>

          <div className="absolute top-4 right-4 pointer-events-none z-10 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>180° Lay-Flat Engineering</span>
          </div>

        </div>

        {/* Selected Preset Specification Detail Card */}
        {selectedAngle && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-panel border border-cyber-cyan/30 animate-fade-in shadow-glass-card">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">
                  // {selectedAngle.category}
                </span>
                <h4 className="font-display font-black text-xl sm:text-2xl text-white mt-0.5">
                  {selectedAngle.headline}
                </h4>
              </div>

              <div className="px-4 py-1.5 rounded-xl bg-cyber-cyan/15 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs font-bold self-start md:self-auto shadow-neon-cyan">
                {selectedAngle.metric}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {selectedAngle.desc}
            </p>

            {/* Spec Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedAngle.specs.map((spec, i) => (
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
