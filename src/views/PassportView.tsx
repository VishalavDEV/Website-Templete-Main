import React from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  FileBadge,
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Moon,
  Droplets,
  Apple,
  Footprints,
  Share2,
} from 'lucide-react';

export const PassportView: React.FC = () => {
  const { userName, metrics, habits, achievements, showToast } = useWellness();

  const unlockedBadges = achievements.filter((a) => a.unlocked);

  const handleShare = () => {
    showToast('Health & Wellness Passport summary copied to clipboard!');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Personal Lifestyle Identity
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Health & Wellness Passport
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Your verified summary of everyday movement, metabolic nutrition, restorative sleep, and habit consistency.
          </p>
        </div>

        <button
          onClick={handleShare}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <Share2 className="w-4 h-4 text-emerald-600" />
          <span>Share Wellness Badge</span>
        </button>
      </div>

      {/* Main Passport Card */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Passport Header Strip */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center text-emerald-300 font-black text-2xl shadow-inner">
              {userName.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold">{userName} Morgan</h2>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-md">
                  Active
                </span>
              </div>
              <p className="text-xs text-emerald-200 font-medium mt-0.5">
                Vitalia Citizen #VIT-8842 · Gold Lifestyle Tier
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white/10 px-5 py-3 rounded-2xl border border-white/10">
            <div className="text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 block">
                Index
              </span>
              <span className="text-2xl font-black">{metrics.wellnessScore} / 100</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 block">
                Milestones
              </span>
              <span className="text-2xl font-black">{unlockedBadges.length}</span>
            </div>
          </div>
        </div>

        {/* Passport Details Body */}
        <div className="p-8 space-y-8">
          {/* Section 1: Active Lifestyle Goals */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Core Longevity Commitments
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-orange-600 uppercase flex items-center gap-1">
                  <Footprints className="w-3.5 h-3.5" /> Movement Goal
                </span>
                <div className="text-base font-black text-slate-900 mt-1">10,000 Steps / Day</div>
                <div className="text-xs text-slate-500 mt-0.5">Currently: {metrics.steps.toLocaleString()}</div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-blue-600 uppercase flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5" /> Hydration Goal
                </span>
                <div className="text-base font-black text-slate-900 mt-1">3.0 Liters Clean Water</div>
                <div className="text-xs text-slate-500 mt-0.5">Currently: {metrics.waterLiters}L logged</div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-indigo-600 uppercase flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5" /> Sleep Goal
                </span>
                <div className="text-base font-black text-slate-900 mt-1">8.0 Hours Rest</div>
                <div className="text-xs text-slate-500 mt-0.5">Consistency: 91% target met</div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-emerald-600 uppercase flex items-center gap-1">
                  <Apple className="w-3.5 h-3.5" /> Nutrition Goal
                </span>
                <div className="text-base font-black text-slate-900 mt-1">Whole Foods & No Sugar</div>
                <div className="text-xs text-slate-500 mt-0.5">4-day streak maintained</div>
              </div>
            </div>
          </div>

          {/* Section 2: Fitness Achievements & Badges */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              Fitness & Habit Achievements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all ${
                    ach.unlocked
                      ? 'bg-emerald-50/50 border-emerald-200'
                      : 'bg-slate-50/50 border-slate-100 opacity-60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      ach.unlocked
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-slate-900">{ach.title}</h4>
                      {ach.unlocked && (
                        <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-sm">
                          Unlocked
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight mt-1">{ach.description}</p>
                    {ach.unlockedDate && (
                      <span className="text-[10px] text-emerald-700 font-bold mt-1 block">
                        Achieved {ach.unlockedDate}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Habit Streaks Summary */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">
              Active Habit Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {habits.slice(0, 3).map((h) => (
                <div key={h.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">{h.title}</span>
                    <span className="text-[10px] text-slate-400">{h.targetDescription}</span>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                    {h.streak}d
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
