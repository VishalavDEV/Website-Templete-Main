// Authentic Real Duke 4-Stroke Single-Cylinder Engine Audio Synthesizer (Web Audio API)
class DukeSoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.isEngineRunning = false;
    this.currentRpm = 1400; // Realistic idle RPM

    // Engine sound nodes
    this.masterGain = null;
    this.oscPulse = null;
    this.oscSaw = null;
    this.oscSub = null;
    this.noiseNode = null;
    this.exhaustFilter = null;
    this.distortionNode = null;
    this.limiterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Create distortion curve for aggressive 4-stroke exhaust bark
  makeDistortionCurve(amount = 25) {
    const k = amount;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  // Generate combustion exhaust stroke pulse buffer
  createCombustionBuffer() {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 0.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Periodic pulse spikes mimicking 4-stroke piston ignition strokes
      const t = i / this.ctx.sampleRate;
      data[i] = (Math.random() * 2 - 1) * Math.exp(-((i % 400) / 60));
    }
    return buffer;
  }

  // Authentic Duke Single-Cylinder 4-Stroke Engine Sound
  startEngine() {
    this.init();
    if (!this.ctx || this.isEngineRunning) return;

    try {
      this.isEngineRunning = true;
      const now = this.ctx.currentTime;

      // Master Engine Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.28, now + 0.2);

      // Distortion node for Duke single-cylinder exhaust bark
      this.distortionNode = this.ctx.createWaveShaper();
      this.distortionNode.curve = this.makeDistortionCurve(18);
      this.distortionNode.oversample = '4x';

      // Exhaust resonant chamber filter (Duke underbelly muffler acoustics)
      this.exhaustFilter = this.ctx.createBiquadFilter();
      this.exhaustFilter.type = 'lowpass';
      this.exhaustFilter.frequency.setValueAtTime(420, now);
      this.exhaustFilter.Q.setValueAtTime(4.5, now);

      // Mid-range punch peak filter for throttle braaap
      this.punchFilter = this.ctx.createBiquadFilter();
      this.punchFilter.type = 'peaking';
      this.punchFilter.frequency.setValueAtTime(240, now);
      this.punchFilter.gain.setValueAtTime(8, now);
      this.punchFilter.Q.setValueAtTime(2.0, now);

      // 1. Primary Piston Firing Oscillator (Square/Pulse)
      this.oscPulse = this.ctx.createOscillator();
      this.oscPulse.type = 'sawtooth';

      // 2. Metallic Valve-train / Camshaft Harmonic Oscillator
      this.oscSaw = this.ctx.createOscillator();
      this.oscSaw.type = 'triangle';

      // 3. Sub-Bass Thump Oscillator (Deep single-cylinder thumping pressure)
      this.oscSub = this.ctx.createOscillator();
      this.oscSub.type = 'sine';

      // 4. Exhaust Air Hiss / Combustion crackle
      const combustionBuffer = this.createCombustionBuffer();
      if (combustionBuffer) {
        this.noiseNode = this.ctx.createBufferSource();
        this.noiseNode.buffer = combustionBuffer;
        this.noiseNode.loop = true;
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(600, now);
        noiseFilter.Q.setValueAtTime(1.5, now);
        this.noiseNode.connect(noiseFilter);
        noiseFilter.connect(this.distortionNode);
        this.noiseNode.start(now);
      }

      this.setRpm(1400);

      // Connect Nodes
      this.oscPulse.connect(this.distortionNode);
      this.oscSaw.connect(this.distortionNode);
      this.oscSub.connect(this.distortionNode);

      this.distortionNode.connect(this.punchFilter);
      this.punchFilter.connect(this.exhaustFilter);
      this.exhaustFilter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.oscPulse.start(now);
      this.oscSaw.start(now);
      this.oscSub.start(now);
    } catch (e) {
      console.warn('Duke Audio start engine error:', e);
    }
  }

  // Real-time RPM Pitch and Exhaust Acoustic Modulator
  setRpm(rpm) {
    this.currentRpm = rpm;
    if (!this.ctx || !this.isEngineRunning || !this.oscPulse) return;

    const now = this.ctx.currentTime;
    // In a 4-stroke single cylinder, firing frequency = RPM / 120 (e.g. 1400 RPM = ~11.6 Hz base, audible sub-harmonics ~35-70 Hz)
    const baseFiringFreq = Math.max(22, (rpm / 60) * 1.5);

    // Primary pulse frequency tracking
    this.oscPulse.frequency.setTargetAtTime(baseFiringFreq, now, 0.04);
    // Valve-train 2nd harmonic
    this.oscSaw.frequency.setTargetAtTime(baseFiringFreq * 2.0, now, 0.04);
    // Sub-bass thump
    this.oscSub.frequency.setTargetAtTime(baseFiringFreq * 0.5, now, 0.04);

    // Exhaust muffler opening filter opens dynamically with RPM
    if (this.exhaustFilter) {
      // Lowpass cutoff rises from 380Hz at idle to 3,600Hz at full throttle roar
      const filterCutoff = 380 + Math.pow(rpm / 12000, 1.8) * 3200;
      this.exhaustFilter.frequency.setTargetAtTime(filterCutoff, now, 0.04);
    }

    if (this.punchFilter) {
      const punchFreq = 160 + (rpm / 12000) * 850;
      this.punchFilter.frequency.setTargetAtTime(punchFreq, now, 0.04);
      // More aggressive bite at higher RPM
      this.punchFilter.gain.setTargetAtTime(6 + (rpm / 12000) * 8, now, 0.04);
    }

    // Dynamic volume bump on acceleration
    if (this.masterGain) {
      const targetGain = 0.22 + (rpm / 12000) * 0.18;
      this.masterGain.gain.setTargetAtTime(targetGain, now, 0.05);
    }
  }

  // Smooth Engine Stop / Deceleration
  stopEngine() {
    if (!this.isEngineRunning || !this.masterGain || !this.ctx) return;
    this.isEngineRunning = false;

    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.4);

    setTimeout(() => {
      try {
        if (this.oscPulse) this.oscPulse.stop();
        if (this.oscSaw) this.oscSaw.stop();
        if (this.oscSub) this.oscSub.stop();
        if (this.noiseNode) this.noiseNode.stop();
        this.oscPulse = null;
        this.oscSaw = null;
        this.oscSub = null;
        this.noiseNode = null;
      } catch (e) {}
    }, 450);
  }

  // Ambient sound
  startAmbient() {
    this.init();
    if (!this.ctx || this.ambientGain) return;
    try {
      const osc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(60, this.ctx.currentTime);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, this.ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.03, this.ctx.currentTime + 1.5);

      osc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);
      osc.start();
      this._ambientOsc = osc;
    } catch (e) {}
  }

  stopAmbient() {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          if (this._ambientOsc) this._ambientOsc.stop();
          this._ambientOsc = null;
          this.ambientGain = null;
        } catch (e) {}
      }, 800);
    }
  }

  playClick() {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  }
}

export const audioEngine = new DukeSoundEngine();
