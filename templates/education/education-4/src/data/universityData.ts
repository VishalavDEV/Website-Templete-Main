import {
  HeroSlide,
  AcademicProgram,
  UniversityEvent,
  NewsItem,
  FacultySpotlight,
  CampusLocation,
  Testimonial,
  UniversityStat,
  Course,
  Teacher,
  PortfolioItem
} from '../types';

export const UNIVERSITY_INFO = {
  name: 'EIKRA',
  tagline: 'Education & Courses WordPress Theme',
  motto: 'Education For Everyone',
  phone: '+61383766284',
  openingHours: 'Mon-Fri 8:00-18:00',
  admissionsEmail: 'admissions@example.com',
  generalEmail: 'info@example.com',
  address: '121 King Street, Melbourne Victoria 3000 Australia',
  socials: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    google: 'https://google.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    headline: 'Best Education Platform For 2026',
    subheadingBox: 'ACCREDITED ACADEMIC EXCELLENCE',
    subtitle: 'Empowering students worldwide with cutting-edge academic curricula, accredited degrees, and flexible online and on-campus programs designed for leadership.',
    primaryCtaText: 'START A COURSE',
    secondaryCtaText: 'APPLY NOW',
    // Student girl with backpack and notebooks in modern library
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    tag: 'Admissions Open for 2026-2027'
  },
  {
    id: 'hero-2',
    headline: 'World-Class STEM & Innovation Labs',
    subheadingBox: 'MODERN RESEARCH & DISCOVERY',
    subtitle: 'Collaborate in state-of-the-art computational clusters, robotic testbeds, and biomedical research centers under distinguished faculty mentorship.',
    primaryCtaText: 'START A COURSE',
    secondaryCtaText: 'EXPLORE MAJORS',
    bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=200&q=80',
    tag: 'Top 1% Global Ranking'
  },
  {
    id: 'hero-3',
    headline: 'Build Your Global Professional Career',
    subheadingBox: 'TRANSFORMATIVE EDUCATION',
    subtitle: 'Transform your passion into professional excellence with certified degrees, international study semesters, and guaranteed enterprise internship placements.',
    primaryCtaText: 'START A COURSE',
    secondaryCtaText: 'CAMPUS TOUR',
    bgImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=85',
    thumbImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=200&q=80',
    tag: '98.4% Career Placement'
  }
];

export const EIKRA_HERO_FEATURES = [
  {
    id: 'feat-scholarship',
    title: 'Scholarship Facility',
    description: 'Empowering ambitious students with comprehensive merit grants and need-based financial aid.',
    iconName: 'GraduationCap',
    bgClass: 'bg-[#132238]/95'
  },
  {
    id: 'feat-certification',
    title: 'Global Certification',
    description: 'Internationally accredited degree pathways recognized across 80+ partner nations.',
    iconName: 'Award',
    bgClass: 'bg-[#182a45]/95'
  },
  {
    id: 'feat-library',
    title: 'Book Library & Store',
    description: '24/7 digital and physical access to over 3.2 million academic texts, journals, and publications.',
    iconName: 'BookOpen',
    bgClass: 'bg-[#132238]/95'
  }
];

export const STUDYPRESS_HIGHLIGHTS = [
  {
    id: 'feat-1',
    title: 'Scholarship Facility',
    description: 'Comprehensive financial aid and merit grant programs for undergraduate and graduate scholars.',
    iconName: 'GraduationCap',
    color: 'bg-[#ffb606]'
  },
  {
    id: 'feat-2',
    title: 'Skilled Lecturers',
    description: 'Learn directly from international researchers, PhD scholars, and industry masters.',
    iconName: 'Users',
    color: 'bg-[#132238]'
  },
  {
    id: 'feat-3',
    title: 'Book Library & Store',
    description: 'Instant 24/7 digital access to 3.2 million journal articles, e-books, and research archives.',
    iconName: 'BookOpen',
    color: 'bg-[#ffb606]'
  },
  {
    id: 'feat-4',
    title: 'Global Certification',
    description: 'Globally recognized degrees endorsed by international education accreditation boards.',
    iconName: 'Award',
    color: 'bg-[#132238]'
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'course-cs-ai',
    title: 'Full-Stack Software Engineering & Applied AI',
    category: 'Computer Science',
    price: '$180',
    originalPrice: '$250',
    rating: 4.9,
    reviewsCount: 342,
    studentsCount: 1420,
    lessonsCount: 36,
    duration: '12 Weeks',
    level: 'All Levels',
    instructor: {
      name: 'Prof. Eleanor Vance, Ph.D.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=200&h=200&q=80',
      title: 'Chair of Artificial Intelligence & Robotics'
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Master modern frontend architectures, Node.js microservices, deep neural networks, and scalable cloud deployments with hands-on capstone builds.',
    featured: true,
    badge: 'Bestseller'
  },
  {
    id: 'course-biomed-genetics',
    title: 'Biomedical Genetics & Clinical Trials',
    category: 'Medical Science',
    price: '$210',
    originalPrice: '$280',
    rating: 4.8,
    reviewsCount: 188,
    studentsCount: 890,
    lessonsCount: 28,
    duration: '10 Weeks',
    level: 'Intermediate',
    instructor: {
      name: 'Dr. Jonathan Hayes, M.D., Ph.D.',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&crop=faces&w=200&h=200&q=80',
      title: 'Professor of Neurobiology & Genomic Medicine'
    },
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    description: 'Deep dive into CRISPR gene editing techniques, immunology pathways, diagnostic pharmacology, and FDA clinical phase trial design.',
    featured: true,
    badge: 'Popular'
  },
  {
    id: 'course-fintech-mba',
    title: 'Executive Financial Management & Fintech',
    category: 'Business & Finance',
    price: '$160',
    originalPrice: '$220',
    rating: 4.9,
    reviewsCount: 260,
    studentsCount: 1150,
    lessonsCount: 30,
    duration: '8 Weeks',
    level: 'Advanced',
    instructor: {
      name: 'Prof. Sophia Rostova, D.Phil.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=200&h=200&q=80',
      title: 'Dean of International Finance & Strategy'
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Learn quantitative asset management, venture capital valuation, ESG investing frameworks, and decentralized finance protocols.',
    featured: true,
    badge: 'Featured'
  },
  {
    id: 'course-uiux-masterclass',
    title: 'Modern UI/UX Product Design & Design Systems',
    category: 'Design & Arts',
    price: '$140',
    originalPrice: '$190',
    rating: 4.7,
    reviewsCount: 410,
    studentsCount: 2200,
    lessonsCount: 42,
    duration: '6 Weeks',
    level: 'Beginner',
    instructor: {
      name: 'Prof. Lucas Montgomery, M.F.A.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=200&h=200&q=80',
      title: 'Professor of Digital Media & Interactive Design'
    },
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    description: 'Build polished user interfaces in Figma, create tokens and comprehensive design systems, conduct user research, and craft mobile app prototypes.',
    featured: false,
    badge: 'Trending'
  },
  {
    id: 'course-cyber-security',
    title: 'Cyber Security Operations & Ethical Hacking',
    category: 'Computer Science',
    price: '$195',
    originalPrice: '$260',
    rating: 4.9,
    reviewsCount: 175,
    studentsCount: 780,
    lessonsCount: 32,
    duration: '10 Weeks',
    level: 'Intermediate',
    instructor: {
      name: 'Prof. Amara Okafor, Ph.D.',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&crop=faces&w=200&h=200&q=80',
      title: 'Head of Quantum Information & Cybersecurity'
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on network vulnerability penetration testing, zero-trust cryptographic defense, incident response orchestration, and cloud hardening.',
    featured: false
  },
  {
    id: 'course-environmental-policy',
    title: 'Climate Science & Renewable Energy Transition',
    category: 'Natural Science',
    price: '$130',
    isFree: false,
    rating: 4.8,
    reviewsCount: 130,
    studentsCount: 640,
    lessonsCount: 24,
    duration: '8 Weeks',
    level: 'All Levels',
    instructor: {
      name: 'Dr. David Kim, Ph.D.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces&w=200&h=200&q=80',
      title: 'Director of Sustainable Architecture & Urban Systems'
    },
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    description: 'Investigate oceanic temperature modeling, solar and wind power storage, carbon credit markets, and municipal environmental policy reforms.',
    featured: false
  }
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'teacher-1',
    name: 'Prof. Eleanor Vance, Ph.D.',
    role: 'Chair of Artificial Intelligence & Robotics',
    department: 'Computing & AI',
    experience: '16+ Years',
    coursesCount: 8,
    studentsCount: '5.2k+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'Ph.D. from MIT CSAIL, former lead AI scientist. Specializes in neural networks, autonomous robotic perception, and human-aligned intelligence.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'eleanor.vance@eikra.edu'
    }
  },
  {
    id: 'teacher-2',
    name: 'Dr. Jonathan Hayes, M.D., Ph.D.',
    role: 'Professor of Neurobiology & Genomic Medicine',
    department: 'Medicine & Health',
    experience: '15+ Years',
    coursesCount: 7,
    studentsCount: '3.9k+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'Senior research physician investigating neurodegenerative disease pathways, RNA therapeutics, and clinical diagnostic technologies with over 130 published papers.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'jonathan.hayes@eikra.edu'
    }
  },
  {
    id: 'teacher-3',
    name: 'Prof. Sophia Rostova, D.Phil.',
    role: 'Dean of International Finance & Strategy',
    department: 'Business & Law',
    experience: '20+ Years',
    coursesCount: 11,
    studentsCount: '6.8k+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'D.Phil. Oxford University. Former international trade advisor to multilateral banks and World Economic Forum delegate on global macroeconomic policy.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'sophia.rostova@eikra.edu'
    }
  },
  {
    id: 'teacher-4',
    name: 'Dr. David Kim, Ph.D.',
    role: 'Director of Sustainable Architecture & Urban Systems',
    department: 'Design & Humanities',
    experience: '12+ Years',
    coursesCount: 6,
    studentsCount: '3.1k+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'Pioneering ecological urbanism, low-carbon bio-materials, and responsive parametric architecture with numerous global design awards.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'david.kim@eikra.edu'
    }
  },
  {
    id: 'teacher-5',
    name: 'Prof. Amara Okafor, Ph.D.',
    role: 'Head of Quantum Information & Cybersecurity',
    department: 'Computing & AI',
    experience: '14+ Years',
    coursesCount: 9,
    studentsCount: '4.2k+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'Ph.D. Cambridge University. Principal investigator on post-quantum cryptographic protocols, secure multi-party computation, and decentralized infrastructure defense.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'amara.okafor@eikra.edu'
    }
  },
  {
    id: 'teacher-6',
    name: 'Dr. Benjamin Sterling, J.D., Ph.D.',
    role: 'Chair of International Law & Tech Ethics',
    department: 'Business & Law',
    experience: '18+ Years',
    coursesCount: 6,
    studentsCount: '3.7k+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'J.D. Harvard Law, Ph.D. Columbia. Internationally recognized authority on transnational digital governance, cross-border privacy treaties, and algorithmic compliance.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'benjamin.sterling@eikra.edu'
    }
  },
  {
    id: 'teacher-7',
    name: 'Dr. Priya Sharma, M.D.',
    role: 'Professor of Oncology & Immunotherapy',
    department: 'Medicine & Health',
    experience: '16+ Years',
    coursesCount: 8,
    studentsCount: '4.5k+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824813689-5353d2d14213?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'Directs the university Cancer Immunology Research Lab, developing targeted CAR-T cell therapies and personalized molecular oncology clinical trials.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'priya.sharma@eikra.edu'
    }
  },
  {
    id: 'teacher-8',
    name: 'Prof. Lucas Montgomery, M.F.A.',
    role: 'Professor of Digital Media & Interactive Design',
    department: 'Design & Humanities',
    experience: '11+ Years',
    coursesCount: 7,
    studentsCount: '3.8k+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces,top&w=800&h=900&q=85',
    bio: 'Former creative technologist and design director for international interactive exhibitions, exploring spatial XR computing and human-centered design systems.',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'lucas.montgomery@eikra.edu'
    }
  }
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Historic Quadrangle Study Sessions',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    description: 'Students collaborating outside the 19th-century gothic archways during autumn semester.'
  },
  {
    id: 'port-2',
    title: 'Annual Commencement Graduation Ceremony',
    category: 'Graduation',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80',
    description: 'Over 3,200 proud undergraduate and graduate students celebrating their degree honors.'
  },
  {
    id: 'port-3',
    title: 'Advanced AI Robotics Testing Lab',
    category: 'Laboratories',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Undergraduates fine-tuning autonomous vision algorithms on high-speed robotic manipulators.'
  },
  {
    id: 'port-4',
    title: 'Varsity Athletics & Rowing Championship',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Modern University crew teams securing regional championship titles on the Charles River.'
  },
  {
    id: 'port-5',
    title: 'Interactive Seminar in Sterling Hall',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic faculty-led case study debates in multimedia lecture amphitheaters.'
  },
  {
    id: 'port-6',
    title: 'International Student Cultural Gala',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Celebrating international diversity across 112 member nations with music, dance, and food.'
  }
];

export const UNIVERSITY_STATS: UniversityStat[] = [
  {
    value: '150+',
    label: 'Popular Courses',
    sublabel: 'Undergraduate, Master & Professional Certificates',
    iconName: 'GraduationCap'
  },
  {
    value: '45+',
    label: 'Qualified Teachers',
    sublabel: 'Top global university scholars & researchers',
    iconName: 'Users'
  },
  {
    value: '12,000+',
    label: 'Enrolled Students',
    sublabel: 'Active learners across 112 countries worldwide',
    iconName: 'Award'
  },
  {
    value: '98.4%',
    label: 'Passing & Success Rate',
    sublabel: 'High employment & graduate school placement',
    iconName: 'Globe'
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'prog-cs-ai',
    title: 'Computer Science & Artificial Intelligence',
    degree: 'Bachelor',
    faculty: 'Engineering & Computing',
    duration: '4 Years',
    credits: 128,
    format: 'On-Campus',
    description: 'Master computational theory, neural networks, distributed systems, and quantum algorithmic design with access to supercomputing clusters.',
    careerPaths: ['AI Research Engineer', 'Full-Stack Architect', 'Robotics Specialist', 'Machine Learning Scientist'],
    tuitionPerSemester: '$14,200',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'prog-biomed',
    title: 'Biomedical Sciences & Genetics',
    degree: 'Bachelor',
    faculty: 'Health & Medical Sciences',
    duration: '4 Years',
    credits: 132,
    format: 'On-Campus',
    description: 'Investigate cellular physiology, molecular immunology, and CRISPR therapeutic applications in newly expanded wet-lab facilities.',
    careerPaths: ['Pre-Med Track', 'Genomic Analyst', 'Pharmaceutical Researcher', 'Clinical Trial Director'],
    tuitionPerSemester: '$14,800',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'prog-fintech-mba',
    title: 'Global Business Administration & Finance',
    degree: 'Master',
    faculty: 'Business & Economics',
    duration: '2 Years',
    credits: 60,
    format: 'Hybrid',
    description: 'Executive training in quantitative asset management, ESG investments, macroeconomic analytics, and venture capital management.',
    careerPaths: ['Investment Banker', 'Corporate Strategy Director', 'Venture Capital Associate', 'Management Consultant'],
    tuitionPerSemester: '$16,500',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'prog-sustainable-arch',
    title: 'Sustainable Architecture & Urban Planning',
    degree: 'Master',
    faculty: 'Arts & Humanities',
    duration: '2 Years',
    credits: 64,
    format: 'On-Campus',
    description: 'Design zero-carbon urban ecosystems, climate-resilient community infrastructure, and biophilic architectural spaces.',
    careerPaths: ['Principal Architect', 'Urban Resilience Planner', 'LEED Design Consultant', 'Municipal Development Lead'],
    tuitionPerSemester: '$13,900',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'prog-data-ethics',
    title: 'International Law & Cyber Governance',
    degree: 'Doctorate',
    faculty: 'Law & Public Policy',
    duration: '3 Years',
    credits: 90,
    format: 'On-Campus',
    description: 'Navigate emerging legal frameworks for autonomous intelligence, global digital trade compliance, intellectual property, and civil rights.',
    careerPaths: ['International Legal Counsel', 'Policy Advisor', 'Federal Regulatory Specialist', 'Human Rights Advocate'],
    tuitionPerSemester: '$15,400',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'prog-climate-env',
    title: 'Environmental Earth Systems & Climate Policy',
    degree: 'Bachelor',
    faculty: 'Natural Sciences',
    duration: '4 Years',
    credits: 126,
    format: 'Hybrid',
    description: 'Combine oceanographic and atmospheric field sampling with satellite geospatial modeling to address climate adaptation challenges.',
    careerPaths: ['Environmental Scientist', 'Renewable Energy Analyst', 'GIS Specialist', 'Conservation Director'],
    tuitionPerSemester: '$13,500',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    featured: true
  }
];

export const UPCOMING_EVENTS: UniversityEvent[] = [
  {
    id: 'event-fall-open-house',
    title: 'Annual Fall Campus Open House & Dean Welcome',
    date: 'OCT 18, 2026',
    month: 'OCT',
    day: '18',
    time: '09:00 AM - 03:30 PM',
    location: 'Great Hall & Central Quad',
    category: 'Admissions',
    description: 'Tour historical lecture halls, meet admissions officers, explore residence suites, and attend sample breakout faculty lectures.',
    speakers: ['Dr. Eleanor Vance', 'Marcus Thorne'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'event-ai-symposium',
    title: 'International Symposium on Ethical AI & Society',
    date: 'NOV 04, 2026',
    month: 'NOV',
    day: '04',
    time: '10:00 AM - 05:00 PM',
    location: 'Science Auditorium B',
    category: 'Academic',
    description: 'A keynote dialogue featuring global leaders from academia, robotics labs, and civic technology institutes discussing transparent algorithms.',
    speakers: ['Prof. Alan Zhao', 'Elena Rostova'],
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'event-career-fair',
    title: 'Global Career & Tech Internship Expo 2026',
    date: 'NOV 15, 2026',
    month: 'NOV',
    day: '15',
    time: '11:00 AM - 04:00 PM',
    location: 'Athletic Pavilion 1',
    category: 'Career',
    description: 'Connect with over 200 premier employers in engineering, finance, biotechnology, creative design, and public policy for summer internships.',
    speakers: ['Fortune 500 Recruiting Panels'],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
  }
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: 'loc-quad',
    name: 'Historic Central Quadrangle',
    category: 'Historic',
    description: 'The green heart of StudyPress University, lined with 19th-century gothic archways, centuries-old oaks, and central gathering lawns for study circles.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Cloistered study walkways', 'Founders bronze sculpture', 'Outdoor amphitheater lawn', 'Wi-Fi enabled seating terraces']
  },
  {
    id: 'loc-library',
    name: 'The Memorial Digital Library',
    category: 'Academic',
    description: 'A sanctuary of learning featuring over 2.4 million physical volumes, silent reading galleries with stained glass, and 24/7 digital research pods.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Rare manuscripts archive', 'Private group study pods', 'Café and media commons', 'VR visualization lab']
  },
  {
    id: 'loc-lab',
    name: 'Applied Science & Discovery Center',
    category: 'Research',
    description: 'A 180,000 sq ft glass and steel complex housing cleanrooms, supercomputing servers, wet labs, and biomedical prototyping studios.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Electron microscopy suite', 'Bioprinting laboratory', 'Robotics testing arena', 'Maker space with 3D printers']
  },
  {
    id: 'loc-residence',
    name: 'Campus Park Residence & Commons',
    category: 'Housing',
    description: 'Modern suite-style residential living featuring communal kitchens, rooftop greenhouse gardens, fitness studios, and academic tutoring centers.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Single & shared suites', 'Dining hall with organic options', 'Yoga & cardio facilities', 'Faculty-in-residence support']
  }
];

export const NEWS_STORIES: NewsItem[] = [
  {
    id: 'news-1',
    title: 'StudyPress Research Team Unveils High-Efficiency Solar Polymer',
    date: 'August 12, 2026',
    category: 'Scientific Breakthrough',
    readTime: '4 min read',
    summary: 'A multidisciplinary team in the Materials Science department has synthesized a flexible, recyclable photovoltaic polymer that achieves 24.8% efficiency.',
    author: 'Office of Communications',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    commentsCount: 14
  },
  {
    id: 'news-2',
    title: 'StudyPress Expands Need-Blind Full Tuition Scholarship Fund',
    date: 'August 05, 2026',
    category: 'Institutional Growth',
    readTime: '3 min read',
    summary: 'A landmark $45M alumni endowment ensures that 100% of admitted domestic and international undergraduate students receive comprehensive grant support.',
    author: 'Presidential Board',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    commentsCount: 28
  },
  {
    id: 'news-3',
    title: 'Varsity Athletics Teams Secure National Championship Gold',
    date: 'July 29, 2026',
    category: 'Campus Athletics',
    readTime: '2 min read',
    summary: 'The University crews and athletic squads took top honors in the national regatta, capping an undefeated season across varsity squads.',
    author: 'Athletics Department',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    commentsCount: 9
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'The collaborative ethos at StudyPress is unmatched. I was able to co-author a peer-reviewed research paper in my sophomore year while launching my startup with university incubator funding.',
    name: 'Sophia Lindqvist',
    classYear: 'Class of 2025',
    major: 'Computer Science & AI',
    roleOrCompany: 'AI Engineer at TechCorp',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'My professors were true mentors who challenged me to think globally. The hybrid seminar model and global exchange semester reshaped my trajectory as an international economist.',
    name: 'Darius Chen',
    classYear: 'Class of 2024',
    major: 'Economics & Policy',
    roleOrCompany: 'Policy Analyst at UN Environmental Fund',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'From state-of-the-art biological wet labs to the vibrant student clubs on the Quad, StudyPress provided the exact foundation for me to excel in medical school.',
    name: 'Amara Okafor',
    classYear: 'Class of 2023',
    major: 'Biomedical Sciences',
    roleOrCompany: 'MD Candidate at Johns Hopkins',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const FACULTY_MEMBERS: FacultySpotlight[] = [
  {
    id: 'fac-1',
    name: 'Dr. Eleanor Vance, Ph.D.',
    role: 'Chair of Quantum Computing & AI',
    department: 'Engineering & Computing',
    credentials: 'Ph.D. MIT • Former Turing Fellow • IEEE Gold Medalist',
    bio: 'Pioneering fault-tolerant quantum algorithms and neural network architectures. Leads the University Autonomous Intelligence Laboratory with $18M in NSF funding.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 142
  },
  {
    id: 'fac-2',
    name: 'Dr. Aris Thorne, M.D., Ph.D.',
    role: 'Director of Genomic Medicine',
    department: 'Health & Medical Sciences',
    credentials: 'M.D. Harvard • Ph.D. Oxford • Lasker Award Recipient',
    bio: 'Specializes in targeted CRISPR gene therapeutics for cardiovascular disorders. Authored over 180 peer-reviewed articles in Nature and Science.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 188
  },
  {
    id: 'fac-3',
    name: 'Prof. Marcus Sterling, D.Phil.',
    role: 'Professor of Global Economics & ESG Strategy',
    department: 'Business & Economics',
    credentials: 'D.Phil. Cambridge • Senior Fellow World Economic Forum',
    bio: 'Advises central banks and sovereign wealth funds on sustainable macroeconomic policy and transition finance in emerging market economies.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 96
  },
  {
    id: 'fac-4',
    name: 'Dr. Helena Rostova, Ph.D.',
    role: 'Dean of Humanities & International Law',
    department: 'Law & Public Policy',
    credentials: 'J.D. Yale • Ph.D. Sorbonne • UN Special Rapporteur',
    bio: 'Expert on international humanitarian law, digital sovereignty, and ethical treaties governing artificial intelligence in civil applications.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 114
  }
];

export const INSTITUTIONAL_RANKINGS = [
  { rank: '#12', category: 'QS World University Rankings', year: '2026' },
  { rank: '#1', category: 'Graduate Career Employability', year: '2026' },
  { rank: '#4', category: 'Global Innovation & Research Impact', year: '2026' },
  { rank: 'Top 5', category: 'Computer Science & AI Programs', year: '2026' }
];
