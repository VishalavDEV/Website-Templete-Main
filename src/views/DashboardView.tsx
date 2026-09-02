import React from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  TrendingUp,
  Droplets,
  Footprints,
  Dumbbell,
  Moon,
  Smile,
  Check,
  Plus,
  ArrowRight,
  Sparkles,
  Flame,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    userName,
    metrics,
    habits,
    toggleHabit,
    challenges,
    insights,
    setActiveTab,
    setIsLogActivityOpen,
    addWater,
    addSteps,
  } = useWellness();

  const activeChallenge = challenges.find((c) => c.joined) || challenges[0];
  const primaryInsight = insights[0];

  // SVG ring calculations for Wellness score
  // radius = 88, circumference = 2 * Math.PI * 88 ~= 552.9
  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const scorePercent = Math.min(100, Math.max(0, metrics.wellnessScore));
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

  // Completed habits calculation
  const completedHabitsCount = habits.filter((h) => h.completed).length;
  const habitPercentage = Math.round((completedHabitsCount / Math.max(1, habits.length)) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Greeting and Quick CTA Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Good Morning, {userName} 👋
          </h1>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            You've completed <span className="font-bold text-emerald-600">{habitPercentage}%</span> of your daily wellness goals so far today.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            id="dash-insights-btn"
            onClick={() => setActiveTab('insights')}
            className="px-5 py-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl font-semibold text-slate-700 text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            Personal Insights
          </button>
          <button
            id="dash-log-activity-btn"
            onClick={() => setIsLogActivityOpen(true)}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-lg shadow-emerald-200 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Log Activity</span>
          </button>
        </div>
      </div>

      {/* Main 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* COLUMN 1: 4 COLUMNS - Wellness Score & Daily Vitals */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Wellness Score Card with Geometric Circular Ring */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center relative">
            <div className="w-full flex items-center justify-between mb-4">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                Daily Wellness Score
              </span>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                LIVE METRIC
              </span>
            </div>

            <div className="relative flex items-center justify-center my-2">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="#F1F5F9"
                  strokeWidth="13"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="#10B981"
                  strokeWidth="13"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-6xl font-black text-slate-900 tracking-tighter">
                  {metrics.wellnessScore}
                </span>
                <span className="text-xs font-black text-emerald-600 tracking-wider mt-0.5">
                  {metrics.wellnessScore >= 80 ? 'EXCELLENT' : metrics.wellnessScore >= 65 ? 'BALANCED' : 'BUILDING'}
                </span>
              </div>
            </div>

            {/* Sub stats */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-x-8 gap-y-2 w-full text-center">
              <div>
                <div className="text-2xl font-extrabold text-slate-900">+12%</div>
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-tight">
                  vs last week
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">92nd</div>
                <div className="text-[11px] text-slate-400 uppercase font-bold tracking-tight">
                  percentile
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metric Tiles: Hydration & Steps */}
          <div className="grid grid-cols-2 gap-4">
            {/* Hydration Card */}
            <div className="bg-blue-50/70 p-5 rounded-3xl border border-blue-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5" /> Hydration
                  </span>
                  <button
                    onClick={() => addWater(0.25)}
                    className="w-5 h-5 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                    title="Quick add 250ml"
                  >
                    +
                  </button>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  {metrics.waterLiters}{' '}
                  <span className="text-xs font-semibold text-slate-500">/ {metrics.waterGoalLiters} L</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-blue-200/60 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, Math.round((metrics.waterLiters / metrics.waterGoalLiters) * 100))}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Steps Card */}
            <div className="bg-orange-50/70 p-5 rounded-3xl border border-orange-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-600 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1">
                    <Footprints className="w-3.5 h-3.5" /> Steps
                  </span>
                  <button
                    onClick={() => addSteps(500)}
                    className="w-5 h-5 rounded-full bg-orange-200 hover:bg-orange-300 text-orange-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                    title="Quick add 500 steps"
                  >
                    +
                  </button>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  {metrics.steps.toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-orange-600/80 font-semibold mt-2">
                Goal: {metrics.stepsGoal.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Sleep & Exercise Mini Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50/70 p-5 rounded-3xl border border-indigo-100/80">
              <div className="text-indigo-600 font-extrabold text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
                <Moon className="w-3.5 h-3.5" /> Sleep Rest
              </div>
              <div className="text-2xl font-black text-slate-900">
                {metrics.sleepHours}h
              </div>
              <div className="text-xs text-indigo-500 font-semibold mt-1">
                {metrics.sleepQuality}% Recovery
              </div>
            </div>

            <div className="bg-emerald-50/70 p-5 rounded-3xl border border-emerald-100/80">
              <div className="text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
                <Dumbbell className="w-3.5 h-3.5" /> Movement
              </div>
              <div className="text-2xl font-black text-slate-900">
                {metrics.exerciseMinutes}m
              </div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">
                Goal: {metrics.exerciseGoalMinutes}m
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: 5 COLUMNS - Today's Habit Streaks & Energy Levels */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                Today's Habit Streaks
              </h3>
              <button
                onClick={() => setActiveTab('habits')}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                View All ({habits.length}) →
              </button>
            </div>

            {/* Habits list */}
            <div className="space-y-3 flex-1">
              {habits.slice(0, 4).map((habit) => (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer group ${
                    habit.completed
                      ? 'bg-slate-50/80 border-slate-100'
                      : 'bg-white border-slate-200/80 hover:border-emerald-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                        habit.completed
                          ? 'bg-emerald-500 text-white shadow-xs'
                          : 'border-2 border-slate-300 group-hover:border-emerald-500'
                      }`}
                    >
                      {habit.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="truncate">
                      <span
                        className={`text-xs sm:text-sm font-semibold block truncate ${
                          habit.completed ? 'text-slate-700 line-through opacity-80' : 'text-slate-800'
                        }`}
                      >
                        {habit.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {habit.targetDescription}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      habit.completed
                        ? 'bg-emerald-100 text-emerald-800 font-extrabold'
                        : 'text-slate-400 bg-slate-100'
                    }`}
                  >
                    {habit.completed ? `${habit.streak} DAY STREAK` : 'PENDING'}
                  </span>
                </div>
              ))}
            </div>

            {/* Weekly Energy Levels Bar Chart */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Vitality & Energy Rhythm</h4>
                  <span className="text-[11px] text-slate-400 font-medium">Last 7 recorded days</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  PEAK: 8.8 / 10
                </span>
              </div>

              <div className="flex items-end gap-2 sm:gap-3 h-24 pt-2">
                {[
                  { day: 'Mon', val: 65, color: 'bg-slate-100' },
                  { day: 'Tue', val: 75, color: 'bg-slate-100' },
                  { day: 'Wed', val: 92, color: 'bg-emerald-400' },
                  { day: 'Thu', val: 80, color: 'bg-emerald-200' },
                  { day: 'Fri', val: 60, color: 'bg-slate-100' },
                  { day: 'Sat', val: 88, color: 'bg-emerald-300' },
                  { day: 'Sun', val: 84, color: 'bg-emerald-500' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${bar.color}`}
                      style={{ height: `${bar.val}%` }}
                    ></div>
                    <span className="text-[10px] font-bold text-slate-400">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: 3 COLUMNS - Deep Emerald Challenge & Personal Insight */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Active Challenge Card (Theme Match: bg-emerald-900) */}
          <div className="bg-emerald-900 text-white p-8 rounded-[2.5rem] flex-1 flex flex-col justify-between shadow-xl shadow-emerald-900/20 relative overflow-hidden">
            {/* Geometric diamond watermark */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/5 rounded-3xl rotate-45 pointer-events-none"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300/80">
                  Active Challenge
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>

              <h3 className="text-2xl font-extrabold leading-tight text-white">
                {activeChallenge.title}
              </h3>

              <div className="text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                <span>Day {activeChallenge.currentDay} of {activeChallenge.totalDays}</span>
                <span>•</span>
                <span className="text-emerald-200 font-medium">Sprint Ongoing</span>
              </div>

              <p className="text-xs text-emerald-100/80 leading-relaxed">
                {activeChallenge.description}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {/* Community Avatars */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-900 bg-slate-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-900 bg-slate-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-900 bg-slate-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-900 bg-emerald-500 flex items-center justify-center text-[10px] font-bold">
                    +{(activeChallenge.participantsCount / 1000).toFixed(1)}k
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-300">Active Participants</span>
              </div>

              <button
                onClick={() => setActiveTab('challenges')}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Open Challenge Tasks
              </button>
            </div>
          </div>

          {/* Lifestyle Wellness Insights Card */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Daily Wellness Insight
                </span>
                <Sparkles className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-blue-500 rounded-full shrink-0"></div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {primaryInsight?.detail || 'Your sleep consistency improved by 14% this week.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('insights')}
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center justify-between w-full"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
