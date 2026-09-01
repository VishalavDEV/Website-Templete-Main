const API_BASE_URL = 'http://localhost:8085/api';

// High-quality local mock data in case the Spring Boot server is not running
const FALLBACK_DATA = {
  services: [
    {
      id: "srv-1",
      title: "Business Consulting",
      description: "Guide your leadership team through complex organizational decisions, mergers, market entries, and risk management.",
      iconName: "Briefcase",
      category: "Consulting",
      longDescription: "Our advisory services empower executives with market insights, organizational restructuring plans, and feasibility analyses. We help streamline operational efficiency and navigate volatile market landscapes with data-backed business models.",
      benefits: ["Strategic Market Feasibility Analysis", "Corporate Restructuring & Integration", "Risk Management & Regulatory Compliance", "Executive Advisory & Leadership Alignment"]
    },
    {
      id: "srv-2",
      title: "Digital Transformation",
      description: "Transition legacy infrastructures to agile, cloud-native workflows that improve productivity and collaboration.",
      iconName: "Cpu",
      category: "Technology",
      longDescription: "Leverage the power of cutting-edge technology to automate workflows, migrate legacy storage, and digitize customer touchpoints. We help minimize manual process overhead and maximize collaboration efficiency.",
      benefits: ["Legacy Infrastructure Audits", "Cloud Transition & Scalability Roadmap", "Workflow Automation Integrations", "Digital Workspace & Tools Migration"]
    },
    {
      id: "srv-3",
      title: "Technology Solutions",
      description: "Architect, build, and deploy custom enterprise web applications, mobile apps, and microservice APIs.",
      iconName: "Code2",
      category: "Technology",
      longDescription: "We engineer custom application ecosystems designed to scale dynamically under load. From custom SaaS dashboards to robust REST APIs, our code bases are modular, thoroughly tested, and future-proof.",
      benefits: ["Custom Full-Stack Web & Mobile Apps", "Scalable Microservice Architecture", "API Engineering & Systems Integration", "Secure Infrastructure Engineering"]
    },
    {
      id: "srv-4",
      title: "Marketing & Branding",
      description: "Position your brand as an industry leader through modern visual design systems, copywriting, and campaigns.",
      iconName: "Sparkles",
      category: "Marketing",
      longDescription: "We construct coherent brand stories across digital and print footprints. Through targeted campaign assets, modern typography, cohesive color systems, and digital marketing strategies, we make your message unforgettable.",
      benefits: ["Visual Identity Design & Guidelines", "Cross-Platform Digital Ad Campaigns", "High-Converting Copywriting Strategy", "Social Media Placement & Growth"]
    },
    {
      id: "srv-5",
      title: "Business Analytics",
      description: "Convert raw metrics into real-time visual dashboards that drive revenue forecasting and customer insights.",
      iconName: "BarChart3",
      category: "Finance",
      longDescription: "Harness data streams to isolate bottleneck activities. We integrate BI reporting, predictive modeling pipelines, and user event tracking tools to translate raw interaction numbers into actionable conversion metrics.",
      benefits: ["Interactive BI Dashboard Engineering", "Predictive Customer Retention Modeling", "A/B Testing Framework Integration", "Data Flow Pipeline Architecture"]
    },
    {
      id: "srv-6",
      title: "Growth Strategy",
      description: "Identify untapped markets and design low-customer-acquisition-cost strategies to double conversion rates.",
      iconName: "TrendingUp",
      category: "Startup",
      longDescription: "Launch new product offerings, find product-market fit, and establish scalable distribution pipelines. We focus on conversion rate optimization, organic search presence (SEO), and low-friction onboarding funnels.",
      benefits: ["Product-Market Fit & Ideation Workshops", "Growth Funnel Optimization Audits", "Organic SEO & Content Authority Strategy", "High-Yield Acquisition Pipelines"]
    }
  ],
  projects: [
    {
      id: "prj-1",
      title: "Apex Fintech Suite",
      category: "Finance",
      description: "A secure cloud portal handling high-volume transactions for venture-backed startups.",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      client: "Apex Global Ltd.",
      year: "2025",
      technologies: ["React", "Spring Boot", "AWS", "Docker"],
      challenge: "Apex needed a low-latency gateway that complied with strict PCI-DSS regulations while offering a simple API for SaaS clients.",
      solution: "We delivered a microservices-based API gateway with an interactive dashboard built on top of glassmorphism UI principles, lowering average transaction delay to under 45ms."
    },
    {
      id: "prj-2",
      title: "Nova Brand Campaign",
      category: "Marketing",
      description: "A full digital rebranding scheme that increased lead volume by 120% in three quarters.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      client: "Nova Space Corp.",
      year: "2024",
      technologies: ["Framer Motion", "Figma", "Webflow", "SEO"],
      challenge: "Nova was struggling to capture the attention of Gen Z enterprise software buyers with their legacy corporate identity.",
      solution: "We refreshed their color palette using vibrant gradients, modernized their message focus, and launched a multi-channel interactive ad campaign that went viral on LinkedIn."
    },
    {
      id: "prj-3",
      title: "Stratos SaaS Launch",
      category: "Startup",
      description: "Designed and developed a sleek cloud storage portal from MVP definition to market exit.",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
      client: "Stratos Inc.",
      year: "2025",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      challenge: "Stratos wanted to compete with major file hosting giants by offering military-grade file encryption in a single click.",
      solution: "We engineered an end-to-end encrypted file sharing app with real-time websocket synchronization, helping them acquire 100k users in their first month."
    },
    {
      id: "prj-4",
      title: "Alpha Advisory Audit",
      category: "Consulting",
      description: "Restructured internal support processes for a multi-national logistics company.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      client: "Alpha Logistics Europe",
      year: "2024",
      technologies: ["BI Analytics", "Jira", "Process Mapping", "SQL"],
      challenge: "Alpha was losing millions due to delays in communication between their cargo sorting hubs and regional offices.",
      solution: "We analyzed their communication pipelines, replaced obsolete email updates with automatic status dashboards, and trained 450+ employees on agile operations."
    },
    {
      id: "prj-5",
      title: "Quantum Engine",
      category: "Technology",
      description: "An enterprise server-side compiler optimization tool for high-performance computing.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      client: "Quantum Tech Labs",
      year: "2025",
      technologies: ["Java 21", "Kubernetes", "gRPC", "Prometheus"],
      challenge: "High computation costs were draining Quantum's operating budget during heavy machine learning model compilations.",
      solution: "We rewrote their parsing pipeline in Java 21 using virtual threads (Project Loom), cutting server CPU utilization by 40% under peak load conditions."
    },
    {
      id: "prj-6",
      title: "Beta Retail Analytics",
      category: "Consulting",
      description: "Created a real-time buyer analytics tool for 45 retail stores across the country.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      client: "Beta Merchandisers",
      year: "2025",
      technologies: ["Python", "React", "Tableau API", "Docker"],
      challenge: "Store managers lacked real-time visibility into checkout speeds and popular stock trends, leading to inventory surpluses.",
      solution: "We built interactive data dashboards that refreshed hourly, linking cash register inputs directly to supplier delivery forecasts."
    }
  ],
  testimonials: [
    {
      id: "tst-1",
      clientName: "Sarah Jenkins",
      company: "CEO at Nova Space Corp.",
      rating: 5,
      comment: "Working with this agency completely transformed our business metrics. Our digital presence has never looked so premium, and our lead volume literally doubled inside of six months.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: "tst-2",
      clientName: "Marcus Chen",
      company: "CTO at Apex Global Ltd.",
      rating: 5,
      comment: "The engineering precision they delivered on our transaction platform was exceptional. They didn't just write code; they optimized our architecture to scale. Highly recommended.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: "tst-3",
      clientName: "Sophia Rodriguez",
      company: "VP of Growth at Stratos Inc.",
      rating: 5,
      comment: "Their user-centric design approach and rapid execution allowed us to beat our competitors to market. The light orange branding system is highly engaging and received praise from our investors.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: "tst-4",
      clientName: "David Foster",
      company: "Operations Manager at Alpha Logistics",
      rating: 4,
      comment: "The process restructuring they advised us on eliminated dozens of unnecessary email threads. Operation workflows are much smoother now, and we have real-time progress charts.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ],
  team: [
    {
      id: "tm-1",
      name: "Elena Vance",
      role: "Founder & CEO",
      bio: "Former strategy director with 15+ years of experience helping Fortune 500 companies adopt agile business models.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80",
      socialLinks: { linkedin: "https://linkedin.com", twitter: "https://twitter.com", github: "https://github.com" }
    },
    {
      id: "tm-2",
      name: "Dr. Liam Kincaid",
      role: "Chief Technology Officer",
      bio: "Systems architect and software veteran. Passionate about Java microservice speed, security, and cloud scalability.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
      socialLinks: { linkedin: "https://linkedin.com", github: "https://github.com" }
    },
    {
      id: "tm-3",
      name: "Naomi Sterling",
      role: "Head of Brand Design",
      bio: "Award-winning designer obsessed with responsive layouts, typography, CSS animations, and interactive interfaces.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
      socialLinks: { linkedin: "https://linkedin.com", dribbble: "https://dribbble.com" }
    },
    {
      id: "tm-4",
      name: "Amir Al-Jamil",
      role: "Lead Business Analyst",
      bio: "Data scientist focused on turning checkout metrics and customer support logs into interactive business intelligence dashboards.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
      socialLinks: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
    }
  ],
  faq: [
    {
      id: "faq-1",
      question: "What services do you provide?",
      answer: "We offer a complete suite of services including strategy consulting, custom application development, digital transformation, brand positioning, marketing campaign creation, and interactive business analytics.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "How do you work with businesses?",
      answer: "We begin with a discovery phase to review your business bottlenecks, design custom solutions in Figma/architecture maps, develop components in rapid iterations, and run continuous testing before launch.",
      category: "Process"
    },
    {
      id: "faq-3",
      question: "How long does a project take?",
      answer: "An MVP development or visual rebranding usually takes 4-8 weeks, while full enterprise transformations, microservices integrations, and comprehensive analytics setups can take 3-6 months.",
      category: "Timeline"
    },
    {
      id: "faq-4",
      question: "Do you provide customized solutions?",
      answer: "Yes, we do not believe in templates. Every user interface is customized using vanilla styling systems, and every backend API is tailored specifically to your data formats and volume requirements.",
      category: "General"
    },
    {
      id: "faq-5",
      question: "How can I start a project?",
      answer: "Simply fill out our interactive contact form, select your requested service tier, and one of our client leads will follow up within 24 hours to schedule an introductory workshop.",
      category: "Process"
    }
  ]
};

export const fetchServices = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.warn("Backend API not reachable. Using fallback services data.", error);
    return FALLBACK_DATA.services;
  }
};

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.warn("Backend API not reachable. Using fallback projects data.", error);
    return FALLBACK_DATA.projects;
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.warn("Backend API not reachable. Using fallback testimonials data.", error);
    return FALLBACK_DATA.testimonials;
  }
};

export const fetchTeam = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/team`);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.warn("Backend API not reachable. Using fallback team data.", error);
    return FALLBACK_DATA.team;
  }
};

export const fetchFaqs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/faq`);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.warn("Backend API not reachable. Using fallback faq data.", error);
    return FALLBACK_DATA.faq;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }
    return data;
  } catch (error) {
    console.warn("Backend API not reachable. Simulating form submission locally.", error);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (!formData.fullName || !formData.email || !formData.message) {
      throw new Error("Full name, email, and message are required fields.");
    }
    
    return {
      status: "success",
      message: `[Simulated] Thank you, ${formData.fullName}! Your inquiry regarding '${formData.service || "General"}' has been simulated successfully.`
    };
  }
};
