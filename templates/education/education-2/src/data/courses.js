export const coursesData = [
  {
    id: "ai-machine-learning-mastery",
    title: "Artificial Intelligence & Deep Learning Masterclass",
    slug: "ai-machine-learning-mastery",
    category: "Artificial Intelligence",
    level: "Intermediate",
    rating: 4.9,
    reviewsCount: 1420,
    studentsCount: 18450,
    duration: "12 Weeks (48 Hours)",
    lessonsCount: 64,
    price: 149,
    originalPrice: 249,
    featured: true,
    badge: "Bestseller",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Master Python, PyTorch, Neural Networks, Computer Vision, and Large Language Models with hands-on capstone projects.",
    description: "This comprehensive masterclass provides an in-depth exploration of modern Artificial Intelligence and Deep Learning. Designed for aspiring AI engineers and data scientists, you will learn to build, train, and deploy advanced neural network architectures, work with Transformers, and fine-tune state-of-the-art open-source LLMs.",
    instructor: {
      id: "dr-elena-rostova",
      name: "Dr. Elena Rostova",
      title: "Lead AI Scientist & Ex-DeepMind Researcher",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      rating: 4.9,
      students: 42000
    },
    learningOutcomes: [
      "Build deep neural network architectures from scratch using PyTorch",
      "Develop Computer Vision pipelines for object detection and image segmentation",
      "Understand Transformer models, Attention mechanisms, and BERT/GPT architectures",
      "Fine-tune Large Language Models (LLMs) using LoRA and Hugging Face",
      "Deploy AI models as scalable microservices on AWS Cloud"
    ],
    requirements: [
      "Basic understanding of Python programming",
      "Foundational high-school linear algebra and calculus concepts",
      "A laptop with stable internet connection (GPU provided via cloud notebooks)"
    ],
    features: [
      "Lifetime access to 64 HD Video lectures",
      "12 Hands-on Industry Capstone Projects",
      "Official Verified Certificate of Completion",
      "Direct Q&A with Industry Experts & TAs",
      "Downloadable Python Notebooks & Cheat Sheets"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Foundations of Machine Learning & Math",
        duration: "2 Weeks • 10 Lessons",
        lessons: [
          { title: "Introduction to Supervised & Unsupervised Learning", duration: "25 min", preview: true },
          { title: "Linear Algebra & Gradient Descent Intuition", duration: "40 min", preview: true },
          { title: "Feature Engineering & Data Preprocessing with Pandas", duration: "45 min", preview: false },
          { title: "Model Evaluation Metrics & Cross-Validation", duration: "35 min", preview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Deep Neural Networks with PyTorch",
        duration: "3 Weeks • 14 Lessons",
        lessons: [
          { title: "PyTorch Tensors, Autograd, and Computation Graphs", duration: "50 min", preview: true },
          { title: "Designing Multi-Layer Perceptrons (MLPs)", duration: "45 min", preview: false },
          { title: "Activation Functions & Regularization (Dropout, BatchNorm)", duration: "35 min", preview: false },
          { title: "Hyperparameter Optimization Techniques", duration: "40 min", preview: false }
        ]
      },
      {
        moduleTitle: "Module 3: Computer Vision & Convolutional Networks",
        duration: "3 Weeks • 16 Lessons",
        lessons: [
          { title: "Convolutional Neural Networks (CNN) Architectures", duration: "55 min", preview: false },
          { title: "ResNet, EfficientNet & Transfer Learning", duration: "50 min", preview: false },
          { title: "Object Detection: YOLOv8 and Faster R-CNN", duration: "60 min", preview: false }
        ]
      },
      {
        moduleTitle: "Module 4: Transformers, LLMs & Generative AI",
        duration: "4 Weeks • 24 Lessons",
        lessons: [
          { title: "Self-Attention Mechanism & Transformer Encoder-Decoder", duration: "65 min", preview: false },
          { title: "Fine-Tuning Llama 3 & Mistral using HuggingFace TRL", duration: "75 min", preview: false },
          { title: "Building RAG (Retrieval-Augmented Generation) Systems", duration: "70 min", preview: false },
          { title: "Capstone Project: End-to-End Enterprise AI Assistant", duration: "120 min", preview: false }
        ]
      }
    ]
  },
  {
    id: "fullstack-react-nextjs-pro",
    title: "Full-Stack Web Development: React, Next.js 14 & Node",
    slug: "fullstack-react-nextjs-pro",
    category: "Web Development",
    level: "All Levels",
    rating: 4.8,
    reviewsCount: 2310,
    studentsCount: 31200,
    duration: "10 Weeks (40 Hours)",
    lessonsCount: 82,
    price: 129,
    originalPrice: 199,
    featured: true,
    badge: "Popular",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Build scalable full-stack applications with TypeScript, Next.js App Router, Tailwind CSS, Node.js, and PostgreSQL.",
    description: "Transform into a job-ready Full-Stack Engineer. Learn how to architect modern, high-performance web applications from front to back using industry standards: TypeScript, Next.js Server Components, Prisma ORM, PostgreSQL, and AWS deployment.",
    instructor: {
      id: "marcus-vance",
      name: "Marcus Vance",
      title: "Principal Staff Engineer & Open Source Author",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      rating: 4.9,
      students: 58000
    },
    learningOutcomes: [
      "Master Modern JavaScript (ES6+) and TypeScript type systems",
      "Build reactive UIs with React 18 hooks, context, and custom state",
      "Architect Next.js 14 applications with App Router & Server Actions",
      "Design relational databases with PostgreSQL and Prisma ORM",
      "Implement secure JWT & OAuth2 authentication with NextAuth"
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and basic JavaScript loops",
      "Code editor (VS Code recommended)"
    ],
    features: [
      "82 High-Definition Video Tutorials",
      "5 Commercial Real-World Web Applications",
      "Private Discord Developer Community Access",
      "Code Review Support from Senior Instructors"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Advanced TypeScript & Modern React",
        duration: "2 Weeks • 18 Lessons",
        lessons: [
          { title: "TypeScript Generics, Utility Types & Strict Mode", duration: "35 min", preview: true },
          { title: "React 18 Concurrent Features & Custom Hooks", duration: "45 min", preview: true },
          { title: "State Management with Zustand and TanStack Query", duration: "50 min", preview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Next.js 14 App Router Deep Dive",
        duration: "3 Weeks • 24 Lessons",
        lessons: [
          { title: "Server Components vs Client Components Demystified", duration: "40 min", preview: true },
          { title: "Server Actions, Form Validation with Zod & Optimistic UI", duration: "55 min", preview: false },
          { title: "Dynamic Routing, Layouts & Middleware Protection", duration: "45 min", preview: false }
        ]
      },
      {
        moduleTitle: "Module 3: Backend APIs, Databases & Security",
        duration: "3 Weeks • 20 Lessons",
        lessons: [
          { title: "Database Modeling with PostgreSQL & Prisma", duration: "60 min", preview: false },
          { title: "NextAuth / Auth.js implementation with OAuth Providers", duration: "50 min", preview: false },
          { title: "Payment Gateway Integration with Stripe", duration: "65 min", preview: false }
        ]
      }
    ]
  },
  {
    id: "data-science-python-analytics",
    title: "Executive Data Science & Big Data Analytics",
    slug: "data-science-python-analytics",
    category: "Data Science",
    level: "Beginner",
    rating: 4.8,
    reviewsCount: 980,
    studentsCount: 14200,
    duration: "8 Weeks (32 Hours)",
    lessonsCount: 50,
    price: 119,
    originalPrice: 179,
    featured: false,
    badge: "Trending",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Turn raw data into actionable business intelligence with Pandas, SQL, Tableau, Seaborn, and Predictive Modeling.",
    description: "Data is the oil of the 21st century. This course equips non-technical and technical learners alike with the skills to clean, analyze, visualize, and extract predictive signals from large-scale corporate datasets.",
    instructor: {
      id: "dr-sarah-chen",
      name: "Dr. Sarah Chen",
      title: "Former Chief Data Scientist at McKinsey & Co",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      rating: 4.8,
      students: 31000
    },
    learningOutcomes: [
      "Perform exploratory data analysis (EDA) using Python Pandas & NumPy",
      "Write complex SQL queries, JOINs, and window functions",
      "Create executive dashboards in Tableau and Power BI",
      "Apply statistical hypothesis testing and A/B test analysis"
    ],
    requirements: [
      "No prior coding experience required. We start from zero."
    ],
    features: [
      "Interactive Jupyter Notebooks",
      "Real Financial & E-commerce Datasets",
      "Career Support & Resume Review"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Data Wrangling with Python",
        duration: "2 Weeks • 12 Lessons",
        lessons: [
          { title: "Introduction to Python Data Types & Structures", duration: "30 min", preview: true },
          { title: "Pandas DataFrames: Cleaning, Filtering & Grouping", duration: "50 min", preview: true }
        ]
      },
      {
        moduleTitle: "Module 2: Advanced SQL & Business Intelligence",
        duration: "3 Weeks • 18 Lessons",
        lessons: [
          { title: "Relational Queries & Aggregations", duration: "45 min", preview: false },
          { title: "Window Functions & Subqueries", duration: "55 min", preview: false }
        ]
      }
    ]
  },
  {
    id: "cybersecurity-ethical-hacking",
    title: "Cybersecurity Leadership & Ethical Hacking",
    slug: "cybersecurity-ethical-hacking",
    category: "Cybersecurity",
    level: "Advanced",
    rating: 4.9,
    reviewsCount: 1150,
    studentsCount: 16800,
    duration: "14 Weeks (56 Hours)",
    lessonsCount: 90,
    price: 169,
    originalPrice: 299,
    featured: true,
    badge: "Certified",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Master penetration testing, network defense, threat intelligence, cloud security, and CompTIA Security+ prep.",
    description: "Defend organizational assets against modern cyber threats. Learn offensive security techniques, penetration testing workflows, exploit analysis, malware triage, and SOC operations from veteran security engineers.",
    instructor: {
      id: "alex-kovacs",
      name: "Alex Kovacs",
      title: "CISSP, Offensive Security Certified Professional",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      rating: 4.9,
      students: 29000
    },
    learningOutcomes: [
      "Conduct vulnerability assessments and penetration tests",
      "Analyze network packets using Wireshark and Nmap",
      "Secure AWS/GCP Cloud Infrastructure against zero-day threats",
      "Prepare for CISSP, CEH, and Security+ Industry Certifications"
    ],
    requirements: [
      "Basic understanding of Computer Networks (TCP/IP, DNS, Routing)"
    ],
    features: [
      "Access to Virtual Penetration Testing Labs",
      "Exam Simulator for Security+ & CEH",
      "1-on-1 Mentorship Sessions"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Offensive Security & Reconnaissance",
        duration: "3 Weeks • 20 Lessons",
        lessons: [
          { title: "OSINT Techniques & Active Network Scanning", duration: "45 min", preview: true },
          { title: "Metasploit Framework & Payload Generation", duration: "60 min", preview: false }
        ]
      }
    ]
  },
  {
    id: "ui-ux-design-systems-mastery",
    title: "UI/UX Design Systems & Product Strategy",
    slug: "ui-ux-design-systems-mastery",
    category: "UI/UX Design",
    level: "All Levels",
    rating: 4.9,
    reviewsCount: 1850,
    studentsCount: 22400,
    duration: "8 Weeks (32 Hours)",
    lessonsCount: 46,
    price: 99,
    originalPrice: 159,
    featured: false,
    badge: "Top Rated",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Design intuitive user experiences, build scalable Figma design systems, wireframe, prototype, and conduct usability research.",
    description: "Bridge the gap between design and front-end execution. Learn user psychology, wireframing, interactive prototyping in Figma, accessibility (WCAG 2.1), and tokenized design systems.",
    instructor: {
      id: "sophia-martinez",
      name: "Sophia Martinez",
      title: "Design Director at DesignCraft Studio",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      rating: 4.9,
      students: 39000
    },
    learningOutcomes: [
      "Build a complete multi-device Figma Design System",
      "Conduct user interviews, persona creation, and empathy mapping",
      "Master micro-interactions, auto-layout 5.0, and variables",
      "Conduct WCAG accessibility audits for contrast and screen readers"
    ],
    requirements: [
      "Figma installed (free version works perfectly)"
    ],
    features: [
      "Downloadable Figma UI Component Kits",
      "Portfolio Review & Resume Feedback",
      "Real Client Case Study Projects"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Figma Foundations & Tokens",
        duration: "2 Weeks • 12 Lessons",
        lessons: [
          { title: "Typography & Color Theory in Digital Products", duration: "40 min", preview: true },
          { title: "Auto-Layout, Components & Variant Management", duration: "50 min", preview: true }
        ]
      }
    ]
  },
  {
    id: "cloud-architect-aws-kubernetes",
    title: "Cloud Architect: AWS, Docker & Kubernetes",
    slug: "cloud-architect-aws-kubernetes",
    category: "Cloud Computing",
    level: "Advanced",
    rating: 4.8,
    reviewsCount: 890,
    studentsCount: 12900,
    duration: "12 Weeks (48 Hours)",
    lessonsCount: 74,
    price: 159,
    originalPrice: 269,
    featured: false,
    badge: "AWS Certified",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Architect high-availability cloud systems on AWS, automate with Terraform, containerize with Docker, and orchestrate with EKS.",
    description: "Become a certified Cloud Architect. Gain mastery over infrastructure-as-code, CI/CD pipelines, container orchestration, multi-region failover, and cloud cost optimization.",
    instructor: {
      id: "david-kim",
      name: "David Kim",
      title: "AWS Certified Solutions Architect Fellow",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      rating: 4.8,
      students: 24000
    },
    learningOutcomes: [
      "Design fault-tolerant AWS VPC architecture",
      "Provision resources with Infrastructure as Code using Terraform",
      "Deploy and scale microservices on Kubernetes (EKS)",
      "Set up GitHub Actions & ArgoCD CI/CD pipelines"
    ],
    requirements: [
      "Linux terminal fluency and basic web server knowledge"
    ],
    features: [
      "Hands-on AWS Sandbox Environment",
      "Terraform & Helm Chart Templates",
      "AWS Solutions Architect Exam Vouchers"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: AWS Core Infrastructure",
        duration: "3 Weeks • 18 Lessons",
        lessons: [
          { title: "VPCs, Subnets, Internet Gateways & Security Groups", duration: "50 min", preview: true }
        ]
      }
    ]
  },
  {
    id: "digital-marketing-growth-hacking",
    title: "Digital Marketing Strategy & Growth Engineering",
    slug: "digital-marketing-growth-hacking",
    category: "Digital Marketing",
    level: "Beginner",
    rating: 4.7,
    reviewsCount: 760,
    studentsCount: 11100,
    duration: "6 Weeks (24 Hours)",
    lessonsCount: 38,
    price: 89,
    originalPrice: 149,
    featured: false,
    badge: "Hot",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Master SEO, Google Ads, Meta Ad Campaigns, Content Funnels, Email Marketing Automation, and GA4 Analytics.",
    description: "Scale any product or service using data-driven digital marketing. Learn audience targeting, ad copy optimization, sales funnel design, and conversion rate optimization (CRO).",
    instructor: {
      id: "rachel-adams",
      name: "Rachel Adams",
      title: "Growth Lead & Former CMO",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      rating: 4.7,
      students: 19000
    },
    learningOutcomes: [
      "Configure Google Analytics 4 & Meta Pixel event tracking",
      "Write high-converting ad copy and landing page headlines",
      "Execute technical SEO audits and backlink campaigns"
    ],
    requirements: [
      "No technical experience required"
    ],
    features: [
      "$200 Free Ad Credit Vouchers",
      "Marketing Funnel Calculator Spreadsheets"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Performance Marketing",
        duration: "2 Weeks • 10 Lessons",
        lessons: [
          { title: "Google Search Ads & Bidding Strategies", duration: "40 min", preview: true }
        ]
      }
    ]
  },
  {
    id: "executive-mba-leadership",
    title: "Executive Business Leadership & Strategic Management",
    slug: "executive-mba-leadership",
    category: "Business",
    level: "Intermediate",
    rating: 4.9,
    reviewsCount: 650,
    studentsCount: 8900,
    duration: "10 Weeks (40 Hours)",
    lessonsCount: 44,
    price: 199,
    originalPrice: 349,
    featured: true,
    badge: "Executive",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    shortDescription: "Develop C-suite decision making, corporate finance models, negotiation strategies, and organizational leadership skills.",
    description: "Designed for rising managers and entrepreneurs. Taught by former CEOs and Ivy League faculty, this program equips you with strategic frameworks to drive corporate expansion and lead high-performing global teams.",
    instructor: {
      id: "prof-william-thatcher",
      name: "Prof. William Thatcher",
      title: "Dean of Management Studies & Angel Investor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      rating: 4.9,
      students: 15000
    },
    learningOutcomes: [
      "Evaluate corporate M&A deals and financial valuation metrics",
      "Negotiate high-stakes enterprise contracts and partnerships",
      "Formulate 5-year strategic roadmap frameworks"
    ],
    requirements: [
      "Basic corporate or business management background recommended"
    ],
    features: [
      "Live Case Study Workshops",
      "Peer Networking Circle Access",
      "Executive Certification"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Strategic Financial Analysis",
        duration: "3 Weeks • 12 Lessons",
        lessons: [
          { title: "Reading Balance Sheets & Cash Flow Statements", duration: "45 min", preview: true }
        ]
      }
    ]
  }
];

export const courseCategories = [
  "All Categories",
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Cybersecurity",
  "UI/UX Design",
  "Cloud Computing",
  "Digital Marketing",
  "Business"
];
