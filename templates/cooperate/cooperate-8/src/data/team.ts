export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Executive Leadership" | "Practice Leadership" | "Advisory Board";
  bio: string;
  credentials: string[];
  image: string;
  linkedinUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  quote?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "elena-morgan",
    name: "Elena Morgan",
    role: "Chief Executive Officer & Co-Founder",
    category: "Executive Leadership",
    bio: "Former Partner at McKinsey & Company and AI Systems Strategist at Google DeepMind. Elena leads Vertexa's strategic expansion and enterprise advisory partnerships, architecting transformation programs for Fortune 100 institutions.",
    credentials: ["B.S. in Computer Science & M.B.A. (Stanford)", "Ex-McKinsey Partner", "Ex-DeepMind Fellow"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    linkedinUrl: "https://linkedin.com",
    quote: "True enterprise transformation is never about software adoption; it is about building the architectural agility to outpace market volatility."
  },
  {
    id: "marcus-reed",
    name: "Marcus Reed",
    role: "Chief Technology Officer & Co-Founder",
    category: "Executive Leadership",
    bio: "Pioneered distributed systems and large-scale cloud architectures as Principal Infrastructure Architect at Google Cloud and AWS. Marcus oversees Vertexa's core engineering discipline, research labs, and technical governance.",
    credentials: ["Ph.D. in Distributed Systems (MIT)", "Ex-Google Cloud Principal Architect", "Author of 14 Cloud Patents"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    quote: "Complexity is easy; mathematical simplicity and zero-downtime elegance are the hardest things in computer science."
  },
  {
    id: "aisha-patel",
    name: "Aisha Patel",
    role: "Chief Strategy Officer",
    category: "Executive Leadership",
    bio: "Previously Vice President of Enterprise Solutions at Palantir Technologies. Aisha directs Vertexa's global industry practices, sovereign infrastructure initiatives, and strategic ecosystem alliances across the Americas and EMEA.",
    credentials: ["M.Sc. in Operations Research (Oxford)", "Ex-Palantir VP Enterprise", "World Economic Forum Global Shaper"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80",
    linkedinUrl: "https://linkedin.com",
    quote: "Organizations that control their own cognitive infrastructure will define the economic boundaries of the next century."
  },
  {
    id: "daniel-brooks",
    name: "Daniel Brooks",
    role: "Chief Operating Officer",
    category: "Executive Leadership",
    bio: "Over 18 years scaling global engineering operations and mission-critical cloud reliability. Formerly Director of Global SRE at Amazon Web Services, Daniel oversees Vertexa's worldwide delivery centers and 24/7 engineering pods.",
    credentials: ["B.Eng. in Software Engineering (Waterloo)", "Ex-AWS Director of Global SRE", "DevOps Institute Fellow"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    linkedinUrl: "https://linkedin.com",
    quote: "Reliability is not an afterthought; it is an uncompromising mathematical guarantee baked into every build."
  },
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    role: "VP of Artificial Intelligence Research",
    category: "Practice Leadership",
    bio: "Leading research scientist in multimodal foundation models and reinforcement learning from human feedback (RLHF). Dr. Chen directs Vertexa's AI Labs and fine-tuning engineering clusters.",
    credentials: ["Ph.D. in Machine Learning (Carnegie Mellon)", "Ex-Meta FAIR Senior Researcher", "Published in NeurIPS & ICML"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "david-okafor",
    name: "David Okafor",
    role: "Head of Cybersecurity & Cryptography",
    category: "Practice Leadership",
    bio: "Zero-trust defensive architect with deep expertise in quantum-resistant cryptography, nation-state threat mitigation, and hardware security modules (HSMs).",
    credentials: ["CISSP, CISM, OSCP", "Ex-U.S. Cyber Command Advisor", "National Defense Fellow"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
    linkedinUrl: "https://linkedin.com"
  }
];
