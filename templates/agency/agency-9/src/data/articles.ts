export interface Article {
  slug: string;
  title: string;
  category: 'DESIGN' | 'CULTURE' | 'TECHNOLOGY' | 'STRATEGY' | 'PROCESS';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  heroImage: string;
  content: string[]; // Markdown-style paragraphs & editorial callouts
  relatedSlugs: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'why-boring-brands-are-disappearing',
    title: 'Why boring brands are disappearing in the age of algorithmic beige',
    category: 'STRATEGY',
    date: 'AUG 28, 2026',
    readTime: '6 MIN READ',
    author: {
      name: 'ARJUN K.',
      role: 'Strategy Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    excerpt: 'Over the last decade, corporate design converged into a sea of rounded sans-serifs and pastel gradient bubbles. Now, audiences are numb. The only brands surviving are those bold enough to embrace raw brutalism, conviction, and visceral friction.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000',
    content: [
      'Take a scroll through any app store or digital billboard. For ten straight years, tech startups and luxury houses alike purged their heritage in favor of what design critics call "blandification". Every logo became a clean, geometric sans-serif. Every website adopted the exact same 3-column benefit card grid.',
      'This convergence occurred because brands optimized for low risk and friction-free clickthrough rates. But in maximizing comfort, they eliminated memory. When every brand looks like a healthcare platform, no brand owns a place in culture.',
      'Today, we are witnessing a fierce cultural counter-reaction. Consumers—especially digital natives—are aggressively rejecting corporate polished neutrality. They crave raw digital textures, asymmetrical editorial layouts, uncompromised typography, and opinionated editorial voices.',
      'To build a brand that survives the next decade, you must stop asking "Will everyone approve of this?" and start asking "Will anyone feel strongly enough to remember this?" If your brand is not polarizing someone, it is failing everyone.'
    ],
    relatedSlugs: ['designing-for-attention-not-impressions', 'building-identities-that-survive-trends']
  },
  {
    slug: 'designing-for-attention-not-impressions',
    title: 'Designing for attention, not superficial impressions',
    category: 'DESIGN',
    date: 'AUG 14, 2026',
    readTime: '8 MIN READ',
    author: {
      name: 'MAYA R.',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    excerpt: 'An impression means a user scrolled past your banner for 0.2 seconds. Attention means they stopped, held their breath, and interacted with your brand world for 4 minutes.',
    heroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2000',
    content: [
      'Digital analytics platforms have tricked marketers into buying empty vanity metrics. Millions of impression counts mask the reality that nobody remembers what they saw 30 seconds ago.',
      'At OFFGRID, we view web design as physical spatial architecture. When you walk into a world-class gallery or an avant-garde boutique in Tokyo, your posture changes. You slow down your pace.',
      'We achieve this in digital through deliberate typographic tension, unexpected micro-interactions, custom WebGL canvas shaders, and dynamic visual pacing.',
      'By treating web interaction as an editorial experience rather than a transactional funnel, dwell times increase by 300% and brand equity compounds exponentially.'
    ],
    relatedSlugs: ['the-internet-is-becoming-physical', 'why-boring-brands-are-disappearing']
  },
  {
    slug: 'the-internet-is-becoming-physical',
    title: 'The internet is becoming physical: Spatial WebGL & interactive kinetic typography',
    category: 'TECHNOLOGY',
    date: 'JUL 29, 2026',
    readTime: '7 MIN READ',
    author: {
      name: 'NOAH K.',
      role: 'Technical Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    excerpt: 'Flat 2D DOM layouts are giving way to GPU-accelerated spatial canvas engines. Here is how modern web developers use GLSL shaders and real-time physics to bring physical weight to browser pixels.',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000',
    content: [
      'For two decades, web browsers treated web pages like digital paper documents: vertical scrolling text with embedded rectangle images.',
      'With WebGL2 and WebGPU now universally supported across mobile and desktop devices, the browser has evolved into a real-time 3D graphics engine capable of rendering millions of particles at 120fps.',
      'By pairing fluid canvas simulations with responsive typography, we create interactive physical moments: text that reacts like cloth when hovered, liquid particle streams that respond to cursor movement, and 3D lighting that mimics physical glass.',
      'The key to successful creative coding is subtlety. Heavy visual effects should never hinder accessibility or content clarity; they must enhance the narrative and amplify emotional resonance.'
    ],
    relatedSlugs: ['what-happens-when-ai-becomes-part-of-art-direction', 'designing-for-attention-not-impressions']
  },
  {
    slug: 'what-happens-when-ai-becomes-part-of-art-direction',
    title: 'What happens when AI becomes part of art direction?',
    category: 'CULTURE',
    date: 'JUL 11, 2026',
    readTime: '5 MIN READ',
    author: {
      name: 'LENA V.',
      role: 'Design Director',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
    },
    excerpt: 'Generative models can output a thousand images in ten seconds, but they cannot feel taste, taste irony, or understand cultural nuances. The role of the human art director has shifted from producer to ruthless curator.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    content: [
      'Generative AI has democratized image rendering, but in doing so, it has made raw visual output cheap. When anyone can generate a photorealistic render in seconds, visual novelty dies.',
      'This paradox elevates human art direction. Taste, restraint, concept clarity, and subversion become the ultimate luxuries.',
      'At OFFGRID, we use AI tools during rapid concept ideation as an infinite sketchpad. But the final execution—the typographic grid, the bespoke brand identity, the precise physical material choices—remains uncompromisingly handcrafted.',
      'The future belongs to studios that master the synthesis: leveraging computational velocity while preserving human soul.'
    ],
    relatedSlugs: ['building-identities-that-survive-trends', 'why-boring-brands-are-disappearing']
  },
  {
    slug: 'building-identities-that-survive-trends',
    title: 'Building identities that survive micro-trends and aesthetic cycles',
    category: 'PROCESS',
    date: 'JUN 24, 2026',
    readTime: '9 MIN READ',
    author: {
      name: 'ARJUN K.',
      role: 'Strategy Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    excerpt: 'TikTok aesthetic cycles last 3 weeks. A great visual identity should last 30 years. Here is our 4-stage framework for timeless brutalist design.',
    heroImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2000',
    content: [
      'Aesthetic trends move faster today than at any point in human history. One month it’s Y2K chrome, the next it’s quiet luxury beige, followed by retro-futurism.',
      'Designing a brand identity to chase a viral aesthetic guarantees that your brand will look hopelessly outdated within 18 months.',
      'Our process roots visual identities in foundational typographic contrast, unyielding geometry, and authentic brand heritage. We strip away superficial gimmicks and build visual systems that mature gracefully over decades.'
    ],
    relatedSlugs: ['why-boring-brands-are-disappearing', 'designing-for-attention-not-impressions']
  }
];
