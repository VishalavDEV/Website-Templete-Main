import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      // Stop Web Audio synth
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start elegant ambient romantic harmonic chord synthesizer
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Romantic acoustic chord frequencies (Fmaj7, Cmaj7, Dm7, Am)
        const notes = [
          [349.23, 440.00, 523.25, 659.25], // Fmaj7
          [261.63, 329.63, 392.00, 493.88], // Cmaj7
          [293.66, 349.23, 440.00, 523.25], // Dm7
          [220.00, 261.63, 329.63, 392.00]  // Am7
        ];

        let chordIdx = 0;
        let noteIdx = 0;

        const playPluck = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
          const currentChord = notes[chordIdx];
          const freq = currentChord[noteIdx % currentChord.length];

          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 1.9);

          noteIdx++;
          if (noteIdx % 4 === 0) {
            chordIdx = (chordIdx + 1) % notes.length;
          }
        };

        playPluck();
        timerRef.current = setInterval(playPluck, 600);
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      title={isPlaying ? 'Mute Background Music' : 'Play Romantic Music'}
      aria-label="Toggle background music"
    >
      <span>♫</span>
      <span>{isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}</span>
      {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
    </button>
  );
}
