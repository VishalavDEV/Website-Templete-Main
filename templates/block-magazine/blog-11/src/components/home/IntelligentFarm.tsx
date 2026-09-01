import React, { useState } from 'react';
import { Radio, X } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { FARM_HOTSPOTS } from '../../data/hotspots';
import { SensorHotspot } from '../../types';

export const IntelligentFarm: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<SensorHotspot>(FARM_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-[#0B1710] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="REAL-TIME TELEMETRY"
          title="THE INTELLIGENT FARM"
          subtitle="Explore our interactive sensory grid monitoring soil moisture, crop canopy chlorophyll, acoustic stem flow, and yield forecasts across 1,000 smart acres."
          theme="dark"
        />

        {/* Interactive Hotspot Viewer Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-800/60 shadow-2xl bg-neutral-900 aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[380px] sm:min-h-[450px] block">
          {/* Panoramic Background Image */}
          <ImageWithFallback
            src="/images/pexels-quang-nguyen-vinh-222549-2158048.jpg"
            alt="Panoramic intelligent farmland sensory map"
            hoverZoom={false}
            className="w-full h-full object-cover opacity-60 block"
          />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline
              points={`${FARM_HOTSPOTS[0].x},${FARM_HOTSPOTS[0].y} ${FARM_HOTSPOTS[1].x},${FARM_HOTSPOTS[1].y} ${FARM_HOTSPOTS[2].x},${FARM_HOTSPOTS[2].y} ${FARM_HOTSPOTS[3].x},${FARM_HOTSPOTS[3].y}`}
              fill="none"
              stroke="#22c55e"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              className="opacity-70"
            />
          </svg>

          {/* Hotspot Pins */}
          {FARM_HOTSPOTS.map(hs => {
            const isSelected = activeHotspot.id === hs.id;
            return (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group p-2"
                onClick={() => {
                  setActiveHotspot(hs);
                  setIsModalOpen(true);
                }}
              >
                {/* Pulse Ring */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-emerald-400 absolute inset-0 m-auto ${isSelected ? 'animate-ping opacity-75' : 'opacity-40 group-hover:opacity-100'}`} />

                {/* Main Pin Icon */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono-tech text-[10px] sm:text-xs font-bold transition-all shadow-lg ${
                    isSelected
                      ? 'bg-emerald-500 text-black scale-125 ring-4 ring-emerald-300'
                      : 'bg-forest-900 text-white border border-emerald-400 group-hover:scale-110'
                  }`}
                >
                  {hs.category[0]}
                </div>

                {/* Floating Tag Label (Clamped positioning to avoid clipping) */}
                <div className={`absolute top-9 sm:top-10 whitespace-nowrap bg-black/90 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono-tech tracking-widest uppercase border border-emerald-600/40 opacity-90 group-hover:opacity-100 transition-opacity text-white font-bold ${
                  hs.x > 75 ? 'right-0 translate-x-2' : hs.x < 25 ? 'left-0 -translate-x-2' : 'left-1/2 -translate-x-1/2'
                }`}>
                  {hs.category}
                </div>
              </div>
            );
          })}

          {/* Persistent Telemetry Sidebar Panel (Desktop/Laptop) */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs sm:max-w-sm w-full bg-black/85 backdrop-blur-xl border border-emerald-700/50 rounded-2xl p-4 sm:p-5 shadow-2xl text-white hidden lg:block">
            <div className="flex items-center justify-between border-b border-emerald-900/80 pb-2.5 mb-2.5">
              <span className="text-[11px] font-mono-tech text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> SENSORY NODE TELEMETRY
              </span>
              <span
                className={`text-[9px] font-mono-tech px-2 py-0.5 rounded font-bold ${
                  activeHotspot.telemetry.status === 'OPTIMAL'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                    : 'bg-amber-950 text-amber-300 border border-amber-600'
                }`}
              >
                {activeHotspot.telemetry.status}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-serif-editorial font-bold text-white mb-1">
              {activeHotspot.name}
            </h4>
            <p className="text-xs text-neutral-300 mb-3 font-sans line-clamp-2">
              {activeHotspot.shortDesc}
            </p>

            <div className="space-y-1.5 font-mono-tech text-xs bg-neutral-900/80 p-2.5 rounded-xl border border-emerald-900/40">
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>{activeHotspot.telemetry.metricName}:</span>
                <span className="text-emerald-400 font-bold">{activeHotspot.telemetry.value}</span>
              </div>
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>Trend Shift:</span>
                <span className="text-neutral-200 font-bold">{activeHotspot.telemetry.trend}</span>
              </div>
            </div>

            <p className="mt-2.5 text-[11px] text-emerald-300 italic border-l-2 border-emerald-500 pl-2 line-clamp-2">
              "{activeHotspot.telemetry.insight}"
            </p>
          </div>
        </div>

        {/* Mobile & Tablet Below-Map Telemetry Card */}
        <div className="mt-4 p-4 rounded-2xl bg-neutral-900 border border-emerald-700/50 text-white lg:hidden space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-900/80 pb-2">
            <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> {activeHotspot.category} SENSOR
            </span>
            <span
              className={`text-[9px] font-mono-tech px-2 py-0.5 rounded font-bold ${
                activeHotspot.telemetry.status === 'OPTIMAL'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                  : 'bg-amber-950 text-amber-300 border border-amber-600'
              }`}
            >
              {activeHotspot.telemetry.status}
            </span>
          </div>

          <div>
            <h4 className="text-base font-serif-editorial font-bold text-white">{activeHotspot.name}</h4>
            <p className="text-xs text-neutral-300 mt-0.5">{activeHotspot.shortDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-black/60 p-2.5 rounded-xl font-mono-tech text-xs">
            <div>
              <span className="text-[9px] text-neutral-400 block uppercase font-bold">{activeHotspot.telemetry.metricName}</span>
              <span className="text-emerald-400 font-bold">{activeHotspot.telemetry.value}</span>
            </div>
            <div>
              <span className="text-[9px] text-neutral-400 block uppercase font-bold">TREND</span>
              <span className="text-neutral-200 font-bold">{activeHotspot.telemetry.trend}</span>
            </div>
          </div>
        </div>

        {/* Mobile Detail Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md lg:hidden">
            <div className="bg-neutral-900 border border-emerald-700/60 rounded-2xl p-5 max-w-sm w-full shadow-2xl text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono-tech text-emerald-400 font-bold">{activeHotspot.category} SENSOR</span>
                <button onClick={() => setIsModalOpen(false)} className="text-neutral-400 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-lg font-serif-editorial font-bold text-white mb-1.5">{activeHotspot.name}</h3>
              <p className="text-xs text-neutral-300 mb-3">{activeHotspot.shortDesc}</p>
              <div className="bg-black/70 p-3 rounded-xl font-mono-tech text-xs space-y-1.5 mb-3">
                <div className="flex justify-between">
                  <span>Metric:</span>
                  <span className="text-emerald-400 font-bold">{activeHotspot.telemetry.value}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-bold">{activeHotspot.telemetry.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>Trend:</span>
                  <span className="text-neutral-300 font-bold">{activeHotspot.telemetry.trend}</span>
                </div>
              </div>
              <p className="text-xs text-emerald-300 italic">"{activeHotspot.telemetry.insight}"</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
