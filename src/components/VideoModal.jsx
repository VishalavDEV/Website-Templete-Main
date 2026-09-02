import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Layers,
  Activity,
  Scan,
  Compass,
  BatteryCharging,
  Eye,
  Flame,
  Droplets,
  Sparkles
} from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSpectrum, setActiveSpectrum] = useState('rgb'); // 'rgb' | 'ndvi' | 'thermal' | 'moisture'
  const [secondsElapsed, setSecondsElapsed] = useState(42);
  const [showTelemetry, setShowTelemetry] = useState(true);

  // Live telemetry counters that tick smoothly
  const [telemetry, setTelemetry] = useState({
    altitude: 112.4,
    speed: 8.2,
    battery: 94,
    ndvi: 0.88,
    canopyTemp: 21.6,
    soilMoisture: 31.2,
    scannedAcres: 148,
  });

  // Simulated live field feeds
  const spectrumFeeds = {
    rgb: {
      title: "RGB High-Resolution 4K Sensor",
      desc: "True color visual inspection with automated pest & weed classification.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85",
      filterClass: "hue-rotate-0 saturate-110",
      accent: "text-emerald-400"
    },
    ndvi: {
      title: "Multispectral NDVI Vegetation Index",
      desc: "Normalized Difference Vegetation Index tracking chlorophyll absorption and early blight.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=85",
      filterClass: "contrast-150 saturate-200 hue-rotate-60",
      accent: "text-wheat-400"
    },
    thermal: {
      title: "FLIR Thermal Canopy Transpiration",
      desc: "Canopy temperature analysis measuring stomatal conductance and water stress.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1600&q=85",
      filterClass: "invert sepia hue-rotate-180 contrast-125",
      accent: "text-amber-400"
    },
    moisture: {
      title: "Subsurface IoT Moisture Radar Overlay",
      desc: "Wireless probe telemetry synchronized with subsurface drip irrigation solenoids.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=85",
      filterClass: "brightness-90 contrast-125 saturate-150",
      accent: "text-cyan-400"
    }
  };

  const currentFeed = spectrumFeeds[activeSpectrum];

  // Dynamic ticking simulation
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
      setTelemetry((prev) => ({
        altitude: Number((112 + Math.sin(Date.now() / 2000) * 1.5).toFixed(1)),
        speed: Number((8.2 + Math.cos(Date.now() / 1500) * 0.4).toFixed(1)),
        battery: Math.max(10, Number((94 - (Date.now() % 100000) / 15000).toFixed(0))),
        ndvi: Number((0.87 + Math.sin(Date.now() / 3000) * 0.04).toFixed(2)),
        canopyTemp: Number((21.4 + Math.cos(Date.now() / 2500) * 0.3).toFixed(1)),
        soilMoisture: Number((31.0 + Math.sin(Date.now() / 2000) * 0.5).toFixed(1)),
        scannedAcres: Math.min(400, Math.floor(148 + (Date.now() % 50000) / 500)),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/90 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-forest-900 border border-forest-700/80 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-forest-800 bg-forest-950/95 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-forest-800 border border-forest-700 flex items-center justify-center text-wheat-400">
                  <Scan className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-sm sm:text-base font-display">
                      TerraNova Live Autonomous Drone Scouting
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE RTK FEED
                    </span>
                  </div>
                  <p className="text-forest-400 text-xs mt-0.5">
                    Field 12-North • Willamette Valley Organic Research Test Plot
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowTelemetry(!showTelemetry)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                    showTelemetry 
                      ? 'bg-forest-800 text-wheat-400 border-forest-600' 
                      : 'bg-forest-950 text-forest-400 border-forest-800'
                  }`}
                >
                  {showTelemetry ? 'HUD Active' : 'HUD Hidden'}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-forest-400 hover:text-white rounded-xl hover:bg-forest-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Spectrum Selector Tabs Bar */}
            <div className="px-6 py-2.5 bg-forest-950/80 border-b border-forest-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-forest-400 font-semibold uppercase tracking-wider text-[10px] mr-1">
                  Sensor Band:
                </span>
                <button
                  onClick={() => setActiveSpectrum('rgb')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    activeSpectrum === 'rgb'
                      ? 'bg-emerald-500 text-forest-950 shadow-sm'
                      : 'bg-forest-900 text-forest-300 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>RGB Visual</span>
                </button>

                <button
                  onClick={() => setActiveSpectrum('ndvi')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    activeSpectrum === 'ndvi'
                      ? 'bg-wheat-500 text-forest-950 shadow-sm'
                      : 'bg-forest-900 text-forest-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>NDVI Biomass</span>
                </button>

                <button
                  onClick={() => setActiveSpectrum('thermal')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    activeSpectrum === 'thermal'
                      ? 'bg-amber-500 text-forest-950 shadow-sm'
                      : 'bg-forest-900 text-forest-300 hover:text-white'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>FLIR Thermal</span>
                </button>

                <button
                  onClick={() => setActiveSpectrum('moisture')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                    activeSpectrum === 'moisture'
                      ? 'bg-cyan-500 text-forest-950 shadow-sm'
                      : 'bg-forest-900 text-forest-300 hover:text-white'
                  }`}
                >
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Soil Radar</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>UAV-04 AUTO-FLIGHT ACTIVE</span>
              </div>
            </div>

            {/* Simulated Live Drone Video Feed (16:9) */}
            <div className="relative aspect-video w-full bg-black overflow-hidden select-none">
              
              {/* Dynamic Aerial Background Image with subtle panning effect */}
              <motion.img
                key={activeSpectrum}
                src={currentFeed.image}
                alt={currentFeed.title}
                initial={{ scale: 1.05, opacity: 0.8 }}
                animate={{ 
                  scale: isPlaying ? [1.05, 1.12, 1.05] : 1.05,
                  x: isPlaying ? [0, -10, 0] : 0,
                  y: isPlaying ? [0, -6, 0] : 0
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className={`w-full h-full object-cover transition-all duration-700 ${currentFeed.filterClass}`}
              />

              {/* Scanning Grid Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

              {/* Laser Scanning Line Sweep Animation */}
              {isPlaying && (
                <motion.div
                  animate={{ y: ['0%', '100%', '0%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)] pointer-events-none"
                />
              )}

              {/* Telemetry HUD Overlay */}
              {showTelemetry && (
                <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between text-white font-mono text-[11px] sm:text-xs z-10">
                  
                  {/* Top HUD Box */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="bg-forest-950/85 backdrop-blur-md p-3 rounded-2xl border border-forest-700/60 shadow-xl space-y-1">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <Activity className="w-4 h-4" />
                        <span>NDVI VIGOR: {telemetry.ndvi} (OPTIMAL)</span>
                      </div>
                      <div className="text-forest-200">CANOPY TEMP: {telemetry.canopyTemp}°C | VPD: 1.18 kPa</div>
                      <div className="text-forest-300 text-[10px]">PAR ABSORPTION: 96.4% • 0% BLIGHT DETECTED</div>
                    </div>

                    <div className="bg-forest-950/85 backdrop-blur-md p-3 rounded-2xl border border-forest-700/60 shadow-xl space-y-1 text-right">
                      <div className="flex items-center justify-end gap-2 text-wheat-400 font-bold">
                        <Compass className="w-4 h-4" />
                        <span>ALT: {telemetry.altitude}M | SPD: {telemetry.speed}M/S</span>
                      </div>
                      <div className="text-forest-200">BATTERY: {telemetry.battery}% • SOLAR DOCK #01</div>
                      <div className="text-forest-300 text-[10px]">COVERED: {telemetry.scannedAcres} / 400 ACRES</div>
                    </div>
                  </div>

                  {/* Center Flight Crosshairs Reticle */}
                  <div className="self-center relative w-24 h-24 border border-emerald-400/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-emerald-400 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
                    </div>
                    {/* Crosshair ticks */}
                    <div className="absolute top-0 w-0.5 h-2 bg-emerald-400/60" />
                    <div className="absolute bottom-0 w-0.5 h-2 bg-emerald-400/60" />
                    <div className="absolute left-0 h-0.5 w-2 bg-emerald-400/60" />
                    <div className="absolute right-0 h-0.5 w-2 bg-emerald-400/60" />
                  </div>

                  {/* Bottom Subsurface Telemetry Bar */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                    <div className="bg-forest-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-forest-700/60 text-forest-200 text-xs shadow-lg">
                      SOIL BIO-ACTIVITY: <strong className="text-white">99.4%</strong> | MOISTURE: <strong className="text-teal-300">{telemetry.soilMoisture}% VWC</strong>
                    </div>

                    <div className="bg-forest-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-forest-700/60 text-emerald-300 font-bold text-xs shadow-lg flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>100% ORGANIC CERTIFIED TEST PLOT</span>
                    </div>
                  </div>

                </div>
              )}

              {/* Bottom Control Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-9 h-9 rounded-xl bg-forest-800 hover:bg-forest-700 text-wheat-400 flex items-center justify-center transition-all shadow-md"
                    aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-9 h-9 rounded-xl bg-forest-800 hover:bg-forest-700 text-forest-200 flex items-center justify-center transition-all"
                    aria-label={isMuted ? "Unmute Ambient" : "Mute Ambient"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="text-forest-200 font-mono text-xs flex items-center gap-1.5">
                    <span className="text-forest-400">MISSION TIME:</span>
                    <span className="text-white font-bold">{formatTimer(secondsElapsed)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-forest-300 hidden sm:inline font-mono">
                    MODE: <strong className="text-wheat-400 uppercase">{activeSpectrum}</strong>
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

            </div>

            {/* Modal Bottom Footer Info */}
            <div className="px-6 py-4 bg-forest-950 text-xs text-forest-300 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-forest-800">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">{currentFeed.title}:</span>
                <span className="text-forest-300">{currentFeed.desc}</span>
              </div>
              <span className="text-forest-400 font-mono shrink-0">4K UHD • 60 FPS • RTK-GPS</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
