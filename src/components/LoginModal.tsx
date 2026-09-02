import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  X,
  UserCheck,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Home,
  LayoutDashboard,
  Check,
} from 'lucide-react';

export const LoginModal: React.FC = () => {
  const {
    isLoginModalOpen,
    setIsLoginModalOpen,
    userName,
    setUserName,
    setActiveTab,
    showToast,
  } = useWellness();

  const [inputName, setInputName] = useState(userName || 'Alex');
  const [selectedFocus, setSelectedFocus] = useState('Longevity & Energy');
  const [landingPreference, setLandingPreference] = useState<'home' | 'dashboard'>('home');

  if (!isLoginModalOpen) return null;

  const focusOptions = [
    'Longevity & Energy',
    'Daily Fitness & Mobility',
    'Deep Rest & Sleep',
    'Mindful Stress Resilience',
    'Whole Food Nutrition',
  ];

  const handleLogin = (destination: 'home' | 'dashboard') => {
    const trimmed = inputName.trim() || 'Alex';
    setUserName(trimmed);
    setIsLoginModalOpen(false);
    setActiveTab(destination);
    showToast(`Welcome, ${trimmed}! Logged in successfully. Default landing set to Home.`);
  };

  return (
    <div
      id="login-modal-backdrop"
      onClick={() => setIsLoginModalOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-white rounded-[2rem] sm:rounded-[2.5rem] max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-slate-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 -z-0 pointer-events-none"></div>

        {/* Close Button */}
        <button
          id="login-modal-close-btn"
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin('home'); }} className="relative z-10 space-y-6">
          {/* Header */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Member Portal</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Sign In to Vitalia
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Access your personalized lifestyle companion, habit streaks, and wellness metrics.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Your Preferred Name / Profile
              </label>
              <div className="relative">
                <input
                  id="login-name-input"
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
                <div className="absolute right-3.5 top-3 text-emerald-600">
                  <UserCheck className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Primary Focus Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Primary Lifestyle Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {focusOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedFocus(opt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedFocus === opt
                        ? 'bg-emerald-500 text-white shadow-xs shadow-emerald-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Default Landing Preference */}
            <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>Default View on Login: Home</span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 font-extrabold px-1.5 py-0.2 rounded-md">
                        Active
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      The modern lifestyle platform overview is loaded first.
                    </p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              id="login-submit-home-btn"
              type="submit"
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <Home className="w-4 h-4" />
              <span>Log In to Home View (Default)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="login-submit-dashboard-btn"
              type="button"
              onClick={() => handleLogin('dashboard')}
              className="w-full py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs rounded-2xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4 text-slate-500" />
              <span>Go Straight to Daily Tracking Dashboard</span>
            </button>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted local session. No medical record required.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
