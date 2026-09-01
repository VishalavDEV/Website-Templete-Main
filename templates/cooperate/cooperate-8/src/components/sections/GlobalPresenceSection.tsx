import React, { useState } from "react";
import { globalOffices, OfficeLocation } from "../../data/companyInfo";
import { SectionHeader } from "../common/SectionHeader";
import { MapPin, Users, CheckCircle, Mail, Phone } from "lucide-react";

export const GlobalPresenceSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("New York");

  const activeOffice = globalOffices.find((o) => o.city === selectedCity) || globalOffices[0];

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="12"
          tag="Global Delivery"
          title="Follow-the-sun engineering network."
          description="Eight international hubs providing continuous 24/7 architecture advisory, emergency response, and localized regulatory compliance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Visual Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#111315] border border-[#24282F] rounded-xs p-6 sm:p-8 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden">
            {/* Background Grid & World Outline simulation */}
            <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between font-mono-tech text-[10px] text-[#A1A7B4] border-b border-[#24282F] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CCF34A] animate-pulse" />
                <span className="text-[#FAF8F5] font-bold">WORLD_GRID // 8 HUBS CONNECTED</span>
              </div>
              <span className="text-[#CCF34A]">LATENCY: 18ms AVG</span>
            </div>

            {/* Map Plot Area with interactive pins */}
            <div className="relative z-10 my-8 h-64 sm:h-72 w-full">
              {/* World outline hint SVG */}
              <svg className="w-full h-full opacity-20 text-[#FAF8F5]" viewBox="0 0 1000 500" fill="currentColor">
                <path d="M150,120 Q200,80 300,100 T450,140 Q400,240 320,300 T200,380 Z M480,90 Q600,70 750,110 T850,200 Q780,300 700,350 T550,280 Z M780,320 Q880,320 920,400 T800,450 Z" />
              </svg>

              {/* Pins */}
              {globalOffices.map((office) => {
                const isSelected = office.city === selectedCity;
                return (
                  <button
                    key={office.city}
                    type="button"
                    onClick={() => setSelectedCity(office.city)}
                    style={{
                      left: `${office.coordinates.x}%`,
                      top: `${office.coordinates.y}%`
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-6 h-6 rounded-full transition-all ${
                          isSelected
                            ? "bg-[#CCF34A]/40 scale-125 animate-ping"
                            : "group-hover:bg-white/20 scale-100"
                        }`}
                      />
                      <span
                        className={`relative w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-transform ${
                          isSelected
                            ? "bg-[#CCF34A] border-[#111315] scale-125"
                            : "bg-[#24282F] border-[#A1A7B4] group-hover:bg-white"
                        }`}
                      />
                    </div>
                    <span
                      className={`absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono-tech text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-xs transition-colors ${
                        isSelected
                          ? "bg-[#CCF34A] text-[#0A2E23]"
                          : "bg-[#181A1D]/90 text-[#A1A7B4] group-hover:text-white"
                      }`}
                    >
                      {office.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 pt-3 border-t border-[#24282F] flex items-center justify-between font-mono-tech text-[10px] text-[#7C828D]">
              <span>ACTIVE FOLLOW-THE-SUN ROTATION</span>
              <span>24/7/365 OPERATIONAL</span>
            </div>
          </div>

          {/* Right: Selected Hub Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-6">
            <div className="pb-4 border-b border-[#E6E2D8] flex items-center justify-between">
              <div>
                <div className="font-mono-tech text-xs text-[#0A2E23] uppercase font-bold">
                  {activeOffice.region} Regional Hub
                </div>
                <h3 className="font-serif-editorial text-3xl text-[#121316] mt-1">
                  {activeOffice.city}, {activeOffice.country}
                </h3>
              </div>
              {activeOffice.isHQ && (
                <span className="px-2 py-1 bg-[#0A2E23] text-[#CCF34A] text-[10px] font-mono-tech uppercase font-bold rounded-xs">
                  Global HQ
                </span>
              )}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs space-y-1">
                <div className="font-serif-editorial text-2xl text-[#0A2E23]">
                  {activeOffice.teamSize}+
                </div>
                <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">
                  Resident Systems Engineers
                </div>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs space-y-1">
                <div className="font-serif-editorial text-2xl text-[#0A2E23]">
                  {activeOffice.projectsCompleted}+
                </div>
                <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">
                  Projects Delivered
                </div>
              </div>
            </div>

            {/* Regional Expertise */}
            <div className="space-y-2">
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                Specialized Practice Focus:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeOffice.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="px-2.5 py-1 bg-[#F5F2EB] border border-[#E6E2D8] font-mono-tech text-xs text-[#121316] rounded-xs"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="pt-4 border-t border-[#E6E2D8] space-y-2 font-mono-tech text-xs text-[#5E636E]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0A2E23] shrink-0 mt-0.5" />
                <span>{activeOffice.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0A2E23] shrink-0" />
                <span>{activeOffice.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A2E23] shrink-0" />
                <span>{activeOffice.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
