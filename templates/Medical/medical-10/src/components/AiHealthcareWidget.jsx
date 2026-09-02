import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Shield, Cpu, Zap, Eye, AlertCircle } from "lucide-react";
import AnimatedEcgWave from "./AnimatedEcgWave";

export default function AiHealthcareWidget() {
  const [pulseRate, setPulseRate] = useState(72);
  const [selectedScan, setSelectedScan] = useState("brain");

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseRate(prev => 70 + Math.floor(Math.random() * 8));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 p-6 lg:p-8 shadow-2xl glow-cyan relative overflow-hidden">
      {/* Background neon grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 animate-pulse">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
              AICarePlus AI Diagnostic Suite
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Live Simulation
              </span>
            </h4>
            <p className="text-xs text-slate-400">Neural Network V4.8 - Real-Time Biometric Analysis</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>System Active</span>
          </span>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live ECG & Pulse Monitor */}
        <div className="lg:col-span-2 glass-card p-5 rounded-2xl border border-white/10 bg-slate-950/60 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-slate-300 text-sm font-medium">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
              <span>Real-Time Electrocardiogram (ECG)</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-mono text-cyan-400">{pulseRate}</span>
              <span className="text-xs text-slate-400 ml-1 font-mono">BPM</span>
            </div>
          </div>

          {/* ECG Wave Component */}
          <div className="h-32 my-2 bg-slate-900/90 rounded-xl border border-cyan-500/20 p-2 relative overflow-hidden flex items-center">
            <AnimatedEcgWave strokeColor="#06b6d4" className="w-full h-full" />
            <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
              QRS Complex: Normal (0.08s)
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-slate-400">Oxygen Sat.</div>
              <div className="text-base font-bold text-white font-mono mt-0.5">99% SpO2</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-slate-400">Blood Pressure</div>
              <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">118/78</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-slate-400">AI Risk Score</div>
              <div className="text-base font-bold text-cyan-300 font-mono mt-0.5">0.02 (Optimal)</div>
            </div>
          </div>
        </div>

        {/* Diagnostic Scan Selector & Preview */}
        <div className="glass-card p-5 rounded-2xl border border-white/10 bg-slate-950/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-slate-300 text-sm font-medium mb-3">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Diagnostic Imaging Model</span>
            </div>

            {/* Selector tabs */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {["brain", "heart", "spine"].map((scan) => (
                <button
                  key={scan}
                  onClick={() => setSelectedScan(scan)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold uppercase transition-all ${
                    selectedScan === scan
                      ? "bg-cyan-500 text-white shadow-md glow-cyan"
                      : "bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {scan}
                </button>
              ))}
            </div>

            {/* Interactive Image Preview Box */}
            <div className="relative h-36 rounded-xl overflow-hidden border border-white/10 group">
              <img
                src={
                  selectedScan === "brain"
                    ? "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80"
                    : selectedScan === "heart"
                    ? "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
                    : "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&q=80"
                }
                alt="AI Scan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* Scan overlay HUD lines */}
              <div className="absolute top-2 left-2 text-[10px] font-mono bg-slate-950/80 px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/30">
                3D Volumetric Reconstruction
              </div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Zap className="w-3 h-3" /> No Anomalies Found
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-slate-400 text-xs flex items-center justify-between">
            <span>Accuracy Index:</span>
            <span className="font-mono text-white font-semibold">99.8% Verified</span>
          </div>
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div className="mt-6 flex items-center space-x-2 text-[11px] text-slate-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
        <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <span>
          Visual AI demonstration. AICarePlus integrates validated clinical decision-support models alongside board-certified medical teams.
        </span>
      </div>
    </div>
  );
}
