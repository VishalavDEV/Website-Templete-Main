import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Zap, Gauge, Compass, Shield, ArrowRight, CheckCircle2, Lock, Sparkles, Layers } from 'lucide-react';

export default function ComingSoonNovaX1() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [paintColor, setPaintColor] = useState('blue');
  const [currentAngle, setCurrentAngle] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [preorderName, setPreorderName] = useState('');
  const [preorderEmail, setPreorderEmail] = useState('');
  const [preorderTrim, setPreorderTrim] = useState('Performance Quad-Motor (1,200 HP)');

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: '28', hours: '12', minutes: '45', seconds: '30', ms: '50' });

  // Web Audio Refs
  const audioCtxRef = useRef(null);
  const droneGainRef = useRef(null);

  const colors = {
    blue: { name: 'Apex Cobalt Blue', hex: '#2563eb', glow: 'rgba(37, 99, 235, 0.4)' },
    silver: { name: 'Liquid Titanium Silver', hex: '#94a3b8', glow: 'rgba(148, 163, 184, 0.4)' },
    red: { name: 'Velocity Crimson Red', hex: '#dc2626', glow: 'rgba(220, 38, 38, 0.4)' },
    stealth: { name: 'Obsidian Matte Stealth', hex: '#1e293b', glow: 'rgba(30, 41, 59, 0.4)' }
  };

  useEffect(() => {
    const launchTimestamp = new Date(Date.now() + (28 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000)).getTime();
    const interval = setInterval(() => {
      const diff = Math.max(0, launchTimestamp - Date.now());
      setTimeLeft({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0'),
        ms: String(Math.floor((diff % 1000) / 10)).padStart(2, '0')
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = 55;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 120;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.0;
        droneGainRef.current = gainNode;

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
      } catch (e) {
        console.warn('Audio engine error:', e);
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (droneGainRef.current) {
      const nextPlaying = !isAudioPlaying;
      setIsAudioPlaying(nextPlaying);
      const targetGain = nextPlaying ? 0.08 : 0.0;
      droneGainRef.current.gain.linearRampToValueAtTime(targetGain, audioCtxRef.current.currentTime + 0.6);
    }
  };

  const handlePreorder = (e) => {
    e.preventDefault();
    if (!preorderEmail) return;

    setToastMessage(`✦ Priority Allocation #${Math.floor(Math.random() * 800 + 100)} reserved for ${preorderName || 'Driver'}! Details sent to ${preorderEmail}.`);
    setPreorderName('');
    setPreorderEmail('');
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="bg-[#050811] text-[#f1f5f9] min-h-screen font-sans relative overflow-x-hidden">
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none opacity-50 z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        
        {/* Navigation */}
        <header className="w-full border-b border-blue-500/20 bg-[#060a14]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-black flex items-center justify-center text-blue-300 font-cinzel font-bold text-lg group-hover:border-blue-300 transition-all">
                ⚡
              </div>
              <div>
                <div className="font-cinzel text-base tracking-[0.2em] text-blue-200 uppercase font-bold">NOVA MOTORS</div>
                <div className="text-[0.62rem] tracking-[0.28em] text-blue-400 uppercase font-mono">NOVA X1 • Electric Hyper-GT</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-slate-300 uppercase font-semibold">
              <a href="#hero" className="hover:text-blue-300 transition-colors">Showroom</a>
              <a href="#specs" className="hover:text-blue-300 transition-colors">Performance</a>
              <a href="#customizer" className="hover:text-blue-300 transition-colors">Aesthetics</a>
              <a href="#preorder" className="hover:text-blue-300 transition-colors">Reserve</a>
            </nav>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleAudio}
                className="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
              >
                {isAudioPlaying ? <Volume2 size={14} className="text-blue-400" /> : <VolumeX size={14} className="text-slate-400" />}
                <span className="hidden sm:inline">{isAudioPlaying ? 'Audio: EV Drone On' : 'Audio: Muted'}</span>
              </button>

              <a href="#preorder" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-cinzel tracking-wider shadow-md">
                <span>Reserve X1</span>
                <Zap size={13} />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="pt-12 pb-20 md:pt-18 md:pb-28 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-400/40 bg-blue-950/20 text-xs font-mono text-blue-200 uppercase tracking-widest font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            <span>Quad-Motor All-Wheel Drive • 1,200 HP</span>
          </div>

          <h1 className="font-decorative text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
            Electric Hyper-GT Dominance.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-serif italic mb-10 leading-relaxed font-light">
            0 to 60 mph in 1.84 seconds. Active aerodynamic carbon-fibre wings, 500-mile ultra-high density silicon-anode battery, and autonomous track telemetry.
          </p>

          {/* Countdown Clock */}
          <div className="w-full max-w-3xl bg-[#0b1224]/90 backdrop-blur-xl p-6 sm:p-8 mb-10 rounded-2xl shadow-2xl border border-blue-500/25">
            <div className="text-xs font-cinzel tracking-[0.25em] text-blue-300 uppercase font-bold mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-blue-500/40"></span>
              <span>Global Circuit Debut & Delivery Countdown</span>
              <span className="h-[1px] w-8 bg-blue-500/40"></span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-xl mx-auto">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit} className="bg-slate-950/80 border border-blue-500/20 rounded-xl p-3 text-center">
                  <div className="font-mono text-2xl sm:text-4xl font-bold text-blue-200">{val}</div>
                  <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Customizer */}
          <div id="customizer" className="bg-[#0b1224]/85 p-6 rounded-2xl border border-blue-500/20 max-w-md w-full mb-10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Selected Livery: <strong className="text-blue-300">{colors[paintColor].name}</strong>
            </div>
            <div className="flex justify-center gap-4">
              {Object.keys(colors).map(key => (
                <button
                  key={key}
                  onClick={() => setPaintColor(key)}
                  className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer ${paintColor === key ? 'border-white scale-110 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  style={{ backgroundColor: colors[key].hex }}
                  title={colors[key].name}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#preorder" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3.5 rounded-xl text-sm font-cinzel shadow-lg transition-all">
              <Zap size={15} />
              <span>Configure & Reserve Production Slot</span>
            </a>
          </div>

        </section>

        {/* Telemetry & Performance Specs */}
        <section id="specs" className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0b1224]/80 p-6 rounded-2xl border border-blue-500/20 text-center">
              <Gauge size={28} className="text-blue-400 mx-auto mb-2" />
              <div className="font-mono text-3xl font-bold text-white">1.84s</div>
              <div className="text-xs font-mono uppercase text-slate-400 mt-1">0–60 MPH Acceleration</div>
            </div>

            <div className="bg-[#0b1224]/80 p-6 rounded-2xl border border-blue-500/20 text-center">
              <Zap size={28} className="text-blue-400 mx-auto mb-2" />
              <div className="font-mono text-3xl font-bold text-white">1,200 HP</div>
              <div className="text-xs font-mono uppercase text-slate-400 mt-1">Quad-Motor Peak Power</div>
            </div>

            <div className="bg-[#0b1224]/80 p-6 rounded-2xl border border-blue-500/20 text-center">
              <Compass size={28} className="text-blue-400 mx-auto mb-2" />
              <div className="font-mono text-3xl font-bold text-white">520 MI</div>
              <div className="text-xs font-mono uppercase text-slate-400 mt-1">Silicon-Anode Range</div>
            </div>

            <div className="bg-[#0b1224]/80 p-6 rounded-2xl border border-blue-500/20 text-center">
              <Shield size={28} className="text-blue-400 mx-auto mb-2" />
              <div className="font-mono text-3xl font-bold text-white">250+ MPH</div>
              <div className="text-xs font-mono uppercase text-slate-400 mt-1">Track Top Speed</div>
            </div>
          </div>
        </section>

        {/* Pre-Order Section */}
        <section id="preorder" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#0b1224]/90 p-8 sm:p-12 rounded-2xl border border-blue-500/30 shadow-2xl">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">Secure Production Priority</h2>
            <p className="text-slate-300 font-serif italic text-base sm:text-lg max-w-xl mx-auto mb-8">
              Fully refundable $1,000 priority deposit locks your build slot and unlocks track telemetry access.
            </p>

            <form onSubmit={handlePreorder} className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={preorderName}
                  onChange={(e) => setPreorderName(e.target.value)}
                  placeholder="Driver / Owner Name" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-blue-500/30 text-slate-100 focus:outline-none focus:border-blue-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={preorderEmail}
                  onChange={(e) => setPreorderEmail(e.target.value)}
                  placeholder="driver@performance.com" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-blue-500/30 text-slate-100 focus:outline-none focus:border-blue-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Powertrain Trim</label>
                <select 
                  value={preorderTrim}
                  onChange={(e) => setPreorderTrim(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-blue-500/30 text-slate-100 focus:outline-none focus:border-blue-400 text-sm"
                >
                  <option value="Performance Quad-Motor (1,200 HP)">Performance Quad-Motor (1,200 HP)</option>
                  <option value="Track Edition Lightweight (1,400 HP)">Track Edition Lightweight (1,400 HP)</option>
                  <option value="Grand Touring Dual-Motor (800 HP)">Grand Touring Dual-Motor (800 HP)</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3.5 rounded-xl text-sm font-cinzel shadow-lg transition-all">
                <span>Lock Allocation Slot</span>
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-blue-500/20 bg-[#03060d] py-8 px-6 text-center text-xs font-mono text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Nova Motors Technologies Inc. California • Stuttgart.</div>
            <a href="/templates" className="text-blue-400 font-semibold hover:underline">TechnoSprint Templates</a>
          </div>
        </footer>

      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-[#0c1426] border border-blue-400 text-blue-50 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
          <CheckCircle2 size={18} className="text-blue-400" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
