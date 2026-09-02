import { Project, Service, ProcessStep, StatItem, Testimonial, ClientLogo } from '../types';

export const CLIENTS: ClientLogo[] = [
  { name: 'NOVA', category: 'Spatial Computing', symbol: '✦' },
  { name: 'MONO', category: 'Audio Architecture', symbol: '▲' },
  { name: 'ARC', category: 'Autonomous Mobility', symbol: '●' },
  { name: 'VANTA', category: 'Security & Protocol', symbol: '■' },
  { name: 'NORTH', category: 'Fintech Platform', symbol: '◆' },
  { name: 'FORM', category: 'Modular Commerce', symbol: '✕' },
  { name: 'FRAME', category: 'Digital Gallery', symbol: '⬡' },
  { name: 'ATLAS', category: 'Global Logistics', symbol: '◈' },
  { name: 'SPECTRA', category: 'Light & Optics', symbol: '✸' },
  { name: 'KINETIC', category: 'Robotics Studio', symbol: '◎' },
];

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    number: '01',
    name: 'Strategy',
    tagline: 'Positioning for market dominance',
    description: 'We uncover non-obvious market opportunities and define sharp digital product strategies that align technological capability with ambitious commercial goals.',
    deliverables: ['Brand Positioning', 'Digital Product Roadmap', 'Competitive Intelligence', 'User Research & Synthesis', 'Value Proposition Architecture'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accent: '#3b82f6'
  },
  {
    id: 'brand-identity',
    number: '02',
    name: 'Brand Identity',
    tagline: 'Distinctive visual ecosystems',
    description: 'Crafting kinetic identity systems, bespoke typography, and design guidelines that command attention across every physical and digital touchpoint.',
    deliverables: ['Kinetic Design Systems', 'Bespoke Type Direction', '3D Motion Guidelines', 'Interactive Brand Books', 'Multi-Platform Asset Kits'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accent: '#60a5fa'
  },
  {
    id: 'digital-design',
    number: '03',
    name: 'Digital Design',
    tagline: 'Award-winning user interfaces',
    description: 'Transforming complex product flows into intuitive, emotionally resonant digital products with obsessive attention to micro-interaction and optical hierarchy.',
    deliverables: ['Web & Mobile Applications', 'Spatial & 3D Interfaces', 'Design Systems at Scale', 'Prototyping & Motion Specs', 'UX Architecture'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    accent: '#2563eb'
  },
  {
    id: 'development',
    number: '04',
    name: 'Development',
    tagline: 'Performant creative engineering',
    description: 'Building blazing-fast web applications, creative shaders, and headless architectures with zero tolerance for lag, jank, or accessibility flaws.',
    deliverables: ['React & Next.js Architecture', 'WebGL & Three.js Shaders', 'Headless CMS Integration', 'Edge Infrastructure', 'Micro-Animation Engines'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    accent: '#93c5fd'
  },
  {
    id: 'creative-technology',
    number: '05',
    name: 'Creative Technology',
    tagline: 'Experimental interaction & spatial',
    description: 'Bridging physical spaces and digital frontiers with generative algorithms, WebGPU experiences, interactive installations, and AI-assisted tools.',
    deliverables: ['Generative Visuals', 'Interactive Installations', 'Spatial Audio Systems', 'Custom AI Tooling', 'WebGPU Experiments'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accent: '#3b82f6'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aura',
    number: '01',
    title: 'AURA',
    category: 'Brand Experience',
    client: 'Aura Spatial Systems',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'wide',
    description: 'An ethereal digital ecosystem designed for next-generation spatial computing hardware, combining real-time audio reactivity with tactile micro-interactions.',
    tags: ['Brand Experience', 'Creative Direction', 'WebGL Shader', 'Design System'],
    metrics: '+185% Engagement Duration',
    awards: ['Site of the Day', 'FWA of the Month', 'Awwwards Studio Winner'],
    accentColor: '#3b82f6'
  },
  {
    id: 'north',
    number: '02',
    title: 'NORTH',
    category: 'Digital Platform',
    client: 'North Financial Capital',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: 'tall',
    description: 'Redefining global institutional wealth management through an ultra-dense, keyboard-first web platform and algorithmic asset telemetry.',
    tags: ['Digital Platform', 'Fintech Architecture', 'Interface Design', 'Design Token Engine'],
    metrics: '$4.2B Volume Processed',
    awards: ['Red Dot Best of the Best', 'Webby Nominee'],
    accentColor: '#60a5fa'
  },
  {
    id: 'form',
    number: '03',
    title: 'FORM',
    category: 'Creative Commerce',
    client: 'Form Modular Atelier',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: 'tall',
    description: 'An architectural e-commerce flagship celebrating bespoke furniture craftsmanship with 60fps 3D configuration and editorial storytelling.',
    tags: ['Creative Commerce', '3D Configurator', 'Headless Shopify', 'Typography'],
    metrics: '+210% Direct DTC Sales',
    awards: ['Awwwards E-Commerce Site of the Year'],
    accentColor: '#38bdf8'
  },
  {
    id: 'mono',
    number: '04',
    title: 'MONO',
    category: 'Digital Identity',
    client: 'Mono Acoustic Labs',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'wide',
    description: 'Kinetic visual identity and spatial audio web exhibition celebrating brutalist audio engineering and acoustic science.',
    tags: ['Digital Identity', 'Spatial Audio', 'Interactive WebGL', 'Typography System'],
    metrics: '1.2M Unique Visitors',
    awards: ['FWA of the Day', 'Type Directors Club Award'],
    accentColor: '#818cf8'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Immersion & Hypothesis',
    description: 'We dismantle your problem space through deep stakeholder interviews, forensic competitive teardowns, and user behavior analysis to find the strategic leverage point.',
    duration: 'Week 01–02',
    deliverables: ['Stakeholder Insights Matrix', 'Opportunity Mapping', 'Technical Feasibility Audit']
  },
  {
    number: '02',
    title: 'Define',
    subtitle: 'Architecture & Creative North Star',
    description: 'We establish the foundational strategy, information architecture, and provocative creative concept before writing a single line of production code.',
    duration: 'Week 03–04',
    deliverables: ['Creative Concept Deck', 'UX Flow Schematics', 'Content Strategy Matrix']
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Form, Motion & System Craft',
    description: 'We translate the vision into bespoke typography, responsive layout systems, and interactive motion prototypes with obsessive fidelity.',
    duration: 'Week 05–08',
    deliverables: ['High-Fidelity Interactive Prototypes', 'Production Design System', 'Motion Choreography Specs']
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'Clean Engineering & Shaders',
    description: 'We engineer robust, accessible, high-performance web applications using modern stacks, testing every interaction down to the millisecond.',
    duration: 'Week 09–12',
    deliverables: ['Clean Modular Codebase', 'Shader & Animation Optimizations', 'Lighthouse 95+ Audit']
  },
  {
    number: '05',
    title: 'Launch',
    subtitle: 'Activation & Evolution',
    description: 'We orchestrate launch execution, setup analytics telemetry, train internal teams, and establish ongoing optimization roadmaps.',
    duration: 'Week 13+',
    deliverables: ['Production Deployment', 'Analytics Telemetry Setup', 'Documentation & Knowledge Transfer']
  }
];

export const STATS: StatItem[] = [
  {
    value: 120,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'High-impact digital experiences shipped worldwide'
  },
  {
    value: 42,
    suffix: '',
    label: 'Global Clients',
    description: 'From ambitious seed-stage disruptors to Fortune 500s'
  },
  {
    value: 8,
    suffix: '',
    label: 'Years Creating',
    description: 'Dedicated to craft, technological rigor, and vision'
  },
  {
    value: 18,
    suffix: '',
    label: 'Creative Specialists',
    description: 'Strategists, designers, engineers, and art directors'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'north-sarah',
    quote: "They didn't just understand our vision. They pushed it somewhere we hadn't imagined.",
    author: 'Sarah Mitchell',
    role: 'CEO & Founder',
    company: 'North Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectRef: 'NORTH Platform',
    year: '2025'
  },
  {
    id: 'aura-marcus',
    quote: "Working with Studio felt like glimpsing 3 years into the future of digital product craftsmanship.",
    author: 'Marcus Vance',
    role: 'Chief Product Officer',
    company: 'Aura Spatial Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectRef: 'AURA Experience',
    year: '2025'
  },
  {
    id: 'form-elena',
    quote: "Our brand perception and conversion rates shifted instantaneously upon launch. Exceptional execution.",
    author: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Form Modular Atelier',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    projectRef: 'FORM Commerce',
    year: '2024'
  },
  {
    id: 'mono-david',
    quote: "Precision, elegance, and uncompromised performance. They operate at the very pinnacle of agency craft.",
    author: 'David Chen',
    role: 'Head of Engineering',
    company: 'Mono Acoustic Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectRef: 'MONO Identity',
    year: '2024'
  }
];
