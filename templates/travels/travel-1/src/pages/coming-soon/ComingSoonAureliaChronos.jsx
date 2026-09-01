import React, { useState, useEffect, useRef } from 'react';
import { Crown, Sparkles, Volume2, VolumeX, Shield, Lock, Search, RotateCcw, ArrowRight, Plus, X, Layers, Compass, CheckCircle2 } from 'lucide-react';

export default function ComingSoonAureliaChronos() {
  const [material, setMaterial] = useState('yellow-gold');
  const [currentAngle, setCurrentAngle] = useState(0);
  const [zoom, setZoom] = useState(1.0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioFreq, setAudioFreq] = useState(250); // 4Hz = 28,800 vph
  const [modalView, setModalView] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Form State
  const [collectorName, setCollectorName] = useState('');
  const [collectorEmail, setCollectorEmail] = useState('');
  const [collectorMetal, setCollectorMetal] = useState('18K Yellow Gold (2N Classic)');
  const [serialNumber, setSerialNumber] = useState('042');
  const [remainingCount, setRemainingCount] = useState(24);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: '42', hours: '18', minutes: '35', seconds: '09', ms: '72' });

  // Refs
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const visualRef = useRef(null);
  const cursorFlareRef = useRef(null);
  const audioCtxRef = useRef(null);
  const timerIntervalRef = useRef(null);

  const materials = {
    'yellow-gold': {
      name: '18K Yellow Gold (2N Classic)',
      hue: 42,
      themeClass: '',
      certText: '18K YELLOW GOLD',
      glow: 'rgba(229, 179, 66, 0.45)'
    },
    'everose': {
      name: '18K Everose Gold (5N Pink)',
      hue: 12,
      themeClass: 'theme-everose',
      certText: '18K EVEROSE GOLD',
      glow: 'rgba(232, 152, 130, 0.45)'
    },
    'platinum': {
      name: '950 Platinum (Ice Blue Core)',
      hue: 200,
      themeClass: 'theme-platinum',
      certText: '950 PLATINUM REF',
      glow: 'rgba(158, 200, 229, 0.45)'
    },
    'stealth': {
      name: 'Obsidian DLC Carbon (All-Black)',
      hue: 220,
      themeClass: 'theme-stealth',
      certText: 'OBSIDIAN DLC CARBON',
      glow: 'rgba(203, 213, 225, 0.3)'
    }
  };

  const currentMat = materials[material] || materials['yellow-gold'];

  // Modal Macro Data
  const macroData = {
    crown: {
      title: 'Fluted 18K Gold Crown & Triple-Gasket Bezel',
      desc: 'Micro-lathed fluted grip ridges with double internal O-ring pressure seals and solid gold crown flank protection.',
      src: '/templates/comming-soon/cm-5/watch-crown.jpg'
    },
    dial: {
      title: 'Sunburst Rose-Engine Guilloché Dial',
      desc: 'Hand-turned geometric guilloché engraving radiating from center with diamond-faceted solid gold dauphine hands.',
      src: '/templates/comming-soon/cm-5/watch-dial.jpg'
    },
    caseback: {
      title: 'Calibre TS-9080 Exhibition Sapphire Caseback',
      desc: 'High-beat Swiss automatic movement showcasing 18K gold oscillating weight, perlage circular graining, and 26 synthetic rubies.',
      src: '/templates/comming-soon/cm-5/watch-caseback.jpg'
    }
  };

  // 1. Particle Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    for (let i = 0; i < 65; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        pulse: Math.random() * 0.02 + 0.01,
        pulseDir: 1
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += p.pulse * p.pulseDir;
        if (p.alpha >= 0.9) p.pulseDir = -1;
        if (p.alpha <= 0.15) p.pulseDir = 1;
        if (p.y < -20 || p.x < -20 || p.x > width + 20) {
          p.x = Math.random() * width;
          p.y = height + 10;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${currentMat.hue}, 80%, 65%, ${p.alpha})`;
        ctx.shadowColor = `hsla(${currentMat.hue}, 90%, 55%, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [material]);

  // 2. Cursor Flare Tracker
  useEffect(() => {
    const flare = cursorFlareRef.current;
    if (!flare) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currX = mouseX;
    let currY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let flareId;
    const updateFlare = () => {
      currX += (mouseX - currX) * 0.1;
      currY += (mouseY - currY) * 0.1;
      flare.style.left = `${currX}px`;
      flare.style.top = `${currY}px`;
      flareId = requestAnimationFrame(updateFlare);
    };
    updateFlare();

    return () => {
      cancelAnimationFrame(flareId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3. Countdown Timer
  useEffect(() => {
    const launchTimestamp = new Date(Date.now() + (42 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000)).getTime();
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

  // 4. Web Audio Escapement Synthesizer
  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (!isAudioPlaying) {
      setIsAudioPlaying(true);
      let alternate = true;
      timerIntervalRef.current = setInterval(() => {
        playEscapementBeat(alternate);
        alternate = !alternate;
      }, audioFreq);
    } else {
      setIsAudioPlaying(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const playEscapementBeat = (isTick) => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isTick ? 1520 : 1050, now);
    osc.frequency.exponentialRampToValueAtTime(130, now + 0.028);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(isTick ? 2700 : 1950, now);
    filter.Q.setValueAtTime(5, now);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.028);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = collectorName.trim() || 'Esteemed Collector';
    setToastMessage(`✦ Allocation Confirmed for ${name}! Numbered Certificate #${serialNumber}/100 [${collectorMetal}] dispatched to inbox.`);
    
    if (remainingCount > 1) {
      setRemainingCount(prev => prev - 1);
    }
    let nextNum = parseInt(serialNumber, 10) + 1;
    setSerialNumber(String(nextNum).padStart(3, '0'));
    setCollectorName('');
    setCollectorEmail('');

    setTimeout(() => setToastMessage(null), 6000);
  };

  return (
    <div className={`min-h-screen bg-[#040508] text-slate-100 font-sans relative overflow-x-hidden ${currentMat.themeClass}`}>
      
      {/* Dynamic Background Particle Canvas & Cursor Flare */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
      <div ref={cursorFlareRef} className="cursor-light-flare" />

      {/* Top Luxury Navigation */}
      <header className="w-full border-b border-amber-500/20 bg-[#05070c]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-amber-400/50 bg-gradient-to-br from-amber-500/20 to-black flex items-center justify-center text-amber-300 font-cinzel font-bold text-lg group-hover:border-amber-300 transition-all">
              ✦
            </div>
            <div>
              <div className="font-cinzel text-base tracking-[0.22em] text-amber-200 uppercase font-bold">Aurelia Chronos</div>
              <div className="text-[0.62rem] tracking-[0.3em] text-amber-400/80 uppercase font-mono">Haute Horlogerie • Geneve</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-slate-300 uppercase font-semibold">
            <a href="#hero" className="hover:text-amber-300 transition-colors">Showroom</a>
            <a href="#customizer" className="hover:text-amber-300 transition-colors">Customizer</a>
            <a href="#macro-gallery" className="hover:text-amber-300 transition-colors">Macro Lens</a>
            <a href="#calibre" className="hover:text-amber-300 transition-colors">Calibre 9080</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleAudio}
              className={`px-3.5 py-1.5 rounded-full border ${isAudioPlaying ? 'border-amber-400' : 'border-amber-500/30'} bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2.5 transition-all cursor-pointer`}
            >
              <div className={`eq-container ${isAudioPlaying ? 'audio-playing' : ''}`}>
                <div className="eq-bar"></div>
                <div className="eq-bar"></div>
                <div className="eq-bar"></div>
                <div className="eq-bar"></div>
              </div>
              <span className="hidden sm:inline">{isAudioPlaying ? 'Audio: 28.8k vph' : 'Audio: Muted'}</span>
            </button>

            <a href="#reserve" className="btn-primary-vault !py-2.5 !px-5 text-xs">
              <span>VIP Vault</span>
              <Crown size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Split Hero Showroom */}
      <section id="hero" className="pt-10 pb-16 md:pt-14 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Editorial Info */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-amber-400/40 bg-amber-950/20 text-xs font-mono text-amber-200 uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Ref. 1884-AU • Geneva Premiere</span>
            </div>

            <h1 className="font-decorative text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] gold-heading-gradient">
              Gravitational Mastery.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-serif italic leading-relaxed font-light">
              A weightless 18K solid gold timepiece suspended in mid-air. Crafted with hand-turned sunburst guilloché, 28,800 vph Swiss calibre, and 100-meter screw-down crown architecture.
            </p>

            {/* Metallurgy Customizer */}
            <div className="luxury-glass-panel p-5 space-y-3" id="customizer">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-wider">Select Metallurgy:</span>
                <span className="text-amber-300 font-bold">{currentMat.name}</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                {Object.keys(materials).map(matKey => (
                  <button
                    key={matKey}
                    onClick={() => {
                      setMaterial(matKey);
                      setCollectorMetal(materials[matKey].name);
                    }}
                    className={`material-swatch ${material === matKey ? 'active' : ''}`}
                    style={{
                      background: matKey === 'yellow-gold' ? 'linear-gradient(135deg, #ffe680, #cca028)'
                        : matKey === 'everose' ? 'linear-gradient(135deg, #ffd5ca, #e89882)'
                        : matKey === 'platinum' ? 'linear-gradient(135deg, #d8edfa, #9ec8e5)'
                        : 'linear-gradient(135deg, #94a3b8, #1e293b)'
                    }}
                    title={materials[matKey].name}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a href="#reserve" className="btn-primary-vault w-full sm:w-auto">
                <Shield size={14} />
                <span>Claim Allocation</span>
              </a>
              <button onClick={() => setModalView('crown')} className="btn-secondary-vault w-full sm:w-auto">
                <Search size={14} />
                <span>Inspect Crown Lens</span>
              </button>
            </div>
          </div>

          {/* Right 3D Stage with Interactive Hotspots */}
          <div className="lg:col-span-7">
            <div className="luxury-glass-panel p-6 sm:p-10 relative overflow-hidden">
              <div className="watch-stage-container" ref={stageRef}>
                
                {/* Hotspot 1: Bezel */}
                <div onClick={() => setModalView('dial')} className="watch-hotspot top-12 left-1/2 -translate-x-1/2" title="Inspect Sunburst Dial">
                  <Plus size={12} />
                  <div className="watch-hotspot-card">
                    <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">18K Solid Bezel</div>
                    <div className="text-xs text-slate-200 font-semibold mt-0.5">Sunburst Guilloché Dial</div>
                    <div className="text-[10px] text-slate-400 mt-1">Diamond-polished faceted dauphine hands.</div>
                  </div>
                </div>

                {/* Hotspot 2: Crown */}
                <div onClick={() => setModalView('crown')} className="watch-hotspot top-1/2 right-12 sm:right-20 -translate-y-1/2" title="Inspect Crown">
                  <Plus size={12} />
                  <div className="watch-hotspot-card">
                    <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">Fluted Crown</div>
                    <div className="text-xs text-slate-200 font-semibold mt-0.5">Screw-Down Architecture</div>
                    <div className="text-[10px] text-slate-400 mt-1">Double O-ring pressure seals to 100m.</div>
                  </div>
                </div>

                {/* Hotspot 3: Movement */}
                <div onClick={() => setModalView('caseback')} className="watch-hotspot bottom-14 left-1/2 -translate-x-1/2" title="Inspect Calibre">
                  <Plus size={12} />
                  <div className="watch-hotspot-card">
                    <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">Swiss Movement</div>
                    <div className="text-xs text-slate-200 font-semibold mt-0.5">Calibre TS-9080 Automatic</div>
                    <div className="text-[10px] text-slate-400 mt-1">18K gold rotor with 72-hour reserve.</div>
                  </div>
                </div>

                {/* Watch Visual Actor */}
                <div className="watch-floating-actor">
                  <img 
                    ref={visualRef}
                    src="/templates/comming-soon/cm-5/watch-hero.jpg" 
                    alt="Aurelia Chronos Floating Watch" 
                    className="watch-hero-render"
                    style={{ transform: `scale(${zoom}) rotateY(${currentAngle}deg)` }}
                  />
                </div>
              </div>

              {/* 360 Controls & Zoom */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-amber-500/20">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {[0, 45, 90, 180].map(deg => (
                    <button
                      key={deg}
                      onClick={() => setCurrentAngle(deg)}
                      className={`turntable-btn ${currentAngle === deg ? 'active' : ''}`}
                    >
                      {deg}° {deg === 0 ? 'Front' : deg === 45 ? 'Orbit' : deg === 90 ? 'Flank' : 'Back'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 bg-[#0a0d16] px-3.5 py-1.5 rounded-xl border border-amber-500/20 text-xs font-mono text-slate-400">
                  <Search size={13} className="text-amber-400" />
                  <span>Zoom:</span>
                  <input
                    type="range"
                    min="0.9"
                    max="1.5"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="w-20 accent-amber-400 cursor-pointer"
                  />
                  <span className="text-amber-300 font-bold min-w-[30px]">{zoom.toFixed(1)}x</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Countdown Timer Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="luxury-glass-panel p-8 sm:p-10 relative overflow-hidden">
          <div className="text-xs font-cinzel tracking-[0.3em] text-amber-300 uppercase font-bold mb-6 text-center flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-amber-500/40"></span>
            <span>Geneva Premiere & Allocation Vault Countdown</span>
            <span className="h-[1px] w-12 bg-amber-500/40"></span>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, val]) => (
              <div key={unit} className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/25 text-center">
                <div className="font-mono text-2xl sm:text-4xl font-bold text-amber-200">{val}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optical Macro Gallery */}
      <section id="macro-gallery" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 font-semibold">Optical Studio Macro Dossier</div>
          <h2 className="font-decorative text-3xl sm:text-4xl font-bold text-slate-100">Micro-Sculpted Metallurgical Perfection</h2>
          <p className="font-serif italic text-slate-400 text-base mt-2">Select any reference view below to inspect with the optical studio zoom lens.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(macroData).map(([key, item]) => (
            <div key={key} onClick={() => setModalView(key)} className="luxury-glass-panel p-6 cursor-pointer group">
              <div className="h-60 rounded-xl bg-black border border-amber-500/30 overflow-hidden relative mb-5 shadow-inner">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-amber-500/40 px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 font-semibold">
                  Macro Lens • {key.toUpperCase()}
                </div>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-2">{item.desc}</p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-mono font-semibold">
                <span>Inspect Optical Detail</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Foil Certificate & Allocation Vault */}
      <section id="reserve" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Dynamic Certificate */}
          <div className="lg:col-span-6">
            <div className="foil-certificate-card text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/30">
                <div className="font-cinzel text-xs tracking-widest text-amber-300 font-bold uppercase">Certificate of Allocation</div>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-200 font-mono text-[10px] font-bold">{currentMat.certText}</span>
              </div>

              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Bearer & Registered Collector:</div>
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {collectorName.trim().length > 0 ? collectorName.toUpperCase() : 'YOUR NAME HERE'}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Numbered Serial</div>
                  <div className="font-mono text-base font-bold text-amber-400">#{serialNumber} / 100</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Calibre Grade</div>
                  <div className="font-mono text-base font-bold text-amber-200">TS-9080 GENEVA</div>
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-400 italic">
                ✦ Certified by Aurelia Chronos Horology Council, Geneva, Switzerland.
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-6">
            <div className="luxury-glass-panel p-8 text-left space-y-4">
              <h3 className="font-decorative text-2xl font-bold text-white">Claim Your Allocation</h3>
              <p className="text-xs text-slate-300 font-serif italic">Enter your details below to generate and issue your registered digital certificate.</p>

              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">Collector Full Name</label>
                  <input
                    type="text"
                    required
                    value={collectorName}
                    onChange={(e) => setCollectorName(e.target.value)}
                    placeholder="Lord / Lady / Dr. / Mr. Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-amber-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">Private Email for Vault Confirmation</label>
                  <input
                    type="email"
                    required
                    value={collectorEmail}
                    onChange={(e) => setCollectorEmail(e.target.value)}
                    placeholder="collector@private.luxury"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-amber-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">Selected Metal Specification</label>
                  <select
                    value={collectorMetal}
                    onChange={(e) => setCollectorMetal(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-amber-500/30 text-slate-100 focus:outline-none focus:border-amber-400 text-sm"
                  >
                    <option value="18K Yellow Gold (2N Classic)">18K Yellow Gold (2N Classic)</option>
                    <option value="18K Everose Gold (5N Pink)">18K Everose Gold (5N Pink)</option>
                    <option value="950 Platinum (Ice Blue Core)">950 Platinum (Ice Blue Core)</option>
                    <option value="Obsidian DLC Carbon (All-Black)">Obsidian DLC Carbon (All-Black)</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary-vault w-full mt-2 text-sm !py-3.5">
                  <span>Issue & Register Allocation</span>
                  <Lock size={13} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Modal Inspector */}
      {modalView && macroData[modalView] && (
        <div className="vault-modal active" onClick={() => setModalView(null)}>
          <div className="luxury-glass-panel p-6 max-w-4xl w-full relative flex flex-col md:flex-row gap-6 items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalView(null)} className="absolute top-4 right-4 text-slate-400 hover:text-amber-300 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 cursor-pointer">
              <X size={16} />
            </button>
            <div className="w-full md:w-3/5 rounded-xl overflow-hidden bg-black border border-amber-500/30">
              <img src={macroData[modalView].src} alt={macroData[modalView].title} className="w-full h-auto object-cover max-h-[480px]" />
            </div>
            <div className="w-full md:w-2/5 space-y-3 text-left">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">Optical Studio Macro Lens</div>
              <h3 className="font-cinzel text-xl font-bold text-slate-100">{macroData[modalView].title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{macroData[modalView].desc}</p>
              <div className="pt-4 border-t border-slate-800">
                <a href="#reserve" onClick={() => setModalView(null)} className="btn-primary-vault !py-2.5 !px-4 text-xs w-full text-center justify-center">
                  <span>Reserve This Reference</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div className="vault-toast show">
          <CheckCircle2 size={22} className="text-amber-400 flex-shrink-0" />
          <div className="text-xs font-mono text-amber-200">{toastMessage}</div>
        </div>
      )}

    </div>
  );
}
