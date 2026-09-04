import runfestAudioTrack from '../assets/audio/runfest_beat.mp3';

// Web Audio & HTML5 Audio Controller for Vayora Runfest
class AudioManager {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.synthInterval = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.listeners = new Set();
    this.trackUrl = runfestAudioTrack;
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.isPlaying);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach(cb => {
      try {
        cb(this.isPlaying);
      } catch (err) {
        console.error("Audio subscriber notification error:", err);
      }
    });
  }

  async toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      await this.play();
    }
  }

  async play() {
    try {
      // 1. Resume AudioContext on explicit user gesture
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        if (!this.audioContext) {
          this.audioContext = new AudioCtx();
        }
        if (this.audioContext.state === 'suspended') {
          await this.audioContext.resume();
        }
      }

      // 2. Try HTML5 Audio playback
      if (!this.audioElement) {
        this.audioElement = new Audio();
        this.audioElement.src = this.trackUrl;
        this.audioElement.loop = true;
        this.audioElement.volume = 0.65;
        this.audioElement.crossOrigin = 'anonymous';
      }

      this.audioElement.muted = false;
      const playPromise = this.audioElement.play();
      
      if (playPromise !== undefined) {
        await playPromise;
      }
      
      this.isPlaying = true;
      this.isMuted = false;
      this.notify();
    } catch (err) {
      console.warn("HTML5 audio playback blocked/failed, starting dynamic Web Audio synth rhythm:", err);
      // Fallback: Web Audio Procedural Marathon Beat
      this.startSynth();
      this.isPlaying = true;
      this.isMuted = false;
      this.notify();
    }
  }

  startSynth() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.audioContext && AudioCtx) {
        this.audioContext = new AudioCtx();
      }
      if (!this.audioContext) return;

      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      this.stopSynth();
      const tempo = 128; // Energetic running cadence tempo
      const intervalMs = (60 / tempo) * 1000 / 2;

      let step = 0;
      this.synthInterval = setInterval(() => {
        if (!this.isPlaying || !this.audioContext) return;
        
        try {
          const now = this.audioContext.currentTime;
          const osc = this.audioContext.createOscillator();
          const gain = this.audioContext.createGain();
          osc.connect(gain);
          gain.connect(this.audioContext.destination);

          // Alternating bass drum kick and snare rhythm
          const isKick = step % 4 === 0;
          const isSnare = step % 4 === 2;
          const isHiHat = step % 2 === 1;

          if (isKick) {
            osc.frequency.setValueAtTime(140, now);
            osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
            osc.start(now);
            osc.stop(now + 0.18);
          } else if (isSnare) {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
          } else if (isHiHat) {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
          }
          
          step++;
        } catch (e) {
          // Ignore step generation glitches
        }
      }, intervalMs);
    } catch (e) {
      console.warn("Web Audio fallback error:", e);
    }
  }

  stopSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  pause() {
    if (this.audioElement) {
      try {
        this.audioElement.pause();
      } catch (e) {
        // Ignore
      }
    }
    this.stopSynth();
    this.isPlaying = false;
    this.isMuted = true;
    this.notify();
  }
}

export const audioManager = new AudioManager();
