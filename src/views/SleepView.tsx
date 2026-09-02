import React, { useState, useEffect, useRef } from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  Moon,
  Clock,
  Sparkles,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  Bed,
  ShieldAlert,
} from 'lucide-react';

export const SleepView: React.FC = () => {
  const { metrics, updateSleep, showToast, setIsBreathingModalOpen } = useWellness();

  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [soundDurationMinutes, setSoundDurationMinutes] = useState(20);

  const [checklist, setChecklist] = useState([
    { id: 1, title: 'Dim overhead bright lights 60 min before bed', done: true },
    { id: 2, title: 'Digital blue-light curfew (phone placed across room)', done: true },
    { id: 3, title: 'Warm magnesium glycinate or chamomile tea', done: false },
    { id: 4, title: '5-minute evening breathwork or gentle hamstring release', done: false },
    { id: 5, title: 'Keep room temperature cool (65–68°F / 18–20°C)', done: true },
  ]);

  const toggleChecklistItem = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
    showToast('Wind-down routine updated!');
  };

  const soundscapes = [
    { id: 'rain', name: 'Gentle Pacific Rain', desc: 'Soft rainfall on cedar leaves for alpha-wave entrainment', icon: '🌧️' },
    { id: 'forest', name: 'Nocturnal Redwood Forest', desc: 'Distant crickets and calm mountain wind', icon: '🌲' },
    { id: 'ocean', name: 'Moonlit Ocean Swell', desc: 'Rhythmic deep tide waves matching natural 6 breaths/min', icon: '🌊' },
    { id: 'delta', name: 'Binaural Delta Frequency', desc: 'Pure 2.5 Hz harmonic drone for deep non-REM stage 3 sleep', icon: '✨' },
  ];

  // Web Audio ambient sound synthesizer
  const audioNodesRef = useRef<{
    ctx: AudioContext;
    gain: GainNode;
    oscillators?: OscillatorNode[];
    noiseSource?: AudioBufferSourceNode;
  } | null>(null);

  const stopCurrentAudio = () => {
    if (audioNodesRef.current) {
      try {
        const { ctx, gain, oscillators, noiseSource } = audioNodesRef.current;
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        setTimeout(() => {
          try {
            oscillators?.forEach((o) => o.stop());
            noiseSource?.stop();
            ctx.close();
          } catch {
            // ignore
          }
        }, 400);
      } catch {
        // ignore
      }
      audioNodesRef.current = null;
    }
  };

  const startSoundAudio = (soundId: string) => {
    stopCurrentAudio();
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.8);
      masterGain.connect(ctx.destination);

      if (soundId === 'delta') {
        // Binaural delta wave harmonic drone
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(108, ctx.currentTime);
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(110.5, ctx.currentTime);

        osc1.connect(masterGain);
        osc2.connect(masterGain);
        osc1.start();
        osc2.start();
        audioNodesRef.current = { ctx, gain: masterGain, oscillators: [osc1, osc2] };
      } else {
        // Ambient noise buffer (rain / ocean / forest)
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.09;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        if (soundId === 'rain') {
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(900, ctx.currentTime);
        } else if (soundId === 'ocean') {
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(400, ctx.currentTime);
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.12, ctx.currentTime);
          lfoGain.gain.setValueAtTime(220, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(filter.frequency);
          lfo.start();
        } else {
          // forest wind
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(550, ctx.currentTime);
          filter.Q.setValueAtTime(1.4, ctx.currentTime);
        }

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        whiteNoise.start();

        audioNodesRef.current = { ctx, gain: masterGain, noiseSource: whiteNoise };
      }
    } catch (e) {
      console.warn('Ambient audio could not be initialized:', e);
    }
  };

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopCurrentAudio();
    };
  }, []);

  const handleToggleSound = (id: string) => {
    if (activeSound === id && isPlayingAudio) {
      setIsPlayingAudio(false);
      stopCurrentAudio();
      showToast('Soundscape paused');
    } else {
      setActiveSound(id);
      setIsPlayingAudio(true);
      startSoundAudio(id);
      showToast(`Now playing: ${soundscapes.find((s) => s.id === id)?.name}`);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Circadian Biology & Restoration
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Sleep & Cellular Recovery
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Recharge cognitive function, optimize hormonal health, and protect restorative sleep cycles.
          </p>
        </div>

        {/* Quick Log Action */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsBreathingModalOpen(true)}
            className="px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-2xl font-bold text-xs shadow-xs cursor-pointer"
          >
            Evening Breathwork
          </button>
          <button
            onClick={() => updateSleep(8.0, 92)}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xs shadow-md shadow-indigo-200 cursor-pointer"
          >
            Log Restorative 8.0h
          </button>
        </div>
      </div>

      {/* 4 Sleep Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Sleep Duration */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider">Duration</span>
            <Clock className="w-4 h-4 text-indigo-500" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {metrics.sleepHours} <span className="text-sm font-semibold text-slate-400">hours</span>
            </div>
            <div className="text-xs font-bold text-emerald-600 mt-1">
              Target: {metrics.sleepGoalHours}.0h (95% Met)
            </div>
          </div>
        </div>

        {/* Card 2: Sleep Consistency */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider">Consistency</span>
            <Moon className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">91%</div>
            <div className="text-xs font-bold text-blue-600 mt-1">±18m variation this week</div>
          </div>
        </div>

        {/* Card 3: Bedtime Target */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider">Bedtime Window</span>
            <Bed className="w-4 h-4 text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">10:30 PM</div>
            <div className="text-xs font-bold text-purple-600 mt-1">Wake: 6:45 AM</div>
          </div>
        </div>

        {/* Card 4: Recovery Score */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider">Recovery Readiness</span>
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">{metrics.sleepQuality}%</div>
            <div className="text-xs font-bold text-emerald-600 mt-1">Optimal Neural Recovery</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Bedtime Wind-Down Checklist & Ambient Soundscapes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Wind-down Routine Checklist (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Evening Wind-Down Checklist</h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Prime your parasympathetic nervous system for non-REM restorative sleep.
              </p>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {checklist.filter((c) => c.done).length} / {checklist.length} Complete
            </span>
          </div>

          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer group ${
                  item.done
                    ? 'bg-slate-50 border-slate-100 text-slate-500'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                      item.done
                        ? 'bg-indigo-600 text-white'
                        : 'border-2 border-slate-300 group-hover:border-indigo-500'
                    }`}
                  >
                    {item.done && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-semibold ${
                      item.done ? 'line-through opacity-70' : 'text-slate-800'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100/80 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <p className="text-xs text-indigo-950 leading-relaxed font-medium">
              <strong>Lifestyle Insight:</strong> Morning natural sunlight exposure within 45 minutes of waking
              anchors the pineal gland's melatonin release timer for approximately 14 hours later.
            </p>
          </div>
        </div>

        {/* Right: Ambient Relaxation Soundscapes (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300">
                Relaxation Soundscapes
              </span>
              <Volume2 className="w-4 h-4 text-indigo-300" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">Acoustic Wind-Down</h3>
              <p className="text-xs text-indigo-200/80 mt-1">
                Gentle acoustic resonance to settle internal chatter before lights out.
              </p>
            </div>

            {/* Soundscape List */}
            <div className="space-y-2.5 pt-2">
              {soundscapes.map((sound) => {
                const isSelected = activeSound === sound.id && isPlayingAudio;
                return (
                  <div
                    key={sound.id}
                    onClick={() => handleToggleSound(sound.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600/60 border-indigo-400 shadow-md'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{sound.icon}</span>
                      <div>
                        <h4 className="text-xs font-bold text-white">{sound.name}</h4>
                        <p className="text-[10px] text-indigo-200/70">{sound.desc}</p>
                      </div>
                    </div>

                    <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center shrink-0">
                      {isSelected ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sleep Timer Preset */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-indigo-200 font-medium">Timer: {soundDurationMinutes}m auto-off</span>
            <div className="flex gap-1.5">
              {[15, 30, 45].map((mins) => (
                <button
                  key={mins}
                  onClick={() => {
                    setSoundDurationMinutes(mins);
                    showToast(`Timer set to ${mins} minutes`);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer ${
                    soundDurationMinutes === mins
                      ? 'bg-indigo-500 border-indigo-400 text-white'
                      : 'border-white/10 text-indigo-200 hover:bg-white/10'
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
