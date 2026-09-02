import { JobPosition } from '../types';

export const CAREERS_HERO_DATA = {
  label: 'JOIN THE STUDIO',
  headline: ['MAKE', 'SOMETHING', 'MATTER.'],
  supportingText: "We're looking for curious people who care deeply about ideas, craft and the experiences they create.",
  metadata: [
    { label: 'PEOPLE', value: '18' },
    { label: 'DISCIPLINES', value: '06' },
    { label: 'SHARED CURIOSITY', value: '01' },
  ],
  heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85',
};

export const CULTURE_DATA = {
  label: 'WHY JOIN US',
  heading: 'WE BELIEVE GREAT WORK COMES FROM GREAT CURIOSITY.',
  supportingText: 'We create an environment where strategy, design, technology and different perspectives can collide.',
};

export interface StudioLifeWord {
  id: string;
  word: string;
  subtext: string;
  image: string;
  description: string;
}

export const STUDIO_LIFE_WORDS: StudioLifeWord[] = [
  {
    id: 'think',
    word: 'THINK',
    subtext: 'Conceptual Depth & Systems',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85',
    description: 'We interrogate briefs down to foundational principles before drawing a single pixel.',
  },
  {
    id: 'make',
    word: 'MAKE',
    subtext: 'Precision & Digital Craft',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=85',
    description: 'Prototyping rapidly, obsessing over typographic rhythm, interaction damping, and tactile polish.',
  },
  {
    id: 'learn',
    word: 'LEARN',
    subtext: 'Continuous Exploration',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85',
    description: 'Weekly research shareouts, experimentation sprints, and dedicated learning allowances.',
  },
  {
    id: 'explore',
    word: 'EXPLORE',
    subtext: 'Uncharted Creative Territory',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    description: 'Pushing browser capabilities with WebGL, spatial canvas interaction, and generative tools.',
  },
  {
    id: 'collaborate',
    word: 'COLLABORATE',
    subtext: 'Cross-Disciplinary Dialogue',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85',
    description: 'Designers who write code, strategists who critique typography, developers who shape narrative.',
  },
  {
    id: 'play',
    word: 'PLAY',
    subtext: 'Uninhibited Curiosity',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85',
    description: 'Creative accidents, internal hackathons, and making things simply because they delight us.',
  },
];

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'senior-product-designer',
    number: '01',
    title: 'Senior Product Designer',
    department: 'Design',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    experience: '5+ Years',
    tagline: 'Lead end-to-end digital experience architecture and multi-platform design systems.',
    description: "We're looking for a thoughtful product designer who can turn complex problems into simple, meaningful experiences. You will lead key client engagements from concept through launch, defining interaction paradigms and elevating craft across every surface.",
    responsibilities: [
      'Lead product design projects from initial discovery to high-fidelity design specifications',
      'Create intuitive user flows, interaction frameworks, and refined interface components',
      'Work closely with strategy and engineering to balance creative ambition with technical feasibility',
      'Contribute to and maintain comprehensive, multi-brand design systems with robust documentation',
      'Present and defend design decisions directly with executive client partners and stakeholders',
      'Mentor emerging designers and participate in studio-wide design critiques',
    ],
    requirements: [
      'Strong product design fundamentals with a portfolio demonstrating depth in digital product & platform craft',
      'Experience building and scaling modern multi-brand design systems in Figma and tokens',
      'Clear, articulate communication skills and ability to frame design decisions conceptually',
      'Relentless curiosity and micro-level attention to typography, spacing, and state continuity',
      'Proficiency in user research synthesis and translating insights into actionable design frameworks',
    ],
    niceToHave: [
      'Experience with interactive motion, micro-interactions, and prototyping in Framer or Principle',
      'Working understanding of modern frontend development (React, HTML/CSS, design tokens)',
      'Experience designing for luxury, architectural, editorial, or cutting-edge technical products',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'creative-developer',
    number: '02',
    title: 'Creative Developer',
    department: 'Technology',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    experience: '4+ Years',
    tagline: 'Bridge creative concept and cutting-edge browser performance with WebGL and React.',
    description: "We're looking for an inventive creative developer who loves turning ambitious designs into silky-smooth, award-winning digital realities. You care deeply about choreography, performance, shader mathematics, and semantic accessibility.",
    responsibilities: [
      'Build expressive, ultra-responsive interactive web applications and digital installations',
      'Architect fluid kinetic transitions, custom canvas shaders, and WebGL/Three.js visual scenes',
      'Collaborate with designers during early concept phases to prototype interaction mechanics and evaluate performance',
      'Maintain rigorous code quality, bundle efficiency, and 60fps rendering benchmarks across desktop and mobile',
      'Write clean, accessible, modern TypeScript and React code adhering to modern standards',
    ],
    requirements: [
      'Deep fluency with modern TypeScript, React, Vite, Tailwind CSS, and headless architectures',
      'Strong experience with web animation (Framer Motion, Motion One, GSAP, CSS transforms)',
      'Working knowledge of WebGL, GLSL shaders, or Three.js/R3F for interactive canvas graphics',
      'Keen visual eye with respect for kerning, optical alignment, and frame-by-frame pacing',
      'Commitment to web accessibility (a11y), responsive resilience, and performance optimization',
    ],
    niceToHave: [
      'Experience with headless CMS architectures (Sanity, Contentful) and Edge runtime deployments',
      'Experience with Web Audio API, spatial audio triggers, or generative canvas visualizers',
      'Contributions to open-source creative technology libraries or creative code sketches',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brand-strategist',
    number: '03',
    title: 'Brand Strategist',
    department: 'Strategy',
    type: 'Full-Time',
    location: 'Hybrid (London / NY)',
    experience: '5+ Years',
    tagline: 'Define transformative brand narratives, positioning matrices, and market trajectories.',
    description: "We're looking for a sharp strategic thinker who can uncover hidden cultural tensions and translate them into actionable brand positioning, voice guidelines, and creative territories for world-class founders.",
    responsibilities: [
      'Conduct qualitative industry research, competitor landscapes, and cultural trend auditing',
      'Develop sharp brand positioning platforms, core narrative pillars, and verbal identity frameworks',
      'Facilitate dynamic stakeholder workshops with executive leadership and founding teams',
      'Author compelling strategy decks and creative briefs that inspire and orient design teams',
      'Partner closely with creative directors to ensure strategic continuity throughout execution',
    ],
    requirements: [
      'Proven background in brand strategy or creative consulting at a leading studio or agency',
      'Exceptional writing and verbal communication skills with a clear, jargon-free voice',
      'Ability to distill complex business models and technical domains into resonant human truths',
      'High visual literacy and deep appreciation for the symbiotic relationship between word and image',
    ],
    niceToHave: [
      'Background in cultural anthropology, journalism, or semiotics',
      'Experience working with emerging tech, luxury, sustainability, or spatial computing brands',
      'Experience naming products, architectures, and emerging ventures',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'motion-designer',
    number: '04',
    title: 'Motion Designer (3D / Interactive)',
    department: 'Motion',
    type: 'Full-Time',
    location: 'Remote',
    experience: '3+ Years',
    tagline: 'Choreograph fluid 3D sequences, kinetic typography, and bespoke UI animation.',
    description: "We're looking for a motion designer with a strong aesthetic sensibility to bring brands and digital products alive. You will craft cinematic brand films, interactive 3D assets, and precise UI kinetic choreographies.",
    responsibilities: [
      'Design and animate kinetic brand identities, title sequences, UI choreographies, and product demo films',
      'Model, texture, light, and render high-fidelity 3D assets optimized for real-time web and film exports',
      'Define motion guidelines, easing curves, and duration tokens for design systems',
      'Collaborate with developers to export and calibrate Lottie, WebM, and GLTF/GLB web assets',
      'Experiment with new motion techniques, procedural geometry, and real-time lighting',
    ],
    requirements: [
      'Outstanding motion design reel showcasing kinetic typography, 3D aesthetics, and refined timing',
      'Proficiency in Cinema 4D / Blender, After Effects, and Octane/Redshift render engines',
      'Nuanced understanding of rhythm, physical inertia, anticipation, and easing curves',
      'Ability to translate abstract conceptual ideas into evocative spatial motion narratives',
    ],
    niceToHave: [
      'Experience with Houdini or procedural particle simulations',
      'Familiarity with Rive for interactive vector state machines',
      'Basic knowledge of 3D asset optimization for web (low-poly modeling, texture baking)',
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'senior-producer',
    number: '05',
    title: 'Senior Creative Producer',
    department: 'Production',
    type: 'Full-Time',
    location: 'Hybrid (London)',
    experience: '5+ Years',
    tagline: 'Orchestrate ambitious multidisciplinary projects with rigorous care and clarity.',
    description: "We're looking for an experienced producer who thrives at the intersection of creative ambition and operational precision. You will safeguard our creative vision while nurturing collaborative client relationships and team momentum.",
    responsibilities: [
      'Lead complex client engagements across branding, digital product development, and campaigns',
      'Manage project timelines, resourcing, scope allocation, and budget tracking with transparency',
      'Foster high-trust partnerships with client stakeholders, acting as a trusted advisor',
      'Anticipate hurdles and solve challenges proactively to protect creative focus and craft',
      'Refine internal studio processes and foster an inspiring, balanced team culture',
    ],
    requirements: [
      'Demonstrated experience producing high-craft digital or branding projects in an agency or studio',
      'Impeccable organization, negotiation, and emotional intelligence skills',
      'Deep understanding of design and digital development workflows and milestones',
      'Calm, solution-oriented leadership under tight deadlines or ambiguous conditions',
    ],
    niceToHave: [
      'Experience producing 3D/CGI visual production or physical experiential installations',
      'Knowledge of agile digital product workflows and contract management',
      'Established network of top-tier freelance creative collaborators',
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'design-systems-engineer',
    number: '06',
    title: 'Design Systems Engineer',
    department: 'Technology',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    experience: '4+ Years',
    tagline: 'Harmonize tokens, component architectures, and multi-brand design tooling.',
    description: "We're looking for a specialist who treats design systems as a living craft. You will bridge design tooling (Figma) and code (React/Tailwind), creating bulletproof component architectures that enable scale without sacrificing beauty.",
    responsibilities: [
      'Architect robust multi-tier design systems, token pipelines, and headless UI component libraries',
      'Implement accessible, keyboard-navigable, and themeable component primitives',
      'Build automated token synchronization workflows between Figma Variables and CSS/JS codebases',
      'Author comprehensive documentation, interactive component showcases, and API guidelines',
      'Partner with client engineering teams to integrate design systems into their production stacks',
    ],
    requirements: [
      'Extensive experience engineering design systems with React, TypeScript, Tailwind CSS, and Radix/Aria',
      'Deep knowledge of Design Tokens (W3C format), semantic naming, and theming architectures',
      'Relentless commitment to WCAG 2.2 AA accessibility standards and cross-browser testing',
      'Excellent documentation and technical communication skills',
    ],
    niceToHave: [
      'Experience building custom Figma plugins or CI/CD token transform pipelines (Style Dictionary)',
      'Experience with Storybook, Ladle, or custom documentation sites',
      'Familiarity with Web Components or cross-framework design system distribution',
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
];

export const BENEFITS_DATA = [
  {
    number: '01',
    title: 'MEANINGFUL WORK',
    description: 'Work on projects where ideas truly matter. We choose client partnerships based on mutual respect, ambition, and cultural relevance—never generic churn.',
  },
  {
    number: '02',
    title: 'CROSS-DISCIPLINE COLLABORATION',
    description: 'Work alongside different disciplines every single day. No siloed departments; strategists, designers, writers, and developers brainstorm and execute as one unit.',
  },
  {
    number: '03',
    title: 'CONTINUOUS GROWTH',
    description: 'Learn, experiment, and evolve. Dedicated annual education allowances, internal research sprints, conference sponsorships, and weekly skill exchanges.',
  },
  {
    number: '04',
    title: 'TRUE FLEXIBILITY',
    description: 'A working environment designed around great work. Remote-friendly workflows, flexible core hours, studio hubs in London and New York, and focus Fridays.',
  },
  {
    number: '05',
    title: 'UNCOMPROMISING CRAFT',
    description: 'Time and space to care about the details. We do not rush prototypes out the door; we protect the runway needed to achieve mathematical, optical perfection.',
  },
  {
    number: '06',
    title: 'HUMAN COMMUNITY',
    description: 'People who enjoy making things together. Annual studio retreats, comprehensive wellness coverage, generous parental leave, and an ego-free, supportive team.',
  },
];

export const DISCIPLINES_DATA = [
  {
    id: 'strategy',
    name: 'STRATEGY',
    statement: 'Uncovering the fundamental human truths and competitive angles that give creative work purpose and velocity.',
  },
  {
    id: 'design',
    name: 'DESIGN',
    statement: 'Crafting mathematical systems, typographic hierarchy, and visual identities that endure in memory.',
  },
  {
    id: 'technology',
    name: 'TECHNOLOGY',
    statement: 'Building resilient, 60fps digital architectures that push modern browser performance to its absolute limit.',
  },
  {
    id: 'motion',
    name: 'MOTION',
    statement: 'Choreographing kinetic inertia, physical anticipation, and spatial dimension into flat interactive screens.',
  },
  {
    id: 'content',
    name: 'CONTENT',
    statement: 'Writing sharp, evocative narratives and verbal identities that articulate complex ideas with zero fluff.',
  },
  {
    id: 'production',
    name: 'PRODUCTION',
    statement: 'Safeguarding creative vision and team harmony from initial exploratory spark through to flawless launch.',
  },
];

export const STUDIO_MOMENTS_DATA = [
  {
    id: 'moment-1',
    title: 'Design Critique & Print Testing',
    category: 'STUDIO CRAFT',
    aspect: 'tall',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=85',
    caption: 'Weekly design critique pinning up typography samples and print proofing.',
  },
  {
    id: 'moment-2',
    title: 'Interactive Shader Exploration',
    category: 'TECHNOLOGY',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
    caption: 'Experimenting with WebGL physics simulations during our Friday research sprint.',
  },
  {
    id: 'moment-3',
    title: 'London Studio Morning',
    category: 'ATMOSPHERE',
    aspect: 'square',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85',
    caption: 'Natural morning light filtering across the shared design benches in London.',
  },
  {
    id: 'moment-4',
    title: 'Collaborative Wireframing',
    category: 'IDEATION',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    caption: 'Mapping complex system architecture on physical glass boards before code.',
  },
  {
    id: 'moment-5',
    title: 'Coffee, Notes & Sketchbooks',
    category: 'DETAILS',
    aspect: 'square',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85',
    caption: 'Analog sketchbooks and tactile prototyping remain at the heart of our digital output.',
  },
  {
    id: 'moment-6',
    title: 'Global Studio Gathering',
    category: 'COMMUNITY',
    aspect: 'tall',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85',
    caption: 'Annual summer collective retreat bringing remote and hub team members together.',
  },
];
