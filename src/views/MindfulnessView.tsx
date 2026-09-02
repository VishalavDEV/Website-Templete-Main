import React, { useState, useEffect } from 'react';
import { useWellness } from '../context/WellnessContext';
import { MoodType } from '../types/wellness';
import {
  Smile,
  Wind,
  Sparkles,
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Heart,
  Zap,
} from 'lucide-react';

export const MindfulnessView: React.FC = () => {
  const {
    metrics,
    setMood,
    reflections,
    addReflection,
    setIsBreathingModalOpen,
    showToast,
  } = useWellness();

  // Reflection form state
  const reflectionPrompts = [
    'What is one intentional choice you are making for your body today?',
    'What brought a sense of effortless gratitude into your awareness today?',
    'What is one tension you are ready to exhale and release right now?',
    'How did your morning movement or sunlight influence your energy?',
  ];
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [reflectionText, setReflectionText] = useState('');

  // Mini Meditation Timer state
  const [meditationDuration, setMeditationDuration] = useState(300); // 5 mins in secs
  const [meditationSecondsLeft, setMeditationSecondsLeft] = useState(300);
  const [isMeditating, setIsMeditating] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isMeditating && meditationSecondsLeft > 0) {
      timer = setInterval(() => {
        setMeditationSecondsLeft((p) => p - 1);
      }, 1000);
    } else if (isMeditating && meditationSecondsLeft === 0) {
      setIsMeditating(false);
      showToast('Mindfulness session completed! Centered & grounded.');
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isMeditating, meditationSecondsLeft, showToast]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflectionText.trim()) return;
    addReflection(reflectionPrompts[selectedPromptIdx], reflectionText.trim(), metrics.currentMood);
    setReflectionText('');
  };

  const moods: { key: MoodType; emoji: string; label: string; desc: string }[] = [
    { key: 'energized', emoji: '⚡', label: 'Energized', desc: 'High physical stamina & optimism' },
    { key: 'calm', emoji: '🌿', label: 'Calm', desc: 'Relaxed nervous system & serenity' },
    { key: 'focused', emoji: '🎯', label: 'Focused', desc: 'Clear mental clarity & flow' },
    { key: 'grateful', emoji: '✨', label: 'Grateful', desc: 'Heart-centered appreciation' },
    { key: 'tired', emoji: '🌙', label: 'Rest Needed', desc: 'Honoring recovery & low stimulation' },
  ];

  const microActivities = [
    { id: 1, title: '2-Minute Cold Water Face Splash', desc: 'Triggers the mammalian dive reflex to instantly calm heart rate.', tag: 'Physical Reset' },
    { id: 2, title: '5-Minute Post-Desk Hamstring Decompression', desc: 'Gentle forward bend releasing lumbar & spinal tension.', tag: 'Mobility' },
    { id: 3, title: 'Mindful Herbal Tea Ritual', desc: 'No screens. Feel the warm ceramic cup and inhale chamomile aroma.', tag: 'Sensory' },
    { id: 4, title: 'Barefoot Garden or Lawn Grounding', desc: 'Connect feet to natural earth for 10 restorative minutes.', tag: 'Earthing' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Nervous System & Inner Balance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Mindfulness & Mental Well-Being
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Everyday tools for stress de-escalation, emotional clarity, and parasympathetic recovery.
          </p>
        </div>

        {/* Breathing pacer CTA */}
        <button
          onClick={() => setIsBreathingModalOpen(true)}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-200 cursor-pointer"
        >
          <Wind className="w-4 h-4" />
          <span>Launch Breathwork Pacer</span>
        </button>
      </div>

      {/* Mood Check-In Interactive Section */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">How Does Your Mind & Body Feel Now?</h3>
            <p className="text-xs text-slate-400 font-medium">
              Checking in without judgment builds intuitive self-awareness.
            </p>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Current: {metrics.currentMood.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          {moods.map((m) => {
            const isSelected = metrics.currentMood === m.key;
            return (
              <button
                key={m.key}
                onClick={() => setMood(m.key)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-purple-50 border-purple-300 ring-2 ring-purple-200 shadow-sm'
                    : 'bg-slate-50/70 border-slate-100 hover:bg-slate-100'
                }`}
              >
                <div className="text-3xl mb-1.5 group-hover:scale-110 transition-transform">{m.emoji}</div>
                <div className="text-xs font-bold text-slate-800">{m.label}</div>
                <div className="text-[10px] text-slate-400 mt-1 leading-tight">{m.desc}</div>
              </button>
            );
          })}
        </div>

        {metrics.moodNote && (
          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 font-medium italic border border-slate-100 flex items-center gap-2">
            <span>“{metrics.moodNote}”</span>
          </div>
        )}
      </div>

      {/* Two Column Grid: Guided Mini-Meditation & Daily Gratitude Journal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Mini Meditation Timer (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-teal-950 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between items-center text-center">
          <div className="w-full">
            <div className="flex items-center justify-between text-xs text-emerald-300 font-bold uppercase tracking-widest mb-2">
              <span>Stillness Focus</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold">Guided Mindful Silence</h3>
            <p className="text-xs text-emerald-200/70 mt-1">
              Set aside distraction. Anchor your attention on the soft sensation of cool air entering the nostrils.
            </p>
          </div>

          {/* Timer Display */}
          <div className="my-8 relative flex items-center justify-center">
            <div className={`w-44 h-44 rounded-full border-4 border-emerald-500/30 bg-emerald-900/40 flex flex-col items-center justify-center shadow-inner ${isMeditating ? 'animate-pulse' : ''}`}>
              <span className="text-4xl font-black text-white tracking-tight">
                {formatTimer(meditationSecondsLeft)}
              </span>
              <span className="text-[10px] font-bold text-emerald-300 uppercase mt-1">
                {isMeditating ? 'Active Session' : 'Ready'}
              </span>
            </div>
          </div>

          {/* Preset options */}
          <div className="w-full space-y-4">
            <div className="flex justify-center gap-2">
              {[
                { label: '3 min', sec: 180 },
                { label: '5 min', sec: 300 },
                { label: '10 min', sec: 600 },
              ].map((p) => (
                <button
                  key={p.sec}
                  onClick={() => {
                    setMeditationDuration(p.sec);
                    setMeditationSecondsLeft(p.sec);
                    setIsMeditating(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                    meditationDuration === p.sec
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'border-white/10 text-emerald-200 hover:bg-white/10'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setMeditationSecondsLeft(meditationDuration);
                  setIsMeditating(false);
                }}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors cursor-pointer"
                title="Reset timer"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsMeditating(!isMeditating)}
                className="flex-1 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                {isMeditating ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" /> Pause Session
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Begin Silence
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Daily Reflections & Gratitude Journal (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  Daily Reflection Journal
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Capture thoughts and intentional grounding moments.
                </p>
              </div>

              {/* Prompt Switcher */}
              <button
                onClick={() => setSelectedPromptIdx((p) => (p + 1) % reflectionPrompts.length)}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline cursor-pointer"
              >
                New Prompt ↻
              </button>
            </div>

            {/* Prompt Box */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-xs font-bold text-emerald-900 leading-relaxed">
              “{reflectionPrompts[selectedPromptIdx]}”
            </div>

            {/* Input form */}
            <form onSubmit={handleSaveReflection} className="space-y-3">
              <textarea
                rows={3}
                placeholder="Write your brief reflection here..."
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                className="w-full p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-emerald-500 resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!reflectionText.trim()}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-200 transition-all cursor-pointer"
                >
                  Save to Journal
                </button>
              </div>
            </form>
          </div>

          {/* Past reflections stream */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
              Recent Reflections
            </span>
            <div className="space-y-2.5 max-h-48 overflow-y-auto">
              {reflections.map((ref) => (
                <div key={ref.id} className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span className="font-bold text-emerald-700">{ref.date}</span>
                    <span className="uppercase text-[9px] bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {ref.mood}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    “{ref.content}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Micro Stress-Management Activities Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Quick Stress-Decompression Micro-Habits (Under 5 Minutes)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {microActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between space-y-3 hover:border-emerald-200 transition-all"
            >
              <div className="space-y-1">
                <span className="text-[9px] font-extrabold uppercase tracking-widest bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                  {act.tag}
                </span>
                <h4 className="text-sm font-bold text-slate-800 pt-1">{act.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{act.desc}</p>
              </div>
              <button
                onClick={() => showToast(`Completed "${act.title}"! Nervous system calmed.`)}
                className="w-full py-2 bg-slate-50 hover:bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Mark as Completed
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
