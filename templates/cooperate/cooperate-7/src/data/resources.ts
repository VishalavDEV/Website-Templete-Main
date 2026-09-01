export interface ResourceItem {
  id: string;
  title: string;
  type: "Whitepaper" | "E-Book" | "Tech Guide" | "Webinar" | "Benchmark Report";
  category: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
  iconName: string;
  featured: boolean;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "res-1",
    title: "2026 Enterprise AI Readiness & Governance Framework",
    type: "Whitepaper",
    category: "AI & Machine Learning",
    description: "A comprehensive 48-page executive blueprint covering model risk management, hallucination mitigation, and VPC data sovereignty.",
    fileSize: "4.2 MB PDF",
    downloadUrl: "#download",
    iconName: "FileText",
    featured: true
  },
  {
    id: "res-2",
    title: "The Zero-Downtime Cloud Migration Playbook",
    type: "Tech Guide",
    category: "Cloud Solutions",
    description: "Architectural patterns, CDC pipelines, and rollback fail-safes for multi-terabyte enterprise database migrations.",
    fileSize: "6.8 MB PDF",
    downloadUrl: "#download",
    iconName: "BookOpen",
    featured: true
  },
  {
    id: "res-3",
    title: "Zero-Trust Architecture & DevSecOps Benchmark Report",
    type: "Benchmark Report",
    category: "Cybersecurity",
    description: "Survey insights from 350+ enterprise CISOs on shifting security left and achieving continuous SOC 2 Type II audit readiness.",
    fileSize: "3.1 MB PDF",
    downloadUrl: "#download",
    iconName: "ShieldAlert",
    featured: false
  },
  {
    id: "res-4",
    title: "Building Modern Micro-Frontends with React 19",
    type: "E-Book",
    category: "Software Development",
    description: "Practical guide to module federation, decoupled CI/CD pipelines, and shared design token architectures.",
    fileSize: "5.5 MB PDF",
    downloadUrl: "#download",
    iconName: "Layers",
    featured: false
  }
];
