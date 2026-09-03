export interface Material {
  id: string;
  name: string;
  essence: string;
  description: string;
  origin: string;
  finish: string;
  compressive: string;
  tactile: string;
  textureStyle: React.CSSProperties;
}

export const MATERIALS_DATA: Material[] = [
  {
    id: 'CONCRETE',
    name: 'CONCRETE',
    essence: 'Permanence. Mass. Brutal Honesty.',
    description: 'Cast in timber formwork, retaining the wood grain and deliberate imperfections of its making. A raw structural mass that anchors silence.',
    origin: 'Limestone Aggregates & Slag',
    finish: 'Timber Board-Formed Rough',
    compressive: '55 MPa Structural Load',
    tactile: 'Porous, Cool, Unyielding',
    textureStyle: {
      backgroundColor: '#2e2b29',
      backgroundImage: `radial-gradient(circle at 40% 40%, rgba(201, 193, 181, 0.25) 0%, transparent 60%), url('./images/hero.jpg')`,
      backgroundBlendMode: 'luminosity, normal',
      filter: 'contrast(1.15) brightness(0.85)',
    },
  },
  {
    id: 'CLAY',
    name: 'CLAY',
    essence: 'Warmth. Imperfection. Memory.',
    description: 'Used to create surfaces that age with the building. Hand-pressed terracotta tiles and sun-baked bricks that absorb coastal heat and release it into the cool night air.',
    origin: 'Riverbed Silt of Thanjavur',
    finish: 'Unglazed Hand-Pressed Matte',
    compressive: '18 MPa Thermal Cladding',
    tactile: 'Warm, Earthy, Velvety Texture',
    textureStyle: {
      backgroundColor: '#522b22',
      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(169, 103, 80, 0.4) 0%, transparent 70%), linear-gradient(45deg, rgba(135, 76, 60, 0.3) 0%, rgba(48, 40, 37, 0.8) 100%), url('./images/house_of_silence_interior.jpg')`,
      backgroundBlendMode: 'overlay, multiply, normal',
      filter: 'sepia(0.35) contrast(1.2) brightness(0.9)',
    },
  },
  {
    id: 'WOOD',
    name: 'WOOD',
    essence: 'Grain. Resonance. Living Breath.',
    description: 'Charred cedar treated with Shou Sugi Ban fire preservation and reclaimed coastal teak. A living organic material that contracts, expands, and hums in sympathy with human touch.',
    origin: 'Salvaged Nilgiri Teak & Hinoki',
    finish: 'Deep Charred Shou Sugi Ban & Linseed Oil',
    compressive: 'Flexible Tensile Joinery',
    tactile: 'Deep Fissured Grain, Velvety Charcoal',
    textureStyle: {
      backgroundColor: '#1f1a18',
      backgroundImage: `repeating-linear-gradient(90deg, rgba(48, 40, 37, 0.9) 0px, rgba(48, 40, 37, 0.9) 3px, rgba(82, 43, 34, 0.6) 4px, rgba(30, 26, 24, 0.9) 8px), url('./images/house_of_silence.jpg')`,
      backgroundBlendMode: 'multiply, luminosity',
      filter: 'contrast(1.3) brightness(0.75)',
    },
  },
  {
    id: 'STONE',
    name: 'STONE',
    essence: 'Geological Time. Deep Gravity.',
    description: 'Massive basalt blocks cleaved along natural volcanic rift lines. Providing an unyielding geological datum from which pure architectural volumes emerge.',
    origin: 'Deccan Traps Basalt Formations',
    finish: 'Thermal Split-Face Honed',
    compressive: '120 MPa High-Density Base',
    tactile: 'Cold, Chiseled, Micro-Granular',
    textureStyle: {
      backgroundColor: '#1c1b1a',
      backgroundImage: `radial-gradient(circle at 60% 30%, rgba(207, 199, 188, 0.25) 0%, transparent 50%), url('./images/hero.jpg')`,
      backgroundBlendMode: 'hard-light, normal',
      filter: 'grayscale(0.8) contrast(1.3) brightness(0.8)',
    },
  },
  {
    id: 'GLASS',
    name: 'GLASS',
    essence: 'Transparency. Void. Threshold.',
    description: 'Heavy structural fluted glass that shears coastal daylight into rhythmic vertical louvers, turning tropical rainstorms into painterly watercolor impressions.',
    origin: 'Low-Iron Silica Float Melt',
    finish: 'Fluted Reeded Prism Distortion',
    compressive: '28mm Triple-Laminated Acoustic',
    tactile: 'Smooth Fluted Ridges, Crystalline',
    textureStyle: {
      backgroundColor: '#23282b',
      backgroundImage: `repeating-linear-gradient(90deg, rgba(238, 233, 225, 0.15) 0px, rgba(238, 233, 225, 0.15) 6px, transparent 6px, transparent 18px), url('./images/house_of_silence.jpg')`,
      backgroundBlendMode: 'screen, overlay, luminosity',
      filter: 'contrast(1.2) brightness(0.95)',
    },
  },
  {
    id: 'STEEL',
    name: 'STEEL',
    essence: 'Tension. Blade. Slender Edge.',
    description: 'Hot-rolled unlacquered structural steel that oxidizes with maritime moisture. Extremely thin knife-edge fascias that define crisp shadows against heavy raw concrete.',
    origin: 'Recycled Electric Arc Furnace',
    finish: 'Natural Chemical Gunmetal Patina',
    compressive: '355 MPa High-Yield Tension',
    tactile: 'Cold, Sharp-Edged, Satin Oxide',
    textureStyle: {
      backgroundColor: '#181716',
      backgroundImage: `linear-gradient(120deg, rgba(135, 76, 60, 0.25) 0%, rgba(30, 26, 24, 0.9) 60%), url('./images/hero.jpg')`,
      backgroundBlendMode: 'color-dodge, multiply, normal',
      filter: 'contrast(1.4) brightness(0.7)',
    },
  },
];
