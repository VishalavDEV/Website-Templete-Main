import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  Trophy,
  CheckCircle2,
  Users,
  Flame,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const ChallengesView: React.FC = () => {
  const { challenges, toggleJoinChallenge, toggleChallengeTask } = useWellness();

  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(challenges[0]?.id || 'c-1');

  const activeChallenge = challenges.find((c) => c.id === selectedChallengeId) || challenges[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Community Accountability Sprints
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Wellness Challenges
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Short, focused sprints designed to rewire habits in companionship with thousands of members.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-xs text-xs font-bold text-slate-700">
          <Users className="w-4 h-4 text-emerald-600" />
          <span>Over 22,000+ active challengers</span>
        </div>
      </div>

      {/* Challenges Horizontal Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {challenges.map((c) => {
          const isSelected = c.id === selectedChallengeId;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedChallengeId(c.id)}
              className={`p-4 rounded-3xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-100'
                  : 'bg-white/80 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    {c.totalDays} Days
                  </span>
                  {c.joined && (
                    <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">
                      JOINED
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">{c.title}</h4>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>{c.category}</span>
                <span className="text-slate-700 font-bold">{c.participantsCount.toLocaleString()}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Selected Challenge Showcase (Deep Emerald card matching theme) */}
      {activeChallenge && (
        <div className="bg-emerald-900 text-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
          {/* Subtle geometric watermark */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-[3rem] rotate-45 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left side: Overview & Join Button (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-emerald-800 text-emerald-300 px-3 py-1 rounded-full border border-emerald-700">
                  {activeChallenge.totalDays}-Day Sprint
                </span>
                <span className="text-xs font-semibold text-emerald-200 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {activeChallenge.participantsCount.toLocaleString()} Challengers
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                {activeChallenge.title}
              </h2>

              <p className="text-sm text-emerald-100/90 leading-relaxed font-medium">
                {activeChallenge.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => toggleJoinChallenge(activeChallenge.id)}
                  className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg ${
                    activeChallenge.joined
                      ? 'bg-emerald-800 text-emerald-200 hover:bg-emerald-700'
                      : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950'
                  }`}
                >
                  {activeChallenge.joined ? 'Leave Challenge' : 'Join This Challenge'}
                </button>

                {activeChallenge.joined && (
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> You're an active participant
                  </span>
                )}
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-4">
                <div className="flex justify-between text-xs font-bold text-emerald-200">
                  <span>Challenge Timeline</span>
                  <span>Day {activeChallenge.currentDay} of {activeChallenge.totalDays}</span>
                </div>
                <div className="w-full bg-emerald-950 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-400 h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.min(100, Math.round((activeChallenge.currentDay / activeChallenge.totalDays) * 100))}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right side: Daily Tasks Breakdown (6 cols) */}
            <div className="lg:col-span-6 bg-emerald-950/70 p-6 rounded-[2rem] border border-emerald-800/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60">
                <h3 className="font-bold text-sm text-emerald-100 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  Day-by-Day Milestone Tasks
                </h3>
                <span className="text-[11px] font-bold text-emerald-400">
                  {activeChallenge.dailyTasks.filter((t) => t.completed).length} / {activeChallenge.dailyTasks.length} Checked
                </span>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {activeChallenge.dailyTasks.map((task) => (
                  <div
                    key={task.day}
                    onClick={() => toggleChallengeTask(activeChallenge.id, task.day)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                      task.completed
                        ? 'bg-emerald-900/60 border-emerald-700 text-emerald-300'
                        : 'bg-emerald-900/20 border-emerald-800/40 text-emerald-100 hover:bg-emerald-900/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-800 px-2 py-0.5 rounded-md text-emerald-300 shrink-0">
                        Day {task.day}
                      </span>
                      <span className={`text-xs font-semibold ${task.completed ? 'line-through opacity-80' : ''}`}>
                        {task.title}
                      </span>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ml-2 ${
                        task.completed ? 'bg-emerald-400 text-slate-950' : 'border border-emerald-600'
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
