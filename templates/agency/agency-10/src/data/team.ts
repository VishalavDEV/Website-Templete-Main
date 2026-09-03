import { TeamMember } from '../types';

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Founder & Chief Technology Officer',
    department: 'Leadership & Architecture',
    bio: 'Former principal distributed systems engineer with 14+ years building high-throughput cloud infrastructure and quantitative trading backends.',
    expertise: ['Distributed Systems', 'Cloud Architecture', 'High-Concurrency Go/Rust', 'System Reliability'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'dr-alina-vance',
    name: 'Dr. Alina Vance',
    role: 'Head of Artificial Intelligence',
    department: 'AI & Research',
    bio: 'PhD in Computer Science specializing in natural language processing and computer vision. Previously published researcher in transformer optimization and semantic retrieval.',
    expertise: ['LLM Alignment & RAG', 'Computer Vision', 'PyTorch / TensorRT', 'Evaluation Systems'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'VP of Engineering',
    department: 'Engineering',
    bio: 'Seasoned engineering director with a track record of scaling enterprise engineering organizations from seed to Series D and public enterprise scale.',
    expertise: ['Engineering Culture', 'Kubernetes & IaC', 'SOC2 / HIPAA Compliance', 'Agile Delivery'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'clara-soto',
    name: 'Clara Soto',
    role: 'Head of Product Design & UX',
    department: 'Design',
    bio: 'Award-winning product designer dedicated to turning deeply complex scientific and financial data into intuitive, human-centered digital experiences.',
    expertise: ['Design Systems', 'Data Visualization', 'Micro-Interactions', 'Ergonomic UX'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'julian-mercier',
    name: 'Julian Mercier',
    role: 'Staff ML Engineer & Agents Lead',
    department: 'AI & Research',
    bio: 'Specialist in autonomous agent architectures, cyclic tool-use workflows, and fine-tuning open-weights models for private VPC execution.',
    expertise: ['LangGraph', 'Qdrant / pgvector', 'vLLM Serving', 'Autonomous Agents'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: 'talia-okafor',
    name: 'Talia Okafor',
    role: 'Lead Cloud & DevOps Architect',
    department: 'Cloud & Infrastructure',
    bio: 'Certified AWS Solutions Architect & CKA with deep expertise in zero-trust multi-cloud infrastructure, Terraform, and automated disaster recovery.',
    expertise: ['AWS / GCP', 'Terraform', 'Kubernetes (EKS/GKE)', 'FinOps Optimization'],
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  }
];

export const AGENCY_STATS = [
  { value: '140+', label: 'Digital Products Deployed', subtext: 'Production systems worldwide' },
  { value: '99.8%', label: 'Client Satisfaction Rate', subtext: 'Verified by post-project audits' },
  { value: '18', label: 'Enterprise Industries Served', subtext: 'FinTech, Health, Logistics & more' },
  { value: '42%', label: 'Average Client Operating Efficiency Lift', subtext: 'Measured after deployment' }
];

export const TEAM_MEMBERS = TEAM_DATA;

export const CORE_VALUES = [
  {
    title: 'Mathematical Grounding',
    icon: 'Cpu',
    description: 'We prioritize verifiable mathematical rigor and empirical latency benchmarks over speculative industry hype.'
  },
  {
    title: 'Radical Transparency',
    icon: 'Terminal',
    description: 'Direct Slack channels, daily standup logs, unfiltered Git commits, and zero layers of non-technical account management.'
  },
  {
    title: 'Zero Data Retention',
    icon: 'Shield',
    description: 'We enforce strict cryptographic boundaries ensuring client proprietary intellectual property and training data never leak.'
  },
  {
    title: 'Resilient Scalability',
    icon: 'Layers',
    description: 'We build distributed systems engineered to handle 10x traffic spikes with automatic recovery and zero downtime.'
  },
  {
    title: 'Defensible Business ROI',
    icon: 'CheckCircle',
    description: 'Every engineering sprint is aligned to concrete client business objectives: reduced opex, amplified throughput, or net-new revenue.'
  }
];

export const AGENCY_TIMELINE = [
  {
    year: '2020',
    title: 'Founding & Mission',
    description: 'Founded with a singular conviction: enterprises need software teams capable of marrying hardcore distributed systems engineering with applied machine learning.'
  },
  {
    year: '2022',
    title: 'Enterprise AI & MLOps Expansion',
    description: 'Expanded specialized practice into containerized model serving, edge computer vision, and high-concurrency event-driven architectures.'
  },
  {
    year: '2024',
    title: 'GenAI & Autonomous Agents Practice',
    description: 'Pioneered private enterprise RAG systems and autonomous agent frameworks with zero-retention data privacy guarantees.'
  },
  {
    year: '2026',
    title: 'Global Delivery & Enterprise Scale',
    description: 'Over 140 client deployments across 12 countries, setting the benchmark for precision software craftsmanship and measurable business ROI.'
  }
];
