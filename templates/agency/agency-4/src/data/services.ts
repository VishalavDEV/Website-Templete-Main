import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy',
    tagline: 'Formulating positioning that commands authority.',
    shortDescription: 'Uncovering core brand truths, market whitespace, and architectural positioning to elevate ambitious brands.',
    fullDescription: 'We conduct deep qualitative market synthesis, brand archetyping, and customer perception audits to craft strategic positioning frameworks that resonate deeply and endure shifts in technology.',
    iconName: 'Compass',
    image: 'images/pexels-cottonbro-5483050.jpg',
    deliverables: [
      'Brand Architecture & Positioning',
      'Tone of Voice & Messaging Systems',
      'Competitive Matrix Analysis',
      'Value Proposition Framework',
      'Brand Culture & Values Mapping'
    ]
  },
  {
    id: 'digital-experiences',
    number: '02',
    title: 'Digital Experiences',
    tagline: 'Engineering immersive digital flagship destinations.',
    shortDescription: 'Designing end-to-end web experiences that blend editorial art direction with cutting-edge web performance.',
    fullDescription: 'From high-conversion marketing flagships to interactive web applications, we combine bespoke visual storytelling with seamless user pathways that feel alive.',
    iconName: 'Layers',
    image: 'images/pexels-canvastudio-3194519.jpg',
    deliverables: [
      'Editorial Web Design',
      'Motion Design & Micro-Interactions',
      '3D & WebGL Canvas Visuals',
      'Interactive Design Systems',
      'Content Strategy & Copywriting'
    ]
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX Design',
    tagline: 'Refining complex product workflows into effortless beauty.',
    shortDescription: 'Architecting intuitive digital product interfaces engineered for deep focus, clarity, and delight.',
    fullDescription: 'We reduce cognitive friction through rigorous user research, wireframing, component-based design systems, and rapid interactive prototyping that accelerates development velocity.',
    iconName: 'Layout',
    image: 'images/pexels-shvetsa-4226122.jpg',
    deliverables: [
      'User Journey Mapping',
      'Interactive Figma Prototypes',
      'Design System Engineering',
      'Usability Testing & Audits',
      'Multi-Platform App Interfaces'
    ]
  },
  {
    id: 'web-development',
    number: '04',
    title: 'Web Development',
    tagline: 'Crafting robust code with 60fps performance.',
    shortDescription: 'Building clean, maintainable frontend and backend architectures optimized for speed, SEO, and scalability.',
    fullDescription: 'Using modern React, TypeScript, Vite, Tailwind CSS, and headless CMS integrations, we deliver websites with sub-second page load speeds and airtight security.',
    iconName: 'Code',
    image: 'images/pexels-jibarofoto-2148216.jpg',
    deliverables: [
      'React & Next.js Architecture',
      'Tailwind CSS & Framer Motion',
      'Headless CMS Integrations (Sanity, Strapi)',
      'API & Backend Infrastructure',
      'SEO & Lighthouse 100 Performance'
    ]
  },
  {
    id: 'creative-direction',
    number: '05',
    title: 'Creative Direction',
    tagline: 'Guiding visual narratives across every touchpoint.',
    shortDescription: 'Steering photography, film, spatial design, and campaigns to maintain a singular unified brand voice.',
    fullDescription: 'Our creative directors orchestrate bespoke photo shoots, 3D renders, video productions, and physical packaging to give your brand a distinct, unmistakable aesthetic signature.',
    iconName: 'Eye',
    image: 'images/pexels-cottonbro-4709285.jpg',
    deliverables: [
      'Art Direction for Photo & Film',
      '3D Motion & CGI Visuals',
      'Packaging & Print Design',
      'Campaign Creative Assets',
      'Brand Launch Strategies'
    ]
  },
  {
    id: 'product-innovation',
    number: '06',
    title: 'Product Innovation',
    tagline: 'Incubating next-generation digital products.',
    shortDescription: 'Partnering with founders and enterprise R&D teams to prototype, test, and launch disruptive digital products.',
    fullDescription: 'We bridge conceptual vision with market execution, helping teams de-risk new product ideas through rapid validation sprints, MVP builds, and scalable design architectures.',
    iconName: 'Lightbulb',
    image: 'images/pexels-shvetsa-12662890.jpg',
    deliverables: [
      'Rapid MVP Prototyping',
      'Product Strategy & Roadmap',
      'AI & Emerging Tech Integration',
      'Feature Prioritization Frameworks',
      'Go-To-Market Launch Kits'
    ]
  }
];
