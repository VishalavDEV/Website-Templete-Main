const BASE_URL = 'http://localhost:8080/api';

// Static fallbacks for standalone client operation
const MOCK_INSTRUCTORS = [
  { id: "inst-1", name: "Dr. Sarah Jenkins", subject: "Artificial Intelligence & ML", experience: "12 Years", coursesCount: 8, rating: 4.9, studentsCount: 14200, image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah", socialLinks: ["twitter", "linkedin", "github"] },
  { id: "inst-2", name: "Prof. Alex Mercer", subject: "Full Stack Web Development", experience: "8 Years", coursesCount: 12, rating: 4.8, studentsCount: 28500, image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex", socialLinks: ["linkedin", "github"] },
  { id: "inst-3", name: "Elena Rostova", subject: "UI/UX & Product Design", experience: "10 Years", coursesCount: 6, rating: 4.9, studentsCount: 9300, image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Elena", socialLinks: ["twitter", "dribbble", "linkedin"] },
  { id: "inst-4", name: "Dr. Alan Mercer", subject: "Advanced Mathematics & Physics", experience: "15 Years", coursesCount: 10, rating: 4.7, studentsCount: 12000, image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alan", socialLinks: ["github"] }
];

const MOCK_COURSES = [
  {
    id: "course-1", title: "React & Framer Motion Masterclass", instructor: "Prof. Alex Mercer", difficulty: "Intermediate", duration: "6 Weeks",
    rating: 4.9, studentsEnrolled: 4500, progress: 72, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80", category: "Web Development",
    description: "Learn to build ultra-premium, interactive interfaces using React and Framer Motion. Master the physics of micro-interactions.",
    curriculum: ["Introduction to React & GSAP", "Framer Motion Basics & Keyframes", "Gestures, Hover & Drag Interactions", "Scroll-Linked and Scroll-Triggered Animations", "Fluid Page Transitions with AnimatePresence", "Premium Capstone Project"],
    outcomes: ["Build highly interactive fluid React UIs", "Understand spring physics and animation curves", "Master page transition layouts", "Integrate Canvas with React"],
    requirements: ["Basic knowledge of HTML, CSS, and JavaScript", "React components and hooks foundation"],
    reviews: [
      { studentName: "David K.", rating: 5.0, comment: "Absolute goldmine. The animations look extremely smooth and professional!", date: "Aug 15, 2026" },
      { studentName: "Sophia L.", rating: 4.8, comment: "Loved the scroll animation module. Highly recommended!", date: "Aug 20, 2026" }
    ],
    stats: { lecturesCount: "24 Lectures", level: "Intermediate", certificateName: "Certified React Animator", language: "English" }
  },
  {
    id: "course-2", title: "Introduction to Machine Learning", instructor: "Dr. Sarah Jenkins", difficulty: "Beginner", duration: "8 Weeks",
    rating: 4.8, studentsEnrolled: 6200, progress: 40, image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80", category: "Artificial Intelligence",
    description: "Explore the fundamental mathematical ideas behind machine learning, linear models, and training algorithms.",
    curriculum: ["What is Machine Learning?", "Supervised vs. Unsupervised Learning", "Linear Regression & Calculus", "Decision Trees & Random Forests", "Evaluating Model Accuracy", "Introduction to Neural Networks"],
    outcomes: ["Understand regression and classification", "Train simple decision tree models in Python", "Understand gradient descent algorithms"],
    requirements: ["Basic high-school algebra", "Elementary Python syntax"],
    reviews: [
      { studentName: "Michael S.", rating: 4.7, comment: "The mathematical concepts are explained visually and intuitively.", date: "Jul 10, 2026" }
    ],
    stats: { lecturesCount: "32 Lectures", level: "Beginner", certificateName: "Machine Learning Associate", language: "English" }
  },
  {
    id: "course-3", title: "Data Visualization with Pandas & NumPy", instructor: "Dr. Sarah Jenkins", difficulty: "Intermediate", duration: "4 Weeks",
    rating: 4.7, studentsEnrolled: 3100, progress: 0, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", category: "Data Science",
    description: "Turn complex tabular data sets into beautiful, insightful chart representations and dashboards.",
    curriculum: ["NumPy Array Manipulations", "Data Cleaning with Pandas DataFrames", "Matplotlib Foundations", "Advanced Plotting with Seaborn", "Interactive Charts with Plotly"],
    outcomes: ["Perform data wrangling operations", "Create charts, heatmaps, and scatter matrices", "Structure data for BI presentations"],
    requirements: ["Python Basics and Basic Statistics knowledge"],
    reviews: [
      { studentName: "Alice P.", rating: 4.9, comment: "Clean instructions, lots of hands-on notebook exercises.", date: "Jun 02, 2026" }
    ],
    stats: { lecturesCount: "18 Lectures", level: "Intermediate", certificateName: "Certified Data Analyst", language: "English" }
  },
  {
    id: "course-4", title: "UI/UX Principles & Premium Prototyping", instructor: "Elena Rostova", difficulty: "Beginner", duration: "5 Weeks",
    rating: 4.9, studentsEnrolled: 5800, progress: 10, image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80", category: "Design",
    description: "Master grid layouts, typography hierarchies, colors, and user psychological flows to create stunning designs.",
    curriculum: ["Design Thinking Process", "Visual Hierarchy and Typography", "The Psychology of Color", "Wireframing to High-Fi Prototyping", "Micro-animations & Component Interaction"],
    outcomes: ["Create clickable, high-fidelity interactive designs", "Conduct usability testing and feedback loops", "Understand responsive design frameworks"],
    requirements: ["No design experience required. Just curiosity!"],
    reviews: [
      { studentName: "Ray T.", rating: 5.0, comment: "Elena teaches design in an elegant, inspiring way. Learned a lot!", date: "Aug 12, 2026" }
    ],
    stats: { lecturesCount: "20 Lectures", level: "Beginner", certificateName: "UI/UX Specialist Certificate", language: "English" }
  },
  {
    id: "course-5", title: "Quantum Mechanics Foundations", instructor: "Dr. Alan Mercer", difficulty: "Advanced", duration: "10 Weeks",
    rating: 4.9, studentsEnrolled: 1500, progress: 0, image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80", category: "Science",
    description: "Deconstruct the core mathematical structures of quantum phenomena, wave functions, and spin mechanics.",
    curriculum: ["Wave-Particle Duality", "The Schrödinger Equation", "Operators & Observables", "Quantum Tunneling", "Quantum Entanglement & Superposition"],
    outcomes: ["Solve basic Schrödinger time-independent equations", "Deconstruct quantum state bra-ket notations", "Formulate basic qubit logic operations"],
    requirements: ["Multivariate Calculus", "Linear Algebra principles"],
    reviews: [
      { studentName: "John H.", rating: 5.0, comment: "Incredibly rigorous. A real university-level explanation.", date: "May 14, 2026" }
    ],
    stats: { lecturesCount: "40 Lectures", level: "Advanced", certificateName: "Quantum Science Specialist", language: "English" }
  },
  {
    id: "course-6", title: "Linear Algebra in Motion", instructor: "Dr. Alan Mercer", difficulty: "Beginner", duration: "6 Weeks",
    rating: 4.8, studentsEnrolled: 2200, progress: 0, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80", category: "Mathematics",
    description: "Visualize matrices, transformations, eigenvectors, and eigenvalues through animated, geometric interpretations.",
    curriculum: ["Vectors: Direction and Scaling", "Linear Transformations and Matrices", "Determinants and Spaces", "Eigenvectors and Eigenvalues", "Singular Value Decomposition (SVD)"],
    outcomes: ["Visualize linear coordinate scaling geometrically", "Compute projections and eigenvalues", "Apply matrix mathematics in computer graphics"],
    requirements: ["Basic High School Math"],
    reviews: [
      { studentName: "Li W.", rating: 4.8, comment: "Geometrical visualizations helped me finally grasp eigenvalues!", date: "Jan 28, 2026" }
    ],
    stats: { lecturesCount: "24 Lectures", level: "Beginner", certificateName: "Applied Linear Algebra Specialist", language: "English" }
  }
];

const MOCK_PROGRAMS = [
  { id: "prog-1", title: "AI & Machine Learning Career Track", description: "From basic statistical models to training deep neural networks and deploying production pipelines.", duration: "6 Months", coursesCount: 8, difficulty: "Advanced", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", stages: ["Mathematics Foundations", "Python & Data Science Stack", "Supervised Learning", "Deep Learning & NLP", "Capstone Project"] },
  { id: "prog-2", title: "Full Stack Development Professional", description: "Become a software engineer capable of constructing responsive frontends and heavy backend service layers.", duration: "5 Months", coursesCount: 12, difficulty: "Intermediate", image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80", stages: ["HTML/CSS/Modern JS", "React Frontend Architecture", "Node & Spring Boot Backends", "Databases & Cloud Deploy", "Industrial Capstone Portfolio"] },
  { id: "prog-3", title: "UI/UX Premium Design Path", description: "Design clean, high-performance UIs, validate interfaces, conduct user research, and build interactive design systems.", duration: "4 Months", coursesCount: 6, difficulty: "Beginner", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80", stages: ["Visual Design Thinking", "Typography & Layouts", "Interactive Prototyping", "User Research & Usability", "Design Systems"] }
];

const MOCK_RESOURCES = [
  { id: "res-1", title: "React Animation Blueprint", category: "E-Books", description: "Comprehensive reference handbook detailing Framer Motion spring parameters, GSAP timelines, and scroll performance tricks.", fileSize: "4.2 MB", format: "PDF", author: "Prof. Alex Mercer" },
  { id: "res-2", title: "Linear Algebra Geometric Cheatsheet", category: "Study Materials", description: "A 10-page visual cheatsheet linking matrix transformations to 2D coordinate system animations.", fileSize: "1.8 MB", format: "PDF", author: "Dr. Alan Mercer" },
  { id: "res-3", title: "Machine Learning Starter Dataset Pack", category: "Practice Tests", description: "Curated CSV files and Jupyter notebooks containing mock regression and classification challenges for learners.", fileSize: "12.5 MB", format: "ZIP", author: "Dr. Sarah Jenkins" },
  { id: "res-4", title: "High-Fi Design System Starter Kit", category: "Projects", description: "Figma starter file structured with component states, light-blue palettes, and micro-interaction documentation.", fileSize: "8.4 MB", format: "ZIP", author: "Elena Rostova" }
];

const MOCK_QUIZ = {
  id: "quiz-1",
  title: "React Animation & UI Physics Challenge",
  category: "Web Development",
  timeLimitSeconds: 120,
  questions: [
    { text: "What hook is used to animate elements inside Framer Motion when they leave the React component tree?", options: ["useExit", "AnimatePresence", "useTransition", "useEffect"], correctAnswerIndex: 1 },
    { text: "Which curve represents a natural physical spring-mass oscillation in Framer Motion?", options: ["tween", "linear", "spring", "inertia"], correctAnswerIndex: 2 },
    { text: "How do you trigger a scroll-linked animation timeline in GSAP?", options: ["ScrollTrigger", "ScrollAnimate", "TimelineScroll", "GSAPScroll"], correctAnswerIndex: 0 },
    { text: "What color is the primary theme palette of our Learning in Motion platform?", options: ["Dark Slate Red", "Purple Violet", "Light Blue + Soft Cyan", "Neon Green"], correctAnswerIndex: 2 }
  ]
};

const MOCK_ACHIEVEMENTS = {
  certificates: [
    { id: "cert-1", courseTitle: "HTML/CSS Layouts Foundations", issueDate: "Jan 12, 2026", credentialUrl: "https://example.com/cert/html-layout" },
    { id: "cert-2", courseTitle: "JavaScript Animation Basics", issueDate: "Mar 22, 2026", credentialUrl: "https://example.com/cert/js-anim" }
  ],
  badges: [
    { id: "badge-1", name: "First Step", description: "Unlocked your first lesson", iconName: "Award", unlockedDate: "Jan 02, 2026", level: "Beginner" },
    { id: "badge-2", name: "Streak Starter", description: "Achieved a 5-day study streak", iconName: "Flame", unlockedDate: "Jan 07, 2026", level: "Explorer" },
    { id: "badge-3", name: "Animation Cadet", description: "Completed JavaScript Animation Basics", iconName: "Zap", unlockedDate: "Mar 22, 2026", level: "Scholar" },
    { id: "badge-4", name: "Code Solver", description: "Successfully finished React Animation Quiz", iconName: "HelpCircle", unlockedDate: "Active", level: "Expert" },
    { id: "badge-5", name: "Motion Master", description: "Earn all badges and score 100% on final project", iconName: "Trophy", unlockedDate: "Locked", level: "Master" }
  ],
  learningStreak: 12,
  completedCoursesCount: 2,
  skillLevel: "Scholar",
  points: 4500
};

const MOCK_DASHBOARD = {
  studentName: "Alex Peterson",
  overallProgress: 72,
  learningStreak: 12,
  completedCoursesCount: 2,
  activeCoursesCount: 2,
  currentCourses: [MOCK_COURSES[0], MOCK_COURSES[1]],
  upcomingLessons: [
    { id: "les-1", courseTitle: "React & Framer Motion Masterclass", topic: "Scroll-Linked and Scroll-Triggered Animations", date: "Today", time: "06:00 PM", instructorName: "Prof. Alex Mercer" },
    { id: "les-2", courseTitle: "Introduction to Machine Learning", topic: "Evaluating Model Accuracy", date: "Tomorrow", time: "04:30 PM", instructorName: "Dr. Sarah Jenkins" }
  ],
  recentBadges: [MOCK_ACHIEVEMENTS.badges[1], MOCK_ACHIEVEMENTS.badges[2]]
};

async function fetchFromBackend(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.json();
  } catch (err) {
    console.warn(`Backend fetch failed for ${endpoint}. Falling back to mock data.`, err);
    throw err;
  }
}

export const api = {
  getCourses: async () => {
    try {
      return await fetchFromBackend('/courses');
    } catch {
      return MOCK_COURSES;
    }
  },
  getCourseById: async (id) => {
    try {
      return await fetchFromBackend(`/courses/${id}`);
    } catch {
      return MOCK_COURSES.find(c => c.id === id) || MOCK_COURSES[0];
    }
  },
  getInstructors: async () => {
    try {
      return await fetchFromBackend('/instructors');
    } catch {
      return MOCK_INSTRUCTORS;
    }
  },
  getPrograms: async () => {
    try {
      return await fetchFromBackend('/programs');
    } catch {
      return MOCK_PROGRAMS;
    }
  },
  getResources: async () => {
    try {
      return await fetchFromBackend('/resources');
    } catch {
      return MOCK_RESOURCES;
    }
  },
  getQuizzes: async () => {
    try {
      return await fetchFromBackend('/quizzes');
    } catch {
      return [MOCK_QUIZ];
    }
  },
  getAchievements: async () => {
    try {
      return await fetchFromBackend('/achievements');
    } catch {
      return MOCK_ACHIEVEMENTS;
    }
  },
  getDashboard: async () => {
    try {
      return await fetchFromBackend('/dashboard');
    } catch {
      return MOCK_DASHBOARD;
    }
  },
  submitContact: async (messageData) => {
    try {
      return await fetchFromBackend('/contact', {
        method: 'POST',
        body: JSON.stringify(messageData)
      });
    } catch {
      return {
        status: 'success',
        message: `Thank you, ${messageData.name}! Your message was successfully received (offline mode).`
      };
    }
  }
};
