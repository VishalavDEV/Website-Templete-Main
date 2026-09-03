export interface Equipment {
  id: string;
  name: string;
  category: string;
  roleInChain: string;
  synthFrequency: number;
  waveformType: OscillatorType;
  specs: string;
  details: string;
}

export const EQUIPMENT_LIST: Equipment[] = [
  {
    id: 'field-recorder',
    name: 'FIELD RECORDER',
    category: 'Capture & Input',
    roleInChain: '01. SOURCE CAPTURE',
    synthFrequency: 120,
    waveformType: 'sine',
    specs: '32-bit float / 192kHz Dual XLR Microphones',
    details: 'Captures physical acoustic anomalies, rain drops, train tracks, and urban whisper noise.'
  },
  {
    id: 'sampler',
    name: 'SAMPLER',
    category: 'Granular Engine',
    roleInChain: '02. GRANULAR SLICING',
    synthFrequency: 220,
    waveformType: 'triangle',
    specs: 'Custom Granular Engine / 16 Stereo Voice Polyphony',
    details: 'Chops captured field recordings into microscopic sonic particles and stretches time without altering pitch.'
  },
  {
    id: 'synth',
    name: 'ANALOG SYNTH',
    category: 'Harmonic Synthesis',
    roleInChain: '03. TONE & SUB GENERATION',
    synthFrequency: 185,
    waveformType: 'sawtooth',
    specs: 'Dual VCO / Ladder Lowpass Filter / Warm Analog Circuitry',
    details: 'Generates rich warm sub-tones, thick cream chords, and resonant dusk harmonics.'
  },
  {
    id: 'drum-machine',
    name: 'DRUM MACHINE',
    category: 'Rhythmic Pulse',
    roleInChain: '04. PULSE & PERCUSSION',
    synthFrequency: 90,
    waveformType: 'square',
    specs: 'Hybrid FM & Analog Transient Sculptor',
    details: 'Provides subtle rhythmic heartbeat pulses and organic woodblock ticks.'
  },
  {
    id: 'tape-machine',
    name: 'TAPE MACHINE',
    category: 'Saturation & Saturation',
    roleInChain: '05. TAPE SATURATION',
    synthFrequency: 330,
    waveformType: 'sine',
    specs: '1/4" Reel-to-Reel / 15 IPS Stereo Head',
    details: 'Imprints physical magnetic saturation, subtle flutter, and vintage organic texture.'
  },
  {
    id: 'modular',
    name: 'MODULAR SYNTH',
    category: 'Experimental Modulator',
    roleInChain: '06. FREQUENCY MODULATION',
    synthFrequency: 440,
    waveformType: 'sawtooth',
    specs: '104HP Eurorack Rig / Voltage Controlled LFOs & Delays',
    details: 'Modulates filter cutoffs dynamically based on pseudo-random chaos generators.'
  },
  {
    id: 'vocal-processor',
    name: 'VOCAL PROCESSOR',
    category: 'Spectral Spatial',
    roleInChain: '07. SPECTRAL PROCESSING',
    synthFrequency: 528,
    waveformType: 'triangle',
    specs: 'Real-time Pitch Shift & Shimmer Reverb Engine',
    details: 'Transforms vocal fragments into angelic, distant choral curtains that fill the stereo field.'
  }
];

export const SIGNAL_CHAIN_STEPS = [
  'FIELD RECORDER',
  'SAMPLER',
  'SYNTH',
  'TAPE MACHINE',
  'MODULAR',
  'MIX',
  'MASTER'
];
