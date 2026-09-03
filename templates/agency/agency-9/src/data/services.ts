export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  process: { step: string; name: string; description: string }[];
  featuredProjectSlug?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy',
    tagline: 'We define the core conviction that makes your brand impossible to ignore.',
    description: 'Strategy at OFFGRID is not a sterile PowerPoint deck. It is a razor-sharp positioning framework built to align business ambition with cultural velocity. We identify white space, eliminate fluff, and define how your brand will win.',
    capabilities: [
      'Brand Positioning',
      'Market & Cultural Research',
      'Brand Architecture',
      'Naming & Nomenclature',
      'Verbal Identity & Tone of Voice',
      'Audience Persona Mapping'
    ],
    deliverables: [
      'Strategic Manifesto Book',
      'Positioning Matrix',
      'Nomenclature System',
      'Brand Tone Guidelines',
      'Competitive Intelligence Brief'
    ],
    process: [
      { step: '01', name: 'Deconstruction', description: 'Auditing existing brand equity, market dynamics, and competitor blindspots.' },
      { step: '02', name: 'Thesis', description: 'Crafting the singular, undeniable premise that sets your brand apart.' },
      { step: '03', name: 'Codification', description: 'Documenting tone of voice, naming taxonomy, and strategic guidelines.' }
    ],
    featuredProjectSlug: 'aether'
  },
  {
    id: 'visual-identity',
    number: '02',
    title: 'Visual Identity',
    tagline: 'Crafting visceral graphic systems that demand physical & digital presence.',
    description: 'We build visual identities designed for radical longevity. From bespoke typography and mark systems to tactile physical collateral, every pixel and print impression is engineered to inspire awe and command respect.',
    capabilities: [
      'Art Direction',
      'Bespoke Logo Systems',
      'Custom Typography',
      'Color System Architecture',
      'Brand Guidelines & Token Systems',
      'Packaging & Tactile Print Design'
    ],
    deliverables: [
      'Master Identity Suite',
      'Custom Typeface Specimen',
      'Brand Guidelines Platform',
      'Tactile Collateral Mockups',
      'Digital Design Tokens'
    ],
    process: [
      { step: '01', name: 'Exploration', description: 'Visual moodboards, typographic experiments, and mark concepts.' },
      { step: '02', name: 'Refinement', description: 'Stress-testing typography, icon grid alignments, and color contrast.' },
      { step: '03', name: 'Systemization', description: 'Building living digital brand guidelines for global scale.' }
    ],
    featuredProjectSlug: 'sora'
  },
  {
    id: 'digital-experiences',
    number: '03',
    title: 'Digital Experiences',
    tagline: 'Creating web flagships and products that transcend generic SaaS templates.',
    description: 'We build digital platforms that combine raw editorial aesthetics with seamless usability. High-speed performance, tactile micro-interactions, and spatial layouts turn visitors into lifelong brand evangelists.',
    capabilities: [
      'Digital Flagship Websites',
      'Digital Products & Web Apps',
      'Headless E-commerce Solutions',
      'Interactive Design Systems',
      'UX Research & Prototyping',
      'Information Architecture'
    ],
    deliverables: [
      'Interactive Prototype',
      'Component Design System',
      'High-Resolution Layout Specs',
      'User Flow Maps',
      'Responsive Breakpoint Grid'
    ],
    process: [
      { step: '01', name: 'Architecture', description: 'Structuring wireframes, user pathways, and content hierarchies.' },
      { step: '02', name: 'Interactive UI', description: 'Designing high-impact editorial layouts and dynamic states.' },
      { step: '03', name: 'Validation', description: 'Testing usability, accessibility, and cross-device performance.' }
    ],
    featuredProjectSlug: 'kinetic'
  },
  {
    id: 'creative-development',
    number: '04',
    title: 'Creative Development',
    tagline: 'Engineering high-performance WebGL, shaders, and creative coding.',
    description: 'Our engineering lab bridges art and code. We specialize in custom canvas animations, WebGL 3D scenes, physics simulations, and generative visual engines built with zero compromise on speed.',
    capabilities: [
      'Creative Coding & Canvas',
      'WebGL & GLSL Shaders',
      'Generative Visual Systems',
      'Interactive Installations',
      'Custom Motion & Physics Systems',
      'Performance Optimization'
    ],
    deliverables: [
      'WebGL Shaders & Canvas FX',
      'Production Codebase',
      'Interactive Web Demos',
      'CMS Integration Layer',
      'Lighthouse 95+ Audit'
    ],
    process: [
      { step: '01', name: 'Prototyping', description: 'Writing shader math and physics loops in isolated code sandboxes.' },
      { step: '02', name: 'Integration', description: 'Embedding visual engines cleanly into React and WebGL pipelines.' },
      { step: '03', name: 'Optimization', description: 'Achieving locked 60fps across mobile and desktop devices.' }
    ],
    featuredProjectSlug: 'void'
  },
  {
    id: 'campaigns',
    number: '05',
    title: 'Campaigns',
    tagline: 'Launching provoke-and-capture cultural campaigns that hijack attention.',
    description: 'We conceive global campaigns designed to cut through algorithmic noise. By unifying provocative creative direction, wild posting systems, and digital stunts, we build moments that dominate cultural headlines.',
    capabilities: [
      'Creative Direction',
      'Campaign Concepting',
      'Social & Out-of-Home Systems',
      'Launch Activation Strategy',
      'Copywriting & Narrative',
      'Digital Stunts & Drops'
    ],
    deliverables: [
      'Master Campaign Playbook',
      'OOH Billboard Systems',
      'Social Content Engine',
      'Launch Video Teasers',
      'Press Release Asset Kit'
    ],
    process: [
      { step: '01', name: 'Provocation', description: 'Identifying cultural tension points and high-impact concepts.' },
      { step: '02', name: 'Production', description: 'Directing photo shoots, film teasers, and billboard layouts.' },
      { step: '03', name: 'Orchestration', description: 'Synchronizing multi-channel deployment across physical and digital.' }
    ],
    featuredProjectSlug: 'noir'
  },
  {
    id: 'motion-3d',
    number: '06',
    title: 'Motion & 3D',
    tagline: 'Breathing kinetic energy and photorealistic depth into modern brands.',
    description: 'Static logos belong in the past. We create fluid motion design systems, 3D product renders, kinetic typography, and title sequences that give brands a distinctive physical weight.',
    capabilities: [
      'Motion Identity Systems',
      'Photorealistic 3D Renders',
      'Kinetic Typography',
      'Title Sequences & Shorts',
      'Spatial UI Animation',
      'Sound Design Integration'
    ],
    deliverables: [
      'Motion Design Guidelines',
      '3D Product Asset Pack',
      'Lottie & SVG Animations',
      'Master Video Renders (4K)',
      'Sound FX Library'
    ],
    process: [
      { step: '01', name: 'Storyboarding', description: 'Mapping timing curves, camera paths, and keyframes.' },
      { step: '02', name: 'LookDev & Lighting', description: 'Sculpting materials, volumetric lights, and camera depth.' },
      { step: '03', name: 'Rendering & Audio', description: 'High-res rendering, color grading, and sonic layering.' }
    ],
    featuredProjectSlug: 'noir'
  }
];
