import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  Sparkles, 
  Check, 
  Calendar, 
  ChevronRight, 
  Eye, 
  Maximize2 
} from 'lucide-react';
import { CAMPUS_LOCATIONS } from '../data/universityData';

interface VirtualCampusTourSectionProps {
  onScheduleVisit: () => void;
}

export const VirtualCampusTourSection: React.FC<VirtualCampusTourSectionProps> = ({
  onScheduleVisit
}) => {
  const [activeLocationId, setActiveLocationId] = useState(CAMPUS_LOCATIONS[0].id);

  const activeLocation = CAMPUS_LOCATIONS.find((l) => l.id === activeLocationId) || CAMPUS_LOCATIONS[0];

  return (
    <section id="campus-tour" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Campus & Community</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience Our Historic & Modern Grounds
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Spanning 240 lush acres of collegiate gothic architecture, state-of-the-art research laboratories, and active student commons.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onScheduleVisit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An In-Person Campus Tour</span>
            </button>
          </div>
        </div>

        {/* Location Selection Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {CAMPUS_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocationId(loc.id)}
              className={`p-3 sm:p-4 rounded-xl text-left transition-all border ${
                activeLocationId === loc.id
                  ? 'bg-slate-800 border-emerald-500/80 shadow-lg shadow-emerald-950/30'
                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80 text-slate-400'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block mb-1">
                {loc.category}
              </span>
              <p className={`text-sm font-semibold truncate ${activeLocationId === loc.id ? 'text-white' : 'text-slate-300'}`}>
                {loc.name}
              </p>
            </button>
          ))}
        </div>

        {/* Interactive Tour Display Card */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Visual */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden group">
            <img
              src={activeLocation.image}
              alt={activeLocation.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
            
            {/* 360 Tour Interactive Badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive 360° Photo View</span>
            </div>

            <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 backdrop-blur-md text-white/80 hover:text-white border border-white/10">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Location Information & Highlights */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Modern University Campus Zone</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white mb-3">
                {activeLocation.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeLocation.description}
              </p>

              {/* Key Facility Highlights */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Facility Highlights & Amenities:
                </span>
                {activeLocation.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onScheduleVisit}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve Tour Slot</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
