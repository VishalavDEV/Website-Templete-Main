import { Photo, ServicePackage, GearItem, StatItem, Publication, HeroSlide } from '../types/portfolio';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    title: 'THE GEOMETRY OF SILENCE',
    subtitle: 'High-contrast architectural monoliths and brutalist forms captured across Basel and Berlin.',
    category: 'Architecture / Spatial',
    location: 'Basel, Switzerland',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    cameraInfo: 'Hasselblad X2D 100C · XCD 38mm f/2.5 V · 1/250s · f/5.6 · ISO 64'
  },
  {
    id: 'hero-2',
    title: 'CHROMATIC SHADOWS',
    subtitle: 'Color-field studio editorial exploring emerald backdrops, striped textures, and directional window sunlight.',
    category: 'Editorial / Studio',
    location: 'Milan Atelier',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2400&q=85',
    cameraInfo: 'Leica M11 · Summilux-M 50mm f/1.4 ASPH · 1/1000s · f/1.4 · ISO 100'
  },
  {
    id: 'hero-3',
    title: 'SOLITARY ECHOES',
    subtitle: 'Nocturnal cinematic vignettes wandering through the rain-slicked neon avenues and umbrellas of Shibuya.',
    category: 'Street / Noir',
    location: 'Shibuya, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=2400&q=85',
    cameraInfo: 'Leica Q3 · 28mm Summilux f/1.7 · 1/60s · f/1.7 · ISO 1600'
  },
  {
    id: 'hero-4',
    title: 'TRANSCENDENT FORM',
    subtitle: 'Intimate studio portraiture study balancing cinematic dual-tone gel lighting and intense focal gaze.',
    category: 'Portraiture / Fine Art',
    location: 'Berlin Studio',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2400&q=85',
    cameraInfo: 'Sony Alpha 1 · FE 85mm f/1.4 GM · 1/250s · f/1.8 · ISO 100'
  }
];

export const GALLERY_PHOTOS: Photo[] = [
  {
    id: 'photo-1',
    title: 'Brutalist Monolith IV',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'wide',
    location: 'Basel, Switzerland',
    year: '2025',
    description: 'Rhythmic concrete cantilever beams balancing light and monumental tension in late autumn dusk.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 28mm f/4 P',
      focalLength: '28mm',
      aperture: 'f/8.0',
      shutterSpeed: '1/125s',
      iso: '64'
    },
    series: 'Structural Echoes',
    featured: true
  },
  {
    id: 'photo-2',
    title: 'The Alabaster Gaze',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
    aspectRatio: 'tall',
    location: 'Paris, France',
    year: '2026',
    description: 'Sculpted high-fashion yellow couture shot against architectural masonry under crisp Parisian daylight.',
    exif: {
      camera: 'Leica M11',
      lens: 'Summilux-M 50mm f/1.4 ASPH',
      focalLength: '50mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/2000s',
      iso: '64'
    },
    series: 'Vogue Paris Winter',
    featured: true
  },
  {
    id: 'photo-3',
    title: 'Nordic Interior Form',
    category: 'Minimal',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'square',
    location: 'Copenhagen, Denmark',
    year: '2025',
    description: 'Reductionist Scandinavian interior exploring wooden textures, spatial stillness, and directional daylight.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 35mm f/1.4 GM',
      focalLength: '35mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/250s',
      iso: '100'
    },
    series: 'Quietude',
    featured: false
  },
  {
    id: 'photo-4',
    title: 'Nocturne in Shinjuku',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1604604994333-f1b0e9471186?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'tall',
    location: 'Tokyo, Japan',
    year: '2025',
    description: 'Bustling Tokyo avenue enveloped in cobalt mist, headlights, and reflections of neon high-rise towers.',
    exif: {
      camera: 'Leica Q3',
      lens: 'Summilux 28mm f/1.7 ASPH',
      focalLength: '28mm',
      aperture: 'f/1.7',
      shutterSpeed: '1/60s',
      iso: '1600'
    },
    series: 'Tokyo After Dark',
    featured: true
  },
  {
    id: 'photo-5',
    title: 'Obsidian Velvet',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80',
    aspectRatio: 'tall',
    location: 'Berlin Studio',
    year: '2026',
    description: 'Dual-tone studio portraiture study balancing cyan and amber gel illumination on sculpted bone structure.',
    exif: {
      camera: 'Sony Alpha 1',
      lens: 'FE 85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/250s',
      iso: '100'
    },
    series: 'Monochrome Souls',
    featured: true
  },
  {
    id: 'photo-6',
    title: 'Vertical Monolith',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'standard',
    location: 'Rotterdam, Netherlands',
    year: '2024',
    description: 'Geometric glass and steel corporate tower ascending into crisp northern daylight.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 21mm f/4',
      focalLength: '21mm',
      aperture: 'f/11',
      shutterSpeed: '1/80s',
      iso: '64'
    },
    series: 'Future Relics',
    featured: false
  },
  {
    id: 'photo-7',
    title: 'Silk & Saffron',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'wide',
    location: 'Marrakech, Morocco',
    year: '2025',
    description: 'Flowing silk garments caught in sudden desert gusts against weathered terracotta walls.',
    exif: {
      camera: 'Sony Alpha 1',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/3200s',
      iso: '100'
    },
    series: 'Sahara Mirage',
    featured: true
  },
  {
    id: 'photo-8',
    title: 'Rain on Regent Street',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'square',
    location: 'London, UK',
    year: '2024',
    description: 'London street reflections cutting through amber streetlamp puddles in a mid-winter squall.',
    exif: {
      camera: 'Leica M11',
      lens: 'Summicron-M 35mm f/2 ASPH',
      focalLength: '35mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/160s',
      iso: '800'
    },
    series: 'London Fog',
    featured: false
  },
  {
    id: 'photo-9',
    title: 'Ethereal Contour',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80',
    aspectRatio: 'tall',
    location: 'Berlin, Germany',
    year: '2025',
    description: 'Intimate profile lighting capturing nuanced expressions of contemplative stillness.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 90mm f/2.5 V',
      focalLength: '90mm',
      aperture: 'f/2.5',
      shutterSpeed: '1/400s',
      iso: '100'
    },
    series: 'Faces of Kreuzberg',
    featured: false
  },
  {
    id: 'photo-10',
    title: 'Reflections in Glass',
    category: 'Minimal',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'tall',
    location: 'Zurich, Switzerland',
    year: '2025',
    description: 'Pure white planar geometry, pool water reflection, and minimalist architectural precision.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 24-70mm f/2.8 GM II',
      focalLength: '24mm',
      aperture: 'f/8.0',
      shutterSpeed: '1/200s',
      iso: '100'
    },
    series: 'Quietude',
    featured: true
  },
  {
    id: 'photo-11',
    title: 'Dusk Over Shibuya Crossing',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'wide',
    location: 'Tokyo, Japan',
    year: '2026',
    description: 'Iconic rain umbrellas and towering electronic billboard glow crossing Shibuya under twilight sky.',
    exif: {
      camera: 'Leica Q3',
      lens: '28mm Summilux f/1.7',
      focalLength: '28mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/60s',
      iso: '800'
    },
    series: 'Tokyo After Dark',
    featured: false
  },
  {
    id: 'photo-12',
    title: 'Cantilever Villa',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    aspectRatio: 'square',
    location: 'Basel, Switzerland',
    year: '2024',
    description: 'Monolithic concrete residence balancing warm illuminated living spaces with cool twilight exterior.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5 V',
      focalLength: '55mm',
      aperture: 'f/6.3',
      shutterSpeed: '1/160s',
      iso: '64'
    },
    series: 'Structural Echoes',
    featured: false
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-editorial',
    title: 'Editorial & Campaign',
    subtitle: 'High-fashion lookbooks, magazine spreads, and brand visual identity.',
    priceRange: 'From $4,200',
    duration: 'Full-Day Production (8h)',
    popular: true,
    tag: 'Flagship Offering',
    deliverables: [
      'Full creative direction & moodboard synthesis',
      'Location scouting & digital tech on set',
      'Medium format 100MP Hasselblad capture',
      '40 master retouched high-res deliverables',
      'Full worldwide digital & print editorial licensing',
      'Same-day preview contact sheets'
    ]
  },
  {
    id: 'pkg-architecture',
    title: 'Architectural & Spatial',
    subtitle: 'Interior designer showcases, architectural monographs, and luxury developments.',
    priceRange: 'From $3,100',
    duration: 'Multi-Phase Shoot (Dawn/Dusk)',
    tag: 'Architects & Studios',
    deliverables: [
      'Precision tilt-shift perspective correction',
      'Twilight & natural ambient lighting capture',
      'High dynamic range bracketed plates',
      '25 high-resolution architectural plates',
      'Commercial usage & architectural awards rights',
      'Turnaround in 5 business days'
    ]
  },
  {
    id: 'pkg-portrait',
    title: 'Private Portraiture & Press',
    subtitle: 'Signature fine-art portraits for artists, executives, authors, and tastemakers.',
    priceRange: 'From $1,950',
    duration: 'Half-Day Studio (3-4h)',
    tag: 'Intimate Sessions',
    deliverables: [
      'Pre-session styling & wardrobe consultation',
      'Studio chiaroscuro or environmental setting',
      'Leica M11 & analog medium format options',
      '15 master fine-art retouched prints & files',
      'Archival gallery-grade 13x19 fine art print',
      'Private cloud proofing gallery'
    ]
  },
  {
    id: 'pkg-commission',
    title: 'Museum & Brand Commission',
    subtitle: 'Bespoke large-scale documentary assignments, exhibitions, and corporate archives.',
    priceRange: 'Custom Quote',
    duration: 'Multi-Day / International Travel',
    tag: 'Enterprise & Curators',
    deliverables: [
      'Turnkey production management worldwide',
      'Archival museum-grade print masters',
      'Exclusive gallery exclusivity options',
      'Hardcover curated monograph publishing',
      'Behind-the-scenes 4K cinematic reels',
      'Unrestricted perpetual global buyout'
    ]
  }
];

export const GEAR_INVENTORY: GearItem[] = [
  {
    category: 'Cameras',
    model: 'Hasselblad X2D 100C',
    specs: '100MP Medium Format BSI CMOS, 16-bit color, 15-stop dynamic range',
    badge: 'Primary Studio'
  },
  {
    category: 'Cameras',
    model: 'Leica M11 Monochrom',
    specs: '60MP Full-Frame dedicated B&W sensor, ISO up to 200,000, legendary tonality',
    badge: 'Editorial B&W'
  },
  {
    category: 'Cameras',
    model: 'Sony Alpha 1',
    specs: '50.1MP Stacked Sensor, 30fps burst, high-speed fashion runway',
    badge: 'Campaign Speed'
  },
  {
    category: 'Optics',
    model: 'Leica Summilux-M 35mm f/1.4 ASPH',
    specs: 'The quintessential street & environmental portrait optic, razor sharp wide open',
    badge: 'Daily Lens'
  },
  {
    category: 'Optics',
    model: 'Hasselblad XCD 80mm f/1.9',
    specs: 'Fastest medium format lens produced, creamy three-dimensional bokeh',
    badge: 'Hero Glass'
  },
  {
    category: 'Optics',
    model: 'Sony FE 50mm f/1.2 GM',
    specs: 'Extreme resolving power, dual XD linear motors, flawless rendering',
    badge: 'Low Light'
  },
  {
    category: 'Lighting',
    model: 'Profoto B10X Plus (500Ws)',
    specs: 'High-speed sync, bi-color continuous modeling light, cordless mobility',
    badge: 'Location Light'
  },
  {
    category: 'Lighting',
    model: 'Profoto Clic Softbox Octa & Grid',
    specs: 'Ultra-soft wrap-around skin diffusion for intimate editorial portraits',
    badge: 'Modifier'
  },
  {
    category: 'Analog',
    model: 'Leica M6 TTL (0.72x)',
    specs: '35mm mechanical rangefinder, loaded with Kodak Tri-X 400 and Portra 160',
    badge: 'Film Archive'
  }
];

export const STATS: StatItem[] = [
  {
    value: 14,
    suffix: '+',
    label: 'Years in Practice',
    description: 'Documenting light across 30+ countries'
  },
  {
    value: 28,
    suffix: '',
    label: 'International Awards',
    description: 'IPA, Sony World Photography & PX3 Paris'
  },
  {
    value: 42,
    suffix: '',
    label: 'Solo & Group Exhibitions',
    description: 'Galleries in Tokyo, Basel, London, NYC'
  },
  {
    value: 180,
    suffix: '+',
    label: 'Published Works',
    description: 'Editorial spreads in top international press'
  }
];

export const PUBLICATIONS: Publication[] = [
  { name: 'VOGUE ITALIA', accolade: 'Editorial Feature 2025' },
  { name: 'ARCHITECTURAL DIGEST', accolade: 'Spatial Photography of the Year' },
  { name: 'WALLPAPER*', accolade: 'Design Awards Finalist' },
  { name: 'HARPER’S BAZAAR', accolade: 'Fashion Focus Selection' },
  { name: 'DWELL', accolade: 'Modern Living Cover Story' },
  { name: 'KINFOLK', accolade: 'Visual Essay Autumn Issue' }
];
