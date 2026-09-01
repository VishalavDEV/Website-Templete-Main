export const creativeData = {
  brand: {
    siteName: "Sasha Grey",
    logoText: "Sasha Grey",
    email: "studio@sashagrey.design",
    phone: "+44 (0) 20 7946 0991",
    location: "London, UK",
    availability: "Available for Q3 collaboration"
  },
  
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Team", path: "/team" },
    {
      label: "Info",
      submenu: [
        { label: "Pricing", path: "/pricing" },
        { label: "Testimonials", path: "/testimonials" }
      ]
    },
    { label: "Contact", path: "/contact" }
  ],
  
  socials: [
    { name: "Twitter", url: "https://twitter.com", icon: "fa-brands fa-twitter" },
    { name: "Facebook", url: "https://facebook.com", icon: "fa-brands fa-facebook-f" },
    { name: "Instagram", url: "https://instagram.com", icon: "fa-brands fa-instagram" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" }
  ],
  
  hero: {
    greeting: "Hi, I'm Sasha Grey!",
    tagline: "Creative Director & Photographer based in London, UK",
    bgImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80"
  },
  
  about: {
    eyebrow: "About Me",
    heading: "Shaping visual narratives through lens and code.",
    intro: "I establish structured branding campaigns, commercial catalog photoshoots, and custom graphic templates that simplify brand discovery.",
    bio: "For over ten years, I have worked as a creative director and lead photographer for visual agencies in Europe. I combine high-end editorial layouts, photographic portrait offsets, and clean digital systems to elevate client campaigns.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    stats: [
      { value: "10", suffix: "+", label: "Years Experience" },
      { value: "180", suffix: "+", label: "Projects Completed" },
      { value: "12", suffix: "", label: "Awards Earned" }
    ],
    ctaText: "Work with us"
  },
  
  services: {
    heading: "Creative Offerings",
    accent: "A comprehensive suite of production resources configured to sustain business brands.",
    packages: [
      {
        name: "Brand Design Strategy",
        desc: "Developing unified typographic guidelines, visual systems, and corporate logos.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Editorial Photography",
        desc: "Full day location photography, digital plates, and print reproduction guidelines.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Interactive Systems",
        desc: "Designing fast, responsive web systems using clean React codebases.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  
  portfolio: [
    {
      id: "gal-1",
      title: "Vesper Rebrand",
      category: "Design",
      tag: "design",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Solstice Studio",
      category: "Portrait",
      tag: "portrait",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Chronos Catalog",
      category: "Commercial",
      tag: "commercial",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    }
  ],
  
  team: [
    {
      name: "Marcus Oswald",
      role: "Visual Designer",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
      socials: [
        { name: "Twitter", url: "https://twitter.com", icon: "fa-brands fa-twitter" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" }
      ]
    },
    {
      name: "Evelyn Oswald",
      role: "Production Lead",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
      socials: [
        { name: "Instagram", url: "https://instagram.com", icon: "fa-brands fa-instagram" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" }
      ]
    }
  ],
  
  pricing: [
    { tier: "Campaign consultation", price: "£450", scope: "2 Hour Campaign Strategy, Branding Audit Blueprint" },
    { tier: "Creative Handoff Suite", price: "£1,250", scope: "Full Brand Design, Custom Mockups, Style Sheets" },
    { tier: "Full-Stack Campaign", price: "£3,800", scope: "Brand Architecture, Photo Shoots, Relational Web Portal" }
  ],
  
  testimonials: [
    { quote: "Sasha Grey brings structural discipline and visual excellence to every project campaign.", author: "Jared Oswald, Apex Studio" },
    { quote: "A phenomenal creative partner. Her React front-ends and campaign frames are state-of-the-art.", author: "Clara Vance, Solstice Tech" }
  ]
};

export const creativeFilters = ["All", "Design", "Portrait", "Commercial"];
export const creativeFilterMapping = {
  "All": "all",
  "Design": "design",
  "Portrait": "portrait",
  "Commercial": "commercial"
};
