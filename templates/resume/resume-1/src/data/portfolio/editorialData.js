export const editorialData = {
  brand: {
    siteName: "Evelyn Oswald",
    logoText: "Evelyn Oswald",
    email: "evelyn@oswald.support",
    phone: "+1 (312) 555-0143",
    location: "Chicago, IL",
    availability: "Available for Q3 onboarding"
  },
  
  navigation: [
    { label: "Home", target: "home" },
    { label: "Services", target: "services" },
    { label: "About", target: "about" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" }
  ],
  
  socials: [
    { name: "Twitter", icon: "fa-brands fa-twitter", url: "https://twitter.com" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com" },
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com" }
  ],
  
  hero: {
    scriptTitle: "Sophisticated Support",
    mainSubtitle: "Your Right Hand in Business Success",
    supportingParagraph: "I help executive founders, operations directors, and fast-scaling corporate teams manage server configurations, design project directories, and audit visual brand templates.",
    ctaPrimary: "Work with us",
    ctaSecondary: "My Services",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85" // Tall rounded card portrait
  },
  
  services: {
    heading: "Services & Packages",
    accent: "Tailored operations structures designed to create administrative clarity.",
    packages: [
      {
        name: "Operations Suite",
        price: "$1,200",
        period: "month",
        featured: false,
        features: [
          "Calendar & Inbox Management",
          "Document & Directory Structuring",
          "5 Standard Support Nodes",
          "Weekly Telemetry Review"
        ],
        ctaText: "Select Package"
      },
      {
        name: "Executive Partner",
        price: "$2,800",
        period: "month",
        featured: true, // MIDDLE Tier Emphasized
        features: [
          "Priority 24/7 Channel Link",
          "Travel & Itinerary Auditing",
          "15 Comprehensive Support Nodes",
          "Monthly Performance Logs",
          "Custom Database Provisioning"
        ],
        ctaText: "Work With Us"
      },
      {
        name: "Corporate Anchor",
        price: "$4,500",
        period: "month",
        featured: false,
        features: [
          "Dedicated Operations Assistant",
          "Database Mappings Audits",
          "Unlimited Support Nodes",
          "Bi-Weekly Strategy Syncs",
          "Custom Dashboard Setups"
        ],
        ctaText: "Select Package"
      }
    ]
  },
  
  about: {
    eyebrow: "About",
    heading: "Your Executive Partner",
    bio: "For over ten years, I have configured administrative workflows and calendar channels for corporate startup teams. I believe that operations systems shouldn't feel cluttered—they should provide structural frameworks that allow founders to focus entirely on growth vectors.",
    stats: [
      { value: "10", suffix: "+", label: "Years Experience" },
      { value: "98", suffix: "%", label: "Client Satisfaction" },
      { value: "15", suffix: "m", label: "Response Rate" }
    ],
    ctaText: "Book a Call",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85"
  },
  
  experience: {
    heading: "Work & Education",
    circularPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    work: [
      {
        role: "Senior Executive Assistant",
        company: "Vesper Systems Inc.",
        dates: "2032 — Present",
        description: "Coordinating calendar schedules, travel itineraries, and email priorities for the CEO and board stakeholders."
      },
      {
        role: "Operations Coordinator",
        company: "Apex Design Studio",
        dates: "2029 — 2032",
        description: "Re-structured file directories, project databases, and managed contractor invoicing pipelines."
      }
    ],
    education: [
      {
        degree: "B.S. in Business Administration",
        institution: "University of Chicago",
        dates: "2025 — 2029",
        description: "Specialized in operational management and organizational structures."
      },
      {
        degree: "Executive Assistant Certification",
        institution: "IAAP Org",
        dates: "2030",
        description: "Advanced certification covering modern database management and corporate travel logistics."
      }
    ]
  },
  
  skills: {
    heading: "Skills & Expertise",
    list: [
      { label: "Inbox Architecture" },
      { label: "Calendar Auditing" },
      { label: "Travel Logistics" },
      { label: "Database Mappings" },
      { label: "Client Relations" },
      { label: "Workflow Automation" },
      { label: "Project Coordination" },
      { label: "Document Control" }
    ]
  },
  
  testimonials: {
    quote: "Behind every successful business is a reliable executive virtual assistant who translates complexity into daily operational clarity.",
    author: "Jared Vance, Founder of Vesper Systems"
  }
};
