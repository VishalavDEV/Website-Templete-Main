export interface ProjectResult {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  url: string;
  caption: string;
  type?: 'image' | 'wide' | 'portrait';
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: string[]; // e.g. ['BRANDING', 'DIGITAL']
  services: string[];
  tagline: string;
  description: string;
  heroImage: string;
  overview: string;
  challenge: string;
  strategy: string;
  visualIdentity: string;
  digitalExperience: string;
  gallery: ProjectGalleryItem[];
  results: ProjectResult[];
  nextSlug: string;
  accentColor?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'aether',
    title: 'AETHER',
    client: 'AETHER ARCHITECTURE',
    year: 2026,
    category: ['BRANDING', 'DIGITAL'],
    services: ['Brand Strategy', 'Visual Identity', 'Digital Product', '3D Motion'],
    tagline: 'Reimagining spatial intelligence for ultra-modern architectural monoliths.',
    description: 'A complete identity redesign and digital flagship for Aether, an avant-garde architectural research lab building zero-carbon sanctuaries.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    overview: 'Aether commissioned OFFGRID to translate their radically minimal structural engineering into a digital experience that commands reverence. We crafted an uncompromising, brutalist-editorial brand world defined by stark kinetic typography and micro-architectural grid lines.',
    challenge: 'Architectural portfolios typically suffer from derivative horizontal carousels and static imagery. Aether needed to convey high-tech structural precision, environmental sustainability, and sculptural luxury without relying on cliché green motifs or sterile corporate templates.',
    strategy: 'We rooted the brand strategy in "Monolithic Fluidity". The identity relies on heavy architectural grids contrasted with atmospheric serif typography. Every layout transition mimics spatial depth, transforming web navigation into a physical walk through virtual space.',
    visualIdentity: 'A bespoke geometric typographic system coupled with a high-contrast palette of raw concrete paper, burnt terracotta, and deep obsidian. Custom 3D glyphs were created to represent building stress points and material tension.',
    digitalExperience: 'Built with custom WebGL canvas shaders, allowing visitors to inspect 3D architectural models in real-time. Smooth dynamic dynamic filtering, spatial audio design, and zero-latency page reveals elevate the user journey into an immersive gallery.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
        caption: 'Monolithic facade study — Kyoto Sanctuary Project',
        type: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
        caption: 'Tactile stationery & embossed linen brand collateral',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600',
        caption: 'Interactive spatial configurator platform',
        type: 'wide'
      }
    ],
    results: [
      { label: 'Client Inquiries', value: '+340%' },
      { label: 'Avg Session Duration', value: '4m 12s' },
      { label: 'Awwwards Recognition', value: 'Site of the Month' },
      { label: 'International Press Features', value: '42' }
    ],
    nextSlug: 'noir',
    accentColor: '#D65F3F'
  },
  {
    slug: 'noir',
    title: 'NOIR',
    client: 'NOIR HAUTE COUTURE',
    year: 2026,
    category: ['CAMPAIGNS', 'MOTION'],
    services: ['Creative Direction', 'Film & Motion', '3D Visualisation', 'Campaign Systems'],
    tagline: 'Defying seasonal fashion conventions through cinematic digital storytelling.',
    description: 'A surrealist digital campaign and global interactive runway experience for Paris-based luxury atelier NOIR.',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000',
    overview: 'NOIR challenged OFFGRID to rethink how haute couture is premiered to a worldwide audience. Instead of a traditional live stream, we conceived an interactive virtual runway where viewers influence lighting, camera angles, and soundtrack in real-time.',
    challenge: 'Translating the tactile richness of hand-stitched silk, velvet, and raw metals into digital pixels without losing the intimacy and aura of an exclusive Paris salon show.',
    strategy: 'We turned the digital medium into a cinematic lens. By capturing high-fidelity 3D photogrammetry of garments and combining them with volumetric light shaders, we gave users control over dramatic studio atmospheres.',
    visualIdentity: 'High-contrast typography utilizing Space Grotesk alongside delicate Cormorant Garamond quotes. Dark plum and deep obsidian dominate, broken only by flashes of dusty lilac and vermilion.',
    digitalExperience: 'An audio-reactive 60fps web experience featuring interactive 360 garment inspection, step-by-step artisan video loops, and instant private capsule reservation.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1600',
        caption: 'Look 04 — Volumetric liquid silk garment render',
        type: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
        caption: 'Campaign poster series — Paris Metro takeover',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600',
        caption: 'Digital runway interactive portal',
        type: 'wide'
      }
    ],
    results: [
      { label: 'Global Runway Viewers', value: '1.2M+' },
      { label: 'Capsule Pre-orders Sold Out', value: '14 Mins' },
      { label: 'Earned Media Value', value: '€4.8M' },
      { label: 'FWA of the Day', value: 'Winner' }
    ],
    nextSlug: 'kinetic',
    accentColor: '#332832'
  },
  {
    slug: 'kinetic',
    title: 'KINETIC',
    client: 'KINETIC MOBILITY',
    year: 2025,
    category: ['DIGITAL', 'TECH'],
    services: ['Digital Product Design', 'WebGL Engineering', 'Design System', 'Brand Strategy'],
    tagline: 'Designing the interface for autonomous electric hyper-vehicles.',
    description: 'An end-to-end digital ecosystem, in-car HUD telemetry, and mobile application suite built for Kinetic’s electric vehicle fleet.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000',
    overview: 'Kinetic needed an interface as fast, sleek, and responsive as their 1,000-horsepower powertrain. OFFGRID designed both the digital marketing platform and the primary cockpit operating system.',
    challenge: 'Automotive interfaces are often cluttered, laggy, and distracting. The objective was to create a zero-distraction UI that updates instantly under intense driving conditions while maintaining high editorial elegance.',
    strategy: 'We stripped away decorative chrome and established a dynamic typography system that scales according to vehicle velocity and ambient lighting conditions.',
    visualIdentity: 'Electric orange accents over deep charcoal paper textures, engineered with military-grade contrast ratios and ultra-sharp line geometry.',
    digitalExperience: 'Built on a custom React/WebGL framework capable of rendering real-time telemetry, 3D energy flux paths, and predictive route topography.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1600',
        caption: 'Cockpit HUD layout — Velocity Mode',
        type: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200',
        caption: 'Mobile companion app — Remote Climate & Charge control',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600',
        caption: '3D aerodynamic chassis visualization UI',
        type: 'wide'
      }
    ],
    results: [
      { label: 'App Store Rating', value: '4.9 / 5' },
      { label: 'Driver Reaction Time Safety', value: '+28% Improvement' },
      { label: 'Vehicle Pre-orders', value: '18,500 Units' },
      { label: 'Red Dot Best of Best', value: 'Winner' }
    ],
    nextSlug: 'sora',
    accentColor: '#B94732'
  },
  {
    slug: 'sora',
    title: 'SORA',
    client: 'SORA SOUND LABS',
    year: 2025,
    category: ['BRANDING', 'CAMPAIGNS'],
    services: ['Brand Architecture', 'Visual Identity', 'Packaging System', 'Audio Branding'],
    tagline: 'Sound objects for purists. Identity for the acoustic vanguard.',
    description: 'Brand identity, tactile packaging system, and launch campaign for Tokyo-based audiophile hardware brand SORA.',
    heroImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2000',
    overview: 'SORA creates hand-assembled beryllium headphones and acoustic monitors. OFFGRID developed a quiet, serene visual identity system that honors Japanese craftsmanship and brutalist minimalism.',
    challenge: 'Standing out in a saturated audio market flooded with hyper-gamer aesthetics or disposable plastic earbuds.',
    strategy: 'Focus on acoustic purity. The visual language uses negative space as a metaphor for silence, allowing raw metal textures and typography to project prestige.',
    visualIdentity: 'Minimalist mono-spaced lettering paired with warm paper stock, debossed foil stamps, and precision laser-etched aluminium boxes.',
    digitalExperience: 'An editorial e-commerce platform that pairs acoustic frequency graphs with interactive soundscape samples recorded in Tokyo studios.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1600',
        caption: 'SORA Model-01 Beryllium Headphones Packaging',
        type: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1200',
        caption: 'Anodized aluminum acoustic enclosure detail',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=1600',
        caption: 'Acoustic lab testing campaign photography',
        type: 'wide'
      }
    ],
    results: [
      { label: 'First Batch Sold Out', value: '4 Hours' },
      { label: 'E-commerce Conversion Rate', value: '4.8%' },
      { label: 'Monocle Design Award', value: 'Best Audio Product' },
      { label: 'Brand Value Growth', value: '+450%' }
    ],
    nextSlug: 'void',
    accentColor: '#B8A8BD'
  },
  {
    slug: 'void',
    title: 'VOID',
    client: 'VOID CREATIVE TECH',
    year: 2026,
    category: ['TECH', 'MOTION'],
    services: ['Creative Coding', 'WebGL Engine', 'Generative Art', 'Interactive Installation'],
    tagline: 'Transforming algorithms into physical light and spatial installations.',
    description: 'Generative software architecture and live interactive visual engine created for international museum exhibits and immersive concerts.',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000',
    overview: 'VOID creates massive LED light walls and sensory installations. OFFGRID developed a real-time generative visual suite that translates crowd movement and ambient noise into hypnotic mathematical visuals.',
    challenge: 'Creating a visual engine capable of rendering 100,000 particles at 120fps across custom 8K LED displays without frame drops.',
    strategy: 'We wrote custom GLSL shaders and GPU compute kernels, creating organic fluid simulations that respond to human presence.',
    visualIdentity: 'Dark digital brutalism with electric neon accents, stark monochrome typography, and computational wireframes.',
    digitalExperience: 'A browser-based WebGL playground enabling art curators to customize color spectrums, particle mass, and gravity variables remotely.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
        caption: 'Installation at Mori Art Museum, Tokyo',
        type: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1200',
        caption: 'Real-time particle fluid vector field test',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600',
        caption: 'Generative spatial grid controller platform',
        type: 'wide'
      }
    ],
    results: [
      { label: 'Museum Visitors Interacted', value: '850,000+' },
      { label: 'Average Dwell Time', value: '18 Minutes' },
      { label: 'Lumen Prize Finalist', value: 'Top 3' },
      { label: 'Social Impressions', value: '45M+' }
    ],
    nextSlug: 'lumen',
    accentColor: '#D65F3F'
  },
  {
    slug: 'lumen',
    title: 'LUMEN',
    client: 'LUMEN SOLAR MOBILITY',
    year: 2025,
    category: ['BRANDING', 'DIGITAL'],
    services: ['Brand Strategy', 'Visual Identity', 'Web Platform', 'Sustainability Report'],
    tagline: 'Powering off-grid communities through clean kinetic energy.',
    description: 'Brand positioning, visual identity, and global launch website for Lumen Solar, a pioneer in portable grid infrastructure.',
    heroImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000',
    overview: 'Lumen needed to raise $40M in Series B funding while establishing an authorative, optimistic voice in renewable energy technology.',
    challenge: 'Energy technology branding is notoriously dry and repetitive. We needed to communicate complex engineering metrics while delivering an inspiring editorial vision.',
    strategy: 'Positioning clean energy as high design. We treated solar panels as architectural glass objects, using sunlight reflections as the cornerstone of the photography system.',
    visualIdentity: 'Sunburst vermilion, rich warm paper tones, and heavy condensed headline fonts (Oswald) mixed with crisp monospace data callouts.',
    digitalExperience: 'Interactive energy calculator, real-time grid deployment map, and investor story deck built with smooth page scroll transitions.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
        caption: 'Lumen HQ & Off-grid solar test farm',
        type: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1200',
        caption: 'Brand guidelines book & material palette',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
        caption: 'Global deployment live dashboard',
        type: 'wide'
      }
    ],
    results: [
      { label: 'Series B Capital Raised', value: '$52 Million' },
      { label: 'Investor Deck Sign-ups', value: '+410%' },
      { label: 'ESG Brand Index', value: '#1 Ranked' },
      { label: 'Global Media Coverage', value: '120+ Outlets' }
    ],
    nextSlug: 'aether',
    accentColor: '#2B2727'
  }
];
