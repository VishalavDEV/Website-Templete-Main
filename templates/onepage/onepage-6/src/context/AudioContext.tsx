import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
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
  getFrequencyData: () => Uint8Array;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Web Audio API refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const frequencyBufferRef = useRef<Uint8Array>(new Uint8Array(32));

  // Timer interval ref for playback simulation
  const progressTimerRef = useRef<number | null>(null);

  // Initialize Web Audio Synthesizer
  const initAudioCtx = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
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
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume().catch(() => {});
      }
    } catch {
      // Audio context fallback
    }
  }, [isMuted, volume]);

  const stopSynthPlayback = useCallback(() => {
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
  }, []);

  // Start synth ambient tone for current track
  const startSynthPlayback = useCallback((notes: number[]) => {
    initAudioCtx();
    if (!audioCtxRef.current || !gainNodeRef.current) return;

    // Stop existing oscillators
    stopSynthPlayback();

    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    try {
      // Create polyphonic synth chord using track frequencies
      const newOscs: OscillatorNode[] = notes.map((freq, index) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Alternate waveforms for warm ambient texture
        osc.type = index % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Low gain per voice for soft harmony
        oscGain.gain.setValueAtTime(0, now);
        oscGain.gain.linearRampToValueAtTime(0.08 / Math.max(1, notes.length), now + 1.5);

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
    } catch {
      // Graceful fallback
    }
  }, [initAudioCtx, stopSynthPlayback]);

  // Play/Pause toggle
  const togglePlay = useCallback(() => {
    initAudioCtx();
    if (isPlaying) {
      setIsPlaying(false);
      stopSynthPlayback();
    } else {
      setIsPlaying(true);
      startSynthPlayback(currentTrack.synthNotes);
    }
  }, [isPlaying, currentTrack, initAudioCtx, startSynthPlayback, stopSynthPlayback]);

  const playTrack = useCallback((track: Track) => {
    initAudioCtx();
    setCurrentTrack(track);
    setCurrentTime(0);
    setIsPlaying(true);
    startSynthPlayback(track.synthNotes);
  }, [initAudioCtx, startSynthPlayback]);

  const nextTrack = useCallback(() => {
    const currentIndex = TRACKS.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % TRACKS.length;
    playTrack(TRACKS[nextIndex]);
  }, [currentTrack.id, playTrack]);

  const prevTrack = useCallback(() => {
    const currentIndex = TRACKS.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    playTrack(TRACKS[prevIndex]);
  }, [currentTrack.id, playTrack]);

  const seek = useCallback((time: number) => {
    setCurrentTime(time);
  }, []);

  const setVolumeLevel = useCallback((vol: number) => {
    setVolume(vol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(isMuted ? 0 : vol, audioCtxRef.current.currentTime);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMute = !prev;
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(newMute ? 0 : volume, audioCtxRef.current.currentTime);
      }
      return newMute;
    });
  }, [volume]);

  const getFrequencyData = useCallback((): Uint8Array => {
    if (analyserRef.current && isPlaying) {
      const buffer = frequencyBufferRef.current;
      analyserRef.current.getByteFrequencyData(buffer as unknown as Uint8Array<ArrayBuffer>);
      return buffer;
    }
    return frequencyBufferRef.current;
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
  }, [isPlaying, currentTrack.durationSec, nextTrack]);

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
      getFrequencyData
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
