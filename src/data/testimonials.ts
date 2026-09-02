import { Testimonial, ClientLogo, ProcessStep } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Horizon transformed our robotics company into the most coveted design-driven AI brand of the year. Their motion, hardware UI, and brand architecture is simply world-class.',
    author: 'Dr. Elena Vance',
    role: 'Co-Founder & CEO',
    company: 'Nova Robotics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    projectSlug: 'nova',
    metric: '$84M Series B closed'
  },
  {
    id: 't-2',
    quote: 'The sub-100ms speed and editorial luxury of our commerce ecosystem drove an immediate 58% surge in international transactions. Horizon delivered pure engineering magic.',
    author: 'Marcus Sterling',
    role: 'Global VP of Digital',
    company: 'Atlas Luxury Goods Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    projectSlug: 'atlas',
    metric: '+58% global conversion'
  },
  {
    id: 't-3',
    quote: 'Working with Horizon felt like collaborating with a top-tier Hollywood VFX studio and a boutique digital atelier at the same time. The launch film stopped our entire industry in its tracks.',
    author: 'Julian Meyer',
    role: 'Head of Creative',
    company: 'Pulse Acoustic Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    projectSlug: 'pulse',
    metric: 'Sold out in 14 mins'
  },
  {
    id: 't-4',
    quote: 'Horizon possesses that ultra-rare ability to deeply comprehend complex quantum physics and translate it into breathtaking, intuitive software that Fortune 500 CTOs trust.',
    author: 'Tariq Al-Mansoor',
    role: 'Chief Technology Officer',
    company: 'Vertex Quantum',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    projectSlug: 'vertex',
    metric: '+210% enterprise pipeline'
  },
  {
    id: 't-5',
    quote: 'Clients are literally speechless when they walk through our unbuilt architectural monoliths live in the browser. Horizon gave us an unassailable competitive advantage.',
    author: 'Leif Nordström',
    role: 'Principal Architect',
    company: 'Aether Spatial Studio',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    projectSlug: 'aether',
    metric: 'Site of the Year'
  }
];

export const clientLogos: ClientLogo[] = [
  { id: 'c-1', name: 'NOVA ROBOTICS', industry: 'Spatial AI & Hardware', ticker: 'NV-AI' },
  { id: 'c-2', name: 'ATLAS LUXURY', industry: 'Global High Fashion', ticker: 'AT-LX' },
  { id: 'c-3', name: 'PULSE ACOUSTICS', industry: 'Precision Audio', ticker: 'PL-SND' },
  { id: 'c-4', name: 'MERIDIAN PRIVATE', industry: 'Wealth Tech', ticker: 'MR-BNK' },
  { id: 'c-5', name: 'VERTEX QUANTUM', industry: 'Quantum Computing', ticker: 'VTX-Q' },
  { id: 'c-6', name: 'AETHER SPATIAL', industry: 'Civic Architecture', ticker: 'AET-SP' },
  { id: 'c-7', name: 'KRONOS BIOTECH', industry: 'Genomic Engineering', ticker: 'KRN-BIO' },
  { id: 'c-8', name: 'SPECTRA MOTORS', industry: 'Electric Hypercars', ticker: 'SPC-EV' }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Interrogate',
    subtitle: 'Extracting fundamental truths and market whitespace',
    description: 'We begin with rigorous immersion: questioning every assumption, auditing technical constraints, analyzing competitor landscapes, and defining the singular tension your brand or product resolves.',
    deliverables: ['Stakeholder Audit Matrix', 'Competitive Whitespace Map', 'Strategic Project North Star', 'Technical Feasibility Spec'],
    duration: 'Weeks 1 – 2'
  },
  {
    number: '02',
    title: 'Define & Strategize',
    subtitle: 'Architecting the narrative and interaction blueprint',
    description: 'We translate raw research into concrete strategy: crafting brand positioning, information architecture, creative concept territories, and establishing mathematical design parameters.',
    deliverables: ['Brand & Product Blueprint', 'Creative Territory Moodboards', 'Core User Flow Diagrams', 'Content Strategy & Messaging Matrix'],
    duration: 'Weeks 3 – 4'
  },
  {
    number: '03',
    title: 'Design & Sculpt',
    subtitle: 'Haute-couture aesthetics married to ergonomic precision',
    description: 'We bring concepts into tangible form through high-fidelity editorial layouts, bespoke typography, 3D asset generation, micro-interaction choreography, and living design systems.',
    deliverables: ['Production-Grade Figma Systems', 'Kinetic Motion Styleframes', 'Interactive Micro-Prototypes', 'Design Tokens & Component Specs'],
    duration: 'Weeks 5 – 8'
  },
  {
    number: '04',
    title: 'Build & Optimize',
    subtitle: 'Zero-compromise creative engineering and sub-100ms speed',
    description: 'Our engineers transform design into rock-solid software: writing clean TypeScript, custom WebGL shaders, responsive grid mechanics, and automated continuous deployment pipelines.',
    deliverables: ['Modular React/TypeScript Codebase', 'Custom Shader & Motion Pipelines', 'Lighthouse 95+ Performance Score', 'Cross-Device & Accessibility QA'],
    duration: 'Weeks 8 – 12'
  },
  {
    number: '05',
    title: 'Launch & Scale',
    subtitle: 'High-impact market unveiling and continuous evolution',
    description: 'We orchestrate unforgettable product premieres: coordinating launch campaigns, monitoring real-time telemetry, optimizing conversion funnels, and empowering your internal teams.',
    deliverables: ['Go-To-Market Launch Package', 'Real-Time Telemetry Dashboard', 'Team Handover & Asset Vault', 'Post-Launch CRO Roadmap'],
    duration: 'Ongoing'
  }
];
