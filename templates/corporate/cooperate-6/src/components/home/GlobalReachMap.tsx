import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Clock, Building2, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { officeHubs } from '../../data/offices';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function GlobalReachMap() {
  const [selectedHub, setSelectedHub] = useState(officeHubs[0]);

  // Extended hub points for the world map
  const mapPoints = [
    { name: 'New York', country: 'USA', x: 27, y: 35, slug: 'new-york', region: 'North America', code: 'JFK', activeFlights: 42 },
    { name: 'Toronto', country: 'Canada', x: 25, y: 30, slug: 'destinations', region: 'North America', code: 'YYZ', activeFlights: 18 },
    { name: 'London', country: 'UK', x: 47, y: 28, slug: 'london', region: 'Europe', code: 'LHR', activeFlights: 64 },
    { name: 'Paris', country: 'France', x: 49, y: 32, slug: 'paris', region: 'Europe', code: 'CDG', activeFlights: 38 },
    { name: 'Frankfurt', country: 'Germany', x: 52, y: 30, slug: 'destinations', region: 'Europe', code: 'FRA', activeFlights: 31 },
    { name: 'Zurich', country: 'Switzerland', x: 51, y: 34, slug: 'zurich', region: 'Europe', code: 'ZRH', activeFlights: 24 },
    { name: 'Dubai', country: 'UAE', x: 64, y: 44, slug: 'dubai', region: 'Middle East', code: 'DXB', activeFlights: 56 },
    { name: 'Mumbai', country: 'India', x: 70, y: 48, slug: 'mumbai', region: 'Asia', code: 'BOM', activeFlights: 29 },
    { name: 'Singapore', country: 'Singapore', x: 79, y: 58, slug: 'singapore', region: 'Asia', code: 'SIN', activeFlights: 52 },
    { name: 'Tokyo', country: 'Japan', x: 88, y: 36, slug: 'tokyo', region: 'Asia', code: 'HND', activeFlights: 47 },
    { name: 'Sydney', country: 'Australia', x: 89, y: 78, slug: 'sydney', region: 'Oceania', code: 'SYD', activeFlights: 21 },
  ];

  const [activePin, setActivePin] = useState(mapPoints[2]); // London default

  return (
    <section className="py-20 sm:py-28 bg-[#0A261F] text-white overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0F382E]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Global Footprint"
          title="Where business takes you, we're already there."
          subtitle="Aurelia operates an interconnected network of 8 regional headquarters, 45 partner desks, and 24/7 operations centers spanning every strategic financial corridor."
          align="left"
          theme="dark"
        />

        {/* Global Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-[#0F382E]/60 border border-[#165042] backdrop-blur-md mb-12">
          <AnimatedCounter value="120+" label="Countries" sublabel="Active flight networks" theme="dark" />
          <AnimatedCounter value="280+" label="Cities" sublabel="VIP ground infrastructure" theme="dark" />
          <AnimatedCounter value="45" label="Regional Partners" sublabel="Bespoke luxury desks" theme="dark" />
          <AnimatedCounter value="24/7" label="Global Assistance" sublabel="Always-on duty of care" theme="dark" />
        </div>

        {/* Interactive World Map & City Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Canvas */}
          <div className="lg:col-span-8 relative p-6 sm:p-8 rounded-3xl bg-[#061814] border border-[#165042] overflow-hidden min-h-[380px] sm:min-h-[460px]">
            {/* SVG stylized world grid */}
            <svg
              className="w-full h-full absolute inset-0 opacity-25"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2A8C74" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#grid)" />
              
              {/* World continents silhouettes simplified aesthetic */}
              <path
                d="M 180 120 Q 220 100 290 140 Q 320 180 270 230 Q 220 250 180 190 Z"
                fill="#0F382E"
                opacity="0.6"
              />
              <path
                d="M 280 270 Q 320 280 340 370 Q 300 450 260 380 Q 250 310 280 270 Z"
                fill="#0F382E"
                opacity="0.6"
              />
              <path
                d="M 450 100 Q 550 80 580 140 Q 520 210 440 180 Z"
                fill="#0F382E"
                opacity="0.6"
              />
              <path
                d="M 470 200 Q 550 210 570 330 Q 510 420 460 320 Z"
                fill="#0F382E"
                opacity="0.6"
              />
              <path
                d="M 600 110 Q 820 90 890 160 Q 820 250 680 240 Q 640 170 600 110 Z"
                fill="#0F382E"
                opacity="0.6"
              />
              <path
                d="M 790 320 Q 880 310 900 390 Q 830 430 780 370 Z"
                fill="#0F382E"
                opacity="0.6"
              />
            </svg>

            {/* Connecting flight route bezier arcs */}
            <svg
              className="w-full h-full absolute inset-0 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* NYC to London */}
              <path d="M 27 35 Q 37 20 47 28" fill="none" stroke="#C29B38" strokeWidth="0.4" strokeDasharray="1,1" className="opacity-70 animate-pulse" />
              {/* London to Dubai */}
              <path d="M 47 28 Q 55 24 64 44" fill="none" stroke="#C29B38" strokeWidth="0.4" strokeDasharray="1,1" className="opacity-70 animate-pulse" />
              {/* Dubai to Singapore */}
              <path d="M 64 44 Q 72 46 79 58" fill="none" stroke="#C29B38" strokeWidth="0.4" strokeDasharray="1,1" className="opacity-70 animate-pulse" />
              {/* Singapore to Tokyo */}
              <path d="M 79 58 Q 84 48 88 36" fill="none" stroke="#C29B38" strokeWidth="0.4" strokeDasharray="1,1" className="opacity-70 animate-pulse" />
            </svg>

            {/* Interactive City Pins */}
            {mapPoints.map((point) => {
              const isSelected = activePin.name === point.name;
              return (
                <button
                  key={point.name}
                  onClick={() => setActivePin(point)}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute w-7 h-7 rounded-full bg-[#C29B38]/30 animate-ping" />
                    )}
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#DFBA58] ring-4 ring-[#0F382E] scale-125'
                          : 'bg-[#C29B38] hover:scale-125 ring-2 ring-[#061814]'
                      }`}
                    />
                  </div>
                  <span
                    className={`mt-1.5 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase transition-all whitespace-nowrap block ${
                      isSelected
                        ? 'bg-[#C29B38] text-[#0E1412] shadow-md'
                        : 'bg-[#0A261F]/80 text-[#D8C3A8] opacity-80 group-hover:opacity-100 group-hover:bg-[#0F382E]'
                    }`}
                  >
                    {point.name}
                  </span>
                </button>
              );
            })}

            {/* Map bottom legend */}
            <div className="absolute bottom-4 left-6 flex items-center gap-4 text-[11px] text-[#8FA29A]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C29B38]" />
                <span>Primary Global Hub</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#C29B38] border-dashed" />
                <span>Active Flight Corridors</span>
              </div>
            </div>
          </div>

          {/* Right Selected Hub Telemetry Card */}
          <div className="lg:col-span-4">
            <motion.div
              key={activePin.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0F382E]/80 border border-[#165042] backdrop-blur-md shadow-2xl space-y-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29B38]">
                    {activePin.region} Hub
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white mt-1">
                    {activePin.name}
                  </h3>
                  <div className="text-xs text-[#D8C3A8]/80">{activePin.country} • Airport {activePin.code}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#061814] text-[#C29B38] text-xs font-mono font-bold">
                  {activePin.code}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#165042] text-xs text-[#D8C3A8]/90">
                <div className="flex justify-between py-1 border-b border-[#165042]/50">
                  <span className="text-[#8FA29A]">Active Managed Journeys:</span>
                  <span className="font-semibold text-white">{activePin.activeFlights} Corporate Delegations</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#165042]/50">
                  <span className="text-[#8FA29A]">VIP Tarmac Access:</span>
                  <span className="font-semibold text-[#DFBA58]">Active 24/7 FBO</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#165042]/50">
                  <span className="text-[#8FA29A]">Partner Hotels:</span>
                  <span className="font-semibold text-white">42 Preferred Luxury Suites</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#8FA29A]">Concierge Desk:</span>
                  <span className="font-semibold text-white">English / Local Language</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={activePin.slug === 'destinations' ? '/destinations' : `/destinations/${activePin.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] active:scale-95 transition-all shadow-md"
                >
                  <span>Explore {activePin.name} Hub Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
