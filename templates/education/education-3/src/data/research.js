export const RESEARCH_TAGS = [
  { id: "ai", label: "Artificial Intelligence", count: 42, activeLabs: 8, color: "#3B82F6" },
  { id: "quantum", label: "Quantum Information", count: 28, activeLabs: 5, color: "#8B5CF6" },
  { id: "robotics", label: "Robotics & Dexterity", count: 35, activeLabs: 6, color: "#06B6D4" },
  { id: "climate", label: "Climate Technology", count: 24, activeLabs: 4, color: "#10B981" },
  { id: "cyber", label: "Cybersecurity & Crypto", count: 31, activeLabs: 7, color: "#F59E0B" },
  { id: "biotech", label: "Biotechnology & Nano", count: 29, activeLabs: 5, color: "#EC4899" },
  { id: "space", label: "Space Data & Telemetry", count: 19, activeLabs: 3, color: "#6366F1" }
];

export const RESEARCH_PROJECTS = [
  {
    id: "proj-1",
    code: "PROJECT NEXUS-7",
    title: "Autonomous Swarm Coordination in Sub-Zero Environments",
    domain: "Robotics & AI",
    lead: "Dr. Alexander John",
    status: "Active Field Testing",
    abstract: "Developing decentralised mesh consensus algorithms for autonomous robotic micro-drones operating under geomagnetic distortion.",
    grant: "$4.8M NSF Advanced Research Grant",
    nodes: ["AI", "Robotics", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    code: "PROJECT HELIOS",
    title: "Perovskite Photovoltaic Energy Harvesting at 34% Efficiency",
    domain: "Climate Technology",
    lead: "Prof. Sophia Chen",
    status: "Peer Review & Patent Stage",
    abstract: "Molecular passivation of triple-junction tandem solar cells to achieve unprecedented photon-to-electron yield.",
    grant: "$6.2M Clean Tech Vanguard Fund",
    nodes: ["Climate Technology", "Biotechnology"],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    code: "PROJECT AETHER-Q",
    title: "Fault-Tolerant Quantum Key Distribution Network",
    domain: "Quantum Computing",
    lead: "Prof. Elena Rostova",
    status: "Operational Prototype",
    abstract: "Establishing inter-city satellite-to-ground quantum encrypted optical communication link resistant to side-channel interception.",
    grant: "$8.5M Global Cyber Defense Council",
    nodes: ["Quantum Information", "Cybersecurity", "Space Telemetry"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  }
];
