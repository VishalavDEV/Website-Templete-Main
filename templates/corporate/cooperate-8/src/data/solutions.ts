import { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 'portfolio-asset-management',
    slug: 'portfolio-roof-asset-management',
    title: 'Enterprise Portfolio Roof Management',
    subtitle: 'Unified roof intelligence, predictive life-cycle budgeting, and nationwide SLA maintenance for REITs and corporate portfolios.',
    shortDescription: 'Centralize multi-site roof condition tracking, scheduled inspections, and capital expenditure forecasts across hundreds of properties.',
    fullDescription: 'Designed for institutional property owners, corporate asset managers, and national retail chains, our Portfolio Management program transforms unpredictable roof leaks into predictable 10-year capital budgets. With custom cloud dashboards, GIS asset mapping, and pre-negotiated volume pricing, your facilities team gains total control over roof health.',
    iconName: 'LayoutDashboard',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Real Estate Investment Trusts (REITs), National Retailers, Property Management Groups, Logistics Providers',
    challenges: [
      'Disparate regional roofing contractors charging inconsistent rates',
      'Sudden unexpected roof failures derailing quarterly capital expenditure plans',
      'Unorganized warranty documentation leading to forfeited manufacturer claims',
      'Lack of real-time visibility into roof conditions across multi-state properties'
    ],
    deliverables: [
      'Digital Cloud Portal with live condition scores (ACI 0-100) for every building',
      '10-Year prioritized capital expense forecasts and annual preventive maintenance schedule',
      'Guaranteed 4-hour nationwide emergency leak response SLA',
      'Standardized national pricing matrix with volume procurement discounts'
    ],
    roiMetrics: [
      { label: 'CapEx Savings Over 10 Yrs', value: '38%' },
      { label: 'Emergency Leaks Reduced', value: '72%' },
      { label: 'Average Roof Life Extension', value: '+7.5 Yrs' },
      { label: 'Admin Hours Saved / Year', value: '240+ hrs' }
    ],
    relatedCaseStudySlugs: ['logistics-hub-tpo-overhaul', 'metropolitan-medical-center']
  },
  {
    id: 'severe-climate-hardening',
    slug: 'severe-climate-hail-hardening',
    title: 'Extreme Weather & Hail Hardening',
    subtitle: 'Engineered Class 4 impact resistance, FM 1-180 wind-uplift systems, and thermal shock mitigation.',
    shortDescription: 'Defend mission-critical infrastructure against severe storm corridors, giant hail impacts, and high wind shear.',
    fullDescription: 'Facilities in hail-prone corridors and severe weather zones face millions in potential roof losses. Our Severe Climate Hardening solution deploys reinforced 80 mil membranes, high-density coverboards (such as Securock and DensDeck), and heavy-gauge continuous metal framing to withstand 3-inch hail strikes and 160 mph wind events.',
    iconName: 'ShieldAlert',
    heroImage: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Data Centers, Manufacturing Plants, Aerospace Facilities, Regional Distribution Hubs',
    challenges: [
      'Skyrocketing insurance deductibles for commercial wind/hail policies',
      'Punctures in standard single-ply roofs causing interior equipment ruin',
      'Perimeter flashing blow-offs during microbursts and severe gales',
      'Thermal cycle cracking during extreme summer-to-winter temperature swings'
    ],
    deliverables: [
      'UL 2218 Class 4 impact-rated membrane & high-density polyiso gypsum coverboard',
      'Engineered perimeter wind-lock coping and edge metal certified to ANSI/SPRI ES-1',
      'Factory Mutual (FM Global) compliant fastening densities and wind uplift ratings',
      'Post-storm automated drone triage scan included with priority repair warranty'
    ],
    roiMetrics: [
      { label: 'Hail Puncture Resistance', value: '+300%' },
      { label: 'Insurance Deductible Discount', value: 'Up to 30%' },
      { label: 'Wind Uplift Rating', value: 'FM 1-180' },
      { label: 'Zero-Breach Guarantee', value: '20 Yrs' }
    ],
    relatedCaseStudySlugs: ['aerospace-hangar-restoration', 'summit-tech-campus-solar']
  },
  {
    id: 'zero-disruption-retrofitting',
    slug: 'zero-disruption-operational-retrofitting',
    title: 'Zero-Disruption Operational Retrofitting',
    subtitle: 'Execute full re-roofing projects over active hospitals, cleanrooms, and schools with zero dust or noise interference.',
    shortDescription: 'Specialized low-odor, low-vibration re-roofing protocols designed to keep sensitive facilities 100% operational.',
    fullDescription: 'Shutting down production or evacuating patients for a roof replacement is never an option for mission-critical facilities. Aurox operates with zero-odor cold adhesive systems, sound-dampened electric equipment, HEPA intake filtration guards, and flexible off-shift scheduling (nights/weekends) so your business never misses a beat.',
    iconName: 'Clock',
    heroImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Hospitals & Healthcare Networks, Semiconductor Cleanrooms, K-12 & Universities, Pharmaceutical Facilities',
    challenges: [
      'Volatile Organic Compound (VOC) odors entering HVAC air intake systems',
      'Vibration and noise disrupting delicate surgical or precision lab equipment',
      'Strict regulatory penalties for moisture or airborne particulate contamination',
      'Limited parking and staging access in dense urban or institutional campuses'
    ],
    deliverables: [
      'Zero-VOC cold-applied solventless adhesives and heat-induction fastening',
      'Negative pressure intake protection and charcoal carbon air filtration on AHUs',
      'Off-peak scheduling with silent demolition machinery and night operations',
      'Dedicated on-site Infection Control Risk Assessment (ICRA) compliance officer'
    ],
    roiMetrics: [
      { label: 'Facility Downtime', value: '0 Hours' },
      { label: 'VOC Emission Reduction', value: '99.4%' },
      { label: 'Sound Level Capped At', value: '<60 dB' },
      { label: 'ICRA Audit Pass Rate', value: '100%' }
    ],
    relatedCaseStudySlugs: ['metropolitan-medical-center', 'highland-district-schools']
  },
  {
    id: 'net-zero-sustainable-roofing',
    slug: 'sustainable-leed-net-zero-roofing',
    title: 'Sustainable & Net-Zero ESG Roofing',
    subtitle: 'High-albedo cool roofs, vegetative green roof installations, and rainwater harvesting infrastructure.',
    shortDescription: 'Elevate your corporate sustainability scorecard while drastically cutting building energy consumption.',
    fullDescription: 'Our Net-Zero roofing solutions help commercial enterprises achieve LEED Platinum, BREEAM, and ESG performance goals. We integrate ultra-white high-SRI coatings, modular green sedum vegetative trays for stormwater retention, and high-efficiency polyiso insulation with zero ozone depletion potential (ODP).',
    iconName: 'Leaf',
    heroImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Corporate Headquarters, Green Commercial Real Estate, Municipal Buildings, Sustainable Tech Campuses',
    challenges: [
      'Urban Heat Island effect increasing cooling costs and municipal penalties',
      'Stormwater runoff regulations requiring costly on-site retention vaults',
      'Corporate mandates to achieve carbon neutrality and LEED credits',
      'Roof waste disposal fees and environmental landfill impact'
    ],
    deliverables: [
      'High-albedo solar reflective membranes (SRI > 105) certified by CRRC',
      'Lightweight modular sedum green roof system capturing up to 70% of rainfall',
      '100% closed-loop insulation recycling diverting existing materials from landfills',
      'Formal LEED credit documentation package prepared by LEED AP specialists'
    ],
    roiMetrics: [
      { label: 'HVAC Energy Reductions', value: '28-35%' },
      { label: 'Stormwater Retention', value: '65-80%' },
      { label: 'LEED Points Earned', value: 'Up to 12' },
      { label: 'Landfill Diversion Rate', value: '91%' }
    ],
    relatedCaseStudySlugs: ['summit-tech-campus-solar', 'logistics-hub-tpo-overhaul']
  }
];
