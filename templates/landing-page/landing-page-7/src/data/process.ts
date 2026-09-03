export interface ProcessStage {
  id: string;
  title: string;
  desc: string;
  schematic: 'SKETCH' | 'GRID' | 'STRUCTURE' | 'VOLUME' | 'SPACE';
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: '01',
    title: 'OBSERVE',
    desc: 'Every project begins with understanding its environment. We map solar trajectories, soil geology, acoustic currents, and local material traditions.',
    schematic: 'SKETCH',
  },
  {
    id: '02',
    title: 'IMAGINE',
    desc: 'Synthesizing light, topography, and human ritual into spatial possibilities. We carve empty negative space before deciding where solid matter resides.',
    schematic: 'GRID',
  },
  {
    id: '03',
    title: 'DRAW',
    desc: 'Translating intangible impulses into rigorous geometric blueprints, dimensional matrices, and structural tension calculations.',
    schematic: 'STRUCTURE',
  },
  {
    id: '04',
    title: 'BUILD',
    desc: 'Direct tectonic engagement with timber formwork, stone carving, and raw monolithic casting. Physical craft confronting immutable gravity.',
    schematic: 'VOLUME',
  },
  {
    id: '05',
    title: 'LIVE',
    desc: 'The finished structure is surrendered to time, ocean breezes, shifting sunlight, and the quiet choreography of everyday human life.',
    schematic: 'SPACE',
  },
];
