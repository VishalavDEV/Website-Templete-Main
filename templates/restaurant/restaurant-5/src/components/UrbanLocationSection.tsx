import React from 'react';
import { NOIRE_CONFIG } from '../data/noireData';

export const UrbanLocationSection: React.FC = () => {
  return (
    <section id="location" className="relative w-full bg-[#171512] text-[#F3EBDD] py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Information */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <span className="font-mono text-xs text-[#B87552] tracking-widest uppercase font-bold">
            11 // URBAN COORDINATES
          </span>

          <h2 className="font-display font-black tracking-tighter text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.88] text-[#F3EBDD]">
            FIND <br />
            <span className="text-[#B87552]">NOIRÉ.</span>
          </h2>

          <div className="space-y-4 font-mono text-xs text-[#B8AA98] border-t border-[rgba(243,235,221,0.14)] pt-6">
            <div>
              <span className="block text-[#B87552] font-bold mb-1">CITY & COORDINATES</span>
              <span className="text-[#F3EBDD] text-sm font-bold">{NOIRE_CONFIG.city}, INDIA</span> <br />
              <span>{NOIRE_CONFIG.coordinates}</span>
            </div>

            <div>
              <span className="block text-[#B87552] font-bold mb-1">LOCATION ADDRESS</span>
              <span className="text-[#F3EBDD] font-bold">{NOIRE_CONFIG.address}</span>
            </div>

            <div>
              <span className="block text-[#B87552] font-bold mb-1">HOURS OF OPERATION</span>
              <span className="text-[#F3EBDD] font-bold">TUE — SUN : {NOIRE_CONFIG.hours}</span> <br />
              <span className="text-[#B8AA98]">{NOIRE_CONFIG.closedDay}</span>
            </div>

            <div>
              <span className="block text-[#B87552] font-bold mb-1">VALET & ARRIVAL</span>
              <span className="text-[#F3EBDD] font-bold">PRIVATE VALET AT MAIN ENTRANCE</span>
            </div>
          </div>
        </div>

        {/* Right Minimalist Abstract City-Grid Vector Map Canvas */}
        <div className="lg:col-span-7 relative h-[450px] md:h-[550px] w-full bg-[#211D18] border border-[rgba(243,235,221,0.14)] rounded-sm overflow-hidden p-6 flex flex-col justify-between shadow-md">
          {/* Abstract Grid SVG Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-dark" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F3EBDD" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-dark)" />
            {/* Abstract Major Arterial Lines */}
            <line x1="0" y1="200" x2="800" y2="250" stroke="#B87552" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="300" y1="0" x2="250" y2="600" stroke="#B8AA98" strokeWidth="1.5" />
            <circle cx="300" cy="218" r="40" fill="none" stroke="#B87552" strokeWidth="1" opacity="0.6" />
            <circle cx="300" cy="218" r="6" fill="#B87552" />
          </svg>

          {/* Top Vector Tag */}
          <div className="relative z-10 flex justify-between items-start font-mono text-[11px] text-[#B8AA98]">
            <span className="bg-[#171512] px-3 py-1 border border-[rgba(243,235,221,0.14)] font-bold text-[#F3EBDD]">MAP REF: CHN-KNK-04</span>
            <span className="bg-[#171512] px-3 py-1 border border-[#B87552]/40 text-[#B87552] font-bold">LIVE RADAR GRID</span>
          </div>

          {/* Center Pin Marker Card */}
          <div className="relative z-10 self-center bg-[#171512]/95 border border-[#B87552] p-4 rounded-sm shadow-xl text-center max-w-xs">
            <span className="w-2 h-2 rounded-full bg-[#B87552] inline-block animate-ping mr-2" />
            <span className="font-display font-bold text-lg text-[#F3EBDD]">NOIRÉ SUPPER CLUB</span>
            <p className="font-mono text-[10px] text-[#B8AA98] mt-1 font-bold">13.0827° N / 80.2707° E</p>
          </div>

          {/* Bottom Vector Coordinates */}
          <div className="relative z-10 flex justify-between items-end font-mono text-[11px] text-[#B8AA98]">
            <span>BAY OF BENGAL EAST → 8.2 KM</span>
            <span className="text-[#B87552] font-bold">VALET AVAILABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
