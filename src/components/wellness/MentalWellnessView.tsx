import React, { useState, useEffect, useRef } from 'react';
import { 
  Smile, 
  Wind, 
  Headphones, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  Calendar, 
  Apple,
  Dumbbell,
  Sparkles
} from 'lucide-react';
import { MoodEntry, NavigationTab } from '../../types';

interface MentalWellnessViewProps {
  moodHistory: MoodEntry[];
  onLogMood: (entry: MoodEntry) => void;
  onNavigate: (tab: NavigationTab) => void;
}

export const MentalWellnessView: React.FC<MentalWellnessViewProps> = ({
  moodHistory,
  onLogMood,
  onNavigate,
}) => {
  // Mood Tracker State
  const [selectedMood, setSelectedMood] = useState<'great' | 'good' | 'okay' | 'low' | 'stressed'>('great');
  const [selectedTags, setSelectedTags] = useState<string[]>(['Sleep', 'Work']);
  const [moodNote, setMoodNote] = useState('');
  const [loggedToday, setLoggedToday] = useState(false);

  // Breathing Exercise State
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [breathTimer, setBreathTimer] = useState(4);
  const [breathsCompleted, setBreathsCompleted] = useState(0);

  // Ambient Audio Generator (Web Audio API Synthesizer)
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  // Breathing Loop Timer
  useEffect(() => {
    let interval: any = null;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'Inhale') {
              setBreathPhase('Hold');
              return 7;
            } else if (breathPhase === 'Hold') {
              setBreathPhase('Exhale');
              return 8;
            } else {
              setBreathPhase('Inhale');
              setBreathsCompleted(c => c + 1);
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreathingActive, breathPhase]);

  // Ambient Sound Synth Synthesizer
  const toggleAmbientSound = (soundType: string) => {
    if (activeSound === soundType && isPlayingAudio) {
      stopAudio();
      setIsPlayingAudio(false);
      setActiveSound(null);
      return;
    }

    stopAudio();

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      const osc = ctx.createOscillator();
      if (soundType === 'Alpha Waves') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
      } else if (soundType === 'Cedar Forest') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime); // 432 Hz healing tone
      }

      osc.connect(gain);
      osc.start();
      oscRef.current = osc;

      setActiveSound(soundType);
      setIsPlayingAudio(true);
    } catch (e) {
      console.log('Web Audio Synth init', e);
    }
  };

  const stopAudio = () => {
    try {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    } catch (e) {}
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const handleSaveMood = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: MoodEntry = {
      id: `mood-${Date.now()}`,
      date: 'Today',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mood: selectedMood,
      score: selectedMood === 'great' ? 5 : selectedMood === 'good' ? 4 : selectedMood === 'okay' ? 3 : selectedMood === 'low' ? 2 : 1,
      tags: selectedTags,
      note: moodNote,
    };
    onLogMood(entry);
    setLoggedToday(true);
    setTimeout(() => setLoggedToday(false), 2500);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const moods = [
    { type: 'great' as const, emoji: '😀', label: 'Great' },
    { type: 'good' as const, emoji: '🙂', label: 'Good' },
    { type: 'okay' as const, emoji: '😐', label: 'Okay' },
    { type: 'low' as const, emoji: '😔', label: 'Low' },
    { type: 'stressed' as const, emoji: '😣', label: 'Stressed' },
  ];

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F3] border border-[#00A884]/20 text-[#00A884] text-xs font-semibold">
            <Smile className="w-3.5 h-3.5 text-[#00A884]" />
            <span>Mindfulness & Cognitive Resilience</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Mental Health & Sanctuary
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Evidence-based emotional tracking, guided parasympathetic breathwork, restorative binaural soundscapes, and certified psychologist access.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('appointments')}
            className="px-4 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center space-x-2 cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Therapist</span>
          </button>
        </div>
      </div>

      {/* Wellness Modules Sub-Navigation */}
      <div className="flex items-center space-x-2 border-b border-[#E2E8F0] pb-2">
        <button
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#00A884] text-white shadow-xs"
        >
          Mental Sanctuary
        </button>
        <button
          onClick={() => onNavigate('nutrition')}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center space-x-1.5 transition-all cursor-pointer"
        >
          <Apple className="w-4 h-4 text-[#00A884]" />
          <span>Nutrition & Diet</span>
        </button>
        <button
          onClick={() => onNavigate('fitness')}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center space-x-1.5 transition-all cursor-pointer"
        >
          <Dumbbell className="w-4 h-4 text-[#00A884]" />
          <span>Fitness & Movement</span>
        </button>
      </div>

      {/* Grid: Mood Tracker + Guided Breathing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. Mood Tracker */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-xl">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800">
                  How are you feeling right now?
                </h2>
                <p className="text-xs text-slate-500">Track emotional patterns and triggers over time</p>
              </div>
            </div>
            {loggedToday && (
              <span className="text-xs font-bold text-[#00A884] bg-[#E6F7F3] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#00A884]/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Logged!
              </span>
            )}
          </div>

          <form onSubmit={handleSaveMood} className="space-y-4">
            
            {/* Mood Radio Emoji Cards */}
            <div className="grid grid-cols-5 gap-2">
              {moods.map((m) => (
                <button
                  key={m.type}
                  type="button"
                  onClick={() => setSelectedMood(m.type)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                    selectedMood === m.type
                      ? 'bg-[#E6F7F3] border-[#00A884] text-[#00A884] font-bold shadow-xs'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span className="text-2xl">{m.emoji}</span>
                  <span className="text-[11px] font-semibold">{m.label}</span>
                </button>
              ))}
            </div>

            {/* Context Tags */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                What's contributing to your mood?
              </label>
              <div className="flex flex-wrap gap-1.5">
                {['Sleep', 'Work', 'Exercise', 'Diet', 'Family', 'Weather', 'Meditation', 'Stress'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      selectedTags.includes(tag)
                        ? 'bg-[#00A884] text-white font-bold'
                        : 'bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Note Input */}
            <div>
              <input
                type="text"
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
                placeholder="Optional quick journal note or reflection..."
                className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#00A884] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>Save Mood Reflection</span>
            </button>
          </form>

          {/* Recent Mood History Log */}
          <div className="pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Recent Mood Log
            </h4>
            <div className="space-y-2">
              {moodHistory.slice(0, 3).map((item) => (
                <div key={item.id} className="p-2.5 bg-[#F8FAFC] rounded-xl border border-slate-100 text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-base capitalize">
                      {item.mood === 'great' ? '😀' : item.mood === 'good' ? '🙂' : item.mood === 'okay' ? '😐' : item.mood === 'low' ? '😔' : '😣'}
                    </span>
                    <div>
                      <span className="font-bold text-slate-800 capitalize">{item.mood}</span>
                      <span className="text-[10px] text-slate-400 ml-1.5">{item.date} • {item.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {item.tags.map(t => (
                      <span key={t} className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Interactive Guided Breathing (4-7-8 Parasympathetic Loop) */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-xl">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800">
                  4-7-8 Relaxing Breathwork
                </h2>
                <p className="text-xs text-slate-500">Vagus nerve activation to lower resting pulse</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#00A884] bg-[#E6F7F3] px-2.5 py-1 rounded-full border border-[#00A884]/20">
              {breathsCompleted} cycles
            </span>
          </div>

          {/* Animated Visual Breathing Sphere */}
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Expanding Ripple Rings */}
              <div 
                className={`absolute rounded-full transition-all duration-1000 ${
                  isBreathingActive && breathPhase === 'Inhale'
                    ? 'w-48 h-48 bg-[#00A884]/20 scale-100'
                    : isBreathingActive && breathPhase === 'Hold'
                      ? 'w-48 h-48 bg-sky-500/20 scale-95'
                      : 'w-24 h-24 bg-[#E6F7F3] scale-75'
                }`} 
              />

              {/* Core Pulse Circle */}
              <div 
                className={`relative z-10 w-36 h-36 rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-1000 ${
                  breathPhase === 'Inhale'
                    ? 'bg-[#00A884] scale-105 shadow-[#00A884]/40'
                    : breathPhase === 'Hold'
                      ? 'bg-sky-600 scale-100 shadow-sky-600/40'
                      : 'bg-slate-800 scale-90 shadow-slate-900/30'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  {isBreathingActive ? breathPhase : 'Ready'}
                </span>
                <span className="text-4xl font-extrabold mt-0.5 text-white">
                  {isBreathingActive ? breathTimer : '4-7-8'}
                </span>
                <span className="text-[10px] text-white/80 font-medium">
                  {breathPhase === 'Inhale' ? 'Deep Inhale (4s)' : breathPhase === 'Hold' ? 'Retain (7s)' : 'Gentle Exhale (8s)'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center max-w-xs mt-3 leading-relaxed">
              Inhale through nose for 4s, hold gently for 7s, and release completely through mouth for 8s.
            </p>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setIsBreathingActive(!isBreathingActive);
                if (!isBreathingActive) {
                  setBreathPhase('Inhale');
                  setBreathTimer(4);
                }
              }}
              className={`px-8 py-3 rounded-2xl text-xs font-bold transition-all shadow-xs flex items-center space-x-2 cursor-pointer ${
                isBreathingActive
                  ? 'bg-rose-500 hover:bg-rose-600 text-white'
                  : 'bg-[#00A884] hover:bg-[#009272] text-white'
              }`}
            >
              {isBreathingActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Breath Session</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Begin Guided Breathing</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* 3. Ambient Soundscapes (Web Audio Synth Player) */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2.5 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-xl">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800">
                Restorative Audio & Soundscapes
              </h2>
              <p className="text-xs text-slate-500">Live acoustic synthesizer tones designed for deep focus and sleep transition</p>
            </div>
          </div>

          {isPlayingAudio && (
            <span className="flex items-center space-x-1.5 px-3 py-1 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-full text-xs font-semibold animate-pulse">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Playing: {activeSound}</span>
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'Alpha Waves', desc: '10Hz binaural carrier tone for stress reduction and calm focus', icon: '🧠' },
            { name: 'Cedar Forest', desc: 'Warm 220Hz resonant frequency mimicking forest nature silence', icon: '🌲' },
            { name: 'Zen Temple 432Hz', desc: 'Harmonic 432Hz sine wave promoting cellular parasympathetic calm', icon: '🔔' },
          ].map((sound) => {
            const isThisPlaying = activeSound === sound.name && isPlayingAudio;
            return (
              <div
                key={sound.name}
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 transition-all flex flex-col justify-between h-36"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{sound.icon}</span>
                    <button
                      onClick={() => toggleAmbientSound(sound.name)}
                      className={`p-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                        isThisPlaying
                          ? 'bg-[#00A884] text-white'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      {isThisPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">{sound.name}</h3>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">{sound.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
