import { strativaImages } from './strativaImages';

export const strativaData = {
  hero: {
    headline: 'Clarity For Complex Business Decisions.',
    paragraph: 'We merge management consulting methodologies with digital analytics to optimize corporate structures, unlock EBITDA margins, and manage transitions.',
    cta: 'DISCUSS YOUR CHALLENGE',
    image: strativaImages.hero,
    metrics: [
      { label: 'EBITDA Expansion', value: '+3.2X', trend: 'up' },
      { label: 'Average Payback', value: '18 Mos', trend: 'neutral' }
    ]
  },
  expertise: [
    { title: 'Strategy', desc: 'Custom strategic frameworks designed to maximize market share, streamline operations, and secure long-term revenue streams.', image: strativaImages.expertise[0], stat: '$2.4B Value Created' },
    { title: 'Growth', desc: 'Analyzing warehouse logs, streamlining staffing allocations, and installing digital logs to accelerate market penetration.', image: strativaImages.expertise[1], stat: '42 Global Markets' },
    { title: 'Operations', desc: 'Optimizing supply chains, warehousing pipelines, shipping terminals, and introducing modern inventory software.', image: strativaImages.expertise[2], stat: '87% Operating Margin' },
    { title: 'Transformation', desc: 'Guiding teams during corporate restructuring, post-merger integration, or database shifts to achieve agility.', image: strativaImages.hero, stat: '2.5x Transaction Speed' }
  ],
  industries: ['Manufacturing & Logistics', 'Private Equity Portfolios', 'B2B Software Platforms', 'Regional Utilities'],
  approach: [
    { num: '01', name: 'Operational Inventory', desc: 'Exhaustive analysis of all cost centers, workflows, and supply lines.' },
    { num: '02', name: 'Margin Projections', desc: 'Financial simulation models projecting structural EBITDA cuts and yields.' },
    { num: '03', name: 'On-Site Integration', desc: 'Our advisors work alongside your team to enforce the changes.' }
  ],
  metricsList: [
    { value: '450+', label: 'Consulting Mandates' },
    { value: '3.2X', label: 'EBITDA Uplift' },
    { value: '18 Mos', label: 'Payback Window' },
    { value: '98%', label: 'Adoption Rate' }
  ],
  caseStudies: [
    {
      category: 'REVENUE TURNAROUND',
      title: 'Price Optimization for TechCorp',
      desc: 'Implementing value-based SaaS pricing tiers, increasing net revenue retention by 32% in nine months.',
      challenge: 'The client faced negative net revenue retention and high churn on their legacy enterprise tiers.',
      strategy: 'We performed an Operational Inventory and drafted a multi-tier subscription structure with automated usage thresholds.',
      result: 'Net revenue retention increased by 32% within nine months, and churn dropped by 18%.',
      image: strativaImages.projects[0]
    },
    {
      category: 'OPERATIONAL EFFICIENCY',
      title: 'Automating Warehouse Logistics',
      desc: 'Replacing manual tracking with cloud databases, reducing inventory cycles by 18 days.',
      challenge: 'Manual clipboard logging caused massive delivery backlogs and inventory count misalignments.',
      strategy: 'Installed event gateways connected to RFID scanners and unified dashboard sharding.',
      result: 'Inventory cycles were slashed by 18 days and stock levels aligned to 99.98% accuracy.',
      image: strativaImages.projects[1]
    }
  ],
  leadership: [
    { name: 'Marcus Vance', role: 'President, Operations', image: strativaImages.leadership[0] },
    { name: 'Nora Brooks', role: 'Director of Advisory', image: strativaImages.leadership[1] }
  ],
  testimonials: [
    {
      quote: "Strativa's hands-on approach was key in automating our warehouse logs. Our operations became significantly more predictable.",
      name: "Marcus Vance",
      role: "President of Operations",
      company: "Forge Industries"
    }
  ]
};
