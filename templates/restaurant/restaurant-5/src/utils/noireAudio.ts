// Royalty-Free Audio Controller for NOIRÉ Home Page
class NoireAudioController {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;

  constructor() {
    const savedMute = localStorage.getItem('noire_sound_muted');
    this.isMuted = savedMute === 'true';
    this.initAudio();
  }

  private initAudio() {
    if (typeof window === 'undefined') return;

    try {
      // Load royalty-free audio file from public/audio/noire_lounge.mp3
      this.audio = new Audio('/audio/noire_lounge.mp3');
      this.audio.loop = true;
      this.audio.volume = this.isMuted ? 0 : 0.18; // 18% ambient volume

      this.audio.addEventListener('error', (e) => {
        console.warn('Audio file notice: Graceful fallback active.', e);
      });
    } catch (err) {
      console.warn('Audio initialization notice: Graceful fallback active.', err);
    }
  }

  public start() {
    if (!this.audio || this.isPlaying) return;

    this.audio.volume = this.isMuted ? 0 : 0.18;
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch((err) => {
          // Autoplay blocked until user interaction - handled gracefully
          this.isPlaying = false;
        });
    }
  }

  public stop() {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('noire_sound_muted', String(this.isMuted));

    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : 0.18;
    }

    if (!this.isMuted && !this.isPlaying) {
      this.start();
    }

    return this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }
}

export const noireAudio = new NoireAudioController();
