import React, { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 50;

const COLOR_CONFIG = {
  blue: {
    name: 'Electric Blue Paint',
    desc: 'Premium metallic clearcoat formulation showing intense light dispersion curves.',
    glowClass: 'from-brand-blueGlow/20 via-transparent to-transparent border-brand-electric/30 hover:border-brand-electric/60 shadow-neon-blue',
    textClass: 'text-brand-electric text-glow-cyan',
    filter: 'none',
    colorHex: '#0055ff'
  },
  black: {
    name: 'Midnight Black Paint',
    desc: 'Deep obsidian stealth coat with anti-reflective ceramic infusion.',
    glowClass: 'from-brand-graphite/20 via-transparent to-transparent border-white/10 hover:border-white/30',
    textClass: 'text-zinc-500',
    filter: 'grayscale(100%) brightness(35%) contrast(125%)',
    colorHex: '#0f0f10'
  },
  silver: {
    name: 'Arctic Silver Paint',
    desc: 'Liquid metal silver with micro-faceted chrome flakes.',
    glowClass: 'from-zinc-600/10 via-transparent to-transparent border-zinc-500/20 hover:border-zinc-400/40',
    textClass: 'text-zinc-300',
    filter: 'grayscale(100%) brightness(105%) contrast(100%)',
    colorHex: '#8e96a5'
  },
  white: {
    name: 'Pearl White Paint',
    desc: 'Multi-stage iridescent pearl finish reflecting prismatic highlights.',
    glowClass: 'from-white/10 via-transparent to-transparent border-white/20 hover:border-white/50',
    textClass: 'text-white',
    filter: 'grayscale(100%) brightness(150%) contrast(85%)',
    colorHex: '#f0f0f5'
  },
  red: {
    name: 'Crimson Red Paint',
    desc: 'Dynamic hyper-saturated velocity red with deep carbon contrast.',
    glowClass: 'from-brand-neonRed/20 via-transparent to-transparent border-brand-neonRed/30 hover:border-brand-neonRed/60 shadow-neon-red',
    textClass: 'text-brand-neonRed text-glow-red',
    filter: 'hue-rotate(130deg) saturate(180%) brightness(75%) contrast(110%)',
    colorHex: '#cc1133'
  }
};

export default function App() {
  // -------------------------------------------------------------
  // 1. Audio Engine State & Refs
  // -------------------------------------------------------------
  const [isAudioOn, setIsAudioOn] = useState(false);
  const audioCtxRef = useRef(null);
  const droneOscRef = useRef(null);
  const droneGainRef = useRef(null);
  const filterRef = useRef(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
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
      filterRef.current = filter;

      const gain = ctx.createGain();
      gain.gain.value = 0.0;
      droneGainRef.current = gain;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      droneOscRef.current = osc;
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  }, []);

  const playClickSound = useCallback(() => {
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (err) {
      console.warn('Audio click error:', err);
    }
  }, [initAudio]);

  const toggleAudio = () => {
    playClickSound();
    if (!isAudioOn) {
      initAudio();
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (droneGainRef.current && audioCtxRef.current) {
        droneGainRef.current.gain.linearRampToValueAtTime(0.12, audioCtxRef.current.currentTime + 0.5);
      }
      setIsAudioOn(true);
    } else {
      if (droneGainRef.current && audioCtxRef.current) {
        droneGainRef.current.gain.linearRampToValueAtTime(0.0, audioCtxRef.current.currentTime + 0.3);
      }
      setIsAudioOn(false);
    }
  };

  // -------------------------------------------------------------
  // 2. Preloader & 3D Frame Sequence State
  // -------------------------------------------------------------
  const [loadPercent, setLoadPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const [activeFrame, setActiveFrame] = useState(0);
  const activeFrameRef = useRef(0);

  const [is360Mode, setIs360Mode] = useState(false);
  const is360ModeRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartFrameRef = useRef(0);

  // Paint Color Customizer
  const [currentColor, setCurrentColor] = useState('blue');

  // Custom Cursor
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorActive, setCursorActive] = useState(false);

  // Countdown timer state
  const [countdown, setCountdown] = useState({ days: 118, hours: 7, mins: 42, secs: 19 });

  // Email Pre-book Form
  const [emailInput, setEmailInput] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getFrameUrl = (num) => {
    const pad = String(num).padStart(3, '0');
    return `/car-jpg/ezgif-frame-${pad}.jpg`;
  };

  // -------------------------------------------------------------
  // Canvas Render
  // -------------------------------------------------------------
  const drawFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas || framesRef.current.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clamped = (Math.round(frameIdx) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES;
    const img = framesRef.current[clamped];

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, drawX, drawY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    drawFrame(activeFrameRef.current);
  }, [drawFrame]);

  // -------------------------------------------------------------
  // Preload Image Sequence
  // -------------------------------------------------------------
  useEffect(() => {
    let loaded = 0;
    framesRef.current = new Array(TOTAL_FRAMES);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const idx = i - 1;
      img.src = getFrameUrl(i);

      img.onload = () => {
        loaded++;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        setLoadPercent(pct);
        if (idx === 0) {
          drawFrame(0);
        }
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loaded++;
        setLoadPercent(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      framesRef.current[idx] = img;
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawFrame, handleResize]);

  // -------------------------------------------------------------
  // Idle Autoplay Rotation Loop
  // -------------------------------------------------------------
  useEffect(() => {
    let interval = null;
    if (isLoaded) {
      interval = setInterval(() => {
        if (!isDraggingRef.current) {
          activeFrameRef.current = (activeFrameRef.current + 1) % TOTAL_FRAMES;
          setActiveFrame(activeFrameRef.current);
          drawFrame(activeFrameRef.current);
        }
      }, 75);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoaded, drawFrame]);

  // -------------------------------------------------------------
  // Countdown Interval
  // -------------------------------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // -------------------------------------------------------------
  // Drag Orbit Handlers
  // -------------------------------------------------------------
  const handleMouseDown = (e) => {
    if (!is360ModeRef.current) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartFrameRef.current = activeFrameRef.current;
    setCursorActive(true);
    setCursorText('DRAG');
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });

    if (!is360ModeRef.current || !isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const frameOffset = Math.round(deltaX / 12);
    let nextFrame = (dragStartFrameRef.current - frameOffset) % TOTAL_FRAMES;
    if (nextFrame < 0) nextFrame += TOTAL_FRAMES;

    activeFrameRef.current = nextFrame;
    setActiveFrame(nextFrame);
    drawFrame(nextFrame);
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setCursorActive(false);
      setCursorText('');
    }
  };

  const handleTouchStart = (e) => {
    if (!is360ModeRef.current || !e.touches[0]) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.touches[0].clientX;
    dragStartFrameRef.current = activeFrameRef.current;
  };

  const handleTouchMove = (e) => {
    if (!is360ModeRef.current || !isDraggingRef.current || !e.touches[0]) return;
    const deltaX = e.touches[0].clientX - dragStartXRef.current;
    const frameOffset = Math.round(deltaX / 12);
    let nextFrame = (dragStartFrameRef.current - frameOffset) % TOTAL_FRAMES;
    if (nextFrame < 0) nextFrame += TOTAL_FRAMES;

    activeFrameRef.current = nextFrame;
    setActiveFrame(nextFrame);
    drawFrame(nextFrame);
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // -------------------------------------------------------------
  // 360 Toggle & Hotspot Clicks
  // -------------------------------------------------------------
  const toggle360 = () => {
    playClickSound();
    setIs360Mode((prev) => {
      const next = !prev;
      is360ModeRef.current = next;
      return next;
    });
  };

  const snapToPart = (part) => {
    playClickSound();
    let target = 0;
    if (part === 'headlight') target = 0;
    if (part === 'aerodynamics') target = 12;
    if (part === 'wheels') target = 25;
    if (part === 'rear') target = 38;

    if (!is360ModeRef.current) {
      setIs360Mode(true);
      is360ModeRef.current = true;
    }

    activeFrameRef.current = target;
    setActiveFrame(target);
    drawFrame(target);
  };

  const handleColorChange = (colorKey) => {
    playClickSound();
    setCurrentColor(colorKey);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    playClickSound();
    setFormSubmitted(true);
  };

  const currentPaint = COLOR_CONFIG[currentColor] || COLOR_CONFIG.blue;

  return (
    <div
      className="bg-brand-black text-white selection:bg-brand-electric selection:text-black overflow-x-hidden font-sans relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-brand-black z-[1000] flex flex-col justify-center items-center font-display transition-opacity duration-500">
          <div className="relative text-center max-w-md w-full px-8">
            <div className="text-sm font-semibold tracking-[0.3em] text-zinc-500 mb-2 uppercase">NOVA MOTORS</div>
            <h2 className="text-4xl font-bold tracking-[0.1em] text-white mb-6 uppercase">X1 INITIALIZING</h2>

            <div className="relative w-full h-[2px] bg-zinc-800 overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full bg-brand-electric transition-all duration-100 shadow-neon-cyan"
                style={{ width: `${loadPercent}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-xs tracking-widest text-zinc-400 font-mono">
              <span>PRELOADING SHOWROOM</span>
              <span>{loadPercent}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Cinematic Background Car GIF (when 360 mode is off) */}
      <img
        id="bg-gif"
        src="/bg-car.gif"
        alt="NOVA X1 Cinematic Background"
        className={`fixed inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-1000 ${
          isLoaded && !is360Mode ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ filter: currentPaint.filter }}
      />

      {/* 3D Slow Motion Car Canvas (for 360 drag inspection & idle rotation) */}
      <canvas
        ref={canvasRef}
        id="frame-canvas"
        className={`fixed inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
          isLoaded && is360Mode ? 'opacity-100 cursor-grab active:cursor-grabbing' : 'opacity-0 pointer-events-none'
        }`}
        style={{ filter: currentPaint.filter }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      <div className="film-grain"></div>

      {/* Custom Glowing Cursor */}
      <div
        className={`custom-cursor hidden md:block ${cursorActive ? 'active' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      >
        <span className="cursor-text">{cursorText}</span>
      </div>

      {/* TOP FLOATING NAV BAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-brand-black/95 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-12">
          <span className="text-lg font-bold tracking-[0.2em] font-mono text-white">NOVA MOTORS</span>
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            <a href="#hero" className="hover:text-brand-electric transition-colors">Home</a>
            <a href="#design" className="hover:text-brand-electric transition-colors">Design</a>
            <a href="#performance" className="hover:text-brand-electric transition-colors">Performance</a>
            <a href="#technology" className="hover:text-brand-electric transition-colors">Technology</a>
            <a href="#customizer" className="hover:text-brand-electric transition-colors">Customize</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleAudio}
            className={`text-xs flex items-center gap-2 border px-4 py-2 rounded-full border-white/10 glass-panel uppercase tracking-widest font-mono transition-colors ${
              isAudioOn ? 'text-brand-electric border-brand-electric/40' : 'text-zinc-500'
            }`}
          >
            {isAudioOn ? (
              <>
                <span className="flex items-center h-3">
                  <span className="sound-bar"></span>
                  <span className="sound-bar"></span>
                  <span className="sound-bar"></span>
                  <span className="sound-bar"></span>
                </span>
                SOUND ON
              </>
            ) : (
              'SOUND OFF'
            )}
          </button>
          <a
            href="#notify"
            className="bg-brand-electric text-black font-semibold text-xs tracking-widest uppercase px-6 py-2.5 rounded shadow-neon-cyan hover:bg-white transition-all glowing-border"
          >
            PRE-BOOK
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative w-full h-screen flex flex-col justify-end lg:justify-center items-start px-8 lg:px-20 pb-20 lg:pb-0 z-10 pointer-events-none"
      >
        <div className="max-w-2xl text-left pointer-events-auto">
          <span className="text-xs font-semibold tracking-[0.45em] text-brand-electric uppercase mb-3 block">
            NOVA MOTORS PRESENTS
          </span>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-wider font-display uppercase mb-4 text-white">
            NOVA X1
          </h1>
          <p className="text-lg lg:text-xl text-zinc-300 font-light tracking-wide mb-8">
            The future has arrived. Meet the next generation of electric performance.
          </p>

          {/* Countdown clock */}
          <div className="glass-panel border-l-4 border-l-brand-electric px-6 py-4 mb-8 flex items-center gap-6 max-w-sm">
            <div className="text-2xl font-mono tracking-widest text-white">
              {String(countdown.days).padStart(3, '0')} : {String(countdown.hours).padStart(2, '0')} :{' '}
              {String(countdown.mins).padStart(2, '0')} : {String(countdown.secs).padStart(2, '0')}
            </div>
            <div className="text-[9px] tracking-widest text-zinc-500 uppercase flex flex-col">
              <span>DAYS</span>
              <span>HOURS</span>
              <span>MINUTES</span>
              <span>SECONDS</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#design"
              className="bg-zinc-900 border border-white/10 hover:border-brand-electric text-white text-xs tracking-widest uppercase px-8 py-3 rounded glass-panel hover:text-brand-electric transition-all"
              onMouseEnter={() => { setCursorActive(true); setCursorText('EXPLORE'); }}
              onMouseLeave={() => { setCursorActive(false); setCursorText(''); }}
            >
              Explore X1
            </a>
            <a
              href="#notify"
              className="bg-brand-electric text-black text-xs tracking-widest uppercase font-semibold px-8 py-3 rounded hover:bg-white transition-all shadow-neon-cyan"
            >
              GET LAUNCH UPDATES
            </a>
          </div>
        </div>
      </section>

      {/* SCROLL STORYTELLING SYSTEM */}
      <div className="scroll-narrative-container relative w-full z-10 pointer-events-none">
        <section id="design" className="w-full h-screen flex justify-start items-center px-8 lg:px-24">
          <div className="glass-panel max-w-md p-8 rounded-lg pointer-events-auto border-l-2 border-brand-electric shadow-neon-cyan">
            <span className="text-[10px] tracking-[0.3em] text-brand-electric font-semibold uppercase mb-2 block">
              SCENE 01 / EXTERIOR
            </span>
            <h2 className="text-3xl font-bold tracking-wide uppercase mb-3 text-white">Pixel LED Headlights</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Adaptive laser headlights engineered for futuristic high-speed mobility. Programmed dynamic matrix grids adjust visibility matching corner angles.
            </p>
          </div>
        </section>

        <section className="w-full h-screen flex justify-end items-center px-8 lg:px-24">
          <div className="glass-panel max-w-md p-8 rounded-lg pointer-events-auto border-l-2 border-brand-electric">
            <span className="text-[10px] tracking-[0.3em] text-brand-electric font-semibold uppercase mb-2 block">
              SCENE 02 / AERODYNAMICS
            </span>
            <h2 className="text-3xl font-bold tracking-wide uppercase mb-3 text-white">Aerodynamic Silhouette</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Designed by airflow, sculpted for high-speed performance. Flush door handle triggers and a continuous glass hood trim minimize drag coefficient to 0.19.
            </p>
          </div>
        </section>

        <section className="w-full h-screen flex justify-start items-center px-8 lg:px-24">
          <div className="glass-panel max-w-md p-8 rounded-lg pointer-events-auto border-l-2 border-brand-electric">
            <span className="text-[10px] tracking-[0.3em] text-brand-electric font-semibold uppercase mb-2 block">
              SCENE 03 / ALLOY WHEELS
            </span>
            <h2 className="text-3xl font-bold tracking-wide uppercase mb-3 text-white">21" Performance Alloys</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Custom multi-spoke high-tensile graphite alloys. Inner active cooling vanes direct airflow to neon calipers, reducing brake temperatures by 15%.
            </p>
          </div>
        </section>

        <section className="w-full h-screen flex justify-end items-center px-8 lg:px-24">
          <div className="glass-panel max-w-md p-8 rounded-lg pointer-events-auto border-l-2 border-brand-electric">
            <span className="text-[10px] tracking-[0.3em] text-brand-electric font-semibold uppercase mb-2 block">
              SCENE 04 / OLED TAILLIGHT
            </span>
            <h2 className="text-3xl font-bold tracking-wide uppercase mb-3 text-white">Full-Width OLED Taillight</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Seamless full-width rear light bar utilizing flexible organo-LED elements, responding dynamically to acceleration, drag modes, and vehicle hazards.
            </p>
          </div>
        </section>

        <section className="w-full h-screen flex justify-start items-center px-8 lg:px-24">
          <div className="glass-panel max-w-md p-8 rounded-lg pointer-events-auto border-l-2 border-brand-electric">
            <span className="text-[10px] tracking-[0.3em] text-brand-electric font-semibold uppercase mb-2 block">
              SCENE 05 / COCKPIT
            </span>
            <h2 className="text-3xl font-bold tracking-wide uppercase mb-3 text-white">Cockpit. Reimagine.</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Inside the digital cockpit. A panoramic curved OLED console surrounds the driver, backed by spatial acoustic audio arrays and ambient lights.
            </p>
          </div>
        </section>
      </div>

      {/* PERFORMANCE SECTION */}
      <section id="performance" className="relative w-full h-[150vh] bg-transparent z-10 flex flex-col justify-center items-center text-center px-8">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center pointer-events-none">
          <div className="pointer-events-auto">
            <span className="text-xs font-semibold tracking-[0.45em] text-brand-electric uppercase mb-2 block">
              POWER WITHOUT COMPROMISE
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-wider font-display uppercase mb-12">
              PERFORMANCE METRICS
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full">
              <div className="glass-panel p-6 rounded-lg border-b border-brand-electric/20 hover:border-brand-electric/50 transition-all">
                <div className="text-4xl lg:text-5xl font-bold tracking-widest text-brand-electric font-mono mb-2">3.2 S</div>
                <div className="text-[10px] tracking-widest text-zinc-500 uppercase">0–100 KM/H SPEED</div>
              </div>
              <div className="glass-panel p-6 rounded-lg border-b border-brand-electric/20 hover:border-brand-electric/50 transition-all">
                <div className="text-4xl lg:text-5xl font-bold tracking-widest text-white font-mono mb-2">650 KM</div>
                <div className="text-[10px] tracking-widest text-zinc-500 uppercase">WLTP DRIVE RANGE</div>
              </div>
              <div className="glass-panel p-6 rounded-lg border-b border-brand-electric/20 hover:border-brand-electric/50 transition-all">
                <div className="text-4xl lg:text-5xl font-bold tracking-widest text-white font-mono mb-2">480 HP</div>
                <div className="text-[10px] tracking-widest text-zinc-500 uppercase">TOTAL DRIVE POWER</div>
              </div>
              <div className="glass-panel p-6 rounded-lg border-b border-brand-electric/20 hover:border-brand-electric/50 transition-all">
                <div className="text-4xl lg:text-5xl font-bold tracking-widest text-white font-mono mb-2">720 NM</div>
                <div className="text-[10px] tracking-widest text-zinc-500 uppercase">INSTANT TORQUE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL ARCHITECTURE */}
      <section id="technology" className="relative w-full h-[150vh] bg-transparent z-10 flex flex-col justify-center items-start px-8 lg:px-24">
        <div className="sticky top-0 h-screen max-w-md flex flex-col justify-center items-start pointer-events-none">
          <div className="pointer-events-auto">
            <span className="text-xs font-semibold tracking-[0.45em] text-brand-electric uppercase mb-2 block">
              ENGINEERING AESTHETICS
            </span>
            <h2 className="text-5xl font-bold tracking-wide uppercase mb-6">800V ARCHITECTURE</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              The core chassis houses high-density battery arrays coupled to dual front/rear motors. Ultrafast 800V support feeds up to 80% charge in less than 15 minutes.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-neonGreen shadow-neon-cyan"></span>
                <span>Active Heat Management</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-neonGreen shadow-neon-cyan"></span>
                <span>Carbon Fiber Frame</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-neonGreen shadow-neon-cyan"></span>
                <span>Dual Motor AWD Vectoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR CUSTOMIZER */}
      <section id="customizer" className="relative w-full h-screen bg-transparent z-10 flex flex-col justify-between items-center py-20 px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.45em] text-brand-electric uppercase mb-2 block">DYNAMICS</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-wider font-display uppercase text-white">CHOOSE YOUR X1</h2>
        </div>

        <div className={`glass-panel border-t-2 p-6 rounded-lg max-w-sm w-full text-center transition-all ${currentPaint.glowClass}`}>
          <h3 className="text-lg font-bold tracking-widest uppercase mb-1 text-white">{currentPaint.name}</h3>
          <p className="text-xs text-zinc-400 mb-4">{currentPaint.desc}</p>
          <div className={`text-xs font-mono font-bold tracking-widest ${currentPaint.textClass}`}>
            ACCENT GLOW ACTIVE
          </div>
        </div>

        <div className="flex gap-6 pointer-events-auto">
          {Object.entries(COLOR_CONFIG).map(([key, item]) => (
            <button
              key={key}
              onClick={() => handleColorChange(key)}
              className={`color-swatch w-10 h-10 rounded-full border-2 transition-transform ${
                currentColor === key ? 'border-brand-electric scale-125' : 'border-transparent hover:scale-110'
              }`}
              style={{ backgroundColor: item.colorHex }}
              title={item.name}
            />
          ))}
        </div>
      </section>

      {/* 360 INTERACTIVE VIEW */}
      <section className="relative w-full h-screen bg-transparent z-10 flex flex-col justify-between items-center py-20 px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.45em] text-brand-electric uppercase mb-2 block">INTERACTION MODEL</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-wider font-display uppercase text-white">SEE EVERY ANGLE</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pointer-events-auto z-20">
          <button
            onClick={() => snapToPart('headlight')}
            className="hotspot-btn glass-panel text-xs tracking-widest uppercase font-mono px-4 py-2 border border-white/10 hover:border-brand-electric text-zinc-400 hover:text-white transition-colors"
          >
            Headlights
          </button>
          <button
            onClick={() => snapToPart('aerodynamics')}
            className="hotspot-btn glass-panel text-xs tracking-widest uppercase font-mono px-4 py-2 border border-white/10 hover:border-brand-electric text-zinc-400 hover:text-white transition-colors"
          >
            Aerodynamics
          </button>
          <button
            onClick={() => snapToPart('wheels')}
            className="hotspot-btn glass-panel text-xs tracking-widest uppercase font-mono px-4 py-2 border border-white/10 hover:border-brand-electric text-zinc-400 hover:text-white transition-colors"
          >
            Performance Wheel
          </button>
          <button
            onClick={() => snapToPart('rear')}
            className="hotspot-btn glass-panel text-xs tracking-widest uppercase font-mono px-4 py-2 border border-white/10 hover:border-brand-electric text-zinc-400 hover:text-white transition-colors"
          >
            Taillight
          </button>
        </div>

        <div className="text-center z-20">
          <button
            onClick={toggle360}
            className={`font-semibold text-xs tracking-widest uppercase px-8 py-3.5 rounded transition-all pointer-events-auto ${
              is360Mode
                ? 'bg-brand-electric text-black shadow-neon-cyan font-bold'
                : 'border border-white/10 text-white hover:border-brand-electric'
            }`}
          >
            {is360Mode ? 'DRAG TO ROTATE VEHICLE' : 'ENABLE 360° DRAG ORBIT'}
          </button>
          <p className="text-[10px] text-zinc-500 tracking-widest mt-2 uppercase">
            {is360Mode ? 'Drag on the screen to rotate car' : 'Unlock frame swipe interface'}
          </p>
        </div>
      </section>

      {/* EMAIL NOTIFICATION & EVENT PREBOOK */}
      <section
        id="notify"
        className="relative w-full h-screen bg-transparent z-10 flex flex-col justify-center items-center text-center px-8 border-t border-white/5"
      >
        <div className="max-w-xl w-full">
          <span className="text-xs font-semibold tracking-[0.45em] text-brand-electric uppercase mb-3 block">BE FIRST TO KNOW</span>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-wider font-display uppercase mb-4 text-white">THE REVEAL</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-mono tracking-widest uppercase text-zinc-400 mb-8">
            <span>15 DECEMBER 2026</span>
            <span className="hidden md:inline">•</span>
            <span>7:00 PM IST</span>
            <span className="hidden md:inline">•</span>
            <span>GLOBAL DIGITAL PREMIERE</span>
          </div>

          {!formSubmitted ? (
            <div className="w-full">
              <form
                onSubmit={handleFormSubmit}
                className="glass-panel p-2 rounded flex flex-col sm:flex-row gap-2 border border-white/10 w-full mb-6 pointer-events-auto"
              >
                <input
                  required
                  type="email"
                  placeholder="ENTER YOUR EMAIL FOR REVEAL ACCESS"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-transparent border-0 outline-none flex-grow text-xs tracking-widest font-mono text-white p-3 uppercase placeholder:text-zinc-600 focus:placeholder:text-zinc-400"
                />
                <button
                  type="submit"
                  className="bg-brand-electric text-black font-bold text-xs tracking-widest uppercase px-8 py-3 rounded hover:bg-white transition-all shadow-neon-cyan"
                >
                  NOTIFY ME
                </button>
              </form>
            </div>
          ) : (
            <div className="glass-panel p-6 rounded border border-brand-neonGreen/30 shadow-neon-cyan mb-8 text-brand-neonGreen text-xs tracking-[0.2em] font-semibold uppercase">
              🎉 YOU'RE ON THE LIST. PRE-BOOK CONFIRMED.
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto">
            <button
              onClick={() => {
                playClickSound();
                alert('Launch event added to your calendar!');
              }}
              className="bg-zinc-900 border border-white/10 hover:border-brand-electric text-white text-xs tracking-widest uppercase px-6 py-3 rounded glass-panel hover:text-brand-electric transition-all"
            >
              <i className="fa-regular fa-calendar-plus mr-2"></i> ADD TO CALENDAR
            </button>
            <a
              href="#hero"
              onClick={() => {
                playClickSound();
                activeFrameRef.current = 0;
                setActiveFrame(0);
                drawFrame(0);
              }}
              className="bg-zinc-900 border border-white/10 hover:border-brand-electric text-white text-xs tracking-widest uppercase px-6 py-3 rounded glass-panel hover:text-brand-electric transition-all"
            >
              RETURN TO OVERVIEW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
