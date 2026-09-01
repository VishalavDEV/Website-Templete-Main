// Product Data Engine for AEROSTRIDE X-PRO

export const PRODUCT_DATA = {
  id: "aerostride-x-pro",
  name: "AEROSTRIDE X-PRO",
  subtitle: "Kinetic Dual-Carbon Distance Marathon Racer",
  edition: "2026 World Athletics Certified Edition",
  price: 285.00,
  originalPrice: 340.00,
  discountPercentage: 16,
  rating: 4.94,
  reviewCount: 1248,
  dropEndDate: new Date(Date.now() + 3 * 86400000 + 14 * 3600000 + 42 * 60000 + 19 * 1000).toISOString(),
  category: "Elite Marathon & Tempo Running",
  weight: "185g (Men's US 9.5)",
  stackHeight: "39.5mm Heel / 31.5mm Forefoot",
  drop: "8.0mm Dynamic Offset",
  cushioningLevel: "Maximal Energy Return (88.4%)",
  terrain: "Road / Paved Track / Urban Marathon",

  colorways: [
    {
      id: "cyber-volt",
      name: "Cyber Volt / Carbon Eclipse",
      primaryHex: "#CCFF00",
      secondaryHex: "#111827",
      accentGlow: "rgba(204, 255, 0, 0.4)",
      badge: "Flagship Edition",
      story: "Engineered for high-visibility twilight road racing. High-contrast neon matrix weave inspired by supersonic aerodynamics.",
      heroImage: "/assets/images/shoe-cyber-volt.jpg",
      angles: [
        { id: "lateral", name: "Lateral Profile", image: "/assets/images/shoe-cyber-volt.jpg", description: "Aerodynamic silhouette showing carbon speed plate curvature" },
        { id: "motion", name: "Kinetic In-Motion", image: "/assets/images/running-stride-motion.jpg", description: "Real-world heel strike deformation and rapid spring recoil" },
        { id: "outsole", name: "Traction Outsole", image: "/assets/images/shoe-outsole.jpg", description: "Engineered micro-lug grip matrix with exposed carbon rigidity bridges" },
        { id: "heel", name: "Rear Heel Counter", image: "/assets/images/shoe-heel-detail.jpg", description: "3D molded heel spoiler & energy lockdown collar" }
      ],
      stockWarning: "Only 14 pairs left in batch 01"
    },
    {
      id: "obsidian-cyan",
      name: "Midnight Obsidian / Pulse Cyan",
      primaryHex: "#00F0FF",
      secondaryHex: "#0A1128",
      accentGlow: "rgba(0, 240, 255, 0.4)",
      badge: "Night Runner Limited",
      story: "Crafted for nocturnal speed sessions. Photo-luminescent yarn integration creates an ethereal glow under urban streetlights.",
      heroImage: "/assets/images/shoe-obsidian-cyan.jpg",
      angles: [
        { id: "lateral", name: "Lateral Profile", image: "/assets/images/shoe-obsidian-cyan.jpg", description: "Nocturnal cyan light-piping and sculpted aerostride chassis" },
        { id: "motion", name: "Kinetic In-Motion", image: "/assets/images/running-stride-motion.jpg", description: "Dynamic stride capture during sub-4:00/km midnight tempo" },
        { id: "outsole", name: "Traction Outsole", image: "/assets/images/shoe-outsole.jpg", description: "Wet-asphalt ultra-tack compound formulation" },
        { id: "heel", name: "Rear Heel Counter", image: "/assets/images/shoe-heel-detail.jpg", description: "Anatomical heel cup stabilizing lateral foot roll" }
      ],
      stockWarning: "Selling fast • 82% reserved"
    },
    {
      id: "hyper-crimson",
      name: "Hyper Crimson / Magma Core",
      primaryHex: "#FF3E1D",
      secondaryHex: "#1C0A00",
      accentGlow: "rgba(255, 62, 29, 0.4)",
      badge: "Heatwave Special",
      story: "Ignite race day intensity with thermal-reactive pigment accents and high-airflow thermoregulating matrix channels.",
      heroImage: "/assets/images/shoe-hyper-crimson.jpg",
      angles: [
        { id: "lateral", name: "Lateral Profile", image: "/assets/images/shoe-hyper-crimson.jpg", description: "Aggressive flame-gradient rocker geometry for rapid roll-through" },
        { id: "motion", name: "Kinetic In-Motion", image: "/assets/images/running-stride-motion.jpg", description: "Explosive toe-off energy vector demonstration" },
        { id: "outsole", name: "Traction Outsole", image: "/assets/images/shoe-outsole.jpg", description: "Multi-directional heat-dispersal siping grooves" },
        { id: "heel", name: "Rear Heel Counter", image: "/assets/images/shoe-heel-detail.jpg", description: "High-density medial bumper preventing over-pronation" }
      ],
      stockWarning: "New release • Ships in 24 hours"
    }
  ],

  sizes: [
    { us: "7.0", uk: "6.5", eu: "40", cm: "25.0", inStock: true },
    { us: "7.5", uk: "7.0", eu: "40.5", cm: "25.5", inStock: true },
    { us: "8.0", uk: "7.5", eu: "41.0", cm: "26.0", inStock: true },
    { us: "8.5", uk: "8.0", eu: "42.0", cm: "26.5", inStock: true },
    { us: "9.0", uk: "8.5", eu: "42.5", cm: "27.0", inStock: true },
    { us: "9.5", uk: "9.0", eu: "43.0", cm: "27.5", inStock: true, isPopular: true },
    { us: "10.0", uk: "9.5", eu: "44.0", cm: "28.0", inStock: true, isPopular: true },
    { us: "10.5", uk: "10.0", eu: "44.5", cm: "28.5", inStock: true },
    { us: "11.0", uk: "10.5", eu: "45.0", cm: "29.0", inStock: true },
    { us: "11.5", uk: "11.0", eu: "45.5", cm: "29.5", inStock: false },
    { us: "12.0", uk: "11.5", eu: "46.0", cm: "30.0", inStock: true },
    { us: "13.0", uk: "12.5", eu: "47.5", cm: "31.0", inStock: true }
  ],

  specifications: [
    { label: "Upper Material", value: "AeroKnit™ Monofilament Matrix (0.3mm)", icon: "Wind" },
    { label: "Midsole Technology", value: "Dual NitroFoam™ + Curved Carbon FlightPlate", icon: "Zap" },
    { label: "Outsole Grip", value: "LiquidTack™ Wet-Road Carbon Rubber", icon: "Shield" },
    { label: "Energy Return", value: "88.4% Lab-Certified Elastic Propulsion", icon: "Activity" },
    { label: "Stack Geometry", value: "39.5mm / 31.5mm (8mm Offset)", icon: "Layers" },
    { label: "Weight", value: "185g / 6.5 oz (Ultra Featherweight)", icon: "Feather" },
    { label: "Lacing System", value: "SpeedLock™ Asymmetrical Tension Cables", icon: "Cpu" },
    { label: "Eco Footprint", value: "48% Recycled Bio-Based Polymer", icon: "Leaf" }
  ],

  // Synchronized Motion Video & Front-Facing Technical Callouts Mapping
  videoModelTimeline: [
    {
      timestamp: 0.0,
      phase: "01. INITIAL STRIKE & SHOCK ABSORPTION",
      perspective: "Rear 3/4 Running Back View",
      focusArea: "Heel Strike & Dynamic Deceleration",
      frontCallout: {
        title: "NITRO-INFUSED HEEL CELL",
        subtitle: "Max 39.5mm Stack Compression",
        description: "Supercritical nitrogen foam compresses 28% on impact, absorbing 94% of ground reaction force before knee transfer.",
        metric: "-42% Joint Impact",
        diagramIcon: "ShieldAlert",
        detailImage: "/assets/images/shoe-heel-detail.jpg"
      }
    },
    {
      timestamp: 3.5,
      phase: "02. MID-STRANCE STABILIZATION",
      perspective: "Lateral 3/4 High Speed Cam",
      focusArea: "Carbon FlightPlate Loading",
      frontCallout: {
        title: "CARBON FLIGHTPLATE™ 3.0",
        subtitle: "Full-Length 3D Spoon Geometry",
        description: "Bespoke variable-stiffness carbon weave flexes longitudinally while resisting torsional twist, locking the ankle axis.",
        metric: "3.2x Torsional Rigidity",
        diagramIcon: "Layers",
        detailImage: "/assets/images/shoe-outsole.jpg"
      }
    },
    {
      timestamp: 7.0,
      phase: "03. EXPLOSIVE TOE-OFF PROPULSION",
      perspective: "Plantar Force Vector Cam",
      focusArea: "Forefoot Rocker & Energy Return",
      frontCallout: {
        title: "KINETIC ENERGY LAUNCH",
        subtitle: "88.4% Elastic Rebound Rate",
        description: "Aggressive 12° forefoot toe-spring snaps forward instantly at peak extension, shaving 4.5 seconds per kilometer.",
        metric: "+8.6% Propulsion Boost",
        diagramIcon: "Zap",
        detailImage: "/assets/images/shoe-cyber-volt.jpg"
      }
    },
    {
      timestamp: 10.5,
      phase: "04. IN-FLIGHT RECOVERY & AERODYNAMICS",
      perspective: "Zero-Drag Overhead Airflow",
      focusArea: "AeroKnit Thermoregulation",
      frontCallout: {
        title: "AEROKNIT™ 360 AIRFLOW",
        subtitle: "Micro-Perforated Biomimetic Mesh",
        description: "Direct airflow channels wick moisture within 1.2s, maintaining optimal in-shoe temperature across 42.2 kilometers.",
        metric: "185g Featherweight",
        diagramIcon: "Wind",
        detailImage: "/assets/images/gear-singlet.jpg"
      }
    }
  ],

  reviews: [
    {
      id: 1,
      author: "Marcus Vance",
      role: "2:18 Marathoner & Coach",
      rating: 5,
      date: "3 days ago",
      verified: true,
      headline: "The most explosive carbon shoe I have laced up in 10 years.",
      comment: "Ran 32km tempo in the rain with the Cyber Volt. The wet traction from the LiquidTack outsole is unbelievable. Energy rebound in the final 5km kept my turnover effortlessly under 3:15/km.",
      fitRating: "True to Size (10/10)",
      cushionRating: "5/5 Ultra-Responsive",
      userPhoto: "/assets/images/review-marathon-track.jpg"
    },
    {
      id: 2,
      author: "Elena Rostova",
      role: "Triathlon National Qualifier",
      rating: 5,
      date: "1 week ago",
      verified: true,
      headline: "Zero blister break-in period. Pure speed engineering.",
      comment: "The asymmetrical lacing and heel collar lock your foot like a custom cast. The Midnight Obsidian colorway turns heads at dawn track sessions.",
      fitRating: "Perfect Lock (10/10)",
      cushionRating: "5/5 Plush & Fast",
      userPhoto: "/assets/images/review-night-street.jpg"
    },
    {
      id: 3,
      author: "Derrick Chen",
      role: "Urban Trail & Road Runner",
      rating: 4.8,
      date: "2 weeks ago",
      verified: true,
      headline: "Cuts fatigue in half on asphalt pavement.",
      comment: "My calves normally scream after 25k on concrete. The dual nitrogen foam dampens the vibration remarkably without feeling mushy.",
      fitRating: "True to Size",
      cushionRating: "5/5 Protective",
      userPhoto: "/assets/images/review-road-tempo.jpg"
    }
  ],

  relatedProducts: [
    {
      id: "aero-pace-speed-singlet",
      name: "AERO-PACE Laser Singlet",
      price: 68.00,
      rating: 4.9,
      category: "Apparel",
      image: "/assets/images/gear-singlet.jpg",
      tag: "Race Day Ready"
    },
    {
      id: "stride-carbon-socks-pro",
      name: "STRIDELOCK Nano-Grip Socks",
      price: 24.00,
      rating: 4.8,
      category: "Gear",
      image: "/assets/images/gear-nano-socks.jpg",
      tag: "Anti-Blister"
    },
    {
      id: "hyper-speed-trainer",
      name: "AERO-SPEED Velocity Carbon",
      price: 195.00,
      rating: 4.9,
      category: "Footwear",
      image: "/assets/images/gear-tempo-shoe.jpg",
      tag: "Training Series"
    }
  ]
};
