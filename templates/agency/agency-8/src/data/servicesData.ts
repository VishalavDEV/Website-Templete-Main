export interface DetailedService {
  id: string;
  number: string;
  slug: string;
  name: string;
  shortDesc: string;
  metadata: string;
  largeStatement: string;
  fullDesc: string;
  capabilities: string[];
  image: string;
  secondaryImage?: string;
  ctaText: string;
  relatedProject: string;
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'strategy',
    number: '01',
    slug: 'strategy',
    name: 'STRATEGY',
    shortDesc: 'We define the direction, positioning and experience before the pixels begin.',
    metadata: 'DISCOVERY / POSITIONING / EXPERIENCE',
    largeStatement: 'CLARITY BEFORE CREATION.',
    fullDesc: 'We uncover deep market asymmetries and define sharp digital product strategies that align technological capability with ambitious commercial goals.',
    capabilities: [
      'Brand Strategy',
      'Digital Strategy',
      'Research',
      'Positioning',
      'Experience Strategy',
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85',
    ctaText: 'EXPLORE STRATEGY',
    relatedProject: 'AURA Experience',
  },
  {
    id: 'brand-identity',
    number: '02',
    slug: 'branding',
    name: 'BRAND IDENTITY',
    shortDesc: 'We shape memorable visual languages and systems that establish unmistakable market presence.',
    metadata: 'IDENTITY / TYPOGRAPHY / MOTION GUIDELINES',
    largeStatement: 'MAKE THE BRAND IMPOSSIBLE TO IGNORE.',
    fullDesc: 'Crafting kinetic identity systems, bespoke typography, and design guidelines that command attention across every physical and digital touchpoint.',
    capabilities: [
      'Brand Strategy',
      'Visual Identity',
      'Art Direction',
      'Typography',
      'Brand Guidelines',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    ctaText: 'EXPLORE BRANDING',
    relatedProject: 'NORTH Identity',
  },
  {
    id: 'digital-design',
    number: '03',
    slug: 'digital-design',
    name: 'DIGITAL DESIGN',
    shortDesc: 'We architect engaging web interfaces, spatial software, and frictionless user flows.',
    metadata: 'UI/UX / DESIGN SYSTEMS / INTERACTION DESIGN',
    largeStatement: 'DESIGN THAT PEOPLE REMEMBER.',
    fullDesc: 'Transforming complex product flows into intuitive, emotionally resonant digital products with obsessive attention to micro-interaction and optical hierarchy.',
    capabilities: [
      'UX Strategy',
      'UI Design',
      'Design Systems',
      'Interaction Design',
      'Prototyping',
    ],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=85',
    ctaText: 'EXPLORE DIGITAL DESIGN',
    relatedProject: 'FORM Platform',
  },
  {
    id: 'development',
    number: '04',
    slug: 'development',
    name: 'DEVELOPMENT',
    shortDesc: 'We engineer high-performance platforms, interactive shaders, and scalable architectures.',
    metadata: 'FRONTEND / CREATIVE DEV / PERFORMANCE',
    largeStatement: 'TURNING DESIGN INTO EXPERIENCE.',
    fullDesc: 'Building blazing-fast web applications, creative shaders, and headless architectures with zero tolerance for lag, jank, or accessibility flaws.',
    capabilities: [
      'Web Development',
      'Frontend Engineering',
      'Creative Development',
      'Performance',
      'CMS Integration',
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85',
    ctaText: 'EXPLORE DEVELOPMENT',
    relatedProject: 'MONO Labs',
  },
  {
    id: 'creative-technology',
    number: '05',
    slug: 'creative-technology',
    name: 'CREATIVE TECHNOLOGY',
    shortDesc: 'We build experimental WebGL, generative visuals, and immersive interactive installations.',
    metadata: 'EXPERIMENTAL / WEBGL / GENERATIVE SYSTEMS',
    largeStatement: 'WHEN TECHNOLOGY BECOMES PART OF THE EXPERIENCE.',
    fullDesc: 'Bridging physical spaces and digital frontiers with generative algorithms, WebGPU experiences, interactive installations, and AI-assisted tools.',
    capabilities: [
      'Interactive Experiences',
      'Motion',
      'WebGL',
      'Generative Visuals',
      'Experimental Interfaces',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    ctaText: 'EXPLORE CREATIVE TECHNOLOGY',
    relatedProject: 'SPECTRA Optics',
  },
  {
    id: 'content-motion',
    number: '06',
    slug: 'content-motion',
    name: 'CONTENT & MOTION',
    shortDesc: 'We produce captivating motion graphics, art direction, and cinematic digital storytelling.',
    metadata: 'MOTION DESIGN / ART DIRECTION / VIDEO',
    largeStatement: 'MAKE PEOPLE STOP AND LOOK.',
    fullDesc: 'Creating arresting motion graphics, cinematic brand films, high-fidelity 3D assets, and multi-channel campaign content that captivates audiences instantly.',
    capabilities: [
      'Art Direction',
      'Photography',
      'Motion Design',
      'Video',
      'Campaign Content',
    ],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
    ctaText: 'EXPLORE CONTENT & MOTION',
    relatedProject: 'FRAME Gallery',
  },
];

export const CAPABILITY_TOOLKIT = [
  {
    category: 'STRATEGY',
    items: ['Research', 'Positioning', 'Planning', 'Experience Strategy', 'Commercial Discovery'],
  },
  {
    category: 'DESIGN',
    items: ['UX Strategy', 'UI Architecture', 'Branding & Identity', 'Art Direction', 'Design Systems'],
  },
  {
    category: 'TECHNOLOGY',
    items: ['Frontend Engineering', 'Creative Development', 'WebGL & Shaders', 'Performance Audits', 'Headless Integrations'],
  },
  {
    category: 'CONTENT',
    items: ['Motion Choreography', 'Photography Direction', 'Video Production', 'Campaign Narratives', 'Spatial Assets'],
  },
];
