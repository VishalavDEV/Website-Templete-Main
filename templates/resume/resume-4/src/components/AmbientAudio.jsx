import { useEffect, useRef } from 'react';

export default function AmbientAudio({ isMuted }) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  useEffect(() => {
    if (!isMuted) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        if (!audioCtxRef.current) {
          const ctx = new AudioContext();
          audioCtxRef.current = ctx;

          // Create subtle pink noise for mountain wind sound
          const bufferSize = ctx.sampleRate * 2;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            data[i] *= 0.012; // Ultra low ambient volume
            b6 = white * 0.115926;
          }

          const noiseSource = ctx.createBufferSource();
          noiseSource.buffer = buffer;
          noiseSource.loop = true;

          // Lowpass filter for deep wind rumble
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, ctx.currentTime);

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.01, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 3);

          noiseSource.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          noiseSource.start();
          gainNodeRef.current = gain;
        } else if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
      } catch (err) {
        console.warn("Ambient audio context initialization:", err);
      }
    } else if (audioCtxRef.current) {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setValueAtTime(0.0001, audioCtxRef.current.currentTime);
      }
    }
  }, [isMuted]);

  return null;
}
