import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Camera, 
  Compass, 
  Heart, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  ShieldCheck
} from 'lucide-react';

const STATS = [
  { label: 'Years of Experience', value: '12+' },
  { label: 'Completed Shoots', value: '540+' },
  { label: 'International Awards', value: '36' },
  { label: 'Countries Explored', value: '28' },
];

const GEAR_TABS = [
  {
    category: 'Bodies',
    items: [
      { name: 'Leica M11 Rangefinder', desc: '60MP BSI Sensor, Manual Focus Legend' },
      { name: 'Sony α7R V Mirrorless', desc: '61MP Full-Frame, Real-Time AI Autofocus' },
    ]
  },
  {
    category: 'Lenses',
    items: [
      { name: 'Leica Summilux-M 35mm f/1.4', desc: 'Cinematic Bokeh & Micro-Contrast' },
      { name: 'Sony FE 50mm f/1.2 GM', desc: 'Ultra-Fast Portrait Excellence' },
      { name: 'Sony FE 70-200mm f/2.8 GM II', desc: 'Telephoto Wildlife & Expedition' },
    ]
  },
  {
    category: 'Expedition & Drone',
    items: [
      { name: 'DJI Mavic 3 Pro Cine', desc: 'Hasselblad 4/3 CMOS Aerial 5.1K' },
      { name: 'Profoto B10X Plus Strobes', desc: '500Ws Portable Location Flash' },
    ]
  }
];

export default function Story({ onOpenBooking }) {
  const [activeGearTab, setActiveGearTab] = useState(0);

  return (
    <section id="story" className="relative w-full py-24 sm:py-32 bg-[#111111] text-white overflow-hidden scroll-mt-16 border-t border-white/5">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#e74c3c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#e74c3c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Bio Image & Story text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photographer Portrait with Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Border Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#e74c3c]/40 to-transparent blur-sm opacity-60" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#1a1a1a]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="Elena Vance - Visual Artist"
                  className="w-full h-[480px] object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    Elena Vance
                  </div>
                  <div className="text-[#e74c3c] text-xs font-semibold tracking-wider uppercase">
                    Founder & Principal Visual Artist
                  </div>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -top-4 -right-4 bg-[#1e1e1e] border border-white/15 shadow-xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-[#e74c3c]/20 flex items-center justify-center text-[#e74c3c]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Sony World Photo</div>
                  <div className="text-[10px] text-gray-400">Winner 2024 & 2025</div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#1e1e1e] border border-white/15 shadow-xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Based in Zurich</div>
                  <div className="text-[10px] text-gray-400">Available Worldwide</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Story */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#e74c3c]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#e74c3c] uppercase">
                THE ARTIST'S STORY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              "Light is the ink with which we write human memories."
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Over the past decade, I have journeyed across six continents with my camera—from the high altitudes of the Swiss Alps and Patagonian glaciers to bustling historic medinas and intimate coastal weddings.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              My philosophy rejects stiff, artificial posing. Instead, I observe patient light, authentic micro-moments, and unforced connections. Every frame delivered is individually color-graded with custom film profiles to evoke timeless emotional resonance.
            </p>

            {/* Philosophy Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#e74c3c] flex-shrink-0" />
                <span>Pure Natural & Ambient Lighting</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#e74c3c] flex-shrink-0" />
                <span>Custom Color Grading & Archival Edits</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#e74c3c] flex-shrink-0" />
                <span>High-Speed 48h Preview Turnaround</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#e74c3c] flex-shrink-0" />
                <span>Worldwide Travel & Remote Field Ready</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking('Custom Story Session')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-[#e74c3c] hover:bg-[#d63031] transition-all shadow-xl shadow-[#e74c3c]/25 hover:scale-105"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <span>View Rates & Packages</span>
              </a>
            </div>

          </motion.div>

        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-[#e74c3c]">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gear Locker Showcase */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#151515] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#e74c3c] uppercase tracking-wider">
                <Camera className="w-4 h-4" />
                <span>Professional Rig</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                Production Gear & Hardware
              </h3>
            </div>

            {/* Gear Category Tabs */}
            <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-full border border-white/10">
              {GEAR_TABS.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGearTab(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeGearTab === idx
                      ? 'bg-[#e74c3c] text-white shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Gear Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GEAR_TABS[activeGearTab].items.map((gear, gIdx) => (
              <div
                key={gIdx}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#e74c3c]/30 transition-all hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-2 text-[#e74c3c] mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Pro Equipment</span>
                </div>
                <div className="text-sm font-semibold text-white">{gear.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{gear.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
