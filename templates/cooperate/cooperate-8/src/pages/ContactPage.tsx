import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, Globe, Clock, AlertTriangle } from "lucide-react";
import { companyInfo, globalOffices } from "../data/companyInfo";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ContactForm } from "../components/forms/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact & Scoping" }]} />

        {/* Hero Header */}
        <div className="mb-16 md:mb-20 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>EXECUTIVE ENGAGEMENT & SCOPING</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Initiate an architectural dialogue.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-2xl">
            Whether you are planning a mission-critical platform migration, assessing complex AI risk models, or seeking follow-the-sun architecture support, our practice leads are here to help.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Channels & 8 Global Offices, Right Scoping Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Headquarters Info */}
            <div className="bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-6">
              <div className="space-y-1">
                <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                  GLOBAL HEADQUARTERS
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#121316]">
                  New York Executive Hub
                </h3>
              </div>

              <div className="space-y-3 font-mono-tech text-xs text-[#5E636E]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0A2E23] shrink-0 mt-0.5" />
                  <span>One World Trade Center, Suite 8400, New York, NY 10007, United States</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0A2E23] shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="text-[#121316] hover:text-[#0A2E23]">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0A2E23] shrink-0" />
                  <a href={`tel:${companyInfo.phone}`} className="text-[#121316] hover:text-[#0A2E23]">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency 24/7 Incident Response Hotline */}
            <div className="bg-[#111315] text-[#FAF8F5] border border-[#24282F] p-6 sm:p-8 rounded-xs space-y-4">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#CCF34A]">
                <AlertTriangle className="w-4 h-4" />
                <span>24/7 SRE EMERGENCY INCIDENT RESPONSE</span>
              </div>
              <p className="text-xs text-[#A1A7B4] leading-relaxed">
                For active tier-1 enterprise outages requiring rapid distributed systems triage and sovereign code reviews:
              </p>
              <div className="font-mono-tech text-xs text-white">
                DIRECT SRE HOTLINE: <strong className="text-[#CCF34A]">+1 (800) 837-8392</strong>
              </div>
            </div>

            {/* Global Hubs Quick Directory */}
            <div className="space-y-3">
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                REGIONAL DELIVERY CENTERS
              </div>
              <div className="grid grid-cols-2 gap-2">
                {globalOffices.map((office) => (
                  <div key={office.city} className="p-3 bg-white border border-[#E6E2D8] rounded-xs font-mono-tech text-xs space-y-0.5">
                    <div className="font-bold text-[#121316]">{office.city}</div>
                    <div className="text-[10px] text-[#7C828D]">{office.country}</div>
                    <div className="text-[10px] text-[#0A2E23] truncate">{office.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Complete Scoping Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
