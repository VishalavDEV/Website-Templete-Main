export const edtechData = {
  brand: {
    name: "AURALEARN",
    logoText: "AuraLearn",
    tagline: "Learn Beyond Limits"
  },
  
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Learning Paths", path: "/paths" },
    { label: "Instructors", path: "/instructors" },
    { label: "About Us", path: "/about" }
  ],

  hero: {
    eyebrow: "NEXT-GEN EDTECH PLATFORM",
    title: "Learn Beyond Limits.",
    supportingText: "Turn curiosity into skills with interactive courses, expert mentors, and a learning experience designed around you.",
    centerpieceText: "AURA",
    centerpieceSub: "INTELLIGENT LEARNING ENGINE"
  },

  stats: [
    { label: "Active Students", value: 52000, suffix: "+" },
    { label: "Interactive Courses", value: 580, suffix: "+" },
    { label: "Expert Mentors", value: 160, suffix: "+" },
    { label: "Satisfaction Rate", value: 95, suffix: "%" }
  ],

  roadmap: {
    title: "Your Learning Journey",
    subtitle: "A structured, non-linear roadmap designed to guide you from basic curiosity to professional mastery.",
    steps: [
      { id: "explore", label: "Explore", desc: "Scan diverse categories, attend live intro workshops, and identify your creative curiosity.", icon: "Compass" },
      { id: "learn", label: "Learn", desc: "Access bite-sized modular videos, structured notes, and live mentor checkpoints.", icon: "BookOpen" },
      { id: "practice", label: "Practice", desc: "Solve interactive browser-based code sandboxes and design challenges.", icon: "Cpu" },
      { id: "build", label: "Build", desc: "Construct fully functional capstone projects to showcase in your portfolio.", icon: "Layout" },
      { id: "master", label: "Master", desc: "Earn blockchain-verified certificates, join elite communities, and unlock job referrals.", icon: "Award" }
    ]
  },

  categories: ["All", "Development", "Design", "Business", "Data Science", "AI", "Marketing"],

  courses: [
    {
      id: "dev-react-19",
      title: "React 19 & Next.js: Futuristic Frontend Engines",
      category: "Development",
      instructor: "Marcus Vance",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 4.9,
      students: 12400,
      price: 99,
      progress: 68,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "ai-prompt-eng",
      title: "Generative AI & Agentic Orchestration Systems",
      category: "AI",
      instructor: "Dr. Evelyn Oswald",
      instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 4.8,
      students: 9800,
      price: 120,
      progress: 42,
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "design-glass",
      title: "Futuristic Glassmorphism & UI Design Systems",
      category: "Design",
      instructor: "Sasha Grey",
      instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 4.9,
      students: 8400,
      price: 85,
      progress: 90,
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "data-python-ml",
      title: "Python Data Analysis & Predictive Statistics",
      category: "Data Science",
      instructor: "Alan Turing Jr.",
      instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 4.7,
      students: 11500,
      price: 110,
      progress: 15,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: "bus-saas-scaling",
      title: "Scaling SaaS Startups: Zero to $10M ARR",
      category: "Business",
      instructor: "Evelyn Vance",
      instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 4.9,
      students: 7600,
      price: 140,
      progress: 80,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: "mkt-neuro-brand",
      title: "Neuromarketing & Behavioral Growth Hacking",
      category: "Marketing",
      instructor: "Marcus Vance",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 4.6,
      students: 5400,
      price: 79,
      progress: 0,
      thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ],

  features: [
    {
      title: "Learn Anywhere",
      desc: "Our high-speed client compiles layouts on offline grids, mobile viewports, or low-bandwidth connections seamlessly.",
      icon: "Smartphone"
    },
    {
      title: "Expert Mentors",
      desc: "1-on-1 performance reviews, direct sandbox commentary, and weekly Q&A calls with top tech leads.",
      icon: "Users"
    },
    {
      title: "Hands-on Projects",
      desc: "Skip passive video watching. Compile code, configure cloud databases, and deploy assets inside our live sandbox.",
      icon: "Code"
    },
    {
      title: "Verified Credentials",
      desc: "Earn tamper-proof blockchain-secured certificates ready to embed on LinkedIn profiles and portals.",
      icon: "Award"
    },
    {
      title: "Personalized Trackers",
      desc: "Our AI analysis engines map your speed constraints and suggest modular reviews dynamically.",
      icon: "TrendingUp"
    },
    {
      title: "Guild Support",
      desc: "Join active Discord circles, hackathon study bands, and collaborate on shared repositories.",
      icon: "MessageSquare"
    }
  ],

  instructors: [
    {
      name: "Dr. Evelyn Oswald",
      role: "AI Department Lead",
      coursesCount: 8,
      rating: 4.9,
      studentsCount: "24K+",
      bio: "Ex-Google Brain researcher specializing in large language frameworks and neural transformers.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
      socials: ["LinkedIn", "GitHub", "Twitter"]
    },
    {
      name: "Marcus Vance",
      role: "Lead Systems Architect",
      coursesCount: 12,
      rating: 4.8,
      studentsCount: "42K+",
      bio: "Core contributor to React frameworks and expert developer with 15+ years of production experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      socials: ["LinkedIn", "GitHub", "Website"]
    },
    {
      name: "Sasha Grey",
      role: "Director of Interactive Design",
      coursesCount: 6,
      rating: 4.9,
      studentsCount: "18K+",
      bio: "Award-winning creative director crafting glassmorphism concepts, advanced shaders, and web dynamics.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
      socials: ["Dribbble", "Behance", "Twitter"]
    }
  ],

  testimonials: [
    {
      name: "Clara Oswald",
      course: "React 19 & Next.js Mastery",
      rating: 5,
      text: "The roadmap changed my perspective. Building capstone code directly inside the browser sandbox allowed me to land a React role in under 4 months.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
      size: "medium",
      rotate: "-2deg"
    },
    {
      name: "Jared Vance",
      course: "AI Orchestration Systems",
      rating: 5,
      text: "AuraLearn is completely unique. Instead of Udemy's copy-paste code, the interactive centerpiece and real-time mentor logs kept me fully engaged.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
      size: "large",
      rotate: "3deg"
    },
    {
      name: "Aiden Drake",
      course: "Glassmorphism UI Systems",
      rating: 5,
      text: "Stunning aesthetics! The light yellow identity and micro-interactions make clicking through sections feel incredibly satisfying.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
      size: "small",
      rotate: "-1deg"
    }
  ],

  experienceSteps: [
    { id: "watch", label: "Watch", desc: "Interact with interactive video milestones.", icon: "Play" },
    { id: "practice", label: "Practice", desc: "Test concepts inside terminal sandboxes.", icon: "Code" },
    { id: "challenge", label: "Challenge", desc: "Beat collaborative time-attack quizzes.", icon: "Flame" },
    { id: "project", label: "Project", desc: "Deploy real-world APIs and assets.", icon: "Terminal" },
    { id: "certificate", label: "Certificate", desc: "Claim blockchain-verified diploma.", icon: "Award" }
  ],

  contactInfo: {
    email: "admissions@auralearn.edu",
    phone: "+1 (800) 555-0849",
    address: "99 Interactive Way, Silicon Valley, CA 94025",
    officeHours: "Monday - Friday, 8:00 AM - 5:00 PM PST",
    socials: [
      { name: "Facebook", link: "#" },
      { name: "Twitter", link: "#" },
      { name: "GitHub", link: "#" },
      { name: "LinkedIn", link: "#" }
    ]
  }
};
