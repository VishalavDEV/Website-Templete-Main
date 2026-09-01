// Central content database for the Education/Business College template
// Use generic placeholder text and names instead of real trademarks

export const contentData = {
  institution: {
    name: "Apex Business College",
    tagline: "Empowering Next-Generation Leaders",
    shortName: "Apex College",
    logoText: "Apex",
  },
  
  navigation: {
    links: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Our Courses", path: "/courses" },
      { label: "Admissions", path: "/admissions" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Contact Us", path: "/contact" }
    ],
    ctaText: "Enroll Now"
  },

  hero: {
    heading: "Shape Your Future with World-Class Business Education",
    subtext: "Develop the critical thinking, leadership skills, and practical experience needed to thrive in today's fast-paced global economy. Enroll now for the upcoming intake.",
    ctaPrimary: "Explore Our Programs",
    ctaSecondary: "Apply Today",
    imageAlt: "Graduation celebration placeholder",
  },

  features: [
    {
      id: "f1",
      icon: "GraduationCap",
      title: "Accredited Programs",
      description: "Our degree and diploma courses are recognized globally, ensuring your credentials open doors worldwide."
    },
    {
      id: "f2",
      icon: "Users",
      title: "Expert Faculty",
      description: "Learn from industry professionals and researchers dedicated to your academic and career growth."
    },
    {
      id: "f3",
      icon: "TrendingUp",
      title: "Career Placement",
      description: "94% of our graduates secure full-time employment within 6 months of graduation through our partner network."
    },
    {
      id: "f4",
      icon: "Globe",
      title: "Global Community",
      description: "Study alongside international classmates, building a diverse professional network that spans continents."
    },
    {
      id: "f5",
      icon: "Calendar",
      title: "Flexible Learning",
      description: "Choose between full-time, part-time, online, and hybrid schedules tailored to fit your lifestyle."
    },
    {
      id: "f6",
      icon: "Briefcase",
      title: "Practical Internships",
      description: "Gain hands-on corporate experience through integrated internship programs with top-tier firms."
    }
  ],

  sidebarForm: {
    title: "Request Program Details",
    description: "Fill out the form below to receive brochure booklets, eligibility details, and scholarship opportunities.",
    educationLevels: [
      { value: "", label: "Select Education Level" },
      { value: "high-school", label: "High School Diploma / Equivalent" },
      { value: "associate", label: "Associate Degree" },
      { value: "bachelor", label: "Bachelor's Degree" },
      { value: "master", label: "Master's Degree or Higher" }
    ],
    terms: [
      { value: "fall-2026", label: "Fall 2026 (Sept)" },
      { value: "spring-2027", label: "Spring 2027 (Jan)" },
      { value: "summer-2027", label: "Summer 2027 (May)" }
    ]
  },

  testimonials: [
    {
      id: "t1",
      name: "Sarah Jenkins",
      course: "MBA in Strategic Leadership",
      year: "Class of 2025",
      quote: "The practical business simulations and networking events changed my career trajectory. I secured a senior consultant role before graduation.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "t2",
      name: "David Chen",
      course: "BSc in Business Analytics",
      year: "Class of 2024",
      quote: "The faculty here doesn't just teach theory; they bring real corporate problems into the classroom. The project-based learning model is outstanding.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "t3",
      name: "Elena Rostova",
      course: "Diploma in Digital Marketing",
      year: "Class of 2025",
      quote: "As an international student, I felt welcomed from day one. The support staff helped me secure an internship that has now turned into a full-time position.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "t4",
      name: "Marcus Aurelius",
      course: "BBA in International Finance",
      year: "Class of 2023",
      quote: "The curriculum is highly analytical and relevant. The case studies on global market expansions prepared me perfectly for my role in investment banking.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "t5",
      name: "Amina Yusuf",
      course: "MSc in Innovation & Entrepreneurship",
      year: "Class of 2024",
      quote: "The incubator support program allowed me to pitch my business idea to actual venture capitalists. Apex gave me the skills and confidence to launch my startup.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  ],

  courses: [
    {
      id: "c1",
      code: "BUS-101",
      title: "Bachelor of Business Administration (BBA)",
      department: "Management",
      duration: "4 Years",
      level: "Undergraduate",
      description: "A comprehensive foundation in marketing, human resources, operations, and organizational leadership designed to build versatile corporate executives."
    },
    {
      id: "c2",
      code: "ANA-302",
      title: "BSc in Business Data Analytics",
      department: "Technology",
      duration: "4 Years",
      level: "Undergraduate",
      description: "Learn to translate big data into business intelligence. Covers SQL, Python, data visualization, and statistical modeling for modern corporate decision-making."
    },
    {
      id: "c3",
      code: "MBA-501",
      title: "Master of Business Administration (MBA)",
      department: "Management",
      duration: "2 Years (Flexible)",
      level: "Graduate",
      description: "Our flagship program for mid-career professionals looking to transition into executive roles. Emphasizes global strategy, ethics, and leadership."
    },
    {
      id: "c4",
      code: "FIN-204",
      title: "BBA in International Finance",
      department: "Finance",
      duration: "4 Years",
      level: "Undergraduate",
      description: "Focuses on global capital markets, investment analysis, asset management, and risk management in a highly connected global ecosystem."
    },
    {
      id: "c5",
      code: "MKT-411",
      title: "Diploma in Digital Strategy & Marketing",
      department: "Marketing",
      duration: "1 Year",
      level: "Diploma",
      description: "A fast-track professional diploma focusing on SEO, content marketing, paid search advertising, brand architecture, and social media analytics."
    },
    {
      id: "c6",
      code: "ENT-508",
      title: "MSc in Corporate Innovation & Startup Venture",
      department: "Management",
      duration: "18 Months",
      level: "Graduate",
      description: "Designed for aspiring startup founders and intrapreneurs. Focuses on lean methodologies, product design, VC fundraising, and scaling operations."
    }
  ],

  about: {
    mission: "To inspire, educate, and empower diverse learners to lead with integrity, innovate with purpose, and drive positive economic change globally.",
    vision: "To be recognized as a premier global hub for experiential business education and entrepreneurial development.",
    values: [
      { name: "Academic Excellence", text: "Providing rigorous, relevant curricula designed for real-world application." },
      { name: "Inclusive Leadership", text: "Fostering an environment that values diverse perspectives and ethical leadership." },
      { name: "Entrepreneurial Spirit", text: "Encouraging experimentation, creative problem-solving, and continuous growth." }
    ],
    stats: [
      { value: "94%", label: "Employment Rate" },
      { value: "50+", label: "Corporate Partners" },
      { value: "4,200+", label: "Active Students" },
      { value: "18+", label: "Average Class Size" }
    ],
    faculty: [
      {
        name: "Dr. Arthur Pendelton",
        title: "Dean of Management Studies",
        bio: "Former Managing Director at Apex Consulting, with 20+ years of corporate strategy experience.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
      },
      {
        name: "Prof. Clara Higgins",
        title: "Head of Digital Marketing",
        bio: "Renowned author on digital brand architectures and active advisor to tech startups.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Rajeev Nair",
        title: "Professor of Financial Systems",
        bio: "Ph.D. in Quantitative Finance; specializes in derivative markets and algorithmic trading systems.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
      }
    ]
  },

  admissions: {
    intro: "Applying to Apex Business College is straightforward. We evaluate applications holistically, looking for scholastic ability, leadership potential, and diversity of thought.",
    timeline: [
      {
        step: "1",
        title: "Choose Your Program",
        description: "Review our course catalog, attend an information session, or speak with an admissions counselor to choose your course."
      },
      {
        step: "2",
        title: "Submit Enrollment Request",
        description: "Fill out the online lead form. Our team will send the full application package including documentation guidelines."
      },
      {
        step: "3",
        title: "Provide Documents",
        description: "Submit transcripts, statement of purpose, references, and proof of English proficiency (if applicable)."
      },
      {
        step: "4",
        title: "Admissions Interview",
        description: "Shortlisted candidates are invited for a 20-minute interview (virtual or in-person) with the program director."
      },
      {
        step: "5",
        title: "Official Decision & Deposit",
        description: "Successful applicants receive an offer letter. Secure your seat by paying the term deposit before the intake deadline."
      }
    ]
  },

  contact: {
    address: "100 Academic Parkway, Suite 500, Metro City, MC 90210",
    email: "admissions@apex-business-college.edu",
    phone: "+1 (555) 234-5678",
    hours: "Monday - Friday: 8:30 AM - 6:00 PM (EST)",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
      { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
      { name: "Instagram", url: "https://instagram.com", icon: "Instagram" }
    ]
  }
};
