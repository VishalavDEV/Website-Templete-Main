import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'comm-tpo-epdm',
    slug: 'commercial-flat-roofing',
    title: 'Commercial Flat Roofing Systems',
    shortDescription: 'Industrial-grade single-ply TPO, PVC, and EPDM membranes engineered for maximum puncture resistance and energy efficiency.',
    fullDescription: 'Our commercial flat roofing systems deliver lifetime protection for large-scale industrial complexes, logistics hubs, data centers, and corporate facilities. We specialize in hot-air welded thermoplastic (TPO/PVC) and synthetic rubber (EPDM) installations that exceed ASTM wind-uplift and fire resistance standards.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '60 mil & 80 mil reinforced TPO/PVC membrane thickness',
      'Factory-certified 25 to 30-year NDL (No Dollar Limit) manufacturer warranties',
      'High solar reflectance index (SRI > 104) lowering HVAC load up to 35%',
      'Precision robotic seam-welding with electronic leak detection integrity checks'
    ],
    benefits: [
      'Zero downtime during operational business hours',
      'Substantial reduction in seasonal energy expenditures',
      'Superior chemical, ozone, and microbial resistance',
      'Asset-backed transferable institutional warranties'
    ],
    warrantyOptions: '20 to 30-Year NDL Warranty Options Available',
    specifications: [
      { label: 'Membrane Types', value: '80-mil TPO / 60-mil PVC / 90-mil EPDM' },
      { label: 'Solar Reflectance Index (SRI)', value: '104 (Exceeds LEED & Title 24)' },
      { label: 'Wind Uplift Rating', value: 'FM 1-90 / FM 1-120 Certified' },
      { label: 'Fire Rating', value: 'UL Class A ASTM E108' }
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1584463699039-44755a5b514a?w=1000&auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=1000&auto=format&fit=crop&q=80'
    },
    processSteps: [
      { title: 'Core Moisture Scan & Structural Survey', desc: 'Non-destructive infrared thermography to identify any wet substrate insulation before tear-off.' },
      { title: 'Substrate Prep & Polyiso Tapered Design', desc: 'Precision engineered slope insulation ensuring positive drainage to scuppers and internal drains.' },
      { title: 'Membrane Mechanical/Adhered Attachment', desc: 'Installation using FM-Global 1-90/1-120 high-wind mechanical fastening patterns.' },
      { title: 'Robotic Seam Welding & Spark Testing', desc: 'Thermal hot-air automated seam fusing followed by high-voltage spark testing for pinhole detection.' }
    ],
    pricingStartingAt: '$4.50 / sq ft',
    category: 'Commercial',
    popular: true
  },
  {
    id: 'standing-seam-metal',
    slug: 'architectural-standing-seam-metal',
    title: 'Architectural Standing Seam Metal',
    shortDescription: 'High-tensile Galvalume & Kynar 500 pre-finished metal roofing with concealed fasteners for 50+ year architectural resilience.',
    fullDescription: 'Custom on-site roll-formed standing seam systems offering sleek, modern aesthetics and unmatched structural durability. Designed to withstand class-4 hail, hurricane-force winds up to 160 mph, and heavy snow loads with zero exposed screw penetrations.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '24-Gauge commercial Galvalume substrate with 70% PVDF Kynar 500 coating',
      'Continuous concealed clip system permitting thermal expansion and contraction',
      'UL 2218 Class 4 Impact Resistance & Class A Fire Rating',
      'Custom fabricated copper, zinc, and aluminum perimeter flashings'
    ],
    benefits: [
      '50 to 70+ year lifespan with near-zero ongoing maintenance',
      'Substantial reduction in building insurance premiums (up to 25%)',
      '100% recyclable materials contributing to LEED Green certification',
      'Elevated modern aesthetic that boosts property appraisal value'
    ],
    warrantyOptions: '50-Year Non-Prorated Manufacturer Warranty',
    specifications: [
      { label: 'Substrate Gauge', value: '24-Gauge / 22-Gauge Galvalume AZ50' },
      { label: 'Finish Coating', value: '70% PVDF Kynar 500 Resin' },
      { label: 'Impact Resistance', value: 'UL 2218 Class 4 (2" Steel Ball at 90mph)' },
      { label: 'Wind Velocity Limit', value: 'Engineered up to 160 MPH Continuous Gust' }
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1000&auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80'
    },
    processSteps: [
      { title: 'Laser 3D Facade & Roof Deck Profiling', desc: 'High-precision LIDAR measurements for millimeter-accurate custom panel fabrication.' },
      { title: 'High-Temp Synthetic Self-Adhering Underlayment', desc: 'Full-deck breathable membrane with ice & water shield in all valleys and eaves.' },
      { title: 'On-Site Continuous Panel Roll-Forming', desc: 'Seamless continuous length panels roll-formed directly on jobsite to eliminate end-laps.' },
      { title: 'Concealed Mechanical Seaming', desc: 'Double-lock 180° mechanical seaming locking panels securely against extreme uplift.' }
    ],
    pricingStartingAt: '$9.25 / sq ft',
    category: 'Commercial',
    popular: true
  },
  {
    id: 'structural-replacement',
    slug: 'structural-roof-replacement-re-roofing',
    title: 'Full Structural Roof Replacement',
    shortDescription: 'Complete end-to-end deck-level reconstruction, code modernization, seismic tie-ins, and heavy-duty load optimization.',
    fullDescription: 'When roofs reach structural end-of-life or sustain catastrophic failure, our engineering team manages complete tear-offs, deck replacements (steel, wood, or lightweight concrete), and code compliance retrofits with safety protocols.',
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'OSHA Tier-1 dedicated safety managers and tethered crane operations',
      'Full decking engineering inspection and rotten joist / truss remediation',
      'Complete ventilation recalculation meeting 1:150 balanced airflow standards',
      'EPA certified dust and waste recycling protocols (over 85% diverted from landfill)'
    ],
    benefits: [
      'Elimination of structural rot, mold risk, and indoor air hazards',
      'Immediate compliance with newly revised local IBC building codes',
      'Full peace of mind with 20-year non-prorated labor & material warranty',
      'Enhanced thermal insulation reducing indoor temperature swings'
    ],
    warrantyOptions: '25-Year Labor & Material Guarantee',
    specifications: [
      { label: 'Structural Decking', value: 'B-Deck 22ga Steel / 3/4" CDX Plywood / LWIC' },
      { label: 'Insulation R-Value', value: 'Continuous Polyiso R-30 to R-45' },
      { label: 'Slope Correction', value: 'Precision Tapered 1/4":12" Positive Pitch' },
      { label: 'Safety Accreditation', value: 'OSHA 1926 Subpart M 100% Tie-Off' }
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1584463699039-44755a5b514a?w=1000&auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop&q=80'
    },
    processSteps: [
      { title: 'Containment & Safety Zone Setup', desc: 'Pedestrian perimeter barriers, ground protection tarps, and debris chutes.' },
      { title: 'Tear-Off Down to Decking', desc: 'Systematic section removal ensuring daily waterproof temporary tie-ins.' },
      { title: 'Deck Remediation & Structural Stiffening', desc: 'Replacement of compromised decking and installation of heavy duty hurricane ties.' },
      { title: 'New Assembly Build & Final City Sign-Off', desc: 'Full multi-layer installation followed by third-party engineering sign-off.' }
    ],
    pricingStartingAt: '$5.50 / sq ft',
    category: 'Industrial',
    popular: false
  },
  {
    id: 'drone-inspection-maintenance',
    slug: 'preventive-maintenance-drone-ir-inspection',
    title: 'Preventive Asset Care & Drone IR Inspections',
    shortDescription: 'AI-assisted aerial thermal diagnostics, scheduled cleaning, drain clearing, and preventive warranty preservation plans.',
    fullDescription: 'Proactive commercial asset management that extends roof lifespan by 8 to 12 years. Leveraging high-resolution RGB and radiometric thermal drone cameras, our certified thermographers detect subsurface moisture entrapment and flashing micro-fractures before leaks penetrate your building envelope.',
    iconName: 'Search',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'FLIR radiometric thermal imaging with delta-T precision moisture mapping',
      'Automated CAD roof mapping with pinpoint GPS defective point tracking',
      'Biannual physical walk-throughs, drain debris clearing, and seam touch-ups',
      'Cloud client portal access with full historic photo archives and capital expenditure forecasts'
    ],
    benefits: [
      'Reduces emergency water leak incidents by over 74%',
      'Satisfies manufacturer requirements to keep 20+ year warranties valid',
      'Actionable CapEx budgeting reports for property managers and REITs',
      'Rapid turnaround digital audit reports within 48 hours'
    ],
    warrantyOptions: 'Annual Service Level Agreement (SLA)',
    specifications: [
      { label: 'Diagnostic Sensors', value: 'FLIR 640x512 Radiometric Uncooled Microbolometer' },
      { label: 'Thermal Sensitivity', value: '< 50 mK (@ f/1.0)' },
      { label: 'Orthomosaic Accuracy', value: '< 1.5 cm / pixel GSD' },
      { label: 'FAA Authorization', value: 'FAA Part 107 Night Flight Waivered' }
    ],
    processSteps: [
      { title: 'FAA Part 107 Drone Flight Survey', desc: 'High-altitude autonomous grid flight capturing 4K orthomosaic imagery.' },
      { title: 'Dusk Radiometric Infrared Scan', desc: 'Capturing thermal emission signatures of wet insulation as the roof cools down.' },
      { title: 'Physical Core Validation & Minor Repairs', desc: 'Verifying thermal anomalies with non-invasive moisture meters and caulking flashings.' },
      { title: 'Digital Asset Report & 5-Year Roadmap', desc: 'Comprehensive condition scoring (ACI), priority repair punch-list, and budget models.' }
    ],
    pricingStartingAt: '$650 / survey',
    category: 'Commercial',
    popular: false
  },
  {
    id: 'emergency-storm-response',
    slug: '24-7-emergency-storm-disaster-response',
    title: '24/7 Emergency Storm Disaster Response',
    shortDescription: 'Rapid mobilization team equipped for heavy hail, hurricane wind damage, structural tarping, and insurance claim advocacy.',
    fullDescription: 'When severe weather strikes, every minute counts to mitigate interior water damage, tenant displacement, and inventory loss. Our dedicated 24/7 disaster response fleet arrives on-site within 2 hours with industrial shrink-wrap machines, crane support, and structural temporary enclosures.',
    iconName: 'AlertTriangle',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '2-Hour guaranteed rapid on-site emergency dispatch radius',
      'Industrial heat-shrink weatherproof temporary containment systems',
      'Certified insurance claim public adjusting documentation and Xactimate scoping',
      'Structural shoring, generator power, and moisture extraction coordination'
    ],
    benefits: [
      'Prevents catastrophic secondary water damage and electrical hazards',
      'Itemized documentation maximizing fair and swift insurance settlement payout',
      'Immediate stabilization protecting manufacturing machinery and stock',
      'Direct carrier billing options with zero out-of-pocket delays'
    ],
    warrantyOptions: 'Immediate Dry-In Warranty Certificate',
    specifications: [
      { label: 'Response Window', value: '< 2 Hours Guaranteed Metro Dispatch' },
      { label: 'Tarping Technology', value: '12-mil Flame-Retardant Heat Shrink Film' },
      { label: 'Insurance Format', value: 'Xactimate Certified Digital Scoping' },
      { label: 'Fleet Capability', value: 'Mobile Hydraulic Boom Cranes & Power Generators' }
    ],
    processSteps: [
      { title: 'Emergency Dispatch & Hazard Triage', desc: 'Immediate deployment of disaster response truck with safety crew.' },
      { title: 'High-Durability Shrink-Wrap Tarping', desc: 'Heat-bonded engineered wrap securing damaged areas against torrential rain.' },
      { title: 'Forensic Damage Scoping & Xactimate File', desc: 'High-definition digital photo capture of all impact hail marks and wind tears.' },
      { title: 'Carrier Adjuster Walkthrough & Permanent Fix', desc: 'On-site representation during insurer inspection and fast-track rebuild.' }
    ],
    pricingStartingAt: 'Immediate Quote on Dispatch',
    category: 'Emergency',
    popular: true
  },
  {
    id: 'cool-roof-solar-integration',
    slug: 'cool-roof-solar-ready-systems',
    title: 'Cool Roof Coatings & Solar-Ready Integration',
    shortDescription: 'High-solids elastomeric silicone fluid-applied coatings and penetrations-free ballast solar racking interfaces.',
    fullDescription: 'Transform your existing roof into an eco-friendly energy generating powerhouse. Our seamless elastomeric silicone restoration coats restore aging roofs for 15+ years at 50% less cost than replacement, while preparing your building envelope for seamless commercial solar panel arrays.',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '100% solids high-build silicone elastomeric fluid restoration',
      'Seamless monolithic rubber membrane with zero mechanical joints',
      'Integrated non-penetrating solar ballast roof attachments',
      'Meets Energy Star, Title 24, and LEED solar reflectance criteria'
    ],
    benefits: [
      '100% tax-deductible in Year 1 under Section 179 CapEx write-off',
      'Lowers surface roof temperatures from 160°F down to 88°F',
      'Eliminates need for landfill disposal of existing roof layers',
      'Qualifies for local utility rebates up to $0.50/sq ft'
    ],
    warrantyOptions: '15 to 20-Year Renewable Fluid Warranty',
    specifications: [
      { label: 'Solid Content', value: '96% ± 2% High-Solids Silicone' },
      { label: 'Elongation at Break', value: '450% ASTM D412' },
      { label: 'Tensile Strength', value: '400 PSI ASTM D412' },
      { label: 'Solar Reflectance (Initial)', value: '0.88 ASTM C1549' }
    ],
    processSteps: [
      { title: 'High-Pressure Eco Wash & Degreasing', desc: 'Deep cleaning substrate to ensure 100% coating adhesion.' },
      { title: 'Seam & Fastener Encapsulation', desc: 'Mastic fabric reinforcement on all perimeter flashings, curbs, and joints.' },
      { title: 'Dual Coat Silicone Spray Application', desc: 'Airless spray application achieving 30-35 dry mil monolithic protective barrier.' },
      { title: 'Solar Racking Stanchion Integration', desc: 'Engineered pedestals installed with manufacturer certified warranty seals.' }
    ],
    pricingStartingAt: '$3.25 / sq ft',
    category: 'Industrial',
    popular: false
  }
];
