import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../data/mockData';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface InteractiveServicesProps {
  onCursorChange?: (text: string, variant: 'default' | 'hover') => void;
}

export const InteractiveServices: React.FC<InteractiveServicesProps> = ({ onCursorChange }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const navigate = useNavigate();

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section className="py-28 sm:py-36 bg-[#f8f7f4] relative overflow-hidden select-none border-b-2 border-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#090909]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#090909] font-black block mb-2">
                WHAT WE BUILD // CORE CAPABILITIES
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase text-[#090909] tracking-tighter">
                OUR CORE SERVICES
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#4a4d55] font-mono font-bold leading-relaxed">
              From category positioning to WebGL platform engineering and multi-agent AI integration.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive List + Active Image Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* LEFT: Services List */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES.map((service) => {
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setActiveServiceId(service.id);
                    if (onCursorChange) onCursorChange('EXPLORE', 'hover');
                  }}
                  onMouseLeave={() => {
                    if (onCursorChange) onCursorChange('', 'default');
                  }}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`border-2 py-6 px-6 transition-all duration-300 rounded-none cursor-pointer ${
                    isActive
                      ? 'bg-[#090909] text-[#f8f7f4] border-[#090909] shadow-2xl translate-x-2'
                      : 'bg-white hover:bg-[#090909]/5 text-[#090909] border-[#090909]/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-sm uppercase tracking-widest font-black ${isActive ? 'text-[#D1FF00]' : 'text-gray-400'}`}>
                        {service.number}
                      </span>
                      <h3 className="text-xl sm:text-3xl font-serif font-black uppercase tracking-tighter">
                        {service.title}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-none border border-[#090909] transition-transform ${isActive ? 'bg-[#D1FF00] text-[#090909] rotate-45' : 'bg-black/5 text-[#090909]'}`}>
                      {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expanded Mobile/Active Details */}
                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-white/10 space-y-6 animate-in fade-in duration-300">
                      <p className="text-sm font-mono text-gray-300 leading-relaxed max-w-xl">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#D1FF00] font-black">
                          KEY CAPABILITIES:
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {service.capabilities.map((cap, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#090909] text-xs font-mono rounded-none text-[#D1FF00] border border-[#D1FF00]/40 font-bold"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/services/${service.id}`);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#D1FF00] text-[#090909] font-mono text-xs uppercase tracking-widest font-black rounded-none hover:bg-white border-2 border-[#090909] transition-colors cursor-pointer mt-2 shadow-lg"
                      >
                        <span>EXPLORE SERVICE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Image & Visual Preview Card */}
          <div className="lg:col-span-5 sticky top-32 hidden lg:block">
            <div className="relative rounded-none border-2 border-[#090909] bg-[#090909] text-[#f8f7f4] shadow-2xl">
              {/* Service Image with Zoom */}
              <div className="relative h-[480px] overflow-hidden">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 transform scale-105 hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-6 left-6 px-3.5 py-1 bg-[#090909] border border-[#D1FF00] rounded-none font-mono text-[10px] font-black text-[#D1FF00] uppercase tracking-widest">
                  SERVICE // {activeService.number}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-8 space-y-4 border-t border-white/10">
                <h4 className="text-2xl font-serif font-black text-white uppercase tracking-tighter">
                  {activeService.title}
                </h4>
                <p className="text-xs font-mono text-[#D1FF00] uppercase tracking-widest font-bold">
                  {activeService.tagline}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400">
                    Deliverables: {activeService.deliverables.length} Key Outputs
                  </span>
                  <button
                    onClick={() => navigate(`/services/${activeService.id}`)}
                    className="p-3 bg-[#D1FF00] text-[#090909] rounded-none hover:bg-white transition-colors cursor-pointer border border-[#090909]"
                    aria-label={`Explore ${activeService.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
