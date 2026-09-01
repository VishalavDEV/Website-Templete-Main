import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  ShieldAlert, 
  Navigation, 
  CheckCircle2, 
  HeartPulse, 
  Ambulance, 
  Building2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CAMPUS_EMERGENCY_DATA } from '../data/mockData';

export const EmergencySection: React.FC = () => {
  const [selectedCampus, setSelectedCampus] = useState(CAMPUS_EMERGENCY_DATA[0]);

  const triageEmergency = [
    'Chest pressure, pain or tightness radiating to arm or jaw',
    'Sudden numbness, weakness in face or arm, difficulty speaking',
    'Severe sudden shortness of breath or anaphylaxis',
    'Uncontrolled bleeding or severe head trauma / loss of consciousness',
    'Suspected poisoning or acute severe abdominal trauma'
  ];

  const triageUrgentCare = [
    'Moderate fever, influenza, or persistent cough without breathing distress',
    'Sprains, minor fractures, or sports joint strains',
    'Minor lacerations requiring sutures / wound care',
    'Mild allergic reactions or skin rashes',
    'Urinary tract discomfort or ear infections'
  ];

  return (
    <div id="emergency-section" className="py-20 sm:py-28 bg-[#FAF9F6] min-h-screen text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Contrast Immediate Emergency Bento Banner */}
        <div className="rounded-[36px] bg-[#0A1128] text-white p-6 sm:p-10 shadow-2xl border-2 border-rose-600/60 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>24/7 Level 1 Trauma & Cardiac Receiving Center</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] tracking-tight mb-3 text-white">
                Immediate Emergency Response
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                If you or someone nearby is experiencing a life-threatening medical event, call emergency services immediately or proceed to the nearest Aurevia Trauma Center.
              </p>
            </div>

            {/* 1-Tap Emergency Call Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              <a
                href="tel:911"
                className="px-8 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-base shadow-lg shadow-rose-900/30 flex items-center justify-center gap-3 transition-transform active:scale-98"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call 911 Direct</span>
              </a>

              <a
                href="tel:+18002273911"
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors font-mono"
              >
                <Ambulance className="w-4 h-4 text-[#4ECDC4]" />
                <span>Hotline: (800) 227-3911</span>
              </a>
            </div>
          </div>
        </div>

        {/* Live ER Wait Times & Campus Sites Bento Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A535C] block mb-1">
                Real-Time Telemetry
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] font-['Manrope']">
                Live ER Waiting Times by Campus
              </h2>
            </div>
            <span className="text-[11px] font-bold text-[#1A535C] bg-[#1A535C]/10 px-3 py-1.5 rounded-full border border-[#1A535C]/20">
              All 3 Campuses Open 24/7
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAMPUS_EMERGENCY_DATA.map((campus) => {
              const isSelected = selectedCampus.id === campus.id;
              return (
                <div
                  key={campus.id}
                  onClick={() => setSelectedCampus(campus)}
                  className={`p-6 rounded-[32px] bg-white border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#1A535C] shadow-lg ring-2 ring-[#4ECDC4]/20'
                      : 'border-gray-200/90 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5568]">
                        {campus.distance} from you
                      </span>
                      <h3 className="text-base font-bold text-[#0A1128] leading-snug font-['Manrope']">
                        {campus.name}
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-2xl bg-[#1A535C]/10 text-[#1A535C]">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Wait Time Bento Indicator */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 mb-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Triage Wait</span>
                      <span className="text-3xl font-extrabold text-[#0A1128] font-['Manrope']">
                        {campus.currentWaitMinutes} <span className="text-sm font-normal text-[#4A5568]">mins</span>
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {campus.capacityStatus} Flow
                    </span>
                  </div>

                  <p className="text-xs text-[#4A5568] mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{campus.address}</span>
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#4A5568]">{campus.traumaLevel.split('&')[0]}</span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(campus.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1A535C] hover:underline flex items-center gap-1"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#4ECDC4]" /> Navigate
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Triage Guidance Bento Box */}
        <div className="p-6 sm:p-8 rounded-[36px] bg-white border border-gray-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] font-['Manrope'] mb-1">
              Clinical Triage Guidance
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568]">
              Not sure whether to visit the Emergency Room or Urgent Care? Use this clinical guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Emergency Room */}
            <div className="p-6 rounded-[28px] bg-rose-50/50 border border-rose-200/80">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                <h4 className="text-base font-bold text-rose-950 font-['Manrope']">
                  Go to Emergency Room (ER)
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {triageEmergency.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urgent Care */}
            <div className="p-6 rounded-[28px] bg-teal-50/50 border border-teal-200/80">
              <div className="flex items-center gap-2 mb-4">
                <HeartPulse className="w-5 h-5 text-teal-700" />
                <h4 className="text-base font-bold text-teal-950 font-['Manrope']">
                  Go to Aurevia Urgent Care
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {triageUrgentCare.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
