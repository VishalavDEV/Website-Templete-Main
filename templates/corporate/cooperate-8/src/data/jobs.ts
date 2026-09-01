export interface JobListing {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  workplace: string;
  experienceLevel: string;
  salaryRange: string;
  compensation: string;
  shortOverview: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  qualifications: string[];
  technologies: string[];
  benefits: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "job-01",
    slug: "principal-distributed-systems-architect",
    title: "Principal Distributed Systems Architect",
    department: "Core Engineering",
    location: "New York, NY / London / Hybrid",
    type: "Full-Time",
    workplace: "Hybrid",
    experienceLevel: "Principal",
    salaryRange: "$240,000 – $320,000 + Equity",
    compensation: "$240,000 – $320,000 + Equity",
    shortOverview: "Architect petabyte-scale event streaming fabrics, distributed consensus algorithms, and zero-downtime database pipelines.",
    description: "Lead the architectural design and implementation of petabyte-scale event streaming fabrics, distributed ledger systems, and ultra-low-latency consensus algorithms for global financial and industrial clients.",
    responsibilities: [
      "Architect resilient, fault-tolerant distributed backends utilizing Go, Rust, and Apache Kafka.",
      "Partner with client CTOs and chief architects to define multi-year modernization blueprints.",
      "Lead deep code reviews, establish formal verification protocols, and mentor staff engineers.",
      "Design zero-downtime database migration strategies for high-frequency transactional workloads."
    ],
    requirements: [
      "10+ years designing high-throughput distributed systems in Go, Rust, C++, or Java.",
      "Deep understanding of distributed consensus (Raft, Paxos), CAP theorem, and memory models.",
      "Proven track record delivering mission-critical platforms handling >50,000 requests/sec.",
      "Excellent technical communication and architectural documentation skills."
    ],
    qualifications: [
      "10+ years designing high-throughput distributed systems in Go, Rust, C++, or Java.",
      "Deep understanding of distributed consensus (Raft, Paxos), CAP theorem, and memory models.",
      "Proven track record delivering mission-critical platforms handling >50,000 requests/sec.",
      "Formal degree in Computer Science or demonstrable equivalent industry impact."
    ],
    technologies: ["Go", "Rust", "Apache Kafka", "Kubernetes", "gRPC", "PostgreSQL"],
    benefits: [
      "Top-tier compensation, annual performance bonus & equity package",
      "Comprehensive global healthcare (medical, dental, vision)",
      "Continuous learning stipend ($10,000/yr) & conference travel budget",
      "Flexible hybrid working rhythm with bespoke home office setup"
    ]
  },
  {
    id: "job-02",
    slug: "staff-aiml-research-architect",
    title: "Staff AI/ML Research Architect",
    department: "AI Research",
    location: "New York, NY / Remote",
    type: "Full-Time",
    workplace: "Remote",
    experienceLevel: "Staff",
    salaryRange: "$230,000 – $300,000 + Equity",
    compensation: "$230,000 – $300,000 + Equity",
    shortOverview: "Design, fine-tune, and optimize specialized small language models (SLMs) and multi-agent reasoning networks for enterprise workflows.",
    description: "Design, fine-tune, and optimize specialized small language models (SLMs) and multi-agent reasoning networks for high-consequence enterprise applications.",
    responsibilities: [
      "Develop custom fine-tuning and parameter-efficient quantization pipelines (LoRA, QLoRA) for enterprise domains.",
      "Build high-throughput inference serving infrastructure with vLLM, TensorRT-LLM, and Triton.",
      "Research novel hallucination mitigation techniques and deterministic guardrail architectures.",
      "Collaborate with product teams to translate mathematical research into production APIs."
    ],
    requirements: [
      "7+ years in machine learning with extensive PyTorch, CUDA, and transformer architectures experience.",
      "Demonstrated experience deploying large language models or diffusion models in production at scale.",
      "Strong background in linear algebra, optimization, and GPU distributed training (DeepSpeed/FSDP).",
      "M.S. or Ph.D. in Computer Science, Applied Mathematics, or equivalent practical experience."
    ],
    qualifications: [
      "7+ years in machine learning with extensive PyTorch, CUDA, and transformer architectures experience.",
      "Demonstrated experience deploying large language models or diffusion models in production at scale.",
      "Strong background in linear algebra, optimization, and GPU distributed training (DeepSpeed/FSDP).",
      "Publications at NeurIPS, ICML, ICLR, or equivalent top-tier engineering demonstrations."
    ],
    technologies: ["PyTorch", "vLLM", "TensorRT-LLM", "CUDA", "Triton", "Ray", "Python"],
    benefits: [
      "Dedicated access to massive GPU compute clusters (H100/B200)",
      "Direct research publication sponsorship at top conferences (NeurIPS, ICML)",
      "Comprehensive premium medical coverage & wellness stipend",
      "Unlimited PTO with mandatory annual minimum rest policies"
    ]
  },
  {
    id: "job-03",
    slug: "senior-cloud-infrastructure-architect",
    title: "Senior Cloud Infrastructure Architect",
    department: "Cloud & Infra",
    location: "London, UK / Berlin / Hybrid",
    type: "Full-Time",
    workplace: "Hybrid",
    experienceLevel: "Senior",
    salaryRange: "£135,000 – £175,000 + Equity",
    compensation: "£135,000 – £175,000 + Equity",
    shortOverview: "Build immutable multi-cloud infrastructure platforms using Terraform, Kubernetes, and Istio for zero-downtime enterprise operations.",
    description: "Build immutable multi-cloud infrastructure platforms using Terraform, OpenTofu, Kubernetes, and Istio for Fortune 500 enterprises with zero tolerance for downtime.",
    responsibilities: [
      "Design active-active multi-region Kubernetes clusters across AWS, GCP, and Azure.",
      "Implement declarative GitOps pipelines using ArgoCD and automated policy-as-code (OPA/Kyverno).",
      "Engineer self-healing telemetry platforms with OpenTelemetry, Prometheus, and Grafana.",
      "Lead chaos engineering drills and disaster recovery dry runs for tier-1 client systems."
    ],
    requirements: [
      "6+ years building and operating large-scale cloud infrastructure on AWS or GCP.",
      "Deep expertise in Kubernetes internals, CNI plugins (Cilium), and service mesh (Istio).",
      "Mastery of Terraform, CI/CD automation, and Linux kernel networking.",
      "CKA/CKS certification is a strong plus."
    ],
    qualifications: [
      "6+ years building and operating large-scale cloud infrastructure on AWS or GCP.",
      "Deep expertise in Kubernetes internals, CNI plugins (Cilium), and service mesh (Istio).",
      "Mastery of Terraform, CI/CD automation, and Linux kernel networking.",
      "Proven track record managing zero-downtime multi-region cloud migrations."
    ],
    technologies: ["Kubernetes", "Terraform", "AWS", "GCP", "Cilium", "ArgoCD", "Prometheus"],
    benefits: [
      "Competitive base salary + comprehensive pension match (9%)",
      "Private medical insurance & mental wellness coverage",
      "Commuter allowance & central London/Berlin office perks",
      "Generous annual hardware budget"
    ]
  },
  {
    id: "job-04",
    slug: "lead-zero-trust-security-engineer",
    title: "Lead Zero-Trust Security Engineer",
    department: "Core Engineering",
    location: "New York, NY / Singapore / Hybrid",
    type: "Full-Time",
    workplace: "Hybrid",
    experienceLevel: "Lead",
    salaryRange: "$210,000 – $275,000 + Equity",
    compensation: "$210,000 – $275,000 + Equity",
    shortOverview: "Design and enforce zero-trust identity architectures, ephemeral credential brokers, and cryptographic key protocols across complex topologies.",
    description: "Design and enforce zero-trust identity architectures, ephemeral credential brokers, and cryptographic key management protocols across complex multi-cloud topologies.",
    responsibilities: [
      "Implement SPIFFE/SPIRE mutual authentication and HashiCorp Vault secrets orchestration.",
      "Conduct rigorous threat modeling, architectural attack surface assessments, and red team drills.",
      "Automate SAST/DAST and SBOM vulnerability management in enterprise CI/CD workflows.",
      "Guide executive stakeholders through SOC2 Type II, ISO 27001, and HIPAA compliance audits."
    ],
    requirements: [
      "7+ years in enterprise application and cloud security engineering.",
      "Hands-on experience with modern zero-trust frameworks, OIDC, OAuth2, and mutual TLS.",
      "Deep understanding of public key infrastructure (PKI), KMS, and modern cryptographic algorithms.",
      "Strong coding proficiency in Go, Python, or Rust for security automation."
    ],
    qualifications: [
      "7+ years in enterprise application and cloud security engineering.",
      "Hands-on experience with modern zero-trust frameworks, OIDC, OAuth2, and mutual TLS.",
      "Deep understanding of public key infrastructure (PKI), KMS, and modern cryptographic algorithms.",
      "Strong coding proficiency in Go, Python, or Rust for security automation."
    ],
    technologies: ["SPIFFE/SPIRE", "HashiCorp Vault", "Go", "Python", "Trivy", "OIDC", "mTLS"],
    benefits: [
      "Competitive compensation & performance incentive package",
      "Complete medical, dental, and vision insurance with zero employee premium",
      "Annual cybersecurity conference pass & training budget",
      "Relocation assistance where applicable"
    ]
  },
  {
    id: "job-05",
    slug: "lead-enterprise-product-designer",
    title: "Lead Enterprise Product Designer",
    department: "Product Design",
    location: "New York, NY / Toronto / Remote",
    type: "Full-Time",
    workplace: "Remote",
    experienceLevel: "Staff",
    salaryRange: "$190,000 – $250,000 + Equity",
    compensation: "$190,000 – $250,000 + Equity",
    shortOverview: "Craft world-class enterprise design systems, accessible UI primitives, and high-performance interfaces for complex analytical tools.",
    description: "Craft world-class enterprise design systems, accessible component primitives, and high-performance React 19 web interfaces for complex financial and operational tools.",
    responsibilities: [
      "Architect unified token-based design systems that scale across dozens of engineering squads.",
      "Develop ultra-fast, accessible (WCAG AAA) UI components in React 19, TypeScript, and Tailwind CSS.",
      "Collaborate with systems architects to design dense, high-consequence data visualizations.",
      "Maintain automated visual regression testing and component documentation suites."
    ],
    requirements: [
      "7+ years building high-craft web applications and design systems with React and TypeScript.",
      "Obsession with typography, optical alignment, micro-interactions, and rendering performance.",
      "Deep mastery of web accessibility standards, keyboard navigation, and ARIA primitives.",
      "Strong portfolio demonstrating sophisticated, non-generic enterprise UI craftsmanship."
    ],
    qualifications: [
      "7+ years building high-craft web applications and design systems with React and TypeScript.",
      "Obsession with typography, optical alignment, micro-interactions, and rendering performance.",
      "Deep mastery of web accessibility standards, keyboard navigation, and ARIA primitives.",
      "Strong portfolio demonstrating sophisticated, non-generic enterprise UI craftsmanship."
    ],
    technologies: ["Figma", "Design Tokens", "React 19", "Tailwind CSS", "TypeScript", "D3.js"],
    benefits: [
      "Competitive tech industry salary & equity participation",
      "Comprehensive healthcare and dental coverage",
      "Ergonomic home office hardware allocation ($4,000)",
      "Annual team retreats in world-class global destinations"
    ]
  }
];

export const jobsData = jobListings;

export const engineeringBenefits = [
  {
    title: "$10,000 Research Fellowship",
    description: "Unrestricted annual budget for open-source contributions, academic conferences, book purchases, and personal compute hardware."
  },
  {
    title: "100% Comprehensive Healthcare",
    description: "Zero-deductible medical, dental, and vision insurance with full dependent coverage and dedicated mental wellness care."
  },
  {
    title: "Sovereign Remote Rhythms",
    description: "Work from anywhere with high-speed internet, or utilize any of our 8 private physical engineering hubs worldwide."
  },
  {
    title: "Compute Cluster Allocations",
    description: "Direct on-demand access to dedicated H100 GPU compute pools for model fine-tuning and algorithmic exploration."
  },
  {
    title: "Generous Equity & Profit Share",
    description: "Every engineering crew member shares in the financial upside and technological patents created at Vertexa."
  },
  {
    title: "Continuous 30-Day Sabbaticals",
    description: "Paid 30-day technical sabbaticals every three years to allow deep focus on personal research or regenerative rest."
  }
];
