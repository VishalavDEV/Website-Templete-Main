import { lumoraImages } from './lumoraImages';

export const lumoraData = {
  hero: {
    headline: 'WE BUILD WHAT COMES NEXT.',
    subheading: 'We deploy elite engineering squads, seed capital, and product design systems to launch companies in weeks, not years.',
    ctaPrimary: 'SEE OUR STARTUPS',
    ctaSecondary: 'PARTNER WITH US',
    image: lumoraImages.hero,
    floatingCards: [
      { id: 1, title: 'Solas App', desc: 'Solar Micropayments', raised: '$3.5M Seed', image: lumoraImages.floatingIcons[0] },
      { id: 2, title: 'Apex CRM', desc: 'Sales Automation', raised: '$5.2M Series A', image: lumoraImages.floatingIcons[1] }
    ]
  },
  whatWeBuild: [
    { title: 'SaaS Platforms', desc: 'B2B workflows, pipeline automation tools, and real-time database interfaces.' },
    { title: 'Consumer Apps', desc: 'Mobile fintech ledgers, fractional investing systems, and interactive tools.' },
    { title: 'Web3 & Security', desc: 'Sovereign ledger trails, envelope encryption setups, and credentials caches.' }
  ],
  portfolio: [
    { name: 'Solas App', tag: 'FINTECH', desc: 'A consumer finance application enabling users to invest spare coins directly into solar portfolios.', raised: '$3.5M Raised', image: lumoraImages.showcase[0], metrics: '45k active wallets' },
    { name: 'Apex CRM', tag: 'HEALTH', desc: 'An automated customer pipeline tool built for high-scale enterprise field sales reps.', raised: '$5.2M Raised', image: lumoraImages.showcase[1], metrics: '120+ clinics onboard' },
    { name: 'Collab Suite', tag: 'AI', desc: 'A real-time workspace collaboration tool with spatial audio channels and boards.', raised: 'Co-Built', image: lumoraImages.showcase[2], metrics: '8ms sync latency' },
    { name: 'Vesper Shop', tag: 'COMMERCE', desc: 'An autonomous retail inventory system utilizing edge analytics and smart triggers.', raised: '$1.8M Raised', image: lumoraImages.showcase[3], metrics: '99% count accuracy' }
  ],
  products: [
    { name: 'Pulse Editor', type: 'DESIGN UTILITY', desc: 'Auto-layout responsive engine for Figma schemas.' },
    { name: 'Flow Ledger', type: 'FINANCIAL SDK', desc: 'Securing transaction audit trails under 8ms.' }
  ],
  howWeWork: [
    { step: '01 Validate', title: 'Pre-Seed Waitlists', desc: 'We build landing pages and run cold campaigns to validate buyer intent first.' },
    { step: '02 Engine', title: 'Sprint Engineering', desc: 'We assign 4 senior developers to write production-ready code in 30 days.' },
    { step: '03 Scale', title: 'Series A Pipeline', desc: 'We connect founders with top-tier VCs to raise capital and hand off operations.' }
  ],
  numbers: [
    { value: '18', label: 'Ventures Launched' },
    { value: '$85M+', label: 'Total Capital Raised' },
    { value: '90%', label: 'Survival Rate Year 2' },
    { value: '4.8X', label: 'Valuation Markup' }
  ],
  team: [
    { name: 'Sylvia Cole', role: 'Venture Architect', image: lumoraImages.team[0], socials: { linkedin: '#', twitter: '#' } },
    { name: 'Ethan Vance', role: 'Head of Engineering', image: lumoraImages.team[1], socials: { linkedin: '#', github: '#' } }
  ],
  successStories: [
    {
      quote: "Lumora Labs co-built our MVP in four weeks. Their VC contacts got us in front of major seed funds, raising $3.5M within months.",
      author: "Sylvia Cole",
      company: "Solas App"
    }
  ]
};
