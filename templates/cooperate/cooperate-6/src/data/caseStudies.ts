import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-northstar-tech',
    slug: 'global-technology-enterprise',
    clientName: 'Northstar Technologies',
    clientType: 'Public Enterprise (NASDAQ: NSTR)',
    industry: 'Enterprise Software & Cloud Infrastructure',
    companySize: '8,500+ Employees across 24 countries',
    region: 'Global (North America, APAC, Europe)',
    travelType: 'Corporate Travel Management & Policy Engine',
    challenge: 'Managing over 1,400 monthly international business trips across 18 countries without unified policy controls, leading to fragmented booking channels, runaway flight expenses, and opaque Duty of Care compliance.',
    solution: 'Implemented Aurelia Journeys Unified Travel Platform integrated with Workday and SAP Concur. Automated dynamic travel policy tiers, negotiated tier-1 airline route corridors between San Francisco, Tokyo, London, and Singapore, and deployed 24/7 dedicated traveler assistance.',
    results: [
      { label: 'Travel Spend Reduction', value: '28.4%', description: 'Saved $4.2M in annual corporate travel budget through negotiated rates and proactive booking windows.' },
      { label: 'Policy Compliance', value: '94.2%', description: 'Increased in-policy bookings from a previous low of 58% within 90 days of deployment.' },
      { label: 'Traveler Satisfaction', value: '96.8%', description: 'Highest internal employee survey rating recorded for company travel services.' },
      { label: 'Emergency Contact Time', value: '< 90s', description: 'Real-time proactive Duty of Care tracking enabled instant assistance during regional disruptions.' }
    ],
    quote: {
      text: 'Aurelia transformed corporate travel from an operational challenge into a seamless strategic advantage for our entire organization. Their blend of smart technology and impeccable human touch is unmatched.',
      author: 'Rachel Morgan',
      title: 'Global Operations Director',
      company: 'Northstar Technologies'
    },
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    duration: '36 Months Partnership',
    activeTravelers: 3400
  },
  {
    id: 'cs-veridian-finance',
    slug: 'financial-services-group',
    clientName: 'Veridian Financial Group',
    clientType: 'Private Equity & Wealth Management',
    industry: 'Investment Banking & Asset Management',
    companySize: '1,200+ Managing Partners & Analysts',
    region: 'North America & Europe (NYC, London, Zurich, Frankfurt)',
    travelType: 'Executive & C-Suite Mobility',
    challenge: 'Managing partners and dealmakers frequently experienced flight delays, rigid cancellation penalties on fast-moving M&A roadshows, and inconsistent luxury hotel accommodations, which degraded executive productivity and caused deal friction.',
    solution: 'Deployed Aurelia Executive Mobility Concierge with dedicated round-the-clock priority dispatch, private aviation backup agreements, tarmac gate fast-tracks at JFK/LHR/ZRH, and guaranteed boardroom suites across partner luxury hotels.',
    results: [
      { label: 'Traveler Satisfaction', value: '+43%', description: 'Partners reported zero deal roadshow disruptions due to travel delays over a 12-month period.' },
      { label: 'Booking Turnaround', value: '4.5 mins', description: 'Average response time for last-minute itinerary adjustments and private charter re-routing.' },
      { label: 'Executive Hours Saved', value: '3,800 hrs', description: 'Eliminated airport queue wait times and manual itinerary coordination.' },
      { label: 'Carbon Offset Match', value: '100%', description: 'Fully documented carbon footprint offsetting across all trans-continental flights.' }
    ],
    quote: {
      text: 'For high-stakes M&A roadshows, time is the ultimate currency. Aurelia ensures our managing partners move with precision, discretion, and absolute peace of mind.',
      author: 'David Chen',
      title: 'Senior Managing Partner',
      company: 'Veridian Financial Group'
    },
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop',
    duration: '24 Months Partnership',
    activeTravelers: 450
  },
  {
    id: 'cs-atlas-consulting',
    slug: 'international-consulting-firm',
    clientName: 'Atlas Group International',
    clientType: 'Global Strategic Advisory',
    industry: 'Management & Technology Consulting',
    companySize: '14,000+ Consultants Worldwide',
    region: 'Global (52 Office Locations)',
    travelType: 'Team Logistics & MICE Global Summits',
    challenge: 'Coordinating weekly project team deployments for hundreds of consultants flying to enterprise client sites, alongside organizing the firm’s annual 2,500-attendee Global Partner Summit in Dubai.',
    solution: 'Implemented automated team travel coordination software with bulk flight ticketing algorithms, seamless corporate hotel block allocations, and full on-site event production and delegate logistics in Dubai.',
    results: [
      { label: 'Coordination Speed', value: '35% Faster', description: 'Reduced team travel dispatch turnaround from 48 hours to under 4 hours.' },
      { label: 'Summit Cost Savings', value: '$1.8M Saved', description: 'Optimized venue, flight charter, and hospitality negotiations in Dubai.' },
      { label: 'Automated Expense Reconciliation', value: '99.1%', description: 'Direct data feed into company ERP eliminated manual consultant expense claims.' },
      { label: 'Delegate NPS', value: '+92', description: 'Record delegate feedback for the Global Partner Summit event logistics.' }
    ],
    quote: {
      text: 'Managing thousands of consultants in motion every single week requires extraordinary logistics. Aurelia delivers consistency and cost discipline at true global scale.',
      author: 'Elena Rostova',
      title: 'Chief People & Operations Officer',
      company: 'Atlas Group International'
    },
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    duration: '48 Months Partnership',
    activeTravelers: 6200
  }
];
