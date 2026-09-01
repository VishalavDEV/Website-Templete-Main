// src/data/resumeData.js
// ====================================================
// All content data for the resume portfolio
// Edit this file to customize your information
// ====================================================

export const personalInfo = {
  name: "Jordan Davis",
  initials: "JD",
  title: "Software Engineer & Full Stack Developer",
  summary:
    "Passionate software engineer focused on building scalable, user-friendly digital products and solving real-world problems through technology.",
  location: "Chennai, India",
  email: "jordan@example.com",
  phone: "+91 98765 43210",
  linkedin: "https://www.linkedin.com/in/jordan-davis-example",
  github: "https://github.com/jordan-davis-example",
  availability: "Open to Opportunities",
  cvFile: "/Jordan_Davis_CV.pdf", // Place your CV in /public/
};

export const stats = [
  { value: "3+", label: "Years Experience", icon: "briefcase" },
  { value: "15+", label: "Projects Completed", icon: "code" },
  { value: "10+", label: "Technologies", icon: "layers" },
  { value: "Open", label: "To Opportunities", icon: "target" },
];

export const aboutMe = {
  bio: [
    "I'm a software engineer with over 3 years of experience building robust, scalable web applications. My journey in technology started with a curiosity for how things work and evolved into a passion for creating elegant digital solutions.",
    "I specialize in full stack development, with a strong foundation in React on the frontend and Node.js and Java on the backend. I thrive in collaborative environments and am deeply committed to writing clean, maintainable code.",
    "When I'm not coding, I enjoy exploring emerging technologies, contributing to open-source projects, and mentoring aspiring developers. I believe technology should solve real problems and create genuine value for people.",
  ],
  details: [
    { label: "Location", value: "Chennai, India" },
    { label: "Email", value: "jordan@example.com" },
    { label: "Experience", value: "3+ Years" },
    { label: "Availability", value: "Open to Work" },
  ],
};

export const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechNova Solutions",
    duration: "2024 – Present",
    location: "Chennai, India",
    current: true,
    description:
      "Leading development of scalable web applications and microservices for enterprise-level clients across fintech and healthtech domains.",
    bullets: [
      "Developed scalable web applications using React, Node.js, and modern backend technologies, serving 50,000+ daily active users.",
      "Improved application performance by 40% through code splitting, lazy loading, and caching strategies.",
      "Collaborated with cross-functional teams including design, product, and QA to deliver high-quality features on schedule.",
      "Built a reusable component library adopted across 5 internal products, reducing development time by 30%.",
    ],
    icon: "💼",
  },
  {
    id: 2,
    title: "Junior Developer",
    company: "Digital Labs",
    duration: "2022 – 2024",
    location: "Bangalore, India",
    current: false,
    description:
      "Contributed to full-stack feature development for SaaS products, focusing on frontend architecture and RESTful API integrations.",
    bullets: [
      "Built and maintained RESTful APIs using Java Spring Boot, integrating with third-party payment and notification services.",
      "Delivered responsive, accessible UI components using React and TypeScript for B2B SaaS dashboards.",
      "Participated in agile sprints, code reviews, and daily standups, improving team velocity by 20%.",
      "Implemented automated unit and integration tests achieving 85% code coverage.",
    ],
    icon: "🖥️",
  },
  {
    id: 3,
    title: "Software Development Intern",
    company: "Innovate Technologies",
    duration: "2021 – 2022",
    location: "Remote",
    current: false,
    description:
      "Gained hands-on experience with full stack development, assisting the team in building and deploying web features.",
    bullets: [
      "Designed and implemented CRUD APIs in Node.js connected to MySQL databases for internal tools.",
      "Assisted in frontend development using React, resolving 30+ UI bugs and implementing 10+ new features.",
      "Documented technical specifications and contributed to the internal developer knowledge base.",
    ],
    icon: "🚀",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science",
    institution: "University of Technology",
    duration: "2018 – 2022",
    specialization: "Specialization in Software Engineering & Data Systems",
    achievement: "First Class with Distinction — CGPA 8.7/10",
    description:
      "Focused on core computer science fundamentals including data structures, algorithms, operating systems, and distributed computing.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education (Science Stream)",
    institution: "Greenfield Higher Secondary School",
    duration: "2016 – 2018",
    specialization: "Physics, Chemistry, Mathematics & Computer Science",
    achievement: "State Board Top Scorer — 94.8%",
    description:
      "Completed science stream with an emphasis on mathematics and computer science, achieving top grades and district-level academic recognition.",
  },
];

export const skills = [
  {
    id: 1,
    category: "Frontend Development",
    icon: "monitor",
    items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Redux", "Next.js"],
  },
  {
    id: 2,
    category: "Backend Development",
    icon: "server",
    items: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    id: 3,
    category: "Databases & DevOps",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Linux", "AWS Basics"],
  },
  {
    id: 4,
    category: "Professional Skills",
    icon: "star",
    items: ["Problem Solving", "Team Collaboration", "Agile/Scrum", "Communication", "Leadership", "Code Review"],
  },
];

export const projects = [
  {
    id: 1,
    name: "AI-Powered Resume Analyzer",
    description:
      "An intelligent platform that analyzes resumes using NLP and AI, provides actionable feedback, keyword optimization, and job match scoring to help candidates improve their applications.",
    technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL", "Express"],
    github: "https://github.com/jordan-davis-example/resume-analyzer",
    demo: "https://resume-analyzer.example.com",
    icon: "🤖",
    color: "#eff6ff",
  },
  {
    id: 2,
    name: "Smart Task Management System",
    description:
      "A full-featured project management tool with real-time collaboration, kanban boards, sprint planning, time tracking, and team analytics dashboard.",
    technologies: ["React", "Java", "Spring Boot", "MySQL", "WebSockets"],
    github: "https://github.com/jordan-davis-example/taskflow",
    demo: "https://taskflow.example.com",
    icon: "✅",
    color: "#f0fdf4",
  },
  {
    id: 3,
    name: "E-Commerce Platform",
    description:
      "A scalable full-stack e-commerce solution with product catalog, cart management, secure payment integration, order tracking, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redis"],
    github: "https://github.com/jordan-davis-example/ecommerce-platform",
    demo: "https://ecommerce.example.com",
    icon: "🛍️",
    color: "#fdf4ff",
  },
  {
    id: 4,
    name: "Data Analytics Dashboard",
    description:
      "An interactive analytics platform with real-time data visualization, custom report builder, predictive trend analysis, and multi-source data integration.",
    technologies: ["React", "Python", "FastAPI", "Chart.js", "D3.js"],
    github: "https://github.com/jordan-davis-example/analytics-dash",
    demo: "https://analytics.example.com",
    icon: "📊",
    color: "#fffbeb",
  },
];

export const certifications = [
  {
    id: 1,
    name: "Full Stack Web Development Certification",
    organization: "TechLearn Academy",
    year: "2024",
    icon: "🎓",
  },
  {
    id: 2,
    name: "Java Programming & Software Engineering",
    organization: "CodePath Institute",
    year: "2023",
    icon: "☕",
  },
  {
    id: 3,
    name: "Cloud Computing Fundamentals",
    organization: "NexCloud Training Center",
    year: "2023",
    icon: "☁️",
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    organization: "DataPath Learning",
    year: "2022",
    icon: "📈",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
