import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../../data/services';

export const ServiceExplorer: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F4F3F3] border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              04 / MANDATES
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              CORE PRACTICE AREAS
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191919] font-normal leading-tight tracking-tight">
              Institutional services.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              From multi-asset discretionary portfolio management to cross-border corporate advisory, our integrated practices serve institutions, enterprises, and family offices.
            </p>
          </div>
        </div>

        {/* 3-COLUMN EDITORIAL VERTICAL INTERACTION */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* COLUMN 1: Vertical Service Selector (Left) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block mb-4">
              SELECT PRACTICE AREA
            </span>
            <div className="space-y-1.5">
              {SERVICES.map((service, index) => {
                const isSelected = service.id === selectedServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#191919] text-white shadow-xs'
                        : 'bg-white hover:bg-[#EAEAEA] text-[#191919] border border-[#E5E5E5]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono ${isSelected ? 'text-white/60' : 'text-[#191919]/40'}`}>
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium">{service.name}</span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSelected ? 'text-white translate-x-1' : 'text-[#191919]/40 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Service Description & Focus (Center) */}
          <div className="lg:col-span-4 bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/40 font-mono">
                  PRACTICE OVERVIEW
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal leading-snug">
                  {selectedService.name}
                </h3>
                <p className="text-xs text-[#191919]/60 font-sans italic">
                  "{selectedService.shortTagline}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed font-light">
                {selectedService.description}
              </p>

              <div className="p-4 bg-[#F4F3F3] rounded-xl space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/50 font-mono block">
                  PRIMARY CLIENT PROFILES
                </span>
                <p className="text-xs text-[#191919]/80 leading-relaxed font-medium">
                  {selectedService.targetClients}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E5E5] mt-6">
              <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 font-mono block mb-1">
                ADVISORY FRAMEWORK
              </span>
              <p className="text-xs text-[#191919]/70 font-mono">
                {selectedService.advisoryFramework}
              </p>
            </div>
          </div>

          {/* COLUMN 3: Capabilities & Deliverables (Right) */}
          <div className="lg:col-span-4 bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  CORE SCOPE & CAPABILITIES
                </span>
                <div className="space-y-2">
                  {selectedService.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F4F3F3] rounded-lg text-xs text-[#191919]/85 flex items-start gap-2.5"
                    >
                      <span className="text-xs font-mono text-[#191919]/40 mt-0.5">•</span>
                      <span className="leading-relaxed font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  KEY DELIVERABLES
                </span>
                <div className="space-y-1.5">
                  {selectedService.deliverables.map((del, idx) => (
                    <div key={idx} className="text-xs text-[#191919]/70 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#191919]/40">0{idx + 1}</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E5E5] mt-6">
              <Link
                to={`/${selectedService.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191919] hover:text-[#191919]/70 transition-colors group/link"
              >
                <span>Full {selectedService.name} Mandate</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
