export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  content: string;
  manifestoQuote: string;
  highlights: string[];
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: '2021',
    title: 'FIRST SIGNAL',
    subtitle: 'Genesis of acoustic & synthetic friction',
    content: 'NOVA//ECHO emerged in a subterranean recording room, experimenting with low-fidelity cassette loops and room acoustic reflections.',
    manifestoQuote: 'Noise is merely sound awaiting intentional structure.',
    highlights: [
      'Recorded 40+ hours of raw atmospheric soundscapes',
      'Constructed custom ribbon microphone arrays',
      'First secret web broadcast from an undisclosed location'
    ]
  },
  {
    year: '2022',
    title: 'THE ROOM',
    subtitle: 'Explorations in architectural acoustics',
    content: 'The release of "The Room" marked a pivot toward physical sound installations where spatial decay times dictate chord progressions.',
    manifestoQuote: 'The space holding the note is as loud as the note itself.',
    highlights: [
      'Exhibited spatial sound installation in Chennai gallery',
      'Debuted tape-manipulation live performances',
      'Featured on underground ambient compilations'
    ]
  },
  {
    year: '2024',
    title: 'AFTERIMAGE',
    subtitle: 'Full-length synthesis of light and shadow',
    content: 'The breakthrough LP "AFTERIMAGE" brought global attention to NOVA//ECHO\'s distinct "CHROME DUSK" aesthetic—balancing metallic gloss with warm terracotta hues.',
    manifestoQuote: 'Echoes do not fade; they transform into memory.',
    highlights: [
      'Released 8-track concept LP AFTERIMAGE',
      'Performances across 6 major Indian venues',
      'Nominated for Independent Electronic Album of the Year'
    ]
  },
  {
    year: '2025',
    title: 'NIGHT TRANSMISSIONS',
    subtitle: 'Immersive audio-visual tour',
    content: 'A 14-city live broadcast tour utilizing real-time modular synthesizer improvisations synchronized with reactive light installations.',
    manifestoQuote: 'When the sun drops, frequencies find their true velocity.',
    highlights: [
      'Sold out night sessions in Bangalore and Mumbai',
      'Collaborated with visual artist studio Editorial Noise',
      'Archived live soundboard recordings for future release'
    ]
  },
  {
    year: '2026',
    title: 'CHROME DUSK',
    subtitle: 'The current era',
    content: 'Entering a refined editorial phase. Heavy contrast, warm cream backgrounds, wine highlights, and metallic silver textures frame sound as an immersive digital album.',
    manifestoQuote: 'Sound lives between moments.',
    highlights: [
      'Launched the interactive digital experience website',
      'Releasing MIDNIGHT SIGNAL EP',
      'Announced 2026 Live Frequencies tour'
    ]
  }
];
