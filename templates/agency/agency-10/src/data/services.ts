import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-machine-learning',
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    tagline: 'Custom mathematical models, computer vision systems, and predictive intelligence.',
    category: 'Artificial Intelligence',
    iconName: 'Brain',
    featured: true,
    shortDescription: 'We design, train, and deploy purpose-built machine learning models and predictive architectures that automate high-value decisions.',
    capabilities: [
      'Custom Machine Learning Model Training',
      'Computer Vision & Real-time Video Analytics',
      'Natural Language Processing (NLP) & Text Mining',
      'Predictive Analytics & Churn Forecasting',
      'Anomaly Detection for Industrial & Financial Systems',
      'Model Fine-Tuning & Quantization'
    ],
    businessProblems: [
      {
        problem: 'Siloed data lakes with unmined operational insights and delayed forecasting.',
        solution: 'Custom regression and time-series pipelines providing automated weekly forecasting with 94%+ historical accuracy.'
      },
      {
        problem: 'Manual visual quality control causing manufacturing bottlenecks and human error rates.',
        solution: 'Edge-deployed computer vision inference pipelines inspecting 60+ components/second with sub-millimeter precision.'
      },
      {
        problem: 'Unstructured customer communication overwhelming tier-1 support operations.',
        solution: 'Multi-lingual NLP classification and sentiment triage routing inquiries to relevant specialists instantly.'
      }
    ],
    architecturePoints: [
      'PyTorch & TensorFlow model experimentation with rigorous validation splits',
      'ONNX Runtime and TensorRT acceleration for sub-50ms inference latency',
      'Automated MLOps pipelines with MLflow model registry and drift monitoring',
      'Zero-trust data pipelines guaranteeing customer privacy compliance (HIPAA, GDPR)'
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'Hugging Face', 'MLflow', 'Triton Server'],
    processSteps: [
      { phase: '01. Feasibility & Data Audit', deliverables: 'Data quality scorecards, baseline performance target, compute budget.' },
      { phase: '02. Model Architecture & Training', deliverables: 'Loss convergence curves, hyperparameter tuning logs, validation reports.' },
      { phase: '03. Quantization & Optimization', deliverables: 'Memory footprint reduction, latency benchmark comparisons.' },
      { phase: '04. Containerized Deployment', deliverables: 'Scalable Triton/FastAPI inference microservice with GPU auto-scaling.' },
      { phase: '05. Continuous Drift Telemetry', deliverables: 'Automated data drift alarms, retraining triggers, performance dashboard.' }
    ],
    metrics: [
      { label: 'Inference Latency', value: '<35ms', sublabel: 'Average 95th percentile' },
      { label: 'Model Accuracy', value: '96.8%', sublabel: 'Production benchmark' },
      { label: 'Compute Cost Savings', value: '58%', sublabel: 'Via post-training quantization' }
    ],
    faqs: [
      {
        question: 'What volume of training data is required to build a custom model?',
        answer: 'Depending on the domain, we frequently utilize transfer learning and synthetically augmented datasets to achieve high precision with as few as a few thousand labeled instances.'
      },
      {
        question: 'How do you guarantee our proprietary training data remains private?',
        answer: 'All model development and training occurs in isolated VPC environments or on-premise hardware without external API telemetry or third-party data sharing.'
      }
    ]
  },
  {
    id: 'generative-ai',
    slug: 'generative-ai',
    title: 'Generative AI & LLM Systems',
    tagline: 'Autonomous AI agents, enterprise RAG, and private LLM fine-tuning.',
    category: 'Generative AI',
    iconName: 'Sparkles',
    featured: true,
    shortDescription: 'Transform knowledge-intensive workflows with production-grade RAG systems, multi-step autonomous agents, and domain-adapted LLMs.',
    capabilities: [
      'Enterprise Retrieval-Augmented Generation (RAG)',
      'Multi-Agent Autonomous Orchestration',
      'Domain-Specific LLM Fine-Tuning & LoRA',
      'Synthesized Agent Tool-Use & Function Calling',
      'Guardrails, Hallucination Prevention & PII Scrubbing',
      'Voice & Multimodal Conversational Interfaces'
    ],
    businessProblems: [
      {
        problem: 'Corporate knowledge buried in thousands of PDFs, confluence pages, and internal wikis.',
        solution: 'Hybrid semantic & lexical vector retrieval system with reranking, citation verification, and strict access controls.'
      },
      {
        problem: 'High hallucinations and compliance risks when staff experiment with public LLMs.',
        solution: 'Deterministic guardrail middleware enforcing schema validation, prompt injection shields, and verifiable source references.'
      },
      {
        problem: 'Complex multi-step workflows requiring manual coordination across disparate legacy software.',
        solution: 'Autonomous agent frameworks executing API handoffs, database reads, and conditional approvals autonomously.'
      }
    ],
    architecturePoints: [
      'Hybrid dense/sparse embedding retrieval (Qdrant/Pinecone + BM25) with cross-encoder reranking',
      'Hierarchical chunking strategies preserving document context and structured metadata',
      'Dynamic agent loops with LangGraph / LlamaIndex / AutoGen architecture',
      'Self-hosted open-weights models (Llama 3, DeepSeek, Mistral) alongside enterprise Gemini and OpenAI backends'
    ],
    techStack: ['Python', 'LangChain', 'LlamaIndex', 'Qdrant', 'Pinecone', 'vLLM', 'Ollama', 'FastAPI'],
    processSteps: [
      { phase: '01. Document Knowledge Ingestion', deliverables: 'Vector DB architecture, schema definitions, chunking benchmarking.' },
      { phase: '02. Retrieval Evaluation & Reranking', deliverables: 'RAG Triad evaluation scorecards (Context Relevance, Groundedness, Answer Relevance).' },
      { phase: '03. Guardrail Enforcement', deliverables: 'NeMo guardrails, regex redaction, jailbreak intrusion tests.' },
      { phase: '04. Agent Tool Hookup', deliverables: 'Verified OpenAPI tool manifests, idempotency guarantees.' },
      { phase: '05. Production Rollout', deliverables: 'Real-time token cost dashboard, latency tracing with Langfuse.' }
    ],
    metrics: [
      { label: 'Hallucination Rate', value: '<0.4%', sublabel: 'Verified by automated evals' },
      { label: 'Information Retrieval', value: '3.4x', sublabel: 'Faster than manual knowledge search' },
      { label: 'Token Efficiency', value: '44%', sublabel: 'Prompt caching & context trimming' }
    ],
    faqs: [
      {
        question: 'Can we run LLMs completely on-premises or within our private cloud?',
        answer: 'Yes. We frequently deploy quantized open-source models using vLLM or Triton inside private Kubernetes clusters with zero outbound internet egress.'
      },
      {
        question: 'How do you prevent proprietary intellectual property from leaking into LLM providers?',
        answer: 'We implement client-side PII scrubbing, zero-retention API contracts, and cryptographic anonymization before prompts touch foundation model endpoints.'
      }
    ]
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Enterprise Software Engineering',
    tagline: 'Fault-tolerant distributed backends, resilient APIs, and mission-critical architectures.',
    category: 'Software Development',
    iconName: 'Terminal',
    featured: true,
    shortDescription: 'We architect and build enterprise software platforms engineered for high throughput, zero-downtime scalability, and modular maintenance.',
    capabilities: [
      'High-Throughput Microservice Architectures',
      'Event-Driven Systems (Kafka, RabbitMQ)',
      'GraphQL & RESTful API Infrastructure',
      'High-Concurrency Distributed Databases',
      'Legacy System Modernization & Decoupling',
      'Enterprise Identity & RBAC Federation'
    ],
    businessProblems: [
      {
        problem: 'Monolithic legacy systems causing high release friction and cascading failure states.',
        solution: 'Strangler fig migration pattern decomposing monoliths into containerized, independently deployable microservices.'
      },
      {
        problem: 'Database connection exhaustion and latency spikes during peak transactional loads.',
        solution: 'Connection pooling, distributed Redis caching, read-replicas, and asynchronous message broker queuing.'
      },
      {
        problem: 'Unclear API contracts leading to broken integration tests across internal and external teams.',
        solution: 'Type-safe contract-first development using OpenAPI/Proto3 with automated contract validation in CI/CD.'
      }
    ],
    architecturePoints: [
      'Domain-Driven Design (DDD) with clean hexagonal / onion architectures',
      'Zero-trust network architecture with mutual TLS (mTLS) service-to-service communication',
      'Transactional outbox pattern with Kafka guaranteeing exactly-once processing semantics',
      'Database sharding and automated read-write replication topologies'
    ],
    techStack: ['Node.js', 'TypeScript', 'Go', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Apache Kafka'],
    processSteps: [
      { phase: '01. Architecture Blueprint & RFC', deliverables: 'C4 diagrams, API specifications, disaster recovery plan.' },
      { phase: '02. Core Domain Implementation', deliverables: 'Type-safe backend services with 90%+ unit test coverage.' },
      { phase: '03. Database Schema & Migration Strategy', deliverables: 'Zero-downtime DDL scripts, load tested indexing strategies.' },
      { phase: '04. Stress & Chaos Testing', deliverables: 'Load test runs at 10x peak throughput, latency percentile breakdown.' },
      { phase: '05. Staged Canary Deployment', deliverables: 'Automated rollback triggers, distributed tracing via OpenTelemetry.' }
    ],
    metrics: [
      { label: 'Uptime SLA Target', value: '99.99%', sublabel: 'High availability architecture' },
      { label: 'Throughput Capacity', value: '50k+ req/s', sublabel: 'Benchmarked load testing' },
      { label: 'Release Lead Time', value: '85% faster', sublabel: 'Automated CI/CD workflows' }
    ],
    faqs: [
      {
        question: 'Do you hand over full source code and intellectual property rights?',
        answer: 'Yes. All intellectual property, source repositories, documentation, and infrastructure definitions belong 100% to your organization from day one.'
      },
      {
        question: 'How do you handle zero-downtime database migrations?',
        answer: 'We employ the expand-and-contract pattern with blue/green deployment schemas to ensure old and new versions run simultaneously without table locking.'
      }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web & Digital Products',
    tagline: 'Performant, accessible, and stunning web applications powered by React & modern stacks.',
    category: 'Web & Mobile',
    iconName: 'Layout',
    featured: true,
    shortDescription: 'We build web experiences with blistering load speeds, flawless responsiveness, fluid motion physics, and editorial aesthetic precision.',
    capabilities: [
      'Single-Page & Server-Side Rendered Applications',
      'Design Systems & Accessible Component Libraries',
      'Interactive Analytics Dashboards & Data Visualizers',
      'High-Conversion SaaS Onboarding & Checkout',
      'Progressive Web Apps (PWA) with Offline Caching',
      'Core Web Vitals Optimization & Search Engine Architecture'
    ],
    businessProblems: [
      {
        problem: 'Clunky, slow web dashboards causing user churn and negative customer perception.',
        solution: 'Sub-second UI hydration, optimistic state updates, and streamlined render trees yielding near-instant feedback.'
      },
      {
        problem: 'Fragmented brand presentation and messy UI components across fragmented engineering teams.',
        solution: 'Centralized, tokenized Tailwind & Radix design system exported as an NPM package with full Storybook documentation.'
      },
      {
        problem: 'Sub-par SEO and sluggish Core Web Vitals dragging down organic customer acquisition.',
        solution: 'Optimized static generation with edge caching, automated image pipeline, and semantic microdata.'
      }
    ],
    architecturePoints: [
      'Next.js & React architecture leveraging modern Server Components and edge rendering',
      'Tailwind CSS design token system guaranteeing mathematical typography and harmonious spacing',
      'Client-side state synchronization using Zustand / TanStack Query with optimistic rollbacks',
      'Comprehensive accessibility auditing reaching WCAG 2.1 Level AA conformance'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'motion', 'TanStack Query', 'Vite'],
    processSteps: [
      { phase: '01. UX Wireframes & Design System', deliverables: 'High-fidelity Figma prototypes, design tokens, typography scale.' },
      { phase: '02. Component Development', deliverables: 'Accessible UI library tested across keyboard, screen readers, and touch.' },
      { phase: '03. State & API Integration', deliverables: 'Optimistic UI mutations, tokenized session handling, data caching.' },
      { phase: '04. Performance Tuning', deliverables: 'Lighthouse 95+ audit score across Performance, SEO, and Accessibility.' },
      { phase: '05. Edge CDN Deployment', deliverables: 'Cloudflare / Vercel edge distribution with automated preview branches.' }
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '98+', sublabel: 'Performance, A11y & SEO average' },
      { label: 'First Contentful Paint', value: '0.6s', sublabel: 'Fast edge-delivered experience' },
      { label: 'User Conversion Lift', value: '+34%', sublabel: 'Across client onboarding flows' }
    ],
    faqs: [
      {
        question: 'Do your web applications support cross-browser compatibility and older devices?',
        answer: 'Yes, we test and support the latest major versions of Chrome, Safari, Firefox, and Edge, with graceful fallbacks for mobile and touch devices.'
      },
      {
        question: 'Can you integrate our existing third-party SaaS tools (Stripe, HubSpot, Segment)?',
        answer: 'Absolutely. We regularly engineer frictionless integrations with payment processors, CDPs, CRM pipelines, and custom authentication providers.'
      }
    ]
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    title: 'Mobile Application Engineering',
    tagline: 'Native performance for iOS and Android with intuitive gesture navigation.',
    category: 'Web & Mobile',
    iconName: 'Smartphone',
    featured: false,
    shortDescription: 'We build cross-platform and native mobile applications that feel fluid, responsive, and deeply integrated with hardware capabilities.',
    capabilities: [
      'React Native & Flutter Cross-Platform Development',
      'Swift & Kotlin Native Modules',
      'Offline-First Local SQLite/WatermelonDB Synchronization',
      'Push Notification Orchestration & Deep Linking',
      'Biometric Authentication & Secure Enclave Keys',
      'App Store & Play Store CI/CD Release Automation'
    ],
    businessProblems: [
      {
        problem: 'Maintaining two separate iOS and Android codebases doubling maintenance costs.',
        solution: 'Single high-performance cross-platform codebase sharing 90%+ code while retaining native 60fps animations.'
      },
      {
        problem: 'Field workers losing critical job data when connectivity drops in dead zones.',
        solution: 'Robust local-first offline synchronization engine queueing mutations and resolving conflicts seamlessly upon reconnection.'
      },
      {
        problem: 'Frustrating App Store review rejections and delayed emergency bug releases.',
        solution: 'Automated Fastlane pipelines with Over-The-Air (OTA) critical patch delivery bypassing store approval delays.'
      }
    ],
    architecturePoints: [
      'Declarative reactive architectures with clean state machines',
      'Native TurboModules and JSI bindings for high-performance camera, Bluetooth, and geolocation',
      'Encrypted local storage leveraging iOS Keychain and Android Keystore hardware security',
      'Fastlane automated store provisioning, certificate signing, and TestFlight deployment'
    ],
    techStack: ['React Native', 'TypeScript', 'Expo', 'Swift', 'Kotlin', 'SQLite', 'Fastlane'],
    processSteps: [
      { phase: '01. Mobile UX Prototyping', deliverables: 'Clickable mobile prototypes with iOS Human Interface & Material guidelines.' },
      { phase: '02. Native Architecture Setup', deliverables: 'Cross-platform skeleton, splash screens, deep-link routing configuration.' },
      { phase: '03. Hardware Feature Integration', deliverables: 'Camera scanning, push notifications, and background location services.' },
      { phase: '04. Device Matrix Testing', deliverables: 'Automated testing across 30+ physical device screen sizes and OS versions.' },
      { phase: '05. Store Launch & Monitoring', deliverables: 'App Store & Google Play publishing, Sentry crash reporting integration.' }
    ],
    metrics: [
      { label: 'Frame Rate Consistency', value: '60 FPS', sublabel: 'Zero stutter gesture physics' },
      { label: 'Codebase Reusability', value: '92%', sublabel: 'Shared between iOS & Android' },
      { label: 'Crash-Free Sessions', value: '99.94%', sublabel: 'Monitored across production' }
    ],
    faqs: [
      {
        question: 'Will our app feel like a native application or a web view wrapper?',
        answer: 'Our mobile apps compile to genuine native UI components and leverage native render threads for 60fps gesture response.'
      },
      {
        question: 'Do you manage the entire App Store submission process?',
        answer: 'Yes, we handle developer account setup, provisioning profiles, privacy declarations, screenshot generation, and submission review correspondence.'
      }
    ]
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Business Automation & Workflows',
    tagline: 'End-to-end intelligent document processing, data pipelines, and ERP orchestration.',
    category: 'Automation',
    iconName: 'Cpu',
    featured: true,
    shortDescription: 'Eliminate repetitive manual bottlenecks by replacing human data entry with self-healing, deterministic and AI-enhanced automation pipelines.',
    capabilities: [
      'Intelligent Document Processing (IDP) & OCR',
      'Cross-System Enterprise Data Synchronization',
      'Automated Invoicing, Reconciliation & Billing Flows',
      'AI Workflow Orchestration with Human-in-the-Loop',
      'Custom Integration Adapters for Legacy Software',
      'Audit Trails, Compliance Logging & Telemetry'
    ],
    businessProblems: [
      {
        problem: 'Finance teams spending hundreds of hours manually keying invoice PDFs into ERP systems.',
        solution: 'Automated multi-modal OCR pipeline extracting line items, matching purchase orders, and flagging discrepancies.'
      },
      {
        problem: 'Customer onboarding delays caused by disparate verification checks across five separate services.',
        solution: 'Orchestrated event pipeline executing background checks, identity verification, and CRM provisioning in 4 seconds.'
      },
      {
        problem: 'Fragile RPA screen scrapers breaking whenever vendor websites update their button classes.',
        solution: 'Resilient API-first headless automation paired with computer vision fallback routines that adapt to UI changes.'
      }
    ],
    architecturePoints: [
      'Temporal.io / Apache Airflow stateful workflow engines ensuring fault recovery and automatic retries',
      'Multimodal LLM vision parsing for messy handwritten forms, checks, and complex tabular receipts',
      'Secure webhooks with HMAC signatures and exponential backoff dead-letter queues',
      'Immutable cryptographic event logs satisfying SOC2 and ISO27001 audit requirements'
    ],
    techStack: ['Python', 'Temporal', 'Apache Airflow', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL'],
    processSteps: [
      { phase: '01. Workflow Mapping & Bottleneck Audit', deliverables: 'BPMN flow diagrams, manual cost calculation, time-savings ROI model.' },
      { phase: '02. Connector & Integration Development', deliverables: 'Secure API adapters for CRM, ERP, banking, and accounting software.' },
      { phase: '03. Human-in-the-Loop Exception Triage', deliverables: 'Reviewer interface for edge-cases with confidence thresholds below 98%.' },
      { phase: '04. End-to-End Pilot Execution', deliverables: 'Parallel run against legacy process to verify 100% financial reconciliation.' },
      { phase: '05. Full Autonomous Cutover', deliverables: 'Automated alerts, self-healing retries, and executive KPI dashboard.' }
    ],
    metrics: [
      { label: 'Manual Time Reduction', value: '78%', sublabel: 'Immediate labor reallocation' },
      { label: 'Data Accuracy', value: '99.8%', sublabel: 'Automated validation schemas' },
      { label: 'Payback Period', value: '<4.5 Mos', sublabel: 'Documented client ROI' }
    ],
    faqs: [
      {
        question: 'What happens if a third-party vendor API fails or changes during an automated workflow?',
        answer: 'Our workflows are stateful and idempotent. If an external service is unavailable, workflows pause safely, retry with exponential backoff, or route to a fallback adapter without losing transaction state.'
      },
      {
        question: 'Is a human reviewer required for sensitive financial transfers?',
        answer: 'We configure strict confidence thresholds and human-in-the-loop review portals for actions above predetermined risk thresholds.'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    slug: 'cloud-solutions',
    title: 'Cloud Architecture & DevOps',
    tagline: 'Resilient cloud infrastructure, automated CI/CD pipelines, and cost governance.',
    category: 'Cloud & DevOps',
    iconName: 'Cloud',
    featured: true,
    shortDescription: 'We architect cloud environments on AWS, Google Cloud, and Azure, implementing modern Infrastructure as Code, Kubernetes clusters, and zero-trust security.',
    capabilities: [
      'Infrastructure as Code (Terraform, Pulumi)',
      'Kubernetes (EKS, GKE) & Container Orchestration',
      'Automated GitOps CI/CD Pipelines (GitHub Actions, ArgoCD)',
      'Cloud Spend Audit & FinOps Optimization',
      'Disaster Recovery & Multi-Region Failover',
      'Observability Stacks (Prometheus, Grafana, Datadog)'
    ],
    businessProblems: [
      {
        problem: 'Spiraling monthly cloud bills with unmonitored idle resources and unoptimized database instances.',
        solution: 'Comprehensive FinOps audit right-sizing compute nodes, introducing spot instances, and slashing cloud bills by 35-50%.'
      },
      {
        problem: 'Development teams taking days to stand up staging environments and deploy features.',
        solution: 'Ephemeral preview environments automatically spun up per pull request and destroyed upon merge.'
      },
      {
        problem: 'Lack of centralized observability causing prolonged outages and slow root-cause analysis.',
        solution: 'Unified telemetry ingestion (metrics, logs, traces) with automated alerting before downtime affects users.'
      }
    ],
    architecturePoints: [
      'Immutable Infrastructure as Code guaranteeing zero configuration drift across environments',
      'Zero-trust network segregation with private subnets, NAT gateways, and WAF protection',
      'GitOps workflows with cryptographic commit verification and automated policy-as-code linting',
      'Multi-zone automatic failover with automated daily backup snapshots and dry-run restoration drills'
    ],
    techStack: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Datadog', 'ArgoCD'],
    processSteps: [
      { phase: '01. Cloud Well-Architected Review', deliverables: 'Security vulnerability audit, cost analysis, architectural topology map.' },
      { phase: '02. Terraform Infrastructure Blueprint', deliverables: 'Modular IaC templates with remote state locking and least-privilege IAM.' },
      { phase: '03. Kubernetes Cluster Provisioning', deliverables: 'Hardened ingress, cert-manager, cluster autoscaler, and network policies.' },
      { phase: '04. GitOps Pipeline Implementation', deliverables: 'Multi-stage build pipelines with SAST security scanners and container signing.' },
      { phase: '05. Observability & Runbook Handover', deliverables: 'Grafana dashboards, PagerDuty alerting matrix, and disaster recovery runbook.' }
    ],
    metrics: [
      { label: 'Cloud Cost Reduction', value: '41%', sublabel: 'Average across client migrations' },
      { label: 'Deployment Frequency', value: '12x', sublabel: 'Increase with automated GitOps' },
      { label: 'Recovery Time (RTO)', value: '<5 Min', sublabel: 'Automated disaster recovery' }
    ],
    faqs: [
      {
        question: 'Do you manage existing clouds or only greenfield implementations?',
        answer: 'We regularly perform in-place modernization on existing AWS, GCP, and Azure accounts without disrupting active client traffic.'
      },
      {
        question: 'How do you ensure zero vendor lock-in with cloud providers?',
        answer: 'We build upon cloud-neutral standards like Docker, Kubernetes, standard PostgreSQL, and Terraform, enabling workloads to migrate between clouds if ever needed.'
      }
    ]
  }
];
