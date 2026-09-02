import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import { DailyHabit } from '../types/wellness';
import {
  CheckSquare,
  Plus,
  Flame,
  Check,
  Trash2,
  Sparkles,
  Trophy,
  Activity,
  Droplets,
  Footprints,
  Apple,
  Moon,
  Smile,
} from 'lucide-react';

export const HabitsView: React.FC = () => {
  const {
    habits,
    toggleHabit,
    addHabit,
    deleteHabit,
    achievements,
  } = useWellness();

  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<DailyHabit['category']>('lifestyle');
  const [newTargetDesc, setNewTargetDesc] = useState('');

  const completedCount = habits.filter((h) => h.completed).length;
  const completionRate = Math.round((completedCount / Math.max(1, habits.length)) * 100);
  const maxStreak = Math.max(...habits.map((h) => h.streak), 0);

  const handleCreateHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addHabit({
      title: newTitle.trim(),
      category: newCategory,
      targetDescription: newTargetDesc.trim() || 'Daily consistency goal',
    });
    setNewTitle('');
    setNewTargetDesc('');
    setIsAddingHabit(false);
  };

  const getCategoryIcon = (category: DailyHabit['category']) => {
    switch (category) {
      case 'hydration':
        return <Droplets className="w-4 h-4 text-blue-500" />;
      case 'fitness':
        return <Footprints className="w-4 h-4 text-orange-500" />;
      case 'nutrition':
        return <Apple className="w-4 h-4 text-emerald-500" />;
      case 'sleep':
        return <Moon className="w-4 h-4 text-indigo-500" />;
      case 'mindfulness':
        return <Smile className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-teal-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Behavioral Science Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Healthy Habit Builder
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Build compounding lifestyle resilience with daily micro-commitments and continuous streaks.
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={() => setIsAddingHabit(true)}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Habit</span>
        </button>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {completedCount} <span className="text-sm font-medium text-slate-400">/ {habits.length}</span>
            </div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              Today's Completed ({completionRate}%)
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
            <Flame className="w-6 h-6 fill-orange-500" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{maxStreak} Days</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              Longest Active Streak
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {achievements.filter((a) => a.unlocked).length} Badges
            </div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              Consistency Milestones
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Form to Add Habit */}
      {isAddingHabit && (
        <div className="bg-white p-6 rounded-[2.5rem] border-2 border-emerald-300 shadow-lg animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <h3 className="font-bold text-slate-900 text-base">Create a New Daily Habit</h3>
            <button
              onClick={() => setIsAddingHabit(false)}
              className="text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleCreateHabit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Habit Title</label>
                <input
                  type="text"
                  placeholder="e.g. 10-Minute Outdoor Sunlight Walk"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-emerald-500 bg-white"
                >
                  <option value="hydration">Hydration</option>
                  <option value="fitness">Fitness & Movement</option>
                  <option value="nutrition">Nutrition & Whole Foods</option>
                  <option value="sleep">Sleep & Circadian Rhythm</option>
                  <option value="mindfulness">Mindfulness & Breath</option>
                  <option value="lifestyle">General Lifestyle</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Target Description</label>
              <input
                type="text"
                placeholder="e.g. Walk outside before 9 AM without sunglasses"
                value={newTargetDesc}
                onChange={(e) => setNewTargetDesc(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingHabit(false)}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!newTitle.trim()}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-200"
              >
                Save Habit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Habit List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={`p-6 rounded-[2rem] border transition-all flex flex-col justify-between space-y-4 ${
              habit.completed
                ? 'bg-slate-50/90 border-slate-200/60'
                : 'bg-white border-slate-200 shadow-sm hover:border-emerald-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-7 h-7 rounded-xl mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                    habit.completed
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'border-2 border-slate-300 hover:border-emerald-500'
                  }`}
                >
                  {habit.completed && <Check className="w-4 h-4 stroke-[3]" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(habit.category)}
                    <h3
                      className={`text-sm sm:text-base font-bold ${
                        habit.completed ? 'text-slate-500 line-through' : 'text-slate-900'
                      }`}
                    >
                      {habit.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {habit.targetDescription}
                  </p>
                </div>
              </div>

              <button
                onClick={() => deleteHabit(habit.id)}
                className="text-slate-300 hover:text-rose-500 p-1.5 transition-colors cursor-pointer"
                title="Delete habit"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Streak & Completion Status */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                <Flame className="w-3.5 h-3.5 fill-orange-500" />
                <span>{habit.streak} Day Streak</span>
              </div>

              <button
                onClick={() => toggleHabit(habit.id)}
                className={`text-xs font-bold px-3 py-1 rounded-xl transition-all cursor-pointer ${
                  habit.completed
                    ? 'text-emerald-700 bg-emerald-100'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {habit.completed ? 'Completed Today ✓' : 'Mark as Done'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
