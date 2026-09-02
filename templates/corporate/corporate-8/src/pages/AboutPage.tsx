import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Globe, MapPin, Users, Award, Clock } from "lucide-react";
import { companyInfo, companyValues, companyMilestones, globalOffices } from "../data/companyInfo";
import { teamMembers } from "../data/team";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";

export interface AboutPageProps {
  onOpenScoping: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenScoping }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Company" }]} />

        {/* Hero Header */}
        <div className="mb-16 md:mb-20 max-w-4xl space-y-6">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-[#0A2E23] flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-[#0A2E23]" />
            <span>INSTITUTIONAL PROFILE & MANIFESTO</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#121316] tracking-tight leading-[1.05]">
            Engineering systems of compounding institutional leverage.
          </h1>

          <p className="text-base sm:text-xl text-[#5E636E] font-normal leading-relaxed max-w-3xl">
            Founded in 2014, Vertexa is a global technology and architecture firm. We partner with ambitious enterprise leaders to engineer resilient distributed infrastructure, AI systems, and mission-critical digital platforms.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={onOpenScoping} withDiagonalArrow>
              Initiate Dialogue
            </Button>
            <Button variant="secondary" size="lg" to="/careers" withArrow>
              Join Our Engineering Crew
            </Button>
          </div>
        </div>

        {/* Corporate Manifesto Full-Width Banner */}
        <div className="bg-[#111315] text-[#FAF8F5] p-8 sm:p-14 rounded-xs border border-[#24282F] mb-20 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono-tech text-xs uppercase text-[#CCF34A]">
              THE VERTEXA THESIS
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              "We believe enterprise software shouldn't merely manage paperwork. It should unlock mathematical superpowers."
            </h2>
            <p className="text-sm sm:text-base text-[#A1A7B4] leading-relaxed">
              When software architecture is designed with absolute mathematical clarity, organizations operate with effortless speed, predictable cost structures, and unwavering resilience in times of volatility.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-24 space-y-8">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              GUIDING PRINCIPLES
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val, idx) => (
              <div key={val.title} className="bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#0A2E23] transition-colors">
                <div className="font-mono-tech text-xs text-[#0A2E23] font-bold">
                  0{idx + 1} // PRINCIPLE
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#121316]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E636E] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Leadership Team Section */}
        <div id="leadership" className="mb-24 space-y-8 scroll-mt-28">
          <div className="border-b border-[#E6E2D8] pb-4 flex items-end justify-between">
            <div>
              <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                EXECUTIVE LEADERSHIP
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
                Principals & Practice Leads
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-[#E6E2D8] rounded-xs overflow-hidden group flex flex-col justify-between hover:border-[#0A2E23] transition-colors"
              >
                <div className="relative aspect-4/5 bg-[#121316] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-mono-tech text-xs uppercase text-[#CCF34A]">{member.role}</div>
                    <h3 className="font-serif-editorial text-2xl">{member.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#5E636E] leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-3 border-t border-[#E6E2D8] space-y-1">
                    {member.credentials.map((cred) => (
                      <div key={cred} className="font-mono-tech text-[10px] text-[#7C828D]">
                        • {cred}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12-Year Milestones Timeline */}
        <div className="mb-24 space-y-8">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              INSTITUTIONAL TIMELINE
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
              A Decade of Continuous Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyMilestones.map((m) => (
              <div key={m.year} className="bg-white border border-[#E6E2D8] p-6 rounded-xs space-y-2">
                <div className="font-serif-editorial text-3xl text-[#0A2E23] font-bold">
                  {m.year}
                </div>
                <div className="font-mono-tech text-xs uppercase text-[#121316] font-bold">
                  {m.event}
                </div>
                <p className="text-xs text-[#5E636E]">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs Grid */}
        <div id="offices" className="mb-24 space-y-8 scroll-mt-28">
          <div className="border-b border-[#E6E2D8] pb-4">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              GLOBAL PRESENCE
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121316] mt-1">
              8 Global Engineering Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalOffices.map((office) => (
              <div key={office.city} className="bg-white border border-[#E6E2D8] p-6 rounded-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-serif-editorial text-2xl text-[#121316] font-bold">
                    {office.city}
                  </div>
                  {office.isHQ && (
                    <span className="px-2 py-0.5 bg-[#0A2E23] text-[#CCF34A] text-[9px] font-mono-tech uppercase font-bold rounded-xs">
                      HQ
                    </span>
                  )}
                </div>
                <div className="font-mono-tech text-xs text-[#0A2E23]">{office.country} ({office.region})</div>
                <div className="font-mono-tech text-[11px] text-[#7C828D]">{office.address}</div>
                <div className="pt-2 border-t border-[#E6E2D8] font-mono-tech text-[10px] text-[#5E636E]">
                  TEAM: {office.teamSize}+ Engineers
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="bg-[#F5F2EB] border border-[#E6E2D8] p-8 sm:p-10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <div className="space-y-1">
            <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
              SECURITY & REGULATORY COMPLIANCE
            </div>
            <div className="font-serif-editorial text-2xl text-[#121316]">
              Independently Audited & Certified
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {companyInfo.certifications.map((cert) => (
              <span key={cert} className="px-3 py-1.5 bg-white border border-[#E6E2D8] font-mono-tech text-xs text-[#121316] font-semibold rounded-xs">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FinalCtaSection onOpenScoping={onOpenScoping} />
    </div>
  );
};
