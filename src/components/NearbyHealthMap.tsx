import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Phone,
  Clock,
  Navigation,
  Star,
  ShieldAlert,
  Sparkles,
  Building,
  CheckCircle2,
  ExternalLink,
  X,
  Compass,
} from 'lucide-react';
import { HealthFacility, FacilityType } from '../types';

interface NearbyHealthMapProps {
  facilities: HealthFacility[];
}

export const NearbyHealthMap: React.FC<NearbyHealthMapProps> = ({ facilities }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFacility, setSelectedFacility] = useState<HealthFacility | null>(facilities[0] || null);
  const [directionsModal, setDirectionsModal] = useState<HealthFacility | null>(null);

  const filterTabs: { id: string; label: string; type?: FacilityType }[] = [
    { id: 'all', label: 'All Facilities' },
    { id: 'clinic', label: 'Clinics' },
    { id: 'lab', label: 'Diagnostic Labs' },
    { id: 'pharmacy', label: 'Pharmacies' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'vaccination', label: 'Vaccination' },
    { id: 'emergency', label: 'Emergency' },
  ];

  const filteredFacilities = facilities.filter((fac) => {
    const matchesType = activeFilter === 'all' || fac.type === activeFilter;
    const matchesSearch =
      fac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const getMarkerColor = (type: FacilityType) => {
    switch (type) {
      case 'emergency': return '#B9442C'; // Crimson Alert
      case 'clinic': return '#2D5A3F';   // Deep forest green
      case 'lab': return '#1E4B7A';      // Sapphire Slate
      case 'pharmacy': return '#7C5320'; // Warm Amber/Olive
      case 'wellness': return '#5A3896'; // Royal Amethyst
      case 'vaccination': return '#267365'; // Sea green
      default: return '#2D5A3F';
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#A8904F]" />
            <span>Geographic Care Network & Emergency Triage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Care Near You
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Locate accredited health centers, diagnostic labs, 24/7 pharmacies, and emergency trauma facilities in your local network.
          </p>
        </div>

        {/* Live Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A5A40]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search near me..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E5E2DD] rounded-xl text-xs text-[#2D3A2D] placeholder-[#5A5A40] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/30"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-xs'
                  : 'bg-white text-[#5A5A40] border-[#E5E2DD] hover:bg-[#F5F2ED]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Interactive Map & Facility Cards Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Canvas Topographical Map View (7 cols) */}
        <div className="lg:col-span-7 bg-[#F5F2ED] rounded-2xl border border-[#E5E2DD] shadow-inner overflow-hidden relative min-h-[460px] flex flex-col">
          
          {/* Map Top Bar Controls */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#E5E2DD] shadow-xs flex items-center space-x-2 text-xs text-[#2D3A2D]">
            <Compass className="w-3.5 h-3.5 text-[#A8904F]" />
            <span className="font-semibold">Green Valley Medical District</span>
            <span className="text-[10px] text-[#5A5A40]">• Live Radius: 5.0 km</span>
          </div>

          {/* Interactive SVG Map Vector Surface */}
          <div className="w-full h-full min-h-[460px] relative bg-[#EBE7DF] flex-1">
            
            {/* Topographical contours & road network */}
            <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#D3C7AC" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Natural river & park curves */}
              <path d="M 0 30 Q 30 20 50 45 T 100 60" fill="none" stroke="#A8BA9A" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
              <circle cx="50" cy="45" r="22" fill="#DCE5D8" opacity="0.4" />
              <path d="M 20 0 L 40 100" fill="none" stroke="#D9CEB4" strokeWidth="2.5" />
              <path d="M 0 65 L 100 55" fill="none" stroke="#D9CEB4" strokeWidth="3" />
              <path d="M 30 20 L 80 80" fill="none" stroke="#D9CEB4" strokeWidth="1.5" strokeDasharray="2,2" />
            </svg>

            {/* Current User Location Pulse */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{ left: '48%', top: '52%' }}
            >
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute w-8 h-8 rounded-full bg-[#2D3A2D] opacity-40"></span>
                <span className="w-4 h-4 rounded-full bg-[#2D3A2D] border-2 border-white shadow-md flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8904F]"></span>
                </span>
              </div>
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-[#2D3A2D] text-white px-2 py-0.5 rounded-md shadow-md whitespace-nowrap">
                You (Current Location)
              </span>
            </div>

            {/* Render Facility Markers */}
            {filteredFacilities.map((fac) => {
              const isSelected = selectedFacility?.id === fac.id;
              const markerColor = getMarkerColor(fac.type);

              return (
                <div
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group transition-transform duration-200 hover:scale-110"
                  style={{ left: `${fac.coordinates.x}%`, top: `${fac.coordinates.y}%` }}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Pulsing glow if selected */}
                    {isSelected && (
                      <span
                        className="animate-ping absolute -top-1 w-9 h-9 rounded-full opacity-60"
                        style={{ backgroundColor: markerColor }}
                      />
                    )}

                    {/* Marker Pin */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-lg border-2 border-white transition-all ${
                        isSelected ? 'scale-125 ring-2 ring-[#A8904F]' : ''
                      }`}
                      style={{ backgroundColor: markerColor }}
                    >
                      {fac.type === 'emergency' ? (
                        <ShieldAlert className="w-4 h-4 text-white animate-pulse" />
                      ) : (
                        <MapPin className="w-4 h-4 text-white" />
                      )}
                    </div>

                    {/* Mini Badge */}
                    <div className="mt-1 px-2 py-0.5 rounded-md bg-[#2D3A2D]/90 backdrop-blur-xs text-white text-[10px] font-semibold whitespace-nowrap shadow-md hidden group-hover:block transition-all">
                      {fac.name} • {fac.distance}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Map Legend */}
          <div className="p-3 bg-white border-t border-[#E5E2DD] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5A5A40]">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A3F]" />
                <span>Clinic</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E4B7A]" />
                <span>Lab</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C5320]" />
                <span>Pharmacy</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B9442C]" />
                <span>24/7 Emergency</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#5A5A40]">
              Showing {filteredFacilities.length} locations
            </span>
          </div>

        </div>

        {/* Right: Location Cards & Selected Detail Drawer (5 cols) */}
        <div className="lg:col-span-5 space-y-4 max-h-[580px] overflow-y-auto pr-1">
          
          {filteredFacilities.map((facility) => {
            const isSelected = selectedFacility?.id === facility.id;

            return (
              <div
                key={facility.id}
                onClick={() => setSelectedFacility(facility)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-white border-[#2D3A2D] shadow-md ring-1 ring-[#2D3A2D]/30'
                    : 'bg-white border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm'
                }`}
              >
                <div>
                  
                  {/* Top Bar: Name & Distance */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-1.5 text-xs text-[#5A5A40]">
                        <span className="font-semibold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-[#2D3A2D] border border-[#E5E2DD]">
                          {facility.type}
                        </span>
                        <span>•</span>
                        <span className="font-mono font-bold text-[#2D3A2D]">{facility.distance}</span>
                      </div>
                      <h3 className="text-base font-bold font-serif text-[#2D3A2D] mt-1">
                        {facility.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-1 bg-[#F5F2ED] px-2 py-1 rounded-xl border border-[#E5E2DD] shrink-0">
                      <Star className="w-3 h-3 text-[#A8904F] fill-current" />
                      <span className="text-xs font-bold text-[#2D3A2D]">{facility.rating}</span>
                    </div>
                  </div>

                  {/* Address & Hours */}
                  <div className="mt-2 space-y-1 text-xs text-[#5A5A40]">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A8904F] shrink-0" />
                      <span className="truncate">{facility.address}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#5A5A40] shrink-0" />
                      <span className={facility.emergency24x7 ? 'text-red-700 font-semibold' : ''}>
                        {facility.openUntil}
                      </span>
                    </div>
                  </div>

                  {/* Services Badges */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {facility.services.map((svc, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5F2ED] text-[#5A5A40] border border-[#E5E2DD]"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Actions */}
                <div className="pt-3 border-t border-[#E5E2DD] flex items-center justify-between">
                  <a
                    href={`tel:${facility.phone.replace(/[^0-9+]/g, '')}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-semibold text-[#2D3A2D] hover:underline flex items-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>{facility.phone}</span>
                  </a>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirectionsModal(facility);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#2D3A2D] text-white hover:bg-[#1F2B1F] text-xs font-semibold flex items-center space-x-1.5 shadow-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>Get Directions</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Directions Estimation Modal */}
      {directionsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E5E2DD] p-6 sm:p-7 shadow-2xl space-y-5 text-[#2D3A2D]">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-[#A8904F]" />
                <h3 className="text-lg font-bold font-serif">Transit & Route Estimation</h3>
              </div>
              <button
                onClick={() => setDirectionsModal(null)}
                className="p-1.5 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h4 className="text-base font-bold font-serif text-[#2D3A2D]">{directionsModal.name}</h4>
              <p className="text-xs text-[#5A5A40] mt-0.5">{directionsModal.address}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
                <p className="text-[10px] text-[#5A5A40] uppercase">Driving</p>
                <p className="text-base font-bold font-serif text-[#2D3A2D] mt-1">6 - 8 mins</p>
                <p className="text-[10px] text-[#5A5A40] mt-0.5">{directionsModal.distance}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
                <p className="text-[10px] text-[#5A5A40] uppercase">Transit</p>
                <p className="text-base font-bold font-serif text-[#2D3A2D] mt-1">14 mins</p>
                <p className="text-[10px] text-[#5A5A40] mt-0.5">Route 42 Direct</p>
              </div>
              <div className="p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD]">
                <p className="text-[10px] text-[#5A5A40] uppercase">Walking</p>
                <p className="text-base font-bold font-serif text-[#2D3A2D] mt-1">22 mins</p>
                <p className="text-[10px] text-[#5A5A40] mt-0.5">Sanctuary Walk</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={`tel:${directionsModal.phone.replace(/[^0-9+]/g, '')}`}
                className="px-4 py-2 rounded-xl bg-[#F5F2ED] hover:bg-[#E5E2DD] text-xs font-semibold text-[#2D3A2D] border border-[#E5E2DD] flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8904F]" />
                <span>Call Desk</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(directionsModal.name + ' ' + directionsModal.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#A8904F]" />
                <span>Open Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
