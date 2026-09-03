import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { type Track, TRACKS } from '../data/tracks';

interface AudioContextType {
  currentTrack: Track;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seek: (time: number) => void;
  setVolumeLevel: (vol: number) => void;
  toggleMute: () => void;
  analyserNode: AnalyserNode | null;
  audioFrequencyData: Uint8Array;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioFrequencyData, setAudioFrequencyData] = useState<Uint8Array>(new Uint8Array(32));

  // Web Audio API refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  // Timer interval ref for playback simulation
  const progressTimerRef = useRef<number | null>(null);

  // Initialize Web Audio Synthesizer
  const initAudioCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      
      const gain = ctx.createGain();
      gain.gain.value = isMuted ? 0 : volume;

      gain.connect(analyser);
      analyser.connect(ctx.destination);

      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      gainNodeRef.current = gain;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Start synth ambient tone for current track
  const startSynthPlayback = (notes: number[]) => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    
    // Stop existing oscillators
    stopSynthPlayback();

    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    // Create polyphonic synth chord using track frequencies
    const newOscs: OscillatorNode[] = notes.map((freq, index) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      // Alternate waveforms for warm ambient texture
      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Low gain per voice for soft harmony
      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(0.08 / notes.length, now + 1.5);

      osc.connect(oscGain);
      oscGain.connect(gainNodeRef.current!);
      osc.start(now);
      return osc;
    });

    // Create subtle LFO for ambient modulation
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.2, now); // 0.2 Hz slow drift
    lfoGain.gain.setValueAtTime(10, now);
    lfo.connect(lfoGain);

    oscillatorsRef.current = newOscs;
    lfoRef.current = lfo;
  };

  const stopSynthPlayback = () => {
    if (audioCtxRef.current) {
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      oscillatorsRef.current = [];

      if (lfoRef.current) {
        try {
          lfoRef.current.stop();
          lfoRef.current.disconnect();
        } catch {
          // ignore
        }
        lfoRef.current = null;
      }
    }
  };

  // Play/Pause toggle
  const togglePlay = () => {
    initAudioCtx();
    if (isPlaying) {
      setIsPlaying(false);
      stopSynthPlayback();
    } else {
      setIsPlaying(true);
      startSynthPlayback(currentTrack.synthNotes);
    }
  };

  const playTrack = (track: Track) => {
    initAudioCtx();
    setCurrentTrack(track);
    setCurrentTime(0);
    setIsPlaying(true);
    startSynthPlayback(track.synthNotes);
  };

  const nextTrack = () => {
    const currentIndex = TRACKS.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % TRACKS.length;
    playTrack(TRACKS[nextIndex]);
  };

  const prevTrack = () => {
    const currentIndex = TRACKS.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    playTrack(TRACKS[prevIndex]);
  };

  const seek = (time: number) => {
    setCurrentTime(time);
  };

  const setVolumeLevel = (vol: number) => {
    setVolume(vol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(isMuted ? 0 : vol, audioCtxRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newMute ? 0 : volume, audioCtxRef.current.currentTime);
    }
  };

  // Synchronize playback timeline & frequency visualizer loop
  useEffect(() => {
    let animFrame: number;

    const updateVisualizerData = () => {
      if (analyserRef.current && isPlaying) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        setAudioFrequencyData(dataArray);
      } else if (!isPlaying) {
        // Decay visualizer smoothly
        setAudioFrequencyData(prev => prev.map(val => Math.max(0, Math.floor(val * 0.85))));
      }
      animFrame = requestAnimationFrame(updateVisualizerData);
    };

    animFrame = requestAnimationFrame(updateVisualizerData);
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying]);

  // Track timer incrementer
  useEffect(() => {
    if (isPlaying) {
      progressTimerRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= currentTrack.durationSec) {
            nextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    }

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, currentTrack]);

  return (
    <AudioContext.Provider value={{
      currentTrack,
      isPlaying,
      currentTime,
      duration: currentTrack.durationSec,
      volume,
      isMuted,
      playTrack,
      togglePlay,
      nextTrack,
      prevTrack,
      seek,
      setVolumeLevel,
      toggleMute,
      analyserNode: analyserRef.current,
      audioFrequencyData
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within an AudioProvider');
  return ctx;
};
