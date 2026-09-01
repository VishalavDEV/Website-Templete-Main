import React from 'react';
import { X, Cpu, ShieldCheck, Zap, Activity, ExternalLink, Sliders } from 'lucide-react';
import MissionSchematicSVG from './MissionSchematicSVG';

export default function MissionModal({ mission, onClose }) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 text-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative tech-corner-box">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-20">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 bg-sky-500/20 border border-sky-400/40 text-sky-300 font-mono-tech text-xs font-bold rounded">
              {mission.code}
            </span>
            <div>
              <h3 className="text-lg font-heading font-bold uppercase tracking-tight text-white">
                {mission.name}
              </h3>
              <span className="text-[11px] font-mono-tech text-sky-400 block">
                {mission.type} • {mission.year}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8 font-sans">
          
          {/* Top Schematic Blueprint View */}
          <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 relative shadow-inner">
            <div className="aspect-[16/9] w-full">
              <MissionSchematicSVG type={mission.schematicType} />
            </div>
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono-tech text-[10px] uppercase tracking-wider rounded">
              STATUS: {mission.status}
            </div>
          </div>

          {/* Description & Role */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-mono-tech text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                MISSION ARCHITECTURE OVERVIEW
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {mission.fullDescription}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded border border-slate-800 font-mono-tech space-y-3">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">SOLBERG ROLE</span>
                <span className="text-xs font-bold text-sky-300">{mission.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">MISSION YEAR</span>
                <span className="text-xs font-bold text-slate-200">{mission.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">STATUS MATRIX</span>
                <span className="text-xs font-bold text-emerald-400">{mission.status}</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h4 className="text-xs font-mono-tech text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sliders className="w-4 h-4" />
              SYSTEM SPECIFICATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono-tech text-xs">
              {Object.entries(mission.specifications).map(([key, value]) => (
                <div key={key} className="p-3 bg-slate-950 border border-slate-800 rounded">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </span>
                  <span className="text-slate-200 font-medium block mt-1">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono-tech text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              TECHNICAL HIGHLIGHTS & INNOVATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mission.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 bg-slate-950/70 p-3 rounded border border-slate-800/80 text-xs text-slate-300 font-sans"
                >
                  <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fictional Disclaimer */}
          <div className="pt-4 border-t border-slate-800 text-[10px] font-mono-tech text-slate-500 text-center">
            * This mission concept is fictional demonstration content designed for Dr. Arin Solberg's engineering portfolio template.
          </div>

        </div>
      </div>
    </div>
  );
}
