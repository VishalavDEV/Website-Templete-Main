import React, { useState, useEffect } from 'react';
import { useWellness } from '../context/WellnessContext';
import { X, Play, Pause, SkipForward, SkipBack, CheckCircle2, Flame } from 'lucide-react';

export const WorkoutPlayerModal: React.FC = () => {
  const { activeWorkoutModal, setActiveWorkoutModal, toggleWorkoutCompleted } = useWellness();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (activeWorkoutModal && activeWorkoutModal.exercises[currentIdx]) {
      setSecondsLeft(activeWorkoutModal.exercises[currentIdx].durationSec || 60);
      setIsPlaying(false);
    }
  }, [activeWorkoutModal, currentIdx]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (isPlaying && secondsLeft === 0) {
      // Auto move to next exercise or finish
      if (activeWorkoutModal && currentIdx < activeWorkoutModal.exercises.length - 1) {
        setCurrentIdx((c) => c + 1);
      } else {
        setIsPlaying(false);
      }
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, secondsLeft, activeWorkoutModal, currentIdx]);

  if (!activeWorkoutModal) return null;

  const currentExercise = activeWorkoutModal.exercises[currentIdx];
  const totalExercises = activeWorkoutModal.exercises.length;
  const progressPercent = Math.round(((currentIdx + 1) / totalExercises) * 100);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleFinish = () => {
    toggleWorkoutCompleted(activeWorkoutModal.id);
    setActiveWorkoutModal(null);
    setCurrentIdx(0);
  };

  return (
    <div
      onClick={() => {
        setActiveWorkoutModal(null);
        setCurrentIdx(0);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-slate-100 w-full max-w-lg max-h-[92vh] overflow-y-auto flex flex-col"
      >
        {/* Header with image banner */}
        <div className="relative h-36 sm:h-44 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={activeWorkoutModal.imageUrl}
            alt={activeWorkoutModal.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

          <button
            onClick={() => {
              setActiveWorkoutModal(null);
              setCurrentIdx(0);
            }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/90 text-white px-2 py-0.5 rounded-md">
                {activeWorkoutModal.level}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 leading-tight">
                {activeWorkoutModal.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>~{activeWorkoutModal.calories} kcal</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Body */}
        <div className="p-8 flex flex-col items-center">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
            Exercise {currentIdx + 1} of {totalExercises}
          </div>

          <h4 className="text-2xl font-black text-slate-900 text-center mb-1">
            {currentExercise?.name}
          </h4>
          <p className="text-sm font-semibold text-emerald-600 mb-6">
            {currentExercise?.reps || 'Continuous gentle form'}
          </p>

          {/* Timer Display */}
          <div className="w-40 h-40 rounded-full border-4 border-emerald-100 bg-emerald-50/50 flex flex-col items-center justify-center relative mb-6 shadow-inner">
            <span className="text-4xl font-black text-slate-900 tracking-tight">
              {formatTime(secondsLeft)}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase mt-1">
              Time Remaining
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((c) => Math.max(0, c - 1))}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 transition-all cursor-pointer"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-3xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-200 transition-all cursor-pointer group hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-white" />
              ) : (
                <Play className="w-7 h-7 fill-white ml-0.5" />
              )}
            </button>

            <button
              disabled={currentIdx >= totalExercises - 1}
              onClick={() => setCurrentIdx((c) => Math.min(totalExercises - 1, c + 1))}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 transition-all cursor-pointer"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Complete button */}
          <button
            onClick={handleFinish}
            className="w-full mt-6 py-3.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Finish & Log {activeWorkoutModal.durationMinutes} Minutes
          </button>
        </div>
      </div>
    </div>
  );
};
