export interface Release {
  id: string;
  title: string;
  type: string; // 'EP' | 'ALBUM' | 'SINGLE'
  year: string;
  trackCount: number;
  duration: string;
  catalog: string;
  coverStyle: {
    bgGradient: string;
    accentColor: string;
    pattern: 'sphere' | 'rings' | 'grid' | 'waves';
  };
  tracklist: string[];
  credits: {
    production: string;
    mixing: string;
    mastering: string;
    artwork: string;
  };
  description: string;
}

export const RELEASES: Release[] = [
  {
    id: 'midnight-signal-ep',
    title: 'MIDNIGHT SIGNAL',
    type: 'EP',
    year: '2026',
    trackCount: 5,
    duration: '17:42',
    catalog: 'NX-001',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #241F23 0%, #633E4B 50%, #D76B4A 100%)',
      accentColor: '#D76B4A',
      pattern: 'sphere'
    },
    tracklist: [
      '01 MIDNIGHT SIGNAL (03:48)',
      '02 AFTERIMAGE (04:12)',
      '03 SOFT COLLISION (03:21)',
      '04 NOCTURNE//04 (05:07)',
      '05 STATIC BLOOM (03:56)'
    ],
    credits: {
      production: 'NOVA//ECHO',
      mixing: 'CHROME DUSK STUDIOS',
      mastering: 'ANALOG FREQUENCY LABS',
      artwork: 'EDITORIAL NOISE COLLABORATIVE'
    },
    description: 'A 5-track sonic exploration of nocturnal soundscapes, analog warmth, and subtle acoustic friction.'
  },
  {
    id: 'afterimage-lp',
    title: 'AFTERIMAGE',
    type: 'ALBUM',
    year: '2024',
    trackCount: 8,
    duration: '36:10',
    catalog: 'NX-002',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #633E4B 0%, #B9A8C8 50%, #E89A83 100%)',
      accentColor: '#B9A8C8',
      pattern: 'rings'
    },
    tracklist: [
      '01 RESONANCE (04:15)',
      '02 AFTERIMAGE (04:12)',
      '03 SILENT CHAMBER (05:22)',
      '04 FREQUENCY FIELD (03:50)',
      '05 GLASS MEMORY (04:44)',
      '06 DRIFT (04:01)',
      '07 ECHO IN WINE (05:10)',
      '08 DUSK HORIZON (04:36)'
    ],
    credits: {
      production: 'NOVA//ECHO',
      mixing: 'CHROME DUSK STUDIOS',
      mastering: 'TAPE & WIRE SOUND',
      artwork: 'MINIMAL ARCHIVE PROJECT'
    },
    description: 'Full-length album investigating the residual echoes of sound memory through reverberated tape loops and granular synth synthesis.'
  },
  {
    id: 'chrome-dusk-single',
    title: 'CHROME DUSK',
    type: 'SINGLE',
    year: '2026',
    trackCount: 2,
    duration: '08:15',
    catalog: 'NX-003',
    coverStyle: {
      bgGradient: 'linear-gradient(135deg, #241F23 0%, #C9C5C0 50%, #E89A83 100%)',
      accentColor: '#E89A83',
      pattern: 'waves'
    },
    tracklist: [
      '01 CHROME DUSK (04:15)',
      '02 CHROME DUSK (AMBIENT RE-INTERPRETATION) (04:00)'
    ],
    credits: {
      production: 'NOVA//ECHO',
      mixing: 'NOVA//ECHO',
      mastering: 'CHROME DUSK MASTERING',
      artwork: 'NOVA//ECHO VISUAL LABS'
    },
    description: 'Manifesto single celebrating the transition into light cream and dusk metallic textures.'
  }
];
