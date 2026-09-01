import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Globe, ArrowRight } from 'lucide-react';
import { OFFICES, OfficeLocation } from '../../data/offices';

export const WorldMap: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(OFFICES[0]);
  const [activeRegion, setActiveRegion] = useState<'All' | 'Americas' | 'Europe & Middle East' | 'Asia-Pacific'>('All');

  const filteredOffices = activeRegion === 'All' 
    ? OFFICES 
    : OFFICES.filter((o) => o.region === activeRegion);

  return (
    <div id="global-presence-section" className="financial-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
      {/* Background World Grid Overlay */}
      <div className="absolute inset-0 bg-dot-subtle opacity-40 pointer-events-none" />

      {/* Top 4 Global Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-8 border-b border-white/10 relative z-10 font-mono">
        <div className="p-4 bg-[#080B11] border border-white/5 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">OPERATIONAL COVERAGE</span>
          <span className="text-3xl font-serif text-white font-normal mt-1 block">32</span>
          <span className="text-xs text-emerald-400">Global Markets</span>
        </div>

        <div className="p-4 bg-[#080B11] border border-white/5 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">PRINCIPAL HUBS</span>
          <span className="text-3xl font-serif text-white font-normal mt-1 block">14</span>
          <span className="text-xs text-slate-300">Global Offices</span>
        </div>

        <div className="p-4 bg-[#080B11] border border-white/5 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">HUMAN CAPITAL</span>
          <span className="text-3xl font-serif text-white font-normal mt-1 block">650+</span>
          <span className="text-xs text-emerald-400">Financial Specialists</span>
        </div>

        <div className="p-4 bg-[#080B11] border border-white/5 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">ADVISORY MANDATES</span>
          <span className="text-3xl font-serif text-white font-normal mt-1 block">24/7</span>
          <span className="text-xs text-slate-300">Follow-The-Sun Support</span>
        </div>
      </div>

      {/* Region Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-white/5 relative z-10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Filter Region:</span>
          {(['All', 'Americas', 'Europe & Middle East', 'Asia-Pacific'] as const).map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeRegion === reg
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        <span className="text-[11px] text-slate-400">Click any hub marker for local desk details</span>
      </div>

      {/* Interactive Map Visual + Detail Card Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10">
        {/* Left: Map Coordinate Canvas */}
        <div className="lg:col-span-8 bg-[#05070B] border border-white/5 rounded-xl p-4 sm:p-6 relative min-h-[340px] flex items-center justify-center overflow-hidden">
          {/* Stylized Vector World Silhouette */}
          <svg className="w-full h-auto opacity-30 pointer-events-none" viewBox="0 0 1000 500" fill="none" stroke="#28303F" strokeWidth="1">
            {/* World Grid Lines */}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="#1F293D" strokeDasharray="4 4" />
            <line x1="500" y1="0" x2="500" y2="500" stroke="#1F293D" strokeDasharray="4 4" />
            
            {/* Abstract continents outlines */}
            {/* North America */}
            <path d="M150 100 Q 220 80 320 120 T 300 240 Q 200 220 150 180 Z" fill="#0E1420" stroke="#1E293B" />
            {/* South America */}
            <path d="M280 260 Q 350 280 320 420 T 260 380 Q 240 300 280 260 Z" fill="#0E1420" stroke="#1E293B" />
            {/* Europe */}
            <path d="M460 100 Q 550 90 540 180 T 470 180 Z" fill="#0E1420" stroke="#1E293B" />
            {/* Africa */}
            <path d="M470 190 Q 560 220 540 360 T 470 320 Q 440 240 470 190 Z" fill="#0E1420" stroke="#1E293B" />
            {/* Asia */}
            <path d="M560 90 Q 750 80 820 180 T 700 280 Q 580 240 560 90 Z" fill="#0E1420" stroke="#1E293B" />
            {/* Australia */}
            <path d="M780 320 Q 860 330 840 410 T 760 380 Z" fill="#0E1420" stroke="#1E293B" />
          </svg>

          {/* Interactive Office Markers */}
          {OFFICES.map((office) => {
            const isSelected = selectedOffice.id === office.id;
            const isVisible = activeRegion === 'All' || office.region === activeRegion;

            return (
              <div
                key={office.id}
                style={{ left: `${office.coordinates.x}%`, top: `${office.coordinates.y}%` }}
                onClick={() => setSelectedOffice(office)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 group ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-20 scale-75 pointer-events-none'
                }`}
              >
                <div className="relative">
                  {/* Ping wave */}
                  {isSelected && (
                    <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping" />
                  )}
                  
                  {/* Node Icon */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 border-white shadow-lg shadow-emerald-500/50 scale-125'
                      : 'bg-[#080B11] text-emerald-400 border-emerald-500/40 hover:border-emerald-400 hover:scale-110'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>

                  {/* Label tooltip */}
                  <span className={`absolute left-1/2 -translate-x-1/2 -top-6 whitespace-nowrap text-[10px] font-mono font-semibold px-2 py-0.5 rounded shadow-md pointer-events-none transition-all ${
                    isSelected
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40 block'
                      : 'bg-[#0C1019] text-slate-400 border border-white/5 opacity-0 group-hover:opacity-100'
                  }`}>
                    {office.city}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Selected Hub Details Inspector */}
        <div className="lg:col-span-4 bg-[#080B11] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                {selectedOffice.region}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                {selectedOffice.timezone}
              </span>
            </div>

            <div>
              <h4 className="font-serif text-2xl text-white font-normal">
                {selectedOffice.city} Desk
              </h4>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                {selectedOffice.country}
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 font-mono pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-sans text-slate-300">{selectedOffice.address}, {selectedOffice.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{selectedOffice.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400">{selectedOffice.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{selectedOffice.headcount} On-Site Institutional Specialists</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0C111C] border border-white/5 mt-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                Regional Specialization
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-sans font-light">
                {selectedOffice.specialization}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Desk Status: Open</span>
            <span className="text-emerald-400">Fiduciary Clearance Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
