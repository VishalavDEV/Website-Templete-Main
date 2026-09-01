const API_BASE_URL = 'http://localhost:8080/api';

// Fallback Mock Data in case Backend is unreachable
const FALLBACK_DATA = {
  services: [
    {
      id: "business-consulting",
      title: "Business Consulting",
      icon: "Briefcase",
      shortDesc: "Navigate market complexities with our expert advisory and operations strategy.",
      longDesc: "Unlock organizational capability and structural alignment. We help companies restructure, optimize management frameworks, identify inefficiencies, and execute robust business model transformations.",
      benefits: ["Increase operational efficiency by 35%", "Identify and capture new market avenues", "Minimize business risks and cost structures"],
      features: ["Operational Audits", "Organizational Design", "Change Management Programs", "Risk Assessment & Mitigation"],
      processSteps: ["Discovery & Analysis", "Custom Strategy Formulation", "Execution & Team Alignment", "Performance Auditing"],
      technologies: ["Microsoft PowerBI", "Miro", "Jira", "Slack"],
      faqs: [
        { question: "What business categories do you consult for?", answer: "We specialize in startups, scale-ups, enterprise technology, and modern digital commerce services." },
        { question: "How long does a standard engagement last?", answer: "Our consulting packages range from 4-week diagnostic sprints to 12-month transformation partnerships." }
      ]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      icon: "Cpu",
      shortDesc: "Reinvent your operating models using modern digital capabilities and architecture.",
      longDesc: "Accelerate your adaptation to the digital age. We evaluate legacy architecture, restructure workflow workflows, and inject smart technological tools directly into the core of your business operations.",
      benefits: ["Transition away from manual bottleneck processes", "Unify operations under modern digital nodes", "Enhance client experiences with automation"],
      features: ["Legacy Architecture Audits", "Cloud Migration Planning", "Operational Redesign", "Custom Integration Mapping"],
      processSteps: ["Technology Assessment", "Architecture Redesign", "Integration Phase", "Team Onboarding & Training"],
      technologies: ["AWS", "Kubernetes", "Docker", "MuleSoft"],
      faqs: [
        { question: "Is digital transformation expensive?", answer: "We design modular strategies that allow phasing of investments, ensuring a high ROI at each step." },
        { question: "How do you handle team resistance to new tools?", answer: "Our package includes comprehensive change-management programs, hands-on training, and documentation." }
      ]
    },
    {
      id: "software-development",
      title: "Software Development",
      icon: "Code",
      shortDesc: "Build secure, scalable, and beautifully designed custom applications.",
      longDesc: "From mobile products to enterprise microservices, our software engineering team designs, develops, and delivers applications that perform flawlessly, scale smoothly, and boast premium user experiences.",
      benefits: ["100% custom-tailored to your exact business logic", "Highly scalable microservice architecture", "Premium, modern UI/UX design"],
      features: ["Custom Web & Mobile Apps", "Microservice Architectures", "API Integrations & Custom SDKs", "Performance Optimization"],
      processSteps: ["UX & Prototype Design", "Agile Development Sprints", "Continuous QA & Test Automation", "Cloud Deployment & Scaling"],
      technologies: ["React.js", "Java Spring Boot", "Node.js", "TypeScript"],
      faqs: [
        { question: "Do we own the source code?", answer: "Absolutely. All intellectual property and source code are transferred to your company upon project completion." },
        { question: "Do you provide post-launch support?", answer: "Yes, we offer ongoing maintenance, optimization, and scaling packages tailored to your user growth." }
      ]
    },
    {
      id: "marketing-solutions",
      title: "Marketing Solutions",
      icon: "Megaphone",
      shortDesc: "Acquire and retain customers through targeted high-impact digital campaigns.",
      longDesc: "Scale your brand visibility. We combine data analysis with creative messaging to construct digital marketing machines that consistently generate high-value leads and convert users.",
      benefits: ["Accelerate lead generation by up to 180%", "Lower customer acquisition costs (CAC)", "Build measurable, scalable marketing funnels"],
      features: ["SEO & Growth Hacking", "Social Media Strategy", "Pay-Per-Click (PPC) Management", "Email Funnel Optimization"],
      processSteps: ["Market & Competitor Research", "Funnel Design & Setup", "Campaign Launches", "A/B Testing & Optimization"],
      technologies: ["Google Analytics", "HubSpot", "Semrush", "Figma"],
      faqs: [
        { question: "How quickly do we see results?", answer: "While PPC and email funnels yield results in weeks, SEO and organic growth strategy typically show exponential returns in 3 to 6 months." },
        { question: "Do you manage advertising budgets?", answer: "Yes, we manage, track, and optimize budgets across Google, Meta, LinkedIn, and programmatic channels." }
      ]
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      icon: "BarChart",
      shortDesc: "Translate raw data points into actionable strategy and predictive business models.",
      longDesc: "Stop guessing and start knowing. We construct real-time data pipelines, design interactive dashboards, and apply statistical modeling to discover trends, optimize operations, and predict customer behavior.",
      benefits: ["Enable data-driven corporate decision making", "Uncover hidden revenue leakage points", "Build automated, custom reporting structures"],
      features: ["Data Pipeline Setup", "Dashboard Development", "Predictive Customer Modeling", "Business Intelligence Audits"],
      processSteps: ["Data Source Audits", "Pipeline Infrastructure Setup", "Dashboard Customization", "Insights Delivery & Handoff"],
      technologies: ["Python", "Tableau", "Snowflake", "dbt"],
      faqs: [
        { question: "Can you connect to our legacy database?", answer: "Yes, we build robust connectors that safely draw data from SQL, NoSQL, ERPs, CRMs, and flat files." },
        { question: "Is data privacy protected?", answer: "We enforce strict security protocols, field-level encryption, and ensure full GDPR/CCPA compliance." }
      ]
    },
    {
      id: "strategy-consulting",
      title: "Strategy Consulting",
      icon: "Compass",
      shortDesc: "Formulate corporate strategies to expand market share and drive innovation.",
      longDesc: "Plan your next decade. We partner with executive teams to analyze industry trends, run competitive intelligence, evaluate M&A options, and structure business plans that unlock explosive growth.",
      benefits: ["Clarify long-term vision and metrics", "Identify disruption threats and defenses", "Position products for maximum market share"],
      features: ["Market Entry Analysis", "M&A Advisory Support", "Product Strategy Mapping", "Innovation Workshop Facilitation"],
      processSteps: ["Industry Analysis & Briefing", "Scenario Planning", "Strategic Alignment Sessions", "Implementation Roadmap"],
      technologies: ["Miro", "Notion", "Tableau", "Teams"],
      faqs: [
        { question: "What types of industries do you strategize for?", answer: "Our core focus lies in technology sectors, financial services, digital commerce, and modern logistics companies." },
        { question: "Do you assist in execution?", answer: "Yes, every strategy we deliver includes a structured milestone-based implementation roadmap." }
      ]
    },
    {
      id: "business-automation",
      title: "Business Automation",
      icon: "Zap",
      shortDesc: "Eliminate repetitive tasks and streamline workflows through custom automation.",
      longDesc: "Save thousands of manual hours. We configure software bots, customize workflow triggers, and integrate system bridges that seamlessly handle data transfers, notifications, and client routing.",
      benefits: ["Save an average of 15 hours per employee/week", "Eliminate human input and data entry errors", "Speed up customer response times by 10x"],
      features: ["Robotic Process Automation (RPA)", "CRM & ERP Integrations", "Auto-Notification Workflows", "Custom API Bridge Construction"],
      processSteps: ["Process Mapping & Audit", "Automation Architecture Design", "Implementation & Trigger Setup", "Maintenance & Scalability Monitoring"],
      technologies: ["Make.com", "Zapier", "n8n", "Python"],
      faqs: [
        { question: "Do we need to write code to manage automations?", answer: "No, we construct visual dashboards and error-alert mechanisms that make monitoring simple." },
        { question: "Will automation replace our staff?", answer: "Automation handles repetitive tasks, freeing your team to focus on high-value creative and relational duties." }
      ]
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      icon: "Cloud",
      shortDesc: "Deploy secure, auto-scaling, and cost-efficient global cloud architectures.",
      longDesc: "Build your business in the cloud. We design and manage serverless applications, orchestrate Kubernetes clusters, and run cloud migration programs that reduce infrastructure expenses.",
      benefits: ["Reduce hosting and server bills by 30-50%", "Ensure enterprise-grade global cybersecurity", "Enable instantaneous auto-scaling capacity"],
      features: ["Serverless Architectures", "Multi-Cloud Migrations", "DevOps & CI/CD Pipelines", "Disaster Recovery Frameworks"],
      processSteps: ["Infrastructure Assessment", "Cloud Architecture Blueprinting", "Zero-Downtime Migration", "24/7 Security Monitoring"],
      technologies: ["AWS", "Google Cloud", "Terraform", "Kubernetes"],
      faqs: [
        { question: "Which cloud provider do you recommend?", answer: "We evaluate your cost targets, geographic needs, and compliance rules to recommend AWS, GCP, or Azure." },
        { question: "How do you ensure zero-downtime migration?", answer: "We employ shadow environments, blue-green deployments, and gradual traffic shifting." }
      ]
    }
  ],
  projects: [
    {
      id: "transforming-finance",
      title: "Next-Gen Digital Banking App",
      category: "Finance",
      description: "A complete digital transformation of an international bank's customer portal.",
      image: "banking_mockup",
      technologies: ["React Native", "Spring Boot", "AWS", "Framer Motion"],
      clientChallenge: "The client, a traditional global financial institution, was losing market share to agile fintech startups due to a slow, outdated mobile application and high transaction times.",
      businessSolution: "We designed and built a modular, serverless digital banking application featuring instant peer-to-peer transfers, AI-driven budget insights, and biometrically secured authorization.",
      implementationProcess: "Using React Native for cross-platform efficiency and Java Spring Boot for high-performance transactions, we migrated user data, integrated microservices, and ran comprehensive security penetration checks.",
      results: ["+140% Mobile Engagement", "99.99% Transaction Uptime", "Under 1.2s Transfer Time"],
      clientTestimonial: "ABC Business's engineering team exceeded expectations. They transformed our customer experience in record time and set a new standard for our core engineering capabilities.",
      clientAuthor: "Sarah Jenkins",
      clientRole: "VP of Digital Products, Apex Capital"
    },
    {
      id: "retail-digital-shift",
      title: "E-Commerce Automation Framework",
      category: "Technology",
      description: "Automated inventory, supply chain routing, and checkout systems for global retail.",
      image: "retail_mockup",
      technologies: ["Node.js", "GraphQL", "Kubernetes", "Next.js"],
      clientChallenge: "A fast-growing direct-to-consumer retail brand struggled with inventory synchronization lag, resulting in overselling and shipping bottlenecks during peak seasons.",
      businessSolution: "We constructed an event-driven automation middleware that synchronized inventory across warehouse systems, local Shopify storefronts, and third-party logistics channels in real time.",
      implementationProcess: "By mapping legacy ERP connections, building API gateways, and deploying on auto-scaling Kubernetes nodes, we built a self-healing pipeline capable of handling 50k requests per minute.",
      results: ["Zero Overselling Incidents", "35% Faster Order Fulfillment", "50% Savings on Hosting Costs"],
      clientTestimonial: "This solution streamlined our entire operational flow. We successfully navigated Black Friday with zero crashes and massive efficiency gains.",
      clientAuthor: "David Chen",
      clientRole: "COO, Vanguard Style"
    },
    {
      id: "ai-predictive-marketing",
      title: "Predictive Analytics Funnel",
      category: "Marketing",
      description: "AI-powered consumer behavior modeling tool for targeted ad campaign spends.",
      image: "marketing_analytics_mockup",
      technologies: ["Python", "TensorFlow", "Snowflake", "React"],
      clientChallenge: "An enterprise software-as-a-service company needed to maximize the ROI of their high-budget advertising campaigns across digital networks by predicting which leads were ready to convert.",
      businessSolution: "We engineered a machine learning predictive analysis pipeline that scores leads, predicts subscription churn risk, and triggers automated personalized discount emails.",
      implementationProcess: "We gathered historical user interaction data into Snowflake, trained a custom classification model, and built an interactive marketing control dashboard.",
      results: ["45% Increase in Ad ROI", "22% Drop in Subscriber Churn", "Lead Scoring in under 500ms"],
      clientTestimonial: "The predictive model proved highly accurate. We stopped wasting budget on cold leads and focused our sales agents on qualified, ready-to-buy targets.",
      clientAuthor: "Elena Rostova",
      clientRole: "Chief Marketing Officer, CloudSync"
    },
    {
      id: "sustainable-supply-chain",
      title: "Logistics Optimization System",
      category: "Consulting",
      description: "Strategic advisory and tracking software implementation for eco-friendly logistics.",
      image: "logistics_mockup",
      technologies: ["Miro", "Tableau", "AWS Lambda", "Go"],
      clientChallenge: "A multinational logistics provider aimed to reduce carbon emissions and vehicle idle times while optimizing dispatch schedules across 500 cities.",
      businessSolution: "Our consulting and engineering teams mapped route algorithms, designed real-time tracking, and established fuel conservation metrics for driver behaviors.",
      implementationProcess: "We ran operational audits, implemented route-optimization software connected to vehicle IoT chips, and delivered employee change management programs.",
      results: ["18% Reduction in Fuel Spend", "80% Route Allocation Accuracy", "30,000 Tons CO2 Saved Annually"],
      clientTestimonial: "Their strategic insights changed the way we manage our global fleet. The carbon savings were matched by massive fuel cost reductions.",
      clientAuthor: "Marcus Vance",
      clientRole: "Director of Logistics, GreenFreight Global"
    },
    {
      id: "healthcare-cloud-migration",
      title: "Secure Cloud Health Portal",
      category: "Technology",
      description: "Migrating patient medical records and data portals into a secure, HIPAA-compliant cloud.",
      image: "healthcare_mockup",
      technologies: ["AWS Security Hub", "Terraform", "Java", "Angular"],
      clientChallenge: "A hospital network needed to migrate records for over 2 million patients to the cloud while maintaining absolute security and satisfying rigorous compliance criteria.",
      businessSolution: "We architected a secure landing zone on AWS, utilizing automated security policies, file encryption, and multi-factor validation portals.",
      implementationProcess: "Using Terraform, we built and deployed secure database infrastructure, structured microservice APIs, and executed a secure data migration process.",
      results: ["100% HIPAA Compliance", "99.9% Migration Integrity", "Zero Patient Care Interruptions"],
      clientTestimonial: "Security is paramount in our field. ABC Business proved they had the enterprise security capabilities and technical architecture to make our cloud migration a success.",
      clientAuthor: "Dr. Amanda Ross",
      clientRole: "Chief Medical Information Officer, UnityHealth"
    },
    {
      id: "corporate-brand-launch",
      title: "Brand Acceleration Launchpad",
      category: "Marketing",
      description: "Visual rebranding and global market introduction strategy for a renewable energy startup.",
      image: "branding_mockup",
      technologies: ["Figma", "Webflow", "After Effects", "Google Ads"],
      clientChallenge: "An innovative hydrogen energy startup lacked a premium, compelling brand identity and digital presence, making it difficult to secure Phase-2 venture capital funding.",
      businessSolution: "We created a futuristic, clean brand identity, generated premium business presentations, and built a highly interactive digital web portal.",
      implementationProcess: "We crafted typography, animations, designed 3D renders, ran target investor marketing campaigns, and optimization strategies.",
      results: ["$40M Venture Capital Secured", "2M Unique Brand Impressions", "98% Positive Investor Feedback"],
      clientTestimonial: "The web portal and rebranding blew our investors away. It successfully conveyed our vision of clean technology and helped us secure our Series B funding.",
      clientAuthor: "Julian Albright",
      clientRole: "CEO, H2Go Systems"
    }
  ],
  team: [
    {
      id: "alex-rivera",
      name: "Alex Rivera",
      role: "CEO & Founder",
      image: "alex_rivera",
      bio: "Ex-Stripe engineering leader and strategy advisor with over 15 years of experience building scalable systems and directing business operations.",
      department: "Executive",
      specialties: ["Corporate Strategy", "Product Innovation", "Venture Capital"],
      socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com", github: "https://github.com" }
    },
    {
      id: "sarah-chen",
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "sarah_chen",
      bio: "PhD in Distributed Systems. Former Principal Architect at AWS with expertise in high-concurrency cloud design and serverless operations.",
      department: "Engineering",
      specialties: ["Cloud Architecture", "Distributed Databases", "Technical Mentorship"],
      socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
    },
    {
      id: "marcus-thompson",
      name: "Marcus Thompson",
      role: "Head of Creative & Design",
      image: "marcus_thompson",
      bio: "Award-winning digital artist and UI/UX designer. Passionate about micro-interactions, motion systems, and crafting memorable brand identities.",
      department: "Creative",
      specialties: ["UI/UX Design", "Motion Graphics", "Brand Identity"],
      socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
    },
    {
      id: "elena-rostova",
      name: "Elena Rostova",
      role: "VP of Growth & Marketing",
      image: "elena_rostova",
      bio: "Growth strategist specializing in B2B SaaS marketing. Over 10 years of experience designing performance marketing engines and scaling lead pipelines.",
      department: "Growth",
      specialties: ["Performance Marketing", "Funnel Optimization", "Data Analytics"],
      socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
    },
    {
      id: "james-patel",
      name: "James Patel",
      role: "Lead Software Architect",
      image: "james_patel",
      bio: "Full-stack engineer specialized in building high-performance microservices and secure transactional systems using Java, Spring, and React.",
      department: "Engineering",
      specialties: ["Java Spring Boot", "React.js", "API Design"],
      socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
    },
    {
      id: "sophia-vance",
      name: "Sophia Vance",
      role: "Director of Strategy Consulting",
      image: "sophia_vance",
      bio: "Former McKinsey consultant. Helps executives clarify business strategies, structure product roadmaps, and implement change programs.",
      department: "Consulting",
      specialties: ["Business Transformation", "Market Research", "M&A Advisory"],
      socials: { linkedin: "https://linkedin.com" }
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Sarah Jenkins",
      company: "Apex Capital",
      role: "VP of Digital Products",
      content: "ABC Business's engineering team exceeded expectations. They transformed our customer experience in record time and set a new standard for our core engineering capabilities.",
      rating: 5,
      avatar: "sarah_jenkins"
    },
    {
      id: "test-2",
      name: "David Chen",
      company: "Vanguard Style",
      role: "COO",
      content: "This solution streamlined our entire operational flow. We successfully navigated Black Friday with zero crashes and massive efficiency gains.",
      rating: 5,
      avatar: "david_chen"
    },
    {
      id: "test-3",
      name: "Elena Rostova",
      company: "CloudSync",
      role: "Chief Marketing Officer",
      content: "The predictive model proved highly accurate. We stopped wasting budget on cold leads and focused our sales agents on qualified, ready-to-buy targets.",
      rating: 5,
      avatar: "elena_rostova"
    },
    {
      id: "test-4",
      name: "Julian Albright",
      company: "H2Go Systems",
      role: "CEO",
      content: "The web portal and rebranding blew our investors away. It successfully conveyed our vision of clean technology and helped us secure our Series B funding.",
      rating: 5,
      avatar: "julian_albright"
    },
    {
      id: "test-5",
      name: "Dr. Amanda Ross",
      company: "UnityHealth",
      role: "Chief Medical Info Officer",
      content: "Security is paramount in our field. ABC Business proved they had the enterprise security capabilities and technical architecture to make our cloud migration a success.",
      rating: 5,
      avatar: "amanda_ross"
    }
  ],
  blogs: [
    {
      id: "future-of-ai-in-business",
      title: "The Future of AI Integration in Modern Enterprise",
      category: "Innovation",
      summary: "How AI is transitioning from simple chatbots to complex core decision-making systems.",
      content: "Artificial intelligence is rapidly progressing beyond basic user support and email copy drafts. Today, modern enterprises are leveraging machine learning to automate complex logistics routes, predict B2B sales cycles, and run real-time security scanning. In this article, we outline the roadmap for integrating intelligent models directly into your company's core software stack, detailing standard pitfalls and architectural guidelines to guarantee performance and compliance.",
      author: "Dr. Sarah Chen",
      authorRole: "CTO",
      date: "Aug 18, 2026",
      readTime: "6 min read",
      image: "ai_blog"
    },
    {
      id: "scaling-react-applications",
      title: "Architecting React Applications for Extreme Scale",
      category: "Technology",
      summary: "A guide to component organization, custom state managers, and fluid animation trees.",
      content: "Building application dashboards that render 100k data points while maintaining smooth 60fps animations requires deep optimization. We cover how to decouple state triggers from UI render trees, maximize performance using React.memo and useMemo, implement lightweight lazy-loading routes, and design animation systems using Framer Motion that won't lag on mobile screens.",
      author: "Marcus Thompson",
      authorRole: "Head of Creative",
      date: "Aug 15, 2026",
      readTime: "8 min read",
      image: "react_blog"
    },
    {
      id: "mastering-spring-boot-apis",
      title: "Building Secure, High-Performance Spring Boot Rest APIs",
      category: "Technology",
      summary: "Best practices for request validation, global exception handlers, and security headers.",
      content: "Rest API architecture represents the backbone of modern web applications. We explore how to configure robust Java Spring Boot servers, enforce field validation annotations, structure clear global exception classes, and configure CORS parameters to prevent cross-origin issues during local and production staging deployments.",
      author: "James Patel",
      authorRole: "Lead Software Architect",
      date: "Aug 10, 2026",
      readTime: "5 min read",
      image: "spring_blog"
    },
    {
      id: "corporate-growth-strategies",
      title: "B2B Growth Sprints: Transitioning from Startup to Scaleup",
      category: "Strategy",
      summary: "How high-growth companies restructure operations and expand market presence.",
      content: "Crossing the scale-up chasm requires shift in focus from product-market fit to repeatable execution engines. We look at standard operational bottlenecks, how to redesign team frameworks, implement automation routines, and organize strategic advisory checkpoints to make sure your organization scales smoothly.",
      author: "Alex Rivera",
      authorRole: "CEO & Founder",
      date: "Aug 05, 2026",
      readTime: "7 min read",
      image: "strategy_blog"
    },
    {
      id: "rebranding-digital-commerce",
      title: "The Direct Impact of UI/UX Motion Design on Sales Funnels",
      category: "Marketing",
      summary: "Why premium micro-interactions and animations convert more web traffic.",
      content: "Modern web users form visual opinions on corporate platforms in less than 200 milliseconds. Simple static templates are ignored. We analyze performance data showing how custom animations, fluid hover feedback, and clear scrolling indicators improve brand trust and directly lead to a 20-30% increase in checkout conversions.",
      author: "Elena Rostova",
      authorRole: "VP of Growth",
      date: "Jul 28, 2026",
      readTime: "5 min read",
      image: "marketing_blog"
    },
    {
      id: "navigating-cloud-costs",
      title: "FinOps Guide: Optimizing Kubernetes & Serverless Budgets",
      category: "Business",
      summary: "Practical methods to analyze and reduce cloud hosting bills without sacrificing server performance.",
      content: "Deploying on global cloud structures guarantees reliability, but cost tracking can quickly run out of control. We break down concrete tactics to monitor AWS/GCP resources, configure auto-scaling rules based on real traffic spikes, delete idle staging servers, and employ serverless microservices to reduce resource billing by up to 40%.",
      author: "Sophia Vance",
      authorRole: "Director of Strategy",
      date: "Jul 22, 2026",
      readTime: "9 min read",
      image: "cloud_blog"
    }
  ]
};

// Helper to make fetch calls with automatic mock data fallbacks
async function apiCall(endpoint, options = {}, fallbackKey) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.warn(`API call failed for ${endpoint}. Falling back to mock dataset. Error:`, error.message);
    
    // Simulate API delay for natural loading states
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (options.method === 'POST') {
      if (endpoint === '/contact') {
        const body = JSON.parse(options.body);
        return {
          status: 'success',
          message: `Thank you, ${body.name || 'User'}! Your message (mock) has been registered. Our staff will email you at ${body.email}.`
        };
      }
      if (endpoint === '/newsletter') {
        const body = JSON.parse(options.body);
        return {
          status: 'success',
          message: `Success! ${body.email} has been subscribed (mock) to our weekly reports.`
        };
      }
    }
    
    // For GET calls, retrieve from our local fallback array
    if (fallbackKey && FALLBACK_DATA[fallbackKey]) {
      const parts = endpoint.split('/');
      const id = parts[parts.length - 1];
      
      // If we are looking for a specific item (e.g. /services/business-consulting)
      if (id && id !== fallbackKey) {
        const item = FALLBACK_DATA[fallbackKey].find(item => item.id === id);
        if (item) return item;
      }
      
      return FALLBACK_DATA[fallbackKey];
    }
    
    throw error;
  }
}

export const apiService = {
  getServices: () => apiCall('/services', {}, 'services'),
  getServiceById: (id) => apiCall(`/services/${id}`, {}, 'services'),
  getProjects: () => apiCall('/projects', {}, 'projects'),
  getProjectById: (id) => apiCall(`/projects/${id}`, {}, 'projects'),
  getTeam: () => apiCall('/team', {}, 'team'),
  getTestimonials: () => apiCall('/testimonials', {}, 'testimonials'),
  getBlogs: () => apiCall('/blogs', {}, 'blogs'),
  
  submitContact: (data) => apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  
  submitNewsletter: (email) => apiCall('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
};
