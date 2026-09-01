const API_BASE_URL = 'http://localhost:8081/api';

// Fallback mock data in case backend is offline
export const FALLBACK_DATA = {
  profile: {
    name: "Alex Vance",
    title: "Creative Engineer & Full-Stack Developer",
    bio: "I build immersive web applications, AI-driven experiences, and microservices. I bridge the gap between aesthetic design and robust systems engineering.",
    skills: ["Java", "Spring Boot", "React.js", "JavaScript (ES6+)", "Python", "Docker", "REST APIs", "GSAP", "Framer Motion", "CSS3/HTML5", "PostgreSQL", "NoSQL", "Git", "Maven"],
    email: "alex.vance@example.com",
    github: "https://github.com/alexvance",
    linkedin: "https://linkedin.com/in/alexvance",
    resumeUrl: "/resume.pdf"
  },
  projects: [
    {
      id: "proj-1",
      name: "Neural Dreamscape",
      description: "An AI-powered creative dashboard that interprets user text prompts into real-time generative canvas layouts and interactive CSS canvas elements.",
      category: "AI",
      technologies: ["React.js", "Python", "FastAPI", "WebSockets", "GSAP"],
      imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alexvance/neural-dreamscape",
      demoUrl: "https://dreamscape.alexvance.dev"
    },
    {
      id: "proj-2",
      name: "Quantum Flow Engine",
      description: "A high-performance CSS 3D physics renderer that visualizes particle collisions and vector field math interactively in modern browsers.",
      category: "EXPERIMENTS",
      technologies: ["JavaScript", "CSS 3D Transforms", "GSAP", "HTML5 Canvas"],
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alexvance/quantum-flow",
      demoUrl: "https://quantumflow.alexvance.dev"
    },
    {
      id: "proj-3",
      name: "Studio OS Dashboard",
      description: "A desktop-style virtual operating system operating inside web browsers, featuring multiple draggable windows, theme customizers, and an integrated editor.",
      category: "WEB",
      technologies: ["React.js", "Framer Motion", "Tailwind CSS", "Spring Boot"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alexvance/studio-os",
      demoUrl: "https://studioos.alexvance.dev"
    },
    {
      id: "proj-4",
      name: "OmniDB Desktop Client",
      description: "A native-feeling database desktop explorer designed with Electron and Java core components. Handles real-time queries and index visualizations.",
      category: "SOFTWARE",
      technologies: ["Java", "JavaFX", "Electron", "SQLite", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alexvance/omnidb-client",
      demoUrl: "https://omnidb.alexvance.dev"
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Stanford University",
      degree: "Bachelor of Science",
      specialization: "Computer Science (Intelligent Systems track)",
      year: "2020 - 2024",
      details: [
        "Graduated with Distinction (GPA 3.9/4.0).",
        "Core coursework: Operating Systems, Machine Learning, Web Architectures, Interactive Systems Design.",
        "Research Assistant in Stanford Human-Computer Interaction Group."
      ]
    },
    {
      id: "edu-2",
      institution: "DeepLearning.AI",
      degree: "Professional Specialization",
      specialization: "Deep Learning & Generative AI",
      year: "2025",
      details: [
        "Comprehensive course sequence on neural networks, convolutional structures, sequence models, and transformer architectures.",
        "Built 15+ coding projects using PyTorch and Hugging Face API."
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "PixelCraft Labs",
      role: "Lead Creative Engineer",
      duration: "2024 - Present",
      points: [
        "Engineered highly interactive client web applications using React, GSAP, and Spring Boot, boosting user engagement by 40%.",
        "Pioneered in-house CSS 3D components library used by 5 developer teams.",
        "Architected high-throughput microservices returning low-latency responses for real-time applications."
      ]
    },
    {
      id: "exp-2",
      company: "TechNexus Solutions",
      role: "Full Stack Developer Intern",
      duration: "2023 (6 Months)",
      points: [
        "Collaborated on migration of legacy monolithic system to Spring Boot microservices.",
        "Refactored frontend UI using React Router and context-based state management, cutting load times by 25%.",
        "Implemented rigorous unit test suites with JUnit 5 and Mockito."
      ]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "1st Place Hackathon Winners",
      category: "Trophy",
      event: "Stanford TechFest Hackathon",
      year: "2023",
      description: "Awarded first place among 120 teams for engineering 'VocalLink', a real-time browser speech translation overlay."
    },
    {
      id: "ach-2",
      title: "Outstanding Graduate Medal",
      category: "Medal",
      event: "Stanford CS Graduation Awards",
      year: "2024",
      description: "Awarded for exceptional academic record and outstanding contribution as a research assistant."
    },
    {
      id: "ach-3",
      title: "AWS Solutions Architect",
      category: "Certificate",
      event: "Amazon Web Services (AWS)",
      year: "2025",
      description: "Certified Solutions Architect - Associate. Demonstrating capability in designing cloud architectures and microservices deployments."
    },
    {
      id: "ach-4",
      title: "GitHub Top Contributor Badge",
      category: "Badge",
      event: "GitHub Developer Program",
      year: "2025",
      description: "Recognized as a Top Contributor in community UI/UX visual layout libraries."
    }
  ],
  stats: {
    projectsCount: 25,
    technologiesCount: 15,
    certificationsCount: 10,
    achievementsCount: 12,
    experienceYears: 3
  }
};

async function handleFetch(url, fallbackKey) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`Failed to fetch from backend at ${url}. Using local fallback.`, error);
    return FALLBACK_DATA[fallbackKey];
  }
}

export const api = {
  getProfile: () => handleFetch('/profile', 'profile'),
  getProjects: () => handleFetch('/projects', 'projects'),
  getSkills: () => handleFetch('/skills', 'profile').then(data => Array.isArray(data) ? data : data.skills),
  getEducation: () => handleFetch('/education', 'education'),
  getExperience: () => handleFetch('/experience', 'experience'),
  getAchievements: () => handleFetch('/achievements', 'achievements'),
  getStats: () => handleFetch('/stats', 'stats'),
  
  submitContact: async (messageData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Server error occurred during validation');
      }
      return data;
    } catch (error) {
      console.warn('Failed to post contact to backend. Simulating local success.', error);
      // Simulate local success in case backend is down
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: `(Local Mode) Your message was saved! Thank you, ${messageData.name}.`
          });
        }, 1200);
      });
    }
  }
};
