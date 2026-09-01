export const portfolioData = {
  brand: {
    siteName: "Evelyn Vance",
    logoText: "EV",
    email: "evelyn@vance.design",
    phone: "+44 20 7946 0882",
    location: "London, UK",
    availability: "Available for design strategy"
  },
  
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { 
      label: "Submenu", 
      path: "#",
      dropdown: [
        { label: "Pricing Plan", path: "/pricing" },
        { label: "Creative Team", path: "/team" }
      ]
    },
    { label: "Contact", path: "/contact" }
  ],
  
  socials: [
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com" },
    { name: "GitHub", icon: "Github", url: "https://github.com" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" }
  ],
  
  hero: {
    tagline: "Building cohesive visual ecosystems and full-stack software products.",
    intro: "Hello, I'm Evelyn Vance, a Visual Architect based in London. I design beautiful grid systems, outline outline components, and write structural full-stack React code.",
    backgroundPortrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85", // Large hero portrait
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  
  about: {
    eyebrow: "ABOUT ME",
    heading: "Transforming Ideas into Digital Reality",
    narrative1: "I establish unified design systems that ease handoff friction between engineering and product. My design methodology emphasizes high-contrast dark visual components, custom outline cards, and elegant serif typography.",
    narrative2: "With a dual degree in fine arts and computer science, I balance graphic principles (symmetry, margins, scale) with robust, maintainable React coding. I partner with tech companies to define their UI frameworks from the ground up.",
    stats: [
      { value: "11+", label: "Years of Experience" },
      { value: "140+", label: "Projects Completed" },
      { value: "50+", label: "Happy Clients Globally" }
    ]
  },
  
  resume: {
    experience: [
      {
        company: "Monolith Solutions",
        role: "Lead Interface Architect",
        dates: "2032 - Present",
        description: "Directing the visual UI framework and design patterns library. Reduced CSS bundle size by 40% using custom Tailwind components."
      },
      {
        company: "Vanguard Tech",
        role: "Senior Full-Stack Engineer",
        dates: "2029 - 2032",
        description: "Developed and maintained responsive dashboards with React, Next.js, and Node.js. Integrated D3 analytics tools."
      },
      {
        company: "Helix Studio",
        role: "UI Engineer",
        dates: "2026 - 2029",
        description: "Created interactive campaign platforms and static landing pages using smooth scroll-triggered transitions."
      }
    ],
    education: [
      {
        institution: "Imperial College London",
        degree: "M.S. in Computer Science",
        dates: "2024 - 2026",
        description: "Specialized in Human-Computer Interaction models and user experience research patterns."
      },
      {
        institution: "University of the Arts London",
        degree: "B.A. in Graphic Communication",
        dates: "2021 - 2024",
        description: "Studied grid structures, editorial layout designs, and typography scale principles."
      }
    ],
    skills: [
      { name: "UI System Architecture", level: 95 },
      { name: "React & Next.js Development", level: 90 },
      { name: "Tailwind CSS & Layouts", level: 96 },
      { name: "Node.js & API Integrations", level: 85 }
    ]
  },
  
  services: [
    {
      icon: "Layers",
      title: "Visual Art Direction",
      desc: "Creating distinct visual systems, layout alignments, typography grids, and product mockups."
    },
    {
      icon: "Code",
      title: "Front-End Engineering",
      desc: "Developing performant, semantic, and fully responsive React layouts styled with Tailwind CSS."
    },
    {
      icon: "Cpu",
      title: "Full-Stack Development",
      desc: "Integrating relational databases, designing REST endpoints, and coordinating secure server configurations."
    }
  ],
  
  projects: [
    {
      id: "proj-1",
      title: "Cerebral Analytics Suite",
      category: "Product",
      tag: "product",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive SaaS data analytics workspace, showing live streaming charts and system telemetries in high-contrast panels.",
      specs: {
        role: "Lead UI Developer",
        stack: "React, D3.js, Tailwind",
        year: "2035"
      }
    },
    {
      id: "proj-2",
      title: "Nordic Design Catalog",
      category: "Branding",
      tag: "branding",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "Rebranding and catalog layout for a modern furniture collective. Highlights pure geometric shapes and high contrast accents.",
      specs: {
        role: "Visual Designer",
        client: "Nordic Collective",
        year: "2034"
      }
    },
    {
      id: "proj-3",
      title: "Vesper Mobile app",
      category: "Mobile",
      tag: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "A React Native app built to organize smart apartment ecosystems. Employs circular slider components and outline cards.",
      specs: {
        role: "Lead Engineer",
        stack: "React Native, Tailwind",
        year: "2033"
      }
    }
  ],
  
  pricing: [
    {
      name: "Strategy Consult",
      price: "$299",
      period: "per session",
      desc: "One-on-one architecture check, layout code review, and structural strategy map.",
      features: [
        "2-hour screen session",
        "Code base review",
        "Spacing system inspection",
        "Design handoff checklist"
      ]
    },
    {
      name: "Product Design Block",
      price: "$3,499",
      period: "per month",
      desc: "Retained front-end design and coding support. Translating mockups into production-ready React views.",
      features: [
        "15 hours per week",
        "Slack/Discord channel sync",
        "Daily code commits",
        "Tailwind system creation"
      ]
    }
  ],
  
  team: [
    {
      name: "Clara Oswald",
      role: "Lead UX Researcher",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sasha Grey",
      role: "Brand Director",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    }
  ]
};

export const projectFilters = ["All", "Product", "Branding", "Mobile"];
export const filterMapping = {
  "All": "all",
  "Product": "product",
  "Branding": "branding",
  "Mobile": "mobile"
};
export const SOCIAL_FA_MAP = {
  Facebook: "fa-brands fa-facebook-f",
  Twitter: "fa-brands fa-twitter",
  Instagram: "fa-brands fa-instagram",
  GitHub: "fa-brands fa-github",
  LinkedIn: "fa-brands fa-linkedin-in"
};
