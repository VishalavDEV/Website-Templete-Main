import React from 'react';
import { ArrowDown, Download, Rocket, ShieldCheck, MapPin, Award, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden border-b border-slate-200">
      {/* Background Grid Pattern & Accent Blur */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Mission Text Metadata & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Profile Header Label */}
            <div className="inline-flex items-center space-x-3 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-700 font-mono-tech text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
              <span className="font-semibold text-sky-800">SYSTEM PROFILE / 01</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">ID: {PERSONAL_INFO.profileId}</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-slate-900 tracking-tight leading-none uppercase">
                ARIN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-800 to-sky-600">
                  SOLBERG
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-mono-tech uppercase tracking-widest text-sky-700 font-semibold">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Professional Statement */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed border-l-2 border-sky-600 pl-4 py-1 italic font-sans">
              "{PERSONAL_INFO.heroStatement}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#missions"
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-sky-700 text-white font-mono-tech text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Rocket className="w-4 h-4 text-sky-400" />
                <span>Explore Missions</span>
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-mono-tech text-xs uppercase tracking-wider px-6 py-3.5 rounded border border-slate-300 hover:border-slate-400 shadow-xs transition-all duration-200"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Technical Metadata Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-tech">
              <div className="p-3 bg-slate-50/80 border border-slate-200/80 rounded">
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest">ROLE</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">Systems Engineering</span>
              </div>
              <div className="p-3 bg-slate-50/80 border border-slate-200/80 rounded">
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest">EXPERIENCE</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 block">{PERSONAL_INFO.experience}</span>
              </div>
              <div className="p-3 bg-slate-50/80 border border-slate-200/80 rounded">
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest">LOCATION</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-600" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
              <div className="p-3 bg-slate-50/80 border border-slate-200/80 rounded">
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest">STATUS</span>
                <span className="text-xs font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active / Open
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Fictional Portrait with Aerospace Technical HUD Overlay */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer HUD Framework */}
              <div className="relative p-3 bg-slate-100/70 border border-slate-300 rounded-lg shadow-xl tech-corner-box">
                
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white rounded-t font-mono-tech text-[10px] uppercase tracking-wider mb-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-3 h-3 text-sky-400" />
                    <span>PROFILE ID: {PERSONAL_INFO.profileId}</span>
                  </div>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-ping" />
                    SYSTEM ACTIVE
                  </span>
                </div>

                {/* Portrait Container */}
                <div className="relative rounded overflow-hidden aspect-square border border-slate-300 shadow-inner group">
                  <img
                    src="images/arin_solberg_portrait.jpg"
                    alt="Dr. Arin Solberg — Aerospace Systems Engineer"
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Tech Scanner Overlay */}
                  <div className="absolute inset-0 pointer-events-none border border-sky-400/20" />
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent animate-scan" />

                  {/* Target Crosshairs Overlay */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-sky-400/70 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-sky-400/70 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-sky-400/70 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-sky-400/70 pointer-events-none" />

                  {/* Floating HUD Label */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-sm text-white px-3 py-2 rounded text-[11px] font-mono-tech border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-sky-400 block uppercase tracking-wider">SPECIALIZATION</span>
                      <span className="font-semibold text-slate-100">SPACECRAFT & MISSION SYSTEMS</span>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                  </div>
                </div>

                {/* HUD Bottom Info Bar */}
                <div className="mt-2.5 px-2 flex justify-between items-center text-[10px] font-mono-tech text-slate-500">
                  <span>LAT 59°54'N | LON 10°45'E</span>
                  <span>NORWAY AEROSPACE SPECS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
