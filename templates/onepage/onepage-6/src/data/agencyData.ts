export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  result: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
}

export interface CapabilityItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logoText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    description: "We define the positioning, voice, and narrative that differentiate your brand in crowded markets and align with business objectives.",
    accentColor: "bg-nye-orange"
  },
  {
    id: "visual-identity",
    number: "02",
    title: "Visual Identity",
    description: "Crafting iconic logos, premium typography systems, and sophisticated color palettes that build instant recognition and trust.",
    accentColor: "bg-nye-purple"
  },
  {
    id: "creative-direction",
    number: "03",
    title: "Creative Direction",
    description: "Cohesive visual and sensory oversight that translates abstract ideas into memorable, high-impact campaigns and content.",
    accentColor: "bg-nye-teal"
  },
  {
    id: "web-design",
    number: "04",
    title: "Web Design",
    description: "Editorial-grade typography meets intentional layouts. We design websites that are visually stunning and intuitive to navigate.",
    accentColor: "bg-nye-violet"
  },
  {
    id: "web-development",
    number: "05",
    title: "Web Development",
    description: "Building fast, semantic, and reliable front-end systems in Next.js and Tailwind, optimized for performance and animations.",
    accentColor: "bg-nye-navy"
  },
  {
    id: "digital-experiences",
    number: "06",
    title: "Digital Experiences",
    description: "Interactive installations, immersive campaigns, and bespoke motion-driven web interfaces that capture attention.",
    accentColor: "bg-nye-orange"
  },
  {
    id: "content-campaigns",
    number: "07",
    title: "Content & Campaigns",
    description: "High-production brand campaigns and storytelling content tailored for multi-platform activation and community resonance.",
    accentColor: "bg-nye-purple"
  },
  {
    id: "growth",
    number: "08",
    title: "Growth & Optimization",
    description: "Data-driven marketing funnels and conversion optimizations that turn visual attention into sustainable revenue growth.",
    accentColor: "bg-nye-teal"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "nova",
    number: "01",
    title: "NOVA",
    category: "Brand Identity / Digital",
    year: "2025",
    description: "A comprehensive rebranding and digital redesign for a sustainable energy disruptor, positioning them as the premium choice.",
    result: "+147% Engagement",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    bgColor: "#110814",
    textColor: "#F3F4F3"
  },
  {
    id: "kora",
    number: "02",
    title: "KORA",
    category: "Web Experience / Development",
    year: "2026",
    description: "A fully immersive, WebGL-powered design portfolio and digital showroom for an architectural collective in Milan.",
    result: "3.8x Campaign growth",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    bgColor: "#3C575B",
    textColor: "#F3F4F3"
  },
  {
    id: "mono",
    number: "03",
    title: "MONO",
    category: "Campaign / Creative Direction",
    year: "2025",
    description: "Art direction and launch campaign for a minimalist fashion house, using asymmetric layouts and high-contrast editorial photography.",
    result: "42M+ Audience reached",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    bgColor: "#B6702F",
    textColor: "#110814"
  },
  {
    id: "vera",
    number: "04",
    title: "VERA",
    category: "Digital Product / UX",
    year: "2026",
    description: "A sleek, highly intuitive web and mobile interface for a premium fintech client, simplifying institutional wealth planning.",
    result: "92% Retention rate",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    bgColor: "#452099",
    textColor: "#F3F4F3"
  },
  {
    id: "arc",
    number: "05",
    title: "ARC",
    category: "Brand Strategy / Web",
    year: "2025",
    description: "Positioning strategy and digital commerce platform for a modern design studio, integrating smooth storytelling and custom product configurators.",
    result: "28 Brands launched",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    bgColor: "#141C5D",
    textColor: "#F3F4F3"
  }
];

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "cap-1",
    value: "12+",
    label: "Years combined experience",
    description: "Our core team brings agency-of-record expertise down to a focused, responsive squad."
  },
  {
    id: "cap-2",
    value: "40+",
    label: "Projects delivered",
    description: "From identity programs to custom high-performance applications, built without compromise."
  },
  {
    id: "cap-3",
    value: "18",
    label: "Markets reached",
    description: "We help local challengers build global authority and international brands target niche segments."
  },
  {
    id: "cap-4",
    value: "92%",
    label: "Repeat clients",
    description: "Our partnerships are built on transparency, execution speed, and measurable growth."
  }
];

export const metricsData: MetricItem[] = [
  {
    id: "metric-1",
    value: "3.8×",
    label: "Average campaign growth",
    description: "We optimize digital pathways to convert attention into direct, measurable business value."
  },
  {
    id: "metric-2",
    value: "+147%",
    label: "Engagement increase",
    description: "Fusing motion and strategic clarity to capture and hold user attention in crowded spaces."
  },
  {
    id: "metric-3",
    value: "42M+",
    label: "Audience reached",
    description: "Creating digital experiences and campaigns that get talked about, shared, and remembered."
  },
  {
    id: "metric-4",
    value: "28",
    label: "Brands launched",
    description: "From concept definition to global rollouts, we construct cohesive brand ecosystems."
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "We dive deep into your market, audting competitors and finding the precise strategic whitespace for your brand."
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategy",
    description: "We define a clear direction: positioning, core messaging pillars, architecture, and visual guidelines."
  },
  {
    id: "create",
    number: "03",
    title: "Create",
    description: "Translating strategy into art-directed visual concepts, typography systems, and interaction layouts."
  },
  {
    id: "build",
    number: "04",
    title: "Build",
    description: "Developing codebases that are fast, stable, and responsive, embedding animations that elevate the design."
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    description: "Rigorous testing, SEO optimization, speed tuning, and a highly coordinated deployment plan."
  },
  {
    id: "evolve",
    number: "06",
    title: "Evolve",
    description: "Using continuous analysis and iterative design to scale the results and adapt to shifting market trends."
  }
];

export const clientsData: ClientItem[] = [
  { id: "c-1", name: "Aero Dynamics", logoText: "AERO" },
  { id: "c-2", name: "Vortex Labs", logoText: "VORTEX" },
  { id: "c-3", name: "Helios Energy", logoText: "HELIOS" },
  { id: "c-4", name: "Spectra Digital", logoText: "SPECTRA" },
  { id: "c-5", name: "Lumina Studio", logoText: "LUMINA" },
  { id: "c-6", name: "Axis Logistics", logoText: "AXIS" }
];
