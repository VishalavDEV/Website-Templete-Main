export interface ServiceCapabilityItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ServiceApproachStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  detail: string;
  deliverables: string[];
}

export interface ServiceRelatedProject {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  metrics?: string;
  link: string;
}

export interface ServiceStat {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface ServiceDetailConfig {
  slug: string;
  number: string;
  title: string;
  badge: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  heroDescription: string;
  heroMetadata: string[];
  heroImage: string;
  heroAccentColor: string;
  
  // 2. Statement / Why It Matters
  statementLabel: string;
  statementHeadline: {
    line1: string;
    line2: string;
    line3: string;
  };
  statementParagraph: string;
  statementFootnote: string;

  // 3. Capabilities List
  capabilitiesHeading: string;
  capabilities: ServiceCapabilityItem[];

  // 4. Featured Visual
  featuredImage: string;
  featuredMetadata: string;
  featuredCaption: string;

  // 5. Our Approach
  approachHeading: {
    line1: string;
    line2: string;
  };
  approachIntro: string;
  approachSteps: ServiceApproachStep[];

  // 6. Philosophy
  philosophyLabel: string;
  philosophyHeadline: {
    line1: string;
    line2: string;
    line3: string;
  };
  philosophyBody: string;

  // 7. Capability Grid
  capabilityGridHeading: string;
  capabilityGrid: string[];

  // 8. Selected Work
  workHeading: {
    line1: string;
    line2: string;
  };
  workSubtitle: string;
  selectedProjects: ServiceRelatedProject[];

  // 9. Impact / Stats
  impactHeading: {
    line1: string;
    line2: string;
    line3: string;
  };
  impactSubtext: string;
  impactStats: ServiceStat[];
  impactDisclaimer: string;

  // 10. Testimonial
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    context: string;
  };

  // 11. Next Service
  nextService: {
    slug: string;
    number: string;
    title: string;
    tagline: string;
    image: string;
  };
}

export const SERVICE_DETAILS_DATA: Record<string, ServiceDetailConfig> = {
  strategy: {
    slug: 'strategy',
    number: '01',
    title: 'STRATEGY',
    badge: '01 / STRATEGY',
    headline: {
      line1: 'CLARITY',
      line2: 'BEFORE',
      line3: 'CREATION.',
    },
    heroDescription:
      'We define the direction, positioning and experience that give ambitious ideas a clear path forward.',
    heroMetadata: ['STRATEGY', 'RESEARCH', 'POSITIONING', 'EXPERIENCE'],
    heroImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    heroAccentColor: '#0066FF',

    statementLabel: 'WHY IT MATTERS',
    statementHeadline: {
      line1: 'GOOD DESIGN',
      line2: 'STARTS WITH',
      line3: 'A GOOD QUESTION.',
    },
    statementParagraph:
      'Before we create a visual language or digital experience, we understand the problem, the audience and the opportunity.',
    statementFootnote: 'THE FOUNDATION OF EVERY RELEVANT DIGITAL SYSTEM',

    capabilitiesHeading: 'WHAT WE DO',
    capabilities: [
      {
        number: '01',
        title: 'Research',
        description:
          'Deep qualitative and quantitative discovery to uncover genuine user friction and market asymmetries.',
        deliverables: ['User Interviews', 'Competitive Audits', 'Market Mapping'],
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '02',
        title: 'Positioning',
        description:
          'Carving distinct, defensible market territories that separate your brand from prevailing industry noise.',
        deliverables: ['Value Propositions', 'Brand Pillars', 'Category Framing'],
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '03',
        title: 'Brand Strategy',
        description:
          'Translating core commercial imperatives into meaningful narrative frameworks and expressive voice architectures.',
        deliverables: ['Brand Architecture', 'Messaging Frameworks', 'Tone of Voice'],
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '04',
        title: 'Digital Strategy',
        description:
          'Designing holistic technical, product and ecosystem roadmaps optimized for retention and scale.',
        deliverables: ['Platform Ecosystems', 'Feature Prioritization', 'Tech Roadmapping'],
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '05',
        title: 'Experience Strategy',
        description:
          'Mapping end-to-end customer journeys to eliminate drop-off and maximize high-value digital interactions.',
        deliverables: ['Journey Mapping', 'Information Architecture', 'Friction Audits'],
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      },
    ],

    featuredImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    featuredMetadata: 'STRATEGY / 2026',
    featuredCaption: 'System architecture & positioning topology for high-growth ventures',

    approachHeading: {
      line1: 'HOW WE',
      line2: 'APPROACH IT.',
    },
    approachIntro:
      'Strategy is not a static 100-page presentation. It is an operational framework that activates every subsequent phase.',
    approachSteps: [
      {
        number: '01',
        phase: 'DISCOVER',
        title: 'Understand the business, audience and opportunity.',
        description:
          'We immerse ourselves in your operating environment, interview key stakeholders, analyze behavioral data, and deconstruct competitor patterns to find hidden leverage points.',
        detail: 'Week 1-2 • Qualitative & Quantitative Synthesis',
        deliverables: ['Stakeholder Interviews', 'Audience Segmentation', 'Competitive Benchmark'],
      },
      {
        number: '02',
        phase: 'DEFINE',
        title: 'Turn research into a clear strategic direction.',
        description:
          'Raw inputs are synthesized into decisive product principles and strategic hypotheses that define what the product must accomplish.',
        detail: 'Week 3 • Core Product Principles',
        deliverables: ['Strategic Mandate', 'Experience Vision', 'Hypothesis Matrix'],
      },
      {
        number: '03',
        phase: 'POSITION',
        title: 'Create differentiation and a meaningful point of view.',
        description:
          'We craft your unique narrative positioning and market posture so your offering commands instant clarity and emotional resonance.',
        detail: 'Week 4 • Narrative & Category Framing',
        deliverables: ['Positioning Statement', 'Value Prop Architecture', 'Voice Guidelines'],
      },
      {
        number: '04',
        phase: 'ALIGN',
        title: 'Connect brand, product and experience.',
        description:
          'We bridge the gap between abstract business strategy and tangible product requirements, ensuring design and engineering work toward identical goals.',
        detail: 'Week 5 • Experience Architecture',
        deliverables: ['Ecosystem Blueprint', 'Information Architecture', 'Feature Priority Spec'],
      },
      {
        number: '05',
        phase: 'ACTIVATE',
        title: 'Turn strategy into something people can experience.',
        description:
          'Strategy comes alive in initial wireframes, interactive prototypes, and production roadmaps ready for execution with zero handoff friction.',
        detail: 'Week 6 • Execution Readiness',
        deliverables: ['Strategic Roadmap', 'Pilot Prototype Concept', 'KPI Measurement Framework'],
      },
    ],

    philosophyLabel: 'OUR PHILOSOPHY',
    philosophyHeadline: {
      line1: "DON'T ADD MORE.",
      line2: 'MAKE IT',
      line3: 'MEAN MORE.',
    },
    philosophyBody:
      'We believe the strongest experiences come from knowing what to remove as much as knowing what to create. Focus is the ultimate strategic advantage.',

    capabilityGridHeading: 'CORE COMPETENCIES',
    capabilityGrid: [
      'Brand Research',
      'Audience Insights',
      'Positioning',
      'Competitive Analysis',
      'Experience Mapping',
      'Digital Strategy',
      'Content Strategy',
      'Creative Direction',
    ],

    workHeading: {
      line1: 'STRATEGY',
      line2: 'IN ACTION.',
    },
    workSubtitle: 'Representative casework illustrating our strategic methodology in practice.',
    selectedProjects: [
      {
        id: 'aura',
        slug: 'aura',
        number: '01',
        title: 'AURA',
        subtitle: 'Brand Experience & Spatial Operating System',
        category: 'Spatial UI / Strategy',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
        description:
          'Defining the market positioning, interface paradigms, and narrative launch for an enterprise spatial computing platform.',
        tags: ['Positioning', 'UX Strategy', 'Spatial Design'],
        metrics: '+42% Engagement Lift',
        link: '/work/aura',
      },
      {
        id: 'north',
        slug: 'north',
        number: '02',
        title: 'NORTH',
        subtitle: 'Digital Platform & Architectural Commerce',
        category: 'E-Commerce / Strategy',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        description:
          'Architecting a multi-region headless commerce strategy that harmonized physical retail prestige with digital velocity.',
        tags: ['Digital Strategy', 'Information Architecture', 'Commerce'],
        metrics: '3.2× Conversion Rate',
        link: '/work/north',
      },
      {
        id: 'mono',
        slug: 'mono',
        number: '03',
        title: 'MONO',
        subtitle: 'Digital Identity & Creative Research Lab',
        category: 'Identity / Creative Strategy',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
        description:
          'Re-engineering brand positioning for a deep-tech robotics collective to attract tier-one international research capital.',
        tags: ['Brand Strategy', 'Category Creation', 'Art Direction'],
        metrics: '+68% Brand Recall',
        link: '/work/mono',
      },
    ],

    impactHeading: {
      line1: 'STRATEGY',
      line2: 'SHOULD MOVE',
      line3: 'THE BUSINESS.',
    },
    impactSubtext:
      'Rigorous strategic alignment delivers measurable commercial velocity across key user and brand touchpoints.',
    impactStats: [
      {
        value: '+42%',
        label: 'USER ENGAGEMENT',
        sublabel: 'Average increase across client product suites post-redesign',
      },
      {
        value: '3.2×',
        label: 'CONVERSION VELOCITY',
        sublabel: 'Multiplier observed in key checkout and onboarding funnels',
      },
      {
        value: '+68%',
        label: 'BRAND RECALL',
        sublabel: 'Measured in post-launch enterprise market awareness audits',
      },
    ],
    impactDisclaimer:
      'Note: Representative benchmark figures based on aggregate historical casework scenarios and client feedback.',

    testimonial: {
      quote:
        'They helped us see the problem differently before they ever started designing. That single shift saved us months of engineering rework.',
      author: 'ALEX MORGAN',
      role: 'CHIEF EXECUTIVE OFFICER',
      company: 'AURA SPATIAL',
      context: 'PARTNER SINCE 2024 • ENTERPRISE OS DEPLOYMENT',
    },

    nextService: {
      slug: 'branding',
      number: '02',
      title: 'BRAND IDENTITY',
      tagline: 'We shape memorable visual systems that command unmistakable presence.',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    },
  },

  branding: {
    slug: 'branding',
    number: '02',
    title: 'BRAND IDENTITY',
    badge: '02 / BRAND IDENTITY',
    headline: {
      line1: 'MAKE THE BRAND',
      line2: 'IMPOSSIBLE',
      line3: 'TO IGNORE.',
    },
    heroDescription:
      'We craft kinetic identity systems, bespoke typography, and design guidelines that command attention across every touchpoint.',
    heroMetadata: ['VISUAL IDENTITY', 'TYPOGRAPHY', 'ART DIRECTION', 'DESIGN SYSTEMS'],
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    heroAccentColor: '#0066FF',

    statementLabel: 'WHY IT MATTERS',
    statementHeadline: {
      line1: 'DISTINCTION',
      line2: 'IS THE ONLY',
      line3: 'TRUE DEFENSE.',
    },
    statementParagraph:
      'In saturated markets, beauty without point-of-view is invisible. We engineer distinct visual languages that trigger immediate brand recognition.',
    statementFootnote: 'THE AESTHETIC SIGNATURE THAT SCALES ACROSS ALL CHANNELS',

    capabilitiesHeading: 'WHAT WE DO',
    capabilities: [
      {
        number: '01',
        title: 'Visual Identity Systems',
        description:
          'Comprehensive design languages including logomarks, color mathematics, grid mechanics, and dynamic scaling rules.',
        deliverables: ['Core Symbolics', 'Color Systems', 'Grid Rules'],
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '02',
        title: 'Bespoke Typography',
        description:
          'Custom typefaces, variable font pairings, and optical hierarchy systems that give your brand a proprietary voice.',
        deliverables: ['Custom Letterforms', 'Type Hierarchy', 'Licensing Systems'],
        image:
          'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '03',
        title: 'Art Direction',
        description:
          'Photographic styling, 3D visual language, and cinematography guidelines that set an unmistakable tone.',
        deliverables: ['Visual Treatments', 'Lighting Moodboards', 'Asset Toolkits'],
        image:
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '04',
        title: 'Motion Guidelines',
        description:
          'Defining how the brand breathes, moves, and reacts through custom easing curves, transitions, and kinetic behavior.',
        deliverables: ['Choreography Systems', 'UI Motion Specs', 'Sonic Accents'],
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '05',
        title: 'Living Brand Guidelines',
        description:
          'Interactive web-based design portals that empower distributed global teams to ship coherent assets effortlessly.',
        deliverables: ['Interactive Portals', 'Component Downloads', 'Figma Libraries'],
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      },
    ],

    featuredImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    featuredMetadata: 'BRAND SYSTEMS / 2026',
    featuredCaption: 'Kinetic identity framework engineered for dynamic digital environments',

    approachHeading: {
      line1: 'HOW WE',
      line2: 'SHAPE BRANDS.',
    },
    approachIntro:
      'We treat identity as a flexible, dynamic organism rather than a rigid manual of static rules.',
    approachSteps: [
      {
        number: '01',
        phase: 'ESSENCE',
        title: 'Distill the core personality and tension.',
        description:
          'We extract the essential personality traits, tonal contrasts, and conceptual anchors that will govern all visual expression.',
        detail: 'Phase 1 • Conceptual Anchors',
        deliverables: ['Visual Moodboards', 'Tonal Sliders', 'Identity Territory Specs'],
      },
      {
        number: '02',
        phase: 'EXPLORATION',
        title: 'Develop competing visual directions.',
        description:
          'We construct complete end-to-end concept worlds across typography, color, and layout to test emotional resonance in real contexts.',
        detail: 'Phase 2 • Divergent Systems',
        deliverables: ['3 Divergent Directions', 'Real-world Mockups', 'Type Pairings'],
      },
      {
        number: '03',
        phase: 'CRAFT',
        title: 'Obsessive precision across every vector.',
        description:
          'Once a direction is locked, we refine kerning, bezier points, chromatic contrast ratios, and spatial grid alignments down to the sub-pixel.',
        detail: 'Phase 3 • Systematic Precision',
        deliverables: ['Master Logotype Suite', 'Color Math Tokens', 'Sub-Brand Hierarchies'],
      },
      {
        number: '04',
        phase: 'EXPANSION',
        title: 'Build the full kinetic ecosystem.',
        description:
          'We extend the identity into 3D environments, motion behavior, packaging, social formats, and interactive UI frameworks.',
        detail: 'Phase 4 • Multi-Touchpoint Rollout',
        deliverables: ['Motion Language', 'Collateral Suite', 'Packaging Specs'],
      },
      {
        number: '05',
        phase: 'DOCUMENTATION',
        title: 'Ship the interactive living system.',
        description:
          'We publish a bespoke digital brand portal equipped with downloadable production assets, code tokens, and rules.',
        detail: 'Phase 5 • Living Guidelines',
        deliverables: ['Interactive Brand Hub', 'Figma Component System', 'Exported Master Files'],
      },
    ],

    philosophyLabel: 'OUR PHILOSOPHY',
    philosophyHeadline: {
      line1: 'COHERENCE',
      line2: 'OVER',
      line3: 'CONFORMITY.',
    },
    philosophyBody:
      'A great brand identity is not a straitjacket. It is an expressive system flexible enough to evolve while remaining instantly identifiable anywhere.',

    capabilityGridHeading: 'BRAND DELIVERABLES',
    capabilityGrid: [
      'Visual Identity Systems',
      'Bespoke Typography',
      'Living Guidelines',
      'Art Direction',
      'Motion Design Rules',
      'Packaging & Print',
      'Social Design Systems',
      'Design Token Architecture',
    ],

    workHeading: {
      line1: 'IDENTITY',
      line2: 'IN ACTION.',
    },
    workSubtitle: 'Recent brand identity systems designed for global market distinction.',
    selectedProjects: [
      {
        id: 'north',
        slug: 'north',
        number: '01',
        title: 'NORTH',
        subtitle: 'Kinetic Architecture & Scandinavian Heritage',
        category: 'Identity / Spatial Design',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        description:
          'A minimalist, monolithic visual identity rooted in Nordic brutalism and tactile editorial typography.',
        tags: ['Visual Identity', 'Typography', 'Art Direction'],
        metrics: 'Featured on Brand New',
        link: '/work/north',
      },
      {
        id: 'spectra',
        slug: 'spectra',
        number: '02',
        title: 'SPECTRA',
        subtitle: 'Generative Optics & Computational Beauty',
        category: 'Generative Identity',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
        description:
          'An algorithmically driven visual system that generates real-time spectral color gradients responsive to audio frequencies.',
        tags: ['Generative Identity', 'WebGL', 'Motion'],
        metrics: 'Awwwards Site of the Day',
        link: '/work/spectra',
      },
      {
        id: 'form',
        slug: 'form',
        number: '03',
        title: 'FORM',
        subtitle: 'Tactile Ergonomics & Industrial Luxury',
        category: 'Brand & Packaging',
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85',
        description:
          'Complete brand architecture and packaging system for an avant-garde furniture and hardware atelier.',
        tags: ['Packaging', 'Art Direction', 'Custom Type'],
        metrics: '+95% Press Reach',
        link: '/work/form',
      },
    ],

    impactHeading: {
      line1: 'IDENTITY',
      line2: 'DRIVES MARKET',
      line3: 'VALUATION.',
    },
    impactSubtext:
      'Coherent, high-craft brand systems create immediate customer loyalty and premium pricing power.',
    impactStats: [
      {
        value: '+84%',
        label: 'PERCEIVED VALUE',
        sublabel: 'Increase in willingness-to-pay identified in post-brand launch studies',
      },
      {
        value: '4.5×',
        label: 'PRESS COVERAGE',
        sublabel: 'Earned media pickup across premier global design publications',
      },
      {
        value: '100%',
        label: 'CROSS-PLATFORM COHERENCE',
        sublabel: 'Seamless asset fidelity across packaging, web, spatial and motion',
      },
    ],
    impactDisclaimer:
      'Note: Representative benchmark figures based on aggregate historical casework scenarios and client feedback.',

    testimonial: {
      quote:
        'The identity system created for us didn’t just look extraordinary—it established an aura of authority that made investors take us seriously immediately.',
      author: 'ELENA VANCE',
      role: 'FOUNDER & CREATIVE DIRECTOR',
      company: 'NORTH ATELIER',
      context: 'SERIES A BRAND EXPANSION • GLOBAL FLAGSHIP ROLLOUT',
    },

    nextService: {
      slug: 'digital-design',
      number: '03',
      title: 'DIGITAL DESIGN',
      tagline: 'We architect intuitive web interfaces, spatial software, and seamless user flows.',
      image:
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85',
    },
  },

  'digital-design': {
    slug: 'digital-design',
    number: '03',
    title: 'DIGITAL DESIGN',
    badge: '03 / DIGITAL DESIGN',
    headline: {
      line1: 'DESIGN THAT',
      line2: 'PEOPLE',
      line3: 'REMEMBER.',
    },
    heroDescription:
      'Transforming complex product flows into intuitive, emotionally resonant digital products with obsessive attention to micro-interaction and hierarchy.',
    heroMetadata: ['UI / UX', 'DESIGN SYSTEMS', 'INTERACTION', 'PROTOTYPING'],
    heroImage:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85',
    heroAccentColor: '#0066FF',

    statementLabel: 'WHY IT MATTERS',
    statementHeadline: {
      line1: 'FRICTIONLESS',
      line2: 'DOES NOT MEAN',
      line3: 'SOULLESS.',
    },
    statementParagraph:
      'Digital products should be delightful, memorable, and effortless. We blend high usability benchmarks with exquisite visual choreography.',
    statementFootnote: 'ENGINEERED FOR DAILY EMOTIONAL CONNECTION',

    capabilitiesHeading: 'WHAT WE DO',
    capabilities: [
      {
        number: '01',
        title: 'User Experience (UX)',
        description:
          'Deep workflow modeling, mental model mapping, and intuitive user paths designed to reduce cognitive strain.',
        deliverables: ['Information Architecture', 'User Journey Maps', 'Wireframe Blueprints'],
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '02',
        title: 'User Interface (UI)',
        description:
          'Bespoke visual interfaces engineered with meticulous typography, balanced whitespace, and rigorous contrast ratios.',
        deliverables: ['Component UI Suites', 'Screen States', 'Dark/Light Themes'],
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '03',
        title: 'Design Systems',
        description:
          'Scalable Figma component libraries synchronized to tokenized code repositories for high-velocity engineering handoff.',
        deliverables: ['Token Systems', 'Figma Master Libraries', 'Documentation Hubs'],
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '04',
        title: 'Interaction Design',
        description:
          'Tactile micro-interactions, responsive hover states, gestural mechanics, and buttery physics-based animations.',
        deliverables: ['Micro-Interactions', 'Physics Curves', 'Motion Choreography'],
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '05',
        title: 'High-Fidelity Prototyping',
        description:
          'Interactive functional prototypes in code and Figma to validate assumptions with real users prior to engineering investment.',
        deliverables: ['Clickable Prototypes', 'User Test Scripts', 'Validation Reports'],
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      },
    ],

    featuredImage:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1920&q=85',
    featuredMetadata: 'DIGITAL INTERACTION / 2026',
    featuredCaption: 'High-density design system and interaction framework for web and spatial applications',

    approachHeading: {
      line1: 'HOW WE',
      line2: 'CRAFT INTERFACES.',
    },
    approachIntro:
      'Our UI/UX practice combines scientific usability principles with cutting-edge visual craft.',
    approachSteps: [
      {
        number: '01',
        phase: 'ARCHITECT',
        title: 'Map the information hierarchy.',
        description:
          'We break complex datasets and core actions into clear, digestible mental models with zero dead ends.',
        detail: 'Sprint 1 • Information Systems',
        deliverables: ['Site Architecture', 'Flow Diagrams', 'Content Models'],
      },
      {
        number: '02',
        phase: 'WIREFRAME',
        title: 'Structure the spatial layout and rhythm.',
        description:
          'Rapid low-fidelity prototyping ensures the functional bones are airtight before visual styling begins.',
        detail: 'Sprint 2 • Functional Wireframes',
        deliverables: ['Structural Wireframes', 'Key Screen Flows', 'Responsive Specs'],
      },
      {
        number: '03',
        phase: 'ART DIRECT',
        title: 'Inject distinctive aesthetic character.',
        description:
          'We apply customized typography, deliberate color harmonies, and tactile depth to transform wireframes into memorable art.',
        detail: 'Sprint 3 • High-Fidelity UI',
        deliverables: ['Visual UI Polish', 'Custom Icons', 'Hero Layouts'],
      },
      {
        number: '04',
        phase: 'CHOREOGRAPH',
        title: 'Add kinetic behavior and interaction physics.',
        description:
          'Every button click, page transition, and gesture receives spring physics curves that feel natural to human touch.',
        detail: 'Sprint 4 • Motion Specifications',
        deliverables: ['Interaction Tokens', 'Motion Prototypes', 'Handoff Specs'],
      },
      {
        number: '05',
        phase: 'SYSTEMATIZE',
        title: 'Package into a scalable design system.',
        description:
          'We document atomic components and auto-layout variants so engineering can build with complete parity.',
        detail: 'Sprint 5 • Production Design System',
        deliverables: ['Figma System Library', 'Design Tokens', 'Developer Guide'],
      },
    ],

    philosophyLabel: 'OUR PHILOSOPHY',
    philosophyHeadline: {
      line1: 'FEELS LIKE',
      line2: 'MAGIC.',
      line3: 'WORKS LIKE LOGIC.',
    },
    philosophyBody:
      'The greatest software feels intuitive on second one and indispensable by day seven. We design for instinct, not manuals.',

    capabilityGridHeading: 'DIGITAL CAPABILITIES',
    capabilityGrid: [
      'UI/UX Architecture',
      'Design System Engineering',
      'Interaction Prototyping',
      'Spatial & WebGL UI',
      'Accessibility (WCAG AA)',
      'Design Token Architecture',
      'Multi-Device Optimization',
      'User Research & Testing',
    ],

    workHeading: {
      line1: 'DIGITAL',
      line2: 'IN ACTION.',
    },
    workSubtitle: 'High-craft digital product interfaces built for scale and retention.',
    selectedProjects: [
      {
        id: 'aura',
        slug: 'aura',
        number: '01',
        title: 'AURA',
        subtitle: 'Enterprise Spatial Operating Interface',
        category: 'Spatial UI / WebGL',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
        description:
          'A three-dimensional user interface designed for real-time spatial manipulation and collaborative 3D workflows.',
        tags: ['Spatial UI', 'Design System', 'Micro-Interactions'],
        metrics: 'FWA of the Month',
        link: '/work/aura',
      },
      {
        id: 'form',
        slug: 'form',
        number: '02',
        title: 'FORM',
        subtitle: 'Parametric E-Commerce Configuration Suite',
        category: 'Web App / UI',
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85',
        description:
          'An ultra-tactile 3D product customizer enabling customers to build and order modular industrial hardware in real time.',
        tags: ['Web Application', 'Configurator', 'UI/UX'],
        metrics: '+72% Checkout Conversion',
        link: '/work/form',
      },
      {
        id: 'mono',
        slug: 'mono',
        number: '03',
        title: 'MONO',
        subtitle: 'Scientific Analytics & Telemetry Dashboard',
        category: 'Product UI / Dashboard',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
        description:
          'High-density data visualization platform supporting real-time telemetry streaming for robotics research teams.',
        tags: ['Data Viz', 'Dark Mode UI', 'Complex Systems'],
        metrics: 'Sub-16ms Framerate',
        link: '/work/mono',
      },
    ],

    impactHeading: {
      line1: 'INTERFACES',
      line2: 'THAT ACCELERATE',
      line3: 'RETENTION.',
    },
    impactSubtext:
      'Exceptional interface design turns casual visitors into power users and loyal advocates.',
    impactStats: [
      {
        value: '+64%',
        label: 'SESSION DURATION',
        sublabel: 'Increase in user time spent exploring core platform capabilities',
      },
      {
        value: '40%',
        label: 'SUPPORT TICKET REDUCTION',
        sublabel: 'Decrease in usability confusion following workflow redesigns',
      },
      {
        value: '99.8%',
        label: 'ACCESSIBILITY COMPLIANCE',
        sublabel: 'Rigorous WCAG 2.1 AA validation across all responsive breakpoints',
      },
    ],
    impactDisclaimer:
      'Note: Representative benchmark figures based on aggregate historical casework scenarios and client feedback.',

    testimonial: {
      quote:
        'The attention to typography and fluid interaction elevated our product from just another enterprise tool to something our customers genuinely love using every morning.',
      author: 'MARCUS THORNE',
      role: 'VP OF PRODUCT',
      company: 'FORM TECHNOLOGIES',
      context: 'GLOBAL SAAS PLATFORM REDESIGN',
    },

    nextService: {
      slug: 'development',
      number: '04',
      title: 'DEVELOPMENT',
      tagline: 'We build blazing-fast platforms, interactive shaders, and scalable architectures.',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    },
  },

  development: {
    slug: 'development',
    number: '04',
    title: 'DEVELOPMENT',
    badge: '04 / DEVELOPMENT',
    headline: {
      line1: 'TURNING DESIGN',
      line2: 'INTO',
      line3: 'EXPERIENCE.',
    },
    heroDescription:
      'We engineer blazing-fast web applications, creative shaders, and headless architectures with zero tolerance for lag, jank, or accessibility flaws.',
    heroMetadata: ['FRONTEND', 'CREATIVE DEV', 'PERFORMANCE', 'FULL STACK'],
    heroImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    heroAccentColor: '#0066FF',

    statementLabel: 'WHY IT MATTERS',
    statementHeadline: {
      line1: 'CODE IS',
      line2: 'THE CANVAS OF',
      line3: 'MODERN EXPERIENCE.',
    },
    statementParagraph:
      'A brilliant design without flawless technical execution is only a picture. We write production-grade code that performs effortlessly under massive traffic.',
    statementFootnote: 'SUB-SECOND INITIAL RENDER & 60FPS SMOOTHNESS',

    capabilitiesHeading: 'WHAT WE DO',
    capabilities: [
      {
        number: '01',
        title: 'Frontend Engineering',
        description:
          'Modern React, Next.js, and TypeScript architectures crafted with strict type safety and modular components.',
        deliverables: ['TypeScript Codebases', 'Server Component Systems', 'API Integrations'],
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '02',
        title: 'Creative Development & WebGL',
        description:
          'Interactive Three.js, WebGPU, and custom GLSL shaders that bring tactile realism and 3D kinetics to the browser.',
        deliverables: ['Custom Shaders', 'Three.js Canvases', 'Kinetic Micro-Animations'],
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '03',
        title: 'Performance & SEO Optimization',
        description:
          'Obsessive optimization achieving 100/100 Google Lighthouse metrics, zero layout shift, and instant edge delivery.',
        deliverables: ['Core Web Vitals', 'Edge Caching Strategies', 'Asset Pipelines'],
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '04',
        title: 'Headless CMS Architecture',
        description:
          'Modern content pipelines utilizing Sanity, Strapi, or Contentful so your editorial team publishes with total autonomy.',
        deliverables: ['Schema Modeling', 'Custom CMS Workflows', 'Live Visual Previews'],
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '05',
        title: 'Backend & Cloud Infrastructure',
        description:
          'Robust serverless APIs, real-time WebSockets, cloud security rules, and auto-scaling container configurations.',
        deliverables: ['Serverless Edge APIs', 'WebSocket Real-time Engines', 'CI/CD Pipelines'],
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      },
    ],

    featuredImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=85',
    featuredMetadata: 'FULL-STACK / 2026',
    featuredCaption: 'High-concurrency cloud infrastructure and fluid GPU-accelerated client renderer',

    approachHeading: {
      line1: 'HOW WE',
      line2: 'ENGINEER.',
    },
    approachIntro:
      'We treat engineering as an artistic discipline grounded in mathematical rigor and strict quality standards.',
    approachSteps: [
      {
        number: '01',
        phase: 'ARCHITECTURE',
        title: 'Design the system and data flow.',
        description:
          'We specify state models, API contracts, caching layers, and component topologies before writing production code.',
        detail: 'Sprint 1 • System Architecture',
        deliverables: ['Technical Architecture Doc', 'Data Schemas', 'Repo Setup'],
      },
      {
        number: '02',
        phase: 'CORE ENGINE',
        title: 'Build the foundational component layer.',
        description:
          'Constructing accessible, fully-typed UI primitives and establishing CI/CD automated test suites.',
        detail: 'Sprint 2 • Component Primitives',
        deliverables: ['Design System Codebase', 'State Architecture', 'Automated CI'],
      },
      {
        number: '03',
        phase: 'KINETICS',
        title: 'Implement motion and WebGL shaders.',
        description:
          'Integrating GPU-accelerated canvas experiences, smooth scroll interpolations, and physics-driven micro-interactions.',
        detail: 'Sprint 3 • Kinetic Integration',
        deliverables: ['Custom GLSL Shaders', 'Motion Layout Hooks', 'Gesture Engine'],
      },
      {
        number: '04',
        phase: 'INTEGRATION',
        title: 'Connect APIs, CMS and cloud services.',
        description:
          'Hooking up third-party services, real-time database synchronization, and headless editorial schemas.',
        detail: 'Sprint 4 • Full Stack Integration',
        deliverables: ['Headless CMS Wiring', 'API Endpoints', 'Payment & Auth'],
      },
      {
        number: '05',
        phase: 'PERFECTION',
        title: 'Extreme benchmarking & global deployment.',
        description:
          'Profiling frame-rates, eliminating layout thrashing, checking screen-reader accessibility, and deploying to edge CDN nodes.',
        detail: 'Sprint 5 • Zero-Defect Polish',
        deliverables: ['Lighthouse 100 Audit', 'Cross-browser Validation', 'Global Edge Deploy'],
      },
    ],

    philosophyLabel: 'OUR PHILOSOPHY',
    philosophyHeadline: {
      line1: 'PERFORMANCE',
      line2: 'IS NOT A FEATURE.',
      line3: 'IT IS RESPECT.',
    },
    philosophyBody:
      'Every millisecond of delay wastes your user’s time. We build with the relentless standard that software should respond instantaneously.',

    capabilityGridHeading: 'ENGINEERING STACK',
    capabilityGrid: [
      'React & Next.js Ecosystem',
      'TypeScript Strict Mode',
      'Three.js & WebGPU Shaders',
      'Motion & GSAP Animation',
      'Tailwind CSS Architecture',
      'Headless CMS Integrations',
      'Serverless & Edge APIs',
      'Lighthouse 100 Optimization',
    ],

    workHeading: {
      line1: 'CODE',
      line2: 'IN ACTION.',
    },
    workSubtitle: 'High-performance digital engineering deployed across millions of daily hits.',
    selectedProjects: [
      {
        id: 'mono',
        slug: 'mono',
        number: '01',
        title: 'MONO',
        subtitle: 'Sub-Millisecond Research Platform',
        category: 'Full-Stack / WebGL',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
        description:
          'Custom React + TypeScript platform with WebSockets handling 50,000 real-time telemetry updates per second without lag.',
        tags: ['React', 'TypeScript', 'WebSockets'],
        metrics: '100/100 Core Web Vitals',
        link: '/work/mono',
      },
      {
        id: 'spectra',
        slug: 'spectra',
        number: '02',
        title: 'SPECTRA',
        subtitle: 'Generative Shader Engine in WebGL',
        category: 'Creative Dev / Shaders',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
        description:
          'Custom GLSL raymarching shader rendered in real time at locked 60 frames per second across mobile and desktop.',
        tags: ['WebGL', 'GLSL', 'Three.js'],
        metrics: '60 FPS on Mobile',
        link: '/work/spectra',
      },
      {
        id: 'north',
        slug: 'north',
        number: '03',
        title: 'NORTH',
        subtitle: 'Global Headless Architecture',
        category: 'Headless Commerce',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        description:
          'Next.js Commerce platform with localized edge caching across 35 countries, yielding 0.4s average page transitions.',
        tags: ['Next.js', 'Headless CMS', 'Edge CDN'],
        metrics: '0.4s Global TTFB',
        link: '/work/north',
      },
    ],

    impactHeading: {
      line1: 'SPEED',
      line2: 'DRIVES REAL',
      line3: 'CONVERSION.',
    },
    impactSubtext:
      'Engineering excellence eliminates bounce rates and powers seamless user transactions globally.',
    impactStats: [
      {
        value: '< 500ms',
        label: 'AVERAGE PAGE LOAD',
        sublabel: 'Time-to-Interactive achieved globally across modern mobile devices',
      },
      {
        value: '100%',
        label: 'LIGHTHOUSE BENCHMARK',
        sublabel: 'Perfect scores for Performance, Accessibility, Best Practices & SEO',
      },
      {
        value: '99.99%',
        label: 'PRODUCTION UPTIME',
        sublabel: 'Engineered for resilience during high-volume enterprise traffic spikes',
      },
    ],
    impactDisclaimer:
      'Note: Representative benchmark figures based on aggregate historical casework scenarios and client feedback.',

    testimonial: {
      quote:
        'Their engineering team achieved something rare: flawless fidelity to the design mockups while maintaining sub-second loading speeds across the entire web application.',
      author: 'SARAH CHEN',
      role: 'HEAD OF TECHNOLOGY',
      company: 'MONO LABS',
      context: 'ENTERPRISE ROBOTICS PLATFORM DEPLOYMENT',
    },

    nextService: {
      slug: 'creative-technology',
      number: '05',
      title: 'CREATIVE TECHNOLOGY',
      tagline: 'We build experimental WebGL, generative visuals, and immersive interactive installations.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    },
  },

  'creative-technology': {
    slug: 'creative-technology',
    number: '05',
    title: 'CREATIVE TECHNOLOGY',
    badge: '05 / CREATIVE TECHNOLOGY',
    headline: {
      line1: 'WHEN TECHNOLOGY',
      line2: 'BECOMES',
      line3: 'AN ART FORM.',
    },
    heroDescription:
      'Bridging physical spaces and digital frontiers with generative algorithms, WebGPU experiences, interactive installations, and AI-assisted tools.',
    heroMetadata: ['EXPERIMENTAL', 'WEBGL', 'GENERATIVE', 'PHYSICAL COMPUTING'],
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85',
    heroAccentColor: '#0066FF',

    statementLabel: 'WHY IT MATTERS',
    statementHeadline: {
      line1: 'EXPLORE THE EDGE',
      line2: 'BEFORE IT BECOMES',
      line3: 'CONVENTIONAL.',
    },
    statementParagraph:
      'Breakthrough brands don’t follow standard UI patterns—they invent new modes of sensory engagement. We build the experimental concepts of tomorrow.',
    statementFootnote: 'THE INTERSECTION OF COMPUTATIONAL SCIENCE AND EMOTIVE ART',

    capabilitiesHeading: 'WHAT WE DO',
    capabilities: [
      {
        number: '01',
        title: 'Generative Art & Algorithms',
        description:
          'Custom autonomous mathematical algorithms that generate infinite, non-repeating visuals and reactive spatial textures.',
        deliverables: ['Custom Visual Algorithms', 'Audio-Reactive Pipelines', 'NFT Systems'],
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '02',
        title: 'Immersive WebGL & WebGPU',
        description:
          'Browser-based 3D simulations, particle ecosystems, and dynamic lighting environments that push hardware limits.',
        deliverables: ['WebGPU Engines', 'Particle Simulators', '3D Environment Portals'],
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '03',
        title: 'Interactive Physical Installations',
        description:
          'Sensor-driven spatial experiences connecting depth cameras, projection mapping, and DMX lighting to physical environments.',
        deliverables: ['LiDAR Tracking Engines', 'Projection Mapping', 'Hardware Integration'],
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '04',
        title: 'Experimental AI Prototypes',
        description:
          'Custom neural interfaces and generative AI tools tailored to amplify human creativity and workflow speed.',
        deliverables: ['Custom AI Pipelines', 'Natural Language UI', 'Generative Tooling'],
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '05',
        title: 'Spatial Audio & Sound Design',
        description:
          'Procedural WebAudio synthesizers, dynamic acoustic reverberation, and reactive audio landscapes.',
        deliverables: ['WebAudio Synthesizers', 'Dynamic Spatial Sound', 'UI Audio Stems'],
        image:
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      },
    ],

    featuredImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=85',
    featuredMetadata: 'CREATIVE TECH / 2026',
    featuredCaption: 'High-dimensional particle simulation and WebGPU shader computational core',

    approachHeading: {
      line1: 'HOW WE',
      line2: 'EXPERIMENT.',
    },
    approachIntro:
      'We operate a rapid R&D prototype loop where hypotheses are coded in days, not discussed in months.',
    approachSteps: [
      {
        number: '01',
        phase: 'PROVOCATION',
        title: 'Define the boundary condition.',
        description:
          'We identify novel browser APIs, hardware sensors, or algorithmic formulas to test what hasn’t been built before.',
        detail: 'Sprint 1 • R&D Sandbox',
        deliverables: ['Feasibility Spikes', 'Algorithm Prototypes', 'Sensory Architecture'],
      },
      {
        number: '02',
        phase: 'MATH & SHADERS',
        title: 'Write custom GLSL kernels.',
        description:
          'Developing customized mathematical equations that simulate fluid dynamics, optics, light refraction, and particle forces.',
        detail: 'Sprint 2 • Computational Physics',
        deliverables: ['Custom Shader Code', 'Noise Functions', 'Compute Pipelines'],
      },
      {
        number: '03',
        phase: 'INTERACTION',
        title: 'Bind human input to the system.',
        description:
          'Connecting mouse speed, webcam vision, gyro motion, and spatial audio to the visual simulator.',
        detail: 'Sprint 3 • Sensory Binding',
        deliverables: ['Input Map Engine', 'Gestural Controls', 'Microphone Frequency Analyzers'],
      },
      {
        number: '04',
        phase: 'OPTIMIZE',
        title: 'Scale to consumer hardware.',
        description:
          'Optimizing draw calls, instanced meshes, and shader execution branches to ensure seamless execution everywhere.',
        detail: 'Sprint 4 • Hardware Profiling',
        deliverables: ['GPU Frame Profiling', 'LOD Fallbacks', 'Mobile Adaptations'],
      },
      {
        number: '05',
        phase: 'INSTALL',
        title: 'Launch online or in physical space.',
        description:
          'Deploying as an interactive web experience or installing on physical museum/event projection rigs.',
        detail: 'Sprint 5 • Production Exhibition',
        deliverables: ['Production Web Build', 'Installation Setup Guide', 'Exhibition Master Files'],
      },
    ],

    philosophyLabel: 'OUR PHILOSOPHY',
    philosophyHeadline: {
      line1: 'WONDER',
      line2: 'IS THE HIGHEST',
      line3: 'FORM OF IMPACT.',
    },
    philosophyBody:
      'When an audience experiences something they cannot explain, they remember it forever. We engineer genuine digital awe.',

    capabilityGridHeading: 'TECH LAB CAPABILITIES',
    capabilityGrid: [
      'WebGPU & WebGL Shaders',
      'Generative Visual Systems',
      'Spatial Audio Synthesis',
      'LiDAR & Physical Sensors',
      'Projection Mapping',
      'AI-Powered Interfaces',
      'Real-Time Raymarching',
      'Custom Creative Tooling',
    ],

    workHeading: {
      line1: 'LABS',
      line2: 'IN ACTION.',
    },
    workSubtitle: 'Experimental technology projects bridging code, light, and sensory interaction.',
    selectedProjects: [
      {
        id: 'spectra',
        slug: 'spectra',
        number: '01',
        title: 'SPECTRA',
        subtitle: 'Generative Audio-Visual Simulation',
        category: 'WebGL / WebGPU',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
        description:
          'An experimental browser experience synthesizing 100,000 reactive particles dynamically responsive to user microphone input.',
        tags: ['WebGPU', 'Audio Reactive', 'Custom GLSL'],
        metrics: 'FWA of the Day',
        link: '/work/spectra',
      },
      {
        id: 'aura',
        slug: 'aura',
        number: '02',
        title: 'AURA',
        subtitle: 'Spatial Volumetric Interface',
        category: 'Spatial Computing',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
        description:
          'Volumetric particle system and gesture-based 3D workspace created for next-generation spatial computing headsets.',
        tags: ['Spatial OS', 'LiDAR Tracking', 'Three.js'],
        metrics: 'Fast Company Innovation Award',
        link: '/work/aura',
      },
      {
        id: 'frame',
        slug: 'frame',
        number: '03',
        title: 'FRAME',
        subtitle: 'Interactive Physical Gallery Space',
        category: 'Physical Computing',
        image:
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
        description:
          'Sensory exhibition with projection mapping tracking visitor movement to morph kinetic digital typography across 40ft walls.',
        tags: ['Projection Mapping', 'Sensors', 'Kinetics'],
        metrics: '120,000+ Gallery Visitors',
        link: '/work/frame',
      },
    ],

    impactHeading: {
      line1: 'INNOVATION',
      line2: 'CAPTURES GLOBAL',
      line3: 'IMAGINATION.',
    },
    impactSubtext:
      'Bold creative technology campaigns generate exponential organic press attention and cultural relevance.',
    impactStats: [
      {
        value: '10M+',
        label: 'ORGANIC IMPRESSIONS',
        sublabel: 'Global social media and press reach across experimental showcase launches',
      },
      {
        value: '12+',
        label: 'INTERNATIONAL AWARDS',
        sublabel: 'Accolades including FWA of the Day, Awwwards Site of the Year nominations',
      },
      {
        value: '60 FPS',
        label: 'PERFORMANCE RIGOR',
        sublabel: 'Locked framerate rendering 100k+ instanced particles on mobile devices',
      },
    ],
    impactDisclaimer:
      'Note: Representative benchmark figures based on aggregate historical casework scenarios and client feedback.',

    testimonial: {
      quote:
        'They did what everyone else said was technically impossible in a browser. The launch made our company the talk of the entire developer and design community.',
      author: 'DR. KAI STERLING',
      role: 'FOUNDER & CTO',
      company: 'SPECTRA OPTICS',
      context: 'WEBGL EXPERIMENTAL ENGINE LAUNCH',
    },

    nextService: {
      slug: 'content-motion',
      number: '06',
      title: 'CONTENT & MOTION',
      tagline: 'We produce captivating motion graphics, art direction, and cinematic digital storytelling.',
      image:
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    },
  },

  'content-motion': {
    slug: 'content-motion',
    number: '06',
    title: 'CONTENT & MOTION',
    badge: '06 / CONTENT & MOTION',
    headline: {
      line1: 'MAKE PEOPLE',
      line2: 'STOP AND',
      line3: 'LOOK.',
    },
    heroDescription:
      'Creating arresting motion graphics, cinematic brand films, high-fidelity 3D assets, and multi-channel campaign content that captivates audiences instantly.',
    heroMetadata: ['MOTION DESIGN', 'ART DIRECTION', '3D ASSETS', 'BRAND FILMS'],
    heroImage:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    heroAccentColor: '#0066FF',

    statementLabel: 'WHY IT MATTERS',
    statementHeadline: {
      line1: 'STATIC IMAGES',
      line2: 'NO LONGER',
      line3: 'MOVE PEOPLE.',
    },
    statementParagraph:
      'In a high-velocity digital landscape, motion is the universal language of emotion. We choreograph movement that tells deep brand stories.',
    statementFootnote: 'NARRATIVE IMPACT ACROSS ALL RESOLUTIONS',

    capabilitiesHeading: 'WHAT WE DO',
    capabilities: [
      {
        number: '01',
        title: 'Cinematic Motion Design',
        description:
          'High-end 2D and 3D motion graphics, brand reveals, kinetic type systems, and broadcast-quality title sequences.',
        deliverables: ['Brand Ident Animations', 'Kinetic Typography Stems', 'Broadcast Toolkits'],
        image:
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '02',
        title: '3D Product Visualization',
        description:
          'Hyper-realistic physical material rendering, exploded hardware animations, and photorealistic lighting studies.',
        deliverables: ['Octane/Cinema4D Renders', 'Interactive 3D Assets', 'Lighting Rig Setups'],
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '03',
        title: 'Brand Film Direction',
        description:
          'Concept scripting, cinematic live-action direction, color grading, and sonic score composition.',
        deliverables: ['Script Treatments', 'Cinematography Direction', 'Final 4K Master Cuts'],
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '04',
        title: 'Social & Launch Campaigns',
        description:
          'Multi-format kinetic assets designed to stop thumb-scroll behavior and drive immense launch day conversion.',
        deliverables: ['Vertical Reels & Stories', 'Social Motion Assets', 'Ad Creative Suites'],
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      },
      {
        number: '05',
        title: 'UI & Product Micro-Choreography',
        description:
          'Lottie, SVG, and code-based animation assets ready for seamless insertion directly into web and mobile apps.',
        deliverables: ['Lottie JSON Files', 'SVG Keyframes', 'CSS Animation Modules'],
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
    ],

    featuredImage:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1920&q=85',
    featuredMetadata: 'MOTION & NARRATIVE / 2026',
    featuredCaption: 'High-fidelity cinematic 3D cinematography and kinetic brand storytelling',

    approachHeading: {
      line1: 'HOW WE',
      line2: 'CHOREOGRAPH.',
    },
    approachIntro:
      'We combine Hollywood-grade cinematography techniques with modern digital pacing to hold audience attention.',
    approachSteps: [
      {
        number: '01',
        phase: 'TREATMENT',
        title: 'Draft the narrative arc and storyboard.',
        description:
          'We establish the emotional rhythm, pacing, musical key, and visual style frames before rendering a single frame.',
        detail: 'Phase 1 • Narrative Storyboards',
        deliverables: ['Style Frames', 'Script Treatments', 'Animatic Storyboards'],
      },
      {
        number: '02',
        phase: '3D MODELLING',
        title: 'Sculpt geometry and material shaders.',
        description:
          'Building high-density 3D geometry with micro-scratches, tactile textures, and accurate physical refractions.',
        detail: 'Phase 2 • Textures & Modeling',
        deliverables: ['High-Poly 3D Assets', 'Procedural Shaders', 'Camera Rig Paths'],
      },
      {
        number: '03',
        phase: 'KINETICS',
        title: 'Choreograph movement and easing.',
        description:
          'Tuning velocity curves, camera shake, focal blur, and kinetic typography to hit the musical beat precisely.',
        detail: 'Phase 3 • Animation & Timing',
        deliverables: ['Raw Animation Passes', 'Motion Curve Tuning', 'Secondary Physics'],
      },
      {
        number: '04',
        phase: 'SOUND DESIGN',
        title: 'Compose custom bespoke audio.',
        description:
          'Layering foley effects, sub-bass rumbles, risers, and atmospheric sound design that amplifies every visual impact.',
        detail: 'Phase 4 • Audio Composition',
        deliverables: ['Original Sound Design', 'Mix & Master Stems', 'Sonic Ident'],
      },
      {
        number: '05',
        phase: 'DELIVERY',
        title: 'Render in every resolution and format.',
        description:
          'Outputting uncompressed ProRes masters, mobile vertical cuts, web-optimized MP4s, and Lottie vector animations.',
        detail: 'Phase 5 • Multi-Format Suite',
        deliverables: ['4K Master Files', 'Social Cutdowns (9:16, 1:1, 16:9)', 'Web Lottie Assets'],
      },
    ],

    philosophyLabel: 'OUR PHILOSOPHY',
    philosophyHeadline: {
      line1: 'RHYTHM',
      line2: 'CREATES',
      line3: 'RESONANCE.',
    },
    philosophyBody:
      'Motion is not decorative fluff. Movement creates hierarchy, directs focus, and embeds feeling into every interaction.',

    capabilityGridHeading: 'CONTENT DISCIPLINES',
    capabilityGrid: [
      '3D Motion Design',
      'Art Direction & Styling',
      'Product Visualization',
      'Brand Film Direction',
      'Kinetic Typography',
      'Sound Design & Scoring',
      'Multi-Format Social Kits',
      'Lottie & SVG Animation',
    ],

    workHeading: {
      line1: 'MOTION',
      line2: 'IN ACTION.',
    },
    workSubtitle: 'Cinematic brand films and kinetic digital campaigns that captivate audiences.',
    selectedProjects: [
      {
        id: 'frame',
        slug: 'frame',
        number: '01',
        title: 'FRAME',
        subtitle: 'Cinematic Spatial Film & 3D Identity',
        category: 'Motion / 3D Film',
        image:
          'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
        description:
          'A surreal 90-second 3D brand film combining hyper-realistic cloth physics, obsidian sculptures, and custom orchestral sound design.',
        tags: ['3D Motion', 'Cinema4D', 'Sound Design'],
        metrics: 'Vimeo Staff Pick',
        link: '/work/frame',
      },
      {
        id: 'aura',
        slug: 'aura',
        number: '02',
        title: 'AURA',
        subtitle: 'Product Reveal & Hardware Mechanics',
        category: 'Product Motion',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
        description:
          'Photorealistic exploded-view animations detailing the internal optical lenses and titanium chassis of spatial hardware.',
        tags: ['Octane Render', 'Product Animation', '4K Master'],
        metrics: '3.5M+ Launch Views',
        link: '/work/aura',
      },
      {
        id: 'form',
        slug: 'form',
        number: '03',
        title: 'FORM',
        subtitle: 'Kinetic Campaign & Social Series',
        category: 'Campaign Motion',
        image:
          'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85',
        description:
          'Fast-paced social campaign series highlighting tactile materials with punchy typography and hypnotic loop choreography.',
        tags: ['Social Campaign', 'Kinetic Type', 'Sound Design'],
        metrics: '+180% Click-Through Rate',
        link: '/work/form',
      },
    ],

    impactHeading: {
      line1: 'MOTION',
      line2: 'COMMANDS',
      line3: 'ATTENTION.',
    },
    impactSubtext:
      'Dynamic cinematic assets drastically increase social engagement, recall, and product conversion.',
    impactStats: [
      {
        value: '3.5×',
        label: 'VIEW-THROUGH RATE',
        sublabel: 'Higher completion rate compared to standard industry product videos',
      },
      {
        value: '+180%',
        label: 'CLICK-THROUGH VELOCITY',
        sublabel: 'Measured on social ad campaigns deploying dynamic kinetic assets',
      },
      {
        value: '100%',
        label: 'IN-HOUSE PRODUCTION',
        sublabel: 'From initial storyboarding and 3D modeling to custom audio mix & master',
      },
    ],
    impactDisclaimer:
      'Note: Representative benchmark figures based on aggregate historical casework scenarios and client feedback.',

    testimonial: {
      quote:
        'The brand film they created became the centerpiece of our Series B launch. It captured the soul of what we are building with astonishing beauty.',
      author: 'VICTORIA STERLING',
      role: 'FOUNDER & CEO',
      company: 'FRAME DIGITAL',
      context: 'SERIES B GLOBAL BRAND FILM LAUNCH',
    },

    nextService: {
      slug: 'strategy',
      number: '01',
      title: 'STRATEGY',
      tagline: 'We define the direction, positioning and experience before the pixels begin.',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    },
  },
};
