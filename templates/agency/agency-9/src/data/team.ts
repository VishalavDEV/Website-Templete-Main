export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  image: string;
  specialty: string[];
  quote: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'MAYA R.',
    role: 'Creative Director & Co-Founder',
    location: 'NEW YORK / 40.7128° N',
    bio: 'Former Art Director at Metahaven and Pentagram. Maya directs visual culture across OFFGRID, fusing brutalist architecture with haute couture editorial sensibility.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200',
    specialty: ['Creative Direction', 'Brand Systems', 'Typography', 'Art Direction'],
    quote: 'We don’t design for consensus. We design for obsession.'
  },
  {
    name: 'ARJUN K.',
    role: 'Strategy Director & Co-Founder',
    location: 'CHENNAI / 13.0827° N',
    bio: 'Pioneered zero-cliché positioning frameworks for venture-backed unicorns and heritage luxury houses. Arjun ensures every creative direction is backed by commercial firepower.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200',
    specialty: ['Brand Positioning', 'Cultural Research', 'Naming Strategy', 'Nomenclature'],
    quote: 'If your brand statement can be claimed by a competitor, it’s not strategy.'
  },
  {
    name: 'LENA V.',
    role: 'Design Director',
    location: 'LONDON / 51.5074° N',
    bio: 'Specialist in dynamic brand identity systems and print typography. Lena’s work has been exhibited at the Design Museum London and awarded D&AD Yellow Pencils.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200',
    specialty: ['Type Design', 'Editorial Systems', 'Packaging', 'Visual Identity'],
    quote: 'Details aren’t details. They make the product.'
  },
  {
    name: 'NOAH K.',
    role: 'Technical Director',
    location: 'BERLIN / 52.5200° N',
    bio: 'WebGL pioneer and creative developer. Noah crafts custom GLSL shaders, physics-based UI engines, and high-performance digital flagships that break browser benchmarks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200',
    specialty: ['WebGL / GLSL', 'Creative Coding', 'React Architecture', 'Performance'],
    quote: 'Code is our secondary paintbrush. Speed is our primary visual.'
  }
];

export const PHILOSOPHIES = [
  {
    statement: "GOOD DESIGN IS NOT DECORATION. IT CHANGES BEHAVIOR.",
    subtext: "If an experience doesn’t alter how a customer thinks, feels, or acts, it’s just expensive wallpaper."
  },
  {
    statement: "WE'D RATHER BE REMEMBERED THAN APPROVED.",
    subtext: "Safe design gets signed off quickly. Radical design changes industries permanently."
  },
  {
    statement: "SMALL BY DESIGN. MONOLITHIC IN IMPACT.",
    subtext: "No account managers. No bloated bureaucracy. Direct access to master practitioners only."
  }
];

export const AWARDS = [
  { year: '2026', title: 'Studio of the Year (Nominee)', organization: 'Awwwards' },
  { year: '2026', title: 'Site of the Month — AETHER', organization: 'Awwwards' },
  { year: '2025', title: 'Yellow Pencil — Brand Identity', organization: 'D&AD' },
  { year: '2025', title: 'Best of the Best — KINETIC HUD', organization: 'Red Dot Awards' },
  { year: '2025', title: 'Lumen Prize Finalist — VOID Engine', organization: 'Lumen Art Commission' },
  { year: '2024', title: 'FWA of the Month — NOIR Runway', organization: 'FWA Awards' }
];
