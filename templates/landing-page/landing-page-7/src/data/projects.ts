export interface ProjectChapter {
  headline: string;
  paragraph: string;
  image: string;
  meta: Array<{ label: string; val: string }>;
}

export interface Project {
  id: string;
  name: string;
  category: 'RESIDENTIAL' | 'CULTURAL' | 'INTERIOR' | 'HOSPITALITY' | 'EXPERIMENTAL';
  location: string;
  year: string;
  typology: string;
  footprint: string;
  image: string;
  description: string;
  chapters: {
    CONCEPT: ProjectChapter;
    MATERIAL: ProjectChapter;
    LIGHT: ProjectChapter;
    STRUCTURE: ProjectChapter;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: '01',
    name: 'HOUSE OF SILENCE',
    category: 'RESIDENTIAL',
    location: 'Chennai, India',
    year: '2026',
    typology: 'Monolithic Coastal Sanctuary',
    footprint: '420 m²',
    image: '/images/house_of_silence.jpg',
    description: 'A residence shaped around light, shadow and silence along the Bay of Bengal coast.',
    chapters: {
      CONCEPT: {
        headline: 'A Monolithic Coastal Sanctuary',
        paragraph: 'Located outside Chennai, House of Silence explores the poetic weight of cast concrete. The architecture withdraws from the chaos of the city to frame quiet horizons, shifting ocean breezes, and an intimate interior courtyard garden.',
        image: '/images/house_of_silence.jpg',
        meta: [
          { label: 'Typology', val: 'Private Residential Monograph' },
          { label: 'Site Footprint', val: '420 m² on 1,800 m² coastal plot' },
          { label: 'Orientation', val: 'East-West solar axis facing the Bay of Bengal' },
        ],
      },
      MATERIAL: {
        headline: 'Board-Formed Concrete & Terracotta',
        paragraph: 'Local river sand and granite aggregates were combined into board-formed concrete slabs that will weather naturally in the coastal marine salt air. Hand-pressed terracotta tiles line the inner courtyards to absorb and release heat gradually.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Concrete Mix', val: 'Slag cement + coastal granite aggregate' },
          { label: 'Surface Finish', val: 'Rough timber board-marked texture' },
          { label: 'Thermal Mass', val: '350mm loadbearing monolithic walls' },
        ],
      },
      LIGHT: {
        headline: 'Carving Shadows & Water Reflections',
        paragraph: 'Daylight does not enter directly; it is captured by recessed clerestory cuts and reflected over shallow water channels. The interior shifts from cool dawn shadows into deep amber luminescence by twilight.',
        image: '/images/house_of_silence_interior.jpg',
        meta: [
          { label: 'Natural Glazing', val: 'Deep overhangs eliminating solar glare' },
          { label: 'Reflecting Pool', val: 'Basalt-lined passive cooling channel' },
          { label: 'Illumination', val: 'Concealed low-kelvin warm architectural washes' },
        ],
      },
      STRUCTURE: {
        headline: 'Massive Cantilevers & Pure Gravity',
        paragraph: 'A structural feat of post-tensioned concrete cantilevers spanning up to 7.8 meters without visible columns. The living pavilion floats above the reflection pools, creating a spatial sensation of weightless mass.',
        image: '/images/house_of_silence.jpg',
        meta: [
          { label: 'Span Length', val: '7.8m post-tensioned cantilever slab' },
          { label: 'Structural Core', val: 'Monolithic shear walls' },
          { label: 'Foundation', val: 'Deep friction piles into coastal strata' },
        ],
      },
    },
  },
  {
    id: '02',
    name: 'VOID COURT',
    category: 'CULTURAL',
    location: 'Kyoto, Japan',
    year: '2025',
    typology: 'Exhibition Pavilion & Meditation Garden',
    footprint: '850 m²',
    image: '/images/hero.jpg',
    description: 'A brutalist cultural forum carved with circular oculi opening to rain and sky.',
    chapters: {
      CONCEPT: {
        headline: 'The Enclosure of Emptiness',
        paragraph: 'Void Court is an experimental gallery situated on the outskirts of Kyoto. Rather than displaying objects within rooms, the architecture frames changing atmospheric weather as the primary art exhibit.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Typology', val: 'Cultural Pavilion' },
          { label: 'Site Footprint', val: '850 m²' },
          { label: 'Material', val: 'Dark Basalt & Volcanic Aggregate' },
        ],
      },
      MATERIAL: {
        headline: 'Chiseled Volcanic Rock',
        paragraph: 'Unpolished split stone quarried from volcanic strata anchors the perimeter walls.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Stone', val: 'Split Basalt' },
          { label: 'Texture', val: 'Honed Flamed' },
        ],
      },
      LIGHT: {
        headline: 'Oculus Solar Dial',
        paragraph: 'A colossal 12-meter circular aperture in the roof casts an exact geometric ray of sunlight that moves across the interior water court throughout the day.',
        image: '/images/house_of_silence_interior.jpg',
        meta: [
          { label: 'Aperture', val: '12m Open Sky Oculus' },
          { label: 'Acoustics', val: 'Absorptive Cavity Louvers' },
        ],
      },
      STRUCTURE: {
        headline: 'Deep Ring Cantilever',
        paragraph: 'Pre-stressed radial concrete beams support the unsupported oculus rim.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'System', val: 'Radial Pre-stressed Post-Tension' },
          { label: 'Core', val: 'Cast Ring Girders' },
        ],
      },
    },
  },
  {
    id: '03',
    name: 'TERRACOTTA HOUSE',
    category: 'RESIDENTIAL',
    location: 'Madurai, India',
    year: '2026',
    typology: 'Thermal Clay Sanctuary',
    footprint: '380 m²',
    image: '/images/house_of_silence_interior.jpg',
    description: 'Hand-pressed clay latticework shielding family chambers from extreme tropical heat.',
    chapters: {
      CONCEPT: {
        headline: 'A Living Clay Screen',
        paragraph: 'An exploration of unglazed terracotta jali bricks designed to induce the Venturi effect for passive natural cooling.',
        image: '/images/house_of_silence_interior.jpg',
        meta: [
          { label: 'Typology', val: 'Thermal Residence' },
          { label: 'Material', val: 'Unglazed Red Terracotta' },
        ],
      },
      MATERIAL: {
        headline: 'Fired River Silt',
        paragraph: 'Tiles fired in traditional wood kilns with distinctive variations in ochre and sienna.',
        image: '/images/house_of_silence_interior.jpg',
        meta: [
          { label: 'Kiln Temp', val: '1050°C' },
          { label: 'Finish', val: 'Raw Unglazed' },
        ],
      },
      LIGHT: {
        headline: 'Dappled Sunlight Geometry',
        paragraph: 'Thousands of terracotta perforations filter intense direct sun into calming geometric patterns.',
        image: '/images/house_of_silence.jpg',
        meta: [
          { label: 'Porosity', val: '38% Void Ratio' },
        ],
      },
      STRUCTURE: {
        headline: 'Self-Supporting Masonry Vaults',
        paragraph: 'Catenary barrel vaults spanning between reinforced concrete ring beams.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'System', val: 'Catenary Tile Arch' },
        ],
      },
    },
  },
  {
    id: '04',
    name: 'CONCRETE GARDEN',
    category: 'HOSPITALITY',
    location: 'Goa, India',
    year: '2025',
    typology: 'Boutique Forest Retreat',
    footprint: '1,200 m²',
    image: '/images/house_of_silence.jpg',
    description: 'Interlocking concrete pavilions immersed within a dense coastal canopy.',
    chapters: {
      CONCEPT: {
        headline: 'Disappearing into Canopy',
        paragraph: 'Nine individual guest pavilions configured as quiet concrete monoliths scattered across the jungle terrain.',
        image: '/images/house_of_silence.jpg',
        meta: [
          { label: 'Typology', val: 'Hospitality Pavilion' },
          { label: 'Scale', val: '9 Monolithic Villas' },
        ],
      },
      MATERIAL: {
        headline: 'Green Cast Concrete',
        paragraph: 'Oxide-pigmented concrete matching the emerald green of coastal foliage.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Pigment', val: 'Chromium Oxide' },
        ],
      },
      LIGHT: {
        headline: 'Veranda Deep Shading',
        paragraph: 'Deep 4-meter overhangs create outdoor living verandas protected from monsoon deluges.',
        image: '/images/house_of_silence_interior.jpg',
        meta: [
          { label: 'Overhang', val: '4.2m Continuous' },
        ],
      },
      STRUCTURE: {
        headline: 'Tree-Safe Pier Foundations',
        paragraph: 'Elevated pile foundations ensuring zero disturbance to mature banyan roots.',
        image: '/images/house_of_silence.jpg',
        meta: [
          { label: 'Foundation', val: 'Pin Piles' },
        ],
      },
    },
  },
  {
    id: '05',
    name: 'FRAME / LIGHT',
    category: 'INTERIOR',
    location: 'Los Angeles, USA',
    year: '2026',
    typology: 'Sculptural Art Gallery Interior',
    footprint: '540 m²',
    image: '/images/hero.jpg',
    description: 'A subterranean exhibition topography sculpted from honed limestone and fluted glass.',
    chapters: {
      CONCEPT: {
        headline: 'Sculpting the Subterranean',
        paragraph: 'An underground vault converted into a cathedral of architectural shadow and silence.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Typology', val: 'Private Gallery' },
          { label: 'Depth', val: '6m Sub-grade' },
        ],
      },
      MATERIAL: {
        headline: 'Honed French Limestone',
        paragraph: 'Large continuous slabs with concealed joints creating seamless stone monolithic planes.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Stone', val: 'Pierre de Bourgogne' },
        ],
      },
      LIGHT: {
        headline: 'Continuous Perimeter Light Slit',
        paragraph: 'A narrow 150mm light well washing the raw perimeter walls with natural daylight from the courtyard above.',
        image: '/images/house_of_silence_interior.jpg',
        meta: [
          { label: 'Glazing Slit', val: '150mm Linear Skylight' },
        ],
      },
      STRUCTURE: {
        headline: 'Post-Tensioned Concrete Roof Deck',
        paragraph: 'Heavy structural roof slab supporting an above-ground reflective garden.',
        image: '/images/hero.jpg',
        meta: [
          { label: 'Load Capacity', val: '2.5 kN/m²' },
        ],
      },
    },
  },
];
