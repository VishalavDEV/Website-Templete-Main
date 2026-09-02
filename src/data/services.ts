import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'srv-1',
    slug: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy',
    shortDescription: 'We define the narrative anchor, market positioning, and strategic soul of category-defining brands.',
    fullDescription: 'Before aesthetics comes meaning. We partner with founders, executives, and innovators to extract their distinct truth, analyze competitive whitespace, and build an unassailable strategic foundation that commands premium pricing and attracts loyal audiences.',
    iconName: 'Compass',
    capabilities: [
      'Brand Positioning & North Star',
      'Market & Competitive Whitespace Research',
      'Audience Archetypes & Persona Mapping',
      'Brand Architecture & Portfolio Structuring',
      'Brand Messaging & Verbal Identity',
      'Executive Narrative Workshops'
    ],
    deliverables: [
      'Comprehensive Brand Strategy Blueprint (PDF & Web Portal)',
      'Brand Messaging Matrix & Tagline Systems',
      'Competitive Matrix & Differentiation Map',
      'Tone of Voice & Verbal Style Guidelines',
      'Internal Cultural Alignment Manifesto'
    ],
    timeline: '4 – 6 Weeks',
    idealFor: 'High-growth startups preparing for funding, enterprise pivots, or established companies losing narrative relevance.',
    processHighlights: [
      { phase: 'Discovery & Immersion', detail: 'Deep stakeholder interviews, customer audits, and competitive teardowns.' },
      { phase: 'Synthesis & Whitespace', detail: 'Uncovering the distinct intersection of technological capability and human desire.' },
      { phase: 'Positioning Architecture', detail: 'Drafting positioning frameworks, value propositions, and core pillars.' },
      { phase: 'Verbal System & Guidelines', detail: 'Creating actionable copy systems, tone spectrums, and elevator pitch formulations.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop',
    featuredProjectSlug: 'nova'
  },
  {
    id: 'srv-2',
    slug: 'visual-identity',
    number: '02',
    title: 'Visual Identity',
    shortDescription: 'Distinctive visual systems that bridge timeless graphic design with modern kinetic and spatial technology.',
    fullDescription: 'Your visual identity is an operating system for brand recognition. We craft bespoke typography, dynamic logos, fluid color systems, 3D asset libraries, and digital-first design tokens that scale seamlessly from tiny mobile icons to massive architectural billboards.',
    iconName: 'Sparkles',
    capabilities: [
      'Kinetic & Procedural Logo Systems',
      'Custom Typography & Variable Typecraft',
      'Color Science & Contrast Token Design',
      '3D Visual Systems & Sensory Assets',
      'Comprehensive Design Systems & Tokens',
      'Physical Packaging & Environmental Graphics'
    ],
    deliverables: [
      'Interactive Digital Brand Guidelines Portal',
      'Complete Vector & 3D Master Asset Kit',
      'Custom Variable Typeface Files (.woff2, .otf)',
      'Figma Token Library & CSS/JSON Tokens',
      'Stationery, Merchandise & Packaging Prototypes'
    ],
    timeline: '6 – 8 Weeks',
    idealFor: 'Visionary brands ready to replace tired, static templates with a living, adaptive visual presence.',
    processHighlights: [
      { phase: 'Visual Territory Exploration', detail: 'Moodboards, aesthetic vectors, and creative tension matrices.' },
      { phase: 'Core Mark & Typographic Craft', detail: 'Precision mathematical logomark sculpting and optical balancing.' },
      { phase: 'Kinetic Expansion', detail: 'Animating the brand in motion, testing responsive scaling and dark/light modes.' },
      { phase: 'Systematization & Tokens', detail: 'Exporting production-grade tokens ready for Figma and codebases.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop',
    featuredProjectSlug: 'vertex'
  },
  {
    id: 'srv-3',
    slug: 'web-design',
    number: '03',
    title: 'Web Design & UI/UX',
    shortDescription: 'Editorial digital experiences engineered to captivate attention and elevate conversions.',
    fullDescription: 'We merge haute-couture digital art direction with rigorous user psychology. Every interface is designed with mathematical rhythm, bespoke micro-interactions, responsive ergonomics, and clear visual hierarchy to turn passive visitors into engaged champions.',
    iconName: 'Layout',
    capabilities: [
      'Art Directed Editorial Digital Experiences',
      'High-Conversion E-Commerce UX/UI',
      'Complex Web Application & SaaS Product Design',
      'Interactive 3D / WebGL Art Direction',
      'Design Systems & Component Architectures',
      'Ergonomic Mobile & Tablet Responsive Layouts'
    ],
    deliverables: [
      'Production-Ready Figma Design Files with Auto-Layout',
      'Interactive Protopie / Figma High-Fidelity Prototypes',
      'Responsive Breakpoint Specifications (Mobile to 4K)',
      'Accessibility Audit & WCAG AA Compliance Specs',
      'Design Token Synchronizer'
    ],
    timeline: '6 – 10 Weeks',
    idealFor: 'Tech companies, luxury brands, and product innovators needing an Awwwards-caliber digital presence.',
    processHighlights: [
      { phase: 'Information Architecture & Wireframing', detail: 'User flow mapping, content hierarchy, and low-fidelity prototypes.' },
      { phase: 'Art Direction & Keyframes', detail: 'Establishing visual mood, typography pairing, and bespoke layouts.' },
      { phase: 'Interactive Prototyping', detail: 'Simulating micro-interactions, spring physics, and cursor mechanics.' },
      { phase: 'Handoff & Design QA', detail: 'Pixel-perfect developer specs, asset preparation, and design QA.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop',
    featuredProjectSlug: 'atlas'
  },
  {
    id: 'srv-4',
    slug: 'development',
    number: '04',
    title: 'Creative Engineering',
    shortDescription: 'Sub-second web performance, custom WebGL shaders, fluid motion, and robust full-stack systems.',
    fullDescription: 'Code is our primary creative medium. We write clean, high-performance TypeScript, React, Next.js, and WebGL to build digital products that feel instantaneous, accessible, and bulletproof across all modern devices and networks.',
    iconName: 'Code2',
    capabilities: [
      'React, Next.js & Modern TypeScript Architectures',
      'Creative Coding (WebGL, Three.js, GLSL Shaders)',
      'Performance Optimization (100 Lighthouse / Sub-100ms FCP)',
      'Headless CMS & E-Commerce Implementations',
      'Custom Motion Choreography (Motion, GSAP)',
      'Secure Edge APIs, WebSockets & Serverless'
    ],
    deliverables: [
      'Clean, Fully-Documented Git Repository',
      'CI/CD Deployment Pipelines with Edge Caching',
      'Comprehensive Cross-Browser & Device Test Suite',
      'Lighthouse 95+ Performance Guarantee',
      'CMS Training & Technical Documentation'
    ],
    timeline: '8 – 12 Weeks',
    idealFor: 'Organizations requiring uncompromised technical performance and cutting-edge interactive craftsmanship.',
    processHighlights: [
      { phase: 'Architecture & Stack Selection', detail: 'Setting up modern build systems, state management, and edge routing.' },
      { phase: 'Frontend Component Sprint', detail: 'Building modular, responsive UI components with rigorous type safety.' },
      { phase: 'Creative Motion & Shader Polish', detail: 'Tuning 60fps animations, physics damping, and GPU shaders.' },
      { phase: 'Optimization & Production Launch', detail: 'Bundle shrinking, asset compression, security headers, and rollout.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
    featuredProjectSlug: 'aether'
  },
  {
    id: 'srv-5',
    slug: 'motion',
    number: '05',
    title: 'Motion & 3D Video',
    shortDescription: 'Cinematic 3D animation, photorealistic CGI, product launch films, and kinetic brand assets.',
    fullDescription: 'Motion communicates what static design cannot: momentum, gravity, emotion, and dimensionality. We craft high-impact 3D product renders, brand launch films, spatial sound design, and UI motion guidelines that leave unforgettable impressions.',
    iconName: 'Film',
    capabilities: [
      'CGI Product Launch Films (4K/8K)',
      '3D Abstract Simulations & Physics Animations',
      'UI/UX Kinetic Choreography & Micro-Motion Specs',
      'Spatial Sound Design & Original Audio Scores',
      'Social Campaign Motion Toolkits & Templates',
      'Event Keynote Visuals & Stage Billboards'
    ],
    deliverables: [
      'Master ProRes 4444 & 4K Render Files',
      'Social Media Cutdowns (9:16, 1:1, 16:9)',
      'Transparent Lottie / Rive Interactive Web Assets',
      'Isolated Spatial Soundtracks & Audio Stems',
      'Motion Design Guidelines for In-House Teams'
    ],
    timeline: '4 – 8 Weeks',
    idealFor: 'Hardware unveilings, software feature announcements, and brand campaigns seeking cinematic gravitas.',
    processHighlights: [
      { phase: 'Storyboarding & Styleframes', detail: 'Scripting, pacing, visual direction, and 2D styleframes.' },
      { phase: '3D Modeling & Texturing', detail: 'High-poly asset creation, procedural materials, and realistic lighting.' },
      { phase: 'Animation & Dynamics', detail: 'Camera choreography, particle physics, and optical simulation.' },
      { phase: 'Sound Design & Mastering', detail: 'Custom sound effects, voice mastering, and final color grading.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop',
    featuredProjectSlug: 'pulse'
  },
  {
    id: 'srv-6',
    slug: 'growth',
    number: '06',
    title: 'Growth & Performance',
    shortDescription: 'Data-informed creative optimization, programmatic landing systems, and conversion velocity.',
    fullDescription: 'World-class design must drive real commercial results. We pair creative experimentation with mathematical performance analysis to scale customer acquisition, lower CAC, and maximize lifetime customer value through rigorous continuous optimization.',
    iconName: 'TrendingUp',
    capabilities: [
      'Conversion Rate Optimization (CRO) Audits',
      'Programmatic Landing Page Engines',
      'Multi-Variant Creative A/B Testing Systems',
      'Technical Search Engine Optimization (SEO)',
      'Customer Lifecycle Funnel Engineering',
      'Real-Time Analytics & User Journey Telemetry'
    ],
    deliverables: [
      'Bi-Weekly Experimentation & Hypothesis Logs',
      'High-Velocity Landing Page Modular Component Kit',
      'A/B Testing Statistical Confidence Reports',
      'Custom Analytics & Attribution Dashboard',
      'SEO Architecture & Core Web Vitals Benchmark'
    ],
    timeline: 'Ongoing / 3-Month Minimum Sprints',
    idealFor: 'Growth-stage companies wanting their marketing funnels to match the quality of their product.',
    processHighlights: [
      { phase: 'Friction Audit', detail: 'Heatmap analysis, scroll depth telemetry, and conversion dropoff diagnosis.' },
      { phase: 'Hypothesis Formulation', detail: 'Prioritizing experiments by potential impact and engineering effort.' },
      { phase: 'Design & Code Deployment', detail: 'Rapidly shipping localized variations and testing message-market fit.' },
      { phase: 'Measurement & Scaling', detail: 'Locking in statistical winners and expanding traffic allocation.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    featuredProjectSlug: 'meridian'
  }
];
