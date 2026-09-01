export const PERSONAL_INFO = {
  name: "Dr. Arin Solberg",
  title: "Aerospace Systems Engineer",
  tagline: "Engineering systems for the next generation of exploration.",
  heroStatement: "Designing reliable systems, mission architectures, and autonomous technologies for the future of aerospace exploration.",
  location: "Oslo, Norway",
  experience: "10+ Years",
  profileId: "AS-2046",
  email: "arin.solberg@example.com",
  status: "Available for Research Collaboration",
  linkedin: "https://linkedin.com/in/fictional-arin-solberg",
  archive: "https://archive.example.org/solberg-systems",
  bioParagraphs: [
    "Dr. Arin Solberg is a senior aerospace systems engineer specializing in high-reliability spacecraft architectures, autonomous navigation logic, and complex multidisciplinary vehicle integration. With over a decade of experience across fictional research labs and flight technology initiatives, his work bridges theoretical orbital mechanics with practical embedded system design.",
    "His systems engineering methodology emphasizes deterministic safety boundaries, self-healing system topologies, and modular flight software standards. By treating hardware and software components as interdependent dynamic nodes, he has led architectural design for autonomous atmospheric vehicles and orbital research platforms.",
    "Currently residing in Oslo, Norway, Dr. Solberg consults on next-generation mission architectures, leads collaborative research initiatives, and publishes technical studies on resilient autonomous control systems."
  ],
  metrics: [
    { value: 10, label: "Years Experience", suffix: "+" },
    { value: 24, label: "Fictional Programs", suffix: "" },
    { value: 7, label: "Research Initiatives", suffix: "" },
    { value: 16, label: "Technical Publications", suffix: "" }
  ],
  disciplines: [
    "Spacecraft Systems",
    "Mission Architecture",
    "Autonomous Control",
    "Systems Integration"
  ]
};

export const MISSIONS = [
  {
    id: "orbita-7",
    code: "M-01",
    name: "ORBITA-7",
    year: "2026",
    type: "Autonomous Orbital Research Platform",
    role: "Lead Systems Architect",
    status: "CONCEPT VALIDATED",
    shortDescription: "A fictional mission concept exploring modular spacecraft systems designed for long-duration orbital research.",
    fullDescription: "ORBITA-7 is a modular orbital laboratory architecture conceived to test long-duration autonomous payload swapping and automated closed-loop life support telemetry. Built around a standardized hexagonal structural bus, the platform allows dynamic dynamic payload reconfiguration without crew intervention.",
    highlights: [
      "Modular bus design supporting 8 dynamic payload bays",
      "Autonomous power allocation algorithm with 99.98% efficiency",
      "Redundant optical telemetry link with low-latency relay capability",
      "Sub-system fault isolation protocol operating under 12ms window"
    ],
    specifications: {
      orbitType: "Low Earth Orbit (LEO, 520 km)",
      dryMass: "3,450 kg",
      powerOutput: "14.2 kW (Gallium-Arsenide Solar Arrays)",
      primaryPayload: "Autonomous Materials Synthesizer & Plasma Diagnostic Grid",
      communication: "Ka-Band Phased Array + Deep Space Optical Link"
    },
    schematicType: "orbital_station"
  },
  {
    id: "aurora-pathfinder",
    code: "M-02",
    name: "AURORA PATHFINDER",
    year: "2025",
    type: "Autonomous Atmospheric Research Vehicle",
    role: "Principal Flight Control Engineer",
    status: "TEST FLIGHT COMPLETE",
    shortDescription: "A fictional high-altitude autonomous research platform for extreme atmospheric sensing.",
    fullDescription: "AURORA PATHFINDER was developed to perform continuous autonomous sensing in high-stratosphere turbulence conditions. Utilizing solar-electric propulsion and variable-geometry wing structures, it achieves extended loiter endurance while maintaining sensor stability.",
    highlights: [
      "High-altitude solar-electric endurance payload",
      "Real-time atmospheric wind turbulence compensation neural-mesh",
      "Zero-emission environmental sampling suite",
      "Distributed fail-safe autonomous return-to-base navigation"
    ],
    specifications: {
      operatingAltitude: "22,000 m (Stratospheric)",
      endurance: "120+ Hours Continuous Flight",
      wingspan: "28.5 m Ultra-light Carbon Composite",
      payloadCapacity: "180 kg Advanced Spectrometry Unit",
      guidance: "Multi-Constellation GNSS + Optical Inertial Fusion"
    },
    schematicType: "glider_vehicle"
  },
  {
    id: "helios-vector",
    code: "M-03",
    name: "HELIOS VECTOR",
    year: "2024",
    type: "Deep-Space Systems Concept",
    role: "Mission Architecture Specialist",
    status: "ARCHITECTURE STUDY",
    shortDescription: "A fictional mission architecture study focused on autonomous long-distance navigation.",
    fullDescription: "HELIOS VECTOR explores autonomous navigation and decision-making for probes venturing beyond ground-station real-time intervention ranges. The system utilizes optical star-tracker optical navigation combined with predictive gravitational vector synthesis.",
    highlights: [
      "Autonomous optical star-tracker deep-space navigation engine",
      "Micro-thruster precision station-keeping algorithm",
      "Autonomous payload fault diagnosis & self-repair telemetry",
      "Low-bandwidth data compression suite with AI feature extraction"
    ],
    specifications: {
      targetDomain: "Heliocentric Outer Solar System Orbit",
      propulsion: "Next-Gen Low-Thrust Dual Ion Thruster Bus",
      powerSource: "Advanced Radioisotope Thermal Array Concept",
      pointingAccuracy: "0.002 Degrees Optical Axis Alignment",
      autonomyLevel: "Level 5 Deep Space Decision Logic"
    },
    schematicType: "deep_space_probe"
  },
  {
    id: "nova-relay",
    code: "M-04",
    name: "NOVA RELAY",
    year: "2023",
    type: "Orbital Communication Network",
    role: "Communications Payload Lead",
    status: "SIMULATION COMPLETED",
    shortDescription: "A fictional systems concept for distributed orbital communication infrastructure.",
    fullDescription: "NOVA RELAY is a constellation architecture designed to maintain unbroken cross-mesh communication coverage for planetary exploration clusters. It combines optical laser interconnects with adaptive beam-steering antennas.",
    highlights: [
      "Cross-link optical laser mesh topology",
      "Self-configuring network node auto-healing logic",
      "Dynamic radiation-hardened routing processor",
      "Quantum-key-ready encrypted telemetry links"
    ],
    specifications: {
      constellationCount: "12 Synchronized Micro-Satellites",
      meshBandwidth: "100 Gbps Laser Inter-Satellite Link",
      orbitAltitude: "1,200 km Medium Inclination",
      coverageLatency: "< 45ms Global Relay Latency",
      redundancy: "Triple-modular redundant compute core"
    },
    schematicType: "relay_constellation"
  },
  {
    id: "polaris-descent",
    code: "M-05",
    name: "POLARIS DESCENT",
    year: "2022",
    type: "Planetary Landing Systems Study",
    role: "Descent & Guidance Lead Engineer",
    status: "DESCENT MODEL TESTED",
    shortDescription: "A fictional engineering concept focused on autonomous landing and surface hazard avoidance.",
    fullDescription: "POLARIS DESCENT addresses the extreme challenges of autonomous touchdown on unmapped planetary surfaces. Utilizing real-time LiDAR terrain mapping and closed-loop thrust vectoring, the system ensures precision touchdown within a 5-meter target ellipse.",
    highlights: [
      "Real-time hazard detection and avoidance computer vision framework",
      "Closed-loop throttleable retro-propulsion vector control",
      "Multi-stage shock absorbing touchdown landing leg assembly",
      "Autonomous surface deployment telemetry broadcast"
    ],
    specifications: {
      landingPrecision: "5 m Target Ellipse Radius",
      descentVelocity: "Controlled 0.8 m/s Touchdown Vector",
      terrainSensors: "3D Flash LiDAR + Radar Altimeter",
      dryLanderMass: "1,850 kg",
      environmentTolerance: "-140°C to +80°C Cryogenic Surface Operational Rating"
    },
    schematicType: "planetary_lander"
  }
];

export const EXPERIENCE = [
  {
    id: "exp-1",
    period: "2023 — PRESENT",
    role: "Principal Systems Engineer",
    company: "Celestial Dynamics Laboratory",
    location: "Oslo, Norway",
    type: "Fictional Aerospace Engineering Organization",
    summary: "Directing system-of-systems engineering for autonomous spacecraft concepts, leading multidisciplinary teams across flight software, guidance, and power architecture.",
    responsibilities: [
      "Leading systems architecture development for long-duration autonomous spacecraft concepts",
      "Conducting comprehensive mission requirement analysis, safety hazard matrices, and risk mitigation studies",
      "Architecting cross-domain engineering integration standards between hardware control systems and flight software",
      "Spearheading autonomous systems research in fault-tolerant closed-loop navigation frameworks",
      "Mentoring senior engineering staff and coordinating technical review boards across 4 concurrent programs"
    ],
    skills: ["Mission Architecture", "System Integration", "Flight Autonomy", "Requirements Verification", "Technical Leadership"]
  },
  {
    id: "exp-2",
    period: "2020 — 2023",
    role: "Senior Aerospace Systems Engineer",
    company: "Northstar Flight Technologies",
    location: "Oslo, Norway",
    type: "Fictional Aerospace Hardware Manufacturer",
    summary: "Engineered high-reliability payload management systems and sensor integration buses for stratospheric and low-orbit research platforms.",
    responsibilities: [
      "Designed payload power distribution units and thermal management systems for extreme operating environments",
      "Executed hardware-in-the-loop (HIL) simulation testing for complex autonomous guidance systems",
      "Managed interface control documents (ICDs) between launch providers, payload customers, and internal engineering groups",
      "Implemented automated telemetry monitoring toolchains reducing mission verification turnaround by 40%"
    ],
    skills: ["HIL Simulation", "Interface Control (ICD)", "Telemetry Analytics", "Thermal Analysis", "Power Distribution"]
  },
  {
    id: "exp-3",
    period: "2017 — 2020",
    role: "Mission Systems Engineer",
    company: "Aurora Aerospace Research Center",
    location: "Trondheim, Norway",
    type: "Fictional Research Institute",
    summary: "Developed autonomous flight trajectory algorithms and dynamic orbital maneuver planning software for deep-space probe concepts.",
    responsibilities: [
      "Formulated orbital trajectory optimization models for low-thrust ion propulsion vehicles",
      "Created fault detection, isolation, and recovery (FDIR) state-machines for satellite bus subsystems",
      "Published 6 peer-reviewed conference papers on autonomous star-tracker guidance frameworks",
      "Collaborated with flight software teams to compile space-rated embedded C++ control code"
    ],
    skills: ["FDIR Architecture", "Orbital Trajectory", "Embedded C++", "Star-Tracker Navigation", "Peer Review"]
  },
  {
    id: "exp-4",
    period: "2015 — 2017",
    role: "Junior Systems Engineer",
    company: "Vector Orbit Engineering",
    location: "Oslo, Norway",
    type: "Fictional Flight Mechanics Startup",
    summary: "Assisted in mechanical CAD modeling, finite element analysis (FEA), and sensor calibration for high-altitude balloon and sound rocket payloads.",
    responsibilities: [
      "Performed structural FEA stress and vibration testing on satellite chassis prototypes",
      "Assisted senior engineers in sensor calibration and telemetry data acquisition pipelines",
      "Drafted technical specification documents and assembly schematics for flight hardware components"
    ],
    skills: ["Structural FEA", "CAD Modeling", "Sensor Calibration", "Documentation", "Testing Protocols"]
  }
];

export const SYSTEM_CATEGORIES = [
  {
    id: "mission-design",
    title: "MISSION DESIGN",
    description: "End-to-end mission architecture, high-level system requirements, and risk mitigation.",
    items: [
      { name: "Mission Architecture", detail: "Concept formulation, trade studies, orbit selection, delta-v budgeting" },
      { name: "Requirements Engineering", detail: "DOORS/Jama requirements tracing, parent-child verification matrices" },
      { name: "Risk Analysis", detail: "FMEA/FMECA hazard analysis, fault tree synthesis, redundancy strategies" }
    ]
  },
  {
    id: "autonomous-systems",
    title: "AUTONOMOUS SYSTEMS",
    description: "Self-governing flight software logic, state estimation, and sensor fusion.",
    items: [
      { name: "Autonomous Navigation", detail: "Optical star tracking, terrain relative navigation (TRN), Kalman filtering" },
      { name: "Control Logic", detail: "Attitude determination & control systems (ADCS), thruster allocation algorithms" },
      { name: "Sensor Integration", detail: "IMU/LiDAR/Star tracker hardware abstraction layers and synchronization" }
    ]
  },
  {
    id: "spacecraft-systems",
    title: "SPACECRAFT SYSTEMS",
    description: "Physical hardware subsystems, communication arrays, and electrical power generation.",
    items: [
      { name: "Systems Integration", detail: "Bus-to-payload interface control, mechanical & electrical integration" },
      { name: "Communication Systems", detail: "S/X/Ka-band radio link budgets, phased array antennas, optical laser comms" },
      { name: "Power Systems", detail: "Solar array sizing, MPPT regulation, Li-Ion battery management architectures" }
    ]
  },
  {
    id: "simulation",
    title: "SIMULATION & MODELING",
    description: "Physics-based mathematical modeling, trajectory propagation, and scenario testing.",
    items: [
      { name: "Systems Modeling", detail: "MATLAB/Simulink multi-body flight dynamics and thermal modeling" },
      { name: "Performance Simulation", detail: "Monte Carlo dispersion analysis, orbital perturbation simulations" },
      { name: "Scenario Analysis", detail: "Off-nominal contingency testing, hardware-in-the-loop (HIL) testbeds" }
    ]
  },
  {
    id: "professional",
    title: "PROFESSIONAL & LEADERSHIP",
    description: "Multidisciplinary team coordination, technical reviews, and engineering documentation.",
    items: [
      { name: "Technical Leadership", detail: "Cross-functional team direction, design review chair (PDR, CDR, FRR)" },
      { name: "Cross-Team Collaboration", detail: "Bridging software, hardware, safety, and operations stakeholders" },
      { name: "Engineering Documentation", detail: "Interface Control Documents (ICD), verification reports, flight manuals" }
    ]
  }
];

export const RESEARCH_PROJECTS = [
  {
    id: "res-1",
    year: "2025",
    code: "RES-2025-01",
    title: "ADAPTIVE AUTONOMY",
    summary: "Research into fictional adaptive autonomous navigation systems capable of real-time trajectory recalculation under unpredicted propulsion degradation.",
    highlights: [
      "Neural-mesh disturbance observer for low-thrust electric propulsion",
      "Real-time onboard trajectory optimization under 500ms compute constraints",
      "Demonstrated 99.4% mission success recovery rate in Monte Carlo orbital scenarios"
    ]
  },
  {
    id: "res-2",
    year: "2024",
    code: "RES-2024-04",
    title: "MODULAR MISSION ARCHITECTURES",
    summary: "A fictional systems research initiative exploring flexible mission design for reconfigurable multi-satellite swarms.",
    highlights: [
      "Standardized optical & power interface protocol for orbital module docking",
      "Distributed consensus algorithm for swarm flight formation control",
      "Reduced system non-recurring engineering (NRE) costs by an estimated 35%"
    ]
  },
  {
    id: "res-3",
    year: "2022",
    code: "RES-2022-09",
    title: "INTELLIGENT FLIGHT SYSTEMS",
    summary: "A fictional research project exploring autonomous decision frameworks for deep-space communication blackouts.",
    highlights: [
      "State-machine rule engine with deterministic fault tree resolution",
      "Autonomous payload prioritization matrix under emergency low-power states",
      "Validated via hardware-in-the-loop processing boards"
    ]
  }
];

export const TECHNICAL_PAPERS = [
  {
    title: "Adaptive Systems for Long-Duration Missions",
    journal: "Fictional Journal of Spacecraft Autonomy & Control",
    year: "2025",
    doi: "10.0000/fj.space.2025.0411",
    abstract: "This paper presents a fault-tolerant adaptive control strategy for autonomous spacecraft navigating long-duration interplanetary trajectories. By coupling dynamic state estimation with real-time thrust reconfiguration, the proposed architecture mitigates actuator degradation while guaranteeing envelope boundary constraints."
  },
  {
    title: "Mission Architecture in Autonomous Aerospace Platforms",
    journal: "Nordic Aerospace Systems Review (Fictional)",
    year: "2024",
    doi: "10.0000/nasr.systems.2024.0819",
    abstract: "An examination of modular software and electrical interfaces in next-generation research platforms. We define a unified system bus interface that simplifies payload integration and reduces qualification testing requirements for multi-institution orbital missions."
  },
  {
    title: "Designing Resilient Spacecraft Systems",
    journal: "International Systems Engineering Forum Proceedings",
    year: "2023",
    doi: "10.0000/isef.proc.2023.1102",
    abstract: "Methods for quantifying and enforcing fault resilience in high-radiation orbital environments. Focuses on hybrid software-hardware voting schemes and automated diagnostic state recovery protocols."
  }
];

export const EDUCATION = [
  {
    degree: "PhD in Aerospace Systems Engineering",
    institution: "Nordic Institute of Advanced Flight Studies",
    period: "2014 — 2018",
    location: "Fictional Institution, Norway",
    focus: "Autonomous Aerospace Systems & Trajectory Control",
    thesis: "Closed-Loop Autonomous Decision Topologies for Long-Duration Orbital Exploration Vehicles",
    highlights: [
      "Awarded Doctoral Research Excellence Commendation",
      "Developed custom flight simulator testbed for dual-ion propulsion dynamics",
      "Published 4 peer-reviewed journal papers during tenure"
    ]
  },
  {
    degree: "Master of Aerospace Engineering",
    institution: "Scandinavian Technical University",
    period: "2012 — 2014",
    location: "Fictional Institution, Sweden",
    focus: "Orbital Mechanics & Telemetry Systems",
    thesis: "Optimal Orbit Transfer Strategies for Constellation Satellites Using Low-Thrust Maneuvers",
    highlights: [
      "Graduated Summa Cum Laude (Top 2% of Engineering Class)",
      "Lead Avionics Developer for University Student CubeSat Project"
    ]
  },
  {
    degree: "Bachelor of Mechanical & Aerospace Engineering",
    institution: "Northern Institute of Engineering",
    period: "2008 — 2012",
    location: "Fictional Institution, Norway",
    focus: "Fluid Dynamics & Control Systems Hardware",
    thesis: "Design and Wind-Tunnel Testing of High-Altitude Supersonic Wing Profiles",
    highlights: [
      "Dean's List of Academic Excellence for 8 consecutive semesters",
      "President of Student Aerospace Robotics Association"
    ]
  }
];

export const RECOGNITION = [
  {
    year: "2025",
    title: "Systems Innovation Recognition",
    organization: "International Aerospace Systems Forum",
    description: "Awarded for pioneering contributions to autonomous flight control architectures in fictional research platforms."
  },
  {
    year: "2024",
    title: "Engineering Research Excellence",
    organization: "Nordic Flight Technology Assembly",
    description: "Honored for outstanding peer-reviewed research on reconfigurable modular spacecraft buses."
  },
  {
    year: "2022",
    title: "Emerging Technical Leadership Recognition",
    organization: "Future Systems Engineering Council",
    description: "Recognized for exemplary systems engineering team leadership and multidisciplinary safety integration."
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "PRECISION",
    subtitle: "Small details shape reliable systems.",
    description: "In aerospace engineering, catastrophic system failures are rarely caused by grand oversights—they stem from overlooked interface assumptions or unverified edge cases. True reliability demands obsessive rigor at every boundary layer."
  },
  {
    number: "02",
    title: "INTEGRATION",
    subtitle: "Great engineering connects disciplines.",
    description: "Software, propulsion, structures, and telemetry cannot exist in isolation. Superior spacecraft architectures are born when domain specialists communicate fluidly through shared system models and clear requirements."
  },
  {
    number: "03",
    title: "EXPLORATION",
    subtitle: "Innovation begins where familiar solutions end.",
    description: "Pushing the envelope of space exploration requires balancing battle-tested heritage components with bold autonomous software logic. We innovate responsibly to make the impossible operational."
  }
];
