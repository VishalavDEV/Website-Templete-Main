export const gradientData = {
  brand: {
    siteName: "Jared Vance",
    logoText: "JV",
    email: "jared@vance.agency",
    phone: "+1 (415) 555-0198",
    location: "Brooklyn, NY",
    availability: "Available for design strategy"
  },
  
  navigation: [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" }
  ],
  
  socials: [
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com" },
    { name: "GitHub", icon: "Github", url: "https://github.com" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" }
  ],
  
  hero: {
    greeting: "Hey, I'm a",
    title: "Creative Director",
    tagline: "Great design should feel invisible.",
    supportingDesc: "I build high-impact typography alignments, structural brand systems, and custom visual templates that simplify user decisions.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85", // Dramatic portrait photo
    expertiseTags: [
      { num: "#01", label: "Brand Strategy" },
      { num: "#02", label: "Brand Identity Design" },
      { num: "#03", label: "Packaging Design" },
      { num: "#04", label: "Creative Direction" }
    ]
  },
  
  logoStrip: {
    label: "Trusted by Brands I've Helped Shape",
    logos: [
      { name: "Verge", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80" },
      { name: "Apex", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=100&q=80" },
      { name: "Vortex", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&q=80" },
      { name: "Quant", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80" }
    ]
  },
  
  about: {
    eyebrow: "Behind the Designs",
    heading: "Shaping Experiences That Make Life Simpler",
    philosophy: "I establish structured layout alignments that bridge design vision and product implementation. My approach centers on extreme typographic scales, diagonal layout offsets, and vibrant color systems.",
    supportingParagraph: "With over ten years of industry work in design studios, I partner with companies to create distinct identities. Design is not just aesthetic decoration—it is a functional blueprint that guides customer scale choices.",
    ctaText: "Get in touch"
  },
  
  projects: [
    {
      id: "proj-1",
      title: "Vesper Identity",
      category: "Branding",
      tag: "branding",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "A complete visual rebrand for Vesper smart systems, using bold orange block frames and custom font alignments.",
      specs: {
        client: "Vesper Labs",
        role: "Creative Director",
        year: "2035"
      }
    },
    {
      id: "proj-2",
      title: "Solstice Catalog",
      category: "Packaging",
      tag: "packaging",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Packaging system and catalogs for Solstice cosmetics. Focuses on recycled card wraps, minimal borders, and bold labels.",
      specs: {
        client: "Solstice Corp",
        role: "Lead Designer",
        year: "2034"
      }
    },
    {
      id: "proj-3",
      title: "Chronos Portal",
      category: "Interactive",
      tag: "interactive",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "Custom web platform design highlighting bold serif typography layouts and diagonal content containers.",
      specs: {
        client: "Chronos Media",
        role: "Interface Architect",
        year: "2033"
      }
    }
  ],
  
  contact: {
    heading: "Let's build a distinct system.",
    prompt: "I partner with high-growth startups and creative agencies. Write down your requirements.",
    socials: [
      { name: "Twitter", url: "https://twitter.com", icon: "fa-brands fa-twitter" },
      { name: "GitHub", url: "https://github.com", icon: "fa-brands fa-github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" }
    ]
  }
};

export const projectFilters = ["All", "Branding", "Packaging", "Interactive"];
export const filterMapping = {
  "All": "all",
  "Branding": "branding",
  "Packaging": "packaging",
  "Interactive": "interactive"
};
export const SOCIAL_FA_MAP = {
  Twitter: "fa-brands fa-twitter",
  GitHub: "fa-brands fa-github",
  LinkedIn: "fa-brands fa-linkedin-in"
};
