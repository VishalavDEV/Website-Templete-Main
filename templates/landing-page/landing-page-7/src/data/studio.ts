export interface StudioMember {
  name: string;
  role: string;
  bio: string;
  portraitInitials: string;
  accentColor: string;
}

export interface StudioStat {
  value: number;
  label: string;
}

export const STUDIO_MEMBERS: StudioMember[] = [
  {
    name: 'ARUN MEHTA',
    role: 'FOUNDING ARCHITECT',
    bio: 'Trained in Ahmedabad and Zurich. Focuses on structural mass, post-tensioned concrete, and thermal monolithic enclosures.',
    portraitInitials: 'AM',
    accentColor: 'var(--color-clay)',
  },
  {
    name: 'MIRA SEN',
    role: 'SPATIAL DESIGN',
    bio: 'Investigates shadow choreography, acoustic reflection, and the transition of natural light across interior thresholds.',
    portraitInitials: 'MS',
    accentColor: 'var(--color-rust)',
  },
  {
    name: 'NOAH RAO',
    role: 'MATERIAL RESEARCH',
    bio: 'Leads geological sourcing and earth pigment alchemy, testing volcanic basalt, slag concrete, and coastal river clays.',
    portraitInitials: 'NR',
    accentColor: 'var(--color-deep-brown)',
  },
];

export const STUDIO_STATS: StudioStat[] = [
  { value: 12, label: 'PROJECTS' },
  { value: 4, label: 'DISCIPLINES' },
  { value: 7, label: 'CITIES' },
  { value: 1, label: 'PHILOSOPHY' },
];
