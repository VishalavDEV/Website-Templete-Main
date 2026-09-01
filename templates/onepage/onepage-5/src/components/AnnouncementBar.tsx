import React from 'react';
import { X, TrendingUp, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onDismiss: () => void;
  isVisible: boolean;
  onExplore?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onDismiss, isVisible, onExplore }) => {
  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 relative z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 mx-auto sm:mx-0 font-mono">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <TrendingUp className="w-3 h-3 mr-1" />
            2026 STRATEGY INDEX
          </span>
          <span className="text-slate-300 text-xs hidden sm:inline">
            Executive Report: Turning Enterprise Modernization Into Measurable Valuation Growth.
          </span>
          <button
            onClick={onExplore}
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-bold tracking-wider uppercase text-[11px] ml-1 transition-colors group"
          >
            <span>Read Executive Brief</span>
            <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <button
          onClick={onDismiss}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 hidden sm:flex items-center justify-center"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
