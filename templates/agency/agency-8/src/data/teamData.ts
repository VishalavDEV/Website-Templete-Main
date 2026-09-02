export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  discipline: 'Creative' | 'Strategy' | 'Design' | 'Technology' | 'Motion' | 'Content' | 'Production';
  bio: string;
  image: string;
  specialties: string[];
  location: string;
  experienceYears: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface DisciplineItem {
  id: string;
  number: string;
  name: string;
  statement: string;
  description: string;
  focus: string[];
  image: string;
}

export interface CultureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface StudioValue {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alex-morgan',
    number: '01',
    name: 'Alex Morgan',
    role: 'Creative Director & Co-Founder',
    discipline: 'Creative',
    bio: 'Guiding holistic design vision across brand, spatial, and interactive domains. Former lead art director with 14+ years crafting global brand transformations.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Creative Direction', 'Brand Strategy', 'Visual Identity', 'Typography'],
    location: 'London / New York',
    experienceYears: '14+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'maya-richardson',
    number: '02',
    name: 'Maya Richardson',
    role: 'Strategy Director',
    discipline: 'Strategy',
    bio: 'Translating complex market shifts and brand ambitions into razor-sharp positioning frameworks and actionable product roadmaps.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Brand Positioning', 'Market Architecture', 'Narrative Design', 'Consumer Insights'],
    location: 'New York',
    experienceYears: '12+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'noah-carter',
    number: '03',
    name: 'Noah Carter',
    role: 'Design Director',
    discipline: 'Design',
    bio: 'Championing meticulous craftsmanship and spatial clarity across large-scale design systems, digital platforms, and flagship applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Interface Design', 'Design Systems', 'Art Direction', 'Prototyping'],
    location: 'London',
    experienceYears: '11+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'lena-park',
    number: '04',
    name: 'Lena Park',
    role: 'Principal Brand Designer',
    discipline: 'Design',
    bio: 'Crafting expressive visual identities, custom typography specimens, and packaging systems that resonate across physical and digital mediums.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Editorial Systems', 'Custom Lettering', 'Packaging Architecture', 'Visual Identity'],
    location: 'Tokyo / London',
    experienceYears: '9+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'ethan-cole',
    number: '05',
    name: 'Ethan Cole',
    role: 'Technology Director & Co-Founder',
    discipline: 'Technology',
    bio: 'Bridging engineering rigor with avant-garde interactive artistry. Specializes in real-time graphics pipelines, WebGL rendering, and zero-latency web architectures.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Creative Engineering', 'WebGL & Shaders', 'Full-Stack Architecture', 'System Optimization'],
    location: 'London',
    experienceYears: '15+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'sophia-reed',
    number: '06',
    name: 'Sophia Reed',
    role: 'Lead Motion Designer',
    discipline: 'Motion',
    bio: 'Sculpting kinetic identities and choreographed micro-interactions using harmonic spring physics, procedural 3D simulations, and audio-reactive kinetics.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Kinetic Typography', '3D Motion Design', 'Choreography Physics', 'Procedural Animation'],
    location: 'New York',
    experienceYears: '8+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'daniel-kim',
    number: '07',
    name: 'Daniel Kim',
    role: 'Lead Creative Developer',
    discipline: 'Technology',
    bio: 'Transforming boundary-pushing UI ideas into smooth 120 FPS interactive realities with modern GPU compute shaders and tactile physics.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Interactive Frontend', 'GLSL Shaders', 'Animation Frameworks', 'TypeScript'],
    location: 'Tokyo',
    experienceYears: '7+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'emma-stone',
    number: '08',
    name: 'Emma Stone',
    role: 'Executive Producer',
    discipline: 'Production',
    bio: 'Masterminding international studio operations, delivery pipelines, and deep client collaborations from initial briefing to global deployment.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Executive Production', 'Client Partnerships', 'Budget Governance', 'Agile Operations'],
    location: 'London / New York',
    experienceYears: '13+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'lucas-vance',
    number: '09',
    name: 'Lucas Vance',
    role: 'Brand Architect & Strategist',
    discipline: 'Strategy',
    bio: 'Synthesizing competitive category intelligence to architect enduring brand platforms, verbal systems, and market positioning models.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Brand Architecture', 'Naming Systems', 'Market Differentiation', 'Qualitative Research'],
    location: 'New York',
    experienceYears: '10+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'chloe-bennett',
    number: '10',
    name: 'Chloe Bennett',
    role: 'Senior 3D & Spatial Designer',
    discipline: 'Motion',
    bio: 'Investigating the intersection of virtual reality, spatial computing, and hyper-tactile rendering materials for spatial interfaces and digital campaigns.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Spatial Computing', 'CGI Environment', 'Product Visualization', 'Houdini FX'],
    location: 'London',
    experienceYears: '6+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'julian-chen',
    number: '11',
    name: 'Julian Chen',
    role: 'Senior Systems Architect',
    discipline: 'Technology',
    bio: 'Designing resilient cloud micro-services, real-time data sync fabrics, and enterprise headless API architectures with extreme security standards.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Distributed Systems', 'Cloud Infrastructure', 'API Architecture', 'Edge Computing'],
    location: 'Tokyo',
    experienceYears: '11+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'olivia-ross',
    number: '12',
    name: 'Olivia Ross',
    role: 'Editorial & Content Director',
    discipline: 'Content',
    bio: 'Developing verbal identity guidelines, brand manifests, and narrative storytelling frameworks that give digital interfaces a distinctive cultural voice.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Verbal Identity', 'Brand Storytelling', 'Content Strategy', 'Editorial Curation'],
    location: 'London',
    experienceYears: '9+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'marcus-thorne',
    number: '13',
    name: 'Marcus Thorne',
    role: 'Senior Product Designer',
    discipline: 'Design',
    bio: 'Specializing in dense data visualizations, ergonomic UX paradigms, and responsive design systems for fintech, luxury e-commerce, and enterprise suites.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Design Systems', 'Data Visualization', 'Complex Workflows', 'Accessibility'],
    location: 'New York',
    experienceYears: '8+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'ava-sinclair',
    number: '14',
    name: 'Ava Sinclair',
    role: 'Senior Project Producer',
    discipline: 'Production',
    bio: 'Orchestrating multidisciplinary sprint teams across time zones with uncompromised attention to quality, budget pacing, and delivery precision.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1200&q=85',
    specialties: ['Sprint Orchestration', 'Cross-Timezone Delivery', 'Quality Assurance', 'Resource Planning'],
    location: 'Tokyo / London',
    experienceYears: '7+ YRS',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

export const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'strategy',
    number: '01',
    name: 'STRATEGY',
    statement: 'CLARITY BEFORE EXPRESSION.',
    description: 'We interrogate market realities, consumer psychology, and technological shifts to define distinct brand platforms and actionable trajectories.',
    focus: ['Brand Positioning', 'Market Architecture', 'Qualitative Research', 'Category Creation'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'design',
    number: '02',
    name: 'DESIGN',
    statement: 'FORM DERIVED FROM PURPOSE.',
    description: 'We construct visual systems, typography architectures, and digital interfaces that balance timeless beauty with rigorous ergonomics.',
    focus: ['Identity Systems', 'Digital Platforms', 'Design Systems', 'Editorial Direction'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'technology',
    number: '03',
    name: 'TECHNOLOGY',
    statement: 'SPEED IS A FEATURE.',
    description: 'We engineer zero-compromise digital architectures, real-time GPU graphics, and robust backends built to perform under global scale.',
    focus: ['Creative Computing', 'WebGL & Shaders', 'Modern Full-Stack', 'Performance Engineering'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'motion',
    number: '04',
    name: 'MOTION',
    statement: 'BEHAVIOR CREATES MEANING.',
    description: 'We design kinetic behaviors, tactile spring physics, and spatial 3D transitions that make digital products feel alive and responsive.',
    focus: ['Kinetic Systems', '3D Simulation', 'Micro-Interactions', 'Spatial Audio'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'content',
    number: '05',
    name: 'CONTENT',
    statement: 'WORDS DEFINE REALITY.',
    description: 'We craft verbal identities, editorial messaging, and brand narratives that communicate with unwavering precision and cultural relevance.',
    focus: ['Verbal Identity', 'Narrative Architecture', 'Editorial Design', 'Brand Manifesto'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'production',
    number: '06',
    name: 'PRODUCTION',
    statement: 'VISION REALIZED AT SCALE.',
    description: 'We coordinate high-velocity sprints, international talent, and rigorous delivery frameworks to turn daring ideas into delivered reality.',
    focus: ['Executive Delivery', 'Sprint Architecture', 'Global Resourcing', 'Release Governance'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
  },
];

export interface DisciplineRelation {
  discipline: string;
  connected: string[];
  thesis: string;
  dynamicNote: string;
}

export const DISCIPLINE_RELATIONS: Record<string, DisciplineRelation> = {
  STRATEGY: {
    discipline: 'STRATEGY',
    connected: ['DESIGN', 'CONTENT', 'TECHNOLOGY'],
    thesis: 'Strategic intent anchors visual aesthetics and guides technical prioritization.',
    dynamicNote: 'When strategy leads, design has conviction and code solves real commercial bottlenecks.',
  },
  DESIGN: {
    discipline: 'DESIGN',
    connected: ['STRATEGY', 'MOTION', 'TECHNOLOGY'],
    thesis: 'Visual craft bridges raw strategy into visceral human emotion.',
    dynamicNote: 'Design without motion lacks cadence; design without technology remains a static mockup.',
  },
  TECHNOLOGY: {
    discipline: 'TECHNOLOGY',
    connected: ['DESIGN', 'MOTION', 'PRODUCTION'],
    thesis: 'Creative engineering elevates interface design into tactile, responsive instruments.',
    dynamicNote: 'Technology validates design ambition with sub-millisecond execution and effortless speed.',
  },
  MOTION: {
    discipline: 'MOTION',
    connected: ['DESIGN', 'TECHNOLOGY', 'CONTENT'],
    thesis: 'Choreography transforms interface geometry into an emotional dialogue.',
    dynamicNote: 'Motion gives weight and physical truth to digital interactions across screen boundaries.',
  },
  CONTENT: {
    discipline: 'CONTENT',
    connected: ['STRATEGY', 'DESIGN', 'PRODUCTION'],
    thesis: 'Clear language clarifies strategic intent and informs typographic pacing.',
    dynamicNote: 'Copy is interface. The right phrase can anchor a multi-million dollar brand repositioning.',
  },
  PRODUCTION: {
    discipline: 'PRODUCTION',
    connected: ['STRATEGY', 'DESIGN', 'TECHNOLOGY'],
    thesis: 'Disciplined orchestration converts creative friction into flawless launch milestones.',
    dynamicNote: 'Great production clears obstacles so creative engineers can operate at peak craftsmanship.',
  },
};

export const CULTURE_COLLAGE: CultureItem[] = [
  {
    id: 'make',
    tag: 'MAKE',
    title: 'Physical Prototypes & Specimen R&D',
    description: 'Testing materials, custom typography layouts, and tactile paper finishes before digital translation.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=85',
    aspect: 'wide',
  },
  {
    id: 'think',
    tag: 'THINK',
    title: 'Collaborative Strategic Dissection',
    description: 'Challenging assumptions through rigorous multi-discipline workshops and competitive critique.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall',
  },
  {
    id: 'explore',
    tag: 'EXPLORE',
    title: 'Creative Computing & Shader Labs',
    description: 'Weekly exploratory sprints building procedural generative visuals and spatial shaders.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
  },
  {
    id: 'learn',
    tag: 'LEARN',
    title: 'Global Studio Exchanges',
    description: 'Rotating creative fellows between London, New York and Tokyo design bureaus.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'wide',
  },
  {
    id: 'collaborate',
    tag: 'COLLABORATE',
    title: 'Direct Client Integration',
    description: 'No account managers or filtering layers. Our partners work directly with the craftsmen.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall',
  },
  {
    id: 'create',
    tag: 'CREATE',
    title: 'The Final Polish Protocol',
    description: 'Obsessing over micro-transitions, kinetic spring curves, and typographic baseline balance.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
  },
];

export const STUDIO_VALUES: StudioValue[] = [
  {
    id: 'curiosity',
    number: '01',
    title: 'CURIOSITY',
    summary: 'The relentless drive to look beneath the obvious.',
    description: 'We treat every brief as an opportunity to ask better questions. Conventional solutions are the enemy of breakthrough work; curiosity leads us to uncover non-obvious connections and fresh commercial angles.',
  },
  {
    id: 'craft',
    number: '02',
    title: 'CRAFT',
    summary: 'Meticulous precision down to the last sub-pixel.',
    description: 'Craft is our differentiator. From the mathematical cadence of a typographic scale to the frame-rate stability of a WebGL canvas, we refuse to compromise on details that others consider invisible.',
  },
  {
    id: 'clarity',
    number: '03',
    title: 'CLARITY',
    summary: 'Simplifying complexity without stripping substance.',
    description: 'Modern digital experiences are frequently cluttered with gratuitous noise. We distill complex systems into intuitive, elegant structures that empower users and communicate brand value effortlessly.',
  },
  {
    id: 'courage',
    number: '04',
    title: 'COURAGE',
    summary: 'Taking deliberate creative risks with conviction.',
    description: 'Safe work is easily forgotten. We partner with ambitious leaders who are willing to reject formulaic templates in pursuit of truly distinctive, category-defining brand expressions.',
  },
  {
    id: 'impact',
    number: '05',
    title: 'IMPACT',
    summary: 'Aesthetic excellence measured by commercial performance.',
    description: 'Beauty without commercial utility is self-indulgent. We engineer every platform and brand identity to drive measurable market momentum, user retention, and enterprise value.',
  },
];
