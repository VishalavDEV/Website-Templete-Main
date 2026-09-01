class FonixAudioEngine {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isPlaying: boolean = false;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;
    this.gainNode.connect(this.analyser);
  }

  public start() {
    this.init();
    if (!this.ctx || this.isPlaying) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // 432Hz Harmonic drone chords (Acoustic spatial signature)
    const frequencies = [108, 216, 432, 648];
    this.oscillators = frequencies.map((freq, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i === 0 ? 'sine' : i === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

      const oscGain = this.ctx!.createGain();
      oscGain.gain.setValueAtTime(0.04 / (i + 1), this.ctx!.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.gainNode!);
      osc.start();
      return osc;
    });

    this.isPlaying = true;
  }

  public stop() {
    if (!this.isPlaying) return;
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Safe disconnect
      }
    });
    this.oscillators = [];
    this.isPlaying = false;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getFrequencyEnergy(): number {
    if (!this.analyser || !this.isPlaying) return 1.0;
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    const avg = sum / dataArray.length;
    return 1.0 + (avg / 255) * 1.5;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new FonixAudioEngine();
