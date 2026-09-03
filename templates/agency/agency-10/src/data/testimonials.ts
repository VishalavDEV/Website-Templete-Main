import { Testimonial } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Elena Rostova',
    role: 'Chief of Diagnostic Radiology',
    company: 'SynapseHealth Systems',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    testimonial: 'The Axiom engineering team delivered a platform that truly respects clinical nuance. It has become an indispensable copilot that our attending physicians trust every shift, cutting turnaround times by 42%.',
    rating: 5,
    projectType: 'Healthcare AI & Computer Vision',
    metricHighlight: '42% Turnaround Time Reduction'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Head of Quantitative Technology',
    company: 'Aurora Capital Partners',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    testimonial: 'Axiom transformed our entire risk posture. Going from overnight batch reports to sub-second streaming stress tests completely changed how our portfolio managers allocate capital and manage volatility.',
    rating: 5,
    projectType: 'High-Throughput FinTech Risk Engine',
    metricHighlight: '140,000 events/sec throughput'
  },
  {
    id: 'test-3',
    name: 'David Tan',
    role: 'VP of Global Logistics Operations',
    company: 'Nexus Supply Chain Global',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    testimonial: 'Axiom did not just build software; they modernized our operational core. Our dispatch team now manages four times the freight volume with significantly less stress and 23% fewer empty miles.',
    rating: 5,
    projectType: 'Autonomous Fleet Dispatch & Routing',
    metricHighlight: '23% Fuel & Empty Miles Saved'
  },
  {
    id: 'test-4',
    name: 'Sophia Rossi',
    role: 'Chief Digital Officer',
    company: 'Veridian Luxury Brands',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    testimonial: 'Axiom delivered our dream storefront. It feels like an art gallery and operates like a Formula 1 car. Mobile conversion increased by 48% within 60 days of launch.',
    rating: 5,
    projectType: 'Headless Global Commerce & 3D Web',
    metricHighlight: '+48% Mobile Conversion Lift'
  },
  {
    id: 'test-5',
    name: 'Julian Thorne',
    role: 'Managing Partner',
    company: 'Kortex Advisory',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    testimonial: 'Kortex has fundamentally changed how our analysts prepare for client presentations. The citation accuracy, zero hallucinations, and sub-second retrieval are unlike anything on the commercial market.',
    rating: 5,
    projectType: 'Enterprise RAG & Knowledge Synthesis',
    metricHighlight: '14 hours saved weekly per user'
  }
];

export const TRUST_PARTNERS = [
  { name: 'Apex Capital', category: 'FinTech' },
  { name: 'Synapse Healthcare', category: 'Health Tech' },
  { name: 'Nexus Logistics', category: 'Supply Chain' },
  { name: 'Veridian Global', category: 'Retail & E-commerce' },
  { name: 'Kortex Intelligence', category: 'Enterprise SaaS' },
  { name: 'Lumina Energy', category: 'Industrial & IoT' },
  { name: 'Aether Robotics', category: 'Robotics & Hardware' },
  { name: 'Vanguard Biometrics', category: 'Cybersecurity' }
];
