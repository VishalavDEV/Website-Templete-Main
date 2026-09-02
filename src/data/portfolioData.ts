import { Project, Service, TimelineItem, SkillCategory, StatMetric, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Alex Rivera",
  brand: "Alex Rivera",
  role: "Senior Creative Technologist & Interface Designer",
  tagline: "Crafting digital experiences at the intersection of design & code.",
  subtagline: "Specializing in high-performance web applications, fluid micro-interactions, spatial design systems, and bespoke digital flagship platforms.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  secondaryAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  location: "San Francisco, CA & Remote Worldwide",
  availability: "Available for Select Q3/Q4 Projects",
  yearsExperience: "7+",
  projectsCompleted: "120+",
  clientSatisfaction: "99.8%",
  awardsCount: "14",
  email: "alex.rivera.engineering@gmail.com",
  phone: "+1 (415) 890-3421",
  timezone: "PST (UTC-8)",
  resumeUrl: "#resume",
};

export const STATS: StatMetric[] = [
  {
    value: "7+",
    label: "Years of Experience",
    sublabel: "Specialized in Frontend & Design Engineering",
    icon: "Clock"
  },
  {
    value: "120+",
    label: "Projects Shipped",
    sublabel: "From Seed Startups to Fortune 500",
    icon: "Layers"
  },
  {
    value: "99.8%",
    label: "Client Satisfaction",
    sublabel: "Consistently Exceeding Milestones",
    icon: "Smile"
  },
  {
    value: "14",
    label: "Design Awards",
    sublabel: "Awwwards, FWA & CSS Design Awards",
    icon: "Trophy"
  }
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "Github",
    handle: "alexrivera-aura"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
    handle: "alexrivera-design"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: "Twitter",
    handle: "@alexrivera_ui"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    icon: "Dribbble",
    handle: "aura-creative"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lumina-os",
    title: "Lumina Spatial OS",
    category: "Web Apps",
    tagline: "Next-generation browser operating system with fluid spatial windowing",
    description: "An experimental web-based spatial environment featuring GPU-accelerated window management, real-time collaboration, and gesture interactions.",
    fullDescription: "Lumina is a breakthrough web-based desktop workspace engineered for spatial multi-tasking. It reimagines traditional windowing paradigms through hardware-accelerated WebGL compositing, spring physics transitions, and sub-millisecond CRDT-based state syncing across distributed teams.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Lumina Labs",
    year: "2025",
    role: "Lead Interface Architect",
    duration: "4 Months",
    tags: ["React 19", "Three.js", "Web Audio API", "Tailwind CSS", "Framer Motion"],
    techStack: ["TypeScript", "React", "Three.js / WebGL", "Tailwind CSS", "Zustand", "WebRTC"],
    liveUrl: "https://example.com/lumina-os",
    githubUrl: "https://github.com/example/lumina-os",
    featured: true,
    challenge: "Rendering dozens of concurrent multi-media canvas nodes at a stable 60+ FPS while preserving responsive touch gestures and accessible keyboard shortcuts across all modern browsers.",
    solution: "Designed an offscreen virtualized rendering pipeline utilizing Web Workers and React Three Fiber, complemented by a tailored spring physics motion library for organic UI interactions.",
    results: [
      "Achieved 60fps across 98% of tested client devices",
      "Featured on Awwwards Site of the Day (9.1/10 score)",
      "Processed over 1.4M interactive spatial sessions within 60 days of beta"
    ],
    testimonial: {
      quote: "Alex possessed the rare ability to turn an impossibly complex spatial paradigm into the most intuitive, butter-smooth interface our users have ever touched.",
      author: "Elena Vance",
      role: "VP of Product, Lumina Labs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "chronos-ai",
    title: "Chronos AI Analytics",
    category: "Web Apps",
    tagline: "Enterprise predictive intelligence dashboard for high-frequency financial telemetry",
    description: "Real-time interactive data visualization platform processing millions of streaming financial events with sub-second latency.",
    fullDescription: "Chronos AI translates high-velocity financial streams into actionable visual stories. Designed for hedge funds and quantitative researchers, it features customizable GPU data charts, anomaly detection heatmaps, and natural language query generation.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Chronos Quant Group",
    year: "2024",
    role: "Senior Design Engineer",
    duration: "6 Months",
    tags: ["D3.js", "TypeScript", "Next.js", "WebSockets", "Tailwind CSS"],
    techStack: ["Next.js", "D3.js", "Apache ECharts", "Tailwind CSS", "Go WebSocket Gateway"],
    liveUrl: "https://example.com/chronos-ai",
    githubUrl: "https://github.com/example/chronos-ai",
    featured: true,
    challenge: "Handling continuous 100,000+ data points per second without causing DOM thrashing or memory leaks in long-running analyst browser sessions.",
    solution: "Implemented WebGL-backed scatter plots alongside a multi-tier canvas buffer strategy, with selective DOM hydration for interactive tooltips.",
    results: [
      "400% improvement in rendering performance over the legacy dashboard",
      "Adopted by 35 institutional trading desks globally",
      "Zero UI freeze during high-volatility market opening spikes"
    ]
  },
  {
    id: "vortex-audio",
    title: "Vortex Synthesizer 3D",
    category: "3D/Motion",
    tagline: "Interactive WebGL granular sound synthesizer and spatial audio visualizer",
    description: "Immersive 3D audio playground where sound synthesis parameters are mapped into sculptural geometric particle clusters in real-time.",
    fullDescription: "Vortex merges real-time DSP audio generation with reactive 3D shaders. Users sculpt generative ambient soundscapes by orbiting dynamic particle clouds that dynamically morph with frequency, resonance, and envelope decay.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Sonic Arts Digital",
    year: "2024",
    role: "Creative Developer & Sound Designer",
    duration: "3 Months",
    tags: ["Three.js", "GLSL Shaders", "Web Audio API", "Framer Motion"],
    techStack: ["Three.js", "Custom GLSL", "Tone.js", "React", "Web Audio API"],
    liveUrl: "https://example.com/vortex",
    githubUrl: "https://github.com/example/vortex-synth",
    featured: true,
    challenge: "Synchronizing low-latency audio synthesis clocks with 120Hz display refresh rates across mobile and desktop GPUs without jitter.",
    solution: "Used AudioWorklets for sound generation on dedicated threads decoupled from the UI thread, driving vertex shaders directly via custom Float32Array audio texture bindings.",
    results: [
      "FWA of the Month Winner",
      "Over 450,000 unique audio creations generated",
      "Average user session duration exceeded 8.5 minutes"
    ]
  },
  {
    id: "aurora-identity",
    title: "Aurora Capital Brand System",
    category: "Branding",
    tagline: "Dynamic identity system and generative design language for venture fund",
    description: "A comprehensive digital brand ecosystem featuring algorithmic generative motifs, fluid typography scales, and high-end interactive collateral.",
    fullDescription: "Created a modern visual language for a premier climate tech venture fund. The identity is built upon an algorithm that generates bespoke organic gradient meshes based on daily planetary carbon index data feeds.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Aurora Climate Capital",
    year: "2024",
    role: "Creative Director & Lead Designer",
    duration: "2.5 Months",
    tags: ["Brand Identity", "Design System", "Figma", "Typography", "Editorial"],
    techStack: ["Figma Tokens", "Tailwind CSS", "React Storybook", "GSAP"],
    liveUrl: "https://example.com/aurora-brand",
    featured: false,
    challenge: "Creating an authoritative institutional brand identity that feels simultaneously technological, environmentally grounded, and distinctly premium.",
    solution: "Crafted a custom variable typography hierarchy paired with generative color palettes inspired by atmospheric auroras and scientific satellite imagery.",
    results: [
      "Unified brand guidelines adopted across 12 global portfolio companies",
      "Brand recognition increased 180% during Series B funding announcements"
    ]
  },
  {
    id: "zenith-mobile",
    title: "Zenith Flow — Mindfulness App",
    category: "Mobile",
    tagline: "Haptic-driven mental wellness application with circadian biometric pacing",
    description: "A serene mobile experience with micro-haptics, adaptive audio landscapes, and gentle breathing gesture physics.",
    fullDescription: "Zenith Flow is an iOS & Android application designed to dissolve daily cognitive fatigue. Utilizing soft neumorphic geometry, circadian color calibration, and continuous breath-following interactive animations.",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Zenith Health Inc.",
    year: "2023",
    role: "Lead Mobile UX & Interaction Designer",
    duration: "5 Months",
    tags: ["React Native", "Expo", "Reanimated", "Design Tokens", "Mobile UX"],
    techStack: ["React Native", "Expo SDK", "React Native Reanimated 3", "Tailwind (NativeWind)"],
    liveUrl: "https://example.com/zenith-mobile",
    githubUrl: "https://github.com/example/zenith-mobile",
    featured: false,
    challenge: "Designing tactile micro-interactions that feel calming rather than distracting, ensuring seamless 120Hz gesture response on both iOS and Android.",
    solution: "Engineered gesture-driven fluid physics using Reanimated worklets, triggering subtly ramped core-haptic vibration waveforms timed to breathing rhythms.",
    results: [
      "4.9/5 stars across 18,000+ App Store reviews",
      "Apple Design Award Finalist in Delight & Interaction"
    ]
  },
  {
    id: "solaris-energy",
    title: "Solaris CleanGrid Platform",
    category: "Web Apps",
    tagline: "Industrial IoT grid management interface with real-time solar farm simulation",
    description: "Mission-critical operations platform monitoring 4.2GW of distributed clean power assets across 6 continents.",
    fullDescription: "Solaris CleanGrid provides power grid operators with holistic telemetry, autonomous load balancing triggers, and interactive digital twin representations of solar array fields.",
    coverImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80"
    ],
    client: "Solaris Power Systems",
    year: "2023",
    role: "Frontend Architect",
    duration: "7 Months",
    tags: ["React", "TypeScript", "Mapbox GL", "WebSockets", "Tailwind CSS"],
    techStack: ["React", "Mapbox GL JS", "Tailwind CSS", "Redux Toolkit", "Deck.gl"],
    liveUrl: "https://example.com/solaris",
    githubUrl: "https://github.com/example/solaris-grid",
    featured: false,
    challenge: "Visualizing high-density geospatial infrastructure and thousands of active inverters without degrading map navigation smoothness.",
    solution: "Combined Deck.gl layered hardware shaders with vector tiling for instantaneous zoom/pan performance over large geographic clusters.",
    results: [
      "Reduced operator incident response time by 38%",
      "Monitors over 4.2 Gigawatts of renewable generation capacity"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "frontend-eng",
    title: "Frontend & Creative Engineering",
    subtitle: "High-Performance Web Architecture",
    description: "Building production-grade web applications with modern React, TypeScript, Next.js, and fluid state management. Obsessed with sub-second page loads, accessible markup, and clean codebases.",
    icon: "Code2",
    gradient: "from-cyan-500 to-blue-600",
    deliverables: [
      "React 19 & Next.js App Router Architecture",
      "TypeScript Type-Safe Architecture",
      "Progressive Web Apps & Offline Support",
      "High-Performance Web Core Vitals (95+ Lighthouse)",
      "Server-Side Rendering & Edge APIs"
    ],
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "State Machines"]
  },
  {
    id: "uiux-design",
    title: "UI/UX & Interface Design",
    subtitle: "Editorial Minimalist Product Design",
    description: "Designing intuitive digital products that marry aesthetic excellence with functional clarity. From wireframing and user journeys to pixel-perfect design systems in Figma.",
    icon: "Layout",
    gradient: "from-violet-500 to-purple-600",
    deliverables: [
      "Comprehensive Figma Design Systems & Tokens",
      "Interactive High-Fidelity Prototypes",
      "User Journey Mapping & Information Architecture",
      "Usability Testing & Accessibility Audits (WCAG AAA)",
      "Cross-Platform Responsive Layouts"
    ],
    tags: ["Figma", "Design Systems", "Prototyping", "Design Tokens", "UX Strategy"]
  },
  {
    id: "motion-3d",
    title: "Creative Motion & 3D WebGL",
    subtitle: "Immersive Visual Micro-Interactions",
    description: "Infusing digital surfaces with organic life using Framer Motion, Three.js, and custom GLSL shaders. Adding anti-gravity physics, smooth scroll storytelling, and spatial UI elements.",
    icon: "Sparkles",
    gradient: "from-emerald-400 to-teal-600",
    deliverables: [
      "Three.js & WebGL 3D Interactive Scenes",
      "Framer Motion Spring Physics & Micro-Interactions",
      "Custom GLSL Fragment & Vertex Shaders",
      "Scroll-Linked Storytelling Sequences",
      "Fluid SVG & Canvas Particle Systems"
    ],
    tags: ["Three.js", "Framer Motion", "GLSL", "Canvas", "Micro-Interactions"]
  },
  {
    id: "design-systems",
    title: "Enterprise Design Systems",
    subtitle: "Scalable Component Libraries",
    description: "Bridging the chasm between design files and production code. Creating composable, documented, and bulletproof component ecosystems with Storybook and automated tokens.",
    icon: "Layers",
    gradient: "from-amber-400 to-orange-500",
    deliverables: [
      "Figma-to-Code Automated Token Pipelines",
      "Storybook Interactive Documentation",
      "Radix / Headless UI Accessible Primitives",
      "Theme Engine (Dark / Light / High Contrast)",
      "Component Versioning & Governance"
    ],
    tags: ["Storybook", "Radix UI", "Tailwind", "Tokens Studio", "CI/CD"]
  },
  {
    id: "performance-optimization",
    title: "Performance & Code Audits",
    subtitle: "Speed, SEO & Architectural Refactoring",
    description: "Diagnosing performance bottlenecks, reducing bundle sizes, resolving memory leaks, and boosting Core Web Vitals to achieve lightning-fast conversion-ready web applications.",
    icon: "Zap",
    gradient: "from-rose-500 to-pink-600",
    deliverables: [
      "Core Web Vitals Remediation (LCP, INP, CLS)",
      "Bundle Splitting & Dynamic Lazy Loading",
      "Render Optimization & Memoization Profiling",
      "SEO Technical Architecture & Structured Schema",
      "Accessibility & Cross-Browser Standardization"
    ],
    tags: ["Lighthouse", "Web Vitals", "Profiling", "Bundle Optimization", "SEO"]
  },
  {
    id: "product-strategy",
    title: "Technical Advisory & Strategy",
    subtitle: "From Zero-to-One Product Launch",
    description: "Partnering with founders and engineering leaders to make pragmatic tech stack decisions, build MVP roadmaps, and execute polished go-to-market releases.",
    icon: "Compass",
    gradient: "from-blue-500 to-indigo-600",
    deliverables: [
      "MVP Scoping & Technical Architecture Blueprints",
      "Tech Stack & Vendor Selection Strategy",
      "Engineering Team Mentorship & Code Reviews",
      "Security Best Practices & CI/CD Pipeline Setup",
      "Investor-Ready Prototype Development"
    ],
    tags: ["Advisory", "Architecture", "MVP Strategy", "Team Mentorship"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Code",
    description: "Core technical mastery in modern browser frameworks and type-safe development.",
    skills: [
      { name: "React 19 & Next.js", level: 98, category: "Frontend", experienceYears: "7 Yrs", highlight: true },
      { name: "TypeScript", level: 95, category: "Frontend", experienceYears: "6 Yrs", highlight: true },
      { name: "Tailwind CSS & PostCSS", level: 96, category: "Frontend", experienceYears: "6 Yrs", highlight: true },
      { name: "State Management (Zustand, Redux)", level: 92, category: "Frontend", experienceYears: "5 Yrs" },
      { name: "HTML5 / Semantic & Accessible DOM", level: 99, category: "Frontend", experienceYears: "7 Yrs" },
      { name: "REST & GraphQL APIs", level: 90, category: "Frontend", experienceYears: "5 Yrs" }
    ]
  },
  {
    title: "Creative & Motion Design",
    icon: "Sparkles",
    description: "Micro-interactions, spring mechanics, spatial shaders, and immersive graphics.",
    skills: [
      { name: "Framer Motion & Spring Physics", level: 96, category: "Motion", experienceYears: "5 Yrs", highlight: true },
      { name: "Three.js & WebGL / React Three Fiber", level: 85, category: "Motion", experienceYears: "4 Yrs", highlight: true },
      { name: "GSAP / ScrollTrigger", level: 88, category: "Motion", experienceYears: "4 Yrs" },
      { name: "GLSL Fragment & Vertex Shaders", level: 80, category: "Motion", experienceYears: "3 Yrs" },
      { name: "SVG Animation & Canvas API", level: 90, category: "Motion", experienceYears: "5 Yrs" }
    ]
  },
  {
    title: "UI/UX & Product Design",
    icon: "Palette",
    description: "Visual hierarchy, design systems, typographic mastery, and user research.",
    skills: [
      { name: "Figma & Auto Layout / Tokens", level: 95, category: "Design", experienceYears: "7 Yrs", highlight: true },
      { name: "Design Systems & Storybook", level: 94, category: "Design", experienceYears: "5 Yrs", highlight: true },
      { name: "WCAG AAA Accessibility Standards", level: 90, category: "Design", experienceYears: "5 Yrs" },
      { name: "Wireframing & User Journey Mapping", level: 92, category: "Design", experienceYears: "6 Yrs" },
      { name: "Micro-copy & Editorial Typography", level: 89, category: "Design", experienceYears: "6 Yrs" }
    ]
  },
  {
    title: "Tooling & Infrastructure",
    icon: "Terminal",
    description: "Modern build pipelines, test suites, version control, and containerization.",
    skills: [
      { name: "Vite, Turbopack, Webpack", level: 92, category: "Tooling", experienceYears: "6 Yrs" },
      { name: "Git, GitHub Actions & CI/CD", level: 90, category: "Tooling", experienceYears: "7 Yrs" },
      { name: "Vitest, Jest & Testing Library", level: 88, category: "Tooling", experienceYears: "5 Yrs" },
      { name: "Docker & Cloud Deployments (Vercel, AWS)", level: 82, category: "Tooling", experienceYears: "4 Yrs" },
      { name: "Node.js & Edge Compute", level: 85, category: "Tooling", experienceYears: "5 Yrs" }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    title: "Staff Design Engineer & Frontend Architect",
    organization: "Independent Studio & Advisory",
    location: "San Francisco, CA",
    period: "2023 — Present",
    status: "Current",
    description: "Leading frontend architecture and creative engineering for high-growth tech ventures, web3 pioneers, and luxury editorial brands.",
    achievements: [
      "Architected bespoke spatial interfaces and web design systems that raised over $45M in series funding for clients.",
      "Maintained a 100% on-time milestone delivery track record across 30+ custom web engagements.",
      "Engineered reusable animation and WebGL rendering primitives that cut engineering sprint turnaround by 40%."
    ],
    technologies: ["React 19", "Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Senior Frontend Engineer",
    organization: "Starlight Digital Technologies",
    location: "New York, NY (Remote)",
    period: "2021 — 2023",
    description: "Spearheaded core UI overhaul for flagship enterprise SaaS analytics platforms processing over 2B transactions monthly.",
    achievements: [
      "Reduced time-to-interactive (TTI) by 54% through code-splitting, Web Worker offloading, and custom canvas caching.",
      "Formulated and implemented an enterprise-wide design system used by 45+ frontend developers across 6 squads.",
      "Mentored 8 mid-level and junior engineers through pair programming and architectural design sessions."
    ],
    technologies: ["React", "TypeScript", "D3.js", "Redux Toolkit", "Storybook", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    type: "experience",
    title: "UI/UX Developer & Interaction Specialist",
    organization: "Vanguard Interactive Media",
    location: "Austin, TX",
    period: "2019 — 2021",
    description: "Created award-winning immersive marketing campaigns, 3D interactive product configurators, and brand experiences.",
    achievements: [
      "Won 3 Awwwards Site of the Day and 2 FWA recognitions for custom interactive brand experiences.",
      "Bridged creative 3D models from Blender into optimized browser-ready Three.js GLTF assets.",
      "Built custom micro-interaction motion libraries that increased visitor average session time by 65%."
    ],
    technologies: ["JavaScript (ES6+)", "Three.js", "GSAP", "Sass", "Webpack", "WebGL"]
  },
  {
    id: "edu-1",
    type: "education",
    title: "B.S. in Computer Science & Human-Computer Interaction",
    organization: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2015 — 2019",
    description: "Graduated with Honors. Focused coursework in Computer Graphics, UI/UX Ergonomics, Distributed Systems, and Algorithms.",
    achievements: [
      "President of the Berkeley Creative Tech & Web Development Society (2018-2019).",
      "Published undergraduate research paper on 'Cognitive Load Reduction in Spatial Web Interfaces'.",
      "Dean's Honor List for 6 consecutive academic semesters."
    ],
    technologies: ["Computer Graphics", "HCI Principles", "Data Structures", "Algorithms", "C++ / JS"]
  },
  {
    id: "edu-2",
    type: "education",
    title: "Executive Specialization in Interaction & Spatial Design",
    organization: "MIT Media Lab (Online Extension)",
    location: "Cambridge, MA",
    period: "2021",
    description: "Intensive post-graduate program covering advanced spatial computing, tangible interfaces, and generative machine learning in creative workflows.",
    achievements: [
      "Capstoned a physical-digital ambient sensory prototype with 1st place cohort ranking."
    ],
    technologies: ["Spatial Computing", "Sensory UI", "Generative Aesthetics", "Human-Centered Design"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Alex is that rarest of talents: a world-class visual designer with the deep engineering chops to bring any ambitious concept into production reality without compromising a single pixel.",
    author: "Marcus Thorne",
    role: "Co-Founder & CEO, Nexus Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Alex felt like fast-forwarding our product 3 years into the future. The animations are so crisp, and our core web vitals shot right to the top 1% bracket.",
    author: "Dr. Sarah Lin",
    role: "Chief Digital Officer, BioVance Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "If you need an interface that stops people in their tracks and makes them say 'how did they do that?', Alex is the person you hire. Period.",
    author: "David Kravitz",
    role: "Design Director, Prism Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];
