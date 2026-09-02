import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import { MoodType } from '../types/wellness';
import { X, Droplets, Footprints, Dumbbell, Smile, Moon } from 'lucide-react';

export const LogActivityModal: React.FC = () => {
  const {
    isLogActivityOpen,
    setIsLogActivityOpen,
    addWater,
    addSteps,
    logExercise,
    setMood,
    updateSleep,
  } = useWellness();

  const [activeType, setActiveType] = useState<'water' | 'steps' | 'workout' | 'mood' | 'sleep'>('water');
  const [customSteps, setCustomSteps] = useState('');
  const [customWorkoutMin, setCustomWorkoutMin] = useState('30');
  const [workoutCategory, setWorkoutCategory] = useState('Brisk Walk');
  const [selectedMood, setSelectedMood] = useState<MoodType>('energized');
  const [moodNote, setMoodNote] = useState('');
  const [sleepHoursInput, setSleepHoursInput] = useState('7.5');
  const [sleepQualityInput, setSleepQualityInput] = useState('85');

  if (!isLogActivityOpen) return null;

  return (
    <div
      onClick={() => setIsLogActivityOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 w-full max-w-lg max-h-[92vh] overflow-y-auto flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
              Quick Log Activity
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Record Today's Wellness</h3>
          </div>
          <button
            onClick={() => setIsLogActivityOpen(false)}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Activity Type Selector */}
        <div className="flex border-b border-slate-100 bg-slate-50/70 p-2 gap-1 overflow-x-auto sticky top-[73px] bg-white z-10">
          <button
            onClick={() => setActiveType('water')}
            className={`flex-1 min-w-[72px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeType === 'water'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            Water
          </button>
          <button
            onClick={() => setActiveType('steps')}
            className={`flex-1 min-w-[72px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeType === 'steps'
                ? 'bg-white text-orange-600 shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Footprints className="w-3.5 h-3.5" />
            Steps
          </button>
          <button
            onClick={() => setActiveType('workout')}
            className={`flex-1 min-w-[72px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeType === 'workout'
                ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5" />
            Workout
          </button>
          <button
            onClick={() => setActiveType('mood')}
            className={`flex-1 min-w-[72px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeType === 'mood'
                ? 'bg-white text-purple-600 shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Smile className="w-3.5 h-3.5" />
            Mood
          </button>
          <button
            onClick={() => setActiveType('sleep')}
            className={`flex-1 min-w-[72px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeType === 'sleep'
                ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            Sleep
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-5">
          {/* WATER LOGGING */}
          {activeType === 'water' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">
                Tap to add fresh filtered water or herbal infusion to your daily hydration goal.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '+250 ml', val: 0.25, sub: 'Small Glass' },
                  { label: '+500 ml', val: 0.5, sub: 'Standard Bottle' },
                  { label: '+750 ml', val: 0.75, sub: 'Sport Flask' },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => {
                      addWater(item.val);
                      setIsLogActivityOpen(false);
                    }}
                    className="p-4 bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200/60 rounded-2xl text-center group transition-all cursor-pointer"
                  >
                    <div className="text-blue-600 font-extrabold text-lg group-hover:scale-105 transition-transform">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-blue-500 font-medium mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-2 items-center pt-2">
                <button
                  onClick={() => {
                    addWater(1.0);
                    setIsLogActivityOpen(false);
                  }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md shadow-blue-200 transition-all cursor-pointer"
                >
                  Add Full +1.0 Liter
                </button>
              </div>
            </div>
          )}

          {/* STEPS LOGGING */}
          {activeType === 'steps' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">
                Add outdoor steps, treadmill strides, or walking intervals to your daily count.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[1000, 2500, 5000].map((count) => (
                  <button
                    key={count}
                    onClick={() => {
                      addSteps(count);
                      setIsLogActivityOpen(false);
                    }}
                    className="p-4 bg-orange-50/70 hover:bg-orange-100/70 border border-orange-200/60 rounded-2xl text-center group transition-all cursor-pointer"
                  >
                    <div className="text-orange-600 font-extrabold text-lg group-hover:scale-105 transition-transform">
                      +{count.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-orange-500 font-medium mt-0.5">Steps</div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 items-center pt-1">
                <input
                  type="number"
                  placeholder="Custom steps (e.g. 3500)"
                  value={customSteps}
                  onChange={(e) => setCustomSteps(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500"
                />
                <button
                  disabled={!customSteps || Number(customSteps) <= 0}
                  onClick={() => {
                    addSteps(Number(customSteps));
                    setIsLogActivityOpen(false);
                  }}
                  className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white rounded-xl font-bold text-xs shadow-md shadow-orange-200 transition-all cursor-pointer"
                >
                  Log
                </button>
              </div>
            </div>
          )}

          {/* WORKOUT LOGGING */}
          {activeType === 'workout' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Movement Activity</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Morning Yoga', 'Brisk Walk', 'Core Strength', 'Cycling', 'Stretching', 'HIIT'].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setWorkoutCategory(cat)}
                        className={`py-2 px-2 text-xs rounded-xl font-semibold border transition-all cursor-pointer ${
                          workoutCategory === cat
                            ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Duration (Minutes)</label>
                <div className="flex gap-2">
                  {['15', '25', '30', '45', '60'].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => setCustomWorkoutMin(mins)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        customWorkoutMin === mins
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  logExercise(Number(customWorkoutMin) || 30, workoutCategory);
                  setIsLogActivityOpen(false);
                }}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-emerald-200 transition-all cursor-pointer"
              >
                Log {workoutCategory} ({customWorkoutMin} mins)
              </button>
            </div>
          )}

          {/* MOOD LOGGING */}
          {activeType === 'mood' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">
                Check in with your emotional and mental energy right now.
              </p>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { key: 'energized' as MoodType, emoji: '⚡', label: 'Energized' },
                  { key: 'calm' as MoodType, emoji: '🌿', label: 'Calm' },
                  { key: 'focused' as MoodType, emoji: '🎯', label: 'Focused' },
                  { key: 'grateful' as MoodType, emoji: '✨', label: 'Grateful' },
                  { key: 'tired' as MoodType, emoji: '🌙', label: 'Tired' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedMood(item.key)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedMood === item.key
                        ? 'bg-purple-50 border-purple-300 ring-2 ring-purple-200'
                        : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <div className="text-[10px] font-bold text-slate-700">{item.label}</div>
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Daily Reflection Note (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Cleared my mind with morning sun and hydration..."
                  value={moodNote}
                  onChange={(e) => setMoodNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                onClick={() => {
                  setMood(selectedMood, moodNote || undefined);
                  setIsLogActivityOpen(false);
                }}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-md shadow-purple-200 transition-all cursor-pointer"
              >
                Save Mood Check-in
              </button>
            </div>
          )}

          {/* SLEEP LOGGING */}
          {activeType === 'sleep' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Duration (Hours)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={sleepHoursInput}
                    onChange={(e) => setSleepHoursInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Recovery Score (%)</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={sleepQualityInput}
                    onChange={(e) => setSleepQualityInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100 text-xs text-indigo-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-indigo-600" /> Circadian Rhythm Tip
                </span>
                <p className="text-indigo-700 leading-relaxed">
                  Consistent bedtime within 30 minutes enhances slow-wave deep sleep and daytime physical recovery.
                </p>
              </div>

              <button
                onClick={() => {
                  updateSleep(Number(sleepHoursInput) || 7.5, Number(sleepQualityInput) || 85);
                  setIsLogActivityOpen(false);
                }}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-md shadow-indigo-200 transition-all cursor-pointer"
              >
                Log Sleep Session
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
