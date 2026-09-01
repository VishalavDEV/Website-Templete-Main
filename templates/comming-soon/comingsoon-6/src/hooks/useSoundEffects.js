import { useState, useEffect, useRef } from 'react';

export function useSoundEffects() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const droneOscRef = useRef(null);
  const droneGainRef = useRef(null);
  const filterRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const toggleAmbient = () => {
    initAudio();
    const ctx = audioCtxRef.current;

    if (isPlaying) {
      // Fade out drone
      if (droneGainRef.current) {
        droneGainRef.current.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
        setTimeout(() => {
          if (droneOscRef.current) {
            droneOscRef.current.stop();
            droneOscRef.current.disconnect();
            droneOscRef.current = null;
          }
        }, 300);
      }
      setIsPlaying(false);
    } else {
      // Create futuristic sub-bass ambient drone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110, ctx.currentTime); // A2 harmonic

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, ctx.currentTime);
      filter.Q.setValueAtTime(4, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.setTargetAtTime(0.08, ctx.currentTime, 1.5); // Soft unobtrusive ambient level

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      droneOscRef.current = osc1;
      droneGainRef.current = gain;
      filterRef.current = filter;

      setIsPlaying(true);
    }
  };

  const playClick = () => {
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  };

  const playSuccess = () => {
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.06);

        gain.gain.setValueAtTime(0.06, now + index * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.06);
        osc.stop(now + index * 0.06 + 0.3);
      });
    } catch (e) {}
  };

  return { isPlaying, toggleAmbient, playClick, playSuccess };
}
