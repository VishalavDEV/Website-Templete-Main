// FICTIONAL PROFESSIONAL PROFILE DATA FOR ADRIAN VALE

export const profileData = {
  name: "Adrian Vale",
  profession: "Architect & Spatial Designer",
  specialization: "Sustainable Architecture, Urban Spaces & Human-Centered Design",
  experienceYears: "11+ Years",
  location: "Copenhagen, Denmark",
  tagline: "Designing spaces where people, nature, and cities can coexist.",
  heroStatement: "An independent architect focused on sustainable environments, public spaces, and architecture shaped by human experience.",
  coordinates: "55.6761° N, 12.5683° E",
  gridRef: "GRID / A-04",
  profileYear: "PROFILE / 2026",
  locationTag: "COPENHAGEN / DK",
  email: "hello@adrianvale.example",
  phone: "+45 31 92 84 00",
  studioAddress: "Strandgade 44, 1401 København K, Denmark",
  disclaimer: "Fictional Resume/CV template created for demonstration purposes. All names, organizations, projects, images, and content are fictional."
};

export const philosophyData = {
  sectionNum: "01",
  title: "The Practice",
  quote: "Architecture should belong to its surroundings before it belongs to itself.",
  essay: "In an era of accelerating climate transformation and urban density, my practice champions a return to material honesty, micro-climatic intelligence, and civic intimacy. I approach architecture not as an isolated sculptural object, but as a living spatial canvas—one that listens to prevailing coastal winds, captures low Nordic sunlight, and encourages unscripted human connection. Every project begins with rigorous environmental research before a single line is drawn.",
  materialImage: "images/philosophy.jpg",
  principles: [
    {
      number: "01",
      title: "PLACE",
      subtitle: "Contextual Environmental Integration",
      description: "Understanding the environment before designing within it. Conducting solar analysis, wind vector modeling, and regional material mapping."
    },
    {
      number: "02",
      title: "PEOPLE",
      subtitle: "Human-Centered Spatial Flow",
      description: "Creating spaces shaped around human behavior, tactile warmth, and experience. Prioritizing spatial clarity, natural acoustics, and intuitive navigation."
    },
    {
      number: "03",
      title: "TIME",
      subtitle: "Adaptive Circular Longevity",
      description: "Designing architecture that can gracefully adapt, age, and remain meaningful over decades through modular construction and circular materials."
    }
  ]
};

export const projectsData = [
  {
    id: "proj-01",
    num: "01",
    name: "NORDHAVEN COMMONS",
    category: "Mixed-Use",
    type: "Mixed-Use Community Space",
    year: "2025",
    location: "Nordhaven District, Copenhagen, DK",
    status: "Under Construction (Completion 2026)",
    image: "images/nordhaven.jpg",
    shortDescription: "A fictional community-focused mixed-use environment designed around shared courtyards, natural daylighting, and adaptable public gathering spaces.",
    fullOverview: "Nordhaven Commons reinvents the traditional Scandinavian harbor block into an open civic ecosystem. Composed of mass-timber volumes surrounding a microclimate-protected public garden, the project integrates public workshops, organic market stalls, co-working studios, and 48 low-carbon residences.",
    designConcept: "Passive solar thermal chimneying and timber colonnades frame views of the harbor while shielding exterior seating from harsh northern sea breezes.",
    materials: ["Cross-Laminated Timber", "Triple Low-E Glazing", "Recycled Basalt Paving", "Zinc Roofing"],
    metrics: {
      area: "14,200 m²",
      carbonReduction: "58% Embodied CO₂",
      energyRating: "Net Zero Operational",
      yearCompleted: "2025-2026"
    },
    diagrams: [
      { label: "AXONOMETRIC SOLAR CHIMNEY", detail: "Natural convective air movement through central atrium" },
      { label: "TIMBER JOINERY SPECIFICATION", detail: "Glue-free demountable timber-to-steel node joints" }
    ]
  },
  {
    id: "proj-02",
    num: "02",
    name: "THE VERDE LIBRARY",
    category: "Cultural",
    type: "Public Cultural Space",
    year: "2024",
    location: "Østerbro, Copenhagen, DK",
    status: "Completed",
    image: "images/verde.jpg",
    shortDescription: "A fictional public library integrating landscape, cascading daylight, acoustic wood volumes, and community learning spaces.",
    fullOverview: "Designed as a 'living room for the city,' The Verde Library bridges a public municipal park with a historic neighborhood. Featuring a multi-story indoor botanical atrium, quiet subterranean reading vaults, and flexible media labs, the interior creates a seamless sensory transition between nature and literature.",
    designConcept: "Light-funneling skylights direct soft north light deep into reading zones, eliminating harsh glare while fostering deep concentration.",
    materials: ["Danish White Ash", "Acoustic Recycled Wood Fiber", "Structural Double Glass", "Living Hydroponic Moss Panels"],
    metrics: {
      area: "8,500 m²",
      carbonReduction: "44% Embodied CO₂",
      energyRating: "Nordic Swan Certified",
      yearCompleted: "2024"
    },
    diagrams: [
      { label: "DAYLIGHT LUX MAPPING", detail: "Uniform 450 Lux diffuse light distribution" },
      { label: "ACOUSTIC INSULATION BUFFER", detail: "Triple-layer sound attenuation wall assemblies" }
    ]
  },
  {
    id: "proj-03",
    num: "03",
    name: "TIDEHOUSE",
    category: "Residential",
    type: "Coastal Residential Architecture",
    year: "2023",
    location: "Skagen Coastline, Denmark",
    status: "Built",
    image: "images/tidehouse.jpg",
    shortDescription: "A fictional coastal residence exploring climate-responsive monolithic concrete, dark zinc, and open spatial ocean views.",
    fullOverview: "Perched along the exposed granite rocks of the Skagen coast, Tidehouse is engineered to withstand extreme sea salt exposure and heavy storms while providing an ultra-serene sanctuary. Cantilevered living quarters hover above the tidal zone, framing uninterrupted views of the Kattegat horizon.",
    designConcept: "A dual-wing geometry buffers cold North Sea winds on the seaward facade while carving out a sunlit, sheltered south-facing inner patio.",
    materials: ["Board-Formed Concrete", "Pre-Weathered Dark Zinc", "Thermally Modified Ash Decking", "Triple-Pane Marine Glass"],
    metrics: {
      area: "420 m²",
      carbonReduction: "35% Embodied CO₂",
      energyRating: "Passive House Standard",
      yearCompleted: "2023"
    },
    diagrams: [
      { label: "FOUNDATION TIDE ANCHORING", detail: "Direct granite bedrock anchor pin system" },
      { label: "THERMAL ENVELOPE SECTIONS", detail: "300mm continuous insulation cavity" }
    ]
  },
  {
    id: "proj-04",
    num: "04",
    name: "AXIS COURTYARD",
    category: "Urban Renewal",
    type: "Urban Regeneration",
    year: "2022",
    location: "Nørrebro, Copenhagen, DK",
    status: "Completed",
    image: "images/axis.jpg",
    shortDescription: "A fictional urban renewal concept focused on transforming underused industrial warehouse yards into vibrant community public plazas.",
    fullOverview: "Axis Courtyard adaptive-reuse masterplan revitalizes a former 19th-century textile factory site. By retaining historic red-brick facades and inserting elevated steel bridges, rainwater retention ponds, and terraced seating, the site was transformed into a thriving pedestrian district.",
    designConcept: "Combining historic industrial texture with refined modern transparency to foster creative industries and community gathering.",
    materials: ["Reclaimed 1890s Red Brick", "Weathered Corten Steel", "Granite Cobblestone", "Laminated Birch Panels"],
    metrics: {
      area: "19,800 m² Masterplan",
      carbonReduction: "72% Saved vs Demolition",
      energyRating: "BREEAM Outstanding",
      yearCompleted: "2022"
    },
    diagrams: [
      { label: "RAINWATER DRAINAGE RUNOFF", detail: "100% onsite storm water bio-swale retention" },
      { label: "FACADE STABILIZATION TRUSS", detail: "Historic brick wall bracing methodology" }
    ]
  },
  {
    id: "proj-05",
    num: "05",
    name: "FIELD STUDIO",
    category: "Workplace",
    type: "Creative Workspace",
    year: "2021",
    location: "Zealand Meadow, Denmark",
    status: "Completed",
    image: "images/field.jpg",
    shortDescription: "A fictional low-impact workspace designed for flexible creative collaboration amidst wild Danish meadow landscapes.",
    fullOverview: "Constructed on a rural agrarian estate, Field Studio serves as an off-grid research lodge and architectural workshop. Utilizing locally sourced rammed earth from excavation and untreated larch timber, the structure leaves a minimal physical footprint.",
    designConcept: "Harmonizing building elevation with the natural meadow horizon line, allowing native wildflowers and seasonal grasses to sweep directly against glass facades.",
    materials: ["Locally Rammed Earth", "Untreated Larch Siding", "Photovoltaic Roof Glass", "Polished Lime Plaster"],
    metrics: {
      area: "350 m²",
      carbonReduction: "82% Carbon Negative Structure",
      energyRating: "Off-Grid Solar + Geothermal",
      yearCompleted: "2021"
    },
    diagrams: [
      { label: "RAMMED EARTH STRATIGRAPHY", detail: "Soil-binder mix ratio & thermal mass performance" },
      { label: "MEADOW ECOSYSTEM BUFFER", detail: "Zero-runoff peripheral drainage channel" }
    ]
  }
];

export const experienceData = [
  {
    period: "2022 — PRESENT",
    role: "Lead Architect",
    company: "Atelier Northline",
    location: "Copenhagen, Denmark",
    type: "Fictional Architecture Practice",
    coordinates: "CPH / 55.68° N",
    description: "Heading architectural concept development and sustainable urban initiatives across Scandinavia.",
    responsibilities: [
      "Leading multidisciplinary design teams on mass-timber mixed-use developments",
      "Directing client keynote presentations, municipal zoning negotiations, and environmental approvals",
      "Integrating parametric daylight modeling and LCA carbon accounting into early schematic phases",
      "Mentoring 12 studio architects and establishing sustainable material specification standards"
    ]
  },
  {
    period: "2018 — 2022",
    role: "Senior Architect",
    company: "Formline Collective",
    location: "Stockholm, Sweden",
    type: "Fictional Architecture Studio",
    coordinates: "STO / 59.32° N",
    description: "Managed public cultural infrastructure projects and residential masterplans.",
    responsibilities: [
      "Principal design lead for public library and community space competitions",
      "Supervised BIM coordination models (Revit/Rhino) from schematic design through site execution",
      "Engineered high-performance building envelopes for extreme Scandinavian winter climates",
      "Collaborated directly with structural engineers, landscape architects, and municipal planning boards"
    ]
  },
  {
    period: "2015 — 2018",
    role: "Architectural Designer",
    company: "Urban Frame Studio",
    location: "Copenhagen, Denmark",
    type: "Fictional Architecture Organization",
    coordinates: "CPH / 55.67° N",
    description: "Focused on adaptive-reuse urban renewal projects and detailed facade drafting.",
    responsibilities: [
      "Developed detailed CD packages, facade joinery sections, and structural detailing",
      "Authored material sustainability audit reports for heritage building restorations",
      "Created high-end architectural renders, physical timber models, and client presentation boards",
      "Conducted weekly site inspections and contractor coordination meetings"
    ]
  },
  {
    period: "2013 — 2015",
    role: "Junior Architectural Designer",
    company: "Contour Works",
    location: "Aarhus, Denmark",
    type: "Fictional Organization",
    coordinates: "AAR / 56.16° N",
    description: "Assisted senior partners with competition entries, physical modeling, and site analysis.",
    responsibilities: [
      "Fabricated precision basswood and acrylic architectural competition models",
      "Executed 3D CAD modeling, shadow analysis, and site topography mapping",
      "Assisted with environmental impact documentation and client workshop prep"
    ]
  }
];

export const skillsData = [
  {
    category: "ARCHITECTURAL DESIGN",
    code: "SEC / 01",
    skills: [
      { name: "Concept Development", level: "Expert", spec: "Schematic & Spatial Ideation" },
      { name: "Spatial Planning", level: "Expert", spec: "Volumetric Efficiency & Circulation" },
      { name: "Sustainable Design", level: "Expert", spec: "Passive Solar & Mass Timber" },
      { name: "Urban Analysis", level: "Advanced", spec: "Pedestrian Flow & Microclimate" }
    ]
  },
  {
    category: "DIGITAL TOOLS",
    code: "SEC / 02",
    skills: [
      { name: "BIM Modeling", level: "Expert", spec: "Autodesk Revit & ArchiCAD" },
      { name: "3D Visualization", level: "Expert", spec: "Rhino 3D, V-Ray & Enscape" },
      { name: "CAD Documentation", level: "Expert", spec: "AutoCAD & Technical Sections" },
      { name: "Parametric Design", level: "Advanced", spec: "Grasshopper & Generative Scripts" }
    ]
  },
  {
    category: "PROJECT DEVELOPMENT",
    code: "SEC / 03",
    skills: [
      { name: "Design Coordination", level: "Expert", spec: "MEP & Structural Integration" },
      { name: "Material Research", level: "Expert", spec: "Circular & Low-Carbon Spec" },
      { name: "Site Analysis", level: "Advanced", spec: "Topography & Solar Mapping" },
      { name: "Presentation Design", level: "Expert", spec: "Editorial Portfolio & Keynote" }
    ]
  },
  {
    category: "PROFESSIONAL SKILLS",
    code: "SEC / 04",
    skills: [
      { name: "Team Leadership", level: "Expert", spec: "Studio Direction & Mentorship" },
      { name: "Client Communication", level: "Expert", spec: "Keynote & Stakeholder Mgmt" },
      { name: "Design Strategy", level: "Expert", spec: "Competition & Feasibility Lead" },
      { name: "Creative Direction", level: "Expert", spec: "Brand & Spatial Storytelling" }
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Architecture (M.Arch)",
    institution: "Nordic Institute of Spatial Design",
    year: "2011 — 2013",
    type: "Fictional Academic Institution",
    location: "Copenhagen, Denmark",
    focus: "Sustainable Architecture & Urban Systems",
    thesis: "Thesis: 'Passive Solar Integration in High-Latitude Community Housing'",
    honors: "Graduated with First Class Distinction & Excellence Award"
  },
  {
    degree: "Bachelor of Architectural Studies (B.AS)",
    institution: "Scandinavian School of Built Environments",
    year: "2008 — 2011",
    type: "Fictional Academic Institution",
    location: "Aarhus, Denmark",
    focus: "Vernacular Construction & Material Science",
    thesis: "Valedictorian Project: 'Demountable Timber Joinery Systems for Reusable Structures'",
    honors: "Dean's Honor List (All Semesters)"
  }
];

export const researchData = {
  sectionNum: "06",
  title: "Research & Public Work",
  projects: [
    {
      code: "RES / 2025",
      title: "LIVING CITIES",
      year: "2025",
      subtitle: "Research into adaptable public environments and post-industrial urban re-wilding.",
      summary: "An investigation into how modular wooden structural infills can revitalize decommissioned shipping piers across Northern Europe."
    },
    {
      code: "RES / 2023",
      title: "MATERIAL FUTURES",
      year: "2023",
      subtitle: "A fictional exploration of sustainable construction materials & bio-composites.",
      summary: "Comparative carbon-footprint lifecycle assessment measuring rammed earth, hempcrete, and cross-laminated timber against standard concrete."
    },
    {
      code: "RES / 2021",
      title: "WATER & CITY",
      year: "2021",
      subtitle: "A fictional study about urban environments near changing coastline ecosystems.",
      summary: "Spatial strategies for amphibious coastal housing modules resilient to a 1.5m sea-level rise along Nordic coastlines."
    }
  ],
  exhibitions: [
    {
      title: "Spatial Futures",
      location: "Copenhagen",
      year: "2025",
      role: "Lead Visual Contributor & Guest Lecturer"
    },
    {
      title: "Common Ground",
      location: "Rotterdam",
      year: "2023",
      role: "Group Exhibition on Social Housing Architecture"
    },
    {
      title: "Material Conversations",
      location: "Helsinki",
      year: "2021",
      role: "Pavilion Installation: Reclaimed Wood & Glass"
    }
  ]
};

export const recognitionData = [
  {
    year: "2025",
    title: "Emerging Practice Recognition",
    organization: "Northern Spatial Forum",
    location: "Stockholm, Sweden",
    projectRef: "Nordhaven Commons"
  },
  {
    year: "2024",
    title: "Sustainable Design Award",
    organization: "European Built Environment Assembly",
    location: "Berlin, Germany",
    projectRef: "The Verde Library"
  },
  {
    year: "2022",
    title: "Public Space Innovation Recognition",
    organization: "Urban Futures Collective",
    location: "Copenhagen, Denmark",
    projectRef: "Axis Courtyard"
  },
  {
    year: "2020",
    title: "Nordic Young Architect Fellowship",
    organization: "Scandinavian Architectural Trust",
    location: "Oslo, Norway",
    projectRef: "Research Portfolio"
  }
];
