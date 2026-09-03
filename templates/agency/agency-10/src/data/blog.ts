import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'evaluating-enterprise-rag',
    slug: 'evaluating-enterprise-rag-systems-in-production',
    title: 'Beyond Naive RAG: Architectural Patterns for Zero-Hallucination Enterprise Knowledge Systems',
    category: 'Artificial Intelligence',
    excerpt: 'How we engineer hybrid dense/sparse vector retrieval, cross-encoder reranking, and deterministic guardrails to achieve under 0.4% hallucination rates in regulated environments.',
    author: {
      name: 'Dr. Alina Vance',
      role: 'Head of Artificial Intelligence',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: 'Feb 18, 2026',
    readingTime: '8 min read',
    tags: ['Generative AI', 'RAG', 'Vector Databases', 'Architecture'],
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tableOfContents: [
      { id: 'the-naive-rag-trap', title: '1. The Naive RAG Trap' },
      { id: 'hierarchical-chunking', title: '2. Hierarchical Chunking & Metadata' },
      { id: 'hybrid-retrieval', title: '3. Hybrid Dense-Lexical Search' },
      { id: 'cross-encoder-reranking', title: '4. Cross-Encoder Reranking' },
      { id: 'guardrails-and-metrics', title: '5. Deterministic Guardrails & Metrics' }
    ],
    contentSections: [
      {
        id: 'the-naive-rag-trap',
        heading: '1. The Naive RAG Trap',
        body: [
          'Most proof-of-concept RAG systems follow an identical, fragile blueprint: take a set of PDFs, chop them into arbitrary 500-token chunks with fixed overlap, compute embeddings via an off-the-shelf model, and run top-k cosine similarity queries directly into an LLM prompt.',
          'In production, this approach quickly breaks down. Real enterprise documents contain nested tables, footnotes, multi-column layouts, and temporal disclaimers that lose semantic meaning when sliced into uniform chunks. The model frequently retrieves superficially related paragraphs while missing the governing contextual caveats.'
        ],
        callout: 'Production reality: Cosine similarity in high-dimensional embedding spaces measures topic affinity, not factual necessity or temporal validity.'
      },
      {
        id: 'hierarchical-chunking',
        heading: '2. Hierarchical Chunking & Metadata Preservation',
        body: [
          'To overcome context fragmentation, our architecture adopts parent-child hierarchical document decomposition. We preserve the full document tree structure: parent sections (1,500 – 3,000 tokens) establish thematic context, while child chunks (200 – 400 tokens) represent atomic assertions.',
          'Queries match against precise child chunks, but the retrieved payload delivered to the reasoning model injects the parent container and metadata (author, classification date, governing jurisdiction, section hierarchy). This gives the LLM the exact surrounding context without diluting vector specificity.'
        ]
      },
      {
        id: 'hybrid-retrieval',
        heading: '3. Hybrid Dense-Lexical Search',
        body: [
          'Pure vector search is notorious for failing on domain jargon, part numbers, ticker codes, and specific legislative statute citations. For example, a search for "Form 10-K Section 4.2(b)" often fails in pure vector space because numbers and punctuation carry weak semantic weight in embedding vectors.',
          'We implement reciprocal rank fusion (RRF) combining dense neural embeddings (such as BGE-M3 or OpenAI text-embedding-3-large) with sparse BM25 lexical tokenization. The system computes separate rankings and merges them using harmonic weighting, ensuring both conceptual breadth and exact lexical matches.'
        ]
      },
      {
        id: 'cross-encoder-reranking',
        heading: '4. Cross-Encoder Reranking',
        body: [
          'Dual-encoder models compute embeddings for query and document independently, sacrificing cross-attention for vector index lookup speed. To recover precision, we pass the top 40 candidates retrieved by the hybrid search through a cross-encoder model (e.g., Cohere Rerank or BGE-Reranker-Large).',
          'The cross-encoder attends simultaneously across every token in the query and candidate chunk, evaluating genuine semantic entailment and filtering out superficially similar distractor passages before context window injection.'
        ]
      },
      {
        id: 'guardrails-and-metrics',
        heading: '5. Deterministic Guardrails & Continuous Evaluation',
        body: [
          'Finally, we enforce deterministic citation validation before any generated response reaches end users. Our middleware parses every claim in the response, matches it to the exact source text coordinates in the ingested PDF, and calculates an automated Groundedness Score.',
          'If any sentence cannot be mathematically traced to an authorized citation passage, the system strips the claim or flags it for human reviewer intervention. Through this 5-stage pipeline, our enterprise deployments sustain verified hallucination rates below 0.4%.'
        ]
      }
    ]
  },
  {
    id: 'building-fault-tolerant-microservices',
    slug: 'building-fault-tolerant-microservices-with-kafka-and-go',
    title: 'The Transactional Outbox Pattern: Achieving Exactly-Once Consistency Across Distributed Microservices',
    category: 'Software Engineering',
    excerpt: 'A practical deep-dive into resolving distributed dual-write inconsistencies between relational databases and message brokers without two-phase commit overhead.',
    author: {
      name: 'Marcus Chen',
      role: 'Founder & Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: 'Feb 10, 2026',
    readingTime: '6 min read',
    tags: ['Distributed Systems', 'Kafka', 'Microservices', 'PostgreSQL'],
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tableOfContents: [
      { id: 'the-dual-write-problem', title: '1. The Dual-Write Problem' },
      { id: 'transactional-outbox-mechanics', title: '2. Transactional Outbox Mechanics' },
      { id: 'change-data-capture', title: '3. Change Data Capture with Debezium' },
      { id: 'idempotent-consumer-patterns', title: '4. Idempotent Consumer Patterns' }
    ],
    contentSections: [
      {
        id: 'the-dual-write-problem',
        heading: '1. The Dual-Write Problem in Distributed Backends',
        body: [
          'When building microservices that must update a local database and publish an event to a message broker (like Apache Kafka or RabbitMQ), you face the classic distributed dual-write dilemma: either the database commit succeeds and the broker publish fails, or vice versa.',
          'Traditional two-phase commit (2PC) protocols introduce severe latency penalties, single points of failure, and lock contention that cripple modern throughput targets.'
        ]
      },
      {
        id: 'transactional-outbox-mechanics',
        heading: '2. Transactional Outbox Mechanics',
        body: [
          'The Transactional Outbox pattern guarantees that state updates and corresponding event publications happen atomically within a single local database transaction.',
          'Instead of directly publishing to Kafka, your application inserts a record into a dedicated `outbox_events` table inside the same transaction that updates your domain entity. Since both operations share one ACID transaction, it is mathematically impossible for the event to be lost if the state change succeeds.'
        ]
      },
      {
        id: 'change-data-capture',
        heading: '3. Change Data Capture (CDC) with Debezium',
        body: [
          'A separate process reads the outbox table and forwards records to Kafka. Rather than polling the database with periodic queries (which creates I/O load and latency), we utilize Change Data Capture via Postgres WAL (Write-Ahead Log) streaming.',
          'Debezium tails the WAL directly at the engine level, streaming outbox records to Kafka with sub-10ms latency and zero impact on primary query performance.'
        ]
      },
      {
        id: 'idempotent-consumer-patterns',
        heading: '4. Idempotent Consumer Patterns',
        body: [
          'Because networks can fail during acknowledgement, consumers must expect duplicate message delivery. We mandate idempotent consumer design using unique event UUIDs stored in Redis or database unique constraint tables.',
          'If a consumer receives an event ID that has already been processed within the dedup window, it acknowledges the message and returns early without re-executing side effects.'
        ]
      }
    ]
  },
  {
    id: 'designing-for-dense-dashboards',
    slug: 'designing-for-dense-dashboards-and-enterprise-software',
    title: 'Visual Hierarchy in High-Density Interfaces: Lessons from Designing Institutional Trading Terminals',
    category: 'UI/UX',
    excerpt: 'How mathematical typography scales, micro-spacing grids, and deliberate chromatic restraints make 10,000 live data points instantly actionable without user cognitive overload.',
    author: {
      name: 'Clara Soto',
      role: 'Head of Product Design & UX',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: 'Jan 28, 2026',
    readingTime: '5 min read',
    tags: ['Design Systems', 'UI/UX', 'Data Visualization', 'Product Design'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tableOfContents: [
      { id: 'the-myth-of-blank-canvas', title: '1. The Myth of Blank Canvas Minimalism' },
      { id: 'chromatic-restraint', title: '2. Chromatic Restraint as Information Architecture' },
      { id: 'mathematical-spacing-ratios', title: '3. Mathematical Spacing Ratios' },
      { id: 'tabular-data-ergonomics', title: '4. Tabular Data Ergonomics' }
    ],
    contentSections: [
      {
        id: 'the-myth-of-blank-canvas',
        heading: '1. The Myth of Blank Canvas Minimalism in Enterprise Tools',
        body: [
          'Consumer apps succeed through generous whitespace and simplified single-action pages. But in institutional trading, logistics dispatch, and clinical radiology, artificial whitespace is a defect: it forces users to scroll and page through multiple screens, fracturing their mental model.',
          'High density is not clutter when information architecture is mathematically structured. The goal is maximum information throughput with minimal cognitive friction.'
        ]
      },
      {
        id: 'chromatic-restraint',
        heading: '2. Chromatic Restraint as Information Architecture',
        body: [
          'In a trading terminal or clinical monitor, color is a semantic signal reserved strictly for state changes, anomalies, and critical thresholds. When UI containers, cards, and borders use arbitrary saturated colors, true critical alarms become invisible.',
          'We enforce a neutral slate or obsidian palette with under 3% saturation, keeping vibrant hues (emerald, crimson, amber) strictly reserved for real-time status and directional indicators.'
        ]
      },
      {
        id: 'mathematical-spacing-ratios',
        heading: '3. Mathematical Spacing Ratios in Compact UI',
        body: [
          'In dense layouts, traditional 16px and 24px padding wastes valuable screen real estate. We employ a strict 4px base modular unit: 4px for related elements, 8px for component boundaries, and 12px for major container separation.',
          'This tight spatial relationship ensures the human eye immediately groups associated values without requiring heavy divider borders or enclosed cards.'
        ]
      },
      {
        id: 'tabular-data-ergonomics',
        heading: '4. Tabular Data Ergonomics',
        body: [
          'Tables represent the backbone of enterprise software. Numbers must always use tabular figures (fixed-width digits via `font-feature-settings: "tnum"`) and right alignment so users can scan magnitudes vertically without eye shifts.',
          'Headers must align strictly with their underlying data, sticky headers must freeze smoothly on scroll, and hover states should highlight the active row with subtle contrast shifts.'
        ]
      }
    ]
  },
  {
    id: 'ai-agents-vs-deterministic-workflows',
    slug: 'ai-agents-vs-deterministic-workflows-when-to-use-which',
    title: 'Autonomous AI Agents vs. Deterministic Workflows: A Pragmatic Engineering Guide',
    category: 'Product Development',
    excerpt: 'When to deploy probabilistic agent loops versus deterministic state machines, and how hybrid orchestrations yield the highest enterprise ROI.',
    author: {
      name: 'Julian Mercier',
      role: 'Staff ML Engineer & Agents Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: 'Jan 14, 2026',
    readingTime: '7 min read',
    tags: ['AI Agents', 'Automation', 'LangGraph', 'Enterprise Tech'],
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tableOfContents: [
      { id: 'the-agent-hype-cycle', title: '1. The Agent Hype Cycle' },
      { id: 'the-cost-of-probabilistic-loops', title: '2. The Cost of Probabilistic Loops' },
      { id: 'the-hybrid-pattern', title: '3. The Hybrid "Rail & Sandbox" Pattern' },
      { id: 'decision-matrix', title: '4. Architectural Decision Matrix' }
    ],
    contentSections: [
      {
        id: 'the-agent-hype-cycle',
        heading: '1. The Agent Hype Cycle vs. Enterprise Reliability',
        body: [
          'Autonomous multi-agent systems are currently at the peak of inflated expectations. While demos of agents recursively planning, writing code, and calling APIs look impressive, unrestricted autonomous loops in mission-critical business environments frequently suffer from token runaway, infinite loops, and unpredictability.',
          'For core business transactions (invoicing, order fulfillment, regulatory filings), enterprises demand 100% deterministic repeatability.'
        ]
      },
      {
        id: 'the-cost-of-probabilistic-loops',
        heading: '2. The Hidden Cost of Probabilistic Loops',
        body: [
          'Every LLM step in an agent cycle incurs latency (typically 800ms – 2500ms) and monetary cost. An agent taking 7 reasoning steps to parse a straightforward structured document is both 10x slower and 100x more expensive than a compiled Python regex or JSON schema validator.',
          'Where agents excel is handling unstructured semantic fuzziness: interpreting messy customer emails, deciphering ambiguous invoices, or negotiating natural language handoffs.'
        ]
      },
      {
        id: 'the-hybrid-pattern',
        heading: '3. The Hybrid "Rail & Sandbox" Pattern',
        body: [
          'The winning architectural pattern in our enterprise client work is the Hybrid Rail & Sandbox topology. We use a deterministic workflow orchestrator (such as Temporal or Step Functions) as the rigid steel track: step 1 -> step 2 -> step 3.',
          'Individual nodes along that track can be isolated AI agent sandboxes with bounded tool access and strict timeout budgets. If an agent step fails or exhausts its retry budget, the deterministic workflow captures the exception and routes to a human reviewer.'
        ]
      },
      {
        id: 'decision-matrix',
        heading: '4. Architectural Decision Matrix',
        body: [
          'Use deterministic code when the input schema is known and the business rule is mathematical.',
          'Use single-turn LLM generation when transforming unstructured text into a typed JSON schema.',
          'Use multi-turn autonomous agents only when the sequence of required tools cannot be predicted prior to runtime evaluation.'
        ]
      }
    ]
  }
];

export const BLOG_POSTS_DATA = BLOG_POSTS;
