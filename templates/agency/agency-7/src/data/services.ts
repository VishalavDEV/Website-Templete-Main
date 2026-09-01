import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ux-research',
    number: '01',
    title: 'UX Research & User Discovery',
    tagline: 'Uncovering human insights that drive product breakthroughs',
    description: 'We decode user behaviors, friction points, and mental models through contextual field studies, usability testing, and quantitative analytics to ground design in real user needs.',
    deliverables: [
      'Contextual User Interviews',
      'Persona & Mental Model Architecture',
      'Customer Journey Mapping',
      'Usability Audits & Heuristic Benchmark',
      'Competitive Intelligence Reports'
    ],
    technologies: ['Mixpanel', 'Figma', 'Maze', 'FullStory', 'Hotjar'],
    metric: '99.4% Usability Accuracy',
    image: '/src/assets/images/service_ux_research_1787881426246.jpg'
  },
  {
    id: 'product-strategy',
    number: '02',
    title: 'Product Strategy & Vision',
    tagline: 'Structuring complex ideas into scalable digital products',
    description: 'We align business ambitions with technological realities, establishing clear product roadmaps, feature prioritization matrices, and core value propositions for market disruption.',
    deliverables: [
      'Product Value Proposition',
      'Feature Prioritization Framework',
      'Information Architecture (IA)',
      'Product Definition Workshop',
      'Go-to-Market UX Strategy'
    ],
    technologies: ['Miro', 'Notion', 'Productboard', 'Figma'],
    metric: '48% Faster Market Entry',
    image: '/src/assets/images/service_prod_strategy_1787881442168.jpg'
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX Design & Craft',
    tagline: 'Designing intuitive, high-density interfaces with editorial elegance',
    description: 'We craft digital interfaces that combine visual hierarchy, effortless ergonomics, and spatial balance. From high-density dashboards to consumer apps, every pixel is calculated.',
    deliverables: [
      'High-Fidelity UI Screens',
      'Responsive Web & Mobile Layouts',
      'Micro-Interactions & Visual States',
      'Accessibility & WCAG AA Compliance',
      'Iconography & Vector Illustration'
    ],
    technologies: ['Figma', 'Framer', 'Illustrator', 'Principle'],
    metric: '3.2x User Engagement',
    image: '/src/assets/images/service_ui_ux_design_1787881454335.jpg'
  },
  {
    id: 'design-systems',
    number: '04',
    title: 'Design Systems & Tokens',
    tagline: 'Building modular component ecosystems for unified brand growth',
    description: 'We build enterprise design systems that bridge the gap between Figma and production code. Multi-brand support, design tokens, complete component documentation, and accessibility built-in.',
    deliverables: [
      'Token Architecture (Color, Type, Space)',
      'Figma Component Library',
      'React / Tailwind Production UI Library',
      'Storybook Documentation',
      'Design System Governance Playbook'
    ],
    technologies: ['Figma', 'Storybook', 'Tailwind CSS', 'TypeScript', 'Tokens Studio'],
    metric: '65% Dev Time Saved',
    image: '/src/assets/images/service_design_system_1787881469264.jpg'
  },
  {
    id: 'prototyping',
    number: '05',
    title: 'Prototyping & Motion Design',
    tagline: 'Breathing life into static screens with kinetic feedback',
    description: 'We build high-fidelity interactive prototypes that feel like final production software. Micro-animations, page transitions, and physical haptic simulations for rapid testing.',
    deliverables: [
      'Interactive Clickable Prototypes',
      'Motion Design & Transitions',
      '3D Micro-Interactions',
      'User Testing Prototypes',
      'Spatial & Gesture Choreography'
    ],
    technologies: ['Framer', 'Motion / React', 'Rive', 'After Effects', 'Protopie'],
    metric: '0.12s Interaction Response',
    image: '/src/assets/images/service_prototyping_1787881485704.jpg'
  },
  {
    id: 'creative-development',
    number: '06',
    title: 'Creative Development & 3D Web',
    tagline: 'Engineering immersive WebGL, 3D spatial, and frontend experiences',
    description: 'We turn ambitious visual concepts into butter-smooth WebGL shaders, interactive 3D canvases, and production-ready React applications with zero compromises on speed.',
    deliverables: [
      'React / Vite Modern Frontend',
      'Three.js & WebGL 3D Experiences',
      'Shader Effects & Post-Processing',
      'Performance Optimization & FPS Tuning',
      'Headless CMS & API Integration'
    ],
    technologies: ['React', 'TypeScript', 'Three.js', 'Vite', 'Tailwind CSS', 'WebGL'],
    metric: '60 FPS Canvas Smoothness',
    image: '/src/assets/images/service_creative_3d_1787881502863.jpg'
  }
];
