import React from 'react';
import { X, Check, Shield, Cpu, Zap, Activity, Flame } from 'lucide-react';

export default function SpecDrawer({ isOpen, onClose, selectedFeature }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-obsidian-950/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl glass-panel-glow border border-cyber-red/40 p-6 sm:p-8 shadow-2xl overflow-hidden animate-fade-in shadow-neon-red">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyber-red/15 border border-cyber-red/40 flex items-center justify-center text-cyber-crimson shadow-neon-red">
              {selectedFeature ? <selectedFeature.icon className="w-5 h-5" /> : <Flame className="w-5 h-5 text-cyber-red" />}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase">
                {selectedFeature ? 'Tactical Architecture Blueprint' : 'Complete Gaming Architecture'}
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                {selectedFeature ? selectedFeature.title : 'TENFIVE LAPTOP Gaming Architecture'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          
          {selectedFeature ? (
            <div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-cyber-red/30 mb-4">
                <span className="text-xs font-mono text-rose-300 uppercase">Engineered Benchmark:</span>
                <p className="text-lg font-display font-semibold text-cyber-crimson mt-1">
                  {selectedFeature.highlight}
                </p>
                <p className="text-sm font-mono text-slate-300 mt-1">
                  {selectedFeature.details.specs}
                </p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedFeature.details.deepDive}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                The TENFIVE LAPTOP pairs a 180° Lay-Flat liquid-metal hinge with monolithic 3nm neural graphics, delivering unparalleled frame rates for AAA gaming and generative AI.
              </p>
              
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-cyber-red/20">
                  <span className="text-slate-400">Hinge Architecture</span>
                  <p className="text-white font-bold text-sm mt-0.5">180° Lay-Flat Dual-Cam</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-cyber-red/20">
                  <span className="text-slate-400">Thermal Compound</span>
                  <p className="text-white font-bold text-sm mt-0.5">Gallium Liquid Metal</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-cyber-red/20">
                  <span className="text-slate-400">Silicon Process</span>
                  <p className="text-white font-bold text-sm mt-0.5">3nm Monolithic Neural</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-cyber-red/20">
                  <span className="text-slate-400">Display Latency</span>
                  <p className="text-white font-bold text-sm mt-0.5">0.1ms (240Hz OLED)</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2 text-xs font-mono text-rose-300 bg-cyber-red/10 border border-cyber-red/30 p-3 rounded-xl">
            <Shield className="w-4 h-4 shrink-0 text-cyber-red" />
            <span>Full benchmark scores and preorder allocations unlock on official announcement day.</span>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs transition-colors"
          >
            Close Blueprint
          </button>
        </div>

      </div>

    </div>
  );
}
