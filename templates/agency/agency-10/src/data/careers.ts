import { CareerPosition } from '../types';

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'staff-ml-engineer',
    title: 'Staff Machine Learning & LLM Engineer',
    department: 'Artificial Intelligence',
    location: 'Remote / San Francisco / London',
    employmentType: 'Full-time',
    experience: '6+ Years Experience',
    salaryRange: '$190,000 – $240,000 + Equity',
    summary: 'Lead the architecture and production deployment of enterprise RAG pipelines, autonomous agent toolsets, and open-weights model fine-tuning for global clients.',
    responsibilities: [
      'Design, benchmark, and deploy hybrid dense/sparse vector retrieval systems and cross-encoder rerankers.',
      'Fine-tune open-source models (Llama, DeepSeek, Mistral) using LoRA/QLoRA on specialized customer datasets.',
      'Implement deterministic guardrail layers and automated hallucination evaluation frameworks (RAG Triad).',
      'Collaborate with client engineering executives to establish secure, zero-retention private cloud deployments.'
    ],
    requirements: [
      'Deep fluency with PyTorch, Hugging Face Transformers, and modern vector databases (Qdrant, Pinecone, pgvector).',
      'Demonstrated experience serving high-concurrency LLM inference using vLLM, TensorRT-LLM, or Triton Server.',
      'Strong software engineering fundamentals in Python and containerization with Docker/Kubernetes.',
      'Track record of moving generative AI prototypes into production with rigorous latency and cost benchmarks.'
    ],
    niceToHave: [
      'Published research papers in top-tier conferences (NeurIPS, ICML, ACL).',
      'Experience with LangGraph, LlamaIndex, or AutoGen stateful multi-agent workflows.',
      'Familiarity with confidential computing or edge inference hardware.'
    ]
  },
  {
    id: 'lead-distributed-systems-engineer',
    title: 'Lead Distributed Systems Architect (Go / TypeScript)',
    department: 'Engineering',
    location: 'Remote / New York / Berlin',
    employmentType: 'Full-time',
    experience: '7+ Years Experience',
    salaryRange: '$180,000 – $230,000 + Equity',
    summary: 'Architect mission-critical, high-throughput microservice backends, event streams, and fault-tolerant data pipelines powering modern enterprise clients.',
    responsibilities: [
      'Architect event-driven topologies processing 50k+ transactions/sec with Apache Kafka and RabbitMQ.',
      'Design type-safe, contract-first API ecosystems using OpenAPI and Protocol Buffers.',
      'Decompose enterprise monolithic architectures into decoupled, independently deployable services.',
      'Drive high-availability database performance tuning across PostgreSQL, ClickHouse, and Redis clusters.'
    ],
    requirements: [
      'Deep mastery of Golang and TypeScript / Node.js in high-concurrency production environments.',
      'Expert understanding of distributed system failure modes, transactional outbox pattern, and eventual consistency.',
      'Extensive experience with PostgreSQL optimization, sharding, connection pooling, and zero-downtime migrations.',
      'Commitment to clean domain-driven architecture and rigorous automated integration testing.'
    ],
    niceToHave: [
      'Experience with Rust for performance-critical systems.',
      'Hands-on experience with ClickHouse or high-throughput time-series engines.',
      'Contributions to open-source distributed frameworks.'
    ]
  },
  {
    id: 'staff-product-designer',
    title: 'Staff Product Designer & Design Systems Lead',
    department: 'Design & UX',
    location: 'Remote / San Francisco / Toronto',
    employmentType: 'Full-time',
    experience: '5+ Years Experience',
    salaryRange: '$150,000 – $195,000 + Equity',
    summary: 'Lead the design of complex enterprise software tools, interactive data visualizers, and polished design systems that balance aesthetic restraint with high data density.',
    responsibilities: [
      'Own end-to-end product design from generative stakeholder discovery through pixel-perfect Figma component systems.',
      'Architect tokenized design systems exported directly to Tailwind CSS and modern React component libraries.',
      'Design ergonomic workflows for high-density interfaces (financial analytics, clinical software, dispatch boards).',
      'Conduct rigorous usability studies and validate ergonomics with enterprise domain experts.'
    ],
    requirements: [
      'Stunning portfolio demonstrating mastery of typography, visual hierarchy, micro-interactions, and complex desktop UI.',
      'Deep understanding of accessibility standards (WCAG 2.1 AA) and responsive web ergonomic principles.',
      'Ability to communicate complex technical product tradeoffs with client CTOs and engineering directors.',
      'Working knowledge of frontend code (HTML/CSS/Tailwind) to collaborate effectively with React engineers.'
    ],
    niceToHave: [
      'Experience designing 3D spatial experiences or WebGL/Three.js interfaces.',
      'Familiarity with motion design in Framer Motion / After Effects.',
      'Background in B2B SaaS, developer tooling, or financial technology.'
    ]
  },
  {
    id: 'senior-devops-cloud-architect',
    title: 'Senior Cloud & Site Reliability Architect (AWS / K8s)',
    department: 'Cloud & DevOps',
    location: 'Remote / Global',
    employmentType: 'Full-time',
    experience: '5+ Years Experience',
    salaryRange: '$165,000 – $210,000 + Equity',
    summary: 'Design immutable cloud infrastructure, multi-region Kubernetes clusters, and automated GitOps release pipelines guaranteeing 99.99% client uptime.',
    responsibilities: [
      'Author modular, reusable Infrastructure as Code using Terraform and Pulumi.',
      'Provision and manage hardened Kubernetes clusters (EKS, GKE) with automated cluster autoscaling and Istio service mesh.',
      'Architect zero-trust security perimeters meeting SOC2, ISO27001, and HIPAA compliance specifications.',
      'Implement multi-cloud observability stacks using Prometheus, Grafana, Datadog, and OpenTelemetry.'
    ],
    requirements: [
      'Extensive hands-on production experience architecting on AWS and Google Cloud Platform.',
      'Expertise in Kubernetes administration, networking (CNI), ingress controllers, and secret management (Vault).',
      'Deep fluency with GitOps workflows (ArgoCD, GitHub Actions) and automated security vulnerability scanning.',
      'Strong scripting background in Python, Bash, or Go for automated operational tooling.'
    ],
    niceToHave: [
      'Certified Kubernetes Administrator (CKA) or AWS Solutions Architect Professional credentials.',
      'Experience orchestrating GPU clusters (NVIDIA Container Toolkit, Slurm) for ML workloads.',
      'Experience executing cloud cost optimization (FinOps) reducing spend by 30%+.'
    ]
  }
];

export const CAREER_BENEFITS = [
  {
    title: 'Remote-First Worldwide',
    description: 'Work from wherever you are most productive. We provide generous home office setup stipends and local co-working allowances.',
    icon: 'Globe'
  },
  {
    title: 'Competitive Compensation & Equity',
    description: 'Top-of-market base salaries benchmarked against Tier-1 tech hubs, paired with meaningful company equity participation.',
    icon: 'DollarSign'
  },
  {
    title: 'Hardware & Lab Allowance',
    description: 'Top-spec Apple Silicon MacBooks or custom Linux workstations, plus dedicated cloud GPU compute budgets for R&D experimentation.',
    icon: 'Cpu'
  },
  {
    title: 'Comprehensive Healthcare & Wellness',
    description: 'Premium medical, dental, vision coverage with 100% employer-covered premiums for you and your dependents, plus wellness stipends.',
    icon: 'Heart'
  },
  {
    title: 'Continuous Learning Stipend',
    description: '$4,000 annual budget for conferences (NeurIPS, re:Invent, React Summit), books, courses, and certifications of your choice.',
    icon: 'BookOpen'
  },
  {
    title: 'Flexible Time Off & Sabbaticals',
    description: 'Unlimited paid time off with a mandatory 25-day annual minimum, plus 4-week paid sabbaticals after 4 years of tenure.',
    icon: 'Calendar'
  }
];

export const CAREER_ROLES_DATA = CAREER_POSITIONS;
export const AGENCY_BENEFITS = CAREER_BENEFITS;
