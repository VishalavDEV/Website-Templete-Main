import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'nova',
    title: 'Nova Identity System',
    client: 'Nova Robotics Inc.',
    year: '2026',
    category: 'BRANDING',
    tagline: 'Autonomous intelligence made human through kinetic brand architecture.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop',
    summary: 'A comprehensive kinetic brand identity, 3D sensory design system, and multi-platform visual language for next-generation humanoid robotics.',
    challenge: 'Nova was pivoting from research-grade lab robotics to consumer-facing household spatial intelligence. They needed an identity that felt warm, trustworthy, and cutting-edge without falling into cold cyber-dystopian tropes.',
    strategy: 'We built a "living identity" centered around biomorphic rhythm, procedural typography, and reactive ambient color states that respond dynamically to machine interaction states.',
    solution: 'Designed an algorithmic typeface family, a 280-page interactive digital guidelines portal, physical industrial finish standards, and a real-time reactive design token library used across hardware screens and web apps.',
    results: [
      { label: 'Series B Funding', value: '$84M', description: 'Oversubscribed funding round led by top-tier venture funds within 60 days of launch.' },
      { label: 'Brand Recognition', value: '+340%', description: 'Surge in organic search brand queries and global hardware press coverage.' },
      { label: 'Design System Adoption', value: '100%', description: 'Unified 14 global product teams across hardware, web, iOS, and visionOS.' },
    ],
    servicesProvided: ['Brand Strategy', 'Visual Identity', 'Motion Systems', 'Design Tokens', 'Hardware UI'],
    techStack: ['WebGL / Three.js', 'Figma Tokens Engine', 'Custom Variable Fonts', 'Cinema4D', 'SwiftUI'],
    liveUrl: 'https://nova-robotics-mock.studio',
    featured: true,
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
        caption: 'Parametric brand mark typography & optical motion physics.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        caption: 'Hero visual identity artwork showing organic particle cohesion.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Hardware interface display prototypes and micro-haptic cues.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
        caption: 'Algorithmic design guidelines and dynamic variable token library.',
        aspectRatio: 'square'
      }
    ],
    testimonial: {
      quote: 'Horizon transformed our company from an obscure robotics lab into the most coveted design-driven AI brand of the year. Their motion and brand craftsmanship is unmatched.',
      author: 'Dr. Elena Vance',
      role: 'Chief Executive Officer',
      company: 'Nova Robotics'
    },
    nextProjectSlug: 'atlas'
  },
  {
    id: 'proj-2',
    slug: 'atlas',
    title: 'Atlas Commerce Platform',
    client: 'Atlas Luxury Goods Group',
    year: '2025',
    category: 'DIGITAL',
    tagline: 'High-frequency global commerce reimagined as an architectural gallery.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
    summary: 'A sub-100ms headless flagship e-commerce ecosystem built for luxury collectors across 42 countries, featuring bespoke 3D spatial product viewers.',
    challenge: 'Atlas operated 8 disparate regional stores with slow load times (3.8s) and disjointed checkout experiences that suffered high cart abandonment for high-ticket ($5,000+) items.',
    strategy: 'Engineered a unified global headless architecture combining edge-cached Next.js, real-time localized currency routing, and an ultra-minimal editorial aesthetic reminiscent of high-end art monographs.',
    solution: 'Designed and deployed an ultra-fast custom storefront with zero layout shift, interactive 360 material inspectors, VIP concierge checkout, and biometric one-tap payments.',
    results: [
      { label: 'Conversion Lift', value: '+58%', description: 'Worldwide increase in checkout completion on mobile devices.' },
      { label: 'Page Load Speed', value: '82ms', description: 'Average global first-contentful paint across edge servers.' },
      { label: 'Annual GMV', value: '$120M+', description: 'Processed seamlessly during seasonal worldwide auction drops.' },
    ],
    servicesProvided: ['Web Design', 'Full-Stack Development', '3D Visualisation', 'Performance Optimization'],
    techStack: ['React / Next.js', 'Tailwind CSS', 'Shopify Plus GraphQL', 'Cloudflare Workers', 'Three.js'],
    liveUrl: 'https://atlas-luxury-mock.studio',
    featured: true,
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
        caption: 'Bespoke editorial collection layout with dynamic currency conversion.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        caption: 'Spatial gallery presentation framework with interactive lighting.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Frictionless one-tap VIP checkout and collector authentication.',
        aspectRatio: 'square'
      }
    ],
    testimonial: {
      quote: 'The speed and editorial beauty of Atlas created an immediate 58% surge in international transactions. Horizon delivered pure engineering magic.',
      author: 'Marcus Sterling',
      role: 'Global VP of Digital',
      company: 'Atlas Luxury'
    },
    nextProjectSlug: 'pulse'
  },
  {
    id: 'proj-3',
    slug: 'pulse',
    title: 'Pulse Launch Film & Kinetic System',
    client: 'Pulse Acoustic Labs',
    year: '2026',
    category: 'MOTION',
    tagline: 'Sound sculpted into cinematic physics and spatial acoustic visuals.',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=900&auto=format&fit=crop',
    summary: 'A 90-second CGI brand reveal film, live interactive sound wave playground, and dynamic festival stage visual package for a revolutionary planar magnetic driver headphone.',
    challenge: 'Audiophiles and mainstream listeners had conflicting tastes. Pulse needed a launch campaign that showcased extreme scientific precision alongside visceral emotional resonance.',
    strategy: 'Visualized acoustic resonance as tangible physical materials—mercury droplets, carbon filaments, and refractive prisms reacting to original custom synthesized sound scores.',
    solution: 'Produced a 4K photoreal CGI launch film, an interactive Web Audio visualizer, synchronized digital billboards in Tokyo & London, and animated social teaser assets.',
    results: [
      { label: 'Organic Views', value: '4.2M', description: 'Across YouTube, Vimeo Staff Pick, and viral design reels.' },
      { label: 'Pre-order Sellout', value: '14 Mins', description: 'Initial manufacturing batch sold out worldwide upon premiere.' },
      { label: 'Cannes Lion Award', value: 'Gold', description: 'Design Craft & Audio-Visual Excellence 2026.' },
    ],
    servicesProvided: ['Motion & Video', 'CGI Art Direction', 'Sound Design', 'Interactive Canvas'],
    techStack: ['Houdini', 'Octane Render', 'Web Audio API', 'After Effects', 'GLSL Shaders'],
    liveUrl: 'https://pulse-sound-mock.studio',
    featured: true,
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
        caption: 'Planar magnetic acoustic chamber CGI refraction simulation.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
        caption: 'Kinetic soundwave ripple physics generated in real-time.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
        caption: 'Stage visual backdrop mapping for global launch keynote in Berlin.',
        aspectRatio: 'square'
      }
    ],
    testimonial: {
      quote: 'Working with Horizon felt like collaborating with a Hollywood VFX studio and a boutique design house simultaneously. The launch film stopped the audio industry in its tracks.',
      author: 'Julian Meyer',
      role: 'Creative Director',
      company: 'Pulse Acoustic Labs'
    },
    nextProjectSlug: 'meridian'
  },
  {
    id: 'proj-4',
    slug: 'meridian',
    title: 'Meridian Banking App & Core Experience',
    client: 'Meridian Private Bank',
    year: '2025',
    category: 'PRODUCT',
    tagline: 'Wealth intelligence designed with cryptographic security and calm clarity.',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=900&auto=format&fit=crop',
    summary: 'Complete mobile and desktop product design for an ultra-high-net-worth digital banking suite, tracking multi-asset portfolios and private equity allocations.',
    challenge: 'Existing private banking software was clunky, fragmented across spreadsheets, and burdened with legacy complexity that discouraged younger wealth holders from self-management.',
    strategy: 'Adopted a "calm computing" philosophy with high-density data visualizations, predictive liquidity forecasts, and natural language command queries.',
    solution: 'Delivered an iOS, iPadOS, and Web application with end-to-end design system, custom charting components, biometric vault approvals, and real-time private banker direct messaging.',
    results: [
      { label: 'App Store Rating', value: '4.9 ★', description: 'Over 12,000 verified verified investor user reviews.' },
      { label: 'Client Engagement', value: '4.2x', description: 'Daily active time spent monitoring asset health and tax optimization.' },
      { label: 'AUM Onboarded', value: '$6.8B', description: 'Capital managed through the new platform within the first 6 months.' },
    ],
    servicesProvided: ['Product Design (UX/UI)', 'Design Systems', 'Micro-Interactions', 'Prototyping'],
    techStack: ['Figma Variables', 'React Native', 'D3.js Charts', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://meridian-banking-mock.studio',
    featured: true,
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
        caption: 'Portfolio balance dashboard with multi-currency allocation matrices.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
        caption: 'Private deal flow rooms with zero-knowledge transaction verifications.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Dark mode typography and mathematical financial hierarchy.',
        aspectRatio: 'square'
      }
    ],
    testimonial: {
      quote: 'Horizon turned what is traditionally the driest financial domain into an intuitive, visually stunning software masterpiece that our clients adore.',
      author: 'Sophia Chen-Rothschild',
      role: 'Head of Product Innovation',
      company: 'Meridian Capital'
    },
    nextProjectSlug: 'aether'
  },
  {
    id: 'proj-5',
    slug: 'aether',
    title: 'Aether Digital Experience & Spatial Portal',
    client: 'Aether Architecture & Spatial Studio',
    year: '2026',
    category: 'DIGITAL',
    tagline: 'Brutalist architectural monoliths immortalized in interactive 3D space.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    summary: 'An immersive WebGL exploration portal letting clients walk through photorealistic unbuilt architectural pavilions using spatial audio and dynamic day/night cycles.',
    challenge: 'Aether needed to pitch high-stakes civic and cultural projects to international juries and municipal boards without requiring physical travel or cumbersome VR headsets.',
    strategy: 'Created an accessible browser-based spatial environment using progressive streaming Gaussian splatting and WebGL shaders running smoothly at 60fps on modern mobile browsers.',
    solution: 'Designed and engineered an award-winning digital experience with architectural blueprints, custom audio commentary, dynamic sun-angle simulators, and interactive material swatches.',
    results: [
      { label: 'Site of the Year', value: 'Awwwards', description: 'Judges score 9.4/10 for technical innovation & creative art direction.' },
      { label: 'Pitch Win Rate', value: '88%', description: 'Won 7 of 8 international design competitions leveraging the portal.' },
      { label: 'Average Session', value: '6m 42s', description: 'Extreme user dwell time and deep architectural blueprint exploration.' },
    ],
    servicesProvided: ['Web Design', 'WebGL & Creative Coding', 'Spatial Audio', 'Art Direction'],
    techStack: ['Three.js', 'GLSL Custom Shaders', 'Web Audio API', 'React', 'Tailwind CSS'],
    liveUrl: 'https://aether-architecture-mock.studio',
    featured: false,
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
        caption: 'Concrete pavilion ray-marched sun elevation and shadow trajectory.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Interactive materials inspector with real-time marble and basalt reflections.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop',
        caption: 'Orthographic structural blueprint layering and acoustics map.',
        aspectRatio: 'square'
      }
    ],
    testimonial: {
      quote: 'Clients are literally speechless when we show them their unbuilt buildings live in the browser with Aether. Horizon gave us an unfair competitive advantage.',
      author: 'Leif Nordström',
      role: 'Principal Architect',
      company: 'Aether Studio'
    },
    nextProjectSlug: 'vertex'
  },
  {
    id: 'proj-6',
    slug: 'vertex',
    title: 'Vertex Brand Platform & Design System',
    client: 'Vertex Quantum Computing',
    year: '2025',
    category: 'BRANDING',
    tagline: 'Translating subatomic quantum superposition into an iconic visual language.',
    heroImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=900&auto=format&fit=crop',
    summary: 'A definitive brand identity, interactive quantum algorithm visualizer, and enterprise design system for the world’s leading neutral-atom quantum computing provider.',
    challenge: 'Quantum mechanics is notoriously abstract and filled with confusing jargon. Vertex needed to clearly communicate their breakthrough computing power to Fortune 500 CTOs and researchers.',
    strategy: 'Developed a visual metaphor rooted in crystalline lattice geometries, wave-particle duality, and hyper-clean editorial information hierarchies.',
    solution: 'Delivered an interactive developer portal, marketing hub, brand book, investor pitch system, and custom generative 3D assets illustrating quantum entanglement.',
    results: [
      { label: 'Enterprise Inquiries', value: '+210%', description: 'Qualified enterprise compute cluster demo requests within first quarter.' },
      { label: 'Talent Recruitment', value: '4,500+', description: 'World-class quantum physicist and software applications received.' },
      { label: 'Red Dot Award', value: 'Best of Best', description: 'Brand Identity & Interface Excellence 2025.' },
    ],
    servicesProvided: ['Brand Strategy', 'Visual Identity', 'Developer Portal UX', 'Motion Graphics'],
    techStack: ['Figma System', 'Three.js Particles', 'Tailwind CSS', 'Vite', 'React'],
    liveUrl: 'https://vertex-quantum-mock.studio',
    featured: false,
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
        caption: 'Quantum lattice superposition simulation running in developer sandbox.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
        caption: 'Brand token system with adaptive mathematical contrast curves.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        caption: 'Cryogenic quantum computing chassis physical iconography & branding.',
        aspectRatio: 'square'
      }
    ],
    testimonial: {
      quote: 'Horizon possesses that ultra-rare ability to deeply understand deep-tech mathematics and distill it into breathtaking, world-class art and software.',
      author: 'Tariq Al-Mansoor',
      role: 'Chief Technology Officer',
      company: 'Vertex Quantum'
    },
    nextProjectSlug: 'nova'
  }
];
