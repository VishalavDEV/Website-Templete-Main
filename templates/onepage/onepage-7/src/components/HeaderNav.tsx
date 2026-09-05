import React from 'react';
import { ViewMode } from '../types';
import { FileText, Globe, Columns, Copy, Check, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { PRD_MARKDOWN_EXPORT } from '../data/prdContent';
import { audioEngine } from '../utils/audioEngine';

interface HeaderNavProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  viewMode,
  onViewModeChange,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PRD_MARKDOWN_EXPORT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed top-2 sm:top-3 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-16px)] flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#050505]/95 backdrop-blur-3xl border border-white/20 rounded-full shadow-[0_0_50px_rgba(45,212,191,0.2)]">
      {/* View Mode Toggle Pill */}
      <div className="flex items-center gap-1 bg-black/60 p-0.5 sm:p-1 rounded-full border border-white/10">
        <button
          onClick={() => onViewModeChange('website')}
          id="mode-website-btn"
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
            viewMode === 'website'
              ? 'bg-teal-400 text-black shadow-[0_0_20px_rgba(45,212,191,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span>3D Website</span>
        </button>

        <button
          onClick={() => onViewModeChange('prd')}
          id="mode-prd-btn"
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
            viewMode === 'prd'
              ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span>PRD Spec</span>
        </button>

        <button
          onClick={() => onViewModeChange('split')}
          id="mode-split-btn"
          className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
            viewMode === 'split'
              ? 'bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Columns className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">Split / Inspector</span>
          <span className="sm:hidden">Split</span>
        </button>
      </div>

      <div className="h-4 w-px bg-white/20 mx-0.5 hidden md:block" />

      {/* Audio Drone Quick Action */}
      <button
        onClick={onToggleAudio}
        id="header-audio-toggle"
        title="Toggle 432Hz Acoustic Drone"
        className={`p-1.5 sm:p-2 rounded-full transition-all shrink-0 ${
          isAudioPlaying
            ? 'bg-teal-500/20 text-teal-300 border border-teal-400/40 shadow-[0_0_15px_rgba(45,212,191,0.25)]'
            : 'text-zinc-400 hover:text-white hover:bg-white/10'
        }`}
      >
        {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
      </button>

      {/* Quick Copy PRD Button */}
      <button
        onClick={handleCopy}
        id="header-quick-copy-prd"
        title="Copy PRD Markdown"
        className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-zinc-200 hover:text-white rounded-full text-xs font-medium border border-white/15 transition-all shadow-sm shrink-0"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
        <span className="hidden lg:inline">{copied ? 'Copied!' : 'Copy PRD'}</span>
      </button>
    </div>
  );
};
