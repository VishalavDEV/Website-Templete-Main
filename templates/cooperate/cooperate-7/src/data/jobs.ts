export interface JobItem {
  id: string;
  jobId: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Remote, etc.
  experience: string;
  salaryRange: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  postedDate: string;
  featured: boolean;
}

export const jobsData: JobItem[] = [
  {
    id: "job-1",
    jobId: "eng-react-01",
    title: "Senior React Developer",
    department: "Engineering",
    location: "Hyderabad, India / Remote",
    type: "Full-time",
    experience: "5+ years",
    salaryRange: "$80k - $120k / Competitive Local Package",
    summary: "Join our core UI engineering practice to build ultra-responsive enterprise web applications, high-performance dashboards, and modular design systems for Fortune 500 clients.",
    responsibilities: [
      "Architect and scale modular React 19 / TypeScript component libraries and state architectures.",
      "Collaborate closely with UI/UX designers and backend engineers to translate product specifications into responsive, pixel-perfect interfaces.",
      "Optimize core web vitals, client-side caching, and bundle size for maximum performance.",
      "Conduct code reviews, mentor junior engineers, and advocate for engineering best practices."
    ],
    requirements: [
      "5+ years of production experience with modern React, TypeScript, and modern CSS (Tailwind).",
      "Deep understanding of state management, browser rendering lifecycle, and Web Performance APIs.",
      "Proven track record building complex single-page apps or enterprise SaaS platforms.",
      "Strong testing habits (Jest, React Testing Library, Cypress/Playwright)."
    ],
    niceToHave: [
      "Experience with Next.js, Remix, or server-side rendering architectures.",
      "Familiarity with WebGL, Canvas, or data visualization libraries (D3/Recharts)."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision health coverage",
      "Flexible hybrid / 100% remote working flexibility",
      "$2,500 annual personal learning and conference stipend",
      "Generous stock options and performance bonus structure"
    ],
    postedDate: "2026-08-15",
    featured: true
  },
  {
    id: "job-2",
    jobId: "aiml-eng-02",
    title: "AI/ML Engineer",
    department: "AI & Data",
    location: "Bengaluru, India / Hybrid",
    type: "Full-time",
    experience: "4+ years",
    salaryRange: "$95k - $140k",
    summary: "Develop and deploy cutting-edge generative AI models, multi-agent frameworks, neural anomaly detection engines, and low-latency inference APIs.",
    responsibilities: [
      "Design, fine-tune, and benchmark Large Language Models (LLMs) and specialized neural networks.",
      "Build production RAG pipelines integrating vector search databases (Pinecone, Qdrant, Milvus).",
      "Optimize real-time inference latency using TensorRT, ONNX, and GPU clustering.",
      "Implement model evaluation guardrails, drift detection, and automated retraining pipelines."
    ],
    requirements: [
      "4+ years experience in Python, PyTorch / TensorFlow, and ML engineering in production.",
      "Hands-on expertise with GenAI, Transformers, Prompt Engineering, and RAG architectures.",
      "Experience deploying models using FastAPI, Docker, and Kubernetes in AWS/GCP.",
      "Strong mathematical foundation in linear algebra, statistics, and optimization."
    ],
    niceToHave: [
      "Published research papers or open-source contributions in AI/ML.",
      "Experience with LangChain, LlamaIndex, or AutoGen frameworks."
    ],
    benefits: [
      "Top-tier health and wellness insurance for you and your family",
      "Dedicated GPU computing workstation and cloud sandbox budget",
      "Annual international technology retreat and hackathons",
      "Flexible working hours and paid time off"
    ],
    postedDate: "2026-08-18",
    featured: true
  },
  {
    id: "job-3",
    jobId: "cloud-arch-03",
    title: "Cloud Solutions Architect",
    department: "Cloud Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "7+ years",
    salaryRange: "$130k - $175k",
    summary: "Lead multi-cloud enterprise modernization projects, architect resilient Kubernetes topologies, and establish secure DevOps pipelines across AWS, Azure, and Google Cloud.",
    responsibilities: [
      "Serve as the lead technical authority for cloud migrations, microservices architectures, and disaster recovery.",
      "Author Terraform / Pulumi Infrastructure as Code (IaC) blueprints for zero-downtime multi-region deployments.",
      "Implement FinOps practices to optimize infrastructure spending for high-volume enterprise clients.",
      "Lead technical discovery workshops with client CTOs and lead architects."
    ],
    requirements: [
      "7+ years in cloud engineering, infrastructure architecture, or DevOps leadership.",
      "Current Professional Cloud Architect Certification (AWS, GCP, or Azure).",
      "Expert-level knowledge of Kubernetes, Docker, Terraform, and CI/CD pipelines.",
      "Deep understanding of zero-trust security, IAM, networking (VPC, Transit Gateways, DNS)."
    ],
    niceToHave: [
      "Experience migrating large legacy monolithic systems to distributed event-driven systems.",
      "Knowledge of Service Meshes (Istio/Linkerd) and GitOps tooling (ArgoCD/Flux)."
    ],
    benefits: [
      "100% remote position with home office setup reimbursement ($1,500)",
      "Global wellness allowance and gym membership stipend",
      "Unlimited paid time off (PTO) policy with mandatory minimums",
      "Quarterly performance bonuses and 401(k) / retirement matching"
    ],
    postedDate: "2026-08-20",
    featured: true
  },
  {
    id: "job-4",
    jobId: "sec-eng-04",
    title: "Senior Cybersecurity Engineer",
    department: "Security & Governance",
    location: "Remote / Bengaluru",
    type: "Full-time",
    experience: "5+ years",
    salaryRange: "$90k - $135k",
    summary: "Conduct penetration testing, architect DevSecOps automated pipelines, and enforce Zero-Trust defense systems across client infrastructures.",
    responsibilities: [
      "Perform vulnerability assessments, penetration testing, and red-team simulations.",
      "Integrate SAST, DAST, and container vulnerability scanning into automated CI/CD pipelines.",
      "Guide enterprise clients through SOC2 Type II, ISO 27001, and HIPAA compliance accreditations."
    ],
    requirements: [
      "5+ years experience in offensive/defensive cybersecurity or cloud security.",
      "Certifications like CISSP, CEH, OSCP, or CCSP.",
      "Hands-on expertise with IAM, HashiCorp Vault, Wiz, SIEM tools, and container security."
    ],
    niceToHave: ["Experience with cryptographic key management and confidential computing."],
    benefits: ["Full health cover, remote budget, certification bonuses, equity grant."],
    postedDate: "2026-08-21",
    featured: false
  }
];
