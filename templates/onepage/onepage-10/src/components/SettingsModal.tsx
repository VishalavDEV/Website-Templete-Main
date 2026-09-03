import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Settings,
  Sun,
  Moon,
  Laptop,
  RotateCcw,
  Sparkles,
  Sliders,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const SettingsModal: React.FC = () => {
  const {
    isSettingsOpen,
    setIsSettingsOpen,
    preferences,
    updatePreferences,
    resetPreferences,
    theme,
    setTheme,
    addToast
  } = useApp();

  if (!isSettingsOpen) return null;

  const handleReset = () => {
    resetPreferences();
    addToast({
      type: 'info',
      title: 'Preferences Restored',
      message: 'Default enterprise settings have been reapplied.'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-md bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Workspace Preferences</h3>
              <p className="text-xs text-slate-400">Personalize view density & UI behaviors</p>
            </div>
          </div>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close preferences"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Theme Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Color Aesthetic</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTheme('dark')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-[#08080A] border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Moon className="w-4 h-4 text-indigo-400" />
                <span>Obsidian Dark</span>
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all ${
                  theme === 'light'
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-[#08080A] border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all ${
                  theme === 'system'
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-[#08080A] border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Laptop className="w-4 h-4 text-indigo-400" />
                <span>System</span>
              </button>
            </div>
          </div>

          {/* Density & Animations */}
          <div className="space-y-3 pt-3 border-t border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-white">Fluid Animations & Transitions</h4>
                <p className="text-[11px] text-slate-400">Micro-interactions and glowing neural effects</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.animations}
                onChange={e => updatePreferences({ animations: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-500 focus:ring-indigo-400 bg-[#08080A] border-white/10 accent-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-white">Compact Dashboard Density</h4>
                <p className="text-[11px] text-slate-400">Maximize metric cards and telemetry surface area</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.compactMode}
                onChange={e => updatePreferences({ compactMode: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-500 focus:ring-indigo-400 bg-[#08080A] border-white/10 accent-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-white">Autonomous Telemetry Alerts</h4>
                <p className="text-[11px] text-slate-400">Real-time simulation toasts for workflow cycles</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.notificationsEnabled}
                onChange={e => updatePreferences({ notificationsEnabled: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-500 focus:ring-indigo-400 bg-[#08080A] border-white/10 accent-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#08080A] border-t border-white/5 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="px-5 py-2 bg-white hover:bg-slate-200 text-black rounded-full text-xs font-bold transition-all shadow-sm"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
