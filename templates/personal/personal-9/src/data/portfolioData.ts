import { Project, AiExperiment, ExperienceItem, AchievementItem, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: 'Arjun Mehta',
  role: 'AI Engineer & Full-Stack Developer',
  location: 'Bengaluru, India',
  availability: 'Available for Collaborations & Opportunities',
  bio: 'I build AI-powered products, intelligent interfaces and scalable digital experiences.',
  aboutMeLong: "I'm an AI Engineer who loves building intelligent, user-centric solutions. From experimenting with models to shipping full-stack products, I enjoy turning ideas into impact.",
  email: 'hello@arjunmehta.dev',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  stats: {
    projectsCompleted: '18+',
    hackathons: '6',
    certifications: '8+',
    yearsLearning: '2+',
    technologies: '12+',
  }
};

export const ABOUT_PILLARS = [
  {
    title: 'AI Enthusiast',
    description: 'Exploring AI, ML and Generative AI to build intelligent systems.',
    icon: 'Sparkles',
    color: 'purple',
    bgLight: 'bg-purple-50 text-purple-600 border-purple-100',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Problem Solver',
    description: 'I break down complex problems and build practical solutions.',
    icon: 'Code2',
    color: 'blue',
    bgLight: 'bg-blue-50 text-blue-600 border-blue-100',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Product Builder',
    description: 'I love creating clean, scalable and delightful digital experiences.',
    icon: 'Palette',
    color: 'pink',
    bgLight: 'bg-pink-50 text-pink-600 border-pink-100',
    iconBg: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Lifelong Learner',
    description: 'Always learning, always building, always improving.',
    icon: 'GraduationCap',
    color: 'emerald',
    bgLight: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
];

export const ABOUT_STATS = [
  { label: 'Projects', value: '18+', icon: 'FolderKanban', color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Technologies', value: '12+', icon: 'Layers', color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Hackathons', value: '6', icon: 'Award', color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Certifications', value: '8+', icon: 'ShieldCheck', color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

export const PROJECTS: Project[] = [
  {
    id: 'neuraldesk',
    title: 'NeuralDesk',
    description: 'AI-powered productivity workspace to summarize docs, organize tasks and get smart suggestions.',
    category: 'Generative AI',
    badge: 'LIVE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['AI', 'React', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://neuraldesk.demo',
    caseStudyUrl: '#neuraldesk-case-study',
    overview: 'NeuralDesk transforms team knowledge workflows with deep contextual document intelligence, automated real-time action items extraction, and structured cognitive summaries.',
    highlights: [
      'Multi-modal document parsing for PDFs, slides, and audio transcriptions',
      'Semantic hybrid search with pgvector and custom reranking pipeline',
      'Agentic workflow execution for calendar scheduling and Jira integration'
    ],
    metrics: [
      { label: 'Latency', value: '<420ms' },
      { label: 'Summarization Accuracy', value: '98.4%' },
      { label: 'Weekly Active Users', value: '1,400+' }
    ]
  },
  {
    id: 'visionguard',
    title: 'VisionGuard',
    description: 'Real-time computer vision monitoring system for detecting objects and unusual activity.',
    category: 'Computer Vision',
    badge: 'PROTOTYPE',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    tags: ['Python', 'YOLO', 'OpenCV', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://visionguard.demo',
    caseStudyUrl: '#visionguard-case-study',
    overview: 'VisionGuard processes multi-stream video feeds using quantized YOLOv9 models to detect perimeter anomalies, safety hazards, and track objects with sub-second alerting.',
    highlights: [
      'Edge optimized inference running at 45 FPS on standard GPU',
      'Configurable geofencing polygon zones with immediate webhook notifications',
      'Privacy-preserving facial blur and automated telemetry logger'
    ],
    metrics: [
      { label: 'FPS Inference', value: '45 FPS' },
      { label: 'Detection mAP', value: '89.2%' },
      { label: 'False Alarm Rate', value: '<1.2%' }
    ]
  },
  {
    id: 'studypilot',
    title: 'StudyPilot',
    description: 'AI learning assistant that creates study plans, explains concepts and generates quizzes.',
    category: 'AI',
    badge: 'LIVE',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'LLM'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://studypilot.demo',
    caseStudyUrl: '#studypilot-case-study',
    overview: 'StudyPilot customizes learning paths based on student performance curves, breaking complex STEM syllabi into flashcards, interactive Socratic dialogues, and adaptive quizzes.',
    highlights: [
      'Adaptive spaced-repetition algorithm synced with concept mastery index',
      'Dynamic interactive visual tree diagrams for concept hierarchies',
      'Instant voice tutoring feedback with multi-lingual audio synthesis'
    ],
    metrics: [
      { label: 'Active Students', value: '4,200+' },
      { label: 'Retention Boost', value: '+34%' },
      { label: 'Quizzes Created', value: '18,500+' }
    ]
  },
  {
    id: 'marketlens',
    title: 'MarketLens',
    description: 'AI-powered market intelligence dashboard that turns data into insights and summaries.',
    category: 'ML',
    badge: 'EXPERIMENT',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Python', 'Pandas', 'FastAPI', 'React'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://marketlens.demo',
    caseStudyUrl: '#marketlens-case-study',
    overview: 'MarketLens ingests real-time financial feeds, news sentiment, and quarterly SEC filings to synthesize key trend reversals and risk exposure signals into concise executive briefings.',
    highlights: [
      'FinBERT sentiment analysis on earning call transcripts and news headlines',
      'Time-series forecasting models with probabilistic confidence intervals',
      'Interactive candlestick visualizer with AI-annotated support/resistance zones'
    ],
    metrics: [
      { label: 'Data Points Tracked', value: '2.5M+' },
      { label: 'Signals Generated', value: '450/day' },
      { label: 'Model Confidence', value: '92.1%' }
    ]
  },
  {
    id: 'cogniflow',
    title: 'CogniFlow Orchestrator',
    description: 'Autonomous multi-agent orchestration framework for chaining complex code synthesis tasks.',
    category: 'Generative AI',
    badge: 'LIVE',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['Python', 'LangChain', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://cogniflow.demo',
    caseStudyUrl: '#cogniflow-case-study',
    overview: 'CogniFlow connects specialized AI agents that write, test, critique, and deploy microservices with self-healing feedback loops.',
    highlights: [
      'Self-correcting test harness loop',
      'Distributed execution with Redis queue',
      'Comprehensive telemetry trace logging'
    ],
    metrics: [
      { label: 'Execution Speed', value: '3.2x faster' },
      { label: 'Code Pass Rate', value: '94.8%' },
      { label: 'Pipelines Run', value: '35k+' }
    ]
  },
  {
    id: 'spectralsearch',
    title: 'Spectral Search Engine',
    description: 'Hyper-fast vector database and semantic neural search engine built for unstructured media.',
    category: 'Web',
    badge: 'PROTOTYPE',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    tags: ['TypeScript', 'Rust', 'WebAssembly', 'Next.js'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://spectral.demo',
    caseStudyUrl: '#spectral-case-study',
    overview: 'In-browser client-side vector search indexing utilizing WebAssembly and SIMD acceleration for instant privacy-first local search.',
    highlights: [
      'Zero-server client-side neural embedding index',
      'Sub-5ms query response time across 50,000 vectors',
      'Exportable offline embeddings bundle'
    ],
    metrics: [
      { label: 'Search Latency', value: '4.8ms' },
      { label: 'Index Size', value: '<12MB' },
      { label: 'Browser Memory', value: '<45MB' }
    ]
  }
];

export const AI_LAB_EXPERIMENTS: AiExperiment[] = [
  {
    id: 'chat-assistant',
    title: 'Chat Assistant',
    badge: 'LIVE',
    icon: 'MessageSquare',
    description: 'Context-aware conversational agent with dynamic persona switching, memory retention, and markdown code formatting.',
    tags: ['Conversational AI', 'Prompt Engineering', 'Streaming'],
    demoType: 'chat',
  },
  {
    id: 'image-classifier',
    title: 'Image Classifier',
    badge: 'LIVE',
    icon: 'Image',
    description: 'Real-time computer vision classifier detecting scene objects, bounding polygons, confidence scores, and color palettes.',
    tags: ['Vision Model', 'Classification', 'Object Detection'],
    demoType: 'vision',
  },
  {
    id: 'text-analyzer',
    title: 'Text Analyzer',
    badge: 'EXPERIMENT',
    icon: 'FileText',
    description: 'Multi-dimensional NLP evaluator providing sentiment analysis, key entity extraction, tone metrics, and readability indexes.',
    tags: ['NLP', 'Sentiment Analysis', 'Summarization'],
    demoType: 'sentiment',
  },
  {
    id: 'recommendation',
    title: 'Recommendation',
    badge: 'PROTOTYPE',
    icon: 'HeartHandshake',
    description: 'Hybrid collaborative & content-based filtering model computing vector cosine similarity across personalized user profiles.',
    tags: ['Recommendation Systems', 'Embeddings', 'Cosine Similarity'],
    demoType: 'recommendation',
  },
  {
    id: 'ai-playground',
    title: 'AI Playground',
    badge: 'EXPERIMENT',
    icon: 'Settings2',
    description: 'Interactive sandbox to test temperature, top-p, system instructions, and token generation speed on various sample benchmarks.',
    tags: ['Hyperparameters', 'Benchmarking', 'Tokenization'],
    demoType: 'playground',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2026',
    role: 'AI Engineer Intern',
    company: 'NovaTech Labs',
    description: 'Worked on AI automation tools and LLM based workflows.',
    isCurrent: true,
  },
  {
    year: '2025',
    role: 'Full-Stack Developer Intern',
    company: 'PixelForge Technologies',
    description: 'Built responsive web applications and REST APIs.',
  },
  {
    year: '2024',
    role: 'Freelance Developer',
    company: 'Self Employed',
    description: 'Developed websites and web apps for startups and organizations.',
  },
];

export const EDUCATION_DATA = {
  degree: 'B.Tech in AI & Data Science',
  period: '2023 – 2027',
  institution: 'Eastbridge Institute of Technology',
  cgpa: 'CGPA: 8.7 / 10',
  coursework: [
    'Machine Learning',
    'Deep Learning',
    'Data Structures',
    'Computer Vision',
    'Database Systems',
    'Web Development',
  ],
};

export const CURRENTLY_ITEMS = [
  {
    icon: 'Sparkles',
    label: 'Learning',
    text: 'AI Agents & Multimodal Models',
    color: 'text-blue-500 bg-blue-50',
  },
  {
    icon: 'Hammer',
    label: 'Building',
    text: 'An AI-powered developer assistant',
    color: 'text-emerald-500 bg-emerald-50',
  },
  {
    icon: 'Eye',
    label: 'Exploring',
    text: 'Computer Vision & Edge AI',
    color: 'text-purple-500 bg-purple-50',
  },
  {
    icon: 'BookOpen',
    label: 'Reading',
    text: 'Research papers on Generative AI',
    color: 'text-indigo-500 bg-indigo-50',
  },
  {
    icon: 'Target',
    label: 'Goal',
    text: 'Build products that combine intelligent systems with exceptional UX.',
    color: 'text-teal-500 bg-teal-50',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: '1st-place-hackathon',
    title: '1st Place',
    subtitle: 'AI Innovation Hackathon 2026',
    badgeType: 'trophy',
    year: '2026',
    issuer: 'TechCorp & AWS'
  },
  {
    id: 'finalist-innovation',
    title: 'Finalist',
    subtitle: 'National Student Innovation Challenge 2025',
    badgeType: 'medal',
    year: '2025',
    issuer: 'Gov Innovation Council'
  },
  {
    id: 'best-ai-project',
    title: 'Best AI Project',
    subtitle: 'College Tech Expo 2025',
    badgeType: 'star',
    year: '2025',
    issuer: 'Eastbridge Tech'
  },
  {
    id: 'gcp-genai',
    title: 'Google Cloud',
    subtitle: 'Generative AI Fundamentals',
    badgeType: 'google',
    year: '2025',
    issuer: 'Google Cloud Skills Boost'
  },
  {
    id: 'azure-ai',
    title: 'Microsoft',
    subtitle: 'Azure AI Fundamentals',
    badgeType: 'microsoft',
    year: '2024',
    issuer: 'Microsoft Learn'
  },
  {
    id: 'tensorflow-cert',
    title: 'TensorFlow',
    subtitle: 'Developer Certificate',
    badgeType: 'tensorflow',
    year: '2024',
    issuer: 'TensorFlow / DeepLearning.AI'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'rag-systems',
    title: 'Understanding RAG Systems from First Principles',
    readingTime: '9 min read',
    category: 'Generative AI',
    date: 'May 12, 2026',
    author: 'Arjun Mehta',
    tags: ['RAG', 'Vector DB', 'Embeddings', 'LLMs', 'Python'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    summary: 'A deep dive into vector databases, chunking strategies, embedding models, and reranking pipelines to minimize hallucination in production LLM applications.',
    content: `Retrieval-Augmented Generation (RAG) has transformed how modern enterprise applications interact with factual information. Instead of relying solely on the parametric knowledge baked into model weights, RAG dynamically fetches verified context from high-dimension vector indices.

### Why Standard Context Windows Are Not Enough
While modern context windows have expanded to millions of tokens, simple "stuffing" introduces severe latency, high cost, and "lost-in-the-middle" recall degradation. A well-engineered retrieval pipeline optimizes both precision and speed.

### Core Architectural Pillars
1. **Semantic Chunking:** Splitting documents by semantic boundary (markdown headings, paragraph breaks) rather than rigid token counts.
2. **Dense Vector Indexing:** Utilizing HNSW (Hierarchical Navigable Small World) graph indices for sub-10ms nearest neighbor queries.
3. **Cross-Encoder Reranking:** Taking top-50 vector matches and scoring them through a cross-encoder model like Cohere or BGE-Reranker before final synthesis.
4. **HyDE (Hypothetical Document Embeddings):** Generating hypothetical query answers first to align embedding distances with candidate corpus chunks.

### Production Takeaway
Always pair vector similarity search with sparse lexical search (BM25) in a reciprocal rank fusion (RRF) algorithm. Hybrid search consistently yields 18-24% higher retrieval accuracy on domain-specific corpora.`,
  },
  {
    id: 'cv-pipeline-yolo',
    title: 'Building a Computer Vision Pipeline with YOLO',
    readingTime: '10 min read',
    category: 'Computer Vision',
    date: 'Apr 28, 2026',
    author: 'Arjun Mehta',
    tags: ['YOLOv8', 'OpenCV', 'TensorRT', 'Edge AI', 'C++'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
    summary: 'Step-by-step tutorial on training custom object detection datasets, calibrating anchor boxes, and achieving 60+ FPS inference on low-power edge hardware.',
    content: `Real-time object detection at the edge requires careful optimization between model parameter size, quantisation precision, and hardware accelerator support.

### Dataset Preparation & Augmentation
Training robust detectors starts with deliberate data collection under varying illumination and occlusion conditions. We apply Mosaic augmentation, random perspective warps, and HSV color jitter to ensure model generalization.

### Optimization Strategies for Edge Inference
- **FP16 & INT8 Quantization:** Utilizing TensorRT calibration engines to compress 32-bit floating point weights into 8-bit integers with less than 0.8% mAP degradation.
- **Zero-Copy Memory Transfers:** Binding GPU memory buffers directly to camera frame capturers via V4L2 and DMA-BUF.
- **Asynchronous Pipeline Threading:** Decoupling frame decoding, tensor inference, and bounding-box rendering into independent ring buffers.

### Result
Achieved sustained 64 FPS object tracking on an NVIDIA Jetson Orin Nano with under 12W total system power draw.`,
  },
  {
    id: 'my-first-ai-agent',
    title: 'How I Built My First Autonomous AI Agent',
    readingTime: '7 min read',
    category: 'AI Agents',
    date: 'Apr 15, 2026',
    author: 'Arjun Mehta',
    tags: ['Autonomous Agents', 'LangGraph', 'Tool Use', 'Reasoning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    summary: 'Designing autonomous agents using tool calling, self-reflection loops, state graphs, and memory management for dependable multi-step coding execution.',
    content: `Autonomous agents transition AI from passive conversational chatbots into active problem solvers capable of executing multi-turn workflows in codebases and browser environments.

### The ReAct (Reason + Act) Loop
An effective agent relies on structured state machines:
- **Observation:** Parsing tool outputs, compiler errors, or terminal responses.
- **Thought:** Evaluating intermediate progress toward the user's ultimate goal.
- **Action:** Selecting and invoking deterministic tools (file editors, shell runners, search APIs).
- **Reflection:** Validating outputs against acceptance tests before declaring task completion.

### Handling Failure States
Unsupervised agent loops can easily get caught in repetitive cycles. We introduce exponential backoff heuristics, plan revision prompts when 3 consecutive tool calls fail, and deterministic human-in-the-loop interruption checkpoints.`,
  },
  {
    id: 'fastapi-ml-deploy',
    title: 'Deploying ML Models with FastAPI & Docker',
    readingTime: '9 min read',
    category: 'Machine Learning',
    date: 'Mar 30, 2026',
    author: 'Arjun Mehta',
    tags: ['FastAPI', 'Docker', 'ONNX', 'Cloud Run', 'Production'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    summary: 'Best practices for packaging PyTorch and ONNX models into containerized FastAPI microservices with batching, health probes, and auto-scaling.',
    content: `Serving machine learning models in production demands robust throughput, dynamic batching, and lightweight container images.

### Key Deployment Architecture
- **Async Endpoints with ThreadPool Offloading:** Keeping FastAPI's event loop unblocked while CPU/GPU heavy matrix operations execute in worker threads.
- **Dynamic Request Batching:** Queueing incoming prediction requests over a 5ms window to execute batched matrix multiplications, multiplying throughput by 3.8x.
- **Health Checks & Graceful Warmup:** Pre-loading weights and running a dummy tensor forward pass during lifespan startup events before accepting live ingress traffic.`,
  },
  {
    id: 'vector-search-embeddings',
    title: 'Designing High-Performance Vector Search at Scale',
    readingTime: '8 min read',
    category: 'Generative AI',
    date: 'Mar 15, 2026',
    author: 'Arjun Mehta',
    tags: ['Vector Search', 'HNSW', 'Quantization', 'Database'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=600&auto=format&fit=crop',
    summary: 'An architectural exploration of vector similarity algorithms, Product Quantization, and inverted file indices for million-scale datasets.',
    content: `As embedding databases scale past millions of vectors, memory footprint and query latency become critical bottlenecks.

### Comparing Indexing Algorithms
- **Flat (Exact L2/Cosine):** 100% recall but O(N) linear time complexity.
- **IVF-Flat (Inverted File):** Clusters vectors into Voronoi cells to search only centroid candidates.
- **HNSW (Hierarchical Navigable Small World):** Multi-layer graph offering sub-linear search with 99%+ recall.
- **Product Quantization (PQ):** Decomposes vector spaces into low-dimensional sub-spaces, cutting RAM requirements by up to 95%.`,
  },
  {
    id: 'ai-ux-principles',
    title: 'UX Principles for Generative AI Interfaces',
    readingTime: '6 min read',
    category: 'Product Design',
    date: 'Feb 20, 2026',
    author: 'Arjun Mehta',
    tags: ['UX Design', 'Streaming', 'Generative AI', 'Human-AI'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
    summary: 'How to design delightful, transparent user experiences around probabilistic AI models with optimistic updates, progressive rendering, and undo states.',
    content: `Designing interfaces for probabilistic generative models requires rethinking traditional deterministic UI patterns.

### Core UX Rules for AI Products
1. **Streaming Over Spinners:** Progressive token rendering decreases perceived latency and maintains user engagement.
2. **Cite Sources & Grounding:** Give users immediate inline inspection tools to verify cited facts and references.
3. **Graceful Degradation:** When rate limits or high-load conditions occur, offer cached responses and clear retry options rather than generic error banners.
4. **Editable Outputs:** Always allow users to tweak, branch, and refine generated outputs seamlessly.`,
  },
];
