import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import { WorkoutItem } from '../types/wellness';
import {
  Dumbbell,
  Play,
  CheckCircle2,
  Clock,
  Flame,
  Footprints,
  Sparkles,
  Zap,
} from 'lucide-react';

export const FitnessView: React.FC = () => {
  const {
    workouts,
    setActiveWorkoutModal,
    toggleWorkoutCompleted,
    metrics,
    addSteps,
    addWater,
  } = useWellness();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Routines' },
    { id: 'yoga', label: 'Yoga & Flow' },
    { id: 'home', label: 'Home Functional' },
    { id: 'walking_running', label: 'Walking & Cardio' },
    { id: 'stretching', label: 'Mobility & Stretch' },
    { id: 'beginner', label: 'Beginner Foundations' },
  ];

  const filteredWorkouts = workouts.filter((w) => {
    if (selectedCategory === 'all') return true;
    return w.category === selectedCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Movement & Vitality Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Everyday Movement Architecture
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Gentle strength, rhythmic walking, and mobility flows designed for sustainable longevity.
          </p>
        </div>

        {/* Quick Vitals Tracker */}
        <div className="flex gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-xs">
          <div className="px-4 py-2 bg-emerald-50 rounded-xl">
            <span className="text-[10px] font-bold text-emerald-700 uppercase">Movement Today</span>
            <div className="text-lg font-black text-emerald-800">{metrics.exerciseMinutes} mins</div>
          </div>
          <div className="px-4 py-2 bg-orange-50 rounded-xl">
            <span className="text-[10px] font-bold text-orange-700 uppercase">Stride Count</span>
            <div className="text-lg font-black text-orange-800">{metrics.steps.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Walking & Running Goal Showcase Card */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-[2.5rem] p-8 shadow-xl shadow-emerald-900/10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
            <Footprints className="w-4 h-4" /> Daily Step Aerobic Goal
          </div>
          <h2 className="text-2xl font-black">
            {metrics.steps.toLocaleString()} <span className="text-emerald-300 text-lg font-normal">/ {metrics.stepsGoal.toLocaleString()} steps</span>
          </h2>
          <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
            Walking is the foundation of longevity. Logging 8,000–10,000 brisk steps enhances insulin sensitivity, stimulates mental creativity, and balances evening cortisol.
          </p>
          <div className="w-full bg-emerald-950/60 h-2.5 rounded-full overflow-hidden mt-3">
            <div
              className="bg-emerald-400 h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.min(100, Math.round((metrics.steps / metrics.stepsGoal) * 100))}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
          <button
            onClick={() => addSteps(1000)}
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold transition-all border border-white/10 cursor-pointer"
          >
            +1,000 Step Walk
          </button>
          <button
            onClick={() => addSteps(2500)}
            className="px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-2xl text-xs font-black transition-all shadow-md cursor-pointer"
          >
            +2,500 Interval Stride
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Workout Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            {/* Top Image Preview */}
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <img
                src={workout.imageUrl}
                alt={workout.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-[10px] font-bold bg-white/95 text-slate-800 px-2.5 py-0.5 rounded-full shadow-xs">
                  {workout.level}
                </span>
                <span className="text-[10px] font-bold bg-emerald-500 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                  {workout.intensity} Intensity
                </span>
              </div>

              {workout.completedToday && (
                <div className="absolute top-4 right-4 bg-emerald-600 text-white p-1.5 rounded-full shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}

              {/* Bottom stats inside image */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-300" />
                  {workout.durationMinutes} mins
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <Flame className="w-3.5 h-3.5 fill-amber-300" />
                  ~{workout.calories} kcal
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {workout.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mt-1">
                  {workout.description}
                </p>
              </div>

              {/* Exercise Flow Preview */}
              <div className="space-y-1.5 pt-2 border-t border-slate-50">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Movement Sequence ({workout.exercises.length} items)
                </span>
                <div className="space-y-1">
                  {workout.exercises.slice(0, 3).map((ex, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-center justify-between">
                      <span className="font-semibold">• {ex.name}</span>
                      <span className="text-[10px] text-slate-400">{ex.reps || `${ex.durationSec}s`}</span>
                    </div>
                  ))}
                  {workout.exercises.length > 3 && (
                    <div className="text-[10px] text-emerald-600 font-bold">
                      +{workout.exercises.length - 3} more flows
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setActiveWorkoutModal(workout)}
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-200 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Guide</span>
                </button>

                <button
                  onClick={() => toggleWorkoutCompleted(workout.id)}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                    workout.completedToday
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                  title={workout.completedToday ? 'Completed today' : 'Mark as done'}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
