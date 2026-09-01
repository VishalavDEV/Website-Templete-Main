export const caseStudies = [
  {
    id: "apex-banking-core",
    slug: "apex-banking-core",
    title: "Apex Core: Real-Time Cloud Transformation for Tier-1 Bank",
    shortTitle: "Apex Digital Banking",
    client: "Apex Financial Group",
    industry: "Financial Services",
    category: "Cloud",
    serviceCategory: "Cloud Transformation",
    year: "2025",
    duration: "9 Months",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Architected a zero-downtime migration of a $42B banking core to a multi-region active-active Kubernetes infrastructure, slashing transaction latency from 1.2s to 18ms.",
    challenge: "Apex Financial operated on a 25-year-old monolithic mainframe banking system that experienced recurring slowdowns during peak trading windows, cost millions annually in licensing, and barred the bank from offering real-time open-banking APIs required by European and North American regulations.",
    strategy: "NEXORA engineered a phased 'Strangler Fig' modernization roadmap. We deployed an event-driven synchronization bridge powered by Apache Kafka between the mainframe and the new AWS/EKS multi-region cluster, migrating core account services one domain at a time with automated dual-write verification.",
    solution: "A cloud-native microservices ecosystem written in Go and Rust, orchestrated across multi-region Kubernetes clusters with Istio service mesh, DynamoDB global tables, and automated blue-green deployments via ArgoCD.",
    technologies: ["AWS", "Kubernetes", "Go", "Rust", "Apache Kafka", "Terraform", "DynamoDB", "Istio"],
    results: [
      { metric: "18ms", label: "Average Transaction Latency", sub: "Down from 1,200ms" },
      { metric: "99.999%", label: "System Availability", sub: "Zero unscheduled downtime" },
      { metric: "$14.2M", label: "Annual Infrastructure Savings", sub: "42% reduction in TCO" },
      { metric: "12M+", label: "Daily Active Accounts", sub: "Seamlessly supported" }
    ],
    testimonial: {
      quote: "NEXORA executed what three previous consulting firms deemed impossible: a flawless migration of our core banking transaction system without a single second of customer downtime.",
      author: "Eleanor Vance",
      role: "Chief Technology Officer",
      company: "Apex Financial Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "novacare-telehealth",
    slug: "novacare-telehealth",
    title: "NovaCare: Autonomous Ambient AI for Clinical Documentation",
    shortTitle: "NovaCare Ambient AI",
    client: "NovaCare Health Systems",
    industry: "Healthcare",
    category: "AI",
    serviceCategory: "Artificial Intelligence",
    year: "2025",
    duration: "6 Months",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Engineered an on-premise, HIPAA-compliant ambient AI platform that converts natural patient-doctor consultations into structured clinical EHR notes in real time.",
    challenge: "NovaCare's network of 450+ physicians spent an average of 2.5 hours per shift typing administrative notes into EHR software, resulting in widespread clinician burnout, delayed billing coding, and reduced patient face time.",
    strategy: "NEXORA developed a privacy-first ambient speech recognition and clinical language model pipeline deployed entirely within NovaCare's private cloud VPC. The model listens during appointments, extracts medical symptoms, codes ICD-10 diagnoses, and formats SOAP notes automatically for physician signoff.",
    solution: "Proprietary fine-tuned medical LLMs with Whisper acoustic models, FHIR HL7 bi-directional integration, and an intuitive iPad/web approval interface built with React and WebSockets.",
    technologies: ["PyTorch", "Whisper", "FastAPI", "FHIR / HL7", "React", "Docker", "PostgreSQL", "Tailored LLMs"],
    results: [
      { metric: "68%", label: "Reduction in Doctor Charting Time", sub: "Saved ~1.8 hrs/day per doctor" },
      { metric: "99.4%", label: "Clinical Coding Accuracy", sub: "Validated across 50,000+ consults" },
      { metric: "100%", label: "HIPAA & SOC2 Compliance", sub: "Zero cloud data leakage" },
      { metric: "+32%", label: "Daily Patient Capacity", sub: "Increased clinic throughput" }
    ],
    testimonial: {
      quote: "Our physicians have reclaimed their evenings. NEXORA's ambient clinical platform feels like magic, but with the rigorous precision and privacy that healthcare demands.",
      author: "Dr. Marcus Thorne",
      role: "Chief Medical Officer",
      company: "NovaCare Health Systems",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "omnistyle-commerce",
    slug: "omnistyle-commerce",
    title: "OmniStyle: Composable Headless Platform Handling $1.2B GMV",
    shortTitle: "OmniStyle Composable Commerce",
    client: "OmniStyle Global Brands",
    industry: "Retail",
    category: "Software",
    serviceCategory: "Software & Digital Engineering",
    year: "2024",
    duration: "8 Months",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Replaced a monolithic legacy commerce stack with a lightning-fast headless Next.js architecture, boosting mobile checkout conversions by 48% and cutting global load times to 180ms.",
    challenge: "With over 40 fashion brands across 28 countries, OmniStyle suffered from high cart abandonment on mobile, fragile multi-region sync, and an inability to launch seasonal marketing campaigns without 3-week engineering sprints.",
    strategy: "NEXORA architected a unified composable headless stack. We separated the presentation layer into edge-rendered storefronts and connected them to headless commerce engines, Algolia vector search, and a central Contentful CMS design system.",
    solution: "A high-performance Next.js application layer deployed across 200+ global edge locations via Cloudflare Workers, integrated with Stripe unified checkout, Kafka inventory pipelines, and automated localized translations.",
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Cloudflare Workers", "Kafka", "Stripe API", "Algolia"],
    results: [
      { metric: "+48%", label: "Mobile Checkout Conversion", sub: "Over $80M incremental revenue" },
      { metric: "180ms", label: "Global Edge Page Load", sub: "72% faster than previous stack" },
      { metric: "100%", label: "Uptime on Black Friday", sub: "Handled 140,000 req/sec peak" },
      { metric: "2 Days", label: "New Brand Store Launch Time", sub: "Down from 6 weeks" }
    ],
    testimonial: {
      quote: "The speed and modularity NEXORA delivered completely transformed our global business. Launching new brands across countries is now an afternoon task rather than a quarterly nightmare.",
      author: "Sophia Sterling",
      role: "VP of Global Digital Experience",
      company: "OmniStyle Global Brands",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "aeropulse-manufacturing",
    slug: "aeropulse-manufacturing",
    title: "AeroPulse: Edge Computer Vision & Predictive Maintenance",
    shortTitle: "AeroPulse Industrial AI",
    client: "AeroPulse Dynamics",
    industry: "Manufacturing",
    category: "AI",
    serviceCategory: "Artificial Intelligence",
    year: "2024",
    duration: "7 Months",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Deployed edge-computed computer vision across 18 aerospace production lines, achieving 99.8% precision in turbine blade micro-defect detection and saving $8.2M annually.",
    challenge: "Turbine component manufacturing requires near-zero tolerance for surface defects. Manual optical inspection was labor-intensive, subjective, and created severe assembly line bottlenecks.",
    strategy: "NEXORA engineered an edge-AI hardware and software suite. High-resolution industrial cameras feed 120 FPS video into local NVIDIA edge inference nodes running custom convolutional neural networks for sub-millimeter anomaly identification.",
    solution: "YOLOv8 and custom ResNet architectures trained on 2 million synthetic and historical defect images, orchestrated via edge Kubernetes (K3s) with central cloud telemetry synchronization.",
    technologies: ["PyTorch", "NVIDIA Jetson", "TensorRT", "K3s", "Python", "ClickHouse", "Grafana", "FastAPI"],
    results: [
      { metric: "99.8%", label: "Defect Detection Accuracy", sub: "Eliminated human inspection error" },
      { metric: "-42%", label: "Unplanned Factory Downtime", sub: "Predictive sensor alerts" },
      { metric: "$8.2M", label: "Annual Operational Savings", sub: "Reduced scrap material by 60%" },
      { metric: "< 10ms", label: "Edge Inference Latency", sub: "Instant line stop triggers" }
    ],
    testimonial: {
      quote: "The defect detection accuracy NEXORA achieved exceeded aerospace tolerance benchmarks. It's rare to see an AI solution deliver an immediate ROI within the first quarter.",
      author: "Henrik Lindqvist",
      role: "Head of Advanced Manufacturing",
      company: "AeroPulse Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "vanguard-freight-mesh",
    slug: "vanguard-freight-mesh",
    title: "Vanguard: Enterprise Data Mesh for Global Logistics Network",
    shortTitle: "Vanguard Logistics Data Mesh",
    client: "Vanguard Freight Logistics",
    industry: "Logistics",
    category: "Data",
    serviceCategory: "Data Engineering & Analytics",
    year: "2025",
    duration: "10 Months",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Built a petabyte-scale real-time data mesh unifying telematics from 35,000 freight vehicles and 120 distribution hubs, cutting fuel costs by 24%.",
    challenge: "Vanguard was drowning in disconnected sensor data, fragmented spreadsheets, and batch ETL jobs that failed every Monday morning, leaving dispatchers blind to real-time supply chain bottlenecks.",
    strategy: "NEXORA designed a decentralized Data Mesh architecture where domain teams manage data products with dbt and Snowflake, orchestrated over Apache Kafka and Flink streaming clusters.",
    solution: "Real-time streaming ingestion pipeline handling 50,000 events/second, with dynamic map visualizations for dispatchers and automated predictive arrival estimation.",
    technologies: ["Snowflake", "Apache Kafka", "Apache Flink", "dbt", "Python", "Mapbox GL", "React", "AWS"],
    results: [
      { metric: "-24%", label: "Fleet Fuel Consumption", sub: "Dynamic route optimization" },
      { metric: "50k/sec", label: "Streaming Telemetry Events", sub: "Sub-second processing" },
      { metric: "98.8%", label: "On-Time Dispatch Rate", sub: "Up from 84.2%" },
      { metric: "14x", label: "Executive Query Speedup", sub: "Instant BI reporting" }
    ],
    testimonial: {
      quote: "NEXORA turned our data from a liability into our greatest competitive advantage. We now see every truck, parcel, and delay in real time across the globe.",
      author: "David Chen",
      role: "Chief Logistics Officer",
      company: "Vanguard Freight Logistics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "cloudscale-saas-core",
    slug: "cloudscale-saas-core",
    title: "CloudScale: Zero-Trust Security & DevSecOps Platform",
    shortTitle: "CloudScale DevSecOps",
    client: "CloudScale SaaS Inc.",
    industry: "Technology",
    category: "Digital",
    serviceCategory: "Cybersecurity & Zero Trust",
    year: "2024",
    duration: "5 Months",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Implemented a comprehensive Zero-Trust architecture and automated DevSecOps framework, achieving SOC2 Type II and FedRAMP compliance in record time.",
    challenge: "As CloudScale expanded into enterprise Fortune 500 accounts, lengthy security reviews and strict government compliance requirements were stalling millions of dollars in enterprise pipeline deals.",
    strategy: "NEXORA instituted an automated DevSecOps pipeline with continuous SAST/DAST testing, HashiCorp Vault secret rotation, identity-aware proxies, and automated compliance auditing.",
    solution: "Complete zero-trust networking topology, automated Terraform policy enforcement with OPA (Open Policy Agent), and Wiz/CrowdStrike telemetry integration.",
    technologies: ["HashiCorp Vault", "Wiz", "CrowdStrike", "Terraform", "Open Policy Agent", "GitHub Actions", "AWS IAM"],
    results: [
      { metric: "100%", label: "SOC2 Type II & ISO 27001 Pass", sub: "Completed in 90 days" },
      { metric: "0", label: "Critical Vulnerabilities in Prod", sub: "Automated PR blocking" },
      { metric: "+$35M", label: "Enterprise Pipeline Unlocked", sub: "Passed all vendor security audits" },
      { metric: "< 5 mins", label: "Threat Incident Containment", sub: "Autonomous SOAR response" }
    ],
    testimonial: {
      quote: "Thanks to NEXORA, our security posture went from a sales bottleneck to our biggest selling point when closing Fortune 100 enterprise customers.",
      author: "Samantha Ross",
      role: "VP of Security & Compliance",
      company: "CloudScale SaaS Inc.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    }
  }
];
