import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldAlert } from 'lucide-react';

export const Settings: React.FC = () => {
  const { settings, updateSettings, resetState, showToast } = useApp();

  // Profile forms simulation
  const [profName, setProfName] = useState('Elena Rostova');
  const [profEmail, setProfEmail] = useState('elena.r@sprintadmin.io');
  const [profTitle, setProfTitle] = useState('VP of Engineering');

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('success', 'Profile Updated', 'Personal profile information saved successfully.');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header Panel */}
      <div>
        <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
          System Parameters & Settings
        </h2>
        <p className="text-xs text-slate-500 font-mono mt-0.5">Configure core workspace preferences, motion settings, keyboard shortcut lists, and profile parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Profile Settings form */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-5 border border-blue-100 bg-white rounded-xl space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight font-mono">Operator Profile</h3>
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Full Name</label>
                  <input 
                    type="text" 
                    value={profName}
                    onChange={(e) => setProfName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Communications Email</label>
                  <input 
                    type="email" 
                    value={profEmail}
                    onChange={(e) => setProfEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Designated Title</label>
                <input 
                  type="text" 
                  value={profTitle}
                  onChange={(e) => setProfTitle(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
                />
              </div>

              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
              >
                Save Profile Parameters
              </button>
            </form>
          </div>

          {/* Accessibility Settings */}
          <div className="p-5 border border-blue-100 bg-white rounded-xl space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight font-mono">Accessibility & Layout</h3>
            
            <div className="space-y-4 text-xs">
              {/* Density selector */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] font-mono">DENSE INTERFACE</span>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-mono">Tighten tables, padding calculations and spacing matrices.</p>
                </div>
                <button
                  onClick={() => {
                    updateSettings({ denseUi: !settings.denseUi });
                    showToast('info', 'Dense UI Adjusted', `Workspace spacing adjusted.`);
                  }}
                  className={`px-3 py-1 font-bold rounded-lg cursor-pointer transition font-mono text-xs ${
                    settings.denseUi ? 'bg-blue-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {settings.denseUi ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* Sound alert triggers */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] font-mono">AUDIT SOUND TRIGGERS</span>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-mono">Trigger mechanical alert chimes upon system warnings.</p>
                </div>
                <button
                  onClick={() => {
                    updateSettings({ alertSound: !settings.alertSound });
                    showToast('info', 'Sound Adjusted', `Sound indicators tuned.`);
                  }}
                  className={`px-3 py-1 font-bold rounded-lg cursor-pointer transition font-mono text-xs ${
                    settings.alertSound ? 'bg-blue-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {settings.alertSound ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right pane settings (Theme and motion) */}
        <div className="space-y-6">
          {/* Animation Motion card */}
          <div className="p-5 border border-blue-100 bg-white rounded-xl space-y-4 shadow-xs">
            <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-mono">Motion Language</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => updateSettings({ motion: 'full' })}
                className={`p-3 border rounded-xl flex flex-col items-center gap-2 cursor-pointer transition font-mono ${
                  settings.motion === 'full' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold' 
                    : 'border-blue-100 bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider">Full Motion</span>
              </button>
              <button
                onClick={() => updateSettings({ motion: 'reduced' })}
                className={`p-3 border rounded-xl flex flex-col items-center gap-2 cursor-pointer transition font-mono ${
                  settings.motion === 'reduced' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold' 
                    : 'border-blue-100 bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider">Reduced</span>
              </button>
            </div>
          </div>

          {/* DB Reset Trigger */}
          <div className="p-5 border border-rose-200 bg-rose-50/50 rounded-xl space-y-4 text-center shadow-xs">
            <ShieldAlert className="h-8 w-8 text-rose-500 mx-auto" />
            <div>
              <span className="block text-xs font-bold text-rose-800 uppercase tracking-wider font-mono">Wipe State Database</span>
              <p className="text-[11px] text-rose-600 mt-1 font-mono">Clears all cached project, user, contact and transactions back to standard defaults.</p>
            </div>
            <button
              onClick={() => {
                resetState();
              }}
              className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono transition"
            >
              Reset Session State
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
