/**
 * content.js — Central data source for the University Campus Website template.
 * All displayed text, links, images, and config are sourced from this file.
 * No real institution names or trademarks are used.
 */

// ─── Site Info ───────────────────────────────────────────────────────────────
export const siteInfo = {
  institutionName: 'Westridge University',
  tagline: 'Excellence in Education Since 1892',
  shortName: 'WRU',
  address: '14 University Avenue, Academic City, AC 10045',
  phone: '+1 (800) 555-0199',
  email: 'admissions@westridge.edu',
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM',
  mapEmbedPlaceholder: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.006%2C40.7128%2C-73.996%2C40.7228&layer=mapnik',
};

// ─── Language Options ────────────────────────────────────────────────────────
export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
];

// ─── Navigation Links ────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Events', path: '/events' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Pages', path: '/pages' },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '/contact' },
];

// ─── Hero Slides (Carousel) ──────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    image: 'assets/hero-1.webp',
    alt: 'Students collaborating in a modern university library',
  },
  {
    id: 2,
    image: 'assets/hero-2.webp',
    alt: 'A lecturer presenting to a full lecture hall',
  },
  {
    id: 3,
    image: 'assets/hero-3.webp',
    alt: 'University campus courtyard on a sunny day',
  },
];

// ─── Hero Info Panels ────────────────────────────────────────────────────────
export const heroPanels = [
  {
    id: 1,
    variant: 'dark',
    heading: 'Shape Your Future',
    description:
      'Discover over 200 undergraduate and postgraduate programmes designed to prepare you for the careers of tomorrow.',
    cta: { label: 'Explore Programmes', path: '/courses' },
  },
  {
    id: 2,
    variant: 'accent',
    heading: 'Apply for 2025 Intake',
    description:
      'Applications are now open. Secure your place at one of the region\'s leading research universities.',
    cta: { label: 'Apply Now', path: '/contact' },
  },
  {
    id: 3,
    variant: 'light',
    heading: 'World-Class Faculty',
    description:
      'Learn from over 400 internationally recognised academics, researchers, and industry practitioners.',
    cta: { label: 'Meet Our Faculty', path: '/pages' },
  },
];

// ─── Stats Bar ───────────────────────────────────────────────────────────────
export const statsData = [
  { id: 1, value: '24,000+', label: 'Enrolled Students' },
  { id: 2, value: '200+', label: 'Programmes Offered' },
  { id: 3, value: '95%', label: 'Graduate Employment' },
  { id: 4, value: '130', label: 'Years of Excellence' },
];

// ─── Categories / Departments ────────────────────────────────────────────────
export const categories = [
  { id: 'business', label: 'Business', icon: 'Briefcase' },
  { id: 'economics', label: 'Economics', icon: 'TrendingUp' },
  { id: 'mathematics', label: 'Mathematics', icon: 'Calculator' },
  { id: 'science', label: 'Science', icon: 'FlaskConical' },
  { id: 'engineering', label: 'Engineering', icon: 'Cpu' },
  { id: 'arts', label: 'Arts & Humanities', icon: 'Palette' },
  { id: 'law', label: 'Law', icon: 'Scale' },
  { id: 'medicine', label: 'Medicine', icon: 'Stethoscope' },
  { id: 'technology', label: 'Technology', icon: 'Monitor' },
  { id: 'education', label: 'Education', icon: 'BookOpen' },
  { id: 'psychology', label: 'Psychology', icon: 'Brain' },
  { id: 'architecture', label: 'Architecture', icon: 'Building2' },
];

// ─── Course Filter Options ───────────────────────────────────────────────────
export const courseFilterOptions = [
  { value: 'id', label: 'Search by ID' },
  { value: 'name', label: 'Search by Name' },
];

// ─── Courses ─────────────────────────────────────────────────────────────────
export const courses = [
  {
    id: 'BUS101',
    title: 'Introduction to Business Management',
    category: 'business',
    instructor: 'Prof. A. Richardson',
    duration: '12 Weeks',
    price: 1200,
    badge: 'Popular',
    description: 'A comprehensive introduction to core business principles, strategy, and organisational behaviour.',
    image: 'assets/course-business.webp',
  },
  {
    id: 'ECO201',
    title: 'Microeconomics & Market Theory',
    category: 'economics',
    instructor: 'Dr. S. Nakamura',
    duration: '10 Weeks',
    price: 1050,
    badge: 'New',
    description: 'Analyse consumer behaviour, market structures, and price mechanisms with real-world case studies.',
    image: 'assets/course-economics.webp',
  },
  {
    id: 'MTH301',
    title: 'Advanced Calculus & Linear Algebra',
    category: 'mathematics',
    instructor: 'Prof. L. Okonkwo',
    duration: '14 Weeks',
    price: 900,
    badge: null,
    description: 'Rigorous treatment of multivariable calculus, matrix theory, and their applications in science.',
    image: 'assets/course-math.webp',
  },
  {
    id: 'SCI110',
    title: 'Foundations of Physics',
    category: 'science',
    instructor: 'Dr. M. Patel',
    duration: '12 Weeks',
    price: 980,
    badge: 'Popular',
    description: 'Classical mechanics, thermodynamics, and an introduction to quantum phenomena.',
    image: 'assets/course-science.webp',
  },
  {
    id: 'ENG220',
    title: 'Electrical Engineering Fundamentals',
    category: 'engineering',
    instructor: 'Prof. T. Bergmann',
    duration: '16 Weeks',
    price: 1350,
    badge: null,
    description: 'Circuit analysis, electromagnetism, and digital systems for aspiring electrical engineers.',
    image: 'assets/course-engineering.webp',
  },
  {
    id: 'ART150',
    title: 'History of Western Art',
    category: 'arts',
    instructor: 'Dr. C. Lefèvre',
    duration: '8 Weeks',
    price: 750,
    badge: 'New',
    description: 'From the Renaissance to contemporary movements — a survey of artistic traditions and cultural contexts.',
    image: 'assets/course-arts.webp',
  },
  {
    id: 'LAW101',
    title: 'Introduction to Constitutional Law',
    category: 'law',
    instructor: 'Prof. R. Osei',
    duration: '10 Weeks',
    price: 1100,
    badge: null,
    description: 'Fundamental principles of constitutional governance, rights, and judicial review.',
    image: 'assets/course-law.webp',
  },
  {
    id: 'TEC301',
    title: 'Full-Stack Web Development',
    category: 'technology',
    instructor: 'Dr. J. Kim',
    duration: '20 Weeks',
    price: 1800,
    badge: 'Popular',
    description: 'Build modern web applications with React, Node.js, and cloud deployment pipelines.',
    image: 'assets/course-tech.webp',
  },
];

// ─── Events ──────────────────────────────────────────────────────────────────
export const events = [
  {
    id: 1,
    date: '2025-09-05',
    title: 'Open Day — Autumn 2025',
    description: 'Tour the campus, meet faculty, and learn about our programmes. All prospective students welcome.',
    location: 'Main Campus, Grand Hall',
    category: 'Open Day',
  },
  {
    id: 2,
    date: '2025-09-18',
    title: 'Annual Research Symposium',
    description: 'A two-day showcase of cutting-edge research from postgraduate students and faculty across all departments.',
    location: 'Science & Innovation Centre',
    category: 'Academic',
  },
  {
    id: 3,
    date: '2025-10-02',
    title: 'Careers & Internship Fair',
    description: 'Connect with 80+ employers, explore graduate schemes, and secure internships for 2026.',
    location: 'Sports & Events Complex',
    category: 'Careers',
  },
  {
    id: 4,
    date: '2025-10-14',
    title: 'Alumni Networking Evening',
    description: 'An exclusive evening for graduates to reconnect, share experiences, and mentor current students.',
    location: 'Founders\' Hall',
    category: 'Networking',
  },
  {
    id: 5,
    date: '2025-11-01',
    title: 'International Student Welcome Week',
    description: 'Cultural exchange events, city tours, and orientation sessions for new international students.',
    location: 'International House',
    category: 'Social',
  },
  {
    id: 6,
    date: '2025-11-20',
    title: 'Winter Graduation Ceremony',
    description: 'Celebrating the achievements of the graduating class of 2025. Families welcome.',
    location: 'University Auditorium',
    category: 'Ceremony',
  },
];

// ─── Dashboard ───────────────────────────────────────────────────────────────
export const dashboardStats = [
  { id: 1, label: 'Enrolled Courses', value: 4, icon: 'BookOpen', color: 'primary' },
  { id: 2, label: 'Assignments Due', value: 7, icon: 'ClipboardList', color: 'accent' },
  { id: 3, label: 'Average Grade', value: '82%', icon: 'Award', color: 'success' },
  { id: 4, label: 'Messages', value: 12, icon: 'MessageSquare', color: 'info' },
];

export const recentActivity = [
  { id: 1, type: 'submission', text: 'Submitted Assignment 3 — BUS101', time: '2 hours ago' },
  { id: 2, type: 'grade', text: 'Grade released for MTH301 Quiz 2 — 88%', time: '5 hours ago' },
  { id: 3, type: 'announcement', text: 'New announcement posted in ECO201', time: 'Yesterday' },
  { id: 4, type: 'event', text: 'Registered for Careers Fair 2025', time: '2 days ago' },
  { id: 5, type: 'submission', text: 'Submitted Lab Report — SCI110', time: '3 days ago' },
];

export const enrolledCourses = [
  { id: 'BUS101', title: 'Introduction to Business Management', progress: 72, nextDeadline: 'Sep 12 — Essay Draft' },
  { id: 'ECO201', title: 'Microeconomics & Market Theory', progress: 45, nextDeadline: 'Sep 15 — Problem Set 3' },
  { id: 'MTH301', title: 'Advanced Calculus & Linear Algebra', progress: 60, nextDeadline: 'Sep 10 — Quiz 3' },
  { id: 'SCI110', title: 'Foundations of Physics', progress: 88, nextDeadline: 'Sep 18 — Lab Report' },
];

// ─── Products / Shop ─────────────────────────────────────────────────────────
export const products = [
  { id: 1, title: 'WRU Crest Hoodie', price: 45.00, badge: 'Bestseller', image: 'assets/shop-hoodie.webp' },
  { id: 2, title: 'Campus Tote Bag', price: 18.00, badge: null, image: 'assets/shop-tote.webp' },
  { id: 3, title: 'Academic Planner 2025', price: 12.00, badge: 'New', image: 'assets/shop-planner.webp' },
  { id: 4, title: 'WRU Branded Mug', price: 14.00, badge: null, image: 'assets/shop-mug.webp' },
  { id: 5, title: 'University Polo Shirt', price: 35.00, badge: null, image: 'assets/shop-polo.webp' },
  { id: 6, title: 'Research Compendium Vol. 4', price: 28.00, badge: 'New', image: 'assets/shop-book.webp' },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote: 'Westridge gave me the tools, the network, and the confidence to launch my own firm within two years of graduating.',
    name: 'Amara D.',
    role: 'MBA Graduate, Class of 2022',
    avatar: 'assets/avatar-1.webp',
  },
  {
    id: 2,
    quote: 'The research facilities here are world-class. I published two papers before finishing my Master\'s degree.',
    name: 'Daniel K.',
    role: 'MSc Physics, Class of 2023',
    avatar: 'assets/avatar-2.webp',
  },
  {
    id: 3,
    quote: 'An incredibly supportive environment for international students. I felt at home from day one.',
    name: 'Mei-Ling T.',
    role: 'LLB Law, Class of 2024',
    avatar: 'assets/avatar-3.webp',
  },
];

// ─── FAQ / Pages ─────────────────────────────────────────────────────────────
export const faqItems = [
  {
    id: 1,
    question: 'How do I apply for admission?',
    answer: 'You can apply online through our Admissions Portal. Applications open in October for the following academic year. Check our Contact page for guidance.',
  },
  {
    id: 2,
    question: 'Are scholarships available for international students?',
    answer: 'Yes. We offer merit-based and need-based scholarships for qualifying international students. Visit the Scholarships section of our website or contact admissions.',
  },
  {
    id: 3,
    question: 'What is the average class size?',
    answer: 'Undergraduate lectures typically have 80–150 students, while seminars and tutorials are kept to 15–25 for a more personalised experience.',
  },
  {
    id: 4,
    question: 'Is on-campus accommodation available?',
    answer: 'Yes. We have four residential halls on campus. First-year and international students are given priority. Applications open in January.',
  },
  {
    id: 5,
    question: 'Can I study part-time?',
    answer: 'Many of our postgraduate programmes are available in part-time mode, allowing you to balance study with work or family commitments.',
  },
];

export const aboutBlocks = [
  {
    id: 1,
    heading: 'Our Mission',
    body: 'To cultivate intellectual curiosity, foster innovation, and produce graduates who make a positive impact on society and industry worldwide.',
  },
  {
    id: 2,
    heading: 'Our Vision',
    body: 'To be recognised globally as a leader in interdisciplinary research, inclusive education, and community engagement.',
  },
  {
    id: 3,
    heading: 'Our Values',
    body: 'Integrity, excellence, inclusivity, collaboration, and a relentless commitment to the pursuit of knowledge.',
  },
];

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footerLinks = [
  {
    heading: 'Academics',
    links: [
      { label: 'Undergraduate', path: '/courses' },
      { label: 'Postgraduate', path: '/courses' },
      { label: 'Online Learning', path: '/courses' },
      { label: 'Research', path: '/pages' },
    ],
  },
  {
    heading: 'Campus Life',
    links: [
      { label: 'Events', path: '/events' },
      { label: 'Student Union', path: '/pages' },
      { label: 'Sports & Clubs', path: '/pages' },
      { label: 'Accommodation', path: '/pages' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Library', path: '/pages' },
      { label: 'IT Support', path: '/pages' },
      { label: 'Career Services', path: '/pages' },
      { label: 'Alumni Network', path: '/pages' },
    ],
  },
];

export const socialLinks = [
  { platform: 'Twitter', icon: 'Twitter', url: '#' },
  { platform: 'Facebook', icon: 'Facebook', url: '#' },
  { platform: 'Instagram', icon: 'Instagram', url: '#' },
  { platform: 'LinkedIn', icon: 'Linkedin', url: '#' },
  { platform: 'YouTube', icon: 'Youtube', url: '#' },
];
