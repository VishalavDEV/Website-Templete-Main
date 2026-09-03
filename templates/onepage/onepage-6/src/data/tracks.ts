export interface Track {
  id: string;
  number: string;
  title: string;
  duration: string;
  durationSec: number;
  frequency: string;
  bpm: number;
  key: string;
  genre: string;
  album: string;
  synthNotes: number[]; // Frequencies for Web Audio API preview synth
  description: string;
}

export const TRACKS: Track[] = [
  {
    id: 'midnight-signal',
    number: '01',
    title: 'MIDNIGHT SIGNAL',
    duration: '03:48',
    durationSec: 228,
    frequency: '432 Hz',
    bpm: 110,
    key: 'F# Minor',
    genre: 'Ambient Electronic',
    album: 'MIDNIGHT SIGNAL EP',
    synthNotes: [185.00, 220.00, 277.18, 329.63, 370.00], // F#3, A3, C#4, E4, F#4
    description: 'Layered analog sub-bass with drifting warm tape hiss and grainy textures.'
  },
  {
    id: 'afterimage',
    number: '02',
    title: 'AFTERIMAGE',
    duration: '04:12',
    durationSec: 252,
    frequency: '528 Hz',
    bpm: 96,
    key: 'C Minor',
    genre: 'Alternative Ambient',
    album: 'AFTERIMAGE LP',
    synthNotes: [130.81, 155.56, 196.00, 246.94, 261.63], // C3, Eb3, G3, B3, C4
    description: 'Reverberated piano motifs colliding with modular granular clouds.'
  },
  {
    id: 'soft-collision',
    number: '03',
    title: 'SOFT COLLISION',
    duration: '03:21',
    durationSec: 201,
    frequency: '440 Hz',
    bpm: 84,
    key: 'Ab Major',
    genre: 'Experimental Electronic',
    album: 'MIDNIGHT SIGNAL EP',
    synthNotes: [207.65, 261.63, 311.13, 415.30], // Ab3, C4, Eb4, Ab4
    description: 'Pulsing polyrhythms and metallic frequency resonance.'
  },
  {
    id: 'nocturne-04',
    number: '04',
    title: 'NOCTURNE//04',
    duration: '05:07',
    durationSec: 307,
    frequency: '216 Hz',
    bpm: 72,
    key: 'D Minor',
    genre: 'Dark Ambient',
    album: 'MIDNIGHT SIGNAL EP',
    synthNotes: [146.83, 174.61, 220.00, 293.66], // D3, F3, A3, D4
    description: 'Deep nocturnal drone piece with distant vocal fragments.'
  },
  {
    id: 'static-bloom',
    number: '05',
    title: 'STATIC BLOOM',
    duration: '03:56',
    durationSec: 236,
    frequency: '432 Hz',
    bpm: 120,
    key: 'E Minor',
    genre: 'Chroma Electronic',
    album: 'MIDNIGHT SIGNAL EP',
    synthNotes: [164.81, 196.00, 246.94, 293.66, 329.63], // E3, G3, B3, D4, E4
    description: 'Dynamic kinetic percussion interwoven with warm cream synth pads.'
  }
];
