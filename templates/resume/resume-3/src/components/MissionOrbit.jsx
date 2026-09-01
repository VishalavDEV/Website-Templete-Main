import React, { useState } from 'react';
import { MISSIONS } from '../data/resumeData';
import { Compass, Cpu, Radio, ShieldCheck, Zap, Pause, Play, RotateCw } from 'lucide-react';

export default function MissionOrbit() {
  const [activeNode, setActiveNode] = useState(MISSIONS[0]);
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);

  // Define 5 orbital positions & radii for abstract visualization
  const orbitNodes = [
    { ...MISSIONS[0], radius: 110, duration: "35s", color: "#38bdf8", strokeDash: "4 2" },
    { ...MISSIONS[1], radius: 160, duration: "50s", color: "#06b6d4", strokeDash: "" },
    { ...MISSIONS[2], radius: 210, duration: "65s", color: "#3b82f6", strokeDash: "8 4" },
    { ...MISSIONS[3], radius: 260, duration: "80s", color: "#0284c7", strokeDash: "2 2" },
    { ...MISSIONS[4], radius: 310, duration: "95s", color: "#0891b2", strokeDash: "6 6" }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background blueprint grid on dark */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest bg-sky-950/70 border border-sky-800/80 px-3 py-1 rounded">
              <Compass className="w-3.5 h-3.5" />
              <span>INTERACTIVE ORBITAL DYNAMICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mt-3 tracking-tight">
              Mission Architecture <span className="text-sky-400">Orbital Map</span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOrbitPaused(!isOrbitPaused)}
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-sky-500 text-xs font-mono-tech text-slate-300 hover:text-white rounded transition-colors"
            >
              {isOrbitPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RESUME ORBIT</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-sky-400" />
                  <span>PAUSE ORBIT</span>
                </>
              )}
            </button>
            <span className="text-xs font-mono-tech text-slate-500 uppercase tracking-wider hidden sm:inline-block">
              [ CLICK NODE TO INSPECT TELEMETRY ]
            </span>
          </div>
        </div>

        {/* Split Layout: Orbit View on Left, Active Mission Telemetry Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Abstract Orbital Map SVG & DOM Nodes */}
          <div className="lg:col-span-7 flex justify-center items-center relative aspect-square max-w-[600px] mx-auto w-full">
            
            {/* SVG Orbit Tracks */}
            <svg viewBox="0 0 700 700" className="w-full h-full absolute inset-0 pointer-events-none">
              {/* Center System Core Graphic */}
              <circle cx="350" cy="350" r="45" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
              <circle cx="350" cy="350" r="30" fill="#0284c7" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
              <circle cx="350" cy="350" r="8" fill="#38bdf8" className="animate-pulse" />

              {/* Orbiting Radius Rings */}
              {orbitNodes.map((node) => (
                <circle
                  key={node.id}
                  cx="350"
                  cy="350"
                  r={node.radius}
                  fill="none"
                  stroke={activeNode?.id === node.id ? "#38bdf8" : "#1e293b"}
                  strokeWidth={activeNode?.id === node.id ? "2" : "1"}
                  strokeDasharray={node.strokeDash}
                  className="transition-colors duration-300"
                />
              ))}

              {/* Active Vector Ray from Core to Active Node */}
              {activeNode && (
                <line
                  x1="350"
                  y1="350"
                  x2={350 + (orbitNodes.find(n => n.id === activeNode.id)?.radius || 110) * Math.cos(-Math.PI/4)}
                  y2={350 + (orbitNodes.find(n => n.id === activeNode.id)?.radius || 110) * Math.sin(-Math.PI/4)}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  opacity="0.8"
                />
              )}
            </svg>

            {/* Central Core Label */}
            <div className="absolute z-10 text-center font-mono-tech select-none pointer-events-none">
              <span className="text-[9px] text-sky-400 block tracking-widest font-bold">SOLBERG-CORE</span>
              <span className="text-[10px] text-slate-300 block font-bold">SYSTEMS BUS</span>
            </div>

            {/* Orbiting Node Container Elements */}
            {orbitNodes.map((node, index) => {
              const isSelected = activeNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: `${node.radius * 2}px`,
                    height: `${node.radius * 2}px`,
                  }}
                >
                  <div
                    className={`w-full h-full rounded-full transition-all ${
                      isOrbitPaused ? "" : index % 2 === 0 ? "animate-orbit-cw" : "animate-orbit-ccw"
                    }`}
                    style={{ animationDuration: node.duration }}
                  >
                    {/* Interactive Node Button positioned on the orbit ring */}
                    <button
                      onClick={() => setActiveNode(node)}
                      className={`pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all duration-300 flex items-center space-x-2 group ${
                        isSelected
                          ? "bg-sky-500 text-slate-950 border-white shadow-[0_0_20px_rgba(56,189,248,0.8)] scale-110 z-20"
                          : "bg-slate-900 text-slate-300 border-slate-700 hover:border-sky-400 hover:text-white"
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-white animate-ping" : "bg-sky-400"}`} />
                      <span className="font-mono-tech text-[10px] uppercase font-bold tracking-wider px-1">
                        {node.name}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}

          </div>

          {/* RIGHT: Active Mission Telemetry Panel */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl relative tech-corner-box">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono-tech text-sky-400 uppercase tracking-widest block">
                  SELECTED MISSION NODE // {activeNode.code}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white tracking-tight mt-0.5">
                  {activeNode.name}
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-sky-950 border border-sky-800 text-sky-300 font-mono-tech text-xs rounded">
                {activeNode.year}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {activeNode.shortDescription}
            </p>

            {/* Active Telemetry Specs Panel */}
            <div className="space-y-3 font-mono-tech text-xs bg-slate-950 p-4 rounded border border-slate-800">
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500 uppercase">TYPE:</span>
                <span className="text-sky-300 font-medium text-right">{activeNode.type}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500 uppercase">SOLBERG ROLE:</span>
                <span className="text-slate-200 font-medium">{activeNode.role}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500 uppercase">STATUS:</span>
                <span className="text-emerald-400 font-bold">{activeNode.status}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 uppercase">PRIMARY PAYLOAD:</span>
                <span className="text-slate-300 text-right truncate max-w-[200px]">{activeNode.specifications.primaryPayload || activeNode.specifications.operatingAltitude || activeNode.specifications.landingPrecision}</span>
              </div>
            </div>

            {/* Highlighted Innovations */}
            <div>
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest block mb-2">
                SYSTEM HIGHLIGHT
              </span>
              <div className="bg-sky-950/40 border border-sky-800/60 p-3 rounded text-xs text-sky-200 flex items-start space-x-2">
                <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{activeNode.highlights[0]}</span>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2 text-right">
              <a
                href="#missions"
                className="text-xs font-mono-tech text-sky-400 hover:text-sky-300 underline uppercase tracking-wider"
              >
                Inspect All 5 Mission Specs →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
