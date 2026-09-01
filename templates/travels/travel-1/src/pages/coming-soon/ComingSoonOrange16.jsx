import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Zap, Camera, Shield, Cpu, ArrowRight, CheckCircle2, ShoppingBag, Eye, ChevronRight, Lock } from 'lucide-react';

export default function ComingSoonOrange16() {
  const [selectedFinish, setSelectedFinish] = useState('white');
  const [selectedStorage, setSelectedStorage] = useState('256GB');
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [preorderName, setPreorderName] = useState('');
  const [preorderEmail, setPreorderEmail] = useState('');

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: '14', hours: '08', minutes: '22', seconds: '45' });

  const finishes = {
    white: { name: 'White Titanium', hex: '#f8fafc', border: '#e2e8f0', price: '$1,199' },
    black: { name: 'Black Titanium', hex: '#1e293b', border: '#334155', price: '$1,199' },
    natural: { name: 'Natural Titanium', hex: '#cbd5e1', border: '#94a3b8', price: '$1,199' },
    desert: { name: 'Desert Titanium', hex: '#d4b996', border: '#bfa07a', price: '$1,199' }
  };

  useEffect(() => {
    const launchDate = new Date(Date.now() + (14 * 24 * 60 * 60 * 1000) + (8 * 60 * 60 * 1000)).getTime();
    const interval = setInterval(() => {
      const diff = Math.max(0, launchDate - Date.now());
      setTimeLeft({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePreorderSubmit = (e) => {
    e.preventDefault();
    if (!preorderEmail) return;

    setToastMessage(`✦ Pre-order Confirmed for ${preorderName || 'Customer'}! Confirmation email sent to ${preorderEmail}.`);
    setIsPreorderOpen(false);
    setPreorderName('');
    setPreorderEmail('');
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="bg-[#ffffff] text-[#1d1d1f] min-h-screen font-sans antialiased relative overflow-x-hidden selection:bg-[#ff9500] selection:text-white">
      
      {/* Top Glass Navigation */}
      <header className="w-full border-b border-[#e5e5e7] bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🍊</span>
            <span className="font-semibold tracking-tight text-lg text-black">Orange 16 Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs text-[#6e6e73] font-medium tracking-wide">
            <a href="#hero" className="hover:text-black transition-colors">Overview</a>
            <a href="#titanium" className="hover:text-black transition-colors">Titanium</a>
            <a href="#camera" className="hover:text-black transition-colors">Camera</a>
            <a href="#performance" className="hover:text-black transition-colors">O18 Pro</a>
          </nav>

          <button 
            onClick={() => setIsPreorderOpen(true)}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs px-4 py-1.5 rounded-full font-medium shadow-sm transition-all"
          >
            Pre-order
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 pb-24 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <div className="text-xs font-semibold uppercase tracking-widest text-[#ff9500] mb-3">
          Special Event Premiere
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-black mb-4">
          Orange 16 Pro
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-[#6e6e73] max-w-2xl mb-8">
          Hello, Apple Intelligence. Forged in Grade 5 Titanium with the groundbreaking O18 Pro chip.
        </p>

        {/* Live Countdown Ribbon */}
        <div className="bg-[#f5f5f7] border border-[#e5e5e7] p-6 rounded-2xl max-w-lg w-full mb-10 shadow-sm">
          <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-4">
            Global Release & Delivery Countdown
          </div>
          <div className="grid grid-cols-4 gap-3">
            {Object.entries(timeLeft).map(([unit, val]) => (
              <div key={unit} className="bg-white p-3 rounded-xl border border-[#e5e5e7] text-center">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-black">{val}</div>
                <div className="text-[10px] uppercase font-semibold text-[#86868b] mt-1">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Finish Selector */}
        <div id="titanium" className="bg-[#f5f5f7] p-6 rounded-2xl border border-[#e5e5e7] max-w-md w-full mb-8">
          <div className="text-xs font-medium text-[#6e6e73] mb-3">
            Finish: <strong className="text-black">{finishes[selectedFinish].name}</strong>
          </div>
          <div className="flex justify-center gap-3">
            {Object.keys(finishes).map(key => (
              <button
                key={key}
                onClick={() => setSelectedFinish(key)}
                className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer ${selectedFinish === key ? 'border-[#0071e3] scale-110 shadow-md' : 'border-transparent opacity-80 hover:opacity-100'}`}
                style={{ backgroundColor: finishes[key].hex }}
                title={finishes[key].name}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => setIsPreorderOpen(true)}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-7 py-3 rounded-full text-sm font-medium shadow-md transition-all flex items-center gap-2"
          >
            <ShoppingBag size={16} />
            <span>Pre-order from {finishes[selectedFinish].price}</span>
          </button>
        </div>

      </section>

      {/* Titanium & Architecture Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-[#e5e5e7]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#f5f5f7] p-8 rounded-3xl text-left space-y-3 border border-[#e5e5e7]">
            <Shield size={28} className="text-[#ff9500]" />
            <h3 className="text-xl font-bold text-black">Grade 5 Titanium</h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Precision machined with solid-state diffusion, marrying aerospace-grade titanium with an internal 100% recycled aluminum substructure.
            </p>
          </div>

          <div className="bg-[#f5f5f7] p-8 rounded-3xl text-left space-y-3 border border-[#e5e5e7]">
            <Cpu size={28} className="text-[#0071e3]" />
            <h3 className="text-xl font-bold text-black">O18 Pro Silicon</h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              2nd-generation 3nm architecture. 6-core GPU with hardware-accelerated ray tracing and 16-core Neural Engine.
            </p>
          </div>

          <div className="bg-[#f5f5f7] p-8 rounded-3xl text-left space-y-3 border border-[#e5e5e7]">
            <Camera size={28} className="text-[#34c759]" />
            <h3 className="text-xl font-bold text-black">48MP Fusion Camera</h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Quad-pixel sensor with zero shutter lag, 4K 120 fps Dolby Vision slow motion, and studio-grade 4-mic array.
            </p>
          </div>

        </div>
      </section>

      {/* Pre-Order Modal */}
      {isPreorderOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setIsPreorderOpen(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-black mb-1">Pre-order Orange 16 Pro</h3>
            <p className="text-xs text-[#6e6e73] mb-6">Select storage and enter your email for release shipment priority.</p>

            <form onSubmit={handlePreorderSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-black mb-1">Storage Capacity</label>
                <div className="grid grid-cols-3 gap-2">
                  {['128GB', '256GB', '512GB'].map(cap => (
                    <button
                      type="button"
                      key={cap}
                      onClick={() => setSelectedStorage(cap)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${selectedStorage === cap ? 'border-[#0071e3] bg-[#0071e3]/10 text-[#0071e3]' : 'border-[#e5e5e7] text-[#6e6e73]'}`}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={preorderName}
                  onChange={e => setPreorderName(e.target.value)}
                  placeholder="Your Name" 
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d2d2d7] text-sm focus:outline-none focus:border-[#0071e3]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-black mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={preorderEmail}
                  onChange={e => setPreorderEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d2d2d7] text-sm focus:outline-none focus:border-[#0071e3]"
                />
              </div>

              <button type="submit" className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 rounded-xl text-sm font-semibold shadow-md transition-all">
                Confirm Pre-order ({finishes[selectedFinish].name} • {selectedStorage})
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#e5e5e7] bg-[#f5f5f7] py-8 px-6 text-center text-xs text-[#86868b]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>Copyright © 2026 Orange Inc. All rights reserved.</div>
          <a href="/templates" className="text-[#0071e3] font-medium hover:underline">TechnoSprint Templates</a>
        </div>
      </footer>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-[#1d1d1f] text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50">
          <CheckCircle2 size={18} className="text-[#34c759]" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
