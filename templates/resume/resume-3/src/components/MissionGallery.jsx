import React, { useState } from 'react';
import { MISSIONS } from '../data/resumeData';
import MissionSchematicSVG from './MissionSchematicSVG';
import MissionModal from './MissionModal';
import { Eye, Rocket, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function MissionGallery() {
  const [selectedMission, setSelectedMission] = useState(null);

  return (
    <section id="missions" className="py-24 bg-white relative border-b border-slate-200">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
              <span>02 / MISSIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
              Selected Mission <span className="text-sky-800">Concepts</span>
            </h2>
          </div>
          <p className="text-slate-500 font-mono-tech text-xs max-w-md">
            FICTIONAL MISSION ARCHITECTURE DEMONSTRATIONS SHOWCASING SPACECRAFT SYSTEMS & AUTONOMOUS CONTROL TOPOLOGIES.
          </p>
        </div>

        {/* Featured Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MISSIONS.map((mission, index) => (
            <div
              key={mission.id}
              className={`bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group tech-corner-box ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Card Visual Container */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-200">
                <MissionSchematicSVG type={mission.schematicType} />
                
                {/* HUD Overlay Badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-1 bg-slate-900/90 text-sky-400 font-mono-tech text-xs font-bold rounded border border-slate-700">
                    {mission.code}
                  </span>
                  <span className="px-2 py-1 bg-slate-900/80 text-slate-300 font-mono-tech text-[10px] uppercase tracking-wider rounded">
                    {mission.year}
                  </span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-500/20 text-emerald-300 font-mono-tech text-[10px] uppercase tracking-wider rounded border border-emerald-400/30">
                  {mission.status}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center space-x-2 bg-sky-600 text-white font-mono-tech text-xs font-bold uppercase tracking-wider px-4 py-2 rounded shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Specifications</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-mono-tech text-sky-700 uppercase tracking-wider block font-semibold">
                    {mission.type}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-slate-900 tracking-tight mt-1 group-hover:text-sky-700 transition-colors">
                    {mission.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {mission.shortDescription}
                  </p>
                </div>

                {/* Role & Button Footer */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between font-mono-tech text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">ROLE</span>
                    <span className="font-semibold text-slate-800 text-[11px]">{mission.role}</span>
                  </div>

                  <button
                    onClick={() => setSelectedMission(mission)}
                    className="inline-flex items-center space-x-1.5 text-sky-700 hover:text-sky-900 font-bold uppercase tracking-wider text-xs group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inspect</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Mission Detail Modal */}
      {selectedMission && (
        <MissionModal
          mission={selectedMission}
          onClose={() => setSelectedMission(null)}
        />
      )}
    </section>
  );
}
