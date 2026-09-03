import { TechnologyCategory } from '../types';

export const TECHNOLOGIES_DATA: TechnologyCategory[] = [
  {
    category: 'AI & Machine Learning',
    description: 'Modern mathematical architectures, frontier foundation models, vector databases, and high-performance inference runtimes.',
    items: [
      { name: 'Python', type: 'Language', description: 'Primary language for ML modeling, data pipelines, and numerical computation.', status: 'Core Specialization' },
      { name: 'PyTorch', type: 'Framework', description: 'Deep learning research, custom neural network training, and computer vision models.', status: 'Core Specialization' },
      { name: 'TensorFlow', type: 'Framework', description: 'Production model deployment, edge compilation, and distributed training.', status: 'Production Standard' },
      { name: 'OpenAI & Gemini APIs', type: 'Foundation Models', description: 'Frontier LLMs, multimodal reasoning, vision, and function calling integration.', status: 'Core Specialization' },
      { name: 'Hugging Face', type: 'Ecosystem', description: 'Open-weights model fine-tuning, tokenizers, and model hub optimization.', status: 'Core Specialization' },
      { name: 'LangChain & LangGraph', type: 'Agent Framework', description: 'Stateful multi-agent workflows, cyclic execution, and complex tool calling.', status: 'Core Specialization' },
      { name: 'LlamaIndex', type: 'Data Framework', description: 'Advanced RAG orchestration, hierarchical indexing, and semantic chunking.', status: 'Production Standard' },
      { name: 'Qdrant & Pinecone', type: 'Vector DB', description: 'Sub-millisecond similarity search, dense/sparse hybrid search, and filtered vector indexes.', status: 'Core Specialization' },
      { name: 'vLLM & TensorRT-LLM', type: 'Inference Engine', description: 'PagedAttention memory management and ultra-low latency self-hosted model serving.', status: 'Advanced' }
    ]
  },
  {
    category: 'Frontend Engineering',
    description: 'Modern, accessible, reactive user interfaces with sub-second page loads and fluid motion interactions.',
    items: [
      { name: 'React 19', type: 'UI Library', description: 'Component-driven reactive user interfaces, optimistic updates, and server actions.', status: 'Core Specialization' },
      { name: 'Next.js', type: 'Framework', description: 'Server-side rendering, edge caching, and incremental static regeneration for scalable apps.', status: 'Core Specialization' },
      { name: 'TypeScript', type: 'Language', description: 'End-to-end type safety, strict compile checks, and clean enterprise refactoring.', status: 'Core Specialization' },
      { name: 'Tailwind CSS', type: 'Styling', description: 'Utility-first tokenized styling system ensuring mathematical design harmony.', status: 'Core Specialization' },
      { name: 'motion', type: 'Animation', description: 'Physics-based gesture animations, layout transitions, and page state orchestration.', status: 'Core Specialization' },
      { name: 'React Native', type: 'Mobile Framework', description: 'Cross-platform mobile apps for iOS and Android sharing 90%+ code.', status: 'Production Standard' },
      { name: 'Three.js / WebGL', type: '3D Graphics', description: 'Interactive 3D product visualizers, spatial maps, and shader-driven interfaces.', status: 'Advanced' }
    ]
  },
  {
    category: 'Backend Systems',
    description: 'High-concurrency microservices, resilient event brokers, and contract-first API gateways.',
    items: [
      { name: 'Node.js & Express', type: 'Runtime', description: 'Asynchronous event-loop services, REST APIs, and microservice orchestration.', status: 'Core Specialization' },
      { name: 'FastAPI & Python', type: 'Web Framework', description: 'High-performance asynchronous APIs with automatic OpenAPI schema generation.', status: 'Core Specialization' },
      { name: 'Go (Golang)', type: 'Language', description: 'Ultra-low-latency backend daemons, high-throughput network proxies, and CLI tooling.', status: 'Production Standard' },
      { name: 'Apache Kafka', type: 'Message Broker', description: 'High-throughput distributed event streaming and replayable transactional event logs.', status: 'Core Specialization' },
      { name: 'RabbitMQ', type: 'Message Queue', description: 'Flexible AMQP routing, dead-letter exchanges, and worker task prioritization.', status: 'Production Standard' },
      { name: 'GraphQL', type: 'Query Language', description: 'Federated data graph schemas, precise client data queries, and real-time subscriptions.', status: 'Production Standard' }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'ACID transactional databases, analytical columnar warehouses, and high-speed in-memory caches.',
    items: [
      { name: 'PostgreSQL', type: 'Relational DB', description: 'Primary transactional database with robust extensions (PostGIS, pgvector, Citus).', status: 'Core Specialization' },
      { name: 'Redis', type: 'In-Memory Store', description: 'Microsecond distributed caching, session storage, rate limiting, and pub/sub.', status: 'Core Specialization' },
      { name: 'ClickHouse', type: 'Columnar OLAP', description: 'Real-time telemetry and analytical queries over billions of event logs in milliseconds.', status: 'Advanced' },
      { name: 'MongoDB', type: 'Document DB', description: 'Flexible schema storage for unstructured content, catalog management, and audit logs.', status: 'Production Standard' },
      { name: 'Elasticsearch', type: 'Search Engine', description: 'Distributed full-text lexical search, typo tolerance, and log analytics.', status: 'Production Standard' }
    ]
  },
  {
    category: 'Cloud Infrastructure',
    description: 'Multi-cloud architectures, resilient Kubernetes orchestration, and serverless compute.',
    items: [
      { name: 'Amazon Web Services (AWS)', type: 'Cloud Provider', description: 'EKS, Lambda, S3, RDS, CloudFront, IAM least-privilege security design.', status: 'Core Specialization' },
      { name: 'Google Cloud Platform (GCP)', type: 'Cloud Provider', description: 'GKE, Cloud Run, Vertex AI, BigQuery, and Pub/Sub streaming.', status: 'Core Specialization' },
      { name: 'Microsoft Azure', type: 'Cloud Provider', description: 'Azure Kubernetes Service (AKS), Azure OpenAI private tenant deployments.', status: 'Production Standard' },
      { name: 'Cloudflare', type: 'Edge Network', description: 'DDoS mitigation, edge workers, global CDN caching, and zero-trust tunnels.', status: 'Core Specialization' }
    ]
  },
  {
    category: 'DevOps & CI/CD',
    description: 'Automated software delivery pipelines, immutable infrastructure, and end-to-end observability.',
    items: [
      { name: 'Docker', type: 'Containerization', description: 'Multi-stage deterministic container images with security vulnerability scanning.', status: 'Core Specialization' },
      { name: 'Kubernetes (K8s)', type: 'Orchestration', description: 'Automated horizontal pod autoscaling, rolling zero-downtime updates, ingress routing.', status: 'Core Specialization' },
      { name: 'Terraform', type: 'IaC', description: 'Declarative cloud infrastructure provisioning with remote state locking.', status: 'Core Specialization' },
      { name: 'GitHub Actions', type: 'CI/CD', description: 'Automated linting, matrix testing, preview deployment branches, and release automation.', status: 'Core Specialization' },
      { name: 'Datadog & OpenTelemetry', type: 'Observability', description: 'Unified distributed tracing, metrics aggregation, and proactive anomaly alerts.', status: 'Production Standard' }
    ]
  }
];
