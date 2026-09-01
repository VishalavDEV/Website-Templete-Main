import React, { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 50;

const STAGE_DATA = [
  { start: 0, end: 5, num: '01 / 06', title: 'Meet Orange 16.', desc: 'From one beautiful device to everything inside it.', cardIndex: 0 },
  { start: 6, end: 14, num: '02 / 06', title: 'Designed around every detail.', desc: 'Grade 5 Titanium enclosure with zero-margin micro bezels.', cardIndex: 1 },
  { start: 15, end: 26, num: '03 / 06', title: 'Precision inside. Beauty outside.', desc: 'The rear glass panel separates to reveal thermal diffusion plates.', cardIndex: 2 },
  { start: 27, end: 40, num: '04 / 06', title: 'Engineered from the inside out.', desc: 'O18 Pro motherboard, battery cell, and camera array float suspended.', cardIndex: 3 },
  { start: 41, end: 47, num: '05 / 06', title: 'Symmetrical Harmony.', desc: 'Complete 50-component technical exploded view visualization.', cardIndex: 4 },
  { start: 48, end: 50, num: '06 / 06', title: 'Everything comes together.', desc: "Ready for what's next. Assembling back into one device.", cardIndex: 5 }
];

const SPEED_MAP = {
  '0.25': 0.18,
  '0.5': 0.35,
  '1.0': 0.7
};

const XRAY_MODES = ['OFF', 'SEMI-TRANSPARENT', 'INTERNAL', 'EXPLODED'];

const MODEL_DATA = {
  '16pro': { name: 'Orange 16 Pro', screen: '6.3"', weight: '199 g', thick: '8.25 mm', bezel: '0.8 mm' },
  '16promax': { name: 'Orange 16 Pro Max', screen: '6.9"', weight: '227 g', thick: '8.25 mm', bezel: '0.8 mm' },
  '15pro': { name: 'Orange Phone 15 Pro', screen: '6.1"', weight: '187 g', thick: '8.25 mm', bezel: '1.5 mm' }
};

const COMPONENT_DETAILS = {
  camera: {
    tag: '48MP FUSION CAMERA OPTICS',
    title: '48MP Fusion Optics & Telephoto System',
    desc: 'Custom periscope folded glass prism array with 2nd-generation Sensor-Shift OIS.',
    frame: '004',
    specs: [
      { lbl: 'Primary Sensor', val: '48MP Quad-Pixel (24mm, ƒ/1.78)' },
      { lbl: 'Telephoto Array', val: '5x Lossless Optical Zoom (120mm)' },
      { lbl: 'Optical Stabilization', val: '3D Sensor-Shift OIS (10,000 adj/sec)' }
    ],
    gainPct: '92%',
    gainText: '+50% light capture efficiency vs Orange Phone 15 Pro'
  },
  performance: {
    tag: 'A18 PRO SILICON ARCHITECTURE',
    title: 'O18 Pro System-on-Chip (3nm)',
    desc: 'TSMC 2nd-gen 3nm fabrication with 19 Billion transistors and 35 TOPS Neural Engine.',
    frame: '038',
    specs: [
      { lbl: 'CPU Architecture', val: '6-Core (2 Perf + 4 Efficiency)' },
      { lbl: 'GPU Accelerator', val: '6-Core with Hardware Ray Tracing' },
      { lbl: 'Neural NPU', val: '16-Core (35 Trillion Ops/Sec)' }
    ],
    gainPct: '88%',
    gainText: '+20% CPU speed & 2x faster Ray Tracing vs A17 Pro'
  },
  display: {
    tag: 'SUPER RETINA XDR OLED',
    title: 'Always-On 120Hz ProMotion Display',
    desc: 'Zero-margin micro bezel OLED with 2,000 nits peak outdoor brightness.',
    frame: '042',
    specs: [
      { lbl: 'Resolution & PPI', val: '2868-by-1320 pixels at 460 ppi' },
      { lbl: 'Refresh Dynamics', val: '1Hz to 120Hz Adaptive ProMotion' },
      { lbl: 'Peak Outdoor Brightness', val: '2,000 Nits Outdoor Sunlight' }
    ],
    gainPct: '95%',
    gainText: '2x tougher front glass vs any competitor'
  },
  battery: {
    tag: 'STACKED CELL BATTERY ARCHITECTURE',
    title: 'Re-engineered Energy Cell Density',
    desc: '100% recycled cobalt battery with MagSafe 25W fast wireless charging.',
    frame: '032',
    specs: [
      { lbl: 'Video Playback Time', val: 'Up to 29 Hours Continuous' },
      { lbl: 'MagSafe Fast Wireless', val: '25W Wireless Fast Charger' },
      { lbl: 'Recycled Materials', val: '100% Recycled Cobalt & Copper' }
    ],
    gainPct: '85%',
    gainText: '+4 hours additional battery runtime vs previous gen'
  },
  design: {
    tag: 'GRADE 5 TITANIUM ENCLOSURE',
    title: 'Aerospace Grade 5 Titanium Chassis',
    desc: 'Micro-blasted satin titanium forged with thermal aluminum subframe. White & Black Titanium finishes.',
    frame: '001',
    specs: [
      { lbl: 'Alloy Material', val: 'Ti-6Al-4V Grade 5 Titanium' },
      { lbl: 'Subframe Structure', val: '100% Recycled Thermal Aluminum' },
      { lbl: 'Water Resistance', val: 'IP68 (6 Meters / 30 Min)' }
    ],
    gainPct: '90%',
    gainText: 'Highest strength-to-weight ratio of any metal alloy'
  }
};

export default function App() {
  // -------------------------------------------------------------
  // 1. Interactive Canvas & Frame Sequencer State
  // -------------------------------------------------------------
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const frameImagesRef = useRef([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  
  // Animation / scrubbing refs
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const slomoPlayingRef = useRef(false);
  const slomoDirectionRef = useRef(1);
  const slomoSpeedRef = useRef(SPEED_MAP['0.25']);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);

  // Slomo controls UI State
  const [isSlomoPlaying, setIsSlomoPlaying] = useState(false);
  const [speedOption, setSpeedOption] = useState('0.25');
  const [xrayIndex, setXrayIndex] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // -------------------------------------------------------------
  // 2. HUD & Stage Info State
  // -------------------------------------------------------------
  const [currentStage, setCurrentStage] = useState(STAGE_DATA[0]);

  // -------------------------------------------------------------
  // 3. Custom Cursor & Follow Light
  // -------------------------------------------------------------
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorRingPos, setCursorRingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorHover, setCursorHover] = useState(false);

  // -------------------------------------------------------------
  // 4. Navbar & Mobile Menu
  // -------------------------------------------------------------
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // -------------------------------------------------------------
  // 5. Battery Gauge Widget (scroll-reactive)
  // -------------------------------------------------------------
  const [batteryPct, setBatteryPct] = useState(100);

  // -------------------------------------------------------------
  // 6. Model Comparison Tool
  // -------------------------------------------------------------
  const [selectedModel, setSelectedModel] = useState('16pro');

  // -------------------------------------------------------------
  // 7. Specifications Tabs
  // -------------------------------------------------------------
  const [activeSpecTab, setActiveSpecTab] = useState('display');

  // -------------------------------------------------------------
  // 8. Inspector Modal
  // -------------------------------------------------------------
  const [inspectKey, setInspectKey] = useState(null);

  // -------------------------------------------------------------
  // 9. Countdown Timer (Hero & Launch)
  // -------------------------------------------------------------
  const [countdown, setCountdown] = useState({ days: '28', hours: '14', mins: '36', secs: '52' });

  // -------------------------------------------------------------
  // 10. Forms & Toast Feedback
  // -------------------------------------------------------------
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitting, setNotifySubmitting] = useState(false);
  const [notifySuccess, setNotifySuccess] = useState(false);

  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Helper for image paths
  const getFrameSrc = (num) => {
    const pad = String(num).padStart(3, '0');
    return `/ezgif-2795d339821dd144-jpg/ezgif-frame-${pad}.jpg`;
  };

  // -------------------------------------------------------------
  // Canvas Render Function
  // -------------------------------------------------------------
  const renderCanvasFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIdx)));
    let img = frameImagesRef.current[clamped];

    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameImagesRef.current[clamped - offset];
        const next = frameImagesRef.current[clamped + offset];
        if (prev && prev.complete && prev.naturalWidth > 0) { img = prev; break; }
        if (next && next.complete && next.naturalWidth > 0) { img = next; break; }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.height * 0.85;
      drawWidth = drawHeight * imgRatio;
    } else {
      drawWidth = canvas.width * 0.85;
      drawHeight = drawWidth / imgRatio;
    }
    drawX = (canvas.width - drawWidth) / 2;
    drawY = (canvas.height - drawHeight) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // High DPI Canvas Resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(2, window.devicePixelRatio || 1);
    canvas.width = canvas.parentElement.clientWidth * dpr;
    canvas.height = canvas.parentElement.clientHeight * dpr;
    renderCanvasFrame(currentFrameRef.current);
  }, [renderCanvasFrame]);

  // -------------------------------------------------------------
  // Preload Image Frames on Mount
  // -------------------------------------------------------------
  useEffect(() => {
    let loaded = 0;
    frameImagesRef.current = new Array(TOTAL_FRAMES);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const idx = i - 1;
      img.src = getFrameSrc(i);

      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (idx === 0) {
          renderCanvasFrame(0);
        }
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      frameImagesRef.current[idx] = img;
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, renderCanvasFrame]);

  // -------------------------------------------------------------
  // Frame Interpolation Loop (RAF)
  // -------------------------------------------------------------
  useEffect(() => {
    let animId;
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.15;
        const rounded = Math.round(currentFrameRef.current);
        setCurrentFrameIndex(rounded);
        renderCanvasFrame(currentFrameRef.current);

        const stage = STAGE_DATA.find((s) => rounded >= s.start && rounded <= s.end) || STAGE_DATA[0];
        setCurrentStage(stage);
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [renderCanvasFrame]);

  // -------------------------------------------------------------
  // Slomo Auto-Play Interval
  // -------------------------------------------------------------
  useEffect(() => {
    let interval = null;
    if (isSlomoPlaying && !isVideoMode) {
      interval = setInterval(() => {
        let next = targetFrameRef.current + slomoSpeedRef.current * slomoDirectionRef.current;
        if (next >= TOTAL_FRAMES - 1) {
          next = TOTAL_FRAMES - 1;
          slomoDirectionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          slomoDirectionRef.current = 1;
        }
        targetFrameRef.current = next;
      }, 30);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSlomoPlaying, isVideoMode]);

  // -------------------------------------------------------------
  // Mouse & Touch Drag Scrubbing on Canvas
  // -------------------------------------------------------------
  const handleMouseDown = (e) => {
    if (isVideoMode) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    setHasInteracted(true);
    if (isSlomoPlaying) {
      setIsSlomoPlaying(false);
      slomoPlayingRef.current = false;
    }
  };

  const handleMouseMove = useCallback((e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });

    if (!isDraggingRef.current || isVideoMode) return;
    const deltaX = e.clientX - dragStartXRef.current;
    dragStartXRef.current = e.clientX;
    targetFrameRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetFrameRef.current + deltaX * 0.25));
  }, [isVideoMode]);

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e) => {
    if (isVideoMode || !e.touches[0]) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.touches[0].clientX;
    setHasInteracted(true);
    if (isSlomoPlaying) {
      setIsSlomoPlaying(false);
      slomoPlayingRef.current = false;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || isVideoMode || !e.touches[0]) return;
    const deltaX = e.touches[0].clientX - dragStartXRef.current;
    dragStartXRef.current = e.touches[0].clientX;
    targetFrameRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetFrameRef.current + deltaX * 0.25));
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // -------------------------------------------------------------
  // Scroll Sync (Experience scrubbing, navbar, battery)
  // -------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll style
      setIsScrolled(window.scrollY > 50);

      // Canvas Scroll scrubber
      if (!isSlomoPlaying && !isVideoMode) {
        const expEl = document.getElementById('experience');
        if (expEl) {
          const rect = expEl.getBoundingClientRect();
          const total = expEl.offsetHeight - window.innerHeight;
          if (total > 0) {
            const p = Math.max(0, Math.min(1, -rect.top / total));
            if (p <= 0.85) {
              targetFrameRef.current = Math.round((p / 0.85) * (TOTAL_FRAMES - 1));
            } else {
              targetFrameRef.current = Math.round((1 - (p - 0.85) / 0.15) * (TOTAL_FRAMES - 1));
            }
          }
        }
      }

      // Battery Widget scroll gauge
      const featEl = document.getElementById('features');
      if (featEl) {
        const rect = featEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const pct = Math.max(0, Math.min(100, Math.round(((window.innerHeight - rect.top) / (window.innerHeight + rect.height)) * 100)));
          setBatteryPct(pct);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSlomoPlaying, isVideoMode]);

  // -------------------------------------------------------------
  // Smooth Cursor Ring Lerp
  // -------------------------------------------------------------
  useEffect(() => {
    let animId;
    let rx = -100;
    let ry = -100;

    const cursorLoop = () => {
      rx += (cursorPos.x - rx) * 0.15;
      ry += (cursorPos.y - ry) * 0.15;
      setCursorRingPos({ x: rx, y: ry });
      animId = requestAnimationFrame(cursorLoop);
    };

    animId = requestAnimationFrame(cursorLoop);
    return () => cancelAnimationFrame(animId);
  }, [cursorPos]);

  // -------------------------------------------------------------
  // Countdown Timer
  // -------------------------------------------------------------
  useEffect(() => {
    const targetDate = new Date(Date.now() + 28 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000);
    const updateTime = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) return;
      const pad = (n) => String(Math.floor(n)).padStart(2, '0');
      setCountdown({
        days: pad(diff / (1000 * 60 * 60 * 24)),
        hours: pad((diff / (1000 * 60 * 60)) % 24),
        mins: pad((diff / (1000 * 60)) % 60),
        secs: pad((diff / 1000) % 60)
      });
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  // -------------------------------------------------------------
  // Slomo Mode Controls Handlers
  // -------------------------------------------------------------
  const toggleSlomoPlay = () => {
    const nextState = !isSlomoPlaying;
    setIsSlomoPlaying(nextState);
    slomoPlayingRef.current = nextState;
    setHasInteracted(true);
  };

  const handleSpeedChange = (spd) => {
    setSpeedOption(spd);
    slomoSpeedRef.current = SPEED_MAP[spd] || 0.18;
    if (videoRef.current) {
      videoRef.current.playbackRate = parseFloat(spd);
    }
  };

  const handleXrayToggle = () => {
    setXrayIndex((prev) => (prev + 1) % XRAY_MODES.length);
  };

  const handleModeSwitch = () => {
    setIsVideoMode((prev) => {
      const next = !prev;
      if (next) {
        setIsSlomoPlaying(false);
        slomoPlayingRef.current = false;
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
          videoRef.current.playbackRate = parseFloat(speedOption);
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
      return next;
    });
  };

  // -------------------------------------------------------------
  // Form Submissions
  // -------------------------------------------------------------
  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotifySubmitting(true);
    setTimeout(() => {
      setNotifySubmitting(false);
      setNotifySuccess(true);
      addToast(`Thank you! ${notifyEmail} is now registered for VIP launch updates.`);
    }, 800);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      addToast('Message sent successfully! Our launch team will respond shortly.');
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  // Hotspots active when frame is between 28 and 48
  const hotspotsActive = currentFrameIndex >= 28 && currentFrameIndex <= 48;
  const activeXrayMode = XRAY_MODES[xrayIndex];
  const modalData = inspectKey ? COMPONENT_DETAILS[inspectKey] : null;

  return (
    <div
      className={`light-theme ${cursorText ? 'cursor-interactive' : ''} ${cursorHover ? 'cursor-hover' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Studio Follow Light */}
      <div
        className="studio-follow-light"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`
        }}
      />

      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      >
        <span className="cursor-text">{cursorText}</span>
      </div>
      <div
        className="cursor-ring"
        style={{
          left: `${cursorRingPos.x}px`,
          top: `${cursorRingPos.y}px`
        }}
      />

      {/* Navigation Bar */}
      <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <nav className="navbar">
          <a
            href="#hero"
            className="nav-logo"
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
          >
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span className="logo-text">Orange 16</span>
          </a>

          <div className="nav-links" id="nav-links">
            <a href="#hero" className="nav-link active">Overview</a>
            <a href="#experience" className="nav-link">Engineering & Slomo</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#specifications" className="nav-link">Specifications</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-actions">
            <a
              href="#notify"
              className="btn btn-primary btn-sm magnetic-btn"
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
            >
              Notify Me
            </a>
            <button
              className="mobile-toggle"
              id="mobile-toggle"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#hero" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Overview</a>
          <a href="#experience" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Engineering & Slomo</a>
          <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#specifications" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Specifications</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main>
        {/* 1. HERO SECTION */}
        <section className="hero-section" id="hero">
          <div className="hero-bg-glow"></div>
          <div className="hero-grid-lines"></div>

          <div className="hero-content">
            <div className="hero-pill-badge fade-in-element">
              <span className="pulse-dot"></span> THE NEXT GENERATION
            </div>

            <h1 className="hero-title editorial-text fade-in-element">Something powerful is coming.</h1>
            <p className="hero-subtitle fade-in-element">
              A new experience of performance, photography and titanium design is about to arrive.
            </p>

            {/* Live Countdown Timer */}
            <div className="hero-countdown-wrapper fade-in-element">
              <div className="countdown-label">LAUNCHING IN</div>
              <div className="countdown-grid" id="hero-countdown">
                <div className="countdown-card">
                  <span className="countdown-val">{countdown.days}</span>
                  <span className="countdown-unit">DAYS</span>
                </div>
                <div className="countdown-card">
                  <span className="countdown-val">{countdown.hours}</span>
                  <span className="countdown-unit">HOURS</span>
                </div>
                <div className="countdown-card">
                  <span className="countdown-val">{countdown.mins}</span>
                  <span className="countdown-unit">MIN</span>
                </div>
                <div className="countdown-card">
                  <span className="countdown-val">{countdown.secs}</span>
                  <span className="countdown-unit">SEC</span>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="hero-cta-group fade-in-element">
              <a
                href="#notify"
                className="btn btn-primary magnetic-btn"
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                <span>Notify Me</span>
                <i className="fa-solid fa-bell btn-icon"></i>
              </a>
              <a
                href="#experience"
                className="btn btn-glass magnetic-btn"
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                <span>Explore Orange 16 Slomo</span>
                <i className="fa-solid fa-play btn-icon"></i>
              </a>
            </div>
          </div>

          {/* Hero Floating 3D Image Preview */}
          <div
            className="hero-visual-preview cursor-interactive"
            onMouseEnter={() => setCursorText('EXPLORE')}
            onMouseLeave={() => setCursorText('')}
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="phone-glow-aura"></div>
            <img
              src={getFrameSrc(1)}
              alt="Orange 16 Floating Studio View"
              className="hero-phone-img HD-image"
            />
          </div>

          {/* Floating Scroll Indicator */}
          <div className="scroll-indicator">
            <span className="scroll-text">SCROLL TO EXPLORE</span>
            <div className="scroll-animated-line"></div>
          </div>
        </section>

        {/* 2. SCROLL-DRIVEN & SLOW-MOTION CINEMATIC EXPERIENCE */}
        <section className="experience-sticky-container" id="experience">
          <div className="sticky-viewport">
            {/* Canvas & Video Render Container */}
            <div
              className="canvas-wrapper cursor-interactive"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setCursorText('EXPLORE')}
              onMouseLeave={() => setCursorText('')}
            >
              <canvas
                ref={canvasRef}
                id="exploded-canvas"
                className={`HD-canvas ${activeXrayMode !== 'OFF' ? 'xray-active' : ''}`}
                style={{
                  opacity: isVideoMode ? 0 : 1,
                  pointerEvents: isVideoMode ? 'none' : 'auto'
                }}
              />

              {/* HTML5 Video Player Option */}
              <video
                ref={videoRef}
                id="slomo-video"
                className={`slomo-video-element ${isVideoMode ? '' : 'hidden'}`}
                loop
                muted
                playsInline
                poster={getFrameSrc(1)}
                style={{
                  opacity: isVideoMode ? 1 : 0,
                  filter: activeXrayMode !== 'OFF' ? 'invert(0.9) hue-rotate(180deg) contrast(1.2)' : ''
                }}
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-circuit-board-elements-41584-large.mp4"
                  type="video/mp4"
                />
              </video>

              {/* CINEMA SLOMO CONTROLS BAR */}
              <div className="cinema-controls-wrapper">
                {/* Auto Play / Pause button */}
                <button
                  className={`btn btn-glass btn-sm ${isSlomoPlaying ? 'playing' : ''}`}
                  onClick={toggleSlomoPlay}
                  style={{
                    borderRadius: '99px',
                    padding: '8px 16px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: isSlomoPlaying ? '#2563eb' : 'rgba(255, 255, 255, 0.85)',
                    color: isSlomoPlaying ? '#ffffff' : '#0f172a',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  <i className={`fa-solid ${isSlomoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  <span>{isSlomoPlaying ? 'PAUSE SLOMO' : 'SLOMO AUTO-PLAY'}</span>
                </button>

                {/* Speed Controls */}
                <div className="speed-selector">
                  <span className="speed-lbl">SPEED:</span>
                  {['0.25', '0.5', '1.0'].map((spd) => (
                    <button
                      key={spd}
                      className={`speed-btn ${speedOption === spd ? 'active' : ''}`}
                      onClick={() => handleSpeedChange(spd)}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* X-Ray Mode Toggle */}
                <button
                  className={`xray-btn ${activeXrayMode !== 'OFF' ? 'active' : ''}`}
                  onClick={handleXrayToggle}
                  aria-label="Toggle X-Ray View"
                >
                  <i className="fa-solid fa-eye"></i>
                  <span>X-RAY: {activeXrayMode}</span>
                </button>

                {/* Mode Switcher: Canvas vs Video Player */}
                <button
                  className={`mode-switch-btn ${isVideoMode ? 'active' : ''}`}
                  onClick={handleModeSwitch}
                >
                  <i className="fa-solid fa-film"></i>
                  <span>{isVideoMode ? 'FRAME SCRUB MODE' : 'VIDEO PLAYER MODE'}</span>
                </button>
              </div>

              {/* Drag Hint Overlay */}
              {!hasInteracted && (
                <div className="canvas-drag-hint">
                  <i className="fa-solid fa-hand-pointer"></i>
                  <span>SCROLL, DRAG, OR PRESS SLOMO AUTO-PLAY</span>
                </div>
              )}

              {/* Frame Loading Overlay */}
              {!isLoaded && (
                <div className="canvas-loader">
                  <div className="loader-spinner"></div>
                  <p className="loader-text">Loading High-Res 3D Slow-Motion Studio Frames...</p>
                  <div className="loader-bar-bg">
                    <div className="loader-bar-fill" style={{ width: `${loadProgress}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Hotspots */}
            <div className={`hotspots-container ${hotspotsActive ? 'active' : ''}`}>
              {/* Camera Hotspot */}
              <div
                className="hotspot-item cursor-interactive"
                style={{ top: '25%', left: '38%' }}
                onClick={() => setInspectKey('camera')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <div className="hotspot-dot"></div>
                <svg className="hotspot-line-svg" width="140" height="80">
                  <line x1="0" y1="40" x2="140" y2="10" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
                <div className="hotspot-card glass-card">
                  <span className="hotspot-tag">48MP FUSION CAMERA (CLICK TO INSPECT)</span>
                  <h4>Anti-Reflective Optical Optics</h4>
                  <p>2nd-gen Sensor-Shift OIS & 5x periscope lens.</p>
                </div>
              </div>

              {/* Motherboard Hotspot */}
              <div
                className="hotspot-item cursor-interactive"
                style={{ top: '45%', left: '52%' }}
                onClick={() => setInspectKey('performance')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <div className="hotspot-dot"></div>
                <svg className="hotspot-line-svg" width="140" height="80">
                  <line x1="0" y1="20" x2="140" y2="70" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
                <div className="hotspot-card glass-card">
                  <span className="hotspot-tag">A18 PRO BIONIC CHIP (CLICK TO INSPECT)</span>
                  <h4>3nm Silicon Architecture</h4>
                  <p>6-Core GPU with 35 TOPS Neural NPU.</p>
                </div>
              </div>

              {/* Battery Hotspot */}
              <div
                className="hotspot-item cursor-interactive"
                style={{ top: '60%', left: '45%' }}
                onClick={() => setInspectKey('battery')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <div className="hotspot-dot"></div>
                <svg className="hotspot-line-svg" width="140" height="80">
                  <line x1="0" y1="10" x2="140" y2="40" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
                <div className="hotspot-card glass-card">
                  <span className="hotspot-tag">HIGH-DENSITY BATTERY (CLICK TO INSPECT)</span>
                  <h4>Stacked Cell Technology</h4>
                  <p>MagSafe 25W wireless charging integration.</p>
                </div>
              </div>
            </div>

            {/* Stage HUD Headline */}
            <div className="stage-hud">
              <span className="hud-stage-number">{currentStage.num}</span>
              <h3 className="hud-stage-title">{currentStage.title}</h3>
              <p className="hud-stage-desc">{currentStage.desc}</p>
            </div>

            {/* Pinned Overlay Text Cards */}
            <div className="scroll-cards-container">
              {STAGE_DATA.map((stage, idx) => (
                <div
                  key={stage.num}
                  className={`scroll-card ${currentStage.cardIndex === idx ? 'active' : ''}`}
                >
                  <span className="card-tag">{stage.num} - STAGE</span>
                  <h2>{stage.title}</h2>
                  <p>{stage.desc}</p>
                </div>
              ))}
            </div>

            {/* Progress Indicator Bar */}
            <div className="scroll-progress-bar">
              <div
                className="scroll-progress-fill"
                style={{ height: `${(currentFrameIndex / (TOTAL_FRAMES - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>

        {/* 3. FEATURE SECTIONS ("Built for what matters.") */}
        <section className="features-section" id="features">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">INNOVATION MATRIX</span>
              <h2 className="section-title editorial-text">Built for what matters.</h2>
              <p className="section-description">
                A complete leap forward in photography, processing power, visual fidelity, and physical craft.
              </p>
            </div>

            {/* Large Editorial Feature 1: Camera */}
            <div className="editorial-feature-row">
              <div className="editorial-text-box">
                <span className="feature-num-badge">CAMERA SYSTEM</span>
                <h3 className="editorial-feature-title">Capture more of the moment.</h3>
                <p className="editorial-feature-desc">
                  The new 48MP Fusion camera system features anti-reflective optical coatings and a custom periscope telephoto lens array, delivering 5x optical zoom with zero detail loss.
                </p>
                <div className="editorial-bullets">
                  <span><i className="fa-solid fa-check"></i> 48MP Spatial Video Capture</span>
                  <span><i className="fa-solid fa-check"></i> 2nd-Gen Sensor-Shift OIS</span>
                </div>
                <button
                  className="btn btn-glass btn-sm mt-4 inspect-btn"
                  onClick={() => setInspectKey('camera')}
                >
                  Inspect Optics Deep-Dive <i className="fa-solid fa-magnifying-glass-plus"></i>
                </button>
              </div>
              <div
                className="editorial-visual-box glass-card cursor-interactive inspect-btn"
                onClick={() => setInspectKey('camera')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <img src={getFrameSrc(4)} alt="Orange 16 Camera Optics Detail" className="editorial-img HD-image" />
              </div>
            </div>

            {/* Large Editorial Feature 2: Performance */}
            <div className="editorial-feature-row reverse">
              <div className="editorial-text-box">
                <span className="feature-num-badge">A18 PRO CHIP</span>
                <h3 className="editorial-feature-title">Power that keeps up with you.</h3>
                <p className="editorial-feature-desc">
                  Built on TSMC's 2nd-generation 3-nanometer silicon technology, the O18 Pro Bionic features a 6-core GPU with hardware ray tracing and a 16-core Neural Engine.
                </p>
                <div className="editorial-bullets">
                  <span><i className="fa-solid fa-check"></i> 35 TOPS Neural NPU</span>
                  <span><i className="fa-solid fa-check"></i> 2x Faster Hardware Ray Tracing</span>
                </div>
                <button
                  className="btn btn-glass btn-sm mt-4 inspect-btn"
                  onClick={() => setInspectKey('performance')}
                >
                  Inspect Silicon Chip <i className="fa-solid fa-microchip"></i>
                </button>
              </div>
              <div
                className="editorial-visual-box glass-card cursor-interactive inspect-btn"
                onClick={() => setInspectKey('performance')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <img src={getFrameSrc(38)} alt="O18 Pro Internal Silicon Board" className="editorial-img HD-image" />
              </div>
            </div>

            {/* Large Editorial Feature 3: Display */}
            <div className="editorial-feature-row">
              <div className="editorial-text-box">
                <span className="feature-num-badge">SUPER RETINA XDR</span>
                <h3 className="editorial-feature-title">Every detail, beautifully presented.</h3>
                <p className="editorial-feature-desc">
                  Always-On ProMotion 120Hz OLED display reaching up to 2,000 nits peak outdoor brightness. Front glass shielded by Ceramic Shield 2.0.
                </p>
                <div className="editorial-bullets">
                  <span><i className="fa-solid fa-check"></i> 2,000 Nits Outdoor Peak</span>
                  <span><i className="fa-solid fa-check"></i> 1Hz to 120Hz ProMotion</span>
                </div>
                <button
                  className="btn btn-glass btn-sm mt-4 inspect-btn"
                  onClick={() => setInspectKey('display')}
                >
                  Inspect Display Matrix <i className="fa-solid fa-display"></i>
                </button>
              </div>
              <div
                className="editorial-visual-box glass-card cursor-interactive inspect-btn"
                onClick={() => setInspectKey('display')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <img src={getFrameSrc(42)} alt="Super Retina XDR Display" className="editorial-img HD-image" />
              </div>
            </div>

            {/* Large Editorial Feature 4: Battery Widget */}
            <div className="editorial-feature-row reverse">
              <div className="editorial-text-box">
                <span className="feature-num-badge">ALL-DAY POWER</span>
                <h3 className="editorial-feature-title">Made to keep going.</h3>
                <p className="editorial-feature-desc">
                  Re-engineered battery cell architecture offering up to 29 hours of continuous video playback, supported by 25W MagSafe fast wireless charging.
                </p>

                {/* 3D BATTERY GAUGE WIDGET */}
                <div className="apple-battery-widget glass-card mt-4">
                  <div className="battery-widget-header">
                    <div className="battery-status-badge">
                      <span className="magsafe-pulse"></span>
                      <span>MagSafe 25W Charging Active</span>
                    </div>
                    <span className="battery-percentage">{batteryPct}%</span>
                  </div>

                  <div className="battery-segments-grid">
                    {Array.from({ length: 10 }).map((_, idx) => {
                      const activeCount = Math.max(1, Math.ceil((batteryPct / 100) * 10));
                      return (
                        <div
                          key={idx}
                          className={`b-segment ${idx < activeCount ? 'active' : ''}`}
                        />
                      );
                    })}
                  </div>

                  <div className="battery-metrics-row">
                    <div className="b-metric">
                      <span className="bm-val">{Math.max(3, Math.round((batteryPct / 100) * 29))} hrs</span>
                      <span className="bm-lbl">Video Playback</span>
                    </div>
                    <div className="b-metric">
                      <span className="bm-val">30 mins</span>
                      <span className="bm-lbl">50% Fast Charge</span>
                    </div>
                    <div className="b-metric">
                      <span className="bm-val">100%</span>
                      <span className="bm-lbl">Recycled Cobalt</span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-glass btn-sm mt-4 inspect-btn"
                  onClick={() => setInspectKey('battery')}
                >
                  Inspect Battery Architecture <i className="fa-solid fa-battery-full"></i>
                </button>
              </div>
              <div
                className="editorial-visual-box glass-card cursor-interactive inspect-btn"
                onClick={() => setInspectKey('battery')}
                onMouseEnter={() => setCursorText('INSPECT')}
                onMouseLeave={() => setCursorText('')}
              >
                <img src={getFrameSrc(32)} alt="Internal Battery Cell" className="editorial-img HD-image" />
              </div>
            </div>

            {/* Horizontal Interactive Feature Cards */}
            <div className="horizontal-cards-header">
              <h3 className="editorial-text">Explore Feature Breakdown</h3>
            </div>

            <div className="horizontal-cards-grid">
              <div className="h-card glass-card inspect-btn" onClick={() => setInspectKey('camera')}>
                <span className="h-card-num">01</span>
                <h4>CAMERA</h4>
                <p>Capture stunning photos and cinematic video with spatial recording.</p>
              </div>
              <div className="h-card glass-card inspect-btn" onClick={() => setInspectKey('performance')}>
                <span className="h-card-num">02</span>
                <h4>PERFORMANCE</h4>
                <p>Fast, responsive, and ready for on-device generative AI models.</p>
              </div>
              <div className="h-card glass-card inspect-btn" onClick={() => setInspectKey('display')}>
                <span className="h-card-num">03</span>
                <h4>DISPLAY</h4>
                <p>Immersive OLED visuals with ultra-thin micro-bezel geometry.</p>
              </div>
              <div className="h-card glass-card inspect-btn" onClick={() => setInspectKey('design')}>
                <span className="h-card-num">04</span>
                <h4>DESIGN</h4>
                <p>Aerospace Grade 5 titanium chassis with micro-blasted finish.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SPECIFICATIONS */}
        <section className="specs-section" id="specifications">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">HARDWARE MATRIX</span>
              <h2 className="section-title editorial-text">The details behind the experience.</h2>
              <p className="section-description">Comprehensive engineering specifications powering Orange 16 Pro.</p>
            </div>

            {/* Interactive Dimension & Weight Comparison Tool */}
            <div className="model-comparison-box glass-card mb-5">
              <div className="comp-header">
                <span className="comp-badge"><i className="fa-solid fa-ruler-combined"></i> INTERACTIVE SIZE & WEIGHT COMPARISON</span>
                <h3>Compare Orange 16 Pro Models & Predecessors</h3>
              </div>
              <div className="comp-selector">
                <button
                  className={`comp-btn ${selectedModel === '16pro' ? 'active' : ''}`}
                  onClick={() => setSelectedModel('16pro')}
                >
                  Orange 16 Pro (6.3")
                </button>
                <button
                  className={`comp-btn ${selectedModel === '16promax' ? 'active' : ''}`}
                  onClick={() => setSelectedModel('16promax')}
                >
                  Orange 16 Pro Max (6.9")
                </button>
                <button
                  className={`comp-btn ${selectedModel === '15pro' ? 'active' : ''}`}
                  onClick={() => setSelectedModel('15pro')}
                >
                  Orange Phone 15 Pro (6.1")
                </button>
              </div>
              <div className="comp-metrics-grid">
                <div className="metric-card">
                  <span className="m-val">{MODEL_DATA[selectedModel].screen}</span>
                  <span className="m-lbl">Display Diagonal</span>
                </div>
                <div className="metric-card">
                  <span className="m-val">{MODEL_DATA[selectedModel].weight}</span>
                  <span className="m-lbl">Weight</span>
                </div>
                <div className="metric-card">
                  <span className="m-val">{MODEL_DATA[selectedModel].thick}</span>
                  <span className="m-lbl">Thickness</span>
                </div>
                <div className="metric-card">
                  <span className="m-val">{MODEL_DATA[selectedModel].bezel}</span>
                  <span className="m-lbl">Bezel Width</span>
                </div>
              </div>
            </div>

            {/* Spec Tabs */}
            <div className="specs-tabs">
              {['display', 'camera', 'performance', 'battery', 'connectivity', 'design'].map((cat) => (
                <button
                  key={cat}
                  className={`spec-tab-btn ${activeSpecTab === cat ? 'active' : ''}`}
                  onClick={() => setActiveSpecTab(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Spec Content */}
            <div className="specs-grid-wrapper">
              {activeSpecTab === 'display' && (
                <div className="spec-category-content active">
                  <div className="specs-grid">
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('display')}>
                      <span className="spec-card-lbl">Display Technology</span>
                      <h4 className="spec-card-val">Super Retina XDR OLED</h4>
                      <p className="spec-card-desc">All‑screen OLED display with 2868-by-1320-pixel resolution at 460 ppi</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('display')}>
                      <span className="spec-card-lbl">Refresh Rate</span>
                      <h4 className="spec-card-val">ProMotion 120Hz</h4>
                      <p className="spec-card-desc">Adaptive refresh rates from 1Hz up to 120Hz for fluid scrolling</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('display')}>
                      <span className="spec-card-lbl">Peak Brightness</span>
                      <h4 className="spec-card-val">2,000 Nits</h4>
                      <p className="spec-card-desc">1,000 nits max typical, 1,600 nits peak HDR, 2,000 nits peak outdoor</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('display')}>
                      <span className="spec-card-lbl">Glass Coating</span>
                      <h4 className="spec-card-val">Ceramic Shield 2.0</h4>
                      <p className="spec-card-desc">2x tougher than any smartphone glass on the market</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpecTab === 'camera' && (
                <div className="spec-category-content active">
                  <div className="specs-grid">
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('camera')}>
                      <span className="spec-card-lbl">Main Sensor</span>
                      <h4 className="spec-card-val">48MP Fusion</h4>
                      <p className="spec-card-desc">24mm, ƒ/1.78 aperture, 2nd-gen sensor-shift OIS, 100% Focus Pixels</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('camera')}>
                      <span className="spec-card-lbl">Ultra Wide</span>
                      <h4 className="spec-card-val">48MP Ultra Wide</h4>
                      <p className="spec-card-desc">13mm, ƒ/2.2 aperture, 120° field of view, Hybrid Focus Pixels</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('camera')}>
                      <span className="spec-card-lbl">Telephoto Zoom</span>
                      <h4 className="spec-card-val">5x Lossless Zoom</h4>
                      <p className="spec-card-desc">120mm, ƒ/2.8 aperture, 3D sensor-shift optical image stabilization</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('camera')}>
                      <span className="spec-card-lbl">Video Recording</span>
                      <h4 className="spec-card-val">4K Dolby Vision 120 FPS</h4>
                      <p className="spec-card-desc">Spatial video capture, Cinematic mode up to 4K HDR at 60 fps</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpecTab === 'performance' && (
                <div className="spec-category-content active">
                  <div className="specs-grid">
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('performance')}>
                      <span className="spec-card-lbl">Processor Silicon</span>
                      <h4 className="spec-card-val">O18 Pro Bionic</h4>
                      <p className="spec-card-desc">6-core CPU with 2 performance cores and 4 efficiency cores</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('performance')}>
                      <span className="spec-card-lbl">Graphics Unit</span>
                      <h4 className="spec-card-val">6-Core GPU</h4>
                      <p className="spec-card-desc">Hardware-accelerated ray tracing 2x faster than previous generation</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('performance')}>
                      <span className="spec-card-lbl">Neural NPU</span>
                      <h4 className="spec-card-val">16-Core NPU</h4>
                      <p className="spec-card-desc">35 Trillion operations per second for on-device generative AI</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('performance')}>
                      <span className="spec-card-lbl">Fabrication Node</span>
                      <h4 className="spec-card-val">3nm Generation 2</h4>
                      <p className="spec-card-desc">Industry leading TSMC 3-nanometer silicon technology</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpecTab === 'battery' && (
                <div className="spec-category-content active">
                  <div className="specs-grid">
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('battery')}>
                      <span className="spec-card-lbl">Playback Hours</span>
                      <h4 className="spec-card-val">Up to 29 Hours</h4>
                      <p className="spec-card-desc">Extended energy capacity for continuous video streaming</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('battery')}>
                      <span className="spec-card-lbl">Wireless Charge</span>
                      <h4 className="spec-card-val">MagSafe 25W</h4>
                      <p className="spec-card-desc">Up to 50% charge in around 30 minutes with 30W adapter</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('battery')}>
                      <span className="spec-card-lbl">Wired Data Port</span>
                      <h4 className="spec-card-val">USB-C 3.0 (10Gbps)</h4>
                      <p className="spec-card-desc">High-speed file transfer speeds and DisplayPort 4K video out</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('battery')}>
                      <span className="spec-card-lbl">Sustainability</span>
                      <h4 className="spec-card-val">100% Recycled Cobalt</h4>
                      <p className="spec-card-desc">Environmentally conscious interior battery cell composition</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpecTab === 'connectivity' && (
                <div className="spec-category-content active">
                  <div className="specs-grid">
                    <div className="spec-card glass-card">
                      <span className="spec-card-lbl">Wi-Fi Protocol</span>
                      <h4 className="spec-card-val">Wi-Fi 7 (802.11be)</h4>
                      <p className="spec-card-desc">2x2 MIMO with multi-link operation for ultra-low latency</p>
                    </div>
                    <div className="spec-card glass-card">
                      <span className="spec-card-lbl">Cellular Data</span>
                      <h4 className="spec-card-val">5G Advanced</h4>
                      <p className="spec-card-desc">Sub-6 GHz and mmWave with 4x4 MIMO for global connectivity</p>
                    </div>
                    <div className="spec-card glass-card">
                      <span className="spec-card-lbl">Ultra Wideband</span>
                      <h4 className="spec-card-val">2nd-Gen UWB Chip</h4>
                      <p className="spec-card-desc">Precision finding for AirTags and Find My friends at 3x range</p>
                    </div>
                    <div className="spec-card glass-card">
                      <span className="spec-card-lbl">Satellite Features</span>
                      <h4 className="spec-card-val">Emergency SOS</h4>
                      <p className="spec-card-desc">Roadside Assistance & Messaging via Satellite outside cell range</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSpecTab === 'design' && (
                <div className="spec-category-content active">
                  <div className="specs-grid">
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('design')}>
                      <span className="spec-card-lbl">Enclosure Material</span>
                      <h4 className="spec-card-val">Grade 5 Titanium</h4>
                      <p className="spec-card-desc">Micro-blasted finish in White, Space Black, Natural, and Desert</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('design')}>
                      <span className="spec-card-lbl">Protection Rating</span>
                      <h4 className="spec-card-val">IP68 Water Resistant</h4>
                      <p className="spec-card-desc">Submersible up to 6 meters for 30 minutes under IEC standard</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('design')}>
                      <span className="spec-card-lbl">Custom Keys</span>
                      <h4 className="spec-card-val">Action Button & Camera Control</h4>
                      <p className="spec-card-desc">Haptic touch surface with pressure-sensitive slide controls</p>
                    </div>
                    <div className="spec-card glass-card inspect-btn" onClick={() => setInspectKey('design')}>
                      <span className="spec-card-lbl">Dimensions & Weight</span>
                      <h4 className="spec-card-val">149.6 x 71.5 x 8.25 mm</h4>
                      <p className="spec-card-desc">Lightweight 199 grams engineering balance</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 5. ABOUT SECTION */}
        <section className="about-section" id="about">
          <div className="section-container">
            <div className="about-editorial-wrapper text-center">
              <span className="section-badge">PRODUCT PHILOSOPHY</span>
              <h2 className="about-heading editorial-text">More than a phone.</h2>

              <div className="about-quote-box">
                <p className="quote-large">"Technology should feel simple."</p>
                <p className="quote-sub">The complexity stays inside. The experience stays effortless.</p>
              </div>

              <div className="about-columns-grid">
                <div className="about-col">
                  <h4>Design Philosophy</h4>
                  <p>
                    Every millimeter of Orange 16 Pro has been evaluated to optimize structural stiffness while minimizing total device weight through Grade 5 titanium alloying.
                  </p>
                </div>

                <div className="about-col">
                  <h4>Privacy-First AI</h4>
                  <p>
                    On-device neural execution ensures that generative machine learning algorithms operate with 100% local encryption and zero external data leaks.
                  </p>
                </div>

                <div className="about-col">
                  <h4>Sustainable Engineering</h4>
                  <p>
                    Constructed using 100% recycled aluminum internal subframes and 100% recycled cobalt in the battery cell matrix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. LAUNCH COUNTDOWN SECTION */}
        <section className="launch-countdown-section" id="countdown">
          <div className="section-container text-center">
            <span className="section-badge">WORLDWIDE RELEASE</span>
            <h2 className="countdown-heading editorial-text">The wait is almost over.</h2>

            <div className="launch-clock-container">
              <div className="clock-box glass-card">
                <span className="clock-number">{countdown.days}</span>
                <span className="clock-label">DAYS</span>
              </div>
              <div className="clock-box glass-card">
                <span className="clock-number">{countdown.hours}</span>
                <span className="clock-label">HOURS</span>
              </div>
              <div className="clock-box glass-card">
                <span className="clock-number">{countdown.mins}</span>
                <span className="clock-label">MINUTES</span>
              </div>
              <div className="clock-box glass-card">
                <span className="clock-number">{countdown.secs}</span>
                <span className="clock-label">SECONDS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. NOTIFY ME SECTION */}
        <section className="notify-section" id="notify">
          <div className="section-container">
            <div className="notify-card glass-card text-center">
              <span className="section-badge">VIP LAUNCH UPDATES</span>
              <h2 className="editorial-text">Be the first to know.</h2>
              <p className="notify-desc">Get launch updates and product news delivered directly to your inbox.</p>

              {!notifySuccess ? (
                <form className="notify-form" onSubmit={handleNotifySubmit}>
                  <div className="notify-input-group">
                    <input
                      type="email"
                      className="notify-input"
                      placeholder="Enter your email address"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-primary magnetic-btn" disabled={notifySubmitting}>
                      <span>{notifySubmitting ? 'Saving...' : 'Notify Me'}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="notify-success">
                  <i className="fa-solid fa-circle-check success-icon"></i>
                  <h3>You're on the list.</h3>
                  <p>We'll send you an invitation the moment pre-orders open.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="section-container">
            <div className="contact-grid">
              <div className="contact-info-col">
                <span className="section-badge">GET IN TOUCH</span>
                <h2 className="contact-heading editorial-text">Let's stay connected.</h2>
                <p className="contact-sub">
                  Reach out to our global launch support team for media, press, or enterprise inquiries.
                </p>

                <div className="contact-detail-list">
                  <div className="detail-item">
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <span className="detail-label">Email</span>
                      <a href="mailto:hello@example.com" className="detail-val">hello@example.com</a>
                    </div>
                  </div>

                  <div className="detail-item">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                      <span className="detail-label">Phone</span>
                      <span className="detail-val">+91 XXX XXX XXXX</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                      <span className="detail-label">Location</span>
                      <span className="detail-val">India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-col">
                <form className="contact-form glass-card" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      className="form-input"
                      placeholder="Your full name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      className="form-input"
                      placeholder="name@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      className="form-input"
                      placeholder="e.g. Enterprise Pre-Order Interest"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message</label>
                    <textarea
                      id="contact-message"
                      className="form-input form-textarea"
                      placeholder="Your message..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block magnetic-btn"
                    disabled={contactSubmitting}
                  >
                    <span>{contactSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <i className={`fa-solid ${contactSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} btn-icon`}></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* COMPONENT INSPECTOR MODAL */}
      {modalData && (
        <div className="inspector-modal-overlay active" onClick={() => setInspectKey(null)}>
          <div className="inspector-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setInspectKey(null)}
              aria-label="Close Inspector Modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-body-grid">
              <div className="modal-visual-col">
                <img
                  src={getFrameSrc(parseInt(modalData.frame, 10))}
                  alt="Component Inspection"
                  className="modal-img HD-image"
                />
                <span className="modal-badge-label">{modalData.tag}</span>
              </div>

              <div className="modal-info-col">
                <h2 className="modal-title">{modalData.title}</h2>
                <p className="modal-desc">{modalData.desc}</p>

                <div className="modal-specs-list">
                  {modalData.specs.map((s, idx) => (
                    <div key={idx} className="modal-spec-row">
                      <span className="lbl">{s.lbl}</span>
                      <span className="val">{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="modal-comparison">
                  <span className="comp-label">Generation Performance Gain</span>
                  <div className="comp-bar-container">
                    <div className="comp-bar-fill" style={{ width: modalData.gainPct }}></div>
                  </div>
                  <span className="comp-subtext">{modalData.gainText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-top">
            <div className="footer-brand">
              <i className="fa-solid fa-mobile-screen-button footer-logo"></i>
              <span className="footer-title">Orange 16</span>
            </div>
            <p className="footer-tagline">The next chapter starts here.</p>
          </div>

          <div className="footer-links-row">
            <a href="#hero">Overview</a>
            <a href="#features">Features</a>
            <a href="#experience">Technology</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">Copyright © 2026 Orange Mobile Inc. All rights reserved.</span>
            <div className="footer-socials">
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notification Container */}
      <div className="toast-container" id="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <i className="fa-solid fa-circle-check" style={{ color: '#2563eb' }}></i>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
