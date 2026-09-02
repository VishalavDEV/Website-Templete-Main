import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  Sparkles,
  TrendingUp,
  Moon,
  Droplets,
  Zap,
  Info,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const InsightsView: React.FC = () => {
  const { insights } = useWellness();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredInsights = insights.filter((ins) => {
    if (filterCategory === 'all') return true;
    return ins.category === filterCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Intelligent Lifestyle Analytics
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Personal Wellness Insights
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Data-driven observations connecting your sleep consistency, active movement, hydration, and mental focus.
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-2">
          {['all', 'sleep', 'activity', 'hydration', 'mindset'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Headline Insights (Matching Prompt) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Insight 1: Sleep */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Moon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
              Circadian Timing
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              “Your sleep consistency improved by 14% this week.”
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Going to bed within a 20-minute window each night stabilized your cortisol curve, raising your morning energy scores.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-bold text-emerald-600">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Trend Positive
            </span>
            <span className="text-slate-400">Past 7 days</span>
          </div>
        </div>

        {/* Insight 2: Activity */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
              Circadian Movement
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              “You're most active between 6:00 PM and 8:00 PM.”
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Your aerobic stride rate and workout completion peak in the early evening. Consider scheduling brisk walks during this window.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-bold text-emerald-600">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> High Stride Window
            </span>
            <span className="text-slate-400">Observed</span>
          </div>
        </div>

        {/* Insight 3: Hydration */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Droplets className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
              Hydration Momentum
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              “You've maintained your hydration goal for 5 days.”
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Reaching 2.5L+ consistently is correlated with your lowest reported afternoon sluggishness and improved focus.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-bold text-emerald-600">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 5-Day Streak
            </span>
            <span className="text-slate-400">Target 3.0L</span>
          </div>
        </div>
      </div>

      {/* Detailed Insights Feed */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Lifestyle Observations & Correlated Habits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredInsights.map((ins) => (
            <div
              key={ins.id}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  {ins.category}
                </span>
                <span className="text-slate-400 font-medium">{ins.timestamp}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">{ins.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{ins.detail}</p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Key takeaway: {ins.highlightText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explicit Non-Medical Disclaimer Card */}
      <div className="bg-slate-100/80 p-6 rounded-[2rem] border border-slate-200 flex items-start gap-3.5">
        <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-800">Preventative Wellness Disclaimer</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Vitalia is an everyday lifestyle and longevity companion. All insights, scores, and habits
            are designed to encourage healthy personal routines. They do not constitute medical diagnoses,
            clinical treatment, or prescription therapy.
          </p>
        </div>
      </div>
    </div>
  );
};
