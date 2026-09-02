import { ClientStory } from '../types';

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 1,
    client: 'AURA',
    person: 'Maya Richardson',
    role: 'CMO',
    industry: 'Lifestyle',
    project: 'AURA — BRAND EXPERIENCE',
    projectSlug: 'aura',
    quote: "THEY DIDN'T JUST DELIVER WHAT WE ASKED FOR. THEY HELPED US SEE WHAT WAS POSSIBLE.",
    story: "We came into the project with a clear business challenge but were unsure how that should translate into the digital experience. The team helped us simplify the problem, challenge our assumptions and create a much stronger direction. The final result felt unmistakably ours.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    client: 'NORTH',
    person: 'Alex Morgan',
    role: 'CEO',
    industry: 'Finance',
    project: 'NORTH — FINTECH PLATFORM',
    projectSlug: 'north',
    quote: "THEY MADE THE WHOLE PROCESS FEEL SIMPLE. A RARE COMBINATION OF STRATEGY AND CRAFT.",
    story: "Building in fintech often means sacrificing elegance for regulatory compliance and dense datasets. Studio proved that high-trust institutional systems can be extraordinarily fluid, intuitive, and emotionally resonant. Our series B valuation doubled on the heels of the new platform launch.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    client: 'FORM',
    person: 'Lena Park',
    role: 'MARKETING DIRECTOR',
    industry: 'Retail',
    project: 'FORM — MODULAR COMMERCE',
    projectSlug: 'form',
    quote: "THE DETAIL IN EVERY INTERACTION WAS REMARKABLE. THEY FELT LIKE AN EXTENSION OF OUR TEAM.",
    story: "From day one, there was no friction between our internal engineers and the Studio crew. They brought a kinetic design system that sped up our development cycle by months while creating a bespoke retail checkout experience that our customers regularly praise on social media.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    client: 'MONO',
    person: 'James Carter',
    role: 'FOUNDER',
    industry: 'Culture',
    project: 'MONO — AUDIO ARCHITECTURE',
    projectSlug: 'mono',
    quote: "THE BEST CREATIVE PARTNER WE'VE WORKED WITH. THEY MADE COMPLEX FEEL NATURAL.",
    story: "Translating acoustic fidelity and generative sound waves into digital pixels sounded impossible until Studio mapped the physics of sound to WebGL shaders. The interactive catalog became a design landmark in the high-end audio community.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    client: 'VANTA',
    person: 'Sophia Reed',
    role: 'PRODUCT DIRECTOR',
    industry: 'Technology',
    project: 'VANTA — SECURITY & PROTOCOL',
    projectSlug: 'vanta',
    quote: "WE NEEDED A PARTNER WHO COULD UNDERSTAND BOTH THE PRODUCT AND THE BRAND.",
    story: "Cybersecurity interfaces are notoriously dry. Studio brought typographic rigor, real-time threat telemetry visualizations, and an authoritative dark-mode system that gave our enterprise clients complete operational confidence.",
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    client: 'ARC',
    person: 'Daniel Kim',
    role: 'CREATIVE DIRECTOR',
    industry: 'Media',
    project: 'ARC — AUTONOMOUS MOBILITY',
    projectSlug: 'arc',
    quote: "WORKING WITH STUDIO FELT LIKE GLIMPSING 3 YEARS INTO THE FUTURE OF CRAFT.",
    story: "The in-cockpit UI prototypes and cross-platform campaign design set a benchmark for autonomous vehicle human-machine interfaces. Their dedication to 60fps micro-animations and optical hierarchy is unmatched.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    client: 'NOVA',
    person: 'Elena Rostova',
    role: 'HEAD OF PRODUCT',
    industry: 'Health',
    project: 'NOVA — SPATIAL HEALTH LAB',
    projectSlug: 'nova',
    quote: "THEY BROUGHT COMPASSION, SCIENTIFIC RIGOR, AND UNPARALLELED DIGITAL FINISH.",
    story: "When designing diagnostic and clinical spatial interfaces, clarity saves lives. Studio structured our data visualizers with calm clarity, high-contrast readability, and seamless haptic feedback.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    client: 'LUMEN',
    person: 'Marcus Vance',
    role: 'VP OF BRAND',
    industry: 'Lifestyle',
    project: 'LUMEN — LIGHT & OPTICS',
    projectSlug: 'lumen',
    quote: "OUR BRAND VALUE DOUBLED OVERNIGHT. THE REACTION FROM INVESTORS WAS UNANIMOUS.",
    story: "Studio elevated our optics brand into a luxury digital landmark. The craftsmanship across tactile scroll sequences, generative lighting shaders, and editorial typography blew past every metric we set.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
];

export const INDUSTRY_TESTIMONIALS = [
  {
    industry: 'TECHNOLOGY',
    quote: "We needed a partner who could understand both the product architecture and the brand narrative.",
    client: 'VANTA',
    person: 'Sophia Reed',
    role: 'Product Director',
  },
  {
    industry: 'FINANCE',
    quote: "High-trust institutional banking systems made extraordinarily fluid, intuitive, and emotionally resonant.",
    client: 'NORTH',
    person: 'Alex Morgan',
    role: 'CEO',
  },
  {
    industry: 'RETAIL',
    quote: "A kinetic design system and bespoke checkout experience that our customers praise across social media.",
    client: 'FORM',
    person: 'Lena Park',
    role: 'Marketing Director',
  },
  {
    industry: 'CULTURE',
    quote: "Translating acoustic fidelity and generative sound waves into digital design landmarks.",
    client: 'MONO',
    person: 'James Carter',
    role: 'Founder',
  },
  {
    industry: 'LIFESTYLE',
    quote: "They didn't just deliver what we asked for. They helped us see what was truly possible.",
    client: 'AURA',
    person: 'Maya Richardson',
    role: 'CMO',
  },
  {
    industry: 'HEALTH',
    quote: "Calm clinical clarity and ergonomic data visualizers that build genuine practitioner trust.",
    client: 'NOVA',
    person: 'Elena Rostova',
    role: 'Head of Product',
  },
  {
    industry: 'MEDIA',
    quote: "In-cockpit UI prototypes and cross-platform campaign design setting an industry benchmark.",
    client: 'ARC',
    person: 'Daniel Kim',
    role: 'Creative Director',
  },
];

export const WALL_QUOTES = [
  {
    quote: "THE BEST CREATIVE PARTNER WE'VE WORKED WITH.",
    author: "James Carter",
    client: "MONO",
    size: "large",
    accent: true
  },
  {
    quote: "A RARE COMBINATION OF STRATEGY AND CRAFT.",
    author: "Alex Morgan",
    client: "NORTH",
    size: "medium",
    accent: false
  },
  {
    quote: "THEY MADE COMPLEX FEEL SIMPLE.",
    author: "Sophia Reed",
    client: "VANTA",
    size: "small",
    accent: false
  },
  {
    quote: "THE DETAIL IN EVERY INTERACTION WAS REMARKABLE.",
    author: "Lena Park",
    client: "FORM",
    size: "large",
    accent: false
  },
  {
    quote: "THEY FELT LIKE AN EXTENSION OF OUR TEAM.",
    author: "Daniel Kim",
    client: "ARC",
    size: "medium",
    accent: true
  },
  {
    quote: "AN UNMATCHED EYE FOR EDITORIAL RESTRAINT AND 60FPS PERFORMANCE.",
    author: "Elena Rostova",
    client: "NOVA",
    size: "small",
    accent: false
  }
];

export const CLIENT_WORDMARKS = [
  { name: 'AURA', symbol: '✦', sector: 'Spatial Systems' },
  { name: 'NORTH', symbol: '◆', sector: 'Fintech Platform' },
  { name: 'FORM', symbol: '✕', sector: 'Modular Retail' },
  { name: 'MONO', symbol: '▲', sector: 'Audio Architecture' },
  { name: 'VANTA', symbol: '■', sector: 'Security & Protocol' },
  { name: 'ARC', symbol: '●', sector: 'Autonomous Mobility' },
  { name: 'NOVA', symbol: '✸', sector: 'Health Computing' },
  { name: 'LUMEN', symbol: '⬡', sector: 'Optics & Light' },
];
