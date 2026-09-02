export const siteConfig = {
  name: "TerraNova",
  tagline: "Regenerative Intelligence for Modern Agriculture",
  description: "Empowering growers worldwide with AI-guided soil intelligence, autonomous drone field scouting, and organic bio-nutrition systems for maximum yield with zero synthetic residue.",
  contact: {
    phone: "+1 (800) 582-TERRA",
    directPhone: "+1 (555) 234-8990",
    email: "grow@terranova-agri.com",
    supportEmail: "support@terranova-agri.com",
    address: "742 AgriTech Valley Rd, Davis, CA 95616",
    hours: "Mon - Sat: 6:00 AM - 7:00 PM PST",
  },
  socials: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
  certifications: [
    { name: "USDA Organic Certified", icon: "CheckCircle2", desc: "100% Non-GMO & Bio-Compliant" },
    { name: "Global G.A.P. Certified", icon: "ShieldCheck", desc: "Good Agricultural Practice Standard" },
    { name: "Rainforest Alliance", icon: "Award", desc: "Ecological Habitat Protection" },
    { name: "ISO 14001 Compliant", icon: "Sparkles", desc: "Environmental Management Systems" },
  ]
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Pillars", href: "#pillars" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#services" },
  { name: "Impact", href: "#impact" },
  { name: "ROI Estimator", href: "#calculator" },
  { name: "Gallery", href: "#gallery" },
  { name: "Stories", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export const heroData = {
  badge: "Next-Gen Regenerative AgTech 2026",
  titlePart1: "Nourishing The Earth,",
  titleHighlight: "Empowering The Grower.",
  subtitle: "TerraNova bridges the wisdom of bio-organic farming with autonomous sensor networks and multispectral drone AI—delivering up to 35% higher crop vitality with 40% less water usage.",
  statsBadges: [
    {
      id: "organic",
      label: "100% Certified",
      sublabel: "Bio-Organic inputs",
      icon: "Leaf",
      color: "emerald",
      position: "left-top"
    },
    {
      id: "acres",
      label: "65,000+ Acres",
      sublabel: "Active sensor telemetry",
      icon: "MapPin",
      color: "amber",
      position: "right-top"
    },
    {
      id: "water",
      label: "42% Water Saved",
      sublabel: "Subsurface precision drip",
      icon: "Droplets",
      color: "cyan",
      position: "right-bottom"
    }
  ],
  videoUrl: "https://www.youtube-nocookie.com/embed/zOxu_0m6cMo?autoplay=1&mute=0&rel=0",
  backgroundImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85",
};

export const corePillars = [
  {
    id: "soil-sensing",
    icon: "Activity",
    title: "Precision Soil Intelligence",
    tagline: "Subsurface IoT & Microbial Health",
    description: "Multi-depth wireless probes continuously track N-P-K bioavailability, fungal-to-bacterial ratios, moisture gradients, and electrical conductivity in real-time.",
    benefits: ["Zero nutrient runoff", "Instant deficiency alerts", "Hourly microclimate sync"],
    metric: "99.4% Sensing Accuracy",
    color: "emerald",
    bgLight: "bg-emerald-50/80",
    borderHover: "hover:border-emerald-500",
  },
  {
    id: "drone-scouting",
    icon: "Scan",
    title: "Autonomous Aerial Scouting",
    tagline: "Multispectral Crop Stress Mapping",
    description: "Solar-docked autonomous drone fleets survey thousand-acre parcels daily, detecting early fungal pathogens, nitrogen stress, and pest infestations 14 days before visible to human eyes.",
    benefits: ["Sub-centimeter NDVI resolution", "Automated variable-rate prescriptions", "Thermal canopy profiling"],
    metric: "15-Min 100-Acre Scan",
    color: "amber",
    bgLight: "bg-amber-50/80",
    borderHover: "hover:border-amber-500",
  },
  {
    id: "closed-loop",
    icon: "RotateCcw",
    title: "Closed-Loop Bio-Nutrients",
    tagline: "Carbon-Negative Crop Protection",
    description: "Proprietary mycorrhizal inoculants, fermented bio-stimulants, and precision micro-dosing systems replace synthetic petrochemical fertilizers with nature-aligned vitality.",
    benefits: ["100% residue-free harvest", "Increases soil organic carbon by 2.4x", "Pollinator-safe microbial sprays"],
    metric: "-80% Synthetic Chemical Load",
    color: "emerald",
    bgLight: "bg-teal-50/80",
    borderHover: "hover:border-teal-500",
  },
];

export const aboutData = {
  badge: "Cultivating A Resilient Future",
  title: "Blending 15 Years of Soil Science with Cutting-Edge AI",
  description: "Founded by agronomy researchers and robotics engineers in 2011, TerraNova was born out of a critical conviction: feeding 10 billion people does not require poisoning our planetary soil microbiome.",
  extendedText: "Today, we deploy end-to-end regenerative farming infrastructure across North America, Europe, and Latin America. We help generational family farms and large-scale agricultural cooperatives transition profitably into chemical-free, hyper-efficient production.",
  highlights: [
    {
      title: "Real-Time Field Telemetry",
      description: "Continuous microclimate and soil moisture tracking sent to the cloud every 5 minutes."
    },
    {
      title: "Bio-Organic Input Optimization",
      description: "Custom biological formulations engineered specifically for your soil profile."
    },
    {
      title: "Guaranteed Compliance & Carbon Credits",
      description: "Automated third-party auditable MRV logs for premium organic pricing and carbon offsets."
    },
    {
      title: "Hardware-Agnostic Plug & Play",
      description: "Seamlessly connects with John Deere, Case IH, Trimble, and standard irrigation valves."
    }
  ],
  tabs: [
    {
      id: "mission",
      title: "Our Mission",
      content: "To regenerate 500,000 acres of degraded agricultural land by 2030 while doubling grower profitability through autonomous bio-tech systems."
    },
    {
      id: "innovation",
      title: "Our Technology",
      content: "Combining edge-computing IoT sensor pods with predictive neural networks trained on over 14 million historical agronomy data points."
    },
    {
      id: "stewardship",
      title: "Environmental Impact",
      content: "Every acre enrolled with TerraNova sequesters an average of 1.8 tons of atmospheric carbon per year into stabilized humus."
    }
  ],
  images: {
    main: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    secondary: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    accent: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
  },
  experienceYears: 15,
};

export const servicesData = [
  {
    id: "crop-protection",
    title: "Biological Crop Protection",
    category: "Bio-Formulations",
    icon: "ShieldAlert",
    shortDesc: "Targeted microbial repellents and natural parasitic controls that protect against blight and pests without harming beneficial pollinators.",
    detailedDesc: "Our bio-protection framework utilizes beneficial microbial strains (Bacillus subtilis, Trichoderma harzianum) alongside pheromone disruption grids to suppress insect pests and fungal outbreaks naturally. Completely certified for OMRI and USDA Organic programs.",
    features: [
      "Zero toxic residue for immediate harvest safety",
      "Suppresses powdery mildew, botrytis, and aphids",
      "Enhances plant systemic acquired resistance (SAR)",
      "Automated injector pump integration with existing pivot systems"
    ],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80",
    stats: "Up to 94% Pest Suppression",
    tag: "OMRI Listed"
  },
  {
    id: "drone-fleet",
    title: "Autonomous AgriTech Drone Fleet",
    category: "Robotics & Aerial AI",
    icon: "Plane",
    shortDesc: "Dock-and-fly multispectral UAVs providing millimeter-accurate plant counts, canopy temperature indexing, and micro-spraying.",
    detailedDesc: "Equipped with 6-band multispectral and FLIR thermal sensors, our autonomous aerial fleet performs automated pre-programmed dawn and dusk sorties. Generates geo-referenced prescription maps directly exported to ISOBUS tractor displays.",
    features: [
      "Solar auto-charging field dock stations",
      "Instant 3D elevation and water pooling models",
      "Ultra-low drift spot-spraying micro-nozzles",
      "Real-time weed species classification"
    ],
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80",
    stats: "1,200 Acres / Day Scouting",
    tag: "Autonomous RTK"
  },
  {
    id: "smart-irrigation",
    title: "Smart Moisture & Micro-Irrigation",
    category: "IoT & Water Preservation",
    icon: "Droplets",
    shortDesc: "VPD (Vapor Pressure Deficit) driven subsurface drip algorithms that supply water only when and where crops require hydration.",
    detailedDesc: "By pairing subterranean tensiometers with hyper-local weather station forecasts, TerraNova's AI controllers dynamically modulate variable-frequency pump pressure and solenoid valves to eliminate evaporation loss.",
    features: [
      "Predictive moisture curve modeling up to 72 hours out",
      "Solar-powered mesh network node radios",
      "Nutrient fertigation integration",
      "Instant leak and line rupture pressure detection"
    ],
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=80",
    stats: "40% Average Water Reduction",
    tag: "IoT Mesh V4"
  },
  {
    id: "greenhouse-automation",
    title: "Autonomous Greenhouse Climate",
    category: "Controlled Environment Ag",
    icon: "Cpu",
    shortDesc: "Closed-loop microclimate controllers regulating PAR LED spectrums, CO2 enrichment, humidity, and vertical air circulation.",
    detailedDesc: "Engineered for high-yield organic horticulture, berries, and medicinal crops. Integrates robotic harvesting arms, automated thermal screening, and biological pest insectaries under a single intuitive glass cockpit dashboard.",
    features: [
      "Dynamic light spectrum tuning matching photosynthesis peaks",
      "Closed-loop dehumidification and water recovery",
      "Continuous ethylene & volatile organic compound monitoring",
      "Mobile iOS & Android alerts with remote override"
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
    stats: "3.2x Higher Yield / Sq Ft",
    tag: "CEA NextGen"
  },
  {
    id: "soil-carbon-mrv",
    title: "Soil Carbon MRV & Certification",
    category: "Carbon & Sustainability",
    icon: "TrendingUp",
    shortDesc: "Measurement, Reporting, and Verification protocols generating certified carbon removal credits from your regenerative soil practices.",
    detailedDesc: "Unlock high-margin secondary revenue by monetizing your cover cropping, reduced tillage, and compost integration through third-party certified voluntary carbon markets.",
    features: [
      "Satellite synthetic aperture radar (SAR) carbon verification",
      "Cryptographically signed audit trails for carbon brokers",
      "Direct payout integration to farm accounts",
      "Compliant with Verra and Gold Standard methodologies"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80",
    stats: "\$45-\$75 / Acre Extra Revenue",
    tag: "Verra Verified"
  },
  {
    id: "livestock-rotational",
    title: "Holistic Livestock Grazing Tech",
    category: "Regenerative Livestock",
    icon: "Sparkles",
    shortDesc: "Virtual GPS fencing and pasture biomass analytics for high-density rotational mob grazing that builds topsoil naturally.",
    detailedDesc: "Manage livestock distribution without physical barbed fences. Our smart solar collars direct herd movement based on forage biomass regrowth indices, maximizing root stimulation and manure distribution.",
    features: [
      "Virtual geofencing with gentle auditory feedback",
      "Forage height estimation via satellite optical indexes",
      "Livestock health and rumination biometric tracking",
      "Rapidly restores native perennial prairie grasses"
    ],
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80",
    stats: "2.8x Faster Pasture Recovery",
    tag: "GPS Virtual Fence"
  }
];

export const impactMetrics = [
  {
    id: "farms",
    label: "Partner Farms Enrolled",
    value: 580,
    suffix: "+",
    prefix: "",
    desc: "Across 14 countries in 4 continents",
    icon: "Tractor"
  },
  {
    id: "acres",
    label: "Acres Regenerated",
    value: 94500,
    suffix: "+",
    prefix: "",
    desc: "100% free of synthetic agrochemicals",
    icon: "Globe"
  },
  {
    id: "water",
    label: "Gallons Water Preserved",
    value: 48,
    suffix: "M+",
    prefix: "",
    desc: "Through AI-modulated micro-drip networks",
    icon: "Droplet"
  },
  {
    id: "carbon",
    label: "Tons Carbon Sequestered",
    value: 172000,
    suffix: "t",
    prefix: "",
    desc: "Verified permanent soil organic carbon",
    icon: "Leaf"
  },
  {
    id: "margin",
    label: "Avg Grower Net Margin Lift",
    value: 36.8,
    suffix: "%",
    prefix: "+",
    desc: "Lower input cost + organic price premium",
    icon: "TrendingUp"
  }
];

export const calculatorCropData = [
  {
    id: "corn-grain",
    name: "Corn & Grain (Cereals)",
    baseYieldIncrease: 0.18, // 18%
    waterSavingsGallonsPerAcre: 680,
    carbonTonsPerAcre: 1.4,
    costSavingsPerAcre: 72,
    organicPremiumPercent: 28,
  },
  {
    id: "soybeans",
    name: "Soybeans & Legumes",
    baseYieldIncrease: 0.16,
    waterSavingsGallonsPerAcre: 520,
    carbonTonsPerAcre: 1.6,
    costSavingsPerAcre: 65,
    organicPremiumPercent: 32,
  },
  {
    id: "vineyard-orchard",
    name: "Vineyards, Almonds & High-Value Orchards",
    baseYieldIncrease: 0.24,
    waterSavingsGallonsPerAcre: 1450,
    carbonTonsPerAcre: 2.2,
    costSavingsPerAcre: 210,
    organicPremiumPercent: 45,
  },
  {
    id: "leafy-veg",
    name: "Organic Vegetables & Specialty Greens",
    baseYieldIncrease: 0.32,
    waterSavingsGallonsPerAcre: 1900,
    carbonTonsPerAcre: 1.9,
    costSavingsPerAcre: 340,
    organicPremiumPercent: 55,
  },
  {
    id: "pasture-livestock",
    name: "Pastureland & Livestock Forage",
    baseYieldIncrease: 0.22,
    waterSavingsGallonsPerAcre: 410,
    carbonTonsPerAcre: 2.8,
    costSavingsPerAcre: 48,
    organicPremiumPercent: 25,
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Multispectral Drone Field Patrol",
    category: "Drone Tech",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    desc: "Autonomous UAV mapping 400 acres of organic heritage wheat at sunrise.",
    location: "Willamette Valley, OR"
  },
  {
    id: 2,
    title: "Golden Hour Organic Barley Harvest",
    category: "Harvest",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    desc: "Combine harvester paired with real-time yield and protein optical sensors.",
    location: "Saskatchewan, Canada"
  },
  {
    id: 3,
    title: "Subsurface IoT Moisture Telemetry Node",
    category: "Soil Science",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    desc: "Solar-powered micro-probe relaying soil microbiome electrical conductivity.",
    location: "Central Valley, CA"
  },
  {
    id: 4,
    title: "Closed-Loop Hydro-Organic Greenhouse",
    category: "Greenhouse",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    desc: "PAR LED automated spectrum system producing 0-residue heirloom tomatoes.",
    location: "Westland, Netherlands"
  },
  {
    id: 5,
    title: "Regenerative Cover Crop Interplanting",
    category: "Fields",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    desc: "Crimson clover and daikon radish bio-tilling without mechanical disturbance.",
    location: "Bavaria, Germany"
  },
  {
    id: 6,
    title: "Bio-Dynamic Vineyard Canopy Management",
    category: "Fields",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    desc: "Precision drip irrigation and natural pest predator insectaries.",
    location: "Mendoza, Argentina"
  },
  {
    id: 7,
    title: "Heirloom Organic Produce Sorting",
    category: "Harvest",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
    desc: "Quality inspection verifying zero pesticide residue and peak brix sweetness.",
    location: "Sonoma County, CA"
  },
  {
    id: 8,
    title: "High-Density Rotational Mob Grazing",
    category: "Fields",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    desc: "Livestock restoring native perennial prairie root structures via virtual geofencing.",
    location: "Sandhills, Nebraska"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "TerraNova transformed our 2,400-acre family farm. Within our first full season on their soil sensor and bio-protection program, our input costs plunged by 38%, while our organic wheat yield set an all-time farm record.",
    author: "Marcus Vance",
    role: "4th Generation Farm Operator",
    farmName: "Vance Heritage Ag",
    location: "Walla Walla, WA",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80",
    acres: "2,400 Acres",
    rating: 5,
    metric: "+32% Net Profit Margin"
  },
  {
    id: 2,
    quote: "The autonomous drone scouting caught a microscopic botrytis spore colony in our north vineyard block 12 days before our ground scouts would have noticed. It saved our entire reserve Pinot Noir vintage.",
    author: "Elena Rostova",
    role: "Director of Viticulture",
    farmName: "Sierra Vista Vineyards",
    location: "Napa Valley, CA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    acres: "850 Acres",
    rating: 5,
    metric: "\$180k Vintage Saved"
  },
  {
    id: 3,
    quote: "Transitioning to organic was historically considered high risk for row crops. TerraNova provided the continuous data confidence and biological formulations that made our organic transition smooth, certified, and lucrative.",
    author: "David & Sarah Miller",
    role: "Co-Founders & Agronomists",
    farmName: "Prairie Sun Agro-Ecology",
    location: "Ames, Iowa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    acres: "4,100 Acres",
    rating: 5,
    metric: "45M Gallons Water Conserved"
  }
];

export const faqs = [
  {
    question: "How difficult is it to install TerraNova soil sensors and drone docking stations?",
    answer: "TerraNova hardware is 100% plug-and-play. Our solar-powered IoT soil probes can be pushed into the ground in under 2 minutes per pod with no wiring or trenching needed. They immediately pair to our cloud dashboard via long-range cellular and satellite mesh."
  },
  {
    question: "Are TerraNova biological inputs compatible with our existing tractor sprayers?",
    answer: "Yes. All TerraNova bio-fungicides, mycorrhizal inoculants, and liquid organic nutrients are micro-filtered to prevent nozzle clogging and are formulated to fit standard boom sprayers, center-pivot fertigation, and drone micro-nozzles."
  },
  {
    question: "How does TerraNova help monetize soil carbon credits?",
    answer: "Our automated MRV (Measurement, Reporting, and Verification) engine fuses satellite radar backscatter with in-situ soil core telemetry to calculate verifiable tons of sequestered carbon, issuing certified credits directly marketable to corporate buyers."
  },
  {
    question: "What kind of ROI timeline should a medium or large farm expect?",
    answer: "Over 92% of partner farms achieve full payback within the first 7 to 9 months of operation through immediate savings on synthetic fertilizer, diesel reductions from precision scouting, and organic market price premiums."
  },
  {
    question: "Does TerraNova integrate with John Deere Operations Center and Trimble?",
    answer: "Yes, our cloud platform features two-way API synchronization with John Deere Ops Center, Climate FieldView, Trimble Ag, and standard ISOBUS terminal controllers."
  }
];
