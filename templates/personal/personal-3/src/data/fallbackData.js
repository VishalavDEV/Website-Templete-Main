export const fallbackProfile = {
  name: "Siddharth Mehta",
  role: "CREATIVE DEVELOPER",
  edition: "PERSONAL EDITION · 2026",
  storyIntro: "I'm Siddharth, a developer who enjoys turning ideas into useful digital experiences.",
  bio: "Siddharth Mehta is a full-stack developer and designer based in Mumbai, specializing in immersive experiences, custom interactive graphics, and robust backend services. He bridges the gap between engineering and art to tell visual stories.",
  portraitUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  location: "MUMBAI, INDIA",
  focus: "DEVELOPMENT / AI / WEB GL",
  currently: "BUILDING & LEARNING"
};

export const fallbackProjects = [
  {
    id: "1",
    number: "01",
    title: "ELIXIR JOURNAL",
    category: "WEB EXPERIENCE",
    description: "A high-fidelity editorial web app that translates classical literature into immersive interactive page layouts.",
    technologies: ["React", "Spring Boot", "Three.js", "Framer Motion"],
    idea: "Digital readers suffer from flat layouts. We designed a web layout engine that flows text dynamically into interactive shapes based on narrative tone.",
    approach: "Built with a responsive grid and Spring Boot server rendering structural data. Framer Motion handles standard viewport reveals while Three.js binds particle effects to cursor movement.",
    result: "An award-winning platform that increases average reading session duration by 140% and integrates modern typography in dynamic viewports.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/elixir"
  },
  {
    id: "2",
    number: "02",
    title: "CHRONO CLAY",
    category: "CREATIVE EXPERIENCE",
    description: "A 3D interactive sandpile simulation rendering memory pathways from user biography files.",
    technologies: ["React", "Spring Boot", "WebGL", "GSAP"],
    idea: "Biographies are static. We wanted to represent a user's life journey as shifting granules of virtual sand reacting to temporal scroll speeds.",
    approach: "Calculated particle physics coordinates in React, fetching custom event streams from Spring Boot endpoints. Integrated custom GSAP timeline sequences to morph the structures.",
    result: "Over 50,000 simulations rendered in the first week. Users explored their timelines through touch and swipe interactions.",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/chrono"
  },
  {
    id: "3",
    number: "03",
    title: "AURA AGENT",
    category: "AI ENGINE",
    description: "An orchestration engine visualizing semantic web relationships and agent thought streams.",
    technologies: ["React", "Spring Boot", "Python", "REST API"],
    idea: "AI reasoning steps are black boxes. We needed a tool to trace multi-agent task planning visually.",
    approach: "Spring Boot runs an agent client executing Python subprocesses. The status and reasoning tokens are streamed in real-time to a React canvas mapping abstract nodes.",
    result: "Helped developer teams debug long-running AI workflows in half the time by highlighting semantic blockages visually.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://example.com/aura"
  }
];

export const fallbackSkills = [
  { name: "React", category: "Frontend", description: "Declarative UI and interactive components with clean hooks." },
  { name: "Javascript", category: "Frontend", description: "Asynchronous operations, custom DOM manipulations, ES6+ features." },
  { name: "Java", category: "Backend", description: "Strong OOP patterns, multi-threading, clean code structures." },
  { name: "Spring Boot", category: "Backend", description: "High-performance REST API services and secure configurations." },
  { name: "Python", category: "AI/ML", description: "Subprocess execution, data scripts, and AI integrations." },
  { name: "HTML", category: "Frontend", description: "Semantic elements, layout templates, SEO friendly markup." },
  { name: "CSS", category: "Frontend", description: "Custom styling, animations, flexbox, grid, paper overlays." },
  { name: "Git", category: "Utilities", description: "Version control, branching systems, collaborative development." },
  { name: "REST API", category: "Backend", description: "Endpoint structure, JSON payload transfer, schema validation." },
  { name: "AI / ML", category: "AI/ML", description: "Agent modeling, large language models, prompt workflows." }
];

export const fallbackExperience = [
  { stage: "BEGINNING", date: "2019", title: "The Spark", description: "Wrote the first lines of HTML/CSS. Discovered the thrill of making things move on screen.", visualElement: "circle" },
  { stage: "LEARNING", date: "2020 - 2021", title: "Core Architecture", description: "Dived deep into Java OOP and Spring Boot systems, understanding design patterns.", visualElement: "square" },
  { stage: "FIRST PROJECT", date: "2022", title: "Production Launch", description: "Built a fully functional student portal handling real-time sessions and data streaming.", visualElement: "triangle" },
  { stage: "EXPERIMENTING", date: "2023", title: "Creative Web & WebGL", description: "Integrated interactive visualizer tools, moving away from standard boxy layouts.", visualElement: "star" },
  { stage: "BUILDING", date: "2024", title: "Full Stack Sync", description: "Joined a creative lab connecting RESTful APIs to immersive React canvases.", visualElement: "hexagon" },
  { stage: "ACHIEVING", date: "2025", title: "Award Wins", description: "Won the Regional Hackathon for a collaborative workspace visualizer tool.", visualElement: "diamond" },
  { stage: "NOW", date: "2026", title: "The Next Page", description: "Pushing limits of editorial development and AI reasoning streams.", visualElement: "plus" }
];

export const fallbackEducation = [
  { id: "1", date: "2018 - 2022", degree: "B.Tech in Computer Science", school: "Mumbai Institute of Technology", description: "Specialized in Software Engineering and Distributed Systems." },
  { id: "2", date: "2022 - 2023", degree: "Interactive Media Post-Grad", school: "Academy of Digital Design", description: "Acquired design foundations, layouts, user flows, and animation theory." }
];

export const fallbackAchievements = [
  { id: "1", number: "01", title: "1st Place - Visual Hack", category: "HACKATHON", date: "2024", description: "Designed an interactive node-editor in 24 hours." },
  { id: "2", number: "02", title: "Professional Java Developer", category: "CERTIFICATION", date: "2024", description: "Certified by Oracle in enterprise application design." },
  { id: "3", number: "03", title: "Featured on SiteInspire", category: "PROJECT", date: "2025", description: "Elixir Journal was featured under design showcases." },
  { id: "4", number: "04", title: "Design Excellence Award", category: "AWARD", date: "2025", description: "Honored for interactive digital journalism layouts." }
];

export const fallbackCertifications = [
  { id: "1", title: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2023", credentialUrl: "https://aws.amazon.com" },
  { id: "2", title: "Advanced React & Redux", issuer: "Frontend Masters", date: "2024", credentialUrl: "https://frontendmasters.com" }
];

export const fallbackPlayground = [
  { id: "1", title: "Liquid Typography", type: "Animation", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400", link: "https://example.com/play-1" },
  { id: "2", title: "Magnetic Grid System", type: "Interaction", imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=400", link: "https://example.com/play-2" },
  { id: "3", title: "Infinite Scroll Canvas", type: "UI", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400", link: "https://example.com/play-3" },
  { id: "4", title: "AI Chat Node Map", type: "Code", imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400", link: "https://example.com/play-4" },
  { id: "5", title: "Granular Sandbox", type: "WebGL", imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400", link: "https://example.com/play-5" }
];
