export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string;
}

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Helena von Bergmann',
    role: 'Chief Executive Officer & Co-Founder',
    bio: 'Former Managing Director of Global Logistics at Swiss Re with 22 years of executive mobility expertise. Helena leads Aurelia’s worldwide enterprise strategy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    credentials: 'Ex-Swiss Re, INSEAD MBA'
  },
  {
    name: 'Julian Vance',
    role: 'President & Chief Operating Officer',
    bio: 'Architect of Aurelia’s global 24/7 duty-of-care network. Spent 15 years directing diplomatic and sovereign travel delegations across EMEA and the Americas.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    credentials: 'Ex-British Foreign Office Logistics'
  },
  {
    name: 'Dr. Alistair Sterling',
    role: 'Chief Technology Officer',
    bio: 'Pioneered machine-learning airfare optimization algorithms and real-time flight tracking platforms. Stanford PhD in Distributed Systems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    credentials: 'PhD Stanford, Ex-Amadeus Lead Architect'
  },
  {
    name: 'Victoria Saint-Claire',
    role: 'Director of C-Suite & VIP Concierge',
    bio: 'Renowned authority on ultra-luxury hospitality and private aviation logistics, overseeing bespoke travel architecture for heads of state and Fortune 100 leaders.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    credentials: '20+ Years Ultra-Luxury Private Aviation'
  }
];

export const companyTimeline = [
  {
    year: '2001',
    title: 'Founding in Mayfair, London',
    description: 'Established as an exclusive executive travel boutique managing travel for European merchant banks and private family offices.'
  },
  {
    year: '2008',
    title: 'Transatlantic Expansion & New York Office',
    description: 'Opened North American headquarters in Manhattan to support cross-border private equity roadshows and Wall Street firms.'
  },
  {
    year: '2015',
    title: 'Singapore & Dubai Regional Hubs',
    description: 'Expanded full 24/7 coverage across the Asia-Pacific and Middle East, launching dedicated MICE event production divisions.'
  },
  {
    year: '2020',
    title: 'Aurelia Enterprise Intelligence Platform',
    description: 'Released proprietary real-time Duty of Care, automated policy enforcement, and predictive travel disruption technology.'
  },
  {
    year: '2024',
    title: 'Net-Zero Aviation & Global ESG Reporting',
    description: 'Became the first global travel consultancy to offer automatic 100% verified sustainable aviation fuel (SAF) booking integrations.'
  },
  {
    year: '2026',
    title: '1,500+ Corporate Clients Across 120+ Countries',
    description: 'Managing over $2.4B in annual corporate travel itineraries with industry-leading 98% client retention.'
  }
];

export const awardsList = [
  {
    year: '2026',
    title: 'World Travel Awards — World’s Leading Corporate Travel Management Company',
    organization: 'World Travel Awards'
  },
  {
    year: '2025',
    title: 'Business Travel Innovation of the Year (Duty of Care Technology)',
    organization: 'Business Travel Awards Europe'
  },
  {
    year: '2025',
    title: 'Best Global MICE & Event Architecture Firm',
    organization: 'International Luxury Travel Market (ILTM)'
  },
  {
    year: '2024',
    title: 'Excellence in Sustainable Aviation Integration (ESG Benchmark)',
    organization: 'Global Business Travel Association (GBTA)'
  }
];
