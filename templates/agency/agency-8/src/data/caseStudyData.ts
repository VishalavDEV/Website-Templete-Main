import { WORK_PROJECTS } from './workProjectsData';

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  categoryDisplay: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  accent: string;
  accentRgb: string;
  heroImage: string;
  description: string;
  challenge: {
    label: string;
    statement: string;
    description: string;
    disciplines: string[];
    team: string[];
    timeline: string;
    liveUrl?: string;
  };
  fullscreenVisual: {
    image: string;
    caption: string;
  };
  idea: {
    label: string;
    statement: string;
    description: string;
    image: string;
    pillars: Array<{ title: string; desc: string }>;
  };
  creativeDirection: {
    headline: string;
    description: string;
    typography: {
      display: string;
      body: string;
      mono: string;
      sample: string;
    };
    colors: Array<{ name: string; hex: string; role: string }>;
    composition: string;
    motionNote: string;
    sampleImage: string;
  };
  gallery: Array<{
    url: string;
    caption: string;
    type: 'wide' | 'portrait' | 'asymmetric' | 'overlapping' | 'detail';
    aspectRatio?: string;
  }>;
  experience: {
    headline: string;
    subhead: string;
    description: string;
    desktopMockup: string;
    mobileMockup: string;
    features: Array<{ title: string; description: string; tag: string }>;
  };
  motion: {
    headline: string;
    statement: string;
    description: string;
    mode: 'wave' | 'particles' | 'geometric' | 'fluid' | 'pulse' | 'orbit';
  };
  process: Array<{
    step: string;
    title: string;
    desc: string;
    deliverables: string[];
  }>;
  technology: {
    headline: string;
    statement: string;
    stack: Array<{ name: string; category: string; description: string }>;
    principles: Array<{ title: string; description: string }>;
  };
  outcomes: {
    headline: string;
    statement: string;
    metrics: Array<{ value: string; label: string; note: string }>;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  tags: string[];
  nextProject: {
    slug: string;
    number: string;
    title: string;
    category: string;
    image: string;
    accent: string;
  };
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  aura: {
    id: 'aura',
    slug: 'aura',
    number: '01',
    title: 'AURA',
    category: 'BRANDING',
    categoryDisplay: 'Brand Experience',
    client: 'AURA SPATIAL SYSTEMS',
    industry: 'LIFESTYLE & TECH',
    year: '2026',
    services: ['Brand Identity', 'Spatial UX', 'WebGL Shaders', 'Design System', 'Sound Identity'],
    accent: '#0066FF',
    accentRgb: '0, 102, 255',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=85',
    description: 'An ethereal brand and spatial interface ecosystem designed for next-generation holographic computing hardware, combining real-time audio reactivity with tactile micro-interactions.',
    challenge: {
      label: 'THE CHALLENGE',
      statement: 'A BRAND BUILT FOR THE NEXT GENERATION.',
      description: 'AURA needed a digital identity that could feel distinctive, flexible and unmistakably modern while remaining grounded in a clear brand strategy. The physical device required an accompanying web platform that could articulate volumetric spatial concepts to luxury consumers without feeling alienating or cold.',
      disciplines: ['Brand Strategy', 'Visual Identity', 'Spatial Design', 'Interactive Development'],
      team: ['Design Leadership', 'Spatial Prototyping', 'Creative Technology', 'Sound Architecture'],
      timeline: '6 Months',
      liveUrl: 'aura.systems',
    },
    fullscreenVisual: {
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=2200&q=85',
      caption: 'AURA — DIGITAL EXPERIENCE & SPATIAL INTERACTION ENVIRONMENT',
    },
    idea: {
      label: 'THE IDEA',
      statement: 'MAKE THE DIGITAL WORLD FEEL HUMAN.',
      description: 'We created a flexible visual language built around movement, clarity and human interaction. Instead of static rectangular interfaces, AURA breathes through organic luminance fields, ambient gradient depth, and physics-driven spring mechanics.',
      image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80',
      pillars: [
        { title: 'Luminous Topography', desc: 'Lighting models that respond dynamically to ambient room illumination.' },
        { title: 'Harmonic Geometry', desc: 'Golden-ratio proportions scaling seamlessly from wrist glass to 8K projections.' },
        { title: 'Tactile Latency', desc: 'Sub-4ms feedback loops creating instantaneous physical perception.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: 'A sensory fusion of brutalist typographic discipline and ethereal optical glass refraction. Every component balances high-contrast darkness with vivid, laser-precise chromatic pulses.',
      typography: {
        display: 'Syne ExtraBold',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono',
        sample: 'AURA SYNAPSE 2026 // SPATIAL OS',
      },
      colors: [
        { name: 'Pure Obsidian', hex: '#080808', role: 'Canvas Base' },
        { name: 'Aura Electric', hex: '#0066FF', role: 'Primary Luminescence' },
        { name: 'Ethereal Cyan', hex: '#60A5FA', role: 'Secondary Accent' },
        { name: 'Warm Parchment', hex: '#FAF9F6', role: 'Typographic White' },
        { name: 'Titanium Graphite', hex: '#1E293B', role: 'Structural Surface' },
      ],
      composition: 'Bilateral asymmetric grid with continuous depth layering and 4-tier z-index hierarchy.',
      motionNote: 'Custom cubic-bezier curves [0.16, 1, 0.3, 1] tuned for momentum and zero-friction responsiveness.',
      sampleImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Spatial hardware docking station & ambient light projection system.',
        type: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        caption: 'Haptic controllers machined from anodized titanium with micro-textured grips.',
        type: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
        caption: 'Real-time telemetry and biometrics visualization layer running at 120fps.',
        type: 'asymmetric',
      },
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Monolithic packaging printed on FSC-certified cotton paper with holographic foil.',
        type: 'overlapping',
      },
      {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fluid shader simulations capturing sound wave reverberation.',
        type: 'detail',
      },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'IMMERSIVE INTERFACE ECOSYSTEM',
      description: 'The digital flagship operates not as a standard commercial catalog, but as a live tactile simulator. Prospective buyers can explore volumetric product teardowns, test acoustic driver curves, and configure bespoke anodized finishes.',
      desktopMockup: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
      mobileMockup: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      features: [
        { title: 'Interactive 3D Stage', description: 'Zero-latency WebGL viewports allowing full 360° product exploration.', tag: '3D SHADERS' },
        { title: 'Dynamic Soundscape', description: 'Bespoke generative audio reacting to user cursor momentum and scroll speed.', tag: 'WEB AUDIO API' },
        { title: 'Seamless Checkout', description: 'Custom headless architecture processing global pre-orders with millisecond confirmation.', tag: 'COMMERCE ENGINE' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'Every interaction responds to the physics of natural touch.',
      description: 'Motion is not an afterthought or decorative flourish. In AURA, every transition communicates spatial mass, velocity, and priority. Shaders expand organically as users engage, creating a sense of weightlessness.',
      mode: 'wave',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Conducting immersive spatial hardware workshops and perceptual psychophysics testing with audiophiles and product designers.', deliverables: ['Perceptual Research', 'Competitive Matrix', 'Technical Constraints Blueprint'] },
      { step: '02', title: 'DEFINE', desc: 'Synthesizing core emotional pillars and authoring the spatial design principles: Luminance, Tactility, and Minimal Latency.', deliverables: ['Brand Manifesto', 'Tone of Voice', 'Spatial Interface Tokens'] },
      { step: '03', title: 'CREATE', desc: 'Iterating on hundreds of typographic scales, chromatic palettes, and 3D volumetric glass simulations across digital screens.', deliverables: ['Design System', 'Shader Prototypes', 'Motion Principles'] },
      { step: '04', title: 'BUILD', desc: 'Developing the high-performance React + Three.js application with zero frame drops across 60Hz and 120Hz displays.', deliverables: ['Headless Architecture', 'WebGL Pipeline', 'Performance Benchmarks'] },
      { step: '05', title: 'LAUNCH', desc: 'Executing the global press reveal, keynote microsite, and physical gallery installations in London, Tokyo, and New York.', deliverables: ['Keynote Microsite', 'PR Assets', 'Global Rollout'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'React 18 & TypeScript', category: 'Frontend Core', description: 'Type-safe component architecture with instant re-render optimization.' },
        { name: 'Three.js & Custom GLSL', category: 'Spatial Graphics', description: 'Custom fragment shaders simulating realistic optical dispersion.' },
        { name: 'Tailwind CSS', category: 'Styling Engine', description: 'Zero-runtime utility styling with dynamic custom theme variables.' },
        { name: 'Motion / Framer', category: 'Kinetic Physics', description: 'Hardware-accelerated spring animations with gesture interpolation.' },
        { name: 'Web Audio API', category: 'Sound Design', description: 'Generative interactive synthesis triggered by micro-interactions.' },
      ],
      principles: [
        { title: 'Sub-50ms Latency', description: 'All interactive states respond within a single frame for tactile immediacy.' },
        { title: 'Full Accessibility', description: 'WCAG AAA color contrast support and keyboard-driven volumetric navigation.' },
        { title: 'Zero Bloat Architecture', description: 'Modular code splitting resulting in under 95KB initial critical payload.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '+42%', label: 'ENGAGEMENT TIME', note: 'Average session increased to 4m 38s across all international regions.' },
        { value: '3.2×', label: 'PRE-ORDER CONVERSION', note: 'Crushed hardware reservation targets within the first 72 hours of launch.' },
        { value: '+68%', label: 'SOCIAL MENTIONS', note: 'Over 140K organically generated design community impressions globally.' },
      ],
    },
    testimonial: {
      quote: 'They transformed a complex idea into an experience that felt simple, clear and completely ours.',
      author: 'MAYA RICHARDSON',
      role: 'Chief Marketing Officer',
      company: 'AURA SPATIAL SYSTEMS',
    },
    tags: ['BRANDING', 'DIGITAL', 'EXPERIENCE', 'STRATEGY', 'MOTION', 'WEBGL'],
    nextProject: {
      slug: 'north',
      number: '02',
      title: 'NORTH',
      category: 'DIGITAL PLATFORM',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      accent: '#F97316',
    },
  },

  north: {
    id: 'north',
    slug: 'north',
    number: '02',
    title: 'NORTH',
    category: 'DIGITAL',
    categoryDisplay: 'Digital Platform',
    client: 'NORTH FINANCIAL CAPITAL',
    industry: 'FINANCE & WEALTH',
    year: '2026',
    services: ['Digital Platform', 'Interface Architecture', 'Design Tokens', 'React & WebGL'],
    accent: '#F97316',
    accentRgb: '249, 115, 22',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    description: 'Redefining global institutional wealth management through an ultra-dense, keyboard-first web platform and algorithmic asset telemetry.',
    challenge: {
      label: 'THE CHALLENGE',
      statement: 'MAKING COMPLEX CAPITAL VELOCITY SCANNABLE AT SCALE.',
      description: 'North Capital managed $42B in institutional assets using fragmented legacy terminal spreadsheets. They needed a unified digital command station that could present multi-market liquidity, risk matrices, and hedging forecasts without lag or cognitive overload.',
      disciplines: ['Information Architecture', 'Data Visualization', 'Terminal UI', 'High-Frequency Streaming'],
      team: ['Product Strategists', 'Fintech UI Specialists', 'WebGL Engineers'],
      timeline: '8 Months',
      liveUrl: 'northcap.com',
    },
    fullscreenVisual: {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=85',
      caption: 'NORTH — REAL-TIME INSTITUTIONAL TRADING MATRIX & RISK COMMAND',
    },
    idea: {
      label: 'THE IDEA',
      statement: 'PRECISION MEETS CINEMATIC CLARITY.',
      description: 'We created an ultra-ergonomic dark-mode command environment where critical trade telemetry is immediately prioritized through intelligent color weighting, custom monospace data matrices, and instant command-palette shortcuts.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
      pillars: [
        { title: 'Keyboard Velocity', desc: '100% of workflows executable via ergonomic global hotkeys without touching a mouse.' },
        { title: 'Sub-Millisecond Tick', desc: 'WebSocket streams ingesting 200,000 order book events per second at 60fps.' },
        { title: 'Modular Canvas', desc: 'Traders customize their bento-grid multi-monitor layouts with persistent cloud profiles.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: 'Engineered like a high-performance aerospace heads-up display. High contrast, strict tabular alignment, and an intense warm amber accent that signals active liquidity without causing eye fatigue during 12-hour market sessions.',
      typography: {
        display: 'Syne SemiBold',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono Bold',
        sample: 'NORTH MATRIX v4.2 // TICKER: BTC-USD 94,820.00',
      },
      colors: [
        { name: 'Deep Space Charcoal', hex: '#0B0D13', role: 'Terminal Canvas' },
        { name: 'Amber Surge', hex: '#F97316', role: 'Liquidity Focus' },
        { name: 'Emerald Bid', hex: '#10B981', role: 'Positive Alpha' },
        { name: 'Crimson Ask', hex: '#EF4444', role: 'Risk Threshold' },
        { name: 'Ghost Silver', hex: '#94A3B8', role: 'Secondary Metadata' },
      ],
      composition: 'Strict 16-column mathematical layout with pixel-snapped dividers and zero empty borders.',
      motionNote: 'Snappy 150ms transitions designed to feel instant and purposeful.',
      sampleImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80',
        caption: 'Multi-screen trading floor dashboard showing multi-asset global correlations.',
        type: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
        caption: 'Institutional risk manager iPad interface configured for executive briefs.',
        type: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
        caption: 'Real-time orderbook depth ladder with real-time delta slippage curves.',
        type: 'asymmetric',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        caption: 'North Capital flagship headquarters in Zurich featuring interactive lobby display.',
        type: 'overlapping',
      },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'PROPRIETARY TRADING ARCHITECTURE',
      description: 'The platform consolidates prime brokerage, algorithmic trade execution, and regulatory compliance into a unified interface that adapts seamlessly from ultra-wide trading desks to executive mobile viewports.',
      desktopMockup: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      mobileMockup: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      features: [
        { title: 'Algorithmic Order Slicer', description: 'Smart routing algorithms splitting 8-figure trades across decentralized pools.', tag: 'EXECUTION' },
        { title: 'Stress Test Simulator', description: 'Monte Carlo market simulation engines running 10,000 scenarios in seconds.', tag: 'ANALYTICS' },
        { title: 'Audit Trail Vault', description: 'Tamper-proof cryptographic record logs meeting strict Swiss banking mandates.', tag: 'SECURITY' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'Data pulses with the heartbeat of global financial markets.',
      description: 'Visual feedback is dialed down to micro-expressions: subtle hue shifts on trade execution, smooth ticker interpolation, and zero distracting bouncy physics that could disrupt trader focus.',
      mode: 'particles',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Shadowing institutional portfolio managers and quantitative analysts across London and Zurich trading floors.', deliverables: ['Trader Workflow Mapping', 'Latency Pain-point Audit', 'Hotkeys Taxonomy'] },
      { step: '02', title: 'DEFINE', desc: 'Creating the North Design Token System and establishing the high-density information architecture guidelines.', deliverables: ['Design Tokens', 'Data Hierarchy Rules', 'Latency Thresholds'] },
      { step: '03', title: 'CREATE', desc: 'Prototyping dense candlestick charts, depth visualizers, and command menus with real streaming market data.', deliverables: ['Chart Components', 'Bento Window System', 'Figma Libraries'] },
      { step: '04', title: 'BUILD', desc: 'Engineering custom Canvas & WebGL charting layers that render 100K data points smoothly at 60Hz.', deliverables: ['Canvas Chart Engine', 'WebSocket Middleware', 'Security Hardening'] },
      { step: '05', title: 'LAUNCH', desc: 'Rolling out the system to 450 tier-1 fund managers with zero downtime and sub-20ms global ping.', deliverables: ['Production Deployment', 'Trader Onboarding Docs', '24/7 Operations Room'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'Next.js & TypeScript', category: 'Application Framework', description: 'Zero-overhead client-side routing with server-rendered security bounds.' },
        { name: 'Canvas2D / WebGPU', category: 'High-Density Charting', description: 'Custom renderer capable of drawing 100,000 ticks per frame.' },
        { name: 'WebSockets & Protobuf', category: 'Streaming Protocol', description: 'Binary serialized real-time financial market data streams.' },
        { name: 'Zustand & Immer', category: 'State Engine', description: 'Micro-store state updates avoiding redundant UI recalculations.' },
      ],
      principles: [
        { title: 'Zero Latency Spikes', description: 'Garbage-collection optimized rendering loops eliminating micro-stutters.' },
        { title: 'Sub-Pixel Precision', description: 'Crisp, razor-sharp tabular numeric rendering on Retina and 4K panels.' },
        { title: 'Bank-Grade Resilience', description: 'Automatic fallback WebSocket reconnects with zero state corruption.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '4.8×', label: 'EXECUTION SPEED', note: 'Average trade placement time dropped from 18 seconds to 3.7 seconds.' },
        { value: '+92%', label: 'PORTFOLIO VISIBILITY', note: 'Risk teams now detect cross-asset exposure breaches 40 minutes faster.' },
        { value: '$42B', label: 'ASSETS SECURED', note: 'Platform now powers day-to-day asset allocation across 14 international funds.' },
      ],
    },
    testimonial: {
      quote: 'North has given our quantitative desk an unfair operational advantage. It is the first platform that moves as fast as our thoughts.',
      author: 'ALEXANDER VAUGHN',
      role: 'Head of Quantitative Strategy',
      company: 'NORTH FINANCIAL CAPITAL',
    },
    tags: ['FINTECH', 'DATA VISUALIZATION', 'WEBGL', 'DESIGN SYSTEMS', 'ENTERPRISE'],
    nextProject: {
      slug: 'form',
      number: '03',
      title: 'FORM',
      category: 'CREATIVE TECHNOLOGY',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=85',
      accent: '#A3E635',
    },
  },

  form: {
    id: 'form',
    slug: 'form',
    number: '03',
    title: 'FORM',
    category: 'CREATIVE TECHNOLOGY',
    categoryDisplay: 'Interactive Installation',
    client: 'FORM KINETIC LABS',
    industry: 'CULTURE & ART',
    year: '2026',
    services: ['Interactive Installation', 'Generative Art', 'Sound Synthesis', 'Spatial Shaders'],
    accent: '#A3E635',
    accentRgb: '163, 230, 53',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=85',
    description: 'A physical-digital kinetic sculpture and accompanying web interface that morphs based on visitor movement, environmental carbon levels, and acoustic room resonance.',
    challenge: {
      label: 'THE CHALLENGE',
      statement: 'BRIDGING PHYSICAL SCULPTURE AND LIVING DIGITAL ART.',
      description: 'Form Kinetic Labs commissioned an installation for the Venice Biennale that could translate visitor biometric pulses and spatial acoustics into a continuous morphing 3D geometry both physically via 400 servo motors and online via WebGPU.',
      disciplines: ['Creative Computation', 'Sensory Architecture', 'Spatial Audio', 'WebGPU Pipelines'],
      team: ['Creative Technologists', 'Sound Artists', 'Robotics Engineers'],
      timeline: '5 Months',
      liveUrl: 'form-sculpture.art',
    },
    fullscreenVisual: {
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=2200&q=85',
      caption: 'FORM — REAL-TIME KINETIC GEOMETRY & ACOUSTIC SYNTHESIS',
    },
    idea: {
      label: 'THE IDEA',
      statement: 'MATTER BECOMES FLUID THROUGH DATA.',
      description: 'We created an algorithmic framework where physical sculpture and digital code exist in symbiotic harmony. Every whisper in the gallery ripples across the physical motor lattice and triggers harmonic resonance on the web interface.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      pillars: [
        { title: 'Generative Topology', desc: 'Non-repeating Voronoi noise algorithms calculating living curvature in real time.' },
        { title: 'Sonic Reactivity', desc: 'Fast Fourier Transform audio breakdown mapping pitch and timbre to physical displacement.' },
        { title: 'Global Sync', desc: 'Remote web visitors interact with the physical gallery installation via low-latency WebSockets.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: 'An aggressive, electric contrast between deep brutalist obsidian and high-voltage acid lime (#A3E635). The visual identity celebrates mathematics, physical materiality, and living kinetic tension.',
      typography: {
        display: 'Syne ExtraBold',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono',
        sample: 'FORM // VENICE BIENNALE INSTALLATION 2026',
      },
      colors: [
        { name: 'Monolith Black', hex: '#060608', role: 'Void Background' },
        { name: 'Acid Lime', hex: '#A3E635', role: 'Kinetic Voltage' },
        { name: 'Electric Olive', hex: '#65A30D', role: 'Secondary Resonance' },
        { name: 'Pure White', hex: '#FFFFFF', role: 'Precision Accents' },
      ],
      composition: 'Dynamic physics-oriented grid with floating 3D coordinate callouts.',
      motionNote: 'Fluid non-linear deformation inspired by fluid dynamics and ferrofluid magnets.',
      sampleImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
        caption: 'Physical kinetic sculpture suspended in the Arsenale exhibition hall in Venice.',
        type: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1000&q=80',
        caption: 'Laser-sintered nylon mechanical joints driving motorized mirror nodes.',
        type: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=80',
        caption: 'Online spatial simulator allowing remote participants to broadcast ripple waves.',
        type: 'asymmetric',
      },
      {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
        caption: 'Algorithmic documentation monograph bound in carbon-neutral Japanese paper.',
        type: 'overlapping',
      },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'SYMBIOTIC PHYSICAL & VIRTUAL ENVIRONMENT',
      description: 'Users on web and mobile control a digital twin of the physical sculpture. When thousands interact simultaneously, the web engine clusters user gestures into emergent collective wave patterns that trigger physical motor shifts in Venice.',
      desktopMockup: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80',
      mobileMockup: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      features: [
        { title: 'WebGPU Compute Shaders', description: 'Simulating 250,000 dynamic particle springs in real time within the browser.', tag: 'WEBGPU' },
        { title: 'Spatial Audio Engine', description: 'Binaural 3D acoustic rendering reacting to camera position and node collisions.', tag: '3D AUDIO' },
        { title: 'Bi-Directional IoT Bridge', description: 'MQTT broker piping web interactions to 400 micro-controllers in sub-30ms.', tag: 'HARDWARE I/O' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'Every ripple reflects human presence in physical space.',
      description: 'Motion behaves as a tangible fluid medium. The math behind the simulation obeys real wave equation equations, ensuring every gesture leaves an organic wake across the visual canvas.',
      mode: 'fluid',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Exploring acoustic physics, architectural resonance, and kinetic motor response rates in our creative prototyping lab.', deliverables: ['Acoustic Spectrum Study', 'Motor Torque Benchmarks', 'Artistic Manifesto'] },
      { step: '02', title: 'DEFINE', desc: 'Developing the algorithmic math equations that map sound frequencies to physical coordinate displacement vectors.', deliverables: ['Wave Equation Models', 'Hardware Protocol Spec', 'UI Design System'] },
      { step: '03', title: 'CREATE', desc: 'Building the full-scale physical kinetic prototype while concurrently developing the browser WebGPU shader pipeline.', deliverables: ['CAD Assemblies', 'Custom Shaders', 'Web Architecture'] },
      { step: '04', title: 'BUILD', desc: 'Integrating the MQTT IoT bridge and calibrating spatial audio drivers inside the exhibition architecture.', deliverables: ['IoT Firmware', 'Frontend Web App', 'Sound Spatializer'] },
      { step: '05', title: 'LAUNCH', desc: 'Unveiling at the Venice Biennale with live synchronized performances by international electronic musicians.', deliverables: ['Live Biennale Exhibition', 'Global Streaming Platform', 'Archival Documentary'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'WebGPU & WGSL', category: 'Next-Gen Compute', description: 'Direct hardware shader compute pipeline executing 60fps simulations.' },
        { name: 'Tone.js & Web Audio', category: 'Generative Sound', description: 'Polyphonic FM synthesis generated client-side with zero audio latency.' },
        { name: 'MQTT & WebSockets', category: 'IoT Pipeline', description: 'Lightweight publish-subscribe telemetry between cloud and physical motors.' },
        { name: 'React 18 & Motion', category: 'Application UI', description: 'Declarative state synchronization between 3D canvas and HUD controls.' },
      ],
      principles: [
        { title: 'Pure Web Standards', description: 'No external plugins or downloads required for full WebGPU simulation.' },
        { title: 'Graceful Fallback', description: 'Adaptive particle downsampling ensures 60fps on mobile and older GPUs.' },
        { title: 'Carbon Neutral', description: 'Server infrastructure powered 100% by renewable European wind energy.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '380K', label: 'BIENNALE VISITORS', note: 'Over 380,000 visitors experienced the physical installation across 6 months.' },
        { value: '1.4M', label: 'GLOBAL WEB INTERACTIONS', note: 'Participants from 118 countries sent generative waves to the sculpture.' },
        { value: 'GOLD', label: 'DESIGN LION CANNES', note: 'Awarded the Grand Prix in Creative Business Transformation & Spatial Design.' },
      ],
    },
    testimonial: {
      quote: 'Studio bridged the gap between fine art and bleeding-edge creative computation. The resulting installation became the defining highlight of the Biennale.',
      author: 'ELENA ROSTOVA',
      role: 'Curatorial Director',
      company: 'VENICE CONTEMPORARY FOUNDATION',
    },
    tags: ['CREATIVE TECHNOLOGY', 'WEBGPU', 'SOUND DESIGN', 'INSTALLATION', 'EXHIBITION'],
    nextProject: {
      slug: 'mono',
      number: '04',
      title: 'MONO',
      category: 'DESIGN SYSTEM',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=85',
      accent: '#8B5CF6',
    },
  },

  mono: {
    id: 'mono',
    slug: 'mono',
    number: '04',
    title: 'MONO',
    category: 'DEVELOPMENT',
    categoryDisplay: 'Design System & SDK',
    client: 'MONO ARCHITECTURE CORP',
    industry: 'TECHNOLOGY & DEV',
    year: '2026',
    services: ['Design Tokens', 'Component Library', 'CLI Tooling', 'Documentation Hub'],
    accent: '#8B5CF6',
    accentRgb: '139, 92, 246',
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=85',
    description: 'A monolithic multi-brand design system and open-source UI engine serving over 180 enterprise engineering teams with sub-millisecond compilation.',
    challenge: {
      label: 'THE CHALLENGE',
      statement: 'UNIFYING 40+ INDEPENDENT GLOBAL PRODUCT TEAMS.',
      description: 'Mono Corp operated 40 disparate enterprise SaaS products across 12 countries with zero shared UI consistency. Engineers were rebuilding table components, auth flows, and data charts from scratch, causing massive technical debt and disjointed brand recognition.',
      disciplines: ['Design Systems', 'Token Engineering', 'Compiler Tooling', 'Developer Experience'],
      team: ['Design System Leads', 'Compiler Engineers', 'Technical Writers'],
      timeline: '9 Months',
      liveUrl: 'mono-design.dev',
    },
    fullscreenVisual: {
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2200&q=85',
      caption: 'MONO — MULTI-BRAND TOKEN ENGINE & COMPONENT SDK ECOSYSTEM',
    },
    idea: {
      label: 'THE IDEA',
      statement: 'DESIGN AT THE SPEED OF LIGHT.',
      description: 'We engineered a token-driven compiler architecture where brand themes, accessibility constraints, and motion tokens are compiled directly into React, Vue, Svelte, iOS, and Android targets from a single source of truth.',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80',
      pillars: [
        { title: 'Multi-Framework Tokens', desc: 'One centralized JSON/YAML token schema compiling to 6 frontend target ecosystems.' },
        { title: 'Accessible by Default', desc: '100% WCAG AAA certified components with built-in ARIA screen-reader orchestration.' },
        { title: 'Sub-Zero Runtime', desc: 'CSS-in-JS overhead replaced by zero-runtime atomic utility class compilation.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: 'A refined, laser-precise aesthetic pairing deep nocturnal violet with ultra-crisp monospace typography. The interface celebrates developer craftsmanship, clean code aesthetics, and pure architectural harmony.',
      typography: {
        display: 'Syne Bold',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono',
        sample: 'MONO.TOKENS.COMPILE({ TARGET: "REACT_NATIVE" })',
      },
      colors: [
        { name: 'Dark Monolith', hex: '#09080E', role: 'IDE Canvas' },
        { name: 'Electric Violet', hex: '#8B5CF6', role: 'Primary Token Highlight' },
        { name: 'Deep Purple', hex: '#6D28D9', role: 'Component Stroke' },
        { name: 'Pure Chalk', hex: '#FAF9F6', role: 'Code Foreground' },
      ],
      composition: 'Strict modular grid inspired by architectural blueprints and Swiss grid typography.',
      motionNote: 'Zero-spring snappy 120ms transitions ensuring rapid IDE interactions.',
      sampleImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
        caption: 'Interactive component playground with real-time token compiler inspector.',
        type: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1000&q=80',
        caption: 'Native iOS and Android component previews running identical token configs.',
        type: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1400&q=80',
        caption: 'Telemetry dashboard tracking design system adoption across 180 codebases.',
        type: 'asymmetric',
      },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'DEVELOPER-FIRST DOCUMENTATION PLATFORM',
      description: 'The Mono Documentation hub features live sandboxes, token visualizers, CLI scaffolding commands, and automatic PR checks that warn developers when non-tokenized CSS rules are introduced.',
      desktopMockup: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
      mobileMockup: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      features: [
        { title: 'Live Sandbox Playgrounds', description: 'Edit React & Tailwind code with instantaneous hot-module preview in browser.', tag: 'PLAYGROUND' },
        { title: 'Automated CI Linting', description: 'GitHub Actions bot ensuring 100% token adherence across all production PRs.', tag: 'CI/CD' },
        { title: 'Figma Token Sync', description: 'Two-way synchronization updating code tokens whenever designers publish Figma variables.', tag: 'FIGMA API' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'Micro-interactions guide developer muscle memory.',
      description: 'Animations are calibrated to reinforce speed. Code copy buttons, dropdown disclosures, and modal transitions complete in under 150 milliseconds.',
      mode: 'geometric',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Auditing 40 production repositories and cataloging 1,200 redundant button and input variants.', deliverables: ['Component Audit Report', 'Color Collision Matrix', 'Token Strategy Map'] },
      { step: '02', title: 'DEFINE', desc: 'Authoring the 4-tier token schema: Global Primitives, Semantic Aliases, Component Specs, and Brand Overrides.', deliverables: ['Token Hierarchy Spec', 'Accessibility Guide', 'Architecture RFC'] },
      { step: '03', title: 'CREATE', desc: 'Designing and building 65 core accessible headless components with 100% test coverage.', deliverables: ['Figma Variable Library', 'Storybook Suite', 'Unit Test Suite'] },
      { step: '04', title: 'BUILD', desc: 'Developing the CLI generator, compiler plugins, and developer documentation portal.', deliverables: ['NPM Packages', 'CLI Scaffolder', 'Docs Hub'] },
      { step: '05', title: 'LAUNCH', desc: 'Hosting company-wide migration hackathons and migrating 40 products to the new design system in 6 weeks.', deliverables: ['Migration Playbooks', 'Engineer Workshops', 'Adoption Tracker'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'TypeScript & Radix UI', category: 'Component Core', description: 'Headless accessible primitives wrapped in ergonomic zero-friction APIs.' },
        { name: 'Tailwind CSS v4', category: 'Styling Layer', description: 'Dynamic theme tokens mapped directly to CSS custom properties.' },
        { name: 'Turborepo & Vite', category: 'Monorepo Pipeline', description: 'Sub-2s cache builds across 18 npm packages in the ecosystem.' },
        { name: 'Rollup & esbuild', category: 'Compiler Engine', description: 'Dual ESM and CJS bundling supporting both modern and legacy Node stacks.' },
      ],
      principles: [
        { title: '100% TypeScript', description: 'Comprehensive prop type definitions with inline JSDoc developer autocompletion.' },
        { title: 'Zero Bundle Bloat', description: 'Aggressive tree-shaking ensuring users only download the exact components they import.' },
        { title: 'Strict Semantic Versioning', description: 'Automated changesets and changelog generation on every merge.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '64%', label: 'FASTER FEATURE SHIPS', note: 'Engineering teams reduced front-end cycle times from 3 weeks to 4 days.' },
        { value: '180+', label: 'TEAMS ONBOARDED', note: '100% adoption achieved across all product divisions in less than 6 months.' },
        { value: '0', label: 'ACCESSIBILITY BREACHES', note: 'Zero WCAG compliance defects reported across all 40 digital touchpoints.' },
      ],
    },
    testimonial: {
      quote: 'Mono transformed how 600 engineers write software. We went from fragmented chaos to shipping pristine, accessible UI at record speed.',
      author: 'SARAH CHEN',
      role: 'VP of Product Engineering',
      company: 'MONO ARCHITECTURE CORP',
    },
    tags: ['DESIGN SYSTEMS', 'TYPESCRIPT', 'OPEN SOURCE', 'ACCESSIBILITY', 'DEVELOPER TOOLS'],
    nextProject: {
      slug: 'vanta',
      number: '05',
      title: 'VANTA',
      category: 'CONTENT & AI',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1800&q=85',
      accent: '#06B6D4',
    },
  },

  vanta: {
    id: 'vanta',
    slug: 'vanta',
    number: '05',
    title: 'VANTA',
    category: 'CONTENT',
    categoryDisplay: 'AI Synthesis Platform',
    client: 'VANTA CINEMA COLLECTIVE',
    industry: 'CULTURE & MEDIA',
    year: '2026',
    services: ['AI Interface', 'Real-time Generation', 'Brand Strategy', 'Web Experience'],
    accent: '#06B6D4',
    accentRgb: '6, 182, 212',
    heroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2000&q=85',
    description: 'A generative AI visual synthesis platform for cinema directors, transforming natural language screenplays into high-fidelity storyboard sequences and lighting moodboards.',
    challenge: {
      label: 'THE CHALLENGE',
      statement: 'ELEVATING AI FROM TOY TO DIRECTORIAL INSTRUMENT.',
      description: 'Cinema directors and art directors found generic consumer AI tools clunky, unpromptable, and inconsistent across scenes. Vanta needed an interface that spoke the cinematic language of focal lengths, lighting ratios, anamorphic lenses, and temporal scene continuity.',
      disciplines: ['AI Prompt Architecture', 'Cinematic Interface', 'Canvas Storyboarding', 'Real-time WebSockets'],
      team: ['Creative Directors', 'AI Researchers', 'Full-stack Engineers'],
      timeline: '7 Months',
      liveUrl: 'vanta-cinema.ai',
    },
    fullscreenVisual: {
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2200&q=85',
      caption: 'VANTA — GENERATIVE CINEMA STORYBOARD & LIGHTING SYNTHESIS SUITE',
    },
    idea: {
      label: 'THE IDEA',
      statement: 'EVERY FRAME HAS INTENTION.',
      description: 'We designed an infinite storyboard canvas where filmmakers direct generative scenes using tactile dials for camera lenses, color temperatures, and character blocking rather than long speculative text paragraphs.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      pillars: [
        { title: 'Director HUD Controls', desc: 'Direct sliders for 35mm vs 70mm lenses, shutter angles, and cinematic color grades.' },
        { title: 'Temporal Consistency', desc: 'Proprietary scene anchoring maintaining character faces and wardrobe across 50 consecutive shots.' },
        { title: 'Collaborative Writer Room', desc: 'Multiplayer editing allowing directors, DP, and producers to annotate frames simultaneously.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: 'Inspired by calibrated color-grading monitors in Hollywood post-production suites. Deep 10-bit black levels accented by laser-cyan (#06B6D4) and precise SMPTE-compliant video overlays.',
      typography: {
        display: 'Syne ExtraBold',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono',
        sample: 'VANTA // SCENE 14A — INT. OBSIDIAN VAULT — NIGHT',
      },
      colors: [
        { name: 'Grade Obsidian', hex: '#07090E', role: 'Monitor Surface' },
        { name: 'Cyan Laser', hex: '#06B6D4', role: 'Active Lens Focus' },
        { name: 'Tungsten Gold', hex: '#F59E0B', role: 'Key Light Warmth' },
        { name: 'Pristine White', hex: '#FAF9F6', role: 'Slate Typography' },
      ],
      composition: 'Cinematic 2.39:1 anamorphic framing ratios throughout interface containers.',
      motionNote: 'Smooth optical zoom interpolations mirroring high-end cinema lenses.',
      sampleImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=80',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
        caption: 'Director view with live camera lens simulator and lighting moodboard generator.',
        type: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
        caption: 'Character facial consistency engine retaining identity across varied angles.',
        type: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=80',
        caption: 'Anamorphic flare shader preview rendered directly within web viewport.',
        type: 'asymmetric',
      },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'NEXT-GENERATION PRE-VISUALIZATION',
      description: 'Filmmakers drag screenplay script files onto the canvas, and Vanta auto-parses scenes, characters, and lighting requirements into an editable cinematic storyboard in under 45 seconds.',
      desktopMockup: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
      mobileMockup: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      features: [
        { title: 'Script Auto-Breakdown', description: 'Natural language parsing identifying locations, props, and emotional tone.', tag: 'NLP ENGINE' },
        { title: 'Multi-Cam Coverage', description: 'Generate wide, medium, close-up, and over-the-shoulder angles from a single prompt.', tag: 'MULTI-CAM' },
        { title: 'Export to Avid & Premiere', description: 'Export full EDL sequences directly into professional non-linear editing suites.', tag: 'WORKFLOW' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'Camera movement breathes cinematic soul into static frames.',
      description: 'Storyboards are not frozen paintings. Directors preview camera dolly moves, rack focuses, and crane sweeps in real-time before stepping onto the physical soundstage.',
      mode: 'pulse',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Conducting in-depth interviews with ASC cinematographers and Hollywood storyboard artists.', deliverables: ['Cinematic Taxonomy', 'Director Pain-points', 'Prompt Gap Analysis'] },
      { step: '02', title: 'DEFINE', desc: 'Building the visual language and authoring the spatial timeline and infinite canvas architecture.', deliverables: ['Infinite Canvas UX', 'Color Grading UI', 'Model Orchestration Spec'] },
      { step: '03', title: 'CREATE', desc: 'Designing the high-contrast 10-bit dark UI and testing real-time rendering pipelines.', deliverables: ['Director HUD Components', 'Lens Sliders', 'Design Tokens'] },
      { step: '04', title: 'BUILD', desc: 'Developing the high-speed WebSocket generation queue and infinite canvas rendering engine.', deliverables: ['Canvas Engine', 'AI Model Gateway', 'Multiplayer Sync'] },
      { step: '05', title: 'LAUNCH', desc: 'Unveiling at Sundance Film Festival and onboarding top indie production studios.', deliverables: ['Sundance Showcase', 'Studio Alpha Rollout', 'Case Studies'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'React 18 & Konva/Canvas', category: 'Infinite Canvas', description: 'Hardware-accelerated viewport supporting thousands of high-res cinematic frames.' },
        { name: 'FastAPI & PyTorch Pipeline', category: 'AI Inference', description: 'Distributed GPU clustering generating 4K storyboard stills in under 1.2 seconds.' },
        { name: 'Tailwind CSS', category: 'Styling', description: 'Sleek dark mode interface designed for color-calibrated studio suites.' },
        { name: 'WebSockets & LiveKit', category: 'Collaboration', description: 'Real-time multiplayer cursor sharing and voice communication between creatives.' },
      ],
      principles: [
        { title: 'Pristine Color Accuracy', description: 'DCI-P3 wide color gamut rendering ensuring true-to-life film grades.' },
        { title: 'Instant Offline Resilience', description: 'Local IndexedDB caching preventing loss of storyboard edits on set.' },
        { title: 'Zero Prompt Jargon', description: 'Pure cinematic controls eliminating the need for complex engineering prompts.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '5×', label: 'PRE-PRODUCTION SPEED', note: 'Filmmakers mapped full feature scripts in 4 days instead of 3 weeks.' },
        { value: '-65%', label: 'SOUNDSTAGE OVERRUNS', note: 'Crew lighting and camera setups completed with unprecedented precision.' },
        { value: '28', label: 'FEATURE FILMS PRE-VISUALIZED', note: 'Now actively used across Hollywood, London, and European indie productions.' },
      ],
    },
    testimonial: {
      quote: 'Vanta is the first AI tool that actually understands the grammar of cinema. It feels less like software and more like an experienced Director of Photography sitting next to you.',
      author: 'MARCUS STERLING',
      role: 'Feature Film Director & Producer',
      company: 'VANTA CINEMA COLLECTIVE',
    },
    tags: ['AI INTERFACE', 'CINEMA', 'CREATIVE TOOLS', 'STORYBOARDING', 'CANVAS'],
    nextProject: {
      slug: 'arc',
      number: '06',
      title: 'ARC',
      category: 'COMMERCE',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1800&q=85',
      accent: '#F59E0B',
    },
  },

  arc: {
    id: 'arc',
    slug: 'arc',
    number: '06',
    title: 'ARC',
    category: 'DIGITAL',
    categoryDisplay: 'Luxury Commerce Flagship',
    client: 'ARC WATCH ARCHIVE',
    industry: 'RETAIL & LUXURY',
    year: '2026',
    services: ['Luxury Commerce', '3D Configurator', 'Visual Identity', 'Headless Shopify'],
    accent: '#F59E0B',
    accentRgb: '245, 158, 11',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=2000&q=85',
    description: 'An ultra-exclusive horology archive and digital timepiece configurator engineered for high-net-worth collectors and independent Swiss watchmakers.',
    challenge: {
      label: 'THE CHALLENGE',
      statement: 'BRINGING HAUTE HORLOGERIE INTO THE DIGITAL AGE.',
      description: 'Arc represents $100K+ bespoke mechanical timepieces. Traditional e-commerce templates felt cheap and unbefitting the micro-machined precision of Swiss tourbillons and Damascus steel cases. Arc needed an experience that conveyed tactile weight and mechanical prestige.',
      disciplines: ['Luxury Art Direction', '3D Tourbillon Rendering', 'Headless Commerce', 'Bespoke Typography'],
      team: ['Luxury Brand Strategists', '3D Horology Artists', 'Full-stack Engineers'],
      timeline: '6 Months',
      liveUrl: 'arc-horology.ch',
    },
    fullscreenVisual: {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
      caption: 'ARC — BESPOKE MECHANICAL TOURBILLON 3D INTERACTIVE CONFIGURATOR',
    },
    idea: {
      label: 'THE IDEA',
      statement: 'EVERY SECOND REVEALS CRAFTSMANSHIP.',
      description: 'We created a digital flagship that treats timepieces as kinetic sculptures. Visitors can disassemble the 320-part mechanical movement in real-time, inspect Côtes de Genève engravings, and configure bespoke alligator straps and rose gold alloys.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      pillars: [
        { title: 'Sub-Micron 3D Precision', desc: 'Photorealistic WebGL shaders rendering sapphire crystal reflections and escapement ticking.' },
        { title: 'Private Concierge Vault', desc: 'Encrypted client portals for private high-value commissions and auction escrow.' },
        { title: 'Bespoke Editorial Monograph', desc: 'Curated long-form horological essays with rich interactive macro photography.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: 'Understated Swiss luxury defined by warm gold accents (#F59E0B), deep obsidian contrast, and exquisite serif and grotesque typography. Spacing is expansive and deliberate, radiating exclusivity and timelessness.',
      typography: {
        display: 'Instrument Serif & Syne',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono',
        sample: 'ARC HORLOGERIE // TOURBILLON N° 04/10',
      },
      colors: [
        { name: 'Obsidian Velvet', hex: '#080809', role: 'Cabinet Background' },
        { name: 'Warm Horology Gold', hex: '#F59E0B', role: 'Precious Metal Accent' },
        { name: 'Damascus Steel', hex: '#475569', role: 'Mechanical Structure' },
        { name: 'Parchment Silk', hex: '#FAF9F6', role: 'Editorial Typography' },
      ],
      composition: 'Generous negative space with central timepiece alignment and subtle golden ratio guides.',
      motionNote: 'Gliding 60fps rotational physics tuned to feel like high-precision sapphire bearings.',
      sampleImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=80',
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Interactive exploded-view showing balance wheel and escapement assembly.',
        type: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        caption: 'Hand-finished titanium case with beveled edges and sapphire caseback.',
        type: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1400&q=80',
        caption: 'Private VIP client salon and digital commission configurator screen in Geneva.',
        type: 'asymmetric',
      },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'DIGITAL HAUTE HORLOGERIE',
      description: 'The Arc experience bridges bespoke craftsmanship with modern luxury commerce. Collectors can place high-value deposits, schedule private viewing appointments in Geneva, London, or Singapore, and receive serialized NFT provenance certificates.',
      desktopMockup: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80',
      mobileMockup: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      features: [
        { title: 'Real-time Horology Engine', description: 'Ticking escapement mechanism synchronized to the visitor’s local timezone.', tag: '3D MECHANICS' },
        { title: 'Private Vault Checkout', description: 'Multi-signature cryptocurrency and wire transfer escrow integrations.', tag: 'PAYMENTS' },
        { title: 'Digital Provenance Passport', description: 'Cryptographically verified ownership ledger linked to physical serial numbers.', tag: 'PROVENANCE' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'The hypnotic rhythm of 28,800 vibrations per hour.',
      description: 'Every interaction reflects the mechanical physics of high watchmaking. The ticking escapement pulses with mathematical precision, creating an atmosphere of unhurried elegance.',
      mode: 'orbit',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Spending time with master watchmakers in Vallée de Joux, Switzerland, studying watch calibers and collector rituals.', deliverables: ['Horology Craft Audit', 'Collector Personas', '3D CAD Pipeline Spec'] },
      { step: '02', title: 'DEFINE', desc: 'Authoring the luxury digital principles: Understatement, Mechanical Fidelity, and White-Glove Care.', deliverables: ['Brand Guidelines', 'Typography System', 'Commerce Architecture'] },
      { step: '03', title: 'CREATE', desc: 'Converting micro-CAD watch blueprints into hyper-optimized WebGL 3D models with physical shaders.', deliverables: ['3D Asset Pipeline', 'Configurator UI', 'Motion Choreography'] },
      { step: '04', title: 'BUILD', desc: 'Developing the headless Shopify Plus platform with custom Three.js configurator and private concierge APIs.', deliverables: ['Headless Storefront', 'Three.js Configurator', 'Stripe & Escrow Bridge'] },
      { step: '05', title: 'LAUNCH', desc: 'Premiering at Watches & Wonders Geneva with an exclusive private collector cocktail reception.', deliverables: ['Geneva Launch Event', 'VIP Monograph', 'Global Storefront'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'React 18 & Three.js', category: '3D Configurator', description: 'Physically based rendering (PBR) simulating sapphire glass, gold, and titanium.' },
        { name: 'Headless Shopify Plus', category: 'Commerce Engine', description: 'Global multi-currency checkout processing six-figure luxury timepiece orders.' },
        { name: 'Tailwind CSS', category: 'Styling', description: 'Bespoke Swiss luxury typography and editorial layout architecture.' },
        { name: 'Motion / Framer', category: 'Micro-Interactions', description: 'Uncompromising smooth transitions and drag-based exploded view controls.' },
      ],
      principles: [
        { title: 'Flawless 3D Fidelity', description: '4K texture baking and anisotropic brushed metal shaders running at 60fps.' },
        { title: 'Bank-Grade Security', description: 'End-to-end encrypted VIP buyer inquiry forms and escrow routing.' },
        { title: 'Global Multi-Currency', description: 'Automatic tax, duty, and insured air freight calculations across 45 nations.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '100%', label: 'COLLECTION SOLD OUT', note: 'All 50 limited-edition timepieces reserved within 14 minutes of launch.' },
        { value: '$6.2M', label: 'PRE-ORDER VALUE', note: 'Highest single-day digital sales volume in independent Swiss watch history.' },
        { value: '12m 40s', label: 'AVG CONFIGURATOR DURATION', note: 'Collectors engaged deeply with the 3D movement exploded views.' },
      ],
    },
    testimonial: {
      quote: 'Studio understood the soul of Swiss watchmaking. They did not build a shop; they built a digital sanctuary that honors our craftsmen.',
      author: 'JEAN-LUC DUBOIS',
      role: 'Master Watchmaker & Founder',
      company: 'ARC HORLOGERIE',
    },
    tags: ['LUXURY', 'COMMERCE', '3D CONFIGURATOR', 'HOROLOGY', 'THREE.JS'],
    nextProject: {
      slug: 'aura',
      number: '01',
      title: 'AURA',
      category: 'BRAND EXPERIENCE',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85',
      accent: '#0066FF',
    },
  },
};

/**
 * Universal lookup helper for project case studies.
 * If a slug exists in CASE_STUDIES, return it.
 * Otherwise, dynamically synthesize a full editorial CaseStudy from WORK_PROJECTS data!
 */
const getAdditionalImages = (index: number) => {
  const images: string[] = [];
  for (let i = 1; i <= 6; i++) {
    const proj = WORK_PROJECTS[(index + i) % WORK_PROJECTS.length];
    images.push(proj.image);
  }
  return images;
};

export function getProjectCaseStudy(slug: string): CaseStudy {
  const normalizedSlug = slug.toLowerCase().replace(/^\/work\//, '').trim();

  if (CASE_STUDIES[normalizedSlug]) {
    return CASE_STUDIES[normalizedSlug];
  }

  // Find in WORK_PROJECTS
  const found = WORK_PROJECTS.find((p) => p.slug.toLowerCase() === normalizedSlug) || WORK_PROJECTS[0];
  const projectIdx = WORK_PROJECTS.findIndex((p) => p.slug.toLowerCase() === normalizedSlug);
  const nextProj = WORK_PROJECTS[(projectIdx + 1) % WORK_PROJECTS.length];
  const formattedNum = String(projectIdx >= 0 ? projectIdx + 1 : 1).padStart(2, '0');

  const additionalImages = getAdditionalImages(projectIdx >= 0 ? projectIdx : 0);
  const img1 = found.secondaryImage || additionalImages[0];
  const img2 = additionalImages[1];
  const img3 = additionalImages[2];
  const img4 = additionalImages[3];
  const img5 = additionalImages[4];
  const img6 = additionalImages[5];

  // Return generated rich case study
  return {
    id: found.id,
    slug: found.slug,
    number: formattedNum,
    title: found.title,
    category: found.category,
    categoryDisplay: found.categoryDisplay || 'Brand & Digital',
    client: found.client,
    industry: found.industryDisplay || 'Technology',
    year: found.year,
    services: found.services || ['Brand Identity', 'Digital Design', 'Development'],
    accent: found.accent || '#0066FF',
    accentRgb: '0, 102, 255',
    heroImage: found.image,
    description: found.description,
    challenge: {
      label: 'THE CHALLENGE',
      statement: `A DIGITAL PLATFORM BUILT FOR ${found.title.toUpperCase()}.`,
      description: `${found.client} needed an unmistakably modern, high-performance digital presence that balances strategic clarity with bespoke design craft and uncompromising technical execution.`,
      disciplines: ['Brand Strategy', 'Visual Identity', 'Digital Product', 'Creative Development'],
      team: ['Design Director', 'Senior Product Designer', 'Creative Technologist'],
      timeline: '5 Months',
      liveUrl: `${found.slug}.studio`,
    },
    fullscreenVisual: {
      image: img1,
      caption: `${found.title} — DIGITAL IMMERSION & DESIGN SYSTEM`,
    },
    idea: {
      label: 'THE IDEA',
      statement: 'MAKE EVERY INTERACTION RESONATE.',
      description: `We created a bespoke visual language for ${found.title} built on fluid typography, high-contrast dark spatial layouts, and silky zero-friction micro-interactions.`,
      image: img2,
      pillars: [
        { title: 'Strategic Clarity', desc: 'Distilling complex commercial offerings into intuitive human touchpoints.' },
        { title: 'Kinetic Energy', desc: 'Hardware-accelerated animations reinforcing brand velocity.' },
        { title: 'Scalable Architecture', desc: 'Modular components ready to scale across international teams.' },
      ],
    },
    creativeDirection: {
      headline: 'CREATIVE DIRECTION',
      description: `A disciplined fusion of brutalist editorial typography and contemporary digital craftsmanship. Every screen celebrates high contrast and purposeful spatial pacing.`,
      typography: {
        display: 'Syne ExtraBold',
        body: 'Plus Jakarta Sans',
        mono: 'JetBrains Mono',
        sample: `${found.title} // SYSTEM v2.0`,
      },
      colors: [
        { name: 'Obsidian Black', hex: '#080808', role: 'Background Canvas' },
        { name: 'Signature Accent', hex: found.accent || '#0066FF', role: 'Primary Focus' },
        { name: 'Parchment White', hex: '#FAF9F6', role: 'Primary Typography' },
        { name: 'Slate Gray', hex: '#888888', role: 'Secondary Metadata' },
      ],
      composition: 'Asymmetric editorial grid with generous whitespace and 4-tier typographic scale.',
      motionNote: 'Fluid non-linear spring physics calibrated for instantaneous responsiveness.',
      sampleImage: img3,
    },
    gallery: [
      { url: img4, caption: 'Core platform visual showcase and responsive layout architecture.', type: 'wide' },
      { url: img1, caption: 'Detailed micro-interaction and component typography study.', type: 'portrait' },
      { url: img5, caption: 'Multi-screen responsive experience across desktop, tablet, and mobile.', type: 'asymmetric' },
    ],
    experience: {
      headline: 'THE EXPERIENCE',
      subhead: 'RESPONSIVE DIGITAL ECOSYSTEM',
      description: `The flagship experience provides seamless navigation across the full product ecosystem, prioritizing instant load times, ergonomic touch targets, and tactile visual feedback.`,
      desktopMockup: img5,
      mobileMockup: img6,
      features: [
        { title: 'High-Speed Architecture', description: 'Sub-second page transitions powered by modern React pipelines.', tag: 'PERFORMANCE' },
        { title: 'Adaptive Theming', description: 'Dynamic theme tokens responding seamlessly to user context.', tag: 'DESIGN TOKENS' },
        { title: 'Accessible Semantics', description: 'Strict keyboard navigation and screen-reader optimizations.', tag: 'ACCESSIBILITY' },
      ],
    },
    motion: {
      headline: 'MOTION BECOMES MEANING.',
      statement: 'Every interaction responds to the physics of natural touch.',
      description: 'Motion serves as a guide rather than a distraction. Thoughtful transitions communicate state changes and reinforce spatial hierarchy throughout the user journey.',
      mode: 'wave',
    },
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Conducting stakeholder interviews and technical discovery workshops.', deliverables: ['Discovery Report', 'Technical Architecture'] },
      { step: '02', title: 'DEFINE', desc: 'Establishing brand strategy, design tokens, and core information architecture.', deliverables: ['Design Tokens', 'User Journey Maps'] },
      { step: '03', title: 'CREATE', desc: 'Prototyping responsive layouts, micro-interactions, and visual design assets.', deliverables: ['Interactive Prototypes', 'Asset Library'] },
      { step: '04', title: 'BUILD', desc: 'Developing the high-performance TypeScript application with automated testing.', deliverables: ['Production Codebase', 'Test Suite'] },
      { step: '05', title: 'LAUNCH', desc: 'Executing the global release with analytics tracking and performance monitoring.', deliverables: ['Global Release', 'Analytics Dashboard'] },
    ],
    technology: {
      headline: 'BUILT TO PERFORM.',
      statement: 'Beautiful experiences should also be fast, accessible and reliable.',
      stack: [
        { name: 'React 18 & TypeScript', category: 'Frontend', description: 'Type-safe component architecture with instant re-renders.' },
        { name: 'Tailwind CSS', category: 'Styling', description: 'Zero-runtime utility styling with dynamic theme variables.' },
        { name: 'Motion / Framer', category: 'Kinetic Physics', description: 'Hardware-accelerated spring animations and gesture support.' },
      ],
      principles: [
        { title: 'Sub-100ms Interactions', description: 'Tactile, zero-lag UI feedback across all viewports.' },
        { title: '100% Responsive', description: 'Adaptive layouts tailored for mobile, tablet, and ultra-wide screens.' },
      ],
    },
    outcomes: {
      headline: 'THE RESULT',
      statement: 'FROM AN IDEA TO AN EXPERIENCE PEOPLE REMEMBER.',
      metrics: [
        { value: '+45%', label: 'ENGAGEMENT', note: 'Higher active session length across all touchpoints.' },
        { value: '2.8×', label: 'CONVERSION', note: 'Significant growth in primary call-to-action completions.' },
        { value: '+75%', label: 'USER SATISFACTION', note: 'Overwhelmingly positive user reception and brand sentiment.' },
      ],
    },
    testimonial: {
      quote: `Studio transformed our vision into an experience that exceeded all expectations. The attention to detail is unmatched.`,
      author: 'SARAH CONNOR',
      role: 'Head of Product',
      company: found.client,
    },
    tags: [found.category, 'DIGITAL', 'EXPERIENCE', 'STRATEGY', 'MOTION'],
    nextProject: {
      slug: nextProj.slug,
      number: String(((projectIdx + 1) % WORK_PROJECTS.length) + 1).padStart(2, '0'),
      title: nextProj.title,
      category: nextProj.categoryDisplay || nextProj.category,
      image: nextProj.image,
      accent: nextProj.accent || '#0066FF',
    },
  };
}
