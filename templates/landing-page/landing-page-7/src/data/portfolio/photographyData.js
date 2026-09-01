export const photographyData = {
  brand: {
    siteName: "Sasha Grey",
    logoText: "Sasha Grey",
    email: "studio@sashagrey.co",
    phone: "+44 (0) 20 7946 0958",
    location: "London, UK",
    availability: "Booking Autumn editorials"
  },
  
  navigation: [
    { label: "Home", path: "/templates/portfolio/photography-portfolio" },
    { label: "About", path: "/templates/portfolio/photography-portfolio/about" },
    { label: "Resume", path: "/templates/portfolio/photography-portfolio/resume" },
    { label: "Services", path: "/templates/portfolio/photography-portfolio/services" },
    { label: "Portfolio", path: "/templates/portfolio/photography-portfolio/portfolio" },
    {
      label: "Info",
      submenu: [
        { label: "Pricing", path: "/templates/portfolio/photography-portfolio/pricing" },
        { label: "Testimonials", path: "/templates/portfolio/photography-portfolio/testimonials" }
      ]
    },
    { label: "Contact", path: "/templates/portfolio/photography-portfolio/contact" }
  ],
  
  socials: [
    { name: "Twitter", url: "https://twitter.com", icon: "fa-brands fa-twitter" },
    { name: "Facebook", url: "https://facebook.com", icon: "fa-brands fa-facebook-f" },
    { name: "Instagram", url: "https://instagram.com", icon: "fa-brands fa-instagram" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" }
  ],
  
  hero: {
    title: "Sasha Grey",
    subheading: "Portrait & Editorial Photographer — London, UK",
    bgImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80"
  },
  
  about: {
    eyebrow: "About Me",
    heading: "Capturing the Silent Spaces In-Between",
    intro: "I establish stark, high-contrast monochrome frames that convey the quiet authority of editorial structures and minimal visual storytelling.",
    bio: "For over twelve years, I have worked as a fashion director and portrait designer across major studios in London and Paris. I build photography campaigns that discard distractions to focus entirely on structural form, shadow overlays, and raw posture angles.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    stats: [
      { value: "12", suffix: "+", label: "Years in Studio" },
      { value: "320", suffix: "+", label: "Shoots Completed" },
      { value: "15", suffix: "", label: "Awards Earned" }
    ]
  },
  
  resume: {
    heading: "Experience & Education",
    circularPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    work: [
      {
        role: "Editorial Fashion Photographer",
        company: "Vogue Paris / London Studio",
        dates: "2031 — Present",
        description: "Capturing front-cover spreads and layout features focusing on minimal backdrops and high-contrast styling."
      },
      {
        role: "Portrait Consultant",
        company: "Apex Creative Agency",
        dates: "2027 — 2031",
        description: "Coordinated commercial profile portraits, studio lighting setups, and post-production contrast mappings."
      }
    ],
    education: [
      {
        degree: "M.A. in Fine Art Photography",
        institution: "Royal College of Art, London",
        dates: "2024 — 2026",
        description: "Focused on structural darkroom printing and architectural portrait offsets."
      },
      {
        degree: "B.A. in Visual Arts",
        institution: "Paris College of Art",
        dates: "2020 — 2024",
        description: "Specialized in classic camera functions and black-and-white developing techniques."
      }
    ],
    skills: [
      { label: "Medium Format Cameras", value: 95 },
      { label: "Darkroom Development", value: 85 },
      { label: "Contrast Correction", value: 90 },
      { label: "Studio Light Systems", value: 95 }
    ]
  },
  
  services: {
    heading: "Creative Offerings",
    accent: "Monochrome documentation suites configured to preserve structural detail.",
    packages: [
      {
        name: "Editorial Spread",
        desc: "Full fashion lookbooks, clothing catalogs, and magazine spreads using stark, minimal shadows.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Fine Art Portrait",
        desc: "Individual profile silhouettes, creative portfolios, and headshots mapping dramatic studio lighting.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Commercial Brand",
        desc: "Product catalogs, structural designs, and brand architectural previews focused on high contrast.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  
  portfolio: [
    {
      id: "gal-1",
      title: "Shadow Profile",
      category: "Portrait",
      tag: "portrait",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Vesper Drape",
      category: "Fashion",
      tag: "fashion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Apex Structural",
      category: "Commercial",
      tag: "commercial",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Chronos Contrast",
      category: "Editorial",
      tag: "editorial",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    }
  ],
  
  pricing: [
    { tier: "Session Node", price: "£650", scope: "3 Hour Session, 15 High-Res Digital Plates" },
    { tier: "Editorial Spread", price: "£1,400", scope: "Full Day Session, Studio/Location, 35 High-Res Plates" },
    { tier: "Campaign Anchor", price: "£3,200", scope: "Multi-Day, Full Print Rights, 80 plates with Custom Contrast Mappings" }
  ],
  
  testimonials: [
    { quote: "Sasha Grey understands the architectural weight of shadows. Her frames are silent but intensely confident.", author: "Jared Vance, Vogue Paris" },
    { quote: "A master of stark, minimal contrast portraits. She strips away color to reveal true character.", author: "Marcus Vance, Apex Gallery" }
  ]
};

export const galleryFilters = ["All", "Portrait", "Fashion", "Commercial", "Editorial"];
export const galleryFilterMapping = {
  "All": "all",
  "Portrait": "portrait",
  "Fashion": "fashion",
  "Commercial": "commercial",
  "Editorial": "editorial"
};
