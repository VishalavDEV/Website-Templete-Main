import { BlogPost, EducationItem, ExperienceItem, Project, SkillItem } from '../types';

export const personalInfo = {
  name: 'Arjun Dev',
  role: 'Full Stack Developer & UI/UX Enthusiast',
  tagline: 'Hi, I\'m',
  headline: 'Building digital products that make impact.',
  bioHero: 'I build modern, responsive and user friendly web applications that solve real world problems.',
  bioAbout: 'I\'m a passionate Full Stack Developer who loves building elegant solutions with clean code. I enjoy turning ideas into real world products.',
  email: 'arjundev@example.com',
  location: 'Chennai, India',
  experienceYears: '2+ Years',
  status: 'Available for freelance & full-time roles',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    email: 'mailto:arjundev@example.com'
  }
};

export const aboutHighlights = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    description: 'I write clean, scalable and maintainable code.',
    iconType: 'code',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'
  },
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    description: 'I love solving problems and building efficient solutions.',
    iconType: 'pen',
    bgColor: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400'
  },
  {
    id: 'fast-learner',
    title: 'Fast Learner',
    description: 'I quickly adapt to new technologies and tools.',
    iconType: 'sliders',
    bgColor: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
  },
  {
    id: 'team-player',
    title: 'Team Player',
    description: 'I enjoy collaborating and creating great experiences together.',
    iconType: 'users',
    bgColor: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400'
  }
];

export const skillsData: SkillItem[] = [
  // Frontend
  { id: 'html5', name: 'HTML5', category: 'frontend', iconKey: 'html5' },
  { id: 'css3', name: 'CSS3', category: 'frontend', iconKey: 'css3' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', iconKey: 'javascript' },
  { id: 'react', name: 'React.js', category: 'frontend', iconKey: 'react' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', iconKey: 'nextjs' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', iconKey: 'tailwind' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', iconKey: 'typescript' },
  { id: 'redux', name: 'Redux Toolkit', category: 'frontend', iconKey: 'redux' },

  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', iconKey: 'nodejs' },
  { id: 'express', name: 'Express.js', category: 'backend', iconKey: 'express' },
  { id: 'mongodb', name: 'MongoDB', category: 'backend', iconKey: 'mongodb' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'backend', iconKey: 'postgresql' },
  { id: 'python', name: 'Python', category: 'backend', iconKey: 'python' },

  // Tools
  { id: 'git', name: 'Git & GitHub', category: 'tools', iconKey: 'git' },
  { id: 'docker', name: 'Docker', category: 'tools', iconKey: 'docker' },
  { id: 'figma', name: 'Figma', category: 'tools', iconKey: 'figma' },

  // Others
  { id: 'restapi', name: 'REST APIs', category: 'others', iconKey: 'typescript' },
  { id: 'graphql', name: 'GraphQL', category: 'others', iconKey: 'redux' }
];

export const projectsData: Project[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    category: 'Web App',
    description: 'A productivity app to manage tasks, teams and track progress efficiently.',
    detailedDescription: 'TaskFlow is a comprehensive project management and workflow platform crafted for fast-paced engineering and design teams. Features real-time task boards, kanban columns, automated sprint velocity tracking, and customizable dashboards with rich analytics widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Productivity', 'Kanban', 'Real-time', 'Analytics'],
    techStack: ['react', 'nodejs', 'mongodb'],
    liveUrl: 'https://taskflow.example.com',
    githubUrl: 'https://github.com/arjundev/taskflow',
    featured: true,
    highlights: [
      'Interactive drag-and-drop Kanban workflow boards',
      'Real-time collaborative updates via WebSockets',
      'Customizable workspace analytics with Recharts',
      'Role-based access control and team permissions'
    ]
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    category: 'Web App',
    description: 'A full stack travel website to explore places, book trips and manage itineraries.',
    detailedDescription: 'Wanderlust connects travelers with hidden destinations and tailored itineraries worldwide. It offers curated city guides, hotel and excursion bookings, interactive maps with altitude and weather forecasts, and travel journal sharing with community feedback.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
    tags: ['Travel', 'Booking', 'Geolocation', 'Full Stack'],
    techStack: ['react', 'nodejs', 'mongodb'],
    liveUrl: 'https://wanderlust.example.com',
    githubUrl: 'https://github.com/arjundev/wanderlust',
    featured: true,
    highlights: [
      'Interactive global map with pin clusters and filters',
      'Secure Stripe checkout integration for bookings',
      'AI-powered travel recommendations and itinerary planner',
      'User photo reviews with geolocation metadata'
    ]
  },
  {
    id: 'chronoshop',
    title: 'ChronoShop',
    category: 'Web App',
    description: 'An elegant e-commerce website for watches with modern UI and smooth animations.',
    detailedDescription: 'ChronoShop is a luxury horology e-commerce storefront delivering seamless, 60fps micro-interactions and high-definition 3D product previews. Features precision search filters, an interactive wrist-size visualizer, custom strap customizers, and frictionless guest checkouts.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    tags: ['E-Commerce', 'UI/UX', 'Luxury', 'Animations'],
    techStack: ['react', 'nodejs', 'mongodb'],
    liveUrl: 'https://chronoshop.example.com',
    githubUrl: 'https://github.com/arjundev/chronoshop',
    featured: true,
    highlights: [
      'Smooth scroll-triggered animations powered by Motion',
      'Comprehensive product customization and strap selector',
      'Instant search and faceted price/brand filtering',
      'Saved wishlists and order tracking status timeline'
    ]
  },
  {
    id: 'cloudpulse',
    title: 'CloudPulse',
    category: 'DevOps & Cloud',
    description: 'Real-time telemetry and microservices health monitoring dashboard.',
    detailedDescription: 'A multi-cloud infrastructure monitor aggregating latency, error rates, CPU/RAM utilization, and cluster container statuses into crisp, sub-second latency visualization dashboards.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
    tags: ['DevOps', 'Monitoring', 'Telemetry'],
    techStack: ['react', 'nodejs', 'typescript', 'tailwind'],
    liveUrl: 'https://cloudpulse.example.com',
    githubUrl: 'https://github.com/arjundev/cloudpulse',
    featured: false,
    highlights: [
      'Live metric streams with configurable alert thresholds',
      'Distributed trace visualizer for backend API latencies',
      'Exportable audit reports in CSV and PDF formats'
    ]
  },
  {
    id: 'devportfolio',
    title: 'Minimalist Portfolio Template',
    category: 'Open Source',
    description: 'High performance, accessible portfolio starter for modern web engineers.',
    detailedDescription: 'An ultra-fast, accessible, and themeable portfolio template built with Tailwind CSS, React 19, and smooth motion transitions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Open Source', 'Template', 'Tailwind'],
    techStack: ['react', 'tailwind', 'typescript'],
    liveUrl: 'https://devportfolio.example.com',
    githubUrl: 'https://github.com/arjundev/devportfolio',
    featured: false,
    highlights: [
      '100/100 Lighthouse performance and SEO scores',
      'WCAG AA accessible color palettes and dark mode support',
      'Modular data structure for painless personal customization'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Apex Digital Labs',
    location: 'Chennai, India',
    period: '2024 - Present',
    description: [
      'Architected and deployed scalable client-facing web applications using React, Next.js, and Node.js microservices.',
      'Refactored legacy REST APIs into typed GraphQL endpoints, slashing client payload sizes by 42%.',
      'Spearheaded design system adoption with Tailwind CSS, increasing team feature rollout velocity by 30%.'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Innovate Solutions',
    location: 'Chennai, India',
    period: '2023 - 2024',
    description: [
      'Engineered interactive, responsive dashboard interfaces for fintech clients with React, Redux, and Chart.js.',
      'Improved Core Web Vitals (LCP from 3.8s to 1.1s) through code-splitting, tree shaking, and lazy image loading.',
      'Collaborated closely with UX designers in Figma to translate wireframes into pixel-perfect interactive web apps.'
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'REST APIs', 'Figma']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Anna University, Chennai',
    period: '2019 - 2023',
    grade: 'First Class with Distinction (8.8/10 CGPA)',
    description: 'Specialized in Distributed Systems, Data Structures & Algorithms, Database Design, and Human-Computer Interaction.'
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Certificate (HSC) - Computer Science',
    institution: 'St. John’s Higher Secondary School, Chennai',
    period: '2017 - 2019',
    grade: '94.6% Aggregate',
    description: 'Excellence in Mathematics, Physics, Chemistry, and Computer Science fundamentals.'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building Blazing-Fast Web Apps with React 19 and Tailwind CSS v4',
    excerpt: 'Explore how compiler enhancements in React 19 combined with Tailwind CSS v4 CSS-first architecture streamline frontend development.',
    date: 'Feb 15, 2025',
    readTime: '5 min read',
    category: 'Frontend',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'TailwindCSS', 'WebDev'],
    content: `Building web applications in 2025 has become faster and more intuitive than ever. With React 19's server actions and compiler memoization, we can eliminate tedious useMemo and useCallback boilerplate. Meanwhile, Tailwind CSS v4 introduces a lightning-fast Rust-based engine with pure CSS import variables.`
  },
  {
    id: 'blog-2',
    title: 'Clean Architecture in Node.js: Structuring Scalable Express Services',
    excerpt: 'A practical deep dive into organizing enterprise Node.js services with domain separation, repository patterns, and typed error handling.',
    date: 'Jan 28, 2025',
    readTime: '7 min read',
    category: 'Backend',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    tags: ['NodeJS', 'Express', 'Architecture'],
    content: `When scaling backend codebases, keeping controllers thin and business logic decoupled inside isolated service layers ensures painless testing and future migration to microservices.`
  },
  {
    id: 'blog-3',
    title: 'Micro-interactions in UI/UX: Why the Details Make the Product',
    excerpt: 'How thoughtful tactile feedback, spring animations, and state transitions elevate good products into memorable brand experiences.',
    date: 'Jan 10, 2025',
    readTime: '4 min read',
    category: 'UI/UX Design',
    coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop',
    tags: ['UI/UX', 'Design', 'Animation'],
    content: `Great products feel alive under your fingertips. When a button yields with spring physics or a modal smoothly opens with natural momentum, users subconsciously perceive the software as reliable, refined, and trustworthy.`
  }
];
