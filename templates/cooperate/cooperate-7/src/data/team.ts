export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  fullBio: string;
  avatar: string;
  linkedin: string;
  twitter?: string;
  github?: string;
  expertise: string[];
  education: string;
  featured: boolean;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    role: "CEO & Co-founder",
    department: "Executive Leadership",
    bio: "Visionary technology executive with 15+ years scaling enterprise software architectures and driving global digital transformations.",
    fullBio: "Arjun Mehta is the Chief Executive Officer and Co-founder of Straventa. Prior to founding Straventa in 2014, Arjun held senior engineering leadership roles at Fortune 500 tech firms where he oversaw distributed computing platforms serving hundreds of millions of users worldwide. He is passionate about ethical AI, sustainable engineering practices, and fostering high-impact engineering cultures.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/arjun-mehta-straventa",
    twitter: "https://twitter.com/arjun_straventa",
    expertise: ["Enterprise Strategy", "Cloud Architecture", "Digital Transformation", "Venture Scaling"],
    education: "M.S. in Computer Science, Stanford University",
    featured: true
  },
  {
    id: "team-2",
    slug: "sophia-williams",
    name: "Sophia Williams",
    role: "CTO & Co-founder",
    department: "Executive Leadership",
    bio: "Pioneer in artificial intelligence and distributed systems, leading Straventa's core engineering and R&D divisions.",
    fullBio: "Sophia Williams serves as Chief Technology Officer and Co-founder. She spearheads Straventa's technology roadmap, oversees architectural standards across all client engagements, and directs the Straventa AI Research Labs. With patents in distributed stream processing and neural network optimization, Sophia is a frequent keynote speaker at global tech summits.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/sophia-williams-straventa",
    twitter: "https://twitter.com/sophia_tech",
    github: "https://github.com/sophiawilliams",
    expertise: ["Generative AI", "Distributed Systems", "Machine Learning Ops", "Cloud Infrastructure"],
    education: "Ph.D. in Artificial Intelligence, MIT",
    featured: true
  },
  {
    id: "team-3",
    slug: "daniel-johnson",
    name: "Daniel Johnson",
    role: "VP of Engineering",
    department: "Engineering",
    bio: "Seasoned engineering leader orchestrating global engineering squads with a focus on code craftsmanship and zero-defect delivery.",
    fullBio: "Daniel Johnson leads Straventa's global software engineering organization of 200+ developers, QA architects, and DevOps practitioners. Over the past decade, Daniel has architected mission-critical banking platforms, healthcare telemetry pipelines, and high-frequency trading applications.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/daniel-johnson-straventa",
    github: "https://github.com/danielj-eng",
    expertise: ["Software Architecture", "DevOps & CI/CD", "High-Throughput APIs", "Agile Engineering"],
    education: "B.S. in Software Engineering, UC Berkeley",
    featured: true
  },
  {
    id: "team-4",
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "Head of Operations",
    department: "Operations & Delivery",
    bio: "Global operations strategist driving operational excellence, project governance, and seamless client success across 15+ countries.",
    fullBio: "Priya Sharma is Head of Operations at Straventa. She ensures seamless project execution, client stakeholder alignment, resource optimization, and compliance standards across international project hubs in North America, Europe, and Asia-Pacific.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/priya-sharma-straventa",
    twitter: "https://twitter.com/priyasharma_ops",
    expertise: ["Global Project Delivery", "Client Governance", "Agile Transformation", "Operational Scale"],
    education: "MBA, Harvard Business School",
    featured: true
  },
  {
    id: "team-5",
    slug: "marcus-vance",
    name: "Marcus Vance",
    role: "Principal Security Architect",
    department: "Cybersecurity",
    bio: "Zero-Trust authority and former chief security advisor safeguarding enterprise data across regulated industries.",
    fullBio: "Marcus leads Straventa's cybersecurity and compliance practice. He has conducted hundreds of threat modeling assessments and designed multi-layer defense perimeters for banking, healthcare, and national defense vendors.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/marcus-vance",
    expertise: ["Zero-Trust Architecture", "SOC2 / HIPAA Compliance", "Penetration Testing", "Threat Modeling"],
    education: "M.S. in Information Security, Carnegie Mellon University",
    featured: false
  },
  {
    id: "team-6",
    slug: "charlotte-chen",
    name: "Charlotte Chen",
    role: "Head of Product Design",
    department: "Design & UX",
    bio: "Design leader obsessed with human-centered ergonomics, enterprise usability systems, and frictionless conversion flows.",
    fullBio: "Charlotte oversees the UI/UX design studio at Straventa. Her design philosophy harmonizes minimalist aesthetics with deep analytical UX research, helping enterprise products achieve unprecedented user adoption rates.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/charlotte-chen-design",
    expertise: ["Design Systems", "Product Strategy", "WCAG 2.1 AAA Accessibility", "Rapid Prototyping"],
    education: "B.Des in Interaction Design, RISD",
    featured: false
  }
];
