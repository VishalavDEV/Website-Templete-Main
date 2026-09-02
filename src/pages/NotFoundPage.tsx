import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, Home, Compass } from 'lucide-react';
import { audioService } from '../utils/audio';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/40">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404 // Signal Lost</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-white font-mono tracking-tight">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Looks like this page took a wrong turn.
        </h2>

        <p className="text-sm text-gray-400 leading-relaxed font-mono">
          The requested coordinate or project file does not exist or has been relocated to our private vault.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              audioService.playClick();
              onNavigate('/');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => {
              audioService.playClick();
              onNavigate('/work');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-violet-400" />
            <span>Explore Work</span>
          </button>
        </div>
      </div>
    </div>
  );
}
