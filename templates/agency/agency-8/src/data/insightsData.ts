import { Article, EditorialTopic, ArticleDetailContent } from '../types';

export const FEATURED_ARTICLE: Article = {
  id: 1,
  slug: 'why-the-best-digital-experiences-feel-invisible',
  title: 'WHY THE BEST DIGITAL EXPERIENCES FEEL INVISIBLE',
  category: 'Design',
  description:
    'When technology works perfectly, you stop noticing the technology and start experiencing the idea. A breakdown of friction-free interfaces, visceral micro-physics, and perceptual calm.',
  date: '28 AUG 2026',
  readTime: '08 MIN READ',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
  featured: true,
  author: 'Studio Editorial',
  tags: ['Interface Design', 'Human Interaction', 'Perceptual Calm'],
  excerpt:
    'In a culture addicted to visual noise and decorative excess, the most radical design move is disappearance. When an interface behaves like physical reality—instantaneous, intuitive, and silent—the barrier between intent and execution vanishes.',
};

export const ARCHIVE_FEATURE_ARTICLE: Article = {
  id: 2,
  slug: 'the-future-isnt-digital-or-physical-its-both',
  title: "THE FUTURE ISN'T DIGITAL OR PHYSICAL. IT'S BOTH.",
  category: 'Culture',
  description:
    'The artificial division between spatial architecture and digital artifacts is collapsing into a single unified tactile continuum.',
  date: '14 MAR 2026',
  readTime: '09 MIN READ',
  image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
  author: 'Marcus Vance & Elena Rostova',
  tags: ['Spatial Computing', 'Tactile UI', 'Hybrid Reality'],
};

export const ARTICLES_DATA: Article[] = [
  FEATURED_ARTICLE,
  {
    id: 3,
    slug: 'designing-for-attention-in-a-distracted-world',
    title: 'DESIGNING FOR ATTENTION IN A DISTRACTED WORLD',
    category: 'Culture',
    description:
      'Why modern digital products must respect cognitive bandwidth instead of engineering synthetic dopamine loops.',
    date: '19 AUG 2026',
    readTime: '06 MIN READ',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85',
    author: 'Soren Lindqvist',
    tags: ['Cognitive Design', 'Ethics', 'Digital Wellness'],
  },
  {
    id: 4,
    slug: 'the-end-of-the-generic-website',
    title: 'THE END OF THE GENERIC WEBSITE',
    category: 'Technology',
    description:
      'Template conformity has rendered the internet visually inert. How bespoke engineering is resurrecting web craftsmanship.',
    date: '05 AUG 2026',
    readTime: '07 MIN READ',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    author: 'Kaelen Thorne',
    tags: ['Creative Web', 'WebGL', 'Bespoke Architecture'],
  },
  {
    id: 5,
    slug: 'why-brands-need-a-point-of-view',
    title: 'WHY BRANDS NEED A POINT OF VIEW',
    category: 'Strategy',
    description:
      'Neutrality is the fastest path to cultural irrelevance. The mechanics of taking bold ideological and visual stances.',
    date: '24 JUL 2026',
    readTime: '05 MIN READ',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    author: 'Amara Chen',
    tags: ['Brand Strategy', 'Positioning', 'Culture'],
  },
  {
    id: 6,
    slug: 'motion-without-distraction',
    title: 'MOTION WITHOUT DISTRACTION',
    category: 'Design',
    description:
      'Translating organic momentum into UI without triggering visual fatigue or gratuitous ornamentation.',
    date: '12 JUL 2026',
    readTime: '06 MIN READ',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85',
    author: 'Devon Rhys',
    tags: ['Motion Design', 'Physics', 'Choreography'],
  },
  {
    id: 7,
    slug: 'building-digital-experiences-that-last',
    title: 'BUILDING DIGITAL EXPERIENCES THAT LAST',
    category: 'Technology',
    description:
      'Sustainable codebases, framework resilience, and timeless interaction design in a hyper-volatile industry.',
    date: '29 JUN 2026',
    readTime: '09 MIN READ',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
    author: 'Studio Engineering',
    tags: ['Architecture', 'Performance', 'Engineering'],
  },
  {
    id: 8,
    slug: 'the-power-of-editorial-design',
    title: 'THE POWER OF EDITORIAL DESIGN',
    category: 'Design',
    description:
      'Why print magazines from the 1960s hold the answers to modern web typography, rhythm, and structural pacing.',
    date: '18 JUN 2026',
    readTime: '05 MIN READ',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85',
    author: 'Elena Rostova',
    tags: ['Typography', 'Editorial', 'Grid Systems'],
  },
  {
    id: 9,
    slug: 'what-makes-a-brand-memorable',
    title: 'WHAT MAKES A BRAND MEMORABLE?',
    category: 'Branding',
    description:
      'Deconstructing the neurological and semiotic triggers that cement an identity into long-term collective consciousness.',
    date: '02 JUN 2026',
    readTime: '07 MIN READ',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
    author: 'Marcus Vance',
    tags: ['Semiology', 'Memory Triggers', 'Identity'],
  },
  {
    id: 10,
    slug: 'the-art-of-restraint-in-luxury-digital',
    title: 'THE ART OF RESTRAINT IN LUXURY DIGITAL',
    category: 'Design',
    description:
      'True prestige is communicated through intentional silence, expansive spatial margins, and understated typography.',
    date: '21 MAY 2026',
    readTime: '06 MIN READ',
    image: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1200&q=85',
    author: 'Amara Chen',
    tags: ['Luxury', 'Minimalism', 'Whitespace'],
  },
  {
    id: 11,
    slug: 'algorithmic-curation-vs-human-taste',
    title: 'ALGORITHMIC CURATION VS. HUMAN TASTE',
    category: 'Culture',
    description:
      'Why machine learning optimizes for average consensus while human intuition pioneers idiosyncratic culture.',
    date: '09 MAY 2026',
    readTime: '08 MIN READ',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    author: 'Soren Lindqvist',
    tags: ['AI', 'Taste', 'Cultural Theory'],
  },
  {
    id: 12,
    slug: 'kinetic-typography-as-brand-voice',
    title: 'KINETIC TYPOGRAPHY AS BRAND VOICE',
    category: 'Branding',
    description:
      'How variable type axes and responsive fluid weights enable letterforms to speak with emotional cadence.',
    date: '23 APR 2026',
    readTime: '05 MIN READ',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85',
    author: 'Devon Rhys',
    tags: ['Variable Fonts', 'Kinetic Type', 'Branding'],
  },
  {
    id: 13,
    slug: 'the-micro-physics-of-touch-interfaces',
    title: 'THE MICRO-PHYSICS OF TOUCH INTERFACES',
    category: 'Technology',
    description:
      'Simulating mass, friction, and haptic elasticity to give glass screens physical credibility.',
    date: '10 APR 2026',
    readTime: '07 MIN READ',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
    author: 'Studio Engineering',
    tags: ['Haptics', 'Physics', 'Touch'],
  },
  {
    id: 14,
    slug: 'radical-simplification-in-enterprise-tools',
    title: 'RADICAL SIMPLIFICATION IN ENTERPRISE TOOLS',
    category: 'Strategy',
    description:
      'Complex systems do not require complex interfaces. Stripping bloat to amplify operational velocity.',
    date: '28 MAR 2026',
    readTime: '06 MIN READ',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    author: 'Kaelen Thorne',
    tags: ['Enterprise UX', 'Simplification', 'Operations'],
  },
  ARCHIVE_FEATURE_ARTICLE,
];

export const DEFAULT_ARTICLE_DETAIL: ArticleDetailContent = {
  introParagraphs: [
    'The most successful digital experiences rarely announce themselves. They simply work. They guide attention, reduce friction, and allow the human mind to focus entirely on what actually matters.',
    'In an era overwhelmed by decorative excess and algorithmic attention-traps, the most radical design move is intentional disappearance. When an interface behaves with natural cadence—instantaneous, intuitive, and silent—the barrier between human intent and machine execution dissolves.',
  ],
  tableOfContents: [
    { id: 'section-problem', number: '01', title: 'THE PROBLEM' },
    { id: 'section-attention', number: '02', title: 'DESIGNING FOR ATTENTION' },
    { id: 'section-motion', number: '03', title: 'MOTION WITH PURPOSE' },
    { id: 'section-principles', number: '04', title: 'FIVE PRINCIPLES' },
    { id: 'section-conclusion', number: '05', title: 'WHAT COMES NEXT' },
  ],
  problemHeadline: 'TOO MUCH DESIGN CAN BECOME NOISE.',
  problemParagraphs: [
    'Every extra border, gratuitous particle animation, and unprompted modal window exacts a cognitive toll. When designers treat screen space as a canvas for self-indulgence rather than a conduit for human intention, users are forced to expend mental energy decoding the interface rather than accomplishing their task.',
    'Attention is a finite biological resource. Modern cognitive research demonstrates that visual friction increases cortisol production and accelerates cognitive fatigue. When an interface screams for recognition with aggressive contrast shifts and unprompted popovers, it violates the implicit social contract between software and user.',
    'True craftsmanship lies not in what can be added, but in the disciplined subtraction of everything non-essential until only pure utility and quiet elegance remain.',
  ],
  problemPullQuote:
    'THE BEST INTERFACE IS OFTEN THE ONE THAT KNOWS WHEN TO GET OUT OF THE WAY.',
  inlineImage: {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    caption: 'THE INTERFACE SHOULD SUPPORT THE IDEA, NOT COMPETE WITH IT.',
    alt: 'Minimalist spatial composition with subtle light interplay',
  },
  attentionHeadline: 'DESIGNING FOR ATTENTION',
  attentionItems: [
    {
      number: '01',
      title: 'REMOVE THE UNNECESSARY',
      explanation:
        'Every pixel must earn its right to exist. Strip decorative scaffolding, arbitrary container nesting, and superfluous micro-copy until the essence of the message shines without obstruction.',
    },
    {
      number: '02',
      title: 'CREATE CLEAR HIERARCHY',
      explanation:
        'Establish mathematical typographic ratios and optical contrast so the user’s eye navigates instinctively from primary action to secondary detail without conscious deliberation.',
    },
    {
      number: '03',
      title: 'DESIGN FOR MOMENTUM',
      explanation:
        'Interactions should feel frictionless and continuous. Latency must be disguised through optimistic rendering, fluid transitions, and tactile spring physics that mirror physical inertia.',
    },
    {
      number: '04',
      title: "RESPECT THE USER'S ATTENTION",
      explanation:
        'Do not weaponize notification badges, synthetic countdown timers, or dark patterns. Software should empower human agency, not harvest unconscious engagement.',
    },
  ],
  visualBreakText: 'LESS NOISE. MORE MEANING.',
  motionHeadline: 'MOTION WITH PURPOSE',
  motionParagraphs: [
    'Motion in interface design is not decoration; it is spatial syntax. When an element scales from its origin point, it anchors the user’s mental model of where information lives in three-dimensional digital space.',
    'Meaningful choreographies communicate state transitions, establish visual hierarchy, and provide instantaneous tactile feedback. When motion reflects natural physical laws—gravity, momentum, and elasticity—it reduces cognitive hesitation by confirming that user input has been received and understood.',
  ],
  principles: [
    {
      number: '01',
      title: 'MAKE IT CLEAR',
      description:
        'Eliminate ambiguity in visual language. An interactive element must immediately communicate its affordance and outcome.',
    },
    {
      number: '02',
      title: 'MAKE IT USEFUL',
      description:
        'Prioritize human capability over decorative flair. The fastest path between intention and result is the gold standard.',
    },
    {
      number: '03',
      title: 'MAKE IT HUMAN',
      description:
        'Honor sensory thresholds and natural biological rhythms. Foster a feeling of calm empowerment rather than sensory fatigue.',
    },
    {
      number: '04',
      title: 'MAKE IT RESPONSIVE',
      description:
        'Adapt with flawless fluidity across all screen environments, input modes, and accessibility preferences without degrading fidelity.',
    },
    {
      number: '05',
      title: 'MAKE IT MEMORABLE',
      description:
        'Craft subtle, signature moments of delight that linger in memory through sheer typographic balance and surgical execution.',
    },
  ],
  statementQuote: {
    line1: "THE GOAL ISN'T TO MAKE THE USER NOTICE THE DESIGN.",
    line2: 'THE GOAL IS TO MAKE THE EXPERIENCE WORTH NOTICING.',
  },
  conclusionHeadline: 'WHAT COMES NEXT',
  conclusionParagraphs: [
    'The future of digital design isn’t about adding more layers of computational spectacle. It is about understanding what truly deserves human attention and crafting calm, dignified spaces around it.',
    'As spatial computing, agentic workflows, and ambient computing converge, the screen as we know it will become thinner, quieter, and more deeply integrated into physical reality. Those who master the art of invisible craft will build the defining platforms of the coming decade.',
  ],
  conclusionFinalQuote: 'MAKE THE EXPERIENCE MATTER.',
};

/**
 * Slug alias resolver for clean matching of shortened or canonical slugs
 */
export function getArticleBySlug(slug: string): Article | undefined {
  const normalized = slug.toLowerCase().trim();

  // Direct match
  const direct = ARTICLES_DATA.find((a) => a.slug === normalized);
  if (direct) return direct;

  // Short alias matching
  const aliasMap: Record<string, string> = {
    'invisible-digital-experiences': 'why-the-best-digital-experiences-feel-invisible',
    'why-the-best-digital-experiences-feel-invisible': 'why-the-best-digital-experiences-feel-invisible',
    'designing-for-attention': 'designing-for-attention-in-a-distracted-world',
    'designing-for-attention-in-a-distracted-world': 'designing-for-attention-in-a-distracted-world',
    'end-of-generic-websites': 'the-end-of-the-generic-website',
    'the-end-of-the-generic-website': 'the-end-of-the-generic-website',
    'motion-without-distraction': 'motion-without-distraction',
    'brands-need-point-of-view': 'why-brands-need-a-point-of-view',
    'the-power-of-editorial-design': 'the-power-of-editorial-design',
    'editorial-design': 'the-power-of-editorial-design',
    'memorable-brands': 'what-makes-a-brand-memorable',
    'future-digital-physical': 'the-future-isnt-digital-or-physical-its-both',
  };

  const mappedSlug = aliasMap[normalized];
  if (mappedSlug) {
    const found = ARTICLES_DATA.find((a) => a.slug === mappedSlug);
    if (found) return found;
  }

  // Partial loose match
  return ARTICLES_DATA.find(
    (a) => a.slug.includes(normalized) || normalized.includes(a.slug)
  );
}

/**
 * Get previous and next articles relative to current article
 */
export function getAdjacentArticles(currentId: number): {
  previous: Article;
  next: Article;
} {
  const currentIndex = ARTICLES_DATA.findIndex((a) => a.id === currentId);
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : ARTICLES_DATA.length - 1;
  const nextIndex =
    currentIndex < ARTICLES_DATA.length - 1 ? currentIndex + 1 : 0;

  return {
    previous: ARTICLES_DATA[prevIndex],
    next: ARTICLES_DATA[nextIndex],
  };
}

/**
 * Get 3 related articles excluding the current one
 */
export function getRelatedArticles(currentId: number, category?: string): Article[] {
  const others = ARTICLES_DATA.filter((a) => a.id !== currentId);
  
  // Prefer same category first
  if (category) {
    const sameCat = others.filter(
      (a) => a.category.toLowerCase() === category.toLowerCase()
    );
    if (sameCat.length >= 3) {
      return sameCat.slice(0, 3);
    }
  }

  return others.slice(0, 3);
}

export const EDITORIAL_TOPICS: EditorialTopic[] = [
  {
    id: 'design',
    name: 'DESIGN',
    subtitle: 'Sensory ergonomics, typography & spatial composition',
    articleCount: 7,
    description: 'Investigating visual pacing, micro-physics, and frictionless interface choreography.',
  },
  {
    id: 'ai',
    name: 'AI & REASONING',
    subtitle: 'Human taste in the era of generative intelligence',
    articleCount: 4,
    description: 'Balancing algorithmic efficiency with authentic, idiosyncratic human curation.',
  },
  {
    id: 'branding',
    name: 'BRANDING',
    subtitle: 'Ideological distinction and mnemonic permanence',
    articleCount: 5,
    description: 'Transforming corporate identities into cultural artifacts with resolute points of view.',
  },
  {
    id: 'creative-technology',
    name: 'CREATIVE TECHNOLOGY',
    subtitle: 'Shaders, real-time engines & resilient codebases',
    articleCount: 6,
    description: 'Pushing browser performance limits with custom WebGL pipelines and fluid state architectures.',
  },
  {
    id: 'digital-culture',
    name: 'DIGITAL CULTURE',
    subtitle: 'Attention economies, spatial computing & modern ethics',
    articleCount: 5,
    description: 'Critical essays examining the philosophical and social impact of ubiquitous technology.',
  },
];

export const INSIGHTS_CATEGORIES = [
  'ALL',
  'DESIGN',
  'STRATEGY',
  'TECHNOLOGY',
  'BRANDING',
  'CULTURE',
] as const;

export type InsightCategory = (typeof INSIGHTS_CATEGORIES)[number];
