export const portfolioData = {
  brand: {
    logoText: "AD",
    siteName: "Aiden Drake",
    statusBadge: "Available for new projects"
  },
  
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ],
  
  hero: {
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", // Premium portrait avatar representation
    title: "I'm Aiden Drake, a product designer & developer building delightful digital experiences.",
    subtext: "Over 8 years of experience designing intuitive interfaces and writing scalable full-stack code. Bridging the gap between beautiful aesthetics and robust engineering.",
    cta: {
      primary: { label: "View Work", href: "#portfolio" },
      secondary: { label: "Contact Me", href: "#contact" }
    }
  },
  
  about: {
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80", // Work desk setup representation
    story: "I start by understanding the core user problem, map out visual workflows, design detailed high-fidelity wireframes, and ultimately implement the final production-ready code. My dual-background in graphic design and software engineering allows me to maintain high visual fidelity from inception to final deployment, avoiding any handoff friction.",
    stats: [
      { value: "8+", label: "Years of Experience" },
      { value: "120+", label: "Projects Completed" },
      { value: "45+", label: "Happy Clients Globally" }
    ]
  },
  
  services: [
    {
      id: "ser-1",
      icon: "Layers",
      title: "UI/UX Product Design",
      desc: "Creating high-fidelity design systems, interactive prototypes, user journey flows, and interface layouts in Figma."
    },
    {
      id: "ser-2",
      icon: "Code",
      title: "Front-End Development",
      desc: "Building clean, responsive, and performance-optimized React and Next.js applications styled with Tailwind CSS."
    },
    {
      id: "ser-3",
      icon: "Cpu",
      title: "Full-Stack Integrations",
      desc: "Designing secure REST APIs, structuring PostgreSQL/NoSQL databases, and managing serverless deployments."
    },
    {
      id: "ser-4",
      icon: "Sparkles",
      title: "Motion & Interactions",
      desc: "Bringing layouts to life with smooth scroll triggers, complex interactive micro-animations, and page transitions."
    }
  ],
  
  skills: [
    {
      category: "Design & Creative",
      items: [
        { name: "Figma & Design Systems", level: 95 },
        { name: "Wireframing & Prototyping", level: 90 },
        { name: "Brand & Identity Design", level: 80 }
      ]
    },
    {
      category: "Frontend Engineering",
      items: [
        { name: "React / React Native", level: 92 },
        { name: "Tailwind CSS & CSS Grid", level: 96 },
        { name: "Next.js & Server Components", level: 88 }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js & Express", level: 85 },
        { name: "REST APIs & GraphQL", level: 90 },
        { name: "PostgreSQL & MongoDB", level: 82 }
      ]
    }
  ],
  
  experience: [
    {
      id: "exp-1",
      company: "Vortex Labs",
      role: "Lead Product Designer",
      dates: "2033 - Present",
      description: "Directing UI/UX design and lead front-end architecture for client SaaS dashboards. Established a Tailwind-based design library reducing development time by 30%."
    },
    {
      id: "exp-2",
      company: "Apex Infotech",
      role: "Senior Full-Stack Developer",
      dates: "2030 - 2033",
      description: "Developed cloud-native solutions using React, Express, and AWS. Refactored database structures to handle 200,000+ daily active users smoothly."
    },
    {
      id: "exp-3",
      company: "Pixel Agency",
      role: "UI Engineer",
      dates: "2027 - 2030",
      description: "Translated rich high-fidelity mockups into modular React interfaces. Pioneered interactions and responsive layouts across dozens of client landing pages."
    }
  ],
  
  projects: [
    {
      id: "proj-1",
      title: "Holograph Trade Console",
      category: "Design",
      tag: "design",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "A dark holographic trading dashboard for real-time crypto assets and parametric market flows. Designed completely with glowing futuristic glassmorphism panels.",
      specs: {
        role: "Lead Designer",
        tools: "Figma, Adobe Illustrator",
        year: "2034"
      }
    },
    {
      id: "proj-2",
      title: "Solitude Space App",
      category: "Web App",
      tag: "app",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
      description: "A responsive React web app for smart home ecosystem automation. Integrated with Three.js orbit controllers to showcase device telemetries dynamically in 3D.",
      specs: {
        role: "Full-Stack Developer",
        stack: "React, Node.js, Three.js",
        year: "2035"
      }
    },
    {
      id: "proj-3",
      title: "Ecotone Mobile Shell",
      category: "Mobile",
      tag: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "A React Native app built to facilitate neighborhood green market trade. Uses geofencing trackers and dynamic interactive maps to pair local urban farmers with consumers.",
      specs: {
        role: "Lead Developer",
        stack: "React Native, Mapbox, Tailwind",
        year: "2033"
      }
    },
    {
      id: "proj-4",
      title: "Apex Analytics Center",
      category: "Web App",
      tag: "app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive SaaS data analytics platform, rendering high-density charts, cohort maps, and automated data pipelines for marketing agencies.",
      specs: {
        role: "UI Engineer",
        stack: "Next.js, D3.js, Tailwind v4",
        year: "2032"
      }
    }
  ],
  
  contact: {
    email: "aiden@drake.studio",
    location: "San Francisco, California",
    socials: [
      { name: "GitHub", icon: "Github", url: "https://github.com" },
      { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
      { name: "Twitter", icon: "Twitter", url: "https://twitter.com" }
    ]
  }
};
export const projectFilters = ["All", "Design", "Web App", "Mobile"];
export const filterMapping = {
  "All": "all",
  "Design": "design",
  "Web App": "app",
  "Mobile": "mobile"
};
