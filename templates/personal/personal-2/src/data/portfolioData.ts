import { Project, TechNode, ExperienceItem, EducationItem, Achievement, Article, Repository } from '../types';

export const PROFILE_DATA = {
  name: "Arjun Mehta",
  role: "AI Engineer & Full-Stack Developer",
  location: "Bengaluru, India",
  email: "hello@arjunmehta.dev",
  tagline: "Building intelligent systems that solve real-world problems.",
  shortBio: "AI Engineer passionate about machine learning, generative AI, computer vision and modern web technologies. I enjoy turning complex ideas into practical, beautifully designed products.",
  aboutDetailed: "AI Engineer passionate about machine learning, generative AI, computer vision and modern web technologies. I enjoy turning complex ideas into practical, beautifully designed products.",
  availability: "Open to AI Projects, Internships & Collaborations",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  headline: "Building Intelligence. Designing Possibilities.",
  heroSupportingText: "I build AI-powered products, intelligent interfaces and scalable digital experiences.",
  stats: [
    { label: "Projects Completed", value: 18, suffix: "+" },
    { label: "Core Technologies", value: 12, suffix: "+" },
    { label: "Hackathons Won/Finalist", value: 6, suffix: "" },
    { label: "Certifications", value: 8, suffix: "" },
  ],
  currently: {
    learning: "AI Agents & Multimodal Models",
    building: "An AI-powered developer assistant",
    exploring: "Computer Vision + Edge AI",
    reading: "Research papers on Generative AI",
    goal: "Build products that combine intelligent systems with exceptional UX."
  }
};

export const ABOUT_CARDS = [
  {
    id: "ai-eng",
    title: "AI ENGINEERING",
    description: "Building intelligent systems using ML and Generative AI.",
    details: "Developing end-to-end machine learning pipelines, fine-tuning LLMs, designing RAG architectures, and deploying low-latency neural inference models.",
    icon: "Brain",
    accent: "from-cyan-500/20 to-blue-600/10",
    border: "group-hover:border-cyan-400/50",
    color: "#38bdf8"
  },
  {
    id: "soft-dev",
    title: "SOFTWARE DEVELOPMENT",
    description: "Creating scalable and responsive applications.",
    details: "Crafting resilient microservices, asynchronous FastAPI backends, type-safe React/TypeScript architectures, and high-performance database schemas.",
    icon: "Code2",
    accent: "from-violet-500/20 to-purple-600/10",
    border: "group-hover:border-violet-400/50",
    color: "#a855f7"
  },
  {
    id: "prob-solv",
    title: "PROBLEM SOLVING",
    description: "Breaking complex problems into practical solutions.",
    details: "Applying algorithmic thinking, mathematical modeling, and optimization strategies to transform ambiguity into efficient, testable engineering systems.",
    icon: "Cpu",
    accent: "from-emerald-500/20 to-teal-600/10",
    border: "group-hover:border-emerald-400/50",
    color: "#34d399"
  },
  {
    id: "cont-learn",
    title: "CONTINUOUS LEARNING",
    description: "Constantly exploring new technologies and ideas.",
    details: "Active reader of ArXiv machine learning preprints, open-source contributor, and competitive participant in national AI hackathons and tech expos.",
    icon: "Sparkles",
    accent: "from-amber-500/20 to-orange-600/10",
    border: "group-hover:border-amber-400/50",
    color: "#fbbf24"
  }
];

export const TECH_UNIVERSE: TechNode[] = [
  {
    id: "python",
    name: "Python",
    category: "ai-ml",
    icon: "FileCode",
    description: "Primary language for AI, ML experimentation and backend development.",
    proficiency: 95,
    experienceYears: "4+ years",
    keyUseCases: ["PyTorch pipelines", "FastAPI microservices", "Data analytics with Pandas/NumPy", "Async task workers"],
    color: "#38bdf8"
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ai-ml",
    icon: "Activity",
    description: "Framework for building and training custom deep neural networks.",
    proficiency: 90,
    experienceYears: "3 years",
    keyUseCases: ["Vision transformers", "YOLO fine-tuning", "Custom loss functions", "TorchScript compilation"],
    color: "#f97316"
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "ai-ml",
    icon: "Layers",
    description: "End-to-end open source platform for machine learning models.",
    proficiency: 82,
    experienceYears: "2.5 years",
    keyUseCases: ["Keras architectures", "TensorFlow Lite edge deployment", "TF Data pipelines"],
    color: "#fb923c"
  },
  {
    id: "openai",
    name: "OpenAI APIs",
    category: "ai-ml",
    icon: "Sparkles",
    description: "Integration of state-of-the-art LLMs, embeddings and tool calls.",
    proficiency: 92,
    experienceYears: "2+ years",
    keyUseCases: ["Function calling", "Structured outputs", "Embeddings for vector retrieval", "Fine-tuned assistant prompts"],
    color: "#10b981"
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "ai-ml",
    icon: "GitBranch",
    description: "Composing multi-agent chains, memory systems, and RAG pipelines.",
    proficiency: 88,
    experienceYears: "2 years",
    keyUseCases: ["Vector store retrieval", "Agent tool execution", "Document chunking", "Conversational memory"],
    color: "#06b6d4"
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: "Atom",
    description: "Declarative UI engineering with TypeScript and modern hooks.",
    proficiency: 94,
    experienceYears: "3.5 years",
    keyUseCases: ["Interactive dashboards", "Real-time state engines", "Custom canvas visualizers", "Tailwind styling"],
    color: "#60a5fa"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    icon: "Code",
    description: "Modern ESNext standards for high-concurrency client-server interaction.",
    proficiency: 92,
    experienceYears: "4 years",
    keyUseCases: ["Async/await event loops", "DOM manipulation", "WebSockets", "Worker threads"],
    color: "#facc15"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend-cloud",
    icon: "Server",
    description: "Event-driven runtime for high-throughput API gateways and workers.",
    proficiency: 86,
    experienceYears: "3 years",
    keyUseCases: ["REST API backends", "SSE / WebSocket streaming", "Auth middleware", "Data aggregation"],
    color: "#22c55e"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend-cloud",
    icon: "Database",
    description: "Relational database with pgvector extensions for hybrid search.",
    proficiency: 88,
    experienceYears: "3 years",
    keyUseCases: ["Relational schemas", "pgvector semantic embeddings", "ACID transactions", "Query indexing"],
    color: "#3b82f6"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend-cloud",
    icon: "HardDrive",
    description: "Flexible document store for dynamic unstructured application data.",
    proficiency: 85,
    experienceYears: "2.5 years",
    keyUseCases: ["Session logs", "Unstructured user documents", "Real-time analytics caching"],
    color: "#4ade80"
  },
  {
    id: "docker",
    name: "Docker",
    category: "backend-cloud",
    icon: "Box",
    description: "Containerization for reproducible ML training and production microservices.",
    proficiency: 87,
    experienceYears: "2.5 years",
    keyUseCases: ["Multi-stage builds", "GPU container passthrough", "Microservice orchestrations"],
    color: "#0284c7"
  },
  {
    id: "git",
    name: "Git",
    category: "backend-cloud",
    icon: "GitPullRequest",
    description: "Distributed version control and CI/CD automated workflow management.",
    proficiency: 92,
    experienceYears: "4 years",
    keyUseCases: ["Branching workflows", "GitHub Actions CI/CD", "Automated linting & testing"],
    color: "#ef4444"
  },
  {
    id: "aws",
    name: "AWS",
    category: "backend-cloud",
    icon: "Cloud",
    description: "Cloud infrastructure for ML model serving and scalable cloud storage.",
    proficiency: 80,
    experienceYears: "2 years",
    keyUseCases: ["EC2 GPU instances", "S3 dataset lakes", "Lambda serverless functions", "ECS / Fargate"],
    color: "#f59e0b"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "neuraldesk",
    number: "01",
    title: "NeuralDesk",
    subtitle: "AI-powered productivity workspace",
    description: "An intelligent productivity platform that uses AI to summarize documents, organize tasks and generate contextual recommendations in real time.",
    categories: ["ALL", "AI", "GENERATIVE AI", "WEB"],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "pgvector"],
    status: "LIVE",
    metrics: [
      { label: "Document Processing", value: "< 1.2s" },
      { label: "Summary Accuracy", value: "98.4%" },
      { label: "Active Users", value: "3,200+" }
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    githubUrl: "https://github.com/arjunmehta/neuraldesk",
    liveUrl: "https://neuraldesk.demo.app",
    caseStudy: {
      problem: "Knowledge workers spend over 30% of their workday reading dense 40+ page documents, manually synthesizing action items, and cross-referencing past project notes across fragmented silos.",
      idea: "Design a unified command workspace that pairs local document vectorization with hybrid search and streaming LLM synthesis to extract key action items and contextual suggestions instantly.",
      architecture: {
        title: "Microservice Event Architecture",
        description: "Decoupled asynchronous ingestion pipeline with vector embeddings and reactive streaming frontend.",
        nodes: [
          { name: "React Frontend", type: "client", detail: "TypeScript + Tailwind + Streaming UI reader" },
          { name: "FastAPI Gateway", type: "api", detail: "Async endpoint proxy & JWT session security" },
          { name: "Embedding Worker", type: "ml-model", detail: "Text-embedding-3-small batch pipeline" },
          { name: "Postgres + pgvector", type: "database", detail: "Hybrid HNSW index + relational metadata" },
          { name: "OpenAI GPT Engine", type: "ml-model", detail: "Context-grounded streaming reasoning" }
        ]
      },
      techStack: [
        { category: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Lucide Icons", "Framer Motion"] },
        { category: "Backend & ML", items: ["FastAPI", "Python 3.11", "LangChain", "OpenAI API", "Celery"] },
        { category: "Database & Storage", items: ["PostgreSQL 16", "pgvector Extension", "Redis Cache", "AWS S3"] }
      ],
      developmentProcess: [
        "Benchmarked vector search latency across Pinecone, Qdrant, and PostgreSQL pgvector (selected pgvector with HNSW for zero network hop latency).",
        "Implemented recursive character text splitters with semantic boundary preservation for accurate chunking.",
        "Built server-sent event (SSE) endpoints in FastAPI to stream synthesized summaries to React at 60 tokens/sec.",
        "Engineered intelligent citation tagging that anchors generated bullets back to exact page/paragraph coordinates."
      ],
      keyFeatures: [
        { title: "Intelligent Document Synthesis", description: "Instantly reduces 50-page PDFs into structured executive briefs with citations.", icon: "FileText" },
        { title: "Contextual Task Extraction", description: "Auto-detects action verbs and deadlines, populating priority task boards.", icon: "CheckSquare" },
        { title: "Semantic Knowledge Graph", description: "Cross-references disparate notes to surface hidden conceptual connections.", icon: "Network" },
        { title: "Real-time AI Copilot", description: "Conversational assistant grounded strictly in your verified uploaded document corpus.", icon: "Bot" }
      ],
      results: [
        { metric: "68% Reduction", description: "In average time spent digesting technical RFP documents." },
        { metric: "1.18s P95 Latency", description: "From file upload to complete semantic vector indexing." },
        { metric: "3,200+ Active Users", description: "Adopted across student hackathon teams and research labs." }
      ],
      challenges: [
        "Handling massive unstructured tables in complex PDF formats without losing tabular semantic coherence.",
        "Preventing hallucinated citations by enforcing strict temperature controls and verify-before-emit prompts."
      ],
      whatILearned: [
        "How to tune HNSW vector indexing parameters (m=16, ef_construction=64) for maximum query speed in PostgreSQL.",
        "The critical importance of optimistic UI updates and streaming state management for perceptual speed."
      ],
      codeSnippet: {
        language: "python",
        fileName: "rag_pipeline.py",
        code: `from fastapi import FastAPI, UploadFile\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\nfrom sqlalchemy import select\nimport openai\n\nasync def process_document_chunks(doc_text: str, doc_id: str, db_session):\n    splitter = RecursiveCharacterTextSplitter(chunk_size=700, chunk_overlap=120)\n    chunks = splitter.split_text(doc_text)\n    \n    embeddings = await openai.embeddings.create(\n        model="text-embedding-3-small",\n        input=chunks\n    )\n    \n    records = [\n        DocumentChunk(doc_id=doc_id, text=chunk, embedding=emb.embedding)\n        for chunk, emb in zip(chunks, embeddings.data)\n    ]\n    db_session.add_all(records)\n    await db_session.commit()\n    return {"status": "indexed", "total_chunks": len(chunks)}`
      }
    }
  },
  {
    id: "visionguard",
    number: "02",
    title: "VisionGuard",
    subtitle: "Real-time computer vision monitoring system",
    description: "A computer vision application designed to detect objects and unusual activity from live camera feeds with sub-35ms inference.",
    categories: ["ALL", "AI", "ML", "COMPUTER VISION"],
    technologies: ["Python", "PyTorch", "OpenCV", "YOLO", "FastAPI", "WebSockets"],
    status: "PROTOTYPE",
    metrics: [
      { label: "Inference Latency", value: "32 ms" },
      { label: "Mean Average Precision", value: "91.8% mAP" },
      { label: "Target FPS", value: "60 FPS" }
    ],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1600&q=80",
    githubUrl: "https://github.com/arjunmehta/visionguard",
    caseStudy: {
      problem: "Traditional surveillance systems require exhaustive manual monitoring and generate hundreds of false alarms, causing critical anomaly notifications to be missed.",
      idea: "Deploy an edge-optimized YOLOv8 model running concurrent tracking and optical flow analysis to detect anomalies, track trajectories, and stream live bounding boxes via WebSockets.",
      architecture: {
        title: "Real-time Stream Pipeline",
        description: "Zero-copy frame ingestion buffer with TensorRT inference acceleration and WebSocket broadcasting.",
        nodes: [
          { name: "RTSP / WebCam Feed", type: "client", detail: "60 FPS video frame buffer" },
          { name: "OpenCV Preprocessor", type: "api", detail: "Frame normalization & resizing (640x640)" },
          { name: "YOLOv8 PyTorch / TensorRT", type: "ml-model", detail: "Quantized FP16 inference engine" },
          { name: "ByteTrack Tracker", type: "ml-model", detail: "Kalman filter identity persistence" },
          { name: "WebSocket Dispatcher", type: "api", detail: "Low-latency JSON coordinates + alert triggers" }
        ]
      },
      techStack: [
        { category: "Vision & Deep Learning", items: ["PyTorch", "YOLOv8", "OpenCV", "TensorRT", "ByteTrack"] },
        { category: "Backend & Concurrency", items: ["FastAPI", "WebSockets", "AsyncIO", "NumPy", "Uvicorn"] },
        { category: "Frontend Interface", items: ["React", "HTML5 Canvas 2D Overlay", "Tailwind CSS", "WebRTC"] }
      ],
      developmentProcess: [
        "Trained YOLOv8s on custom labeled surveillance dataset containing 14,000 security camera frames.",
        "Applied FP16 model quantization to slash memory footprint by 50% without dropping mAP.",
        "Constructed an asynchronous worker thread pool in Python to prevent frame capture I/O from stalling neural inference.",
        "Built an interactive HTML5 Canvas bounding box renderer in React with visual trajectory trails."
      ],
      keyFeatures: [
        { title: "Sub-35ms Multi-Object Detection", description: "Processes 60 FPS live video feeds with real-time class classification.", icon: "Eye" },
        { title: "Kalman Filter Trajectory Tracking", description: "Maintains persistent identity across brief occlusions and crossing paths.", icon: "Activity" },
        { title: "Automated Anomaly Heatmaps", description: "Highlights zone intrusions, abandoned objects, and irregular motion velocities.", icon: "ShieldAlert" },
        { title: "WebSocket Event Broadcasting", description: "Instantly transmits alert payloads to connected security dashboards.", icon: "Zap" }
      ],
      results: [
        { metric: "91.8% mAP@0.5", description: "Precision achieved across challenging low-light indoor environments." },
        { metric: "32ms End-to-End", description: "Total latency from camera lens capture to browser overlay render." },
        { metric: "Zero Dropped Frames", description: "Sustained during continuous 4-hour stress testing." }
      ],
      challenges: [
        "Mitigating frame jitter and network congestion over standard consumer WiFi connections.",
        "Resolving false positives caused by rapid lighting changes and reflection glare on glass partitions."
      ],
      whatILearned: [
        "In-depth knowledge of GPU tensor memory layouts and zero-copy CUDA memory pinned buffers.",
        "Techniques for smoothing bounding box jitter using exponential moving averages."
      ],
      codeSnippet: {
        language: "python",
        fileName: "vision_streamer.py",
        code: `import cv2\nimport torch\nfrom ultralytics import YOLO\n\nmodel = YOLO("yolov8s.pt")\n\ndef process_frame(frame_bytes):\n    # Decode frame and run inference\n    nparr = np.frombuffer(frame_bytes, np.uint8)\n    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)\n    \n    results = model.predict(source=img, conf=0.45, verbose=False)[0]\n    detections = []\n    for box in results.boxes:\n        x1, y1, x2, y2 = box.xyxy[0].tolist()\n        detections.append({\n            "bbox": [round(x, 1) for x in [x1, y1, x2, y2]],\n            "class": model.names[int(box.cls[0])],\n            "confidence": round(float(box.conf[0]), 3)\n        })\n    return detections`
      }
    }
  },
  {
    id: "studypilot",
    number: "03",
    title: "StudyPilot",
    subtitle: "Personalized AI learning assistant",
    description: "An AI-powered learning platform that generates tailored study plans, explains complex concepts through analogies, and creates adaptive quizzes.",
    categories: ["ALL", "AI", "GENERATIVE AI", "WEB"],
    technologies: ["React", "Node.js", "Python", "LLM API", "MongoDB", "Tailwind"],
    status: "LIVE",
    metrics: [
      { label: "Concepts Simplified", value: "14,500+" },
      { label: "Retention Boost", value: "+42%" },
      { label: "Satisfaction Rate", value: "96.5%" }
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    githubUrl: "https://github.com/arjunmehta/studypilot",
    liveUrl: "https://studypilot.demo.app",
    caseStudy: {
      problem: "Students frequently struggle with rigid, one-size-fits-all curricula that fail to adapt to individual knowledge gaps, leading to cramming and low long-term retention.",
      idea: "Create an adaptive tutor that models student comprehension using Bayesian knowledge tracing and dynamically crafts analogies, step-by-step breakdowns, and progressive quizzes.",
      architecture: {
        title: "Adaptive Mastery Architecture",
        description: "Dynamic difficulty scaling engine with persistent student mastery vectors.",
        nodes: [
          { name: "React Student App", type: "client", detail: "Interactive flashcards, quiz arena, study calendar" },
          { name: "Node.js API Hub", type: "api", detail: "Authentication, progress calculation, rate-limiting" },
          { name: "Mastery Engine (Python)", type: "ml-model", detail: "Bayesian Knowledge Tracing skill graph" },
          { name: "MongoDB Cluster", type: "database", detail: "Curriculum trees, question banks, study logs" },
          { name: "LLM Pedagogical Prompter", type: "ml-model", detail: "Tailored multi-level explanations" }
        ]
      },
      techStack: [
        { category: "Frontend", items: ["React 19", "Tailwind CSS", "Zustand", "Lucide React", "Canvas Confetti"] },
        { category: "Backend & Logic", items: ["Node.js", "Express", "Python", "OpenAI / Gemini SDK"] },
        { category: "Database", items: ["MongoDB Atlas", "Mongoose ORM", "Redis Session Store"] }
      ],
      developmentProcess: [
        "Structured a comprehensive taxonomy of 200+ STEM topics with prerequisite dependency trees.",
        "Built automated rubric evaluation to grade open-ended conceptual explanations from students.",
        "Created an algorithmic spaced-repetition scheduler inspired by the SuperMemo SM-2 algorithm.",
        "Designed an intuitive UI with interactive knowledge heatmaps indicating mastery depth."
      ],
      keyFeatures: [
        { title: "Analogous Concept Explainer", description: "Translates abstract mathematical concepts into intuitive real-world metaphors.", icon: "BookOpen" },
        { title: "Dynamic Adaptive Quizzes", description: "Calibrates question difficulty in real time based on previous response confidence.", icon: "HelpCircle" },
        { title: "Automated Study Timetable", description: "Synthesizes exam deadlines into balanced daily micro-goals.", icon: "Calendar" },
        { title: "Knowledge Gap Diagnostics", description: "Pinpoints foundational misconceptions before advanced topics are introduced.", icon: "TrendingUp" }
      ],
      results: [
        { metric: "+42% Improvement", description: "In post-assessment retention scores among student test groups." },
        { metric: "14,500+ Concepts", description: "Explained across machine learning, calculus, algorithms and physics." },
        { metric: "96.5% Rating", description: "Positive feedback from college study group beta testers." }
      ],
      challenges: [
        "Designing system instructions that encourage students to think through answers rather than giving immediate solutions.",
        "Maintaining deterministic schema validation for auto-generated multi-choice questions."
      ],
      whatILearned: [
        "The cognitive science behind spaced repetition and retrieval practice.",
        "How to use JSON Schema constraints to guarantee 100% parseable structured quiz objects."
      ],
      codeSnippet: {
        language: "typescript",
        fileName: "quizGenerator.ts",
        code: `export async function generateAdaptiveQuiz(topic: string, studentMasteryLevel: number) {\n  const prompt = \`Generate 4 progressive assessment questions for \${topic}.\nTarget Bloom's taxonomy level: \${studentMasteryLevel > 70 ? "Evaluate / Create" : "Apply / Analyze"}.\`;\n\n  const response = await ai.models.generateContent({\n    model: "gemini-3.7-flash",\n    contents: prompt,\n    config: {\n      responseMimeType: "application/json",\n      responseSchema: QuizSchema,\n    }\n  });\n  return JSON.parse(response.text);\n}`
      }
    }
  },
  {
    id: "marketlens",
    number: "04",
    title: "MarketLens",
    subtitle: "AI-powered market intelligence dashboard",
    description: "A data analytics platform that transforms complex financial datasets and macro indicators into interactive visual insights and AI-generated summaries.",
    categories: ["ALL", "AI", "ML", "WEB"],
    technologies: ["Python", "Pandas", "FastAPI", "React", "PostgreSQL", "Recharts"],
    status: "EXPERIMENT",
    metrics: [
      { label: "Data Points Processed", value: "2.4M+" },
      { label: "Forecasting Precision", value: "87.2%" },
      { label: "Daily Live Feeds", value: "48+" }
    ],
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80",
    githubUrl: "https://github.com/arjunmehta/marketlens",
    caseStudy: {
      problem: "Financial market data is overwhelmingly noisy and fragmented across earnings calls, regulatory filings, and volatile price ticks, making manual synthesis slow and prone to bias.",
      idea: "Unify quantitative time-series indicators with NLP sentiment analysis on earnings transcripts, feeding into a clean predictive dashboard with automatic summary briefs.",
      architecture: {
        title: "Hybrid Analytics Pipeline",
        description: "Concurrent time-series ETL with transformer-based financial sentiment scoring.",
        nodes: [
          { name: "React Financial Terminal", type: "client", detail: "Interactive candlestick & volume charts (D3/Recharts)" },
          { name: "FastAPI REST Server", type: "api", detail: "High-speed data aggregation & caching" },
          { name: "Pandas / NumPy Engine", type: "ml-model", detail: "Bollinger bands, RSI, Moving Averages" },
          { name: "FinBERT Sentiment Model", type: "ml-model", detail: "Transcript sentiment extraction" },
          { name: "TimescaleDB / Postgres", type: "database", detail: "High-frequency tick storage" }
        ]
      },
      techStack: [
        { category: "Analytics & ML", items: ["Python", "Pandas", "NumPy", "FinBERT", "Scikit-Learn", "FastAPI"] },
        { category: "Data Visualization", items: ["React", "Recharts", "D3.js", "Tailwind CSS"] },
        { category: "Database & Ingestion", items: ["PostgreSQL", "Redis", "yfinance API", "Celery"] }
      ],
      developmentProcess: [
        "Constructed automated data pipelines to ingest daily market statistics and SEC 10-K filings.",
        "Integrated FinBERT to score sentiment on earnings call transcripts (-1.0 Bearish to +1.0 Bullish).",
        "Developed custom technical indicator algorithms (MACD, RSI, Exponential Moving Averages).",
        "Built responsive charting components with brush/zoom tools and instant AI synthesis overlays."
      ],
      keyFeatures: [
        { title: "Automated Executive Summaries", description: "Translates 100-page earnings filings into 3-bullet macroeconomic takeaways.", icon: "BarChart3" },
        { title: "Sentiment Momentum Tracking", description: "Correlates executive sentiment trends directly against price action history.", icon: "TrendingUp" },
        { title: "Custom Metric Alerts", description: "Triggers notifications when volatility metrics breach historical thresholds.", icon: "BellRing" },
        { title: "Interactive Scenario Simulation", description: "Test hypothetical macroeconomic rate shifts on portfolio performance.", icon: "Sliders" }
      ],
      results: [
        { metric: "2.4M+ Points", description: "Cleaned and indexed across 50 tech equity tickers." },
        { metric: "87.2% Precision", description: "In identifying sentiment inflection points in quarterly transcripts." },
        { metric: "Under 200ms", description: "Query response time for multi-year historical time series." }
      ],
      challenges: [
        "Managing heavy financial time-series computations without blocking async event loops.",
        "Handling missing historical data intervals and dividend adjustments accurately."
      ],
      whatILearned: [
        "How to optimize NumPy vector operations for sub-millisecond technical indicator calculations.",
        "Techniques for rendering large data points efficiently in React using canvas and SVG layering."
      ],
      codeSnippet: {
        language: "python",
        fileName: "technical_indicators.py",
        code: `import numpy as np\nimport pandas as pd\n\ndef calculate_rsi(prices: pd.Series, period: int = 14) -> pd.Series:\n    delta = prices.diff()\n    gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()\n    loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()\n    \n    rs = gain / (loss + 1e-9)\n    rsi = 100 - (100 / (1 + rs))\n    return rsi.round(2)`
      }
    }
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-2026",
    year: "2026",
    role: "AI Engineer Intern",
    company: "NovaTech Labs",
    location: "Bengaluru, India",
    type: "Internship • Full-time",
    description: "Developed AI-powered automation tools and experimented with LLM-based workflows.",
    achievements: [
      "Engineered automated RAG evaluation benchmarks across 500+ internal query sets, boosting retrieval precision by 24%.",
      "Built custom LangChain agent workflows integrating proprietary internal tools and vector databases.",
      "Collaborated with senior researchers on latency optimization for quantized LLM inference on edge servers."
    ],
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI APIs", "PyTorch", "Docker", "pgvector"]
  },
  {
    id: "exp-2025",
    year: "2025",
    role: "Full-Stack Developer Intern",
    company: "PixelForge Technologies",
    location: "Bengaluru, India",
    type: "Internship",
    description: "Built responsive web applications and REST APIs for internal products.",
    achievements: [
      "Architected React + TypeScript dashboards used daily by 150+ engineers to monitor cloud deployment health.",
      "Implemented resilient RESTful API endpoints with Express and PostgreSQL, reducing query latency by 35%.",
      "Configured automated GitHub Actions CI/CD pipelines with comprehensive unit and integration tests."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Git"]
  },
  {
    id: "exp-2024",
    year: "2024",
    role: "Freelance Developer",
    company: "Self-Employed / Startups",
    location: "Bengaluru / Remote",
    type: "Freelance & Projects",
    description: "Designed and developed web applications for startups and student organizations.",
    achievements: [
      "Delivered 4 custom production web apps for early-stage tech founders and student entrepreneurship clubs.",
      "Engineered bespoke interactive UI components, Stripe payment integrations, and responsive landing pages.",
      "Mentored junior college developers in modern JavaScript, Git version control, and algorithmic problem solving."
    ],
    technologies: ["JavaScript", "React", "Python", "MongoDB", "Tailwind CSS", "REST APIs"]
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Technology",
  field: "Artificial Intelligence & Data Science",
  institution: "Eastbridge Institute of Technology",
  duration: "2023 — 2027",
  cgpa: "8.7 / 10",
  location: "Bengaluru, India",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Data Structures & Algorithms",
    "Computer Vision",
    "Database Systems",
    "Web Development",
    "Natural Language Processing",
    "Operating Systems"
  ],
  highlights: [
    "Consistently ranked in the top 5% of the AI & Data Science department.",
    "Led the student Artificial Intelligence & Robotics Society, hosting workshops for 200+ students.",
    "Published undergraduate paper on real-time edge vision algorithms."
  ]
};

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ach-1",
    title: "1st Place — AI Innovation Hackathon 2026",
    organization: "National Tech Forum",
    year: "2026",
    category: "Hackathon",
    description: "Built an autonomous multi-agent disaster response coordination prototype in a 36-hour sprint.",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-500/10",
    skills: ["AI Agents", "FastAPI", "Computer Vision", "Real-time WebSockets"]
  },
  {
    id: "ach-2",
    title: "Finalist — National Student Innovation Challenge 2025",
    organization: "Ministry of Education & Innovation",
    year: "2025",
    category: "Award",
    description: "Recognized among top 15 student projects nationwide for intelligent assistive reading software.",
    badgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
    skills: ["NLP", "Accessibility Tech", "Python", "Full-Stack"]
  },
  {
    id: "ach-3",
    title: "Best AI Project — College Tech Expo 2025",
    organization: "Eastbridge Institute of Technology",
    year: "2025",
    category: "Award",
    description: "Awarded 1st prize for VisionGuard real-time camera tracking and optical flow system.",
    badgeColor: "text-violet-400 border-violet-400/30 bg-violet-500/10",
    skills: ["PyTorch", "YOLOv8", "OpenCV", "Edge Computing"]
  },
  {
    id: "ach-4",
    title: "Google Cloud — Generative AI Fundamentals",
    organization: "Google Cloud",
    year: "2025",
    category: "Certification",
    credentialId: "GCP-GENAI-984210",
    description: "Certified in foundational LLM architectures, prompt design, and Vertex AI deployment.",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-500/10",
    skills: ["Generative AI", "Vertex AI", "Prompt Engineering", "Cloud Architecture"]
  },
  {
    id: "ach-5",
    title: "Microsoft — Azure AI Fundamentals",
    organization: "Microsoft Certified",
    year: "2025",
    category: "Certification",
    credentialId: "MS-AI900-64219",
    description: "Demonstrated proficiency in computer vision, conversational AI, and machine learning workloads on Azure.",
    badgeColor: "text-sky-400 border-sky-400/30 bg-sky-500/10",
    skills: ["Azure Cognitive Services", "Computer Vision", "Conversational AI"]
  },
  {
    id: "ach-6",
    title: "TensorFlow Developer Certificate",
    organization: "TensorFlow Certificate Program",
    year: "2024",
    category: "Certification",
    credentialId: "TF-DEV-55102",
    description: "Validated hands-on expertise building CNNs, RNNs, NLP models, and time series predictors.",
    badgeColor: "text-orange-400 border-orange-400/30 bg-orange-500/10",
    skills: ["TensorFlow", "Keras", "Deep Learning", "Time Series"]
  }
];

export const DEVELOPER_METRICS = {
  contributions: 247,
  repositories: 42,
  projects: 18,
  openSourceContributions: 11,
  languages: [
    { name: "Python", percentage: 42, color: "#38bdf8" },
    { name: "JavaScript", percentage: 25, color: "#facc15" },
    { name: "TypeScript", percentage: 15, color: "#60a5fa" },
    { name: "Java", percentage: 10, color: "#f97316" },
    { name: "Other", percentage: 8, color: "#a855f7" }
  ]
};

export const FEATURED_REPOSITORIES: Repository[] = [
  {
    name: "neuraldesk-core",
    description: "Asynchronous RAG engine with PostgreSQL pgvector and streaming LLM token emitter.",
    language: "Python",
    languageColor: "#38bdf8",
    stars: 128,
    forks: 34,
    updatedAt: "3 days ago",
    url: "https://github.com/arjunmehta/neuraldesk-core",
    tags: ["rag", "fastapi", "pgvector", "openai"]
  },
  {
    name: "visionguard-edge",
    description: "YOLOv8 & ByteTrack real-time surveillance inference pipeline over WebSockets.",
    language: "Python",
    languageColor: "#38bdf8",
    stars: 94,
    forks: 21,
    updatedAt: "1 week ago",
    url: "https://github.com/arjunmehta/visionguard-edge",
    tags: ["computer-vision", "yolo", "opencv", "websockets"]
  },
  {
    name: "studypilot-frontend",
    description: "Adaptive student learning cockpit built with React 19, Tailwind, and interactive canvas.",
    language: "TypeScript",
    languageColor: "#60a5fa",
    stars: 76,
    forks: 18,
    updatedAt: "2 weeks ago",
    url: "https://github.com/arjunmehta/studypilot-frontend",
    tags: ["react", "typescript", "edtech", "tailwind"]
  },
  {
    name: "marketlens-analytics",
    description: "Time-series macroeconomic quantitative indicator library with FinBERT sentiment scoring.",
    language: "Python",
    languageColor: "#38bdf8",
    stars: 52,
    forks: 12,
    updatedAt: "3 weeks ago",
    url: "https://github.com/arjunmehta/marketlens-analytics",
    tags: ["fintech", "pandas", "sentiment-analysis", "recharts"]
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    title: "Understanding RAG Systems from First Principles",
    category: "GENERATIVE AI",
    readTime: "8 min",
    date: "Aug 2026",
    summary: "A deep dive into chunking strategies, dense vs sparse embeddings, hybrid search, and context re-ranking.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "Why naive chunking degrades semantic retrieval by 30-40%",
      "How to combine BM25 sparse keyword search with dense HNSW vector search",
      "Using Cohere / Cross-Encoder re-rankers for top-k precision",
      "Mitigating context-stuffing latency with streaming token decoders"
    ],
    content: `### Introduction

Retrieval-Augmented Generation (RAG) has emerged as the definitive standard for grounding Large Language Models in private, enterprise data. Rather than fine-tuning entire parameter weights, RAG fetches precise document slices and injects them into the model's context window at query time.

\`\`\`python
# Conceptual Dense Vector Search with pgvector
from sqlalchemy import select, text

async def query_hybrid_rag(query_embedding, query_text, limit=5):
    # Vector Cosine Distance + Keyword Rank
    sql = text("""
        SELECT chunk_id, content,
               (1 - (embedding <=> :vector)) * 0.7 +
               ts_rank_cd(to_tsvector('english', content), plainto_tsquery(:query)) * 0.3 AS score
        FROM document_chunks
        ORDER BY score DESC
        LIMIT :limit
    """)
    return await db.execute(sql, {"vector": query_embedding, "query": query_text, "limit": limit})
\`\`\`

### 1. The Chunking Bottleneck

Most failures in RAG systems stem not from the generator model, but from sloppy chunking. When documents are split arbitrarily at character count 500:
- Tables are severed mid-row, destroying tabular relationships.
- Pronouns lose their referent nouns.
- Semantic paragraphs are clipped.

**The Solution:** Use semantic recursive chunkers that respect sentence and markdown boundaries, paired with parent-document retrievers where small chunks are matched for search but large parent sections are delivered to the LLM.

### 2. Hybrid Search: Dense Meets Sparse

Dense vector embeddings excel at broad conceptual similarity, but often fail on precise alphanumeric queries (e.g. SKU numbers, error codes, specific person names). By blending BM25 lexical search with dense cosine distance using Reciprocal Rank Fusion (RRF), retrieval accuracy consistently rises over 25%.`
  },
  {
    id: "art-2",
    title: "Building a Computer Vision Pipeline with YOLO",
    category: "COMPUTER VISION",
    readTime: "10 min",
    date: "Jul 2026",
    summary: "Step-by-step engineering of an ultra-low-latency real-time video surveillance pipeline with TensorRT and WebSockets.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "Optimizing frame buffer queues to prevent memory leaks during 60 FPS streams",
      "Exporting PyTorch models to ONNX and FP16 TensorRT engines",
      "Tracking persistent object IDs across occlusions with ByteTrack",
      "Broadcasting high-speed coordinate vectors to web clients"
    ],
    content: `### Overview

Deploying deep learning computer vision models to production requires balancing accuracy (mAP) with real-time throughput (FPS). When building **VisionGuard**, achieving consistent sub-35ms inference meant rethinking how video frames transition between camera hardware and GPU tensor memory.

\`\`\`python
# Zero-Copy Tensor Inference Pipeline
import torch
import cv2

class VisionStreamEngine:
    def __init__(self, engine_path):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        # Load optimized TensorRT / TorchScript model
        self.model = torch.jit.load(engine_path).to(self.device).eval()

    @torch.inference_mode()
    def infer_frame(self, frame_tensor):
        # frame_tensor is pre-normalized on GPU
        predictions = self.model(frame_tensor)
        return predictions
\`\`\`

### 1. The Threading Trap in Python

In standard Python OpenCV scripts, \`cv2.VideoCapture.read()\` is blocking. If your neural inference takes 30ms and frame decoding takes 15ms, your max FPS drops to 22 FPS.

By offloading camera frame polling to an isolated daemon thread and sharing a circular double-buffer, the neural engine is never starved for input frames.`
  },
  {
    id: "art-3",
    title: "How I Built My First AI Agent",
    category: "AI AGENTS",
    readTime: "7 min",
    date: "Jun 2026",
    summary: "Architecting autonomous agents with structured tool calling, self-reflection loops, and persistent vector memory.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "The ReAct (Reason + Act) loop pattern explained simply",
      "Designing safe tool contracts with JSON Schema validation",
      "Handling infinite loops and tool error recovery gracefully",
      "Preserving state across multi-turn autonomous executions"
    ],
    content: `### What Makes an Agent?

A traditional LLM call is stateless and single-step: Prompt in, answer out. An **AI Agent**, conversely, pairs an LLM with:
1. **Tools**: Functions it can call (API endpoints, database queries, calculators).
2. **Memory**: Short-term conversation history and long-term vector storage.
3. **Planning Loop**: The ability to break a goal into subtasks, execute a tool, inspect the observation, and decide whether the goal is achieved.

\`\`\`typescript
// Schema-Validated Tool Definition
export const weatherTool = {
  name: "get_weather_metrics",
  description: "Fetches live temperature and precipitation for a city",
  parameters: {
    type: "OBJECT",
    properties: {
      location: { type: "STRING", description: "City name, e.g. Bengaluru" },
      units: { type: "STRING", enum: ["celsius", "fahrenheit"] }
    },
    required: ["location"]
  }
};
\`\`\`

### Avoiding Infinite Loops

The most common trap in agent design is cyclical failure: The agent calls a failing tool, receives an error, and retries the exact same tool call with identical arguments.

Implementing an explicit **reflection prompt** that forces the agent to critique its previous attempt before issuing another tool call reduced loop failure rates from 18% down to under 2%.`
  },
  {
    id: "art-4",
    title: "Deploying Machine Learning Models with FastAPI",
    category: "MACHINE LEARNING",
    readTime: "9 min",
    date: "May 2026",
    summary: "Production-ready patterns for asynchronous ML serving, model warmup, batching, and Docker containerization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "Why FastAPI is the gold standard for ML microservices",
      "Implementing async lifespan handlers for zero-downtime model warmup",
      "Dynamic request batching for GPU throughput maximization",
      "Health probes and Prometheus telemetry instrumentation"
    ],
    content: `### Why FastAPI for ML?

FastAPI provides native asynchronous support, Pydantic type safety, automatic OpenAPI documentation, and exceptional raw ASGI performance. When serving ML models, FastAPI allows CPU-bound tasks to be offloaded cleanly to worker pools while remaining responsive to incoming health checks.

\`\`\`python
# Lifespan Warmup & Model State in FastAPI
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
import torch

ml_models = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Warmup model weights during server boot
    print("Loading PyTorch model into GPU memory...")
    ml_models["classifier"] = torch.load("model_weights.pt")
    # Run 1 dummy inference to initialize CUDA context
    dummy_input = torch.zeros((1, 3, 224, 224))
    _ = ml_models["classifier"](dummy_input)
    yield
    # Clean up GPU memory
    ml_models.clear()
    torch.cuda.empty_cache()

app = FastAPI(lifespan=lifespan)
\`\`\`

### Health Checks & Production Probes

Never point your Kubernetes liveness probe directly at an inference endpoint. Create a lightweight \`/healthz\` route that checks GPU memory availability without triggering heavy forward passes.`
  }
];

export const AI_LAB_EXPERIMENTS = [
  {
    id: "ai-chat",
    title: "AI Chat Assistant",
    description: "Ask questions and receive instant contextual AI-generated answers.",
    status: "LIVE" as const,
    icon: "MessageSquare",
    tag: "Gemini 3.7 / LLM"
  },
  {
    id: "image-classifier",
    title: "Image Classifier",
    description: "Upload or select an image and demonstrate real-time computer vision classification.",
    status: "LIVE" as const,
    icon: "Image",
    tag: "Vision / CNN"
  },
  {
    id: "text-analyzer",
    title: "Text Analyzer",
    description: "Enter any text to inspect real-time sentiment, keywords, entities, and tone vectors.",
    status: "LIVE" as const,
    icon: "FileSearch",
    tag: "NLP Pipeline"
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engine",
    description: "Select project constraints and compute the optimal AI model and architecture stack.",
    status: "PROTOTYPE" as const,
    icon: "Compass",
    tag: "Heuristic AI"
  },
  {
    id: "data-explorer",
    title: "Data Explorer",
    description: "Interact with live benchmark datasets comparing model latency, parameters, and accuracy.",
    status: "EXPERIMENT" as const,
    icon: "BarChart2",
    tag: "Telemetry"
  },
  {
    id: "ai-playground",
    title: "AI Playground",
    description: "Experiment with custom system prompts, temperature dials, and observe model responses.",
    status: "LIVE" as const,
    icon: "Terminal",
    tag: "Prompt Sandbox"
  }
];

// Aliases and currently stream
export const EXPERIENCES = EXPERIENCE_DATA.map(exp => ({
  id: exp.id,
  role: exp.role,
  company: exp.company,
  duration: exp.year + " (" + exp.type + ")",
  type: exp.type,
  location: exp.location,
  description: exp.description,
  highlights: exp.achievements,
  technologies: exp.technologies
}));

export const EDUCATION_LIST = [
  {
    id: "edu-1",
    degree: EDUCATION_DATA.degree + " in " + EDUCATION_DATA.field,
    institution: EDUCATION_DATA.institution,
    period: EDUCATION_DATA.duration,
    location: EDUCATION_DATA.location,
    grade: EDUCATION_DATA.cgpa,
    focus: "Specializing in Machine Learning, Deep Neural Nets, Computer Vision & Distributed Systems",
    coursework: EDUCATION_DATA.coursework
  }
];

export const ACHIEVEMENTS = ACHIEVEMENTS_DATA;
export const ARTICLES = ARTICLES_DATA;
export const BLOG_POSTS = ARTICLES_DATA.map(art => ({
  id: art.id,
  title: art.title,
  category: art.category,
  readTime: art.readTime,
  date: art.date,
  summary: art.summary,
  content: art.content,
  tags: art.keyTakeaways.map(k => k.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '')).filter(Boolean)
}));

export const CURRENTLY_DATA = [
  {
    id: "curr-read",
    icon: "BookOpen",
    label: "Reading",
    title: "ML Systems & Multimodal Reasoning",
    description: "\"Designing Machine Learning Systems\" by Chip Huyen & ArXiv research on multimodal chain-of-thought."
  },
  {
    id: "curr-build",
    icon: "Hammer",
    label: "Building",
    title: "Multimodal AI Agent Framework",
    description: "A low-latency agent orchestration engine with zero-copy shared memory and streaming JSON tools."
  },
  {
    id: "curr-explore",
    icon: "Compass",
    label: "Exploring",
    title: "State-Space Mamba vs Transformers",
    description: "Benchmarking linear time-complexity architectures for long-horizon audio and video stream reasoning."
  },
  {
    id: "curr-listen",
    icon: "Headphones",
    label: "Listening",
    title: "Synthwave & Latent Space Podcast",
    description: "Coding playlists with retro synthwave and deep-tech discussions on production AI infrastructure."
  }
];

