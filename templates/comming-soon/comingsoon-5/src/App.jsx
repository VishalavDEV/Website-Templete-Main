import React, { useState, useEffect, useRef, useCallback } from 'react';

const MATERIALS = {
  'yellow-gold': {
    name: '18K Yellow Gold (2N Classic)',
    hue: 42,
    themeClass: '',
    certText: '18K YELLOW GOLD',
    swatchBg: 'from-[#ffe680] to-[#cca028]'
  },
  everose: {
    name: '18K Everose Gold (5N Pink)',
    hue: 12,
    themeClass: 'theme-everose',
    certText: '18K EVEROSE GOLD',
    swatchBg: 'from-[#ffd5ca] to-[#e89882]'
  },
  platinum: {
    name: '950 Platinum (Ice Blue Core)',
    hue: 200,
    themeClass: 'theme-platinum',
    certText: '950 PLATINUM REF',
    swatchBg: 'from-[#d8edfa] to-[#9ec8e5]'
  },
  stealth: {
    name: 'Obsidian DLC Carbon (All-Black)',
    hue: 220,
    themeClass: 'theme-stealth',
    certText: 'OBSIDIAN DLC CARBON',
    swatchBg: 'from-[#94a3b8] to-[#1e293b]'
  }
};

const MACRO_ITEMS = {
  crown: {
    title: 'Fluted 18K Gold Crown & Triple-Gasket Bezel',
    subtitle: '18K Solid Gold Knurled Profile',
    desc: 'Micro-lathed fluted grip ridges with double internal O-ring pressure seals and solid gold crown flank protection.',
    src: '/watch-crown.jpg'
  },
  dial: {
    title: 'Sunburst Rose-Engine Guilloché Dial',
    subtitle: 'Hand-Turned Rose Engine Engraving',
    desc: 'Hand-turned geometric guilloché engraving radiating from center with diamond-faceted solid gold dauphine hands and double AR sapphire glass.',
    src: '/watch-dial.jpg'
  },
  caseback: {
    title: 'Calibre TS-9080 Exhibition Sapphire Caseback',
    subtitle: 'Swiss Automatic High-Beat Calibre',
    desc: 'High-beat Swiss automatic movement showcasing 18K gold oscillating weight, Côte de Genève perlage finishing, and 26 synthetic rubies.',
    src: '/watch-caseback.jpg'
  }
};

export default function App() {
  // -------------------------------------------------------------
  // 1. Material Customizer State
  // -------------------------------------------------------------
  const [activeMaterialKey, setActiveMaterialKey] = useState('yellow-gold');
  const activeMaterial = MATERIALS[activeMaterialKey];

  // -------------------------------------------------------------
  // 2. Dynamic Canvas Particles & Cursor Light Flare
  // -------------------------------------------------------------
  const canvasRef = useRef(null);
  const flareRef = useRef(null);

  useEffect(() => {
    // Flare tracking
    const flare = flareRef.current;
    if (!flare) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateFlare = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      if (flare) {
        flare.style.left = `${currentX}px`;
        flare.style.top = `${currentY}px`;
      }
      animId = requestAnimationFrame(updateFlare);
    };
    animId = requestAnimationFrame(updateFlare);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    // Particle Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const count = 70;

    class Sparkle {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.7 + 0.2;
        this.pulse = Math.random() * 0.02 + 0.01;
        this.pulseDir = 1;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.alpha += this.pulse * this.pulseDir;
        if (this.alpha >= 0.9) this.pulseDir = -1;
        if (this.alpha <= 0.15) this.pulseDir = 1;
        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }
      draw(hue) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${this.alpha})`;
        ctx.shadowColor = `hsla(${hue}, 90%, 55%, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Sparkle());
    }

    let pAnimId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(activeMaterial.hue);
      });
      pAnimId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(pAnimId);
    };
  }, [activeMaterial.hue]);

  // -------------------------------------------------------------
  // 3. Audio Equalizer & High-Beat Escapement Synthesizer
  // -------------------------------------------------------------
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isHiBeat, setIsHiBeat] = useState(false); // false = 4Hz (28.8k vph), true = 5Hz (36k vph)
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const playTick = useCallback((isTick) => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    try {
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
    } catch (err) {
      console.warn('Audio tick error:', err);
    }
  }, []);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (!isAudioOn) {
      setIsAudioOn(true);
      let alternate = true;
      const speed = isHiBeat ? 200 : 250;
      intervalRef.current = setInterval(() => {
        playTick(alternate);
        alternate = !alternate;
      }, speed);
    } else {
      setIsAudioOn(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const toggleFrequency = () => {
    const nextHiBeat = !isHiBeat;
    setIsHiBeat(nextHiBeat);
    if (isAudioOn) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      let alternate = true;
      const speed = nextHiBeat ? 200 : 250;
      intervalRef.current = setInterval(() => {
        playTick(alternate);
        alternate = !alternate;
      }, speed);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // -------------------------------------------------------------
  // 4. 3D Turntable, Inertia Drag & Optical Zoom
  // -------------------------------------------------------------
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [activeAnglePreset, setActiveAnglePreset] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const velocityRef = useRef(0);
  const targetAngleRef = useRef(0);
  const targetTiltRef = useRef({ x: 0, y: 0 });

  const handleStageMouseMove = (e) => {
    if (isDraggingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    targetTiltRef.current = {
      x: (y / (rect.height / 2)) * -14,
      y: (x / (rect.width / 2)) * 18
    };
  };

  const handleStageMouseLeave = () => {
    targetTiltRef.current = { x: 0, y: 0 };
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    velocityRef.current = 0;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].clientX;
      velocityRef.current = 0;
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - startXRef.current;
      velocityRef.current = deltaX * 0.45;
      targetAngleRef.current += velocityRef.current;
      startXRef.current = e.clientX;
      setActiveAnglePreset(null);
    };

    const handleGlobalTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - startXRef.current;
      velocityRef.current = deltaX * 0.45;
      targetAngleRef.current += velocityRef.current;
      startXRef.current = e.touches[0].clientX;
      setActiveAnglePreset(null);
    };

    const handleGlobalEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalEnd);
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });
    window.addEventListener('touchend', handleGlobalEnd);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalEnd);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalEnd);
    };
  }, []);

  useEffect(() => {
    let animId;
    const render = () => {
      if (!isDraggingRef.current && Math.abs(velocityRef.current) > 0.05) {
        targetAngleRef.current += velocityRef.current;
        velocityRef.current *= 0.94;
      }

      setCurrentAngle((prev) => prev + (targetAngleRef.current - prev) * 0.12);
      setTilt((prev) => ({
        x: prev.x + (targetTiltRef.current.x - prev.x) * 0.08,
        y: prev.y + (targetTiltRef.current.y - prev.y) * 0.08
      }));

      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  const setAnglePreset = (angle) => {
    targetAngleRef.current = angle;
    velocityRef.current = 0;
    setActiveAnglePreset(angle);
  };

  // -------------------------------------------------------------
  // 5. Live Chronometer Countdown Timer
  // -------------------------------------------------------------
  const [countdown, setCountdown] = useState({ days: '42', hours: '18', mins: '35', secs: '09', ms: '72' });
  const launchTimestampRef = useRef(Date.now() + 42 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000);

  useEffect(() => {
    let animId;
    const updateCountdown = () => {
      const diff = Math.max(0, launchTimestampRef.current - Date.now());
      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
      const ms = String(Math.floor((diff % 1000) / 10)).padStart(2, '0');

      setCountdown({ days, hours, mins, secs, ms });
      animId = requestAnimationFrame(updateCountdown);
    };
    animId = requestAnimationFrame(updateCountdown);
    return () => cancelAnimationFrame(animId);
  }, []);

  // -------------------------------------------------------------
  // 6. Macro Lightbox Modal
  // -------------------------------------------------------------
  const [activeMacroKey, setActiveMacroKey] = useState(null);

  const openMacro = (key) => {
    setActiveMacroKey(key);
  };

  const closeMacro = () => {
    setActiveMacroKey(null);
  };

  // -------------------------------------------------------------
  // 7. Foil Certificate Live Generator & Form
  // -------------------------------------------------------------
  const [collectorName, setCollectorName] = useState('');
  const [collectorEmail, setCollectorEmail] = useState('');
  const [currentSerial, setCurrentSerial] = useState('042');
  const [toastData, setToastData] = useState(null);

  const handleAllocationSubmit = (e) => {
    e.preventDefault();
    if (!collectorName || !collectorEmail) return;

    setToastData({
      name: collectorName,
      serial: currentSerial,
      metal: activeMaterial.name
    });

    const nextNum = parseInt(currentSerial, 10) + 1;
    setCurrentSerial(String(nextNum).padStart(3, '0'));
    setCollectorName('');
    setCollectorEmail('');

    setTimeout(() => {
      setToastData(null);
    }, 6000);
  };

  const activeMacroData = activeMacroKey ? MACRO_ITEMS[activeMacroKey] : null;

  return (
    <div className={`bg-[#040508] text-slate-100 overflow-x-hidden font-sans min-h-screen relative ${activeMaterial.themeClass}`}>
      {/* Background Animated Canvas & Cursor Spotlight */}
      <canvas id="gold-particles-canvas" ref={canvasRef}></canvas>
      <div id="cursor-light-flare" ref={flareRef} className="cursor-light-flare"></div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Top Luxury Navigation Bar */}
        <header className="w-full border-b border-amber-500/20 bg-[#05070c]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-full border border-amber-400/50 bg-gradient-to-br from-amber-500/20 to-black flex items-center justify-center text-amber-300 font-cinzel font-bold text-lg group-hover:border-amber-300 group-hover:shadow-[0_0_20px_rgba(229,179,66,0.6)] transition-all">
                ✦
              </div>
              <div>
                <div className="font-cinzel text-base tracking-[0.22em] text-amber-200 uppercase font-bold">
                  Aurelia Chronos
                </div>
                <div className="text-[0.62rem] tracking-[0.3em] text-amber-400/80 uppercase font-mono">
                  Haute Horlogerie • Geneve
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-slate-300 uppercase font-semibold">
              <a href="#hero" className="hover:text-amber-300 transition-colors">Showroom</a>
              <a href="#customizer" className="hover:text-amber-300 transition-colors">Customizer</a>
              <a href="#macro-gallery" className="hover:text-amber-300 transition-colors">Macro Lens</a>
              <a href="#calibre" className="hover:text-amber-300 transition-colors">Calibre 9080</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleAudio}
                className={`px-3.5 py-1.5 rounded-full border bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2.5 transition-all cursor-pointer shadow-sm ${
                  isAudioOn ? 'border-amber-400 text-amber-300' : 'border-amber-500/30'
                }`}
                title="Toggle Mechanical Escapement Audio"
              >
                <div className={`eq-container ${isAudioOn ? 'audio-playing' : ''}`}>
                  <div className="eq-bar"></div>
                  <div className="eq-bar"></div>
                  <div className="eq-bar"></div>
                  <div className="eq-bar"></div>
                </div>
                <span className="hidden sm:inline">
                  {isAudioOn
                    ? isHiBeat
                      ? 'Hi-Beat: 36k vph'
                      : 'Escapement: 28.8k vph'
                    : 'Audio: Muted'}
                </span>
              </button>

              <a href="#reserve" className="btn-primary-vault !py-2.5 !px-5 text-xs">
                <span>VIP Vault</span>
                <i className="fas fa-crown text-[10px]"></i>
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION: 3D SPLIT SHOWROOM */}
        <section id="hero" className="pt-10 pb-16 md:pt-14 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Editorial Typography & Customizer */}
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

              {/* BESPOKE MATERIAL CUSTOMIZER */}
              <div className="luxury-glass-panel p-5 space-y-3" id="customizer">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 uppercase tracking-wider">Select Metallurgy:</span>
                  <span className="text-amber-300 font-bold">{activeMaterial.name}</span>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {Object.entries(MATERIALS).map(([key, mat]) => (
                    <button
                      key={key}
                      onClick={() => setActiveMaterialKey(key)}
                      className={`material-swatch bg-gradient-to-br ${mat.swatchBg} ${
                        activeMaterialKey === key ? 'active' : ''
                      }`}
                      title={mat.name}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Escapement Frequency Switcher */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0a0d16] border border-amber-500/20 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <i className="fas fa-wave-square text-amber-400"></i>
                  <span>Oscillation Cadence:</span>
                </div>
                <button
                  onClick={toggleFrequency}
                  className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 hover:bg-amber-500/30 cursor-pointer transition-all"
                >
                  {isHiBeat ? '5Hz (36k vph)' : '4Hz (28.8k vph)'}
                </button>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a href="#reserve" className="btn-primary-vault w-full sm:w-auto">
                  <i className="fas fa-certificate"></i>
                  <span>Claim Allocation</span>
                </a>
                <button onClick={() => openMacro('crown')} className="btn-secondary-vault w-full sm:w-auto">
                  <i className="fas fa-search-plus"></i>
                  <span>Inspect Crown Lens</span>
                </button>
              </div>
            </div>

            {/* Right Side: 3D ANTIGRAVITY STAGE WITH HOTSPOT ANNOTATIONS */}
            <div className="lg:col-span-7">
              <div className="luxury-glass-panel p-6 sm:p-10 relative overflow-hidden">
                <div
                  className="watch-stage-container"
                  onMouseMove={handleStageMouseMove}
                  onMouseLeave={handleStageMouseLeave}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  {/* Hotspot 1: Bezel */}
                  <div
                    className="watch-hotspot top-12 left-1/2 -translate-x-1/2"
                    onClick={() => openMacro('dial')}
                    title="Click to inspect Guilloché Dial"
                  >
                    <i className="fas fa-plus text-[10px]"></i>
                    <div className="watch-hotspot-card">
                      <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">18K Solid Bezel</div>
                      <div className="text-xs text-slate-200 font-semibold mt-0.5">Sunburst Guilloché Dial</div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Diamond-polished faceted dauphine hands with double AR sapphire.
                      </div>
                    </div>
                  </div>

                  {/* Hotspot 2: Crown */}
                  <div
                    className="watch-hotspot top-1/2 right-12 sm:right-20 -translate-y-1/2"
                    onClick={() => openMacro('crown')}
                    title="Click to inspect Crown"
                  >
                    <i className="fas fa-plus text-[10px]"></i>
                    <div className="watch-hotspot-card">
                      <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">Fluted Crown</div>
                      <div className="text-xs text-slate-200 font-semibold mt-0.5">Screw-Down Architecture</div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Dual internal O-ring pressure seals certified to 100m depth.
                      </div>
                    </div>
                  </div>

                  {/* Hotspot 3: Calibre Escapement */}
                  <div
                    className="watch-hotspot bottom-14 left-1/2 -translate-x-1/2"
                    onClick={() => openMacro('caseback')}
                    title="Click to inspect Calibre 9080"
                  >
                    <i className="fas fa-plus text-[10px]"></i>
                    <div className="watch-hotspot-card">
                      <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">Swiss Movement</div>
                      <div className="text-xs text-slate-200 font-semibold mt-0.5">Calibre TS-9080 Automatic</div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Solid gold skeleton rotor, 28,800 vph, and 72-hour reserve.
                      </div>
                    </div>
                  </div>

                  {/* Floating Watch Visual Actor */}
                  <div className="watch-floating-actor">
                    <img
                      src="/watch-hero.jpg"
                      alt="Aurelia Chronos 18K Solid Gold Floating Watch"
                      className="watch-hero-render"
                      style={{
                        transform: `scale(${zoomLevel}) rotateX(${tilt.x}deg) rotateY(${tilt.y + currentAngle}deg)`
                      }}
                    />
                  </div>
                </div>

                {/* 360 Drag & Zoom Control Bar */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-amber-500/20">
                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    {[
                      { angle: 0, label: '0° Front' },
                      { angle: 45, label: '45° Orbit' },
                      { angle: 90, label: '90° Flank' },
                      { angle: 180, label: '180° Back' }
                    ].map((item) => (
                      <button
                        key={item.angle}
                        onClick={() => setAnglePreset(item.angle)}
                        className={`turntable-btn ${activeAnglePreset === item.angle ? 'active' : ''}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Optical Zoom Slider */}
                  <div className="flex items-center gap-3 bg-[#0a0d16] px-3.5 py-1.5 rounded-xl border border-amber-500/20 text-xs font-mono text-slate-400">
                    <i className="fas fa-magnifying-glass text-amber-400"></i>
                    <span>Zoom:</span>
                    <input
                      type="range"
                      min="0.9"
                      max="1.6"
                      step="0.05"
                      value={zoomLevel}
                      onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                      className="w-20 accent-amber-400 cursor-pointer"
                    />
                    <span className="text-amber-300 font-bold min-w-[32px]">{zoomLevel.toFixed(1)}x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE CHRONOMETER COUNTDOWN */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="luxury-glass-panel p-8 sm:p-10 relative overflow-hidden">
            <div className="text-xs font-cinzel tracking-[0.3em] text-amber-300 uppercase font-bold mb-6 flex items-center justify-center gap-3 text-center">
              <span className="h-[1px] w-12 bg-amber-500/40"></span>
              <span>Geneva Premiere & Allocation Vault Countdown</span>
              <span className="h-[1px] w-12 bg-amber-500/40"></span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/25 text-center">
                <div className="font-mono text-2xl sm:text-4xl font-bold text-amber-200">{countdown.days}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">Days</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/25 text-center">
                <div className="font-mono text-2xl sm:text-4xl font-bold text-amber-200">{countdown.hours}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">Hours</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/25 text-center">
                <div className="font-mono text-2xl sm:text-4xl font-bold text-amber-200">{countdown.mins}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">Mins</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/50 text-center">
                <div className="font-mono text-2xl sm:text-4xl font-bold text-amber-400">{countdown.secs}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-amber-400 mt-1 font-semibold">Secs</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/25 text-center">
                <div className="font-mono text-2xl sm:text-4xl font-bold text-slate-400">{countdown.ms}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">MS</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-slate-400 text-center">
              <i className="fas fa-crown text-amber-400"></i>
              <span>
                Only <strong className="text-amber-300 font-bold text-sm">24</strong> of 100 Hand-Numbered Allocations Unclaimed
              </span>
            </div>
          </div>
        </section>

        {/* OPTICAL MACRO FILMSTRIP GALLERY */}
        <section id="macro-gallery" className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 font-semibold">
              Optical Studio Macro Dossier
            </div>
            <h2 className="font-decorative text-3xl sm:text-4xl font-bold text-slate-100">
              Micro-Sculpted Metallurgical Perfection
            </h2>
            <p className="font-serif italic text-slate-400 text-base mt-2">
              Select any reference view below to inspect with the optical studio zoom lens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(MACRO_ITEMS).map(([key, item]) => (
              <div
                key={key}
                onClick={() => openMacro(key)}
                className="luxury-glass-panel p-6 cursor-pointer group"
              >
                <div className="h-60 rounded-xl bg-black border border-amber-500/30 overflow-hidden relative mb-5 shadow-inner">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-amber-500/40 px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 font-semibold">
                    Macro Lens • {key.toUpperCase()}
                  </div>
                </div>
                <h3 className="font-cinzel text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-serif italic text-amber-400/90 mb-2 font-medium">{item.subtitle}</p>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{item.desc}</p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-mono font-semibold">
                  <span>Inspect Optical Detail</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALIBRE TS-9080 SPECIFICATIONS GRID */}
        <section id="calibre" className="py-16 px-6 max-w-6xl mx-auto">
          <div className="luxury-glass-panel p-8 sm:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b border-amber-500/20">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                  Geneva Manufacture Dossier
                </div>
                <h2 className="font-cinzel text-3xl font-bold text-slate-100 mt-1">Calibre TS-9080 Architecture</h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/35 text-amber-300 text-xs font-mono font-semibold">
                  COSC Chronometer Certified
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase">Case Metallurgy</div>
                <div className="font-cinzel text-lg font-bold text-amber-200 mt-1">18K Solid Gold</div>
                <p className="text-xs text-slate-400 mt-1">38.5mm diameter, 10.2mm thickness, mirror & satin brushed.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase">Oscillation Cadence</div>
                <div className="font-cinzel text-lg font-bold text-amber-200 mt-1">28,800 VPH (4Hz)</div>
                <p className="text-xs text-slate-400 mt-1">Glucydur balance with silicon hairspring anti-magnetic core.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase">Power Autonomy</div>
                <div className="font-cinzel text-lg font-bold text-amber-200 mt-1">72 Hours Reserve</div>
                <p className="text-xs text-slate-400 mt-1">Dual mainspring barrels with bidirectional winding rotor.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase">Water Resistance</div>
                <div className="font-cinzel text-lg font-bold text-amber-200 mt-1">10 ATM / 100M</div>
                <p className="text-xs text-slate-400 mt-1">Screw-down fluted crown with sapphire caseback gasket.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE FOIL CERTIFICATE & RESERVATION VAULT */}
        <section id="reserve" className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Live Updating Gold Foil Certificate */}
            <div className="lg:col-span-6">
              <div className="foil-certificate-card text-left space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-amber-500/30">
                  <div className="font-cinzel text-xs tracking-widest text-amber-300 font-bold uppercase">
                    Certificate of Allocation
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-200 font-mono text-[10px] font-bold">
                    {activeMaterial.certText}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Bearer & Registered Collector:
                </div>
                <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {collectorName.trim().length > 0 ? collectorName.trim().toUpperCase() : 'YOUR NAME HERE'}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Numbered Serial</div>
                    <div className="font-mono text-base font-bold text-amber-400">#{currentSerial} / 100</div>
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

            {/* Right: Form to Claim Allocation */}
            <div className="lg:col-span-6">
              <div className="luxury-glass-panel p-8 text-left space-y-4">
                <h3 className="font-decorative text-2xl font-bold text-white">Claim Your Allocation</h3>
                <p className="text-xs text-slate-300 font-serif italic">
                  Enter your details below to generate and issue your registered digital certificate.
                </p>

                <form onSubmit={handleAllocationSubmit} className="space-y-4 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                      Collector Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lord / Lady / Dr. / Mr. Name"
                      value={collectorName}
                      onChange={(e) => setCollectorName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-amber-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                      Private Email for Vault Confirmation
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="collector@private.luxury"
                      value={collectorEmail}
                      onChange={(e) => setCollectorEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-amber-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1">
                      Selected Metal Specification
                    </label>
                    <select
                      value={activeMaterialKey}
                      onChange={(e) => setActiveMaterialKey(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-amber-500/30 text-slate-100 focus:outline-none focus:border-amber-400 text-sm"
                    >
                      {Object.entries(MATERIALS).map(([key, mat]) => (
                        <option key={key} value={key}>
                          {mat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn-primary-vault w-full mt-2 text-sm !py-3.5">
                    <span>Issue & Register Allocation</span>
                    <i className="fas fa-lock text-xs"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-amber-500/20 bg-[#040508] py-8 px-6 text-center text-xs font-mono text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Aurelia Chronos Haute Horlogerie. Geneva • Zurich • London.</div>
            <div className="flex items-center gap-6">
              <a href="#hero" className="hover:text-amber-300 transition-colors">Back to Top</a>
              <a href="/templates" className="text-amber-400 font-semibold hover:underline">TechnoSprint Templates</a>
            </div>
          </div>
        </footer>
      </div>

      {/* MACRO LIGHTBOX MODAL */}
      {activeMacroData && (
        <div className="vault-modal active" onClick={closeMacro}>
          <div
            className="luxury-glass-panel p-6 max-w-4xl w-full relative flex flex-col md:flex-row gap-6 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMacro}
              className="absolute top-4 right-4 text-slate-400 hover:text-amber-300 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 cursor-pointer"
            >
              &times;
            </button>

            <div className="w-full md:w-3/5 rounded-xl overflow-hidden bg-black border border-amber-500/30">
              <img src={activeMacroData.src} alt={activeMacroData.title} className="w-full h-auto object-cover max-h-[480px]" />
            </div>

            <div className="w-full md:w-2/5 space-y-3 text-left">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
                Optical Studio Macro Lens
              </div>
              <h3 className="font-cinzel text-xl font-bold text-slate-100">{activeMacroData.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{activeMacroData.desc}</p>
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#reserve"
                  onClick={closeMacro}
                  className="btn-primary-vault !py-2.5 !px-4 text-xs w-full text-center justify-center"
                >
                  <span>Reserve This Reference</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastData && (
        <div className="vault-toast show">
          <div className="w-9 h-9 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-base flex-shrink-0">
            ✦
          </div>
          <div className="text-xs font-mono font-medium text-amber-200">
            ✦ Allocation Confirmed for <strong>{toastData.name}</strong>!<br />
            <span className="text-amber-400 font-mono text-[11px]">
              Numbered Certificate No. #{toastData.serial}/100 [{toastData.metal}] dispatched to inbox.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
