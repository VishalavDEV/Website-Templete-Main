import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Building, Compass, Sparkles, CheckCircle2, ArrowRight, Shield, Layers, Phone } from 'lucide-react';

export default function ComingSoonAuraSky() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('penthouse');
  const [toastMessage, setToastMessage] = useState(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: '88', hours: '19', minutes: '45', seconds: '22', ms: '65' });

  // Web Audio Refs
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Residences Plans Data
  const residences = {
    penthouse: {
      name: 'The Horizon Sky Penthouse',
      floor: 'Floors 78–82',
      area: '8,450 SQ. FT.',
      bedrooms: '5 Suites • 7 Baths',
      features: ['Private Infinity Sky Pool', '360° Panoramic Sunset Deck', 'Direct High-Speed Private Elevator', 'Dedicated Concierge & Helipad Access']
    },
    duplex: {
      name: 'The Celestial Duplex Manor',
      floor: 'Floors 52–65',
      area: '5,200 SQ. FT.',
      bedrooms: '4 Suites • 5 Baths',
      features: ['Double-Height 24ft Glass Atrium', 'Custom Italian Poliform Kitchen', 'Sub-Zero Wine Cellar & Tasting Room', 'Private Sky Garden Terrace']
    },
    residence: {
      name: 'The Azure Grand Residence',
      floor: 'Floors 24–50',
      area: '3,100 SQ. FT.',
      bedrooms: '3 Suites • 3.5 Baths',
      features: ['Floor-to-Ceiling Acoustic Glazing', 'Calacatta Gold Marble Bathrooms', 'Integrated Smart Home Automation', 'Valet Parking & Wellness Club Access']
    }
  };

  useEffect(() => {
    const launchTimestamp = new Date(Date.now() + (88 * 24 * 60 * 60 * 1000) + (19 * 60 * 60 * 1000)).getTime();
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

        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.value = 65.41; // C2

        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.value = 98.00; // G2

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 180;
        filter.Q.value = 4;

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
        console.warn('Audio engine error:', e);
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (gainNodeRef.current) {
      const nextPlaying = !isAudioPlaying;
      setIsAudioPlaying(nextPlaying);
      const targetGain = nextPlaying ? 0.06 : 0.0;
      gainNodeRef.current.gain.linearRampToValueAtTime(targetGain, audioCtxRef.current.currentTime + 1.0);
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryEmail) return;

    setToastMessage(`✦ Private Portfolio Dispatched to ${inquiryEmail} for ${inquiryName || 'Esteemed Buyer'}.`);
    setInquiryName('');
    setInquiryEmail('');
    setInquiryPhone('');
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="bg-[#06080e] text-[#f8fafc] min-h-screen font-sans relative overflow-x-hidden">
      
      {/* Background Animated Gradient & Grid */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none opacity-60 z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        
        {/* Navigation */}
        <header className="w-full border-b border-cyan-500/20 bg-[#070b14]/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 to-black flex items-center justify-center text-cyan-300 font-cinzel font-bold text-lg group-hover:border-cyan-300 transition-all">
                ✦
              </div>
              <div>
                <div className="font-cinzel text-base tracking-[0.2em] text-cyan-200 uppercase font-bold">Aura Sky Residences</div>
                <div className="text-[0.62rem] tracking-[0.28em] text-cyan-400 uppercase font-mono">Ultra-Luxury Vertical Estate</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-slate-300 uppercase font-semibold">
              <a href="#hero" className="hover:text-cyan-300 transition-colors">Overview</a>
              <a href="#residences" className="hover:text-cyan-300 transition-colors">Residences</a>
              <a href="#architecture" className="hover:text-cyan-300 transition-colors">Architecture</a>
              <a href="#inquiry" className="hover:text-cyan-300 transition-colors">Private Viewing</a>
            </nav>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleAudio}
                className="px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
              >
                {isAudioPlaying ? <Volume2 size={14} className="text-cyan-400" /> : <VolumeX size={14} className="text-slate-400" />}
                <span className="hidden sm:inline">{isAudioPlaying ? 'Audio: Ambience On' : 'Audio: Muted'}</span>
              </button>

              <a href="#inquiry" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-cinzel tracking-wider shadow-md">
                <span>Inquire</span>
                <Building size={13} />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="pt-12 pb-20 md:pt-20 md:pb-28 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/40 bg-cyan-950/20 text-xs font-mono text-cyan-200 uppercase tracking-widest font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>82-Storey Architectural Icon • Grand Opening 2026</span>
          </div>

          <h1 className="font-decorative text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            Life Above The Clouds.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-serif italic mb-10 leading-relaxed font-light">
            An iconic 82-storey sculptural tower soaring above the metropolis. Unrivaled 360-degree skyline vistas, private infinity pools, and bespoke concierge hospitality.
          </p>

          {/* Countdown Clock */}
          <div className="w-full max-w-3xl bg-[#0b101d]/90 backdrop-blur-xl p-6 sm:p-8 mb-10 rounded-2xl shadow-2xl border border-cyan-500/25">
            <div className="text-xs font-cinzel tracking-[0.25em] text-cyan-300 uppercase font-bold mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-cyan-500/40"></span>
              <span>Private Foundation Portfolio & Launch Countdown</span>
              <span className="h-[1px] w-8 bg-cyan-500/40"></span>
            </div>

            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-xl mx-auto">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit} className="bg-slate-950/80 border border-cyan-500/20 rounded-xl p-3 text-center">
                  <div className="font-mono text-2xl sm:text-4xl font-bold text-cyan-200">{val}</div>
                  <div className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">{unit}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
              <Building size={13} className="text-cyan-400" />
              <span>Only <strong className="text-cyan-300 font-bold">12</strong> of 84 Exclusive Penthouse Units Available For Pre-Allocation</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#inquiry" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3.5 rounded-xl text-sm font-cinzel shadow-lg transition-all">
              <Building size={15} />
              <span>Schedule Private VIP Viewing</span>
            </a>
            <a href="#residences" className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-cyan-500/30 px-6 py-3.5 rounded-xl text-sm font-cinzel shadow-sm transition-all">
              <Compass size={15} />
              <span>Explore Floor Plans</span>
            </a>
          </div>

        </section>

        {/* Residences & Floor Plan Selector */}
        <section id="residences" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">Curated Residences</div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-100">Architectural Masterpiece Floorplans</h2>
            <p className="font-serif italic text-slate-400 text-base mt-2">Select a residence tier below to preview spatial specs and panoramic views.</p>
          </div>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {Object.keys(residences).map(key => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-cinzel tracking-wider uppercase font-semibold transition-all cursor-pointer ${selectedPlan === key ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'}`}
              >
                {residences[key].name}
              </button>
            ))}
          </div>

          {residences[selectedPlan] && (
            <div className="bg-[#0b101d]/85 p-8 sm:p-12 rounded-2xl border border-cyan-500/30 shadow-2xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">{residences[selectedPlan].floor}</span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">{residences[selectedPlan].name}</h3>
                
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Internal Area</div>
                    <div className="font-mono text-lg font-bold text-cyan-200">{residences[selectedPlan].area}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Accommodation</div>
                    <div className="font-mono text-lg font-bold text-cyan-200">{residences[selectedPlan].bedrooms}</div>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-6 text-xs text-slate-300 font-sans">
                  {residences[selectedPlan].features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-72 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center p-6 text-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
                <div className="space-y-2">
                  <Building size={48} className="text-cyan-400 mx-auto" />
                  <div className="font-cinzel text-lg font-bold text-white">Private Sky Haven</div>
                  <p className="text-xs text-slate-400 font-serif italic">Panoramic full-floor glazing overlooking city skyline and ocean horizons.</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Private Viewing Form */}
        <section id="inquiry" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#0b101d]/90 p-8 sm:p-12 rounded-2xl border border-cyan-500/30 shadow-2xl">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-3">Request Private VIP Viewing</h2>
            <p className="text-slate-300 font-serif italic text-base sm:text-lg max-w-xl mx-auto mb-8">
              Receive confidential floor plans, structural engineering dossier, and concierge booking.
            </p>

            <form onSubmit={handleInquirySubmit} className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="Lord / Lady / Dr. / Mr. Name" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-slate-100 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="buyer@private.com" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-slate-100 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/90 border border-cyan-500/30 text-slate-100 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3.5 rounded-xl text-sm font-cinzel shadow-lg transition-all">
                <span>Dispatch Confidential Dossier</span>
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 bg-[#04060a] py-8 px-6 text-center text-xs font-mono text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Aura Sky Residences. Dubai • New York • Singapore.</div>
            <a href="/templates" className="text-cyan-400 font-semibold hover:underline">TechnoSprint Templates</a>
          </div>
        </footer>

      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-[#0c1322] border border-cyan-400 text-cyan-50 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
          <CheckCircle2 size={18} className="text-cyan-400" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
