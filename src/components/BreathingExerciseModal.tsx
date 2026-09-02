import React, { useState, useEffect } from 'react';
import { useWellness } from '../context/WellnessContext';
import { X, Play, Pause, RotateCcw, Wind, Sparkles } from 'lucide-react';

export const BreathingExerciseModal: React.FC = () => {
  const { isBreathingModalOpen, setIsBreathingModalOpen, showToast, setMood } = useWellness();

  const [pattern, setPattern] = useState<'box' | '4-7-8' | 'relax'>('box');
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [timerCount, setTimerCount] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  // Patterns configuration: duration per phase in seconds
  const patterns = {
    box: { Inhale: 4, Hold: 4, Exhale: 4, Rest: 4, label: 'Box Breathing (4-4-4-4)', desc: 'Grounds the nervous system and sharpens calm focus.' },
    '4-7-8': { Inhale: 4, Hold: 7, Exhale: 8, Rest: 0, label: 'Relaxing Breath (4-7-8)', desc: 'Naturally calms anxiety and prepares the body for deep rest.' },
    relax: { Inhale: 4, Hold: 2, Exhale: 6, Rest: 2, label: 'Flow Decompress (4-2-6-2)', desc: 'Gentle vagal nerve stimulation to release physical tension.' },
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimerCount((prev) => {
          if (prev <= 1) {
            // Transition phase
            const currentPattern = patterns[pattern];
            if (phase === 'Inhale') {
              if (currentPattern.Hold > 0) {
                setPhase('Hold');
                return currentPattern.Hold;
              } else {
                setPhase('Exhale');
                return currentPattern.Exhale;
              }
            } else if (phase === 'Hold') {
              setPhase('Exhale');
              return currentPattern.Exhale;
            } else if (phase === 'Exhale') {
              if (currentPattern.Rest > 0) {
                setPhase('Rest');
                return currentPattern.Rest;
              } else {
                setCompletedCycles((c) => c + 1);
                setPhase('Inhale');
                return currentPattern.Inhale;
              }
            } else if (phase === 'Rest') {
              setCompletedCycles((c) => c + 1);
              setPhase('Inhale');
              return currentPattern.Inhale;
            }
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, phase, pattern]);

  if (!isBreathingModalOpen) return null;

  const getScaleClass = () => {
    if (!isActive) return 'scale-90 opacity-70';
    if (phase === 'Inhale') return 'scale-125 duration-[4000ms]';
    if (phase === 'Hold') return 'scale-125';
    if (phase === 'Exhale') return 'scale-90 duration-[4000ms]';
    return 'scale-90';
  };

  const getPhaseInstruction = () => {
    if (phase === 'Inhale') return 'Breathe in slowly through your nose';
    if (phase === 'Hold') return 'Gently hold your breath without tension';
    if (phase === 'Exhale') return 'Release smoothly through soft parted lips';
    return 'Rest naturally before the next cycle';
  };

  const handleFinish = () => {
    setIsActive(false);
    setIsBreathingModalOpen(false);
    setMood('calm', 'Completed centered breathwork session');
    showToast(`Great session! Completed ${completedCycles || 1} calm breathwork cycles.`);
  };

  return (
    <div
      onClick={() => {
        setIsActive(false);
        setIsBreathingModalOpen(false);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 w-full max-w-md max-h-[92vh] overflow-y-auto p-6 sm:p-8 flex flex-col items-center relative"
      >
        {/* Close */}
        <button
          onClick={() => {
            setIsActive(false);
            setIsBreathingModalOpen(false);
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
            <Wind className="w-3.5 h-3.5" /> Breathwork Pacer
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Mindful Respiration</h3>
          <p className="text-xs text-slate-500 max-w-xs mt-1">{patterns[pattern].desc}</p>
        </div>

        {/* Pattern Selector */}
        <div className="flex bg-slate-100 p-1 rounded-2xl gap-1 mb-8 w-full">
          {(['box', '4-7-8', 'relax'] as const).map((p) => (
            <button
              key={p}
              onClick={() => {
                setPattern(p);
                setPhase('Inhale');
                setTimerCount(patterns[p].Inhale);
                setIsActive(false);
              }}
              className={`flex-1 py-2 px-2 text-[11px] font-bold rounded-xl transition-all cursor-pointer ${
                pattern === p
                  ? 'bg-white text-emerald-800 shadow-sm border border-slate-200/50'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {p.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Animated Geometric Breathing Circle */}
        <div className="relative w-64 h-64 flex items-center justify-center my-4">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-100/70 border-dashed animate-[spin_60s_linear_infinite]"></div>

          {/* Expanding/Contracting Pulse Bubble */}
          <div
            className={`w-48 h-48 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-emerald-200 shadow-xl shadow-emerald-200/50 flex flex-col items-center justify-center text-white transition-all ease-in-out ${getScaleClass()}`}
          >
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              {phase}
            </span>
            <span className="text-5xl font-black my-1">{timerCount}</span>
            <span className="text-[10px] font-semibold opacity-80">SECONDS</span>
          </div>

          {/* Geometric diamond center accent */}
          <div className="absolute w-3 h-3 bg-white/60 rounded-xs rotate-45 pointer-events-none"></div>
        </div>

        {/* Instruction cue */}
        <div className="text-center my-4 min-h-[44px]">
          <p className="text-sm font-semibold text-slate-800 animate-in fade-in duration-300">
            {getPhaseInstruction()}
          </p>
          <span className="text-xs text-emerald-600 font-bold">
            Completed Cycles: {completedCycles}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 w-full mt-2">
          <button
            onClick={() => {
              setPhase('Inhale');
              setTimerCount(patterns[pattern].Inhale);
              setCompletedCycles(0);
              setIsActive(false);
            }}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex-1 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
              isActive
                ? 'bg-slate-800 hover:bg-slate-900 text-white shadow-slate-300'
                : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200'
            }`}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 fill-current" /> Pause Breath
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Begin Pacing
              </>
            )}
          </button>

          {completedCycles > 0 && (
            <button
              onClick={handleFinish}
              className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-2xl transition-colors font-bold text-xs cursor-pointer"
              title="Finish & Save"
            >
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
