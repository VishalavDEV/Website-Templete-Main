// Lightweight Web Audio API micro-haptics (pure synthesized frequencies, zero external files)

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export const audioService = {
  isSoundEnabled(): boolean {
    return soundEnabled;
  },

  toggleSound(): boolean {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      this.playBlip(600, 0.04);
    }
    return soundEnabled;
  },

  initAudio() {
    if (!audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  },

  playHover() {
    if (!soundEnabled) return;
    this.playBlip(440, 0.02, 0.015);
  },

  playClick() {
    if (!soundEnabled) return;
    this.playBlip(880, 0.04, 0.03);
  },

  playSuccess() {
    if (!soundEnabled) return;
    this.playChord([523.25, 659.25, 783.99, 1046.5]);
  },

  playBlip(freq: number, duration: number, gainVal = 0.02) {
    try {
      this.initAudio();
      if (!audioCtx) return;
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Audio context might be restricted before gesture
    }
  },

  playChord(frequencies: number[]) {
    try {
      this.initAudio();
      if (!audioCtx) return;
      
      frequencies.forEach((freq, idx) => {
        setTimeout(() => {
          if (!audioCtx) return;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          
          gain.gain.setValueAtTime(0.025, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
          
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          
          osc.start();
          osc.stop(audioCtx.currentTime + 0.3);
        }, idx * 60);
      });
    } catch {
      // Ignore
    }
  }
};
