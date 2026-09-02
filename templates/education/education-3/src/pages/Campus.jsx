import React from 'react';
import CampusGallery from '../components/CampusGallery';
import { MapPin, Globe, Sparkles, Shield } from 'lucide-react';

export default function Campus() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <MapPin className="w-4 h-4" />
            <span>PHYSICAL & SPATIAL VIRTUAL CAMPUS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Spatial Research Environment.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Our campus merges physical bioclimatic architecture with a zero-latency spatial virtual twin, enabling scholars worldwide to collaborate seamlessly.
          </p>
        </div>

        {/* Embedded Masonry Component */}
        <CampusGallery />

        {/* Virtual Booking Information Card */}
        <div className="mt-16 rounded-3xl glass-panel border border-electric-500/30 p-8 sm:p-12 bg-slate-900/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              HYBRID ACCESS DESK
            </span>
            <h3 className="text-3xl font-extrabold text-white font-display">
              Reserve a Virtual Lab Workstation or Physical Residency
            </h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Enrolled scholars can request 24/7 remote SSH access to our 5-petaflop supercluster, spatial VR rigs, or book on-campus residency housing during research terms.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-electric-600 to-violetAccent-600 text-white font-bold text-xs tracking-wider shadow-lg shadow-electric-500/30">
              BOOK VIRTUAL TOUR →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
