import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'aether',
    title: 'Aether',
    tagline: 'Digital product ecosystem for spatial intelligence',
    category: 'UI/UX',
    year: '2026',
    client: 'Aether Labs Inc.',
    services: ['UX Research', 'UI Architecture', 'Product Strategy', 'Design System'],
    heroImage: '/src/assets/images/aether_spatial_ui_1787880779021.jpg',
    coverAspect: 'aspect-[4/5]',
    summary: 'Aether is an AI-augmented spatial analytics platform designed for urban architects and environmental planners. We established a fluid UI system that translates multidimensional geospatial data into actionable spatial visualizers.',
    challenge: 'Aether previously struggled with fragmented analytics tools, high cognitive load for urban planners, and legacy interface components that failed to scale across dynamic viewport sizes.',
    solution: 'We crafted an adaptive dark-and-light spatial canvas, featuring micro-interactions, customizable telemetry widgets, and real-time 3D geospatial overlays built with modular design tokens.',
    research: {
      title: 'Deciphering Spatial Workflows',
      description: 'We conducted 24 contextual interviews with chief urban architects and environmental data analysts across Tokyo, Berlin, and San Francisco.',
      keyInsights: [
        'Urban planners context-switch between 2D geospatial maps and 3D architectural models 14+ times per hour.',
        'Data density must scale fluidly without obscuring critical elevation markers.',
        'Collaborative annotations require instant versioning and visual feedback.'
      ],
      userPersona: {
        name: 'Dr. Evelyn Vance',
        role: 'Lead Spatial Planner @ Urbanis',
        quote: 'We need high-density data visualization that feels light as air, allowing us to spot architectural anomalies without friction.',
        avatar: '/src/assets/images/team_designer_portrait_1787886436203.jpg'
      }
    },
    wireframes: {
      title: 'Architectural Wireframes & Layout Mechanics',
      description: 'Iterative low-fidelity wireframing focused on spatial hierarchy, panel docking, and adaptive split viewports.',
      images: [
        {
          url: '/src/assets/images/service_design_system_1787881469264.jpg',
          caption: 'Geospatial Grid Docking & Widget Hierarchy',
          label: 'Wireframe v1.2'
        },
        {
          url: '/src/assets/images/service_ui_ux_design_1787881454335.jpg',
          caption: 'Multi-layered Elevation Inspection Controls',
          label: 'Wireframe v2.4'
        }
      ]
    },
    uiExploration: {
      title: 'Visual System & Motion Language',
      description: 'A crisp, monochromatic foundation paired with luminous cobalt accents to emphasize spatial depth and interactive nodes.',
      colorPalette: [
        { name: 'Obsidian Canvas', hex: '#0B0F19' },
        { name: 'Aether Cobalt', hex: '#2563EB' },
        { name: 'Luminous Ice', hex: '#60A5FA' },
        { name: 'Ivory Fog', hex: '#F8FAFC' }
      ],
      typography: 'Space Grotesk & Plus Jakarta Sans',
      components: ['Spatial Dock', 'Telemetry Card', '3D Node Inspector', 'Fluid Timeline'],
      images: [
        {
          url: '/src/assets/images/service_prototyping_1787881485704.jpg',
          title: 'Spatial Dashboard View',
          caption: 'High-density spatial telemetry rendered with sub-pixel precision.'
        },
        {
          url: '/src/assets/images/aether_spatial_ui_1787880779021.jpg',
          title: '3D Node Inspector Panel',
          caption: 'Contextual inspection drawer expanding smoothly upon building selection.'
        }
      ]
    },
    prototype: {
      title: 'Interactive Experience Prototype',
      description: 'Explore key interactive views of the Aether platform prototype.',
      interactiveTabs: [
        {
          id: 'telemetry',
          label: 'Spatial Telemetry',
          description: 'Real-time monitoring of thermal indices, airflow maps, and density metrics.',
          mockupUrl: '/src/assets/images/aether_spatial_ui_1787880779021.jpg',
          hotspots: [
            { x: 25, y: 35, title: 'Live Node Density', desc: 'Displays real-time structural load and occupancy.' },
            { x: 75, y: 55, title: 'Thermal Layer Toggle', desc: 'Switches GPU shader layers for heat maps.' }
          ]
        },
        {
          id: 'editor',
          label: '3D Simulation Canvas',
          description: 'Drag-and-drop architectural placement with parametric constraint checking.',
          mockupUrl: '/src/assets/images/service_ui_ux_design_1787881454335.jpg',
          hotspots: [
            { x: 45, y: 40, title: 'Parametric Controls', desc: 'Adjust building height and solar absorption factors.' }
          ]
        },
        {
          id: 'analytics',
          label: 'Predictive Insights',
          description: 'AI model predictions on 10-year urban expansion and traffic flow changes.',
          mockupUrl: '/src/assets/images/service_prod_strategy_1787881442168.jpg'
        }
      ]
    },
    results: [
      { metric: '+48%', label: 'Decision Speed', description: 'Architects reached spatial conclusions 48% faster during testing.' },
      { metric: '3.2x', label: 'Data Processing Throughput', description: 'Streamlined visual state management enabled triple the data handling.' },
      { metric: '99.4%', label: 'Task Completion Rate', description: 'Achieved near-perfect usability rating across 120 pilot sessions.' }
    ],
    nextProjectId: 'mono-house',
    nextProjectTitle: 'Mono House'
  },

  {
    id: 'mono-house',
    title: 'Mono House',
    tagline: 'Architectural spatial portfolio & physical brand identity',
    category: 'Branding',
    year: '2026',
    client: 'Mono Architectural Studio',
    services: ['Brand Identity', 'Spatial Graphics', 'Web Experience', 'Editorial Design'],
    heroImage: '/src/assets/images/mono_house_arch_1787880863911.jpg',
    coverAspect: 'aspect-[16/10]',
    summary: 'Mono House is a visionary Scandinavian architecture practice. We redefined their brand identity from the ground up, establishing a physical and digital design system grounded in materiality, negative space, and typographic restraint.',
    challenge: 'Mono House needed a digital presence that mirrored the physical weight and tactile precision of their timber and concrete structures without feeling sterile or distant.',
    solution: 'We constructed an editorial digital archive featuring custom serif typography, raw material texture visualizers, and asymmetric layout grids that echo spatial proportions.',
    research: {
      title: 'Materiality & Tactile Digital Spaces',
      description: 'Explored the intersection between physical architectural materials and digital viewport transitions.',
      keyInsights: [
        'Clients select architectural studios based on spatial feel and light manipulation.',
        'High-resolution imagery requires patient, generous margins to evoke calmness.',
        'Micro-typography creates quiet authority when paired with large architectural photography.'
      ],
      userPersona: {
        name: 'Klaus Lindqvist',
        role: 'Partner @ Mono House',
        quote: 'Our buildings speak through silence and material weight; our digital home must express the exact same quiet confidence.',
        avatar: '/src/assets/images/team_strategist_portrait_1787886454193.jpg'
      }
    },
    wireframes: {
      title: 'Editorial Grid & Proportional Blueprint',
      description: 'Designing layout grids based on classic architectural ratios (Golden section & Modulor).',
      images: [
        {
          url: '/src/assets/images/mono_house_arch_1787880863911.jpg',
          caption: 'Asymmetric Image Layout & Material Specs Grid',
          label: 'Grid Concept A'
        }
      ]
    },
    uiExploration: {
      title: 'Tactile Palette & Editorial Typography',
      description: 'Muted natural tones derived from raw cedar, brushed steel, and chalk white.',
      colorPalette: [
        { name: 'Chalk White', hex: '#F9F8F6' },
        { name: 'Raw Cedar', hex: '#8C7A6B' },
        { name: 'Charcoal Slag', hex: '#1C1B1A' },
        { name: 'Brushed Slate', hex: '#D4CECD' }
      ],
      typography: 'Playfair Display & Inter',
      components: ['Material Selector', 'Architectural Index', 'Full-Bleed Lightbox', 'Spatial Spec Sheet'],
      images: [
        {
          url: '/src/assets/images/noma_furniture_object_1787880813264.jpg',
          title: 'Project Detail Presentation',
          caption: 'Generous whitespace allowing architectural photography to breathe.'
        }
      ]
    },
    prototype: {
      title: 'Interactive Spatial Gallery',
      description: 'Experience the digital exhibition layout for Mono House projects.',
      interactiveTabs: [
        {
          id: 'exhibition',
          label: 'Residence Portfolio',
          description: 'Editorial layout showcasing private residential masterpieces.',
          mockupUrl: '/src/assets/images/mono_house_arch_1787880863911.jpg'
        },
        {
          id: 'specifications',
          label: 'Material Breakdown',
          description: 'Tactile spec sheets detailing stone origins and thermal performance.',
          mockupUrl: '/src/assets/images/design_attention_1787880412477.jpg'
        }
      ]
    },
    results: [
      { metric: '+140%', label: 'Inquiry Quality', description: 'Attracted high-value international residential commissions.' },
      { metric: '4.8 min', label: 'Average Session Time', description: 'Visitors immersed themselves in the editorial layout.' },
      { metric: '3 Awards', label: 'Design Recognition', description: 'Awarded Awwwards Site of the Day & Red Dot Design Award.' }
    ],
    nextProjectId: 'orbit-finance',
    nextProjectTitle: 'Orbit Finance'
  },

  {
    id: 'orbit-finance',
    title: 'Orbit Finance',
    tagline: 'Next-gen algorithmic trading interface & design system',
    category: 'Product',
    year: '2025',
    client: 'Orbit Global Capital',
    services: ['Product Design', 'Fintech UI', 'Design System', 'Design Strategy'],
    heroImage: '/src/assets/images/orbit_finance_ui_1787880798145.jpg',
    coverAspect: 'aspect-[4/5]',
    summary: 'Orbit Finance empowers institutional traders with automated liquidity execution and real-time algorithmic risk modeling. We built a high-density, low-latency financial design system crafted for multi-monitor setups.',
    challenge: 'Trading interfaces are notorious for cluttered layouts, visual fatigue, and delayed updates during high-volatility market windows.',
    solution: 'We engineered an ultra-modular dark theme design system featuring custom sparklines, high-contrast order books, and customizable keyboard shortcuts for sub-millisecond execution.',
    research: {
      title: 'Institutional Trader Cognitive Load',
      description: 'Observed active trading desks across London and Chicago during market open hours.',
      keyInsights: [
        'Eye fatigue peaks after 2 hours of continuous monitor gaze.',
        'Contrast levels must be finely tuned to avoid glare while keeping order book changes distinct.',
        'Keyboard-driven workflows are 4x faster than cursor interactions.'
      ],
      userPersona: {
        name: 'Marcus Sterling',
        role: 'Senior Quantitative Trader',
        quote: 'When markets move in milliseconds, every single pixel of visual noise is financial risk. We need extreme visual clarity.',
        avatar: '/src/assets/images/team_dev_portrait_1787886419155.jpg'
      }
    },
    wireframes: {
      title: 'Multi-Monitor Order Book Layouts',
      description: 'Systematic wireframing for modular chart docking, execution tickets, and risk monitors.',
      images: [
        {
          url: '/src/assets/images/orbit_finance_ui_1787880798145.jpg',
          caption: 'High-Density Terminal Layout & Order Entry Panel',
          label: 'Terminal Mockup'
        }
      ]
    },
    uiExploration: {
      title: 'Precision FinTech System',
      description: 'Optimized dark canvas with electric green and violet signal highlights.',
      colorPalette: [
        { name: 'Deep Space', hex: '#0B0C10' },
        { name: 'Signal Emerald', hex: '#10B981' },
        { name: 'Violet Alpha', hex: '#8B5CF6' },
        { name: 'Cool Steel', hex: '#94A3B8' }
      ],
      typography: 'JetBrains Mono & Inter',
      components: ['Order Book Ladder', 'Algorithmic Execution Ticket', 'Depth Chart Canvas', 'Risk Telemetry'],
      images: [
        {
          url: '/src/assets/images/service_prod_strategy_1787881442168.jpg',
          title: 'Institutional Workspace',
          caption: 'Sub-second real-time market telemetry rendered with low CPU usage.'
        }
      ]
    },
    prototype: {
      title: 'Live Terminal Simulator',
      description: 'Interact with the Orbit terminal execution controls.',
      interactiveTabs: [
        {
          id: 'terminal',
          label: 'Algorithmic Order Entry',
          description: 'Precision entry ticket with dynamic slippage alerts and depth visualization.',
          mockupUrl: '/src/assets/images/orbit_finance_ui_1787880798145.jpg'
        },
        {
          id: 'risk',
          label: 'Real-time Risk Heatmap',
          description: 'Portfolio exposure monitoring across multi-currency pools.',
          mockupUrl: '/src/assets/images/service_design_system_1787881469264.jpg'
        }
      ]
    },
    results: [
      { metric: '0.04s', label: 'Average Execution Time', description: 'Optimized UI workflows reduced manual order placement time.' },
      { metric: '$4.2B+', label: 'Monthly Volume', description: 'Handled over 4 billion dollars in institutional trade volume.' },
      { metric: '88%', label: 'Trader Preference', description: 'Voted top trading UI compared to legacy financial terminals.' }
    ],
    nextProjectId: 'noma-objects',
    nextProjectTitle: 'Noma Objects'
  },

  {
    id: 'noma-objects',
    title: 'Noma Objects',
    tagline: '3D e-commerce experience & generative brand environment',
    category: 'Digital',
    year: '2025',
    client: 'Noma Design Collective',
    services: ['3D Web Experience', 'E-Commerce UI', 'Generative Art', 'Frontend Engineering'],
    heroImage: '/src/assets/images/noma_furniture_object_1787880813264.jpg',
    coverAspect: 'aspect-[16/10]',
    summary: 'Noma Objects creates limited-edition luxury furniture and digital collectibles. We designed a web experience where physical furniture pieces are rendered in interactive 3D, allowing customers to inspect lighting, materials, and spatial scale in real-time.',
    challenge: 'Traditional e-commerce photography failed to convey the 3D craftsmanship, metallic refractions, and custom textures of Noma’s high-end furniture objects.',
    solution: 'We built a WebGL-powered 3D showroom with custom material shader controls, interactive exploding views, and seamlessly integrated checkout flows.',
    research: {
      title: 'Luxury Spatial Shopping Dynamics',
      description: 'Studied luxury art collectors and high-net-worth interior designers buying online.',
      keyInsights: [
        'Buyers want to examine object material textures under varying ambient lighting conditions.',
        '3D object rotation increases buyer confidence by 67%.',
        'Minimalist checkout steps prevent distraction from product appreciation.'
      ],
      userPersona: {
        name: 'Camilla Rossi',
        role: 'Interior Curator',
        quote: 'Buying bespoke furniture online feels risky unless I can rotate the piece, view the joinery, and see how light hits the grain.',
        avatar: '/src/assets/images/team_lead_portrait_1787886403043.jpg'
      }
    },
    wireframes: {
      title: '3D Viewport & Spatial Commerce Flows',
      description: 'Structuring the canvas to blend 3D canvas viewport controls with e-commerce UI overlays.',
      images: [
        {
          url: '/src/assets/images/noma_furniture_object_1787880813264.jpg',
          caption: 'Interactive 3D Stage & Material Customizer Grid',
          label: '3D Stage Layout'
        }
      ]
    },
    uiExploration: {
      title: 'Sculptural Aesthetic',
      description: 'Warm ivory studio lighting with charcoal typographic accents.',
      colorPalette: [
        { name: 'Ivory Studio', hex: '#FAF8F5' },
        { name: 'Bronze Ochre', hex: '#B8860B' },
        { name: 'Carbon Black', hex: '#141414' },
        { name: 'Mist Gray', hex: '#E5E5E5' }
      ],
      typography: 'Cinzel & Plus Jakarta Sans',
      components: ['3D Stage Canvas', 'Material Swatch Selector', 'Exploding View Toggle', 'Cart Drawer'],
      images: [
        {
          url: '/src/assets/images/archive_art_gallery_1787880846677.jpg',
          title: 'Interactive Object Inspection',
          caption: 'Real-time raytraced lighting simulation in the browser.'
        }
      ]
    },
    prototype: {
      title: '3D Showroom Simulator',
      description: 'Rotate and customize materials in the interactive showroom.',
      interactiveTabs: [
        {
          id: 'showroom',
          label: 'Object Inspection Stage',
          description: 'Full 360-degree rotation with material surface zoom.',
          mockupUrl: '/src/assets/images/noma_furniture_object_1787880813264.jpg'
        },
        {
          id: 'materials',
          label: 'Material Shader Customizer',
          description: 'Switch between brushed brass, matte ceramic, and charred oak textures.',
          mockupUrl: '/src/assets/images/service_creative_3d_1787881502863.jpg'
        }
      ]
    },
    results: [
      { metric: '+215%', label: 'Sales Conversion', description: '3D showroom tripled purchase conversions for high-ticket items.' },
      { metric: '-62%', label: 'Product Returns', description: 'Accurate material visualizers drastically reduced buyer returns.' },
      { metric: '6.4 min', label: 'Engagement Duration', description: 'Customers spent over 6 minutes customizing design objects.' }
    ],
    nextProjectId: 'flux-mobility',
    nextProjectTitle: 'Flux Mobility'
  },

  {
    id: 'flux-mobility',
    title: 'Flux Mobility',
    tagline: 'Autonomous EV Operating System & mobile telemetry suite',
    category: 'Experimental',
    year: '2026',
    client: 'Flux Motors AG',
    services: ['Automotive UX', 'HMI Interface', 'Design System', 'Prototyping'],
    heroImage: '/src/assets/images/flux_ev_cockpit_ui_1787880828618.jpg',
    coverAspect: 'aspect-[4/5]',
    summary: 'Flux Mobility is a next-generation electric vehicle platform. We designed the human-machine interface (HMI) for in-cabin widescreen displays and companion mobile apps, providing seamless transition between autonomous driving modes and manual telemetry.',
    challenge: 'Designing an automotive display UI that delivers safety-critical driving information instantly without creating driver distraction during manual override.',
    solution: 'We created an adaptive high-contrast HMI featuring glanceable widget cards, ambient night-mode transitions, and haptic gesture feedback integration.',
    research: {
      title: 'HMI Eye Tracking & Glance Perception',
      description: 'Tested cockpit screen layouts with professional test drivers in simulated driving environments.',
      keyInsights: [
        'Critical speed and battery metrics must be readable within 0.15 seconds of glance.',
        'Night driving mode requires low-luminance blue wavelengths to preserve night vision.',
        'Autonomous status changes must trigger distinct spatial audio and visual ripples.'
      ],
      userPersona: {
        name: 'Soren Vance',
        role: 'EV Fleet Director',
        quote: 'An EV interface must feel like an extension of the driver’s senses — effortless, hyper-responsive, and crystal clear.',
        avatar: '/src/assets/images/team_strategist_portrait_1787886454193.jpg'
      }
    },
    wireframes: {
      title: 'Cockpit Widescreen Architecture',
      description: 'Structuring driver display zones across panoramic dashboard displays.',
      images: [
        {
          url: '/src/assets/images/flux_ev_cockpit_ui_1787880828618.jpg',
          caption: 'Panoramic Instrument Cluster Layout & Autonomous Visualizer',
          label: 'HMI Wireframe'
        }
      ]
    },
    uiExploration: {
      title: 'Neon Cybernetics & Minimalist Craft',
      description: 'Futuristic electric blue and laser cyan highlights on absolute pitch dark background.',
      colorPalette: [
        { name: 'Cockpit Onyx', hex: '#08090C' },
        { name: 'Flux Cyan', hex: '#06B6D4' },
        { name: 'Electric Violet', hex: '#7C3AED' },
        { name: 'Pure Chalk', hex: '#FFFFFF' }
      ],
      typography: 'Space Grotesk & Inter',
      components: ['Speedometer Ring', 'Battery Range Gauge', 'Autonomous LiDAR Radar', 'Climate Bar'],
      images: [
        {
          url: '/src/assets/images/service_prototyping_1787881485704.jpg',
          title: 'Widescreen Cockpit Mode',
          caption: 'Glanceable telemetry cards designed for zero-distraction driving.'
        }
      ]
    },
    prototype: {
      title: 'Cockpit Display Simulator',
      description: 'Toggle between Manual Mode and Autonomous Cruise Mode.',
      interactiveTabs: [
        {
          id: 'manual',
          label: 'Manual Driver Dashboard',
          description: 'High-contrast speed, battery telemetry, and navigation route.',
          mockupUrl: '/src/assets/images/flux_ev_cockpit_ui_1787880828618.jpg'
        },
        {
          id: 'autonomous',
          label: 'Autonomous LiDAR View',
          description: 'Real-time 3D point-cloud camera feed of surrounding vehicles.',
          mockupUrl: '/src/assets/images/service_ui_ux_design_1787881454335.jpg'
        }
      ]
    },
    results: [
      { metric: '0.12s', label: 'Glance Readability Time', description: 'Tested fastest glance comprehension among leading EV HMIs.' },
      { metric: '100%', label: 'Driver Safety Pass Rate', description: 'Passed all ISO automotive safety interface benchmarks.' },
      { metric: '4.9/5', label: 'User Satisfaction', description: 'Rated highest in driver comfort and aesthetic satisfaction.' }
    ],
    nextProjectId: 'archive-01',
    nextProjectTitle: 'Archive 01'
  },

  {
    id: 'archive-01',
    title: 'Archive 01',
    tagline: 'Experimental web spatial gallery & generative art museum',
    category: 'Product',
    year: '2026',
    client: 'Foundation for Digital Art',
    services: ['Creative Coding', 'Generative Design', '3D Gallery', 'Web Architecture'],
    heroImage: '/src/assets/images/archive_art_gallery_1787880846677.jpg',
    coverAspect: 'aspect-[16/10]',
    summary: 'Archive 01 is an online gallery dedicated to preserving algorithmic and generative digital art. We created a spatial web museum where visitors navigate through infinite virtual exhibition halls curated by artificial intelligence.',
    challenge: 'Traditional web galleries list artworks in flat image grids, missing the spatial presence and scale of physical art exhibitions.',
    solution: 'We engineered an infinite 3D spatial canvas with ambient acoustic soundscapes, generative lighting algorithms, and high-resolution zooming capabilities for digital artifacts.',
    research: {
      title: 'Digital Art Preservation & Immersion',
      description: 'Worked with museum curators and generative artists to identify optimal digital display standards.',
      keyInsights: [
        'Art appreciation increases significantly when artworks are presented with spatial depth.',
        'Ambient lighting that adapts to artwork colors enhances visual resonance.',
        'High-contrast typography provides clarity without distracting from art pieces.'
      ],
      userPersona: {
        name: 'Amara Sol',
        role: 'Digital Art Curator',
        quote: 'Generative art needs a home that feels as fluid and alive as the code that created it.',
        avatar: '/src/assets/images/team_designer_portrait_1787886436203.jpg'
      }
    },
    wireframes: {
      title: 'Infinite Gallery Layout & Spatial Nodes',
      description: 'Mapping 3D node connections and artwork placement in virtual space.',
      images: [
        {
          url: '/src/assets/images/archive_art_gallery_1787880846677.jpg',
          caption: '3D Spatial Grid & Artwork Inspection Node',
          label: 'Gallery Map'
        }
      ]
    },
    uiExploration: {
      title: 'Generative Canvas',
      description: 'Minimalist monochromatic studio palette with reactive color lighting.',
      colorPalette: [
        { name: 'Museum Ivory', hex: '#F6F5F2' },
        { name: 'Ink Velvet', hex: '#121216' },
        { name: 'Prism Red', hex: '#EF4444' },
        { name: 'Ether White', hex: '#FFFFFF' }
      ],
      typography: 'Syne & Plus Jakarta Sans',
      components: ['3D Hall Navigator', 'Artwork Detail Card', 'Audio Soundscape Toggle', 'Curator Notes'],
      images: [
        {
          url: '/src/assets/images/service_creative_3d_1787881502863.jpg',
          title: 'Spatial Gallery View',
          caption: 'Generative room lighting dynamically reacting to artwork spectrums.'
        }
      ]
    },
    prototype: {
      title: 'Museum Exhibition Stage',
      description: 'Step into the virtual gallery experience.',
      interactiveTabs: [
        {
          id: 'hall',
          label: 'Generative Art Hall',
          description: 'Explore the 3D gallery corridor with interactive artwork nodes.',
          mockupUrl: '/src/assets/images/archive_art_gallery_1787880846677.jpg'
        },
        {
          id: 'artwork',
          label: 'Artwork Inspection',
          description: 'High-definition inspection of algorithmic shaders and code provenance.',
          mockupUrl: '/src/assets/images/design_attention_1787880412477.jpg'
        }
      ]
    },
    results: [
      { metric: '1.2M+', label: 'Virtual Visitors', description: 'Attracted over a million visitors worldwide within 3 months.' },
      { metric: '7.8 min', label: 'Average Dwell Time', description: 'Unprecedented digital museum engagement duration.' },
      { metric: 'Webby', label: 'Award Recipient', description: 'Winner of Webby Award for Best Visual Design & Art Experience.' }
    ],
    nextProjectId: 'aether',
    nextProjectTitle: 'Aether'
  }
];
