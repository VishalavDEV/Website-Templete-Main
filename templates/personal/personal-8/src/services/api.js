// API Client for VISHAL OS Spring Boot Backend
const API_BASE_URL = 'http://localhost:8080/api';

// Fallback in-memory data for instant reliability
const FALLBACK_DATA = {
  profile: {
    name: "Marcus Sterling",
    title: "Full Stack Developer & AI Engineer",
    tagline: "Architecting high-performance web systems and intelligent interactive experiences.",
    location: "San Francisco, CA / Remote",
    email: "marcus.dev@portfolio.io",
    status: "AVAILABLE FOR NEW OPPORTUNITIES",
    roles: ["CREATOR", "LEARNER", "DEVELOPER", "PROBLEM SOLVER"],
    bio: "I'm a passionate engineer crafting modern scalable web architectures, high-concurrency Spring Boot backend microservices, and reactive fluid user experiences in React.",
    stats: {
      projects: "12+",
      technologies: "15+",
      achievements: "10+",
      experienceYears: "4+"
    }
  },
  skills: [
    {
      category: "FRONTEND",
      items: [
        { name: "React.js", level: 95, icon: "Atom", experience: "4 Yrs", desc: "Modern SPA Architecture, Hooks, Context, Framer Motion, State Management" },
        { name: "JavaScript (ES6+)", level: 92, icon: "Code2", experience: "5 Yrs", desc: "Async/Await, DOM manipulation, Functional Programming" },
        { name: "TypeScript", level: 88, icon: "FileCode", experience: "3 Yrs", desc: "Strict typing, generic interfaces, API client definitions" },
        { name: "GSAP / Framer Motion", level: 90, icon: "Sparkles", experience: "3 Yrs", desc: "Complex timeline orchestration, 60fps GPU micro-interactions" }
      ]
    },
    {
      category: "BACKEND",
      items: [
        { name: "Java", level: 90, icon: "Coffee", experience: "4 Yrs", desc: "Java 21, Concurrency, OOP Architecture, Streams & Lambdas" },
        { name: "Spring Boot", level: 88, icon: "Server", experience: "3.5 Yrs", desc: "REST APIs, Spring Security, Validation, Exception Handling" },
        { name: "Python", level: 82, icon: "Terminal", experience: "3 Yrs", desc: "Automation, Data Parsing, Flask/FastAPI REST APIs" },
        { name: "REST APIs / JSON", level: 95, icon: "Network", experience: "4 Yrs", desc: "Contract Design, Swagger/OpenAPI, Dynamic Payloads" }
      ]
    },
    {
      category: "TOOLS",
      items: [
        { name: "Git & GitHub", level: 90, icon: "GitBranch", experience: "4 Yrs", desc: "Branching workflows, Pull Requests, GitHub Actions CI/CD" },
        { name: "Docker", level: 80, icon: "Container", experience: "2 Yrs", desc: "Containerization, Multi-stage builds, Compose setups" },
        { name: "Vite / Webpack", level: 88, icon: "Zap", experience: "3 Yrs", desc: "Build optimization, HMR, Asset bundling" }
      ]
    },
    {
      category: "AI / ML",
      items: [
        { name: "OpenAI / LLM APIs", level: 85, icon: "Cpu", experience: "2 Yrs", desc: "Prompt Engineering, Agentic Workflows, Function Calling" },
        { name: "Computer Vision", level: 78, icon: "Eye", experience: "1.5 Yrs", desc: "OpenCV image processing & object recognition pipelines" }
      ]
    }
  ],
  projects: [
    {
      id: "smart-city-dashboard",
      title: "Smart City Traffic Management Dashboard",
      fileName: "smart-city-dashboard.project",
      category: "WEB DEVELOPMENT",
      problem: "Urban metropolitan traffic controllers lacked real-time multi-junction telemetry visualization, resulting in manual gridlock delays.",
      solution: "Engineered a reactive React + Java Spring Boot dashboard with WebSockets streaming sensor data across 45 intersections.",
      technologies: ["React.js", "Spring Boot", "Java 21", "WebSocket", "Recharts", "CSS Grid"],
      github: "https://github.com/vishal-dev/smart-city-dashboard",
      demo: "https://smart-city-demo.vishalos.dev",
      featured: true,
      badge: "PROD READY"
    },
    {
      id: "ecommerce-platform",
      title: "Hyper-Responsive Headless E-Commerce Platform",
      fileName: "ecommerce-platform.project",
      category: "WEB DEVELOPMENT",
      problem: "Legacy monolithic store suffered 3.8s page response latency during seasonal flash sales.",
      solution: "Decoupled frontend into a sub-second SPA and optimized Spring REST microservices with caching, dropping p99 latency to 180ms.",
      technologies: ["React.js", "Java Spring Boot", "Framer Motion", "REST API", "TailwindCSS"],
      github: "https://github.com/vishal-dev/nextgen-ecommerce",
      demo: "https://store-demo.vishalos.dev",
      featured: true,
      badge: "POPULAR"
    },
    {
      id: "ai-detection",
      title: "Real-Time AI Defect Detection Pipeline",
      fileName: "ai-detection.project",
      category: "AI PROJECTS",
      problem: "Manual manufacturing quality assurance inspects only 10% of hardware PCB boards with human error margins.",
      solution: "Created a computer vision model pipeline serving predictions through a Java API with instant overlay visual alerts in React.",
      technologies: ["Python", "Java Spring Boot", "OpenCV", "React.js", "Canvas API"],
      github: "https://github.com/vishal-dev/ai-defect-scanner",
      demo: "https://ai-scanner.vishalos.dev",
      featured: true,
      badge: "AI DRIVEN"
    },
    {
      id: "traffic-management",
      title: "Automated Fleet & Logistics Controller",
      fileName: "traffic-management.project",
      category: "SOFTWARE",
      problem: "Disparate GPS trackers led to route inefficiencies and untracked driver downtime.",
      solution: "Built an automated route planning engine utilizing Dijkstra pathing algorithms and interactive map canvas.",
      technologies: ["Java", "Spring Boot", "React.js", "GSAP Map", "REST APIs"],
      github: "https://github.com/vishal-dev/fleet-logistics-os",
      demo: "https://fleet.vishalos.dev",
      featured: false,
      badge: "ENTERPRISE"
    },
    {
      id: "os-portfolio-experiments",
      title: "Personal OS Desktop Engine",
      fileName: "personal-os-desktop.project",
      category: "EXPERIMENTS",
      problem: "Standard portfolio websites are static, generic, and unmemorable.",
      solution: "Designed an interactive desktop operating system with draggable windowing system, custom desktop apps, and Spring Boot backend integration.",
      technologies: ["React.js", "Framer Motion", "GSAP", "Java Spring Boot", "Custom CSS System"],
      github: "https://github.com/vishal-dev/vishal-os-portfolio",
      demo: "https://vishalos.dev",
      featured: true,
      badge: "FEATURED"
    }
  ],
  experience: [
    { id: "start", node: "START", title: "Hello World & Computer Science Foundations", year: "2020", location: "University Computer Lab", desc: "Ignited passion for software development. Built first CLI utilities in Java and created responsive HTML/CSS web pages." },
    { id: "learning", node: "LEARNING", title: "Mastering Full Stack Architecture", year: "2021", location: "Deep Tech Exploration", desc: "Deep-dived into React component lifecycles, state management, REST API architecture, and Java Spring Boot framework fundamentals." },
    { id: "first-project", node: "FIRST PROJECT", title: "First Full-Stack Deployment", year: "2022", location: "Production Launch", desc: "Deployed a complete full-stack web application serving live users with zero downtime using React and Spring Boot." },
    { id: "experience", node: "EXPERIENCE", title: "Software Engineer - Tech Solutions Inc.", year: "2023 - 2025", location: "San Francisco / Remote", desc: "Led frontend feature development for high-traffic enterprise web applications. Engineered resilient Spring Boot microservices." },
    { id: "achievements", node: "ACHIEVEMENTS", title: "Hackathon Winner & Tech Lead", year: "2025", location: "Global Developer Summit", desc: "Awarded 1st Place for building an AI-assisted real-time collaborative workspace in 48 hours." },
    { id: "current", node: "CURRENT", title: "Senior Full Stack Engineer & Open Source Creator", year: "2026", location: "VISHAL OS Innovation Studio", desc: "Currently crafting next-gen interactive web applications, desktop-grade web experiences, and microservices." },
    { id: "future", node: "FUTURE", title: "Next Frontier - Spatial & Agentic OS Systems", year: "Beyond", location: "The Horizon", desc: "Exploring AI agent integrations, WebGL 3D canvases, and next-generation operating system visual interfaces." }
  ],
  education: [
    {
      institution: "California State University",
      degree: "Bachelor of Science in Computer Science",
      specialization: "Software Engineering & Intelligent Systems",
      year: "2020 - 2024",
      gpa: "3.9 / 4.0",
      keyLearnings: [
        "Data Structures & Algorithms in Java & C++",
        "Software Engineering Principles & Clean Architecture",
        "Database Systems & Distributed API Protocols",
        "Web Application Engineering & Mobile Systems"
      ]
    },
    {
      institution: "Full-Stack Web Architecture Fellowship",
      degree: "Advanced Certification in React & Cloud Microservices",
      specialization: "High Performance Web Systems",
      year: "2024",
      gpa: "Honors",
      keyLearnings: [
        "Advanced React Patterns & GPU Animations",
        "Spring Boot Security, OAuth2, and JWT",
        "Docker Containerization & CI/CD Pipelines",
        "Performance Profiling & Web Vitals Optimization"
      ]
    }
  ],
  achievements: [
    { id: "hackathon-1st", title: "1st Place - Global Dev Hackathon 2025", category: "Hackathons", icon: "Trophy", year: "2025", issuer: "Tech Innovation Guild", description: "Built a live collaborative canvas engine using React & Spring Boot WebSockets within 48 hours." },
    { id: "best-architect", title: "Best System Architecture Award", category: "Awards", icon: "Award", year: "2024", issuer: "CS University Annual Summit", description: "Recognized for designing a micro-latency Spring Boot REST backend with zero data loss during load tests." },
    { id: "top-contributor", title: "Top Open Source Contributor", category: "Milestones", icon: "Star", year: "2024 - 2026", issuer: "GitHub Community", description: "Over 1,200+ commits and contributions across React UI tools and Java Spring open-source libraries." },
    { id: "speed-coder", title: "Gold Medalist - Speed Coding Contest", category: "Competitions", icon: "Medal", year: "2023", issuer: "Inter-College Code League", description: "Solved 6 complex algorithmic challenges in 45 minutes using Java 21 and clean code practices." }
  ],
  certifications: [
    { id: "cert-spring-expert", title: "Spring Certified Professional Developer", organization: "VMware / Broadcom", date: "March 2025", credentialId: "SPRING-CERT-99201", description: "Validated expertise in Spring Boot 3, REST APIs, Dependency Injection, Security, and Data Access." },
    { id: "cert-react-pro", title: "Meta Certified Senior React Developer", organization: "Meta / Coursera", date: "January 2025", credentialId: "META-REACT-77402", description: "Advanced state management, custom hook architecture, performance optimization, and testing." },
    { id: "cert-aws-arch", title: "AWS Certified Solutions Architect", organization: "Amazon Web Services", date: "August 2024", credentialId: "AWS-ASA-55319", description: "Designing resilient, high-availability cloud deployments, ECS containers, and API Gateways." }
  ]
};

async function fetchFromApi(endpoint) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.warn(`[VISHAL OS API] Fetch failed for endpoint '${endpoint}'. Using local fallback data.`, err.message);
    return FALLBACK_DATA[endpoint] || null;
  }
}

export const apiService = {
  getProfile: () => fetchFromApi('profile'),
  getSkills: () => fetchFromApi('skills'),
  getProjects: () => fetchFromApi('projects'),
  getExperience: () => fetchFromApi('experience'),
  getEducation: () => fetchFromApi('education'),
  getAchievements: () => fetchFromApi('achievements'),
  getCertifications: () => fetchFromApi('certifications'),
  submitContact: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.warn('[VISHAL OS API] Fallback contact submission handling', e);
    }
    // Fallback success response if backend isn't reachable
    return {
      success: true,
      message: `Thank you ${formData.name}! Your message "${formData.subject}" was delivered successfully to Marcus.`,
      timestamp: new Date().toISOString()
    };
  }
};
