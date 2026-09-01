import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'hyperion-os',
    title: 'Hyperion Autonomous OS',
    category: 'Product',
    year: '2026',
    client: 'Hyperion Labs Inc.',
    industry: 'Autonomous Systems & AI',
    tagline: 'Redefining human-machine interaction for next-generation robotics.',
    description: 'A groundbreaking operating system interface designed for industrial autonomous robotics, combining spatial telemetry with real-time predictive controls.',
    challenge: 'Hyperion required an interface capable of rendering 120fps spatial sensor telemetry while allowing operators to issue instant overrides with zero input latency.',
    approach: 'We developed a modular dark-mode spatial interface using custom WebGL node rendering and context-aware predictive overlays.',
    result: 'Reduced operator reaction latency by 42% and won the 2026 Red Dot Industrial UX Award.',
    coverImage: 'assets/hyperion_os_preview_1787737686439.png',
    galleryImages: [
      'assets/hyperion_os_preview_1787737686439.png',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Product Strategy', 'UI/UX Design', 'Design System', 'WebGL Engineering'],
    metrics: [
      { label: 'Latency Reduction', value: '42%' },
      { label: 'Daily Active Pilots', value: '14,000+' },
      { label: 'Industry Awards', value: '3 International' }
    ],
    featured: true
  },
  {
    slug: 'nexus-mobility',
    title: 'Nexus EV Grid Experience',
    category: 'Web',
    year: '2025',
    client: 'Nexus Energy Global',
    industry: 'CleanTech & Automotive',
    tagline: 'Connecting 50,000 EV charging hubs into one unified live ecosystem.',
    description: 'An enterprise-scale web application for fleet managers and EV drivers, offering micro-second load balancing and real-time station diagnostics.',
    challenge: 'Managing fragmented grid data across 14 European nations with variable bandwidth networks without compromising speed or reliability.',
    approach: 'Engineered an edge-cached Web Socket dashboard architecture with offline-first client syncing and dynamic SVG grid maps.',
    result: 'Increased station utilization rates by 38% while cutting customer support calls by half.',
    coverImage: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Web Architecture', 'Frontend Engineering', 'API Integration', 'Performance Tuning'],
    metrics: [
      { label: 'Network Uptime', value: '99.99%' },
      { label: 'Stations Integrated', value: '50,000+' },
      { label: 'Efficiency Gain', value: '+38%' }
    ],
    featured: true
  },
  {
    slug: 'aura-audio',
    title: 'Aura Spatial Audio Engine',
    category: 'App',
    year: '2026',
    client: 'Aura Sound Corp',
    industry: 'Consumer Electronics & Audio',
    tagline: 'Immersive sound sculpting for audio engineers and audiophiles.',
    description: 'A cross-platform native-feeling desktop and mobile application providing 3D spatial acoustic tuning and binaural room impulse modeling.',
    challenge: 'Designing an intuitive touch interface for highly technical acoustic frequency parameters without overwhelming casual creators.',
    approach: 'Crafted a fluid gestural equalizer powered by custom Canvas shaders and tactile haptic feedback modeling.',
    result: 'Achieved 4.9/5 star average rating across 120,000 pro audio user downloads in year one.',
    coverImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Mobile App Design', 'Cross-platform Dev', 'Sound Design', 'Brand Architecture'],
    metrics: [
      { label: 'Active Users', value: '120K' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Preset Downloads', value: '1.2M' }
    ],
    featured: true
  },
  {
    slug: 'veritas-finance',
    title: 'Veritas Quantum Wealth',
    category: 'Branding',
    year: '2025',
    client: 'Veritas Capital Zurich',
    industry: 'Fintech & Private Wealth',
    tagline: 'Institutional wealth management for high-net-worth algorithmic portfolios.',
    description: 'Complete brand evolution and digital portal for a Swiss wealth management institution overseeing €4.2B in assets.',
    challenge: 'Balancing centuries of Swiss banking heritage with modern generative AI security visual cues.',
    approach: 'Formulated a sophisticated typographic system paired with precision micro-interactions and dark monolithic styling.',
    result: 'Attracted €850M in new institutional capital within 6 months post-rebrand.',
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Brand Strategy', 'Visual Identity', 'Typography', 'Digital Portal Design'],
    metrics: [
      { label: 'New AUM', value: '€850M' },
      { label: 'Client Retention', value: '99.4%' },
      { label: 'Brand Value Growth', value: '+65%' }
    ],
    featured: true
  },
  {
    slug: 'lumina-health',
    title: 'Lumina Diagnostic Suite',
    category: 'App',
    year: '2025',
    client: 'Lumina BioTech',
    industry: 'Healthcare & Clinical AI',
    tagline: 'AI-assisted genomic diagnostics interface for precision oncology.',
    description: 'A clinical workstation app that synthesizes complex genomic sequencing data into actionable visual tumor maps for oncologists.',
    challenge: 'Displaying dense multi-dimensional patient bio-markers with zero margin for visual ambiguity.',
    approach: 'Built high-contrast visual hierarchy guidelines paired with accessible color-blind friendly diagnostic heatmaps.',
    result: 'Reduced patient case review time from 45 minutes down to 12 minutes per specialist.',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Clinical UI/UX', 'Accessibility Audit', 'Design System', 'Data Visualization'],
    metrics: [
      { label: 'Time Saved per Case', value: '73%' },
      { label: 'Hospital Deployments', value: '85' },
      { label: 'Diagnostic Accuracy', value: '99.8%' }
    ]
  },
  {
    slug: 'solaris-energy',
    title: 'Solaris Smart Grid Platform',
    category: 'Web',
    year: '2026',
    client: 'Solaris Infrastructure',
    industry: 'Renewables & Infrastructure',
    tagline: 'Predictive solar battery distribution for smart municipal grids.',
    description: 'Interactive web platform providing live solar panel yield forecasts and automated battery storage dispatch across metropolitan areas.',
    challenge: 'Synthesizing satellite weather modeling feeds and smart meter telemetry in real time.',
    approach: 'Implemented dynamic WebGL particle visualizations to illustrate live energy flow vectors across cities.',
    result: 'Prevented 14 peak-load brownouts in test cities during extreme summer heatwaves.',
    coverImage: 'assets/solaris_grid_preview_1787737627417.png',
    galleryImages: [
      'assets/solaris_grid_preview_1787737627417.png',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Data Visualization', 'Fullstack Web Dev', 'Cloud Architecture'],
    metrics: [
      { label: 'Grid Peak Savings', value: '$4.2M' },
      { label: 'CO2 Offset', value: '180K Tons' }
    ]
  },
  {
    slug: 'kairo-watch',
    title: 'Kairo Horology 3D Studio',
    category: 'Experience',
    year: '2025',
    client: 'Kairo Watchmakers Tokyo',
    industry: 'Luxury Goods & E-Commerce',
    tagline: 'Ultra-photorealistic 3D timepiece customizer for collectors.',
    description: 'An interactive 3D web experience allowing watch enthusiasts to customize movements, dials, cases, and straps down to 10-micron precision.',
    challenge: 'Achieving sub-second loading of photorealistic PBR metallic materials on mobile web browsers.',
    approach: 'Custom Three.js shader pipeline using DRACO compression and light-probe reflections baked dynamically.',
    result: 'Increased e-commerce conversion rates by 210% with average session duration exceeding 8 minutes.',
    coverImage: 'assets/kairo_horology_preview_1787737712313.png',
    galleryImages: [
      'assets/kairo_horology_preview_1787737712313.png',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['3D WebGL Configurator', 'Experience Design', 'E-Commerce Integration'],
    metrics: [
      { label: 'Conversion Lift', value: '+210%' },
      { label: 'Avg Session Time', value: '8.4 mins' }
    ],
    featured: true
  },
  {
    slug: 'astral-robotics',
    title: 'Astral Fleet Command',
    category: 'Product',
    year: '2025',
    client: 'Astral Heavy Industries',
    industry: 'Aerospace & Logistics',
    tagline: 'Autonomous drone fleet navigation for global logistics hubs.',
    description: 'A multi-screen control center dashboard that tracks, directs, and services autonomous delivery drones in high-density airspace.',
    challenge: 'Coordinating multi-agent conflict resolution algorithms into a non-cluttered map GUI.',
    approach: 'Layered vector maps with context-sensitive alert triggers and tactile physical controller keyboard shortcuts.',
    result: 'Engineered zero incident safety metric across 2.4 million automated flights.',
    coverImage: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Control Center UX', 'Realtime Engineering', 'Design System'],
    metrics: [
      { label: 'Flights Managed', value: '2.4M' },
      { label: 'Incident Rate', value: '0.00%' }
    ]
  },
  {
    slug: 'velox-motors',
    title: 'Velox Hypercar Launch',
    category: 'Experience',
    year: '2026',
    client: 'Velox Automobili',
    industry: 'Automotive & Luxury',
    tagline: 'Digital reveal of the world’s fastest electric track hypercar.',
    description: 'An immersive web reveal experience featuring sound-reactive typography, WebGL chassis explode views, and instant pre-order reservation.',
    challenge: 'Generating viral excitement for a limited 50-unit vehicle production run.',
    approach: 'Synthesized cinematic video clips with interactive scroll-triggered canvas animations.',
    result: 'All 50 build slots sold out in 4 minutes following live stream reveal.',
    coverImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Interactive Launch Campaign', '3D Motion Design', 'Brand Storytelling'],
    metrics: [
      { label: 'Units Sold Out', value: '50 / 50' },
      { label: 'Launch Views', value: '3.8M' }
    ]
  },
  {
    slug: 'zenith-architects',
    title: 'Zenith Spatial Monograph',
    category: 'Branding',
    year: '2025',
    client: 'Zenith Architecture Copenhagen',
    industry: 'Architecture & Real Estate',
    tagline: 'Minimalist digital monograph celebrating Nordic structural engineering.',
    description: 'Brand identity, bespoke typography, and portfolio website for Copenhagen’s leading sustainable architecture practice.',
    challenge: 'Reflecting the tactile materiality of wood, concrete, and light within digital screens.',
    approach: 'High-contrast monochrome typography, generous whitespace, and smooth image transition masks.',
    result: 'Named Site of the Month on FWA and Awwwards.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Identity System', 'Editorial Design', 'Web Design & Dev'],
    metrics: [
      { label: 'Design Awards', value: '6 Top Honors' },
      { label: 'Inquiries Growth', value: '+140%' }
    ]
  },
  {
    slug: 'omni-pay',
    title: 'Omni Borderless Protocol',
    category: 'App',
    year: '2026',
    client: 'Omni Financial Technologies',
    industry: 'Fintech & Global Payments',
    tagline: 'Instant multi-currency settlement app for cross-border enterprise.',
    description: 'Mobile application allowing international supply chains to settle contracts in 40+ currencies with real-time liquidity matching.',
    challenge: 'Ensuring biometric security compliance while keeping transfer execution under 2 taps.',
    approach: 'Simplified card-based UI with micro-motion feedback and biometric passkey authentication.',
    result: 'Processed $1.8 Billion in international trade volume during pilot phase.',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['Fintech Mobile UX', 'Security Interface', 'Brand Identity'],
    metrics: [
      { label: 'Volume Processed', value: '$1.8B' },
      { label: 'Settlement Time', value: '< 3 sec' }
    ]
  },
  {
    slug: 'vortex-ai',
    title: 'Vortex Neural Studio',
    category: 'Product',
    year: '2026',
    client: 'Vortex AI Systems',
    industry: 'Generative Media & AI',
    tagline: 'Empowering Hollywood studios with controllable generative VFX pipelines.',
    description: 'Web app studio interface enabling visual effects directors to generate high-res 3D environments via direct prompt sculpting.',
    challenge: 'Providing frame-level timeline control over generative video model outputs.',
    approach: 'Created a dual timeline canvas interface integrating traditional NLE controls with node-based prompt graphs.',
    result: 'Adopted by 12 major film production houses in Los Angeles and London.',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80'
    ],
    services: ['AI Interface Design', 'Complex Canvas Architecture', 'Product Strategy'],
    metrics: [
      { label: 'Studios Adopted', value: '12 Major' },
      { label: 'Rendering Speed', value: '10x Faster' }
    ]
  }
];
