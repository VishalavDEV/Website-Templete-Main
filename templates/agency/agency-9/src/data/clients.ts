export interface Client {
  name: string;
  industry: string;
  year: string;
  location: string;
}

export const CLIENTS: Client[] = [
  { name: 'AETHER', industry: 'Architecture & Spatial Intelligence', year: '2026', location: 'Tokyo / Zurich' },
  { name: 'NOVA', industry: 'Aerospace & Orbital Tech', year: '2026', location: 'Los Angeles' },
  { name: 'KINETIC', industry: 'Autonomous Electric Mobility', year: '2025', location: 'Berlin / Detroit' },
  { name: 'MONO', industry: 'Generative Audio Hardware', year: '2025', location: 'Stockholm' },
  { name: 'SORA', industry: 'Acoustic Sound Labs', year: '2025', location: 'Tokyo' },
  { name: 'VOID', industry: 'Creative Technology Museum', year: '2026', location: 'London' },
  { name: 'LUMEN', industry: 'Off-grid Solar Infrastructure', year: '2025', location: 'San Francisco' },
  { name: 'NORTH', industry: 'Sub-Arctic Hospitality Group', year: '2024', location: 'Reykjavik' }
];
