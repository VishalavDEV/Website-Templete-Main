import type { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    id: '1',
    category: 'Process',
    question: 'How long does a typical Byteora project engagement take from kickoff to launch?',
    answer: 'Our focused Starter sprints take 3 to 4 weeks. Full-scale Growth engagements (comprehensive brand, custom web app codebase, 3D WebGL visuals) typically span 8 to 12 weeks. We operate in bi-weekly agile design-and-code sprints with continuous staging deployments.'
  },
  {
    id: '2',
    category: 'Process',
    question: 'How do you handle client communication, feedback, and project management?',
    answer: 'Every project receives a dedicated Lead Engineer and Senior Designer. We establish a shared Slack channel for async daily updates, host bi-weekly video sprint demos, and provide live access to Figma files and staging web deployments.'
  },
  {
    id: '3',
    category: 'Technology',
    question: 'What tech stack do you use, and do we retain full IP ownership of the codebase?',
    answer: 'We build with modern React / Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js / WebGL. Upon final project sign-off, 100% of intellectual property, design tokens, Figma libraries, and source code repositories are transferred to your organization with zero license lock-ins.'
  },
  {
    id: '4',
    category: 'Technology',
    question: 'What happens if a user’s browser doesn’t support WebGL or has low hardware specs?',
    answer: 'Performance and accessibility are core constraints. Our 3D visual engines perform real-time hardware detection during initial load. If WebGL is unavailable or restricted, the UI seamlessly falls back to high-performance CSS glass visual layers without interrupting the user experience.'
  },
  {
    id: '5',
    category: 'Pricing',
    question: 'Are your pricing packages fixed, or do you offer custom enterprise scopes?',
    answer: 'We offer structured transparent tiers (Starter, Growth, Signature) as well as custom enterprise proposals for multi-brand transformations or complex software systems. All proposals include clear deliverables and SLA terms with zero hidden fees.'
  },
  {
    id: '6',
    category: 'Pricing',
    question: 'What payment terms do you accept, and do you offer annual discount billing?',
    answer: 'We accept wire transfers, automated ACH, and major corporate cards. Standard billing is structured as 50% upon project initiation and 50% upon final launch approval. Choosing annual engagement billing grants a 20% discount on retainers.'
  },
  {
    id: '7',
    category: 'General',
    question: 'Do you offer ongoing post-launch support, maintenance, and CRO optimization?',
    answer: 'Yes. All plans include post-launch SLA support (from 14 days up to dedicated ongoing retainers). We offer monthly growth sprints focused on conversion rate optimization (CRO), performance tuning, and continuous feature expansion.'
  },
  {
    id: '8',
    category: 'General',
    question: 'Where are Byteora’s teams located, and how do you handle international time zones?',
    answer: 'Byteora operates from major studios in Tokyo, Zurich, Copenhagen, New York, and London. Our distributed model ensures seamless time zone coverage across Americas, EMEA, and APAC regions.'
  }
];
