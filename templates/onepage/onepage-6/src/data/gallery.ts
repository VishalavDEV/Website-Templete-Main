export interface GalleryItem {
  id: string;
  title: string;
  category: 'LIVE' | 'STUDIO' | 'FILM' | 'NIGHT' | 'PROCESS';
  location: string;
  year: string;
  caption: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square' | 'wide';
  colorHex: string;
  visualPattern: string; // SVG or Canvas generator type
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'THE FREQUENCY CHAMBER',
    category: 'LIVE',
    location: 'CHENNAI AUDIO LAB',
    year: '2026',
    caption: 'Live spatial synth arrays diffusing high frequency waveforms into light dust.',
    aspectRatio: 'vertical',
    colorHex: '#D76B4A',
    visualPattern: 'waves'
  },
  {
    id: 'gal-2',
    title: 'TAPE RESONANCE STUDY',
    category: 'STUDIO',
    location: 'CHROME DUSK ROOM',
    year: '2025',
    caption: 'Analog reel-to-reel magnetic tape calibration for sub-harmonic warmth.',
    aspectRatio: 'horizontal',
    colorHex: '#633E4B',
    visualPattern: 'tape'
  },
  {
    id: 'gal-3',
    title: 'AFTERIMAGE NOCTURNE',
    category: 'FILM',
    location: 'OUTER LIMITS',
    year: '2025',
    caption: '16mm grain capture of twilight reflections across metallic sculpture.',
    aspectRatio: 'wide',
    colorHex: '#B9A8C8',
    visualPattern: 'grain'
  },
  {
    id: 'gal-4',
    title: '03:48 AM MONITORING',
    category: 'NIGHT',
    location: 'BASEMENT STUDIO',
    year: '2026',
    caption: 'Oscilloscope trace during final mixdown of Static Bloom.',
    aspectRatio: 'square',
    colorHex: '#E89A83',
    visualPattern: 'oscilloscope'
  },
  {
    id: 'gal-5',
    title: 'MODULAR PATCH MATRIX',
    category: 'PROCESS',
    location: 'HARDWARE CORRIDOR',
    year: '2025',
    caption: 'CV control voltage cross-modulations between quad oscillators.',
    aspectRatio: 'vertical',
    colorHex: '#241F23',
    visualPattern: 'matrix'
  },
  {
    id: 'gal-6',
    title: 'MUMBAI AFTERMATH',
    category: 'LIVE',
    location: 'WAREHOUSE STAGE',
    year: '2025',
    caption: 'Silence falling over 600 attendees after the final ambient decay node.',
    aspectRatio: 'horizontal',
    colorHex: '#C9C5C0',
    visualPattern: 'lights'
  }
];
