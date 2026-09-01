export interface Service {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "brand-identity",
    index: "01",
    title: "Brand Identity",
    tagline: "Who you are, said clearly enough to repeat.",
    description:
      "Strategy, naming, identity systems and guidelines built to survive contact with real organizations. We design brands as behaviors — how they look, speak and act — not as static logos awaiting placement.",
    deliverables: [
      "Positioning & narrative",
      "Naming & verbal identity",
      "Logo & identity system",
      "Typography & color systems",
      "Brand guidelines & rollout kit",
    ],
  },
  {
    id: "digital-products",
    index: "02",
    title: "Digital Products",
    tagline: "Interfaces that respect the person on the other side.",
    description:
      "Research-led product design for web and mobile. We map the emotional state of each task before touching pixels, then prototype in code early enough for decisions to be reversible.",
    deliverables: [
      "Discovery & research",
      "UX architecture & flows",
      "Interface design",
      "Interactive prototypes",
      "Usability testing",
    ],
  },
  {
    id: "motion-film",
    index: "03",
    title: "Motion & Film",
    tagline: "Movement with a job to do.",
    description:
      "Motion identities, title sequences and short film direction. Every animation earns its keep by communicating hierarchy, telling a story or acknowledging an action — decoration is someone else's department.",
    deliverables: [
      "Motion identity systems",
      "Title & credit design",
      "Campaign films",
      "Product & UI animation",
      "Editor toolkits",
    ],
  },
  {
    id: "web-engineering",
    index: "04",
    title: "Web Engineering",
    tagline: "Craft in the code, not just the comp.",
    description:
      "Production-grade front-end builds with performance budgets and accessibility baked in from the first commit. We ship sites your team can maintain without us — and often do.",
    deliverables: [
      "Design-to-code build",
      "CMS integration",
      "Performance budgets",
      "WCAG 2.2 AA compliance",
      "Handover & enablement",
    ],
  },
  {
    id: "design-systems",
    index: "05",
    title: "Design Systems",
    tagline: "One source of truth your teams actually use.",
    description:
      "Component libraries, tokens and documentation that keep dozens of contributors coherent. We build systems around the way your org works, not around a diagram from a conference talk.",
    deliverables: [
      "Token architecture",
      "Component library",
      "Documentation site",
      "Contribution workflow",
      "Adoption support",
    ],
  },
];
