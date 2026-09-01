import React, { useState, useEffect, useRef, useCallback } from 'react';

const BOTANICAL_PLATES = {
  rosa: {
    title: 'Plate IV: Rosa Canina (Wild Dog Rose)',
    subtitle: 'Specimen collected in Berkshire Foothills, 1884',
    desc: 'Renowned for its delicate five-petaled blush corolla, curative rosehips high in botanical oils, and serrated oval leaflets. Hand-engraved copper plate with original watercolor wash.',
    image: '/rosa-canina.jpg',
    filename: 'Plate_IV_Rosa_Canina_Botanical_Studies_1884.jpg'
  },
  lavandula: {
    title: 'Plate VII: Lavandula Angustifolia (English Lavender)',
    subtitle: 'Specimen from Royal Botanical Greenhouse, 1891',
    desc: 'Features slender whorled purple inflorescence spikelets and aromatic linear leaves. Coveted by Victorian herbalists for essential oil distillation and calmative tisanes.',
    image: '/lavandula.jpg',
    filename: 'Plate_VII_Lavandula_Angustifolia_Botanical_Studies_1891.jpg'
  },
  fagus: {
    title: 'Plate V: Fagus Sylvatica (European Beech Folio)',
    subtitle: 'Arboreal Collection, Black Forest Expedition, 1887',
    desc: 'Depicting autumnal golden venation and pressed foliage specimens. Demonstrates cellular leaf architecture and ancient preservation drying methods.',
    image: '/fagus-sylvatica.jpg',
    filename: 'Plate_V_Fagus_Sylvatica_Botanical_Studies_1887.jpg'
  },
  cover: {
    title: 'Hand-Tooled Calfskin Heritage Binding',
    subtitle: 'Guild of London Bookbinders, Master Exemplar',
    desc: 'Full grain Moroccan leather with 24-karat gold leaf foil stamping, raised spine bands, hand-marbled Italian endpapers, and hand-gilded page deckles.',
    image: '/book.jpg',
    filename: 'Botanical_Studies_Heritage_Binding_Cover.jpg'
  }
};

const CHAPTERS = [
  {
    folio: 'Folio I',
    title: 'The Secret Herbal of the High Alps',
    content: 'Exploration of high-altitude alpine gentians, edelweiss curative balms, and the cryo-resilient cellular membranes of glacier mosses. Includes 42 copperplate engravings and historic field diaries.'
  },
  {
    folio: 'Folio II',
    title: 'Rosa Canina & Hedgerow Apothecaries',
    content: 'The traditional English hedgerow flora: wild briar rose, blackthorn, elderflower cordials, and restorative vitamin preparations during Victorian winters.'
  },
  {
    folio: 'Folio III',
    title: 'Luminescent Night Flora & Ancient Spores',
    content: 'Bioluminescent fungi, moonflowers (Ipomoea alba), and nocturnal pollination networks studied under candlelight in the Black Forest.'
  }
];

export default function App() {
  // -------------------------------------------------------------
  // 1. Antiquarian Web Audio Engine
  // -------------------------------------------------------------
  const [isAudioOn, setIsAudioOn] = useState(false);
  const audioCtxRef = useRef(null);
  const droneOsc1Ref = useRef(null);
  const droneOsc2Ref = useRef(null);
  const gainNodeRef = useRef(null);

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Warm Low Harmonic Organ/Cello Drone (D2: 73.42Hz, A2: 110.00Hz)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 73.42;
      droneOsc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.value = 110.0;
      droneOsc2Ref.current = osc2;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 220;
      filter.Q.value = 3;

      const gain = ctx.createGain();
      gain.gain.value = 0.0;
      gainNodeRef.current = gain;

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  }, []);

  const playPageTurn = useCallback(() => {
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    try {
      const bufferSize = ctx.sampleRate * 0.12;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.value = 1400;
      bandpass.Q.value = 1.2;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.04, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // Silent fail
    }
  }, [initAudio]);

  const playGoldChime = useCallback(() => {
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1760, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch (e) {
      // Silent fail
    }
  }, [initAudio]);

  const toggleAudio = () => {
    playGoldChime();
    if (!isAudioOn) {
      initAudio();
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.07, audioCtxRef.current.currentTime + 1.2);
      }
      setIsAudioOn(true);
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0, audioCtxRef.current.currentTime + 0.4);
      }
      setIsAudioOn(false);
    }
  };

  // -------------------------------------------------------------
  // 2. High-Precision Countdown Timer (MS Pulse)
  // -------------------------------------------------------------
  const [countdown, setCountdown] = useState({ days: '32', hours: '14', mins: '38', secs: '19', ms: '84' });
  const launchTargetRef = useRef(Date.now() + (32 * 24 * 60 * 60 + 14 * 3600 + 38 * 60) * 1000);

  useEffect(() => {
    let animId;
    const updateCountdown = () => {
      const diff = launchTargetRef.current - Date.now();
      if (diff <= 0) {
        setCountdown({ days: '00', hours: '00', mins: '00', secs: '00', ms: '00' });
        return;
      }
      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const mins = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const secs = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
      const ms = String(Math.floor((diff % 1000) / 10)).padStart(2, '0');

      setCountdown({ days, hours, mins, secs, ms });
      animId = requestAnimationFrame(updateCountdown);
    };

    animId = requestAnimationFrame(updateCountdown);
    return () => cancelAnimationFrame(animId);
  }, []);

  // -------------------------------------------------------------
  // 3. Botanical Plate Modal Inspector
  // -------------------------------------------------------------
  const [activeModalKey, setActiveModalKey] = useState(null);

  const openPlateModal = (key) => {
    playPageTurn();
    setActiveModalKey(key);
  };

  const closePlateModal = () => {
    setActiveModalKey(null);
  };

  const handleDownloadPlate = () => {
    const data = BOTANICAL_PLATES[activeModalKey] || BOTANICAL_PLATES.rosa;
    const link = document.createElement('a');
    link.href = data.image;
    link.download = data.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    playGoldChime();
  };

  // -------------------------------------------------------------
  // 4. VIP Pre-order Form & Toast State
  // -------------------------------------------------------------
  const [remainingSlots, setRemainingSlots] = useState(142);
  const [emailInput, setEmailInput] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const handleVipSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;

    setRemainingSlots((prev) => Math.max(1, prev - 1));
    playGoldChime();

    const assignedNumber = 1000 - (remainingSlots - 1);
    setToastMessage({
      email: emailInput,
      collectorNum: assignedNumber
    });

    setEmailInput('');
    setTimeout(() => {
      setToastMessage(null);
    }, 5500);
  };

  // -------------------------------------------------------------
  // 5. Chapter Accordion State
  // -------------------------------------------------------------
  const [openChapterIdx, setOpenChapterIdx] = useState(null);

  const toggleChapter = (idx) => {
    playPageTurn();
    setOpenChapterIdx((prev) => (prev === idx ? null : idx));
  };

  const activePlateData = activeModalKey ? BOTANICAL_PLATES[activeModalKey] : null;

  return (
    <div className="bg-[#fcfbf7] text-[#1c2720] overflow-x-hidden font-sans selection:bg-[#f3dfa2] selection:text-[#1a241e] relative min-h-screen">
      {/* Cinematic Background Video / GIF Loop */}
      <div id="video-background-container" className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          id="bg-video"
          src="/bg-book.gif"
          alt="Botanical Studies Video Background"
          className="w-full h-full object-cover object-center opacity-80 filter contrast-[1.18] brightness-[0.88] saturate-[1.25] scale-105 transition-opacity duration-1000"
        />
        <div className="canvas-overlay-vignette"></div>
        <div className="particles-dust"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Top Navigation & Brand Header */}
        <header className="w-full border-b border-amber-600/20 bg-white/85 backdrop-blur-md sticky top-0 z-50 shadow-[0_2px_12px_rgba(44,34,18,0.04)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-full border border-amber-600/40 bg-amber-50 flex items-center justify-center text-amber-800 font-cinzel font-bold text-lg group-hover:border-amber-600 group-hover:shadow-[0_0_15px_rgba(184,136,34,0.3)] transition-all">
                ✦
              </div>
              <div>
                <div className="font-cinzel text-base tracking-[0.18em] text-amber-950 uppercase font-semibold">
                  Botanical Studies
                </div>
                <div className="text-[0.65rem] tracking-[0.25em] text-emerald-700 uppercase font-mono font-medium">
                  Heritage Edition • Est. 1884
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-stone-700 uppercase font-semibold">
              <a href="#about" className="hover:text-amber-800 transition-colors">The Folio</a>
              <a href="#plates" className="hover:text-amber-800 transition-colors">Plates</a>
              <a href="#author" className="hover:text-amber-800 transition-colors">Author</a>
              <a href="#specifications" className="hover:text-amber-800 transition-colors">Collector Perks</a>
            </nav>

            {/* Sound Toggle & VIP Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleAudio}
                className={`px-3.5 py-1.5 rounded-full border bg-white/90 hover:bg-stone-100 text-xs font-mono text-stone-700 flex items-center gap-2 transition-all cursor-pointer shadow-sm ${
                  isAudioOn ? 'border-emerald-500/60 text-emerald-800' : 'border-stone-300'
                }`}
                title="Toggle Antiquarian Ambience Sound"
              >
                <i className={`fas ${isAudioOn ? 'fa-volume-high text-emerald-600' : 'fa-volume-xmark text-stone-500'}`}></i>
                <span className="hidden sm:inline">{isAudioOn ? 'Audio: Antiquarian On' : 'Audio: Muted'}</span>
              </button>

              <a href="#preorder" className="btn-gold !py-2 !px-4 text-xs font-cinzel tracking-wider">
                <span>Reserve Copy</span>
                <i className="fas fa-feather text-[10px]"></i>
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
          {/* Limited Edition Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-50/90 backdrop-blur-md mb-6 shadow-sm shimmer-badge">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest text-amber-900 font-semibold uppercase">
              Limited First Edition • 1,000 Numbered Exemplars
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 text-stone-900 max-w-4xl tracking-tight">
            The Lost Art of <span className="gold-text font-serif italic">Botanical Wonders</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-2xl font-serif italic mb-10 leading-relaxed font-light">
            A magnificent collector’s volume featuring rare 19th-century hand-engraved copperplates, ancient alpine herbal lore, and hand-bound Moroccan leather with 24-karat gold leaf foil.
          </p>

          {/* LIVE COUNTDOWN TIMER */}
          <div className="w-full max-w-3xl glass-panel p-6 sm:p-8 mb-10 relative overflow-hidden bg-white/85 shadow-lg border border-amber-600/25">
            <div className="text-xs font-cinzel tracking-[0.25em] text-amber-900 uppercase font-bold mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-amber-600/40"></span>
              <span>Official Bookstore & Gallery Release Countdown</span>
              <span className="h-[1px] w-8 bg-amber-600/40"></span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-xl mx-auto">
              <div className="countdown-card">
                <div className="countdown-val font-mono text-2xl sm:text-4xl font-bold text-stone-900">{countdown.days}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-stone-500 mt-1 font-semibold">Days</div>
              </div>
              <div className="countdown-card">
                <div className="countdown-val font-mono text-2xl sm:text-4xl font-bold text-stone-900">{countdown.hours}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-stone-500 mt-1 font-semibold">Hours</div>
              </div>
              <div className="countdown-card">
                <div className="countdown-val font-mono text-2xl sm:text-4xl font-bold text-stone-900">{countdown.mins}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-stone-500 mt-1 font-semibold">Mins</div>
              </div>
              <div className="countdown-card">
                <div className="countdown-val font-mono text-2xl sm:text-4xl font-bold text-emerald-700">{countdown.secs}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-emerald-700 mt-1 font-semibold">Secs</div>
              </div>
              <div className="countdown-card border-emerald-600/40">
                <div className="countdown-val font-mono text-2xl sm:text-4xl font-bold text-stone-700">{countdown.ms}</div>
                <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-stone-500 mt-1 font-semibold">MS</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-stone-600">
              <i className="fas fa-ticket-alt text-amber-700"></i>
              <span>
                Only <strong className="text-amber-900 font-bold">{remainingSlots}</strong> of 1,000 VIP Access Copies Remaining
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#preorder" className="btn-gold w-full sm:w-auto text-sm font-cinzel">
              <i className="fas fa-bookmark"></i>
              <span>Reserve VIP Collector's Copy</span>
            </a>
            <button
              onClick={() => openPlateModal('rosa')}
              className="btn-outline-gold w-full sm:w-auto text-sm font-cinzel"
            >
              <i className="fas fa-eye"></i>
              <span>Inspect Botanical Plates</span>
            </button>
          </div>
        </section>

        {/* 3D BOOK & MASTER SPECIMEN SECTION */}
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: 3D Interactive Book Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="book-3d-wrapper" onClick={() => openPlateModal('cover')}>
                <div className="book-3d-card border-2 border-amber-600/40 relative overflow-hidden rounded-r-xl shadow-2xl">
                  <img src="/book-cover.jpg" alt="Botanical Studies Heritage Folio" className="w-full h-full object-cover rounded-r-xl" />
                  <div className="book-spine-effect"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-amber-400/15 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-lg border border-amber-600/30 text-center shadow-md">
                    <div className="font-cinzel text-xs text-amber-950 uppercase tracking-widest font-bold">The Heritage Folio</div>
                    <div className="text-[0.65rem] font-mono text-stone-600 mt-0.5">Hand-Bound Calfskin & 24k Gold Foil</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs font-serif italic text-stone-600 flex items-center justify-center gap-2">
                  <i className="fas fa-hand-pointer text-amber-700 text-xs"></i>
                  <span>Click book to inspect binding & gold leaf foil</span>
                </span>
              </div>
            </div>

            {/* Right: Story & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 uppercase tracking-widest font-semibold">
                <span className="w-6 h-[1px] bg-emerald-700"></span>
                <span>Archival Masterpiece</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                Resurrecting Two Centuries of <span className="gold-text">Forgotten Flora</span>
              </h2>

              <p className="text-stone-700 font-serif text-lg leading-relaxed">
                First compiled in 1884 by botanical scholar and expeditionist Prof. Clara Vance-Montgomery, <em>Botanical Studies</em> chronicles over three hundred rare medicinal wildflowers, alpine mosses, and arboreal specimens across Europe and the High Himalayas.
              </p>

              <p className="text-stone-600 text-sm leading-relaxed">
                For the first time in over a century, the complete unedited folios are being faithfully reproduced using artisanal copperplate lithography on bespoke archival cotton parchment, accompanied by modern scientific annotations and high-resolution plate scans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="glass-panel p-4 flex items-start gap-3 bg-white/90 border border-amber-600/25 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-600/30 flex items-center justify-center text-amber-800 flex-shrink-0">
                    <i className="fas fa-seedling text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-semibold text-stone-900">350+ Engraved Plates</h4>
                    <p className="text-xs text-stone-600 mt-1">High-fidelity botanical specimens with Latin binomial nomenclature.</p>
                  </div>
                </div>

                <div className="glass-panel p-4 flex items-start gap-3 bg-white/90 border border-amber-600/25 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-600/30 flex items-center justify-center text-amber-800 flex-shrink-0">
                    <i className="fas fa-award text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-semibold text-stone-900">24k Gilded Deckle</h4>
                    <p className="text-xs text-stone-600 mt-1">Hand-gilded gold leaf edges and embossed Moroccan calfskin cover.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTANICAL PLATES GALLERY SECTION */}
        <section id="plates" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-600/20 bg-stone-50/50 rounded-2xl my-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono text-amber-800 uppercase tracking-widest mb-2 font-semibold">Engravings & Herbarium</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900">Featured Botanical Plates</h2>
            <p className="font-serif italic text-stone-600 text-base mt-2">
              Select any plate below to inspect the original hand-tinted copperplate illustrations and field notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plate 1: Rosa Canina */}
            <div
              onClick={() => openPlateModal('rosa')}
              className="glass-panel p-6 cursor-pointer group bg-white/95 hover:bg-white shadow-md hover:shadow-xl border border-amber-600/25 transition-all"
            >
              <div className="h-56 rounded-lg bg-stone-100 border border-amber-600/30 overflow-hidden relative mb-5 group-hover:border-amber-600 transition-all shadow-inner">
                <img src="/rosa-canina.jpg" alt="Plate IV: Rosa Canina" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-sm border border-amber-600/40 px-2.5 py-1 rounded text-[10px] font-mono text-amber-900 font-semibold shadow-sm">
                  Plate IV • 1884
                </div>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">Rosa Canina</h3>
              <p className="text-xs font-serif italic text-emerald-700 mb-2 font-medium">Wild Dog Rose & Hedgerow Fruit</p>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                Five-petaled blush corolla with curative rosehips prized for restorative distillations.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-amber-800 font-mono font-semibold">
                <span>Inspect Specimen</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Plate 2: Lavandula Angustifolia */}
            <div
              onClick={() => openPlateModal('lavandula')}
              className="glass-panel p-6 cursor-pointer group bg-white/95 hover:bg-white shadow-md hover:shadow-xl border border-amber-600/25 transition-all"
            >
              <div className="h-56 rounded-lg bg-stone-100 border border-amber-600/30 overflow-hidden relative mb-5 group-hover:border-amber-600 transition-all shadow-inner">
                <img src="/lavandula.jpg" alt="Plate VII: Lavandula Angustifolia" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-sm border border-purple-400 px-2.5 py-1 rounded text-[10px] font-mono text-purple-900 font-semibold shadow-sm">
                  Plate VII • 1891
                </div>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">Lavandula Angustifolia</h3>
              <p className="text-xs font-serif italic text-purple-700 mb-2 font-medium">True English Lavender Folio</p>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                Slender whorled violet spikelets and aromatic linear leaves collected at Royal Gardens.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-amber-800 font-mono font-semibold">
                <span>Inspect Specimen</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Plate 3: Fagus Sylvatica */}
            <div
              onClick={() => openPlateModal('fagus')}
              className="glass-panel p-6 cursor-pointer group bg-white/95 hover:bg-white shadow-md hover:shadow-xl border border-amber-600/25 transition-all"
            >
              <div className="h-56 rounded-lg bg-stone-100 border border-amber-600/30 overflow-hidden relative mb-5 group-hover:border-amber-600 transition-all shadow-inner">
                <img src="/fagus-sylvatica.jpg" alt="Plate V: Fagus Sylvatica" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-sm border border-amber-600/40 px-2.5 py-1 rounded text-[10px] font-mono text-amber-900 font-semibold shadow-sm">
                  Plate V • 1887
                </div>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">Fagus Sylvatica</h3>
              <p className="text-xs font-serif italic text-amber-800 mb-2 font-medium">European Beech Foliage</p>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                Autumnal golden venation and cellular leaf architecture dried using 19th-century presses.
              </p>
              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-amber-800 font-mono font-semibold">
                <span>Inspect Specimen</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>
        </section>

        {/* MEET THE AUTHOR SECTION */}
        <section id="author" className="py-20 px-6 max-w-6xl mx-auto border-t border-amber-600/20">
          <div className="glass-panel p-8 sm:p-12 relative overflow-hidden bg-white/90 shadow-lg border border-amber-600/25">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-52 h-52 rounded-full border-2 border-amber-600/60 p-1.5 shadow-[0_4px_24px_rgba(184,136,34,0.25)] relative mb-4 overflow-hidden group">
                  <img src="/author.jpg" alt="Prof. Clara Vance-Montgomery" className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-2 right-4 bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border border-amber-200">
                    <i className="fas fa-feather-pointed text-xs"></i>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-stone-900">Prof. Clara Vance-Montgomery</h3>
                <div className="text-xs font-serif italic text-emerald-700 mt-1 font-medium">Fellow of the Linnean Society (1849–1921)</div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">About the Botanist & Author</div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">
                  A Life Dedicated to Nature’s Hidden Language
                </h2>
                <p className="text-stone-700 font-serif text-base leading-relaxed">
                  Professor Clara Vance-Montgomery was among the pioneering female naturalists of the Victorian era. Traversing over 40,000 miles across the Pyrenees, the Scottish Highlands, and the Swiss Alps, she documented medicinal properties and morphological nuances of wild flora that had never before been formally illustrated.
                </p>

                <blockquote className="border-l-2 border-amber-600 pl-4 py-1.5 italic font-serif text-amber-950 text-sm bg-amber-50/60 rounded-r">
                  “In every wild petal and serrated leaf lies an unspoken history of the earth—a silent medicine waiting to be remembered.”
                </blockquote>

                <div className="flex flex-wrap gap-4 pt-3 text-xs font-mono text-stone-600 font-medium">
                  <span className="flex items-center gap-1.5"><i className="fas fa-certificate text-amber-700"></i> Royal Medal of Botany (1889)</span>
                  <span className="flex items-center gap-1.5"><i className="fas fa-compass text-emerald-700"></i> 14 Alpine Expeditions</span>
                  <span className="flex items-center gap-1.5"><i className="fas fa-book-open text-amber-800"></i> 32 Rare Subspecies Named</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER FOLIOS ACCORDION */}
        <section id="specifications" className="py-16 px-6 max-w-5xl mx-auto border-t border-amber-600/20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-mono text-emerald-700 uppercase tracking-widest mb-1 font-semibold">Table of Contents</div>
            <h2 className="font-heading text-3xl font-bold text-stone-900">The Folio Chapters</h2>
          </div>

          <div className="space-y-3">
            {CHAPTERS.map((ch, idx) => {
              const isOpen = openChapterIdx === idx;
              return (
                <div key={idx} className="glass-panel border border-stone-200 bg-white/95 overflow-hidden shadow-sm">
                  <div
                    onClick={() => toggleChapter(idx)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-amber-800 font-bold">{ch.folio}</span>
                      <h3 className="font-cinzel text-sm sm:text-base font-semibold text-stone-900">{ch.title}</h3>
                    </div>
                    <i className={`fas fa-chevron-down text-xs text-stone-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                  </div>
                  {isOpen && (
                    <div className="p-5 pt-3 border-t border-stone-200 text-xs sm:text-sm text-stone-700 font-serif leading-relaxed bg-stone-50/40">
                      {ch.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* VIP PRE-ORDER & NOTIFICATION SECTION */}
        <section id="preorder" className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-amber-600/20">
          <div className="glass-panel p-8 sm:p-12 relative overflow-hidden bg-white/95 shadow-xl border border-amber-600/30">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 border border-amber-600/30 flex items-center justify-center text-amber-800 mb-4">
              <i className="fas fa-bell text-lg"></i>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
              Claim Your <span className="gold-text">VIP Collector’s Edition</span>
            </h2>

            <p className="text-stone-700 font-serif text-base max-w-xl mx-auto mb-8">
              Join the exclusive priority list to secure one of only 1,000 hand-numbered copies before public bookstore release, plus receive an instant digital preview of Chapter I.
            </p>

            <form onSubmit={handleVipSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 bg-white border border-stone-300 rounded-lg px-4 py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-all font-sans shadow-sm"
              />
              <button type="submit" className="btn-gold !py-3.5 !px-6 text-xs font-cinzel tracking-wider whitespace-nowrap">
                <span>Notify Me</span>
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-4 text-[0.75rem] font-mono text-stone-600">
              <span><i className="fas fa-shield-alt text-emerald-700"></i> No Spam Guarantee</span>
              <span>•</span>
              <a
                href="/rosa-canina.jpg"
                download="Botanical_Studies_Heritage_Sampler.jpg"
                className="text-amber-800 hover:text-amber-950 font-semibold underline decoration-amber-600/50 cursor-pointer flex items-center gap-1.5"
              >
                <i className="fas fa-gift text-amber-700"></i> Free Digital Chapter Sample
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-stone-200 bg-stone-100 py-8 px-6 text-center text-xs font-mono text-stone-600">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-amber-900 font-cinzel font-bold">✦ Botanical Studies</span>
              <span>— All Rights Reserved © 2026</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#hero" className="hover:text-amber-800 transition-colors">Back to Top</a>
              <a href="#plates" className="hover:text-amber-800 transition-colors">Specimens</a>
              <a href="#about" className="hover:text-amber-800 transition-colors">The Book</a>
            </div>
          </div>
        </footer>
      </div>

      {/* BOTANICAL PLATE INSPECTOR MODAL */}
      {activePlateData && (
        <div className="modal-backdrop active" onClick={closePlateModal}>
          <div className="modal-content p-6 sm:p-8 relative !max-w-2xl bg-white border border-amber-600/30" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closePlateModal}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 text-xl w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-colors cursor-pointer z-10 border border-stone-200"
            >
              &times;
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
              <div className="w-full sm:w-52 h-64 rounded-xl overflow-hidden border border-amber-600/40 shadow-lg flex-shrink-0 bg-stone-50">
                <img src={activePlateData.image} alt={activePlateData.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-600/40 flex items-center justify-center text-amber-800 font-serif text-sm mb-3">
                  ❦
                </div>
                <h3 className="font-heading text-2xl font-bold text-stone-900 mb-1">{activePlateData.title}</h3>
                <div className="text-xs font-mono text-emerald-700 font-semibold mb-3">{activePlateData.subtitle}</div>
                <p className="font-serif text-stone-700 text-sm leading-relaxed">{activePlateData.desc}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
              <button onClick={handleDownloadPlate} className="btn-outline-gold !py-2 !px-4 text-xs font-cinzel">
                <i className="fas fa-download text-[10px]"></i>
                <span>Download High-Res Plate</span>
              </button>
              <button onClick={closePlateModal} className="btn-gold !py-2 !px-4 text-xs font-cinzel">
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 bg-white border border-amber-600/50 rounded-xl p-4 shadow-2xl max-w-sm text-xs font-sans text-stone-800 translate-y-0 opacity-100">
          <div className="flex items-start gap-3">
            <div className="text-emerald-600 text-lg flex-shrink-0 mt-0.5">
              <i className="fas fa-check-circle"></i>
            </div>
            <div>
              <strong>Priority Confirmed!</strong> VIP Invitation & Chapter 1 Sampler sent to{' '}
              <span className="text-amber-700 font-semibold">{toastMessage.email}</span>. Collector Number{' '}
              <strong>#{toastMessage.collectorNum}</strong> assigned!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
