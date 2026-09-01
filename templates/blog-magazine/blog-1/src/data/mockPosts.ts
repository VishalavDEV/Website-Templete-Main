import { Post, Author, Category } from '../types';

export const MOCK_AUTHORS: Author[] = [
  {
    id: 'auth-1',
    name: 'Elena Rostova',
    role: 'Editor-in-Chief',
    bio: 'Former foreign correspondent and architectural critic. Exploring the intersection of urban minimalism, sustainable design, and modern philosophy.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    articleCount: 42
  },
  {
    id: 'auth-2',
    name: 'Marcus Vance',
    role: 'Senior Technology Editor',
    bio: 'Investigating how artificial intelligence, autonomous systems, and digital ethics reshape human creativity and everyday work.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    twitter: 'https://twitter.com',
    articleCount: 38
  },
  {
    id: 'auth-3',
    name: 'Aria Chen',
    role: 'Culture & Arts Critic',
    bio: 'Curating dialogues on contemporary sculpture, analog photography revivals, and independent cinematic storytelling across the Pacific.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    articleCount: 29
  },
  {
    id: 'auth-4',
    name: 'Julian Sterling',
    role: 'Design & Living Correspondent',
    bio: 'Architect and furniture designer based in Copenhagen. Passionate about slow craftsmanship, tactile materials, and biophilic interiors.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    twitter: 'https://twitter.com',
    articleCount: 21
  }
];

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Architecture',
    slug: 'architecture',
    description: 'Thoughtful spatial design, brutalist revivals, and eco-conscious structural engineering.',
    count: 24
  },
  {
    id: 'cat-2',
    name: 'Technology',
    slug: 'technology',
    description: 'The philosophy of computation, human-centered interfaces, and digital autonomy.',
    count: 31
  },
  {
    id: 'cat-3',
    name: 'Culture',
    slug: 'culture',
    description: 'Essays on modern sociology, literature, arts criticism, and shifting societal paradigms.',
    count: 19
  },
  {
    id: 'cat-4',
    name: 'Design',
    slug: 'design',
    description: 'Typography, physical objects, brutalist web aesthetics, and material honesty.',
    count: 28
  },
  {
    id: 'cat-5',
    name: 'Travel & Living',
    slug: 'travel-living',
    description: 'Slow travel guides, remote sanctuaries, and meditative spaces around the globe.',
    count: 15
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'The Silent Architecture of Monastic Retreats in the Digital Age',
    slug: 'silent-architecture-monastic-retreats',
    excerpt: 'As hyper-connectivity permeates every waking hour, architects are reviving ancient spatial strategies to engineer radical acoustic and psychological quietude.',
    content: [
      'We live in an era of incessant notification, where the boundary between public engagement and private sanctuary has been algorithmically dissolved. Yet, in remote valleys from the Swiss Alps to coastal Japan, a quiet counter-revolution is taking place in concrete, timber, and rammed earth.',
      'Architects specializing in contemplative spaces are rediscovering the power of negative space. By manipulating natural light through narrow vertical slits and eliminating ambient urban hum through thick masonry layers, these structures force an immediate deceleration of human heart rate.',
      '“Silence is not merely the absence of sound,” notes master builder Kenjiro Soto. “It is an active tectonic material. When you step into a chamber designed with true proportion, your internal dialogue adjusts to match the reverberation time of the room.”',
      'This philosophy is spilling over from monasteries into urban co-living hubs and remote residency centers. Designers are utilizing acoustic wood panels, unpolished limestone, and water courtyards to cultivate spaces where deep thought can flourish unmolested by the digital tide.'
    ],
    author: MOCK_AUTHORS[0],
    category: MOCK_CATEGORIES[0],
    tags: ['Architecture', 'Mindfulness', 'Minimalism', 'Urbanism'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 18, 2026',
    readTime: '6 min read',
    views: 4210,
    featured: true,
    trending: true,
    likes: 342
  },
  {
    id: 'post-2',
    title: 'Beyond the Screen: Reclaiming Tactile Cognition in Software Design',
    slug: 'beyond-the-screen-reclaiming-tactile-cognition',
    excerpt: 'Flat design and glassmorphism made interfaces weightless. Now, designers are introducing physical feedback, tactile depth, and analog metaphors to restore cognitive anchor.',
    content: [
      'For over a decade, digital interfaces chased frictionless perfection. Every button was flattened into a colored rectangle; every transition dissolved in 200 milliseconds of easing curve. In our quest for speed, we divorced software from the physical intuition that guides human touch.',
      'Cognitive scientists are now warning of “digital vertigo”—a disorientation caused by interacting solely with weightless luminescent pixels. When nothing pushes back, the brain expends excessive energy maintaining spatial orientation.',
      'The antidote is a resurgence of skeuomorphic tactility—not the faux leather and glossy chrome of early iOS, but a refined material honesty. Subtle shadows that obey simulated directional light, haptic rebounds that mimic mechanical switches, and typography with distinct weight hierarchies.',
      'By honoring the physics of our physical world inside digital code, tools become extensions of the hand rather than alien terminals.'
    ],
    author: MOCK_AUTHORS[1],
    category: MOCK_CATEGORIES[1],
    tags: ['UI/UX', 'Technology', 'Psychology', 'Design'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 15, 2026',
    readTime: '5 min read',
    views: 3890,
    featured: true,
    trending: true,
    likes: 289
  },
  {
    id: 'post-3',
    title: 'The Analog Resurgence: Why Gen Z is Falling in Love with 35mm Film',
    slug: 'analog-resurgence-gen-z-35mm-film',
    excerpt: 'In an age of instant algorithmic perfection and infinite cloud storage, young creators are embracing the deliberate friction, financial cost, and organic grain of photochemical photography.',
    content: [
      'Swipe, tap, discard. Modern smartphone photography operates at zero marginal cost, resulting in billions of identical, hyper-saturated digital memories languishing in unindexed cloud drives.',
      'Enter the counter-movement: teenagers and university students scouring flea markets for mechanical Olympus and Pentax SLRs. Armed with rolls of Kodak Portra 400, they are discovering the liberating discipline of having only 36 exposures per roll.',
      '“When each frame costs three dollars to buy and develop, you stop treating your camera like a machine gun,” explains 21-year-old student photojournalist Maya Lin. “You wait for the exact quality of light. You talk to your subject. The anticipation of waiting two weeks for negatives to return is a thrill algorithm feeds can never replicate.”',
      'This physical permanence—holding a tangible gelatin silver print in your palm—represents a profound cultural rejection of ephemeral digital vapor.'
    ],
    author: MOCK_AUTHORS[2],
    category: MOCK_CATEGORIES[2],
    tags: ['Culture', 'Photography', 'Art', 'Gen Z'],
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 12, 2026',
    readTime: '7 min read',
    views: 5120,
    featured: true,
    trending: false,
    likes: 512
  },
  {
    id: 'post-4',
    title: 'Wabi-Sabi Workspaces: Designing Offices That Embrace Imperfection',
    slug: 'wabi-sabi-workspaces-designing-for-imperfection',
    excerpt: 'How Japanese aesthetic philosophy is replacing sterile corporate glass boxes with patinated wood, handmade ceramics, and organic workflow rhythms.',
    content: [
      'The standard corporate office of the late 20th century was an exercise in sterile geometry—synthetic carpet tiles, fluorescent glare, and mass-produced laminate desks designed for absolute uniformity.',
      'Today, forward-thinking studios are turning to Wabi-Sabi, the traditional Japanese worldview centered on the acceptance of transience and imperfection. Workspaces are now curated with reclaimed cedar tables showing natural knots and splits, walls finished in breathable lime plaster that catches changing daylight, and unglazed pottery holding seasonal wildflowers.',
      'This material honesty reduces cortisol levels and fosters psychological safety. When an environment acknowledges that nothing lasts and nothing is finished, perfectionist anxiety gives way to authentic creative flow.'
    ],
    author: MOCK_AUTHORS[3],
    category: MOCK_CATEGORIES[3],
    tags: ['Design', 'Workplace', 'Interiors', 'Philosophy'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 10, 2026',
    readTime: '4 min read',
    views: 2950,
    featured: false,
    trending: true,
    likes: 198
  },
  {
    id: 'post-5',
    title: 'The Lost Art of Letterpress: Crafting Books in the Era of E-Ink',
    slug: 'lost-art-of-letterpress-crafting-books',
    excerpt: 'Inside the independent workshops where master printers are keeping heavy steel Heidelberg presses alive to produce tactile masterpieces for bibliophiles.',
    content: [
      'The tactile sensation of heavy cotton rag paper yielding to cast-metal type is one of civilization’s quietest triumphs. Long after mass-market publishing transitioned to offset lithography and Kindle screens, boutique binderies are experiencing an unexpected renaissance.',
      'Using equipment salvaged from defunct printing houses across Europe, young artisans are hand-setting lead type letter by letter. The resulting books are not mere vessels for text; they are sculptural objects designed to be inherited across generations.',
      '“A digital file can be updated or revoked instantly,” says master printer Soren Lind. “A book printed with oil-based ink on archival paper is a sovereign artifact. It stands outside the grid.”'
    ],
    author: MOCK_AUTHORS[2],
    category: MOCK_CATEGORIES[2],
    tags: ['Culture', 'Books', 'Craftsmanship', 'Art'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 07, 2026',
    readTime: '5 min read',
    views: 3100,
    featured: false,
    trending: false,
    likes: 245
  },
  {
    id: 'post-6',
    title: 'Off-Grid Sanctuaries: Living Lightly in Scandinavian Timber Cabins',
    slug: 'off-grid-sanctuaries-scandinavian-timber-cabins',
    excerpt: 'Exploring autonomous forest dwellings that harness passive solar heating, rainwater harvesting, and uncompromising minimalist carpentry.',
    content: [
      'Deep in the pine forests of Småland, a new breed of wilderness architecture is proving that modern comfort requires neither municipal grids nor heavy carbon footprints.',
      'Built using traditional timber-framing techniques without toxic adhesives, these cabins float on minimal pile foundations to preserve the underlying forest floor. Triple-glazed panoramic windows frame ancient mossy boulders while capturing low-angle winter sunlight to passively heat mass-concrete floors.',
      'For urban escapees, spending a weekend in these sanctuaries offers a profound reset. With zero Wi-Fi and lantern-lit evenings, residents rediscover the unhurried cadence of seasonal time.'
    ],
    author: MOCK_AUTHORS[3],
    category: MOCK_CATEGORIES[4],
    tags: ['Travel', 'Architecture', 'Sustainability', 'Living'],
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 03, 2026',
    readTime: '6 min read',
    views: 4800,
    featured: false,
    trending: true,
    likes: 410
  },
  {
    id: 'post-7',
    title: 'The Algorithmic Canvas: Can Generative Models Truly Understand Irony?',
    slug: 'algorithmic-canvas-generative-models-irony',
    excerpt: 'An analytical deep dive into machine learning semantics, visual pastiche, and the subtle boundary between calculated synthesis and authentic human wit.',
    content: [
      'Neural networks can render photorealistic cinematic lighting in seconds and compose Bach-style fugues on demand. Yet, when tasked with visual irony or cultural satire, the output often lapses into overly literal pastiche.',
      'Irony requires an acute awareness of cultural context, historical trauma, and unspoken social contracts—domains where statistical pattern matching struggles. While AI excels at interpolation, true artistic breakthrough relies on deliberate deviation and subversive intent.',
      'As creative tools become ubiquitous, the ultimate differentiator will not be technical proficiency, but the idiosyncratic lived perspective of the human creator.'
    ],
    author: MOCK_AUTHORS[1],
    category: MOCK_CATEGORIES[1],
    tags: ['Technology', 'AI', 'Art', 'Philosophy'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'July 29, 2026',
    readTime: '8 min read',
    views: 6150,
    featured: false,
    trending: true,
    likes: 580
  }
];
