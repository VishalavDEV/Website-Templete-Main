import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Bookmark, Eye, ArrowRight, X, CheckCircle2, Feather, Sparkles } from 'lucide-react';

export default function ComingSoonBotanicalStudies() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [modalPlate, setModalPlate] = useState(null);
  const [remainingCopies, setRemainingCopies] = useState(142);
  const [toastMessage, setToastMessage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', dedication: '' });

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: '32', hours: '14', minutes: '38', seconds: '19', ms: '84' });

  // Web Audio Ref
  const audioCtxRef = useRef(null);
  const droneOsc1Ref = useRef(null);
  const droneOsc2Ref = useRef(null);
  const gainNodeRef = useRef(null);

  const plateDetails = {
    rosa: {
      title: 'Plate IV: Rosa Canina',
      latin: 'Rosa canina L. (Wild Dog Rose)',
      date: 'London, 1884',
      image: '/templates/comming-soon/cm-4/rosa-canina.jpg',
      desc: 'Five-petaled blush corolla with curative rosehips prized for restorative distillations. Hand-engraved on copperplate with natural mineral pigments.',
      habitat: 'European hedgerows & chalk hills',
      uses: 'Restorative cordials, vitamin C tonics'
    },
    lavandula: {
      title: 'Plate VII: Lavandula Angustifolia',
      latin: 'Lavandula angustifolia Mill. (True English Lavender)',
      date: 'Kew, 1891',
      image: '/templates/comming-soon/cm-4/lavandula.jpg',
      desc: 'Slender whorled violet spikelets and aromatic linear leaves collected at Royal Gardens. Prized for calming tisanes and floral waters.',
      habitat: 'Mediterranean rocky limestone soils',
      uses: 'Aromatherapy, calming tisanes'
    },
    fagus: {
      title: 'Plate V: Fagus Sylvatica',
      latin: 'Fagus sylvatica L. (European Beech Foliage)',
      date: 'Edinburgh, 1887',
      image: '/templates/comming-soon/cm-4/fagus-sylvatica.jpg',
      desc: 'Autumnal golden venation and cellular leaf architecture dried using 19th-century specimen presses.',
      habitat: 'Ancient temperate deciduous woodlands',
      uses: 'Tannins, medicinal bark decoctions'
    },
    cover: {
      title: 'The Heritage Folio Binding',
      latin: 'Artisanal Hand-Bound Moroccan Leather',
      date: 'Edinburgh Bindery, 1884',
      image: '/templates/comming-soon/cm-4/botanical-cover.jpg',
      desc: 'Gold-leaf embossed Moroccan calfskin cover with marbled endpapers and hand-sewn deckled cotton rag pages.',
      habitat: 'Collector Archives & Premier Libraries',
      uses: 'Archival Preservation'
    }
  };

  // Countdown timer effect
  useEffect(() => {
    const launchDate = new Date(Date.now() + (32 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000)).getTime();
    const interval = setInterval(() => {
      const diff = Math.max(0, launchDate - Date.now());
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

  // Web Audio Synthesizer Toggle
  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.value = 73.42; // D2
        droneOsc1Ref.current = osc1;

        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.value = 110.0; // A2
        droneOsc2Ref.current = osc2;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 220;
        filter.Q.value = 3;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.0;
        gainNodeRef.current = gainNode;

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();
      } catch (e) {
        console.warn('Audio not initialized:', e);
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (gainNodeRef.current) {
      const nextPlaying = !isAudioPlaying;
      setIsAudioPlaying(nextPlaying);
      const targetGain = nextPlaying ? 0.07 : 0.0;
      gainNodeRef.current.gain.linearRampToValueAtTime(targetGain, audioCtxRef.current.currentTime + 1.0);
    }
  };

  const handlePreorderSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) return;

    if (remainingCopies > 1) {
      setRemainingCopies(prev => prev - 1);
    }
    setToastMessage(`✦ Copy Reserved! VIP certificate for "${formData.name || 'Collector'}" dispatched to ${formData.email}.`);
    setFormData({ name: '', email: '', dedication: '' });
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="bg-[#fcfbf7] text-[#1c2720] min-h-screen font-sans selection:bg-[#f3dfa2] selection:text-[#1a241e] relative overflow-x-hidden">
      
      {/* Cinematic Looping Background Image / Video */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/templates/comming-soon/cm-4/bg-book.gif" 
          alt="Botanical Studies Video Background" 
          className="w-full h-full object-cover object-center opacity-80 filter contrast-[1.18] brightness-[0.88] saturate-[1.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf7] via-transparent to-[#fcfbf7]/60 pointer-events-none" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        
        {/* Navigation Bar */}
        <header className="w-full border-b border-amber-600/20 bg-white/85 backdrop-blur-md sticky top-0 z-50 shadow-[0_2px_12px_rgba(44,34,18,0.04)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-amber-600/40 bg-amber-50 flex items-center justify-center text-amber-800 font-cinzel font-bold text-lg group-hover:border-amber-600 transition-all">
                ✦
              </div>
              <div>
                <div className="font-cinzel text-base tracking-[0.18em] text-amber-950 uppercase font-semibold">Botanical Studies</div>
                <div className="text-[0.65rem] tracking-[0.25em] text-emerald-700 uppercase font-mono font-medium">Heritage Edition • Est. 1884</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-stone-700 uppercase font-semibold">
              <a href="#about" className="hover:text-amber-800 transition-colors">The Folio</a>
              <a href="#plates" className="hover:text-amber-800 transition-colors">Plates</a>
              <a href="#author" className="hover:text-amber-800 transition-colors">Author</a>
              <a href="#preorder" className="hover:text-amber-800 transition-colors">VIP Collector</a>
            </nav>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleAudio}
                className="px-3.5 py-1.5 rounded-full border border-stone-300 bg-white/90 hover:bg-stone-100 text-xs font-mono text-stone-700 flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                {isAudioPlaying ? <Volume2 size={14} className="text-amber-700" /> : <VolumeX size={14} className="text-stone-400" />}
                <span className="hidden sm:inline">{isAudioPlaying ? 'Audio: Ambience On' : 'Audio: Muted'}</span>
              </button>

              <a href="#preorder" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 rounded-lg text-xs font-cinzel tracking-wider shadow-md">
                <span>Reserve Copy</span>
                <Feather size={12} />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-50/90 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest text-amber-900 font-semibold uppercase">Limited First Edition • 1,000 Numbered Exemplars</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 text-stone-900 max-w-4xl tracking-tight">
            The Lost Art of <span className="font-serif italic text-amber-800">Botanical Wonders</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-2xl font-serif italic mb-10 leading-relaxed font-light">
            A magnificent collector’s volume featuring rare 19th-century hand-engraved copperplates, ancient alpine herbal lore, and hand-bound Moroccan leather with 24-karat gold leaf foil.
          </p>

          {/* Live Countdown Timer */}
          <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md p-6 sm:p-8 mb-10 rounded-2xl shadow-lg border border-amber-600/25">
            <div className="text-xs font-cinzel tracking-[0.25em] text-amber-900 uppercase font-bold mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-amber-600/40"></span>
              <span>Official Bookstore & Gallery Release Countdown</span>
              <span className="h-[1px] w-8 bg-amber-600/40"></span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-xl mx-auto">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit} className="bg-stone-50 border border-amber-600/20 rounded-xl p-3 text-center">
                  <div className="font-mono text-2xl sm:text-4xl font-bold text-stone-900">{val}</div>
                  <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-stone-500 mt-1 font-semibold">{unit}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-stone-600">
              <Bookmark size={13} className="text-amber-700" />
              <span>Only <strong className="text-amber-900 font-bold">{remainingCopies}</strong> of 1,000 VIP Access Copies Remaining</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#preorder" className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl text-sm font-cinzel shadow-md transition-all">
              <Bookmark size={15} />
              <span>Reserve VIP Collector's Copy</span>
            </a>
            <button onClick={() => setModalPlate('rosa')} className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-stone-800 border border-amber-600/30 px-6 py-3 rounded-xl text-sm font-cinzel shadow-sm transition-all">
              <Eye size={15} />
              <span>Inspect Botanical Plates</span>
            </button>
          </div>

        </section>

        {/* 3D Book & Master Specimen Section */}
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div 
                onClick={() => setModalPlate('cover')}
                className="w-full max-w-sm rounded-r-2xl overflow-hidden shadow-2xl border-2 border-amber-600/40 relative cursor-pointer group hover:scale-[1.02] transition-transform"
              >
                <img src="/templates/comming-soon/cm-4/botanical-cover.jpg" alt="Botanical Studies Cover" className="w-full h-auto object-cover" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-lg border border-amber-600/30 text-center shadow-md">
                  <div className="font-cinzel text-xs text-amber-950 uppercase tracking-widest font-bold">The Heritage Folio</div>
                  <div className="text-[0.65rem] font-mono text-stone-600 mt-0.5">Hand-Bound Calfskin & 24k Gold Foil</div>
                </div>
              </div>
              <div className="mt-4 text-xs font-serif italic text-stone-600 flex items-center gap-2">
                <Eye size={13} className="text-amber-700" />
                <span>Click book to inspect binding & gold leaf foil</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 uppercase tracking-widest font-semibold">
                <span className="w-6 h-[1px] bg-emerald-700"></span>
                <span>Archival Masterpiece</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                Resurrecting Two Centuries of <span className="text-amber-800">Forgotten Flora</span>
              </h2>

              <p className="text-stone-700 font-serif text-lg leading-relaxed">
                First compiled in 1884 by botanical scholar Prof. Clara Vance-Montgomery, <em>Botanical Studies</em> chronicles over three hundred rare medicinal wildflowers, alpine mosses, and arboreal specimens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/90 p-4 rounded-xl border border-amber-600/25 shadow-sm">
                  <h4 className="font-cinzel text-sm font-semibold text-stone-900">350+ Engraved Plates</h4>
                  <p className="text-xs text-stone-600 mt-1">High-fidelity botanical specimens with Latin binomial nomenclature.</p>
                </div>
                <div className="bg-white/90 p-4 rounded-xl border border-amber-600/25 shadow-sm">
                  <h4 className="font-cinzel text-sm font-semibold text-stone-900">24k Gilded Deckle</h4>
                  <p className="text-xs text-stone-600 mt-1">Hand-gilded gold leaf edges and embossed Moroccan calfskin cover.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Botanical Plates Gallery */}
        <section id="plates" className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-600/20 bg-stone-50/50 rounded-2xl my-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono text-amber-800 uppercase tracking-widest mb-2 font-semibold">Engravings & Herbarium</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900">Featured Botanical Plates</h2>
            <p className="font-serif italic text-stone-600 text-base mt-2">Select any plate below to inspect the original hand-tinted copperplate illustrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['rosa', 'lavandula', 'fagus'].map(plateKey => {
              const item = plateDetails[plateKey];
              return (
                <div key={plateKey} onClick={() => setModalPlate(plateKey)} className="bg-white/95 hover:bg-white p-6 rounded-xl border border-amber-600/25 shadow-md hover:shadow-xl transition-all cursor-pointer group text-left">
                  <div className="h-56 rounded-lg bg-stone-100 border border-amber-600/30 overflow-hidden relative mb-5 shadow-inner">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">{item.title}</h3>
                  <p className="text-xs font-serif italic text-emerald-700 mb-2 font-medium">{item.latin}</p>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">{item.desc}</p>
                  <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-amber-800 font-mono font-semibold">
                    <span>Inspect Specimen</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pre-order VIP Section */}
        <section id="preorder" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-white/95 p-8 sm:p-12 rounded-2xl border border-amber-600/30 shadow-xl">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 mb-3">Reserve Collector's Copy</h2>
            <p className="text-stone-700 font-serif italic text-base sm:text-lg max-w-xl mx-auto mb-8">
              Guaranteed allocation of the limited 1,000 exemplar first edition with signed archival print.
            </p>

            <form onSubmit={handlePreorderSubmit} className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Collector Name" 
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-700 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-700 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="collector@botany.org" 
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-700 text-sm"
                />
              </div>

              <button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3.5 rounded-xl text-sm font-cinzel shadow-md transition-all">
                <span>Secure VIP Allocation</span>
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-amber-600/20 bg-[#f8f6f0] py-8 px-6 text-center text-xs font-mono text-stone-600">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Botanical Studies Folio. Edinburgh • London.</div>
            <a href="/templates" className="text-amber-800 font-semibold hover:underline">TechnoSprint Templates</a>
          </div>
        </footer>

      </div>

      {/* Modal Inspector */}
      {modalPlate && plateDetails[modalPlate] && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6" onClick={() => setModalPlate(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full relative flex flex-col md:flex-row gap-6 items-center shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalPlate(null)} className="absolute top-4 right-4 text-stone-500 hover:text-black">
              <X size={20} />
            </button>
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-stone-100 border border-amber-600/20">
              <img src={plateDetails[modalPlate].image} alt={plateDetails[modalPlate].title} className="w-full h-auto object-cover max-h-[420px]" />
            </div>
            <div className="w-full md:w-1/2 space-y-3 text-left">
              <h3 className="font-cinzel text-xl font-bold text-stone-900">{plateDetails[modalPlate].title}</h3>
              <p className="text-xs font-serif italic text-emerald-800 font-medium">{plateDetails[modalPlate].latin}</p>
              <p className="text-xs text-stone-600 leading-relaxed">{plateDetails[modalPlate].desc}</p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-200">
                <div><strong>Habitat:</strong> {plateDetails[modalPlate].habitat}</div>
                <div><strong>Archival Uses:</strong> {plateDetails[modalPlate].uses}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-amber-900 text-amber-50 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
          <CheckCircle2 size={18} className="text-amber-400" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
