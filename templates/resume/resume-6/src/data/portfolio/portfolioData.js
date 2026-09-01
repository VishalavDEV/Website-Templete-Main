export const portfolioData = {
  brand: {
    title: "AETHELGARD",
    subtitle: "STUDIO FOR ARCHITECTURAL RESEARCH",
    expertiseYears: "Expertise: 2030–2040",
    url: "aethelgard.studio"
  },
  
  navigation: [
    { label: "Design", href: "#design" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Residential", href: "#residential" },
    { label: "Commercial", href: "#commercial" },
    { label: "Urban Park", href: "#urban-park" }
  ],
  
  hero: {
    title: "ARCHITECTURE PORTFOLIO",
    label: "AETHELGARD / SELECTED WORKS",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80" // Premium curved glass architectural building façade
  },
  
  tableOfContents: [
    { index: "01", label: "Hero & Concept", href: "#design", thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=150&q=80" },
    { index: "05", label: "Philosophy & Bio", href: "#philosophy", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { index: "09", label: "Residential Works", href: "#residential", thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80" },
    { index: "13", label: "Commercial Facades", href: "#commercial", thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80" },
    { index: "17", label: "Urban Park Integration", href: "#urban-park", thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=150&q=80" }
  ],
  
  about: {
    architectName: "Alistair Thorne",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    statement: "Architecture is the silent language of gravity, light, and geometry. We believe in crafting spaces that do not merely stand, but converse with their surroundings. By stripping away the superfluous, we expose the structural truth of materials, creating timeless monuments that bridge human intention and nature's landscape.",
    infoTable: [
      {
        id: "edu",
        label: "Education",
        summary: "ETH Zürich & Harvard Graduate School of Design",
        detail: "Master of Architecture (M.Arch) from ETH Zürich, specialized in computational design. Post-graduate research in Parametric Ecology at Harvard GSD."
      },
      {
        id: "skills",
        label: "Expertise & Skills",
        summary: "BIM, Parametric Modeling, Zero-Energy Engineering",
        detail: "Proficient in Revit, Rhino Grasshopper, Enscape, Python scripting for generative layouts, and Passivhaus thermal bridge engineering."
      },
      {
        id: "exp",
        label: "Experience",
        summary: "15 Years leading International Projects",
        detail: "Principal Architect at Aethelgard Studio (2030-Present). Formerly Senior Associate at Snøhetta and Lead Designer at SANAA, Tokyo."
      },
      {
        id: "awards",
        label: "Awards & Honors",
        summary: "Pritzker Architecture Prize Nominee, RIBA Gold Medal",
        detail: "Recipient of the RIBA Gold Medal (2034) for Sustainable Infrastructure and the Mies van der Rohe Award for 'The Glass Canopy'."
      },
      {
        id: "vision",
        label: "Vision",
        summary: "Constructing Carbon-Negative Legacies",
        detail: "To transform concrete and glass into biological carbon sinks, utilizing cross-laminated timber, photosynthetic algae facades, and kinetic geometries."
      }
    ]
  },
  
  residentialProjects: [
    {
      id: "res-1",
      title: "The Monolith House",
      description: "Tucked away in the Swiss Alps, The Monolith House is a study of concrete density and spatial transparency. An asymmetric concrete shell opens completely via floor-to-ceiling glass panel sliders into the mountain vistas.",
      blueprint: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80", // architectural blueprint lines representation
      specs: {
        location: "Vals, Switzerland",
        area: "420 m²",
        materials: "Exposed Board-Formed Concrete, Structural Steel, Clear Glass",
        year: "2032"
      },
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Modern living room
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", // Modern concrete stairwell
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"  // Concrete house deck
      ]
    },
    {
      id: "res-2",
      title: "Solitude Pavilion",
      description: "A cantilevered retreat built above a rushing river. The floor plan organizes three distinct structural elements around a central courtyard, maximizing cross-ventilation and geometric symmetry.",
      blueprint: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", // line design/blueprint style representation
      specs: {
        location: "Kyoto, Japan",
        area: "280 m²",
        materials: "Larch Timber, Shou Sugi Ban Wood, Washi Translucents",
        year: "2035"
      },
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80", // Modern minimalist entry
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", // Wooden minimalist bedroom
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"  // Courtyard pond view
      ]
    }
  ],
  
  commercialProjects: {
    introText: "Commercial architecture must balance high-occupancy functionality with dramatic scale. Our commercial works challenge conventional skyscrapers by introducing structural organic shapes, multi-story open-air sky gardens, and double-skinned kinetic curtain walls.",
    projects: [
      {
        id: "comm-1",
        title: "Helix Towers",
        category: "Office & Retail",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", // High rise facade
        specs: {
          location: "Frankfurt, Germany",
          height: "220 m",
          facade: "Double Glazed Low-E Kinetic Panels"
        }
      },
      {
        id: "comm-2",
        title: "The Prism Pavilion",
        category: "Cultural Center",
        image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80", // Bridge/structured architectural view
        specs: {
          location: "San Francisco, USA",
          height: "45 m",
          facade: "Geometric Steel Framework & Photovoltaic Glass"
        }
      },
      {
        id: "comm-3",
        title: "Apex Aerosphere",
        category: "Exhibition Dome",
        image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80", // Unique structured architectural building dome
        specs: {
          location: "Singapore",
          height: "60 m",
          facade: "Pneumatic ETFE Cushions"
        }
      }
    ]
  },
  
  urbanPark: {
    title: "Ecotone Urban Park",
    description: "Located in Copenhagen, Ecotone is a 4-hectare urban park that blends public green spaces with computational concrete pavilions. The primary shade canopy features a dynamic topology, acting as both rainwater catchment and structural amphitheater roof.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80", // Beautiful park landscape with structures
    specs: {
      location: "Copenhagen, Denmark",
      completed: "2038",
      landscapeType: "Integrated Wetland & Topology Fields",
      structuralEngineer: "Arup Partners"
    }
  }
};
