export const musicData = {
  brand: {
    name: "CADENZA",
    logoText: "Cadenza Academy",
    tagline: "Inspiring Creative Excellence"
  },
  
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Programs", path: "/programs" },
    { label: "About", path: "/about" },
    { label: "Library", path: "/library" },
    { label: "Contact", path: "/contact" }
  ],

  hero: {
    eyebrow: "MODERNA ACADEMY",
    title: "Shape Your Musical Voice",
    description: "Welcome to Cadenza, where passion meets professional pedagogy. We offer world-class instruction in classical performance, contemporary production, and vocal artistry designed to unleash your unique creative potential.",
    imageSrc: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student practicing grand piano in a sunlit classical hall",
    attribution: "Unsplash Studio",
    ctaText: "Read More",
    ctaLink: "/about"
  },

  highlightsBadge: "Our Mission",
  highlights: [
    {
      icon: "Music",
      title: "Pedagogical Excellence",
      description: "Learn from conservatory-trained musicians and industry veterans who customize curriculum to your speed."
    },
    {
      icon: "Cpu",
      title: "State-of-the-Art Labs",
      description: "Access premium acoustically treated rehearsal suites, high-end synthesizers, and Logic Pro studios."
    },
    {
      icon: "Award",
      title: "Performance Forums",
      description: "Showcase your growth through seasonal recitals, community ensembles, and professional showcases."
    }
  ],

  featureHeader: {
    title: "Curated Learning Systems",
    description: "Our structured educational systems blend classical theory, ear training, and digital synthesis for a well-rounded foundation."
  },
  
  features: [
    {
      title: "Instrument Mastery",
      text: "Rigorous focus on hand posture, expression, advanced articulation, and performance stagecraft across piano, guitar, strings, and brass."
    },
    {
      title: "Ear Training & Harmony",
      text: "Develop absolute or relative pitch recognition, interval analysis, chord progression mapping, and advanced sight-reading capabilities."
    },
    {
      title: "Synthesis & Production",
      text: "Learn multitrack mixing, MIDI sequencing, synthesis, sampling techniques, and digital orchestration in our state-of-the-art DAW lab."
    },
    {
      title: "Creative Composition",
      text: "Explore songwriting frameworks, modal counterpoints, harmonic arrangement, and score writing for visual media like films and games."
    }
  ],

  ctaSection: {
    title: "Ready to Start Your Journey?",
    description: "Schedule a personalized 1-on-1 consultation with our department heads to map your curriculum, assess skill levels, and schedule classes.",
    imageSrc: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    ctaText: "Contact Us",
    ctaLink: "/contact"
  },

  programsSection: {
    title: "Professional Study Programs",
    subtitle: "Explore our immersive courses designed for both aspiring professionals and passionate hobbyists.",
    programs: [
      {
        id: "piano-mastery",
        title: "Classical Piano Mastery",
        description: "Comprehensive study of technique, sight-reading, and historical interpretation from Bach to Rachmaninoff.",
        icon: "Piano",
        duration: "12 Weeks",
        level: "Beginner to Advanced"
      },
      {
        id: "music-production",
        title: "Digital Production & DAW Essentials",
        description: "Master multi-track recording, synthesizers, mixing, and mastering in Logic Pro X or Ableton Live.",
        icon: "Cpu",
        duration: "10 Weeks",
        level: "Intermediate"
      },
      {
        id: "vocal-performance",
        title: "Vocal Artistry & Stage Presence",
        description: "Develop vocal health, pitch accuracy, breathing mechanics, and confidence for studio and live settings.",
        icon: "Mic",
        duration: "8 Weeks",
        level: "All Levels"
      },
      {
        id: "guitar-essentials",
        title: "Acoustic & Electric Guitar",
        description: "Master scales, fingerpicking, rhythm techniques, jazz improvisation, and fretboard music theory.",
        icon: "Guitar",
        duration: "12 Weeks",
        level: "Beginner to Intermediate"
      },
      {
        id: "songwriting-theory",
        title: "Songwriting & Modern Composition",
        description: "Learn lyric structure, melody crafting, harmonic progressions, and arrangement for popular genres.",
        icon: "PenTool",
        duration: "6 Weeks",
        level: "All Levels"
      },
      {
        id: "violin-performance",
        title: "Violin & Orchestral Strings",
        description: "Learn bow control, shift technique, vibrato, and ensemble playing for violin, viola, and cello.",
        icon: "Music",
        duration: "16 Weeks",
        level: "Beginner to Advanced"
      }
    ]
  },

  aboutPage: {
    missionTitle: "Nurturing Artistry, Building Expertise",
    missionText: "Founded on the belief that music education is vital for human expression, Cadenza Academy has spent over a decade training students to find their voice. Our structured classes bridge classical discipline with contemporary digital tools, ensuring our graduates are versatile, creative, and successful in whatever genre they pursue.",
    
    stats: [
      { label: "Enrolled Students", value: "1,800+" },
      { label: "Certified Courses", value: "24" },
      { label: "Expert Instructors", value: "15" },
      { label: "Annual Concerts", value: "8" }
    ],

    teamTitle: "Our Conservatory Directors",
    teamSubtitle: "Meet the professional educators and musicians leading our departments.",
    team: [
      {
        name: "Dr. Evelyn Oswald",
        role: "Department Chair & Piano Director",
        bio: "Conservatory of Vienna graduate with 20+ years of concert hall and academic lecturing experience.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80"
      },
      {
        name: "Marcus Vance",
        role: "Head of Music Production & DAW Lab",
        bio: "Grammy-nominated mix engineer and audio designer specializing in modular synthesis and film scores.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80"
      },
      {
        name: "Sasha Grey",
        role: "Director of Vocal Performance & Choral Studies",
        bio: "Renowned soprano and performance stagecoach dedicated to vocal health and dynamic physical presence.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80"
      }
    ]
  },

  libraryPage: {
    title: "Academy Learning Library",
    subtitle: "Explore our archive of articles, analysis briefs, audio samples, and pedagogical tutorials.",
    categories: ["All", "Articles", "Tutorials", "Guides", "Media"],
    resources: [
      {
        title: "Exploring Jazz Improvisation Scales",
        category: "Articles",
        type: "5 min read",
        date: "Aug 24, 2026",
        description: "An in-depth guide to Dorian and Mixolydian modes, featuring interval charts and practice loops."
      },
      {
        title: "Vocal Warm-Ups for Stage Performance",
        category: "Tutorials",
        type: "10 min video",
        date: "Aug 18, 2026",
        description: "Dr. Grey guides you through breathing patterns, lip trills, and resonance tuning for optimal vocal health."
      },
      {
        title: "Logic Pro X: Synthesis & Sampling 101",
        category: "Guides",
        type: "PDF Guide",
        date: "Jul 30, 2026",
        description: "Learn how to capture acoustic textures and convert them into virtual sampler instruments with Logic."
      },
      {
        title: "Acoustic Guitar Mic Placement Techniques",
        category: "Articles",
        type: "8 min read",
        date: "Jul 15, 2026",
        description: "Comparing XY coincident pair and spaced pair configurations to record organic, rich guitar tracks."
      },
      {
        title: "Cadenza Faculty Recital: Classical Showcase",
        category: "Media",
        type: "Audio Performance",
        date: "Jun 20, 2026",
        description: "Listen to our faculty's rendition of Chopin's Nocturnes and Debussy's Préludes recorded live in our recital hall."
      },
      {
        title: "Understanding Time Signatures & Polyrhythms",
        category: "Tutorials",
        type: "12 min read",
        date: "Jun 05, 2026",
        description: "Break down compound meters and learn how to superimpose 3-against-2 and 4-against-3 rhythms."
      }
    ]
  },

  contactPage: {
    title: "Connect With Our Faculty",
    subtitle: "Have questions about our programs, audition requirements, or scheduling a tour? We'd love to hear from you.",
    phone: "+1 (800) 555-0199",
    email: "admissions@cadenza.edu",
    address: "244 Melodic Way, Soundwave District, CA 94103",
    officeHours: "Monday - Friday, 9:00 AM - 6:00 PM PST",
    socials: [
      { name: "Facebook", link: "#" },
      { name: "Instagram", link: "#" },
      { name: "Twitter", link: "#" },
      { name: "YouTube", link: "#" }
    ]
  }
};
