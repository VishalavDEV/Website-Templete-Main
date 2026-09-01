export const businessData = {
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    themeClass: 'font-corporate',
    accentStyle: 'border-brand-accent/30 text-brand-accent',
    logoText: 'VERTEX',
    hero: {
      eyebrow: 'BUSINESS • STRATEGY • TRUST',
      headline: 'Grow With Confidence',
      subheadingPrefix: 'Providing ',
      subheadingHighlight: 'executive',
      subheadingSuffix: ' guidance for modern corporate leadership.',
      paragraph: 'We partner with enterprise organizations to structure long-term growth strategies, optimize operations, and deliver sustainable value to shareholders.',
      cta1: 'EXPLORE SERVICES',
      cta2: 'VIEW OUR WORK',
      images: {
        image1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Glass Office Architecture
        image2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', // Board meeting presentation
        image3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'  // Office corridor/hall
      }
    },
    about: {
      label: 'WHO WE ARE',
      title: 'Creating Trust and Value Through Decades of Leadership.',
      paragraph1: 'Vertex is a premier global advisory firm. We help enterprise boards and executive teams solve complex corporate challenges, execute mergers, and manage institutional risk.',
      paragraph2: 'With offices in key financial hubs, we combine macro market analytics with deep sector experience to formulate actionable growth roadmaps.',
      cta: 'LEARN ABOUT OUR PRINCIPLES'
    },
    services: [
      {
        number: '01',
        icon: 'Briefcase',
        name: 'Corporate Strategy',
        desc: 'Custom corporate frameworks designed to maximize market share, streamline operations, and secure long-term revenue streams.'
      },
      {
        number: '02',
        icon: 'Scale',
        name: 'Risk Advisory & Governance',
        desc: 'Comprehensive compliance audit services, financial risk modelling, and sound governance designs for institutional boards.'
      },
      {
        number: '03',
        icon: 'Coins',
        name: 'Mergers & Acquisitions',
        desc: 'End-to-end deal structure, financial due diligence, synergy modeling, and post-merger integration planning.'
      },
      {
        number: '04',
        icon: 'TrendingUp',
        name: 'Capital Restructuring',
        desc: 'Optimizing balance sheets, refinancing structures, and advising on equity and debt issuance frameworks.'
      }
    ],
    stats: [
      { number: 25, prefix: '', suffix: '+', label: 'Years of Strategy' },
      { number: 180, prefix: '$', suffix: 'B+', label: 'Transaction Value' },
      { number: 45, prefix: '', suffix: '%', label: 'Average Growth Rate' },
      { number: 94, prefix: '', suffix: '%', label: 'Client Retention' }
    ],
    portfolio: [
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        category: 'FINANCIAL SERVICES',
        title: 'Capital Restructuring for Bancorp',
        desc: 'How we rebuilt the debt framework for a tier-1 retail bank, saving $120M in annualized interest costs.',
        link: '#/case-study-bancorp'
      },
      {
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        category: 'HEALTHCARE ENTERPRISE',
        title: 'Global Health Network M&A Integration',
        desc: 'A seamless consolidation of two major regional health providers, aligning operations and compliance.',
        link: '#/case-study-health'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        category: 'RETAIL LOGISTICS',
        title: 'Global Supply Chain Alignment',
        desc: 'Redesigning supply chains to bypass global bottlenecks, reducing delivery lead times by 24%.',
        link: '#/case-study-retail'
      }
    ],
    whyChooseUs: [
      {
        number: '01',
        title: 'Strategic Preeminence',
        desc: 'Our methodologies have been validated in over 40 global markets across two decades of economic changes.'
      },
      {
        number: '02',
        title: 'Elite Executive Bench',
        desc: 'All projects are personally guided by former C-suite leaders who understand the pressure of scale.'
      },
      {
        number: '03',
        title: 'Data-Driven Due Diligence',
        desc: 'No intuition-only choices. We back every proposal with exhaustive data analysis and market simulations.'
      },
      {
        number: '04',
        title: 'Uncompromising Integrity',
        desc: 'We prioritize confidential security, long-term trust, and clear alignment with your board goals.'
      }
    ],
    testimonials: [
      {
        quote: "Vertex redefined how we approached our expansion into Asia. Their structured M&A guidance was both rigorous and practical.",
        name: "Eleanor Vance",
        role: "Chief Financial Officer",
        company: "Omnicorp Logistics",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        quote: "Their risk advisory assessment saved us from a costly structural misalignment. I highly recommend their executive consulting.",
        name: "David K. Vance",
        role: "Chairman of the Board",
        company: "Apex Industries",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    ctaSection: {
      title: 'Ready to Secure Your Market Preeminence?',
      text: "Partner with Vertex to align your corporate governance, structure major deals, and build lasting market capital.",
      cta1: 'SCHEDULE BOARD INQUIRY',
      cta2: 'CONTACT PARTNERS'
    }
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    themeClass: 'font-tech',
    accentStyle: 'border-brand-accent text-brand-accent/90 bg-brand-accent/5',
    logoText: 'NEXUS.IO',
    hero: {
      eyebrow: 'INTELLIGENCE • DIGITAL • SCALE',
      headline: 'Build What Matters',
      subheadingPrefix: 'Developing ',
      subheadingHighlight: 'scalable',
      subheadingSuffix: ' systems for high-performance software engineering.',
      paragraph: 'We design and construct digital products, high-throughput APIs, cloud infrastructure, and AI engines that power modern digital economies.',
      cta1: 'EXPLORE SERVICES',
      cta2: 'VIEW INFRASTRUCTURE'
    },
    images: {
      image1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // Digital Circuitry
      image2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', // Code on monitors
      image3: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'  // Data network
    },
    about: {
      label: 'WHO WE ARE',
      title: 'Engineering the Next Generation of Digital Infrastructure.',
      paragraph1: 'Nexus.io is a technology studio comprised of engineers, system architects, and data scientists. We build mission-critical digital systems.',
      paragraph2: 'We replace outdated tech stacks with robust microservice networks, serverless clouds, and predictive machine learning architectures.',
      cta: 'CHECK TECH STACK'
    },
    services: [
      {
        number: '01',
        icon: 'Cpu',
        name: 'AI & Machine Learning',
        desc: 'Integration of custom Large Language Models, classification engines, and predictive pipelines directly into active software suites.'
      },
      {
        number: '02',
        icon: 'Cloud',
        name: 'Cloud Infrastructure',
        desc: 'Zero-downtime migrations, Kubernetes orchestration, infrastructure-as-code configuration, and multi-region failover systems.'
      },
      {
        number: '03',
        icon: 'Code2',
        name: 'Custom Product Development',
        desc: 'High-performance React/Node.js products, GraphQL schemas, database schema tuning, and performant web sockets.'
      },
      {
        number: '04',
        icon: 'ShieldAlert',
        name: 'Cybersecurity & Auditing',
        desc: 'Penetration testing, source code safety audits, threat modeling, and implementation of strict end-to-end encryption protocols.'
      }
    ],
    stats: [
      { number: 120, prefix: '', suffix: '+', label: 'Deployments/Day' },
      { number: 99.99, prefix: '', suffix: '%', label: 'SLA Uptime Guaranteed' },
      { number: 12, prefix: '', suffix: 'ms', label: 'Average API Latency' },
      { number: 50, prefix: '', suffix: 'M+', label: 'Concurrent Users Supported' }
    ],
    portfolio: [
      {
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
        category: 'ARTIFICIAL INTELLIGENCE',
        title: 'Natural Language Processing Engine',
        desc: 'Building a proprietary LLM fine-tuning cluster to automate customer compliance reporting for insurance databases.',
        link: '#/case-study-nlp'
      },
      {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        category: 'CLOUD ARCHITECTURE',
        title: 'Multi-Region Kubernetes Migration',
        desc: 'Scaling a global SaaS API to process 100,000 requests/sec with active-active regional load balancing and auto-scaling.',
        link: '#/case-study-k8s'
      },
      {
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        category: 'FINTECH SYSTEMS',
        title: 'Cryptographic Transaction Ledger',
        desc: 'Deploying a high-speed, secure audit trail database processing high-frequency micropayments under 8 milliseconds.',
        link: '#/case-study-finledger'
      }
    ],
    whyChooseUs: [
      {
        number: '01',
        title: 'Zero Technical Debt',
        desc: 'We write fully tested, typed, modular code. Our systems are engineered to scale without requiring constant rewrites.'
      },
      {
        number: '02',
        title: 'Infrastructure as Code',
        desc: 'Everything we spin up is version-controlled via Terraform. If it fails, recovery is instant and deterministic.'
      },
      {
        number: '03',
        title: 'Advanced Performance Focus',
        desc: 'We optimize every millisecond. We audit query plans, network hops, bundle sizes, and visual paint speeds.'
      },
      {
        number: '04',
        title: 'Continuous Security',
        desc: 'Security is not an afterthought. We build SOC2 compliance standards directly into your CI/CD pipelines.'
      }
    ],
    testimonials: [
      {
        quote: "Nexus.io reorganized our cloud setup in under three weeks. Our API latencies dropped by 65%, and hosting costs were cut in half.",
        name: "Aris Thorne",
        role: "VP of Engineering",
        company: "SentryData Inc",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        quote: "Their machine learning integrations enabled our platform to predict customer churn with 91% accuracy.",
        name: "Lia Sterling",
        role: "Chief Product Officer",
        company: "AuraHQ",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    ctaSection: {
      title: 'Ready to Scale Your Digital Infrastructure?',
      text: "Join hands with our technical architects to audit your current system, model growth spikes, and build production software.",
      cta1: 'START SYSTEMS INVENTORY',
      cta2: 'TALK TO AN ENGINEER'
    }
  },
  creative: {
    id: 'creative',
    name: 'Creative Agency',
    themeClass: 'font-creative',
    accentStyle: 'bg-brand-accent text-white hover:bg-black uppercase text-xs tracking-widest px-4 py-2 border-none',
    logoText: 'KINETIC',
    hero: {
      eyebrow: 'BRANDING • EDITORIAL • DIRECTION',
      headline: 'Turning Ideas Into Impact',
      subheadingPrefix: 'Creating ',
      subheadingHighlight: 'unforgettable',
      subheadingSuffix: ' visual identities for progressive brands.',
      paragraph: 'We reject generic grids. We construct bespoke visual identities, editorial layouts, motion assets, and interactive web environments for industry leaders.',
      cta1: 'EXPLORE BRAND LABS',
      cta2: 'WATCH REEL'
    },
    images: {
      image1: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', // Whiteboard design ideas
      image2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Creative designers chatting
      image3: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80'  // Colorful prints and swatch
    },
    about: {
      label: 'WHO WE ARE',
      title: 'We Design for the Culturally Relevant Brands.',
      paragraph1: 'Kinetic is an independent creative collective. We build digital-first identities that capture attention, inspire engagement, and reshape industries.',
      paragraph2: 'We operate at the intersection of high fashion, editorial print design, digital interaction, and cultural storytelling.',
      cta: 'ENTER THE ARCHIVES'
    },
    services: [
      {
        number: '01',
        icon: 'Palette',
        name: 'Brand Identity Systems',
        desc: 'Comprehensive visual marks, responsive logos, color systems, typography pairs, and modular design guidelines.'
      },
      {
        number: '02',
        icon: 'PenTool',
        name: 'Editorial & Motion Design',
        desc: 'High-end corporate publications, premium package designs, 3D typography, and custom motion graphics.'
      },
      {
        number: '03',
        icon: 'Tv',
        name: 'Interactive Web Art',
        desc: 'Immersive layouts, Framer Motion choreography, micro-interactions, WebGL integrations, and bespoke page structures.'
      },
      {
        number: '04',
        icon: 'Megaphone',
        name: 'Campaign Strategy',
        desc: 'Social content narratives, art direction, photography asset generation, and cultural influence setups.'
      }
    ],
    stats: [
      { number: 45, prefix: '', suffix: '', label: 'Design Awards won' },
      { number: 12, prefix: '', suffix: 'M+', label: 'Organic Video Views' },
      { number: 4, prefix: '', suffix: 'X', label: 'Average Client Share Increase' },
      { number: 100, prefix: '', suffix: '%', label: 'Bespoke Production' }
    ],
    portfolio: [
      {
        image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
        category: 'BRAND SYSTEM',
        title: 'Metropolitan Art Center Identity',
        desc: 'A bold, neon-tinted design system combining geometric shapes and dynamic typography grids.',
        link: '#/case-study-metart'
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80',
        category: 'DIGITAL CAMPAIGN',
        title: 'Interactive Launch for Helio',
        desc: 'An immersive landing page telling the story of solar energy cells through scrolling 3D models.',
        link: '#/case-study-helio'
      },
      {
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        category: 'EDITORIAL PACKAGING',
        title: 'Sartorial Fragrances Branding',
        desc: 'Minimalist glass bottle packaging combined with a tactile, heavy-stock paper box design.',
        link: '#/case-study-sartorial'
      }
    ],
    whyChooseUs: [
      {
        number: '01',
        title: 'Editorial Visuals Only',
        desc: 'We say no to template sites. Your brand will receive a custom aesthetic that commands a premium market position.'
      },
      {
        number: '02',
        title: 'Artistic Fluidity',
        desc: 'Our interactive designs use micro-animations and spatial depth to create a lasting digital memory.'
      },
      {
        number: '03',
        title: 'Integrated Art Direction',
        desc: 'We handle the photo shoot, compile the typography, direct the videos, and code the website. Zero handoff gaps.'
      },
      {
        number: '04',
        title: 'Cultural Innovation',
        desc: 'We design for where culture is heading next, ensuring your brand stays relevant for years to come.'
      }
    ],
    testimonials: [
      {
        quote: "Kinetic transformed our brand from a generic tech application into a cultural movement. Their design thinking is incredible.",
        name: "Chloe Mercer",
        role: "Creative Director",
        company: "Vesper Co",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        quote: "The interactive campaign generated record clicks and secured our product launch's spot in top design publications.",
        name: "Julian Cross",
        role: "Chief Marketing Officer",
        company: "Helio Cells",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    ctaSection: {
      title: 'Ready to Break the Pattern?',
      text: "Stop blending in with standard grids. Reach out to Kinetic to develop high-end brand assets and experiences.",
      cta1: 'START THE BRIEF',
      cta2: 'DISCOVER PROJECTS'
    }
  },
  consulting: {
    id: 'consulting',
    name: 'Consulting',
    themeClass: 'font-consulting',
    accentStyle: 'border-b-2 border-brand-accent text-brand-text font-bold pb-1 bg-transparent border-t-0 border-l-0 border-r-0',
    logoText: 'STRATA',
    hero: {
      eyebrow: 'ANALYTICS • MANAGEMENT • ADVISORY',
      headline: 'Business Meets Innovation',
      subheadingPrefix: 'Guiding ',
      subheadingHighlight: 'strategic',
      subheadingSuffix: ' transformation for modern high-growth markets.',
      paragraph: 'We merge business consulting methodologies with digital platforms to optimize structures, unlock revenue pipelines, and manage transitions.',
      cta1: 'EXPLORE CASE STUDIES',
      cta2: 'VIEW ADVISORY TEAM'
    },
    images: {
      image1: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', // Financial data sheet
      image2: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', // Advisory table discussion
      image3: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80'  // Office window workspace
    },
    about: {
      label: 'WHO WE ARE',
      title: 'Turning Complex Business Friction Into Market Freedom.',
      paragraph1: 'Strata is a management consulting group. We specialize in operational turnarounds, revenue model changes, and digital readiness checks.',
      paragraph2: 'We serve mid-market leaders and private equity portfolios, providing the clarity required to expand EBITDA margins and automate internal workflows.',
      cta: 'ACCESS MARKET ANALYTICS'
    },
    services: [
      {
        number: '01',
        icon: 'BarChart3',
        name: 'Operational Excellence',
        desc: 'Analyzing workflows, identifying core redundancies, and introducing modern project automation systems.'
      },
      {
        number: '02',
        icon: 'TrendingUp',
        name: 'Revenue Performance Planning',
        desc: 'Optimizing product price models, reforming sales cycles, and installing scientific customer metrics.'
      },
      {
        number: '03',
        icon: 'Lightbulb',
        name: 'Change Management Advisory',
        desc: 'Safely guiding teams through major corporate pivots, structural changes, and technology migrations.'
      },
      {
        number: '04',
        icon: 'Network',
        name: 'Supply Chain Integration',
        desc: 'Structuring suppliers, optimizing fulfillment routes, and installing modern supplier software stacks.'
      }
    ],
    stats: [
      { number: 450, prefix: '', suffix: '+', label: 'Consulting Mandates' },
      { number: 3.2, prefix: '', suffix: 'X', label: 'Average EBITDA Uplift' },
      { number: 18, prefix: '', suffix: 'Mos', label: 'Average Payback Window' },
      { number: 98, prefix: '', suffix: '%', label: 'Strategy Adoption Rate' }
    ],
    portfolio: [
      {
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
        category: 'REVENUE TURNAROUND',
        title: 'Price Optimization for TechCorp',
        desc: 'Implementing value-based SaaS pricing tiers, increasing net revenue retention by 32% in nine months.',
        link: '#/case-study-pricing'
      },
      {
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        category: 'OPERATIONAL EFFICIENCY',
        title: 'Automating Strata-Mfg Workflows',
        desc: 'How replacing manual manufacturing tracking with IoT databases reduced inventory cycles by 18 days.',
        link: '#/case-study-mfg'
      },
      {
        image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80',
        category: 'GLOBAL EXPANSION',
        title: 'Expanding European Logistics Hub',
        desc: 'Designing regulatory compliance and routing networks to launch cross-border retail deliveries.',
        link: '#/case-study-logistics'
      }
    ],
    whyChooseUs: [
      {
        number: '01',
        title: 'Structured EBITDA Focus',
        desc: 'We do not sell abstract theories. We build models focused directly on expanding margin percentages and enterprise value.'
      },
      {
        number: '02',
        title: 'Hands-On Advisory',
        desc: 'We do not just leave a presentation deck. We work alongside your business leaders during the implementation phase.'
      },
      {
        number: '03',
        title: 'Sovereign Industry Focus',
        desc: 'Our consultants have spent decades managing real facilities, software projects, and supply networks.'
      },
      {
        number: '04',
        title: 'Milestone-Based Fees',
        desc: 'We align our incentives with yours by locking a portion of our billing directly to realized cost cuts.'
      }
    ],
    testimonials: [
      {
        quote: "Strata's hands-on approach was key in automating our warehouse logs. Our operations became significantly more predictable.",
        name: "Marcus Vance",
        role: "President of Operations",
        company: "Forge Industries",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        quote: "Their SaaS restructuring expanded our EBITDA metrics beyond our primary three-year target in under 12 months.",
        name: "Nora Brooks",
        role: "Principal Director",
        company: "Banyan Capital",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    ctaSection: {
      title: 'Let’s Turn Operational Friction Into Profit.',
      text: "Reach out to schedule a preliminary operations audit and map core cost savings with our senior advisory team.",
      cta1: 'BOOK SYSTEMS AUDIT',
      cta2: 'CONNECT ON SERVICES'
    }
  },
  startup: {
    id: 'startup',
    name: 'Startup Studio',
    themeClass: 'font-startup',
    accentStyle: 'rounded-full border border-brand-accent/40 px-6 py-2 text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 font-medium text-sm',
    logoText: 'PULSE',
    hero: {
      eyebrow: 'IDEAS • VELOCITY • FUTURE',
      headline: 'Move Your Business Forward',
      subheadingPrefix: 'Empowering ',
      subheadingHighlight: 'dynamic',
      subheadingSuffix: ' teams to launch digital products faster.',
      paragraph: 'We run a venture building framework designed to scale startup concepts into market-disrupting platforms in weeks, not years.',
      cta1: 'LAUNCH WITH US',
      cta2: 'READ DECK'
    },
    images: {
      image1: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80', // Energetic team presentation
      image2: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80', // Collab discussion over table
      image3: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'  // Open office space with greenery
    },
    about: {
      label: 'WHO WE ARE',
      title: 'Building Companies with Speed, Velocity, and Design.',
      paragraph1: 'Pulse is an entrepreneurial venture engine. We co-build software startups alongside founders, providing design, engineering, and seed funding.',
      paragraph2: 'We bypass early seed stage issues by deploying immediate, elite engineering squads that create functional MVPs on day one.',
      cta: 'APPLY FOR CO-BUILDING'
    },
    services: [
      {
        number: '01',
        icon: 'Rocket',
        name: 'Rapid Prototyping & MVP',
        desc: 'Turning concepts into interactive, production-ready React apps within a 30-day development sprint.'
      },
      {
        number: '02',
        icon: 'Layers',
        name: 'Product Design (UX/UI)',
        desc: 'Interactive software wireframes, high-end styling systems, asset libraries, and scalable components.'
      },
      {
        number: '03',
        icon: 'Users',
        name: 'Venture Capital Networks',
        desc: 'Direct introductions to tier-1 seed funds, pitch presentation deck design, and market validation reports.'
      },
      {
        number: '04',
        icon: 'Globe',
        name: 'Growth & Go-To-Market',
        desc: 'Deploying organic viral cycles, product positioning frameworks, and targeted performance campaigns.'
      }
    ],
    stats: [
      { number: 18, prefix: '', suffix: ' Ventures', label: 'Launched Since 2023' },
      { number: 85, prefix: '', suffix: 'M+', label: 'Total Capital Raised' },
      { number: 90, prefix: '', suffix: '%', label: 'Survival Rate Year 2' },
      { number: 4.8, prefix: '', suffix: 'X', label: 'Average Valuation Markup' }
    ],
    portfolio: [
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        category: 'VENTURE PORTFOLIO',
        title: 'Apex CRM System Release',
        desc: 'An automated customer pipeline tool built for high-scale enterprise field sales reps.',
        link: '#/portfolio-apex'
      },
      {
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        category: 'MOBILE APP DEVELOPMENT',
        title: 'Solas Micro-Investing Platform',
        desc: 'A consumer finance application enabling users to invest spare coins directly into solar portfolios.',
        link: '#/portfolio-solas'
      },
      {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        category: 'VENTURE CO-BUILD',
        title: 'Collab Workspace Suite',
        desc: 'A real-time workspace collaboration tool with spatial audio channels and whiteboards.',
        link: '#/portfolio-collab'
      }
    ],
    whyChooseUs: [
      {
        number: '01',
        title: 'Velocity as a Signature',
        desc: 'We do not sit in long planning sessions. We write production-ready code, launch early, and iterate based on real feedback.'
      },
      {
        number: '02',
        title: 'Founder-Aligned Seed Terms',
        desc: 'We do not take control of your company. We offer transparent co-building agreements that reward active founders.'
      },
      {
        number: '03',
        title: 'Pre-Assembled Product Squads',
        desc: 'Gain instant access to senior developers, growth hackers, and interface designers on demand.'
      },
      {
        number: '04',
        title: 'Structured Validation',
        desc: 'We validate concepts using cold outreach and waitlists before writing a single line of backend logic.'
      }
    ],
    testimonials: [
      {
        quote: "Pulse co-built our MVP in four weeks. Their VC contacts got us in front of major seed funds, raising $3.5M within months.",
        name: "Sylvia Cole",
        role: "Co-Founder & CEO",
        company: "Solas App",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        quote: "Their rapid engineering squad is the best in the industry. It was like having a pre-built senior dev team on day one.",
        name: "Ethan Vance",
        role: "Tech Founder",
        company: "CollabHQ",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    ctaSection: {
      title: 'Have a Concept Ready to Dominate the Market?',
      text: "Apply to our autumn co-building program. Let's align on design, write code, and scale your product together.",
      cta1: 'APPLY TO STUDIO',
      cta2: 'VIEW VENTURES'
    }
  }
};
