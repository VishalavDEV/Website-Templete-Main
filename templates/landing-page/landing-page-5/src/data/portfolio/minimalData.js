export const portfolioData = {
  brand: {
    siteName: "Clara Oswald",
    logoText: "CO",
    email: "clara@oswald.design"
  },
  
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" }
  ],
  
  hero: {
    eyebrow: "• DIGITAL ART & PRODUCT DESIGN STUDIO",
    headline: "Designing clean digital interfaces with structural clarity and absolute simplicity.",
    subtext: "Providing visual hierarchies and detailed UX systems for design-driven companies. Guided by editorial grids and generous whitespace.",
    portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    location: "London, UK",
    availability: "Available for select projects",
    credibilityStat: "10+ YRS BUILDING ELEGANT UIs",
    cta: {
      primary: { label: "View Selected Work", href: "#portfolio" },
      secondary: { label: "Get in touch", href: "#contact" }
    }
  },
  
  about: {
    eyebrow: "• BACKSTORY",
    heading: "Visual architect driven by minimalism.",
    storyParagraph1: "My methodology is centered around subtracting noise until only the vital interface structures remain. Spacing is treated as a core component of the layout, giving typography the air it needs to be read effortlessly.",
    storyParagraph2: "Before establishing my studio, I designed interfaces and UI patterns for some of the world's most notable branding houses. Today, I work directly with founders to create clean systems across web, mobile apps, and visual identities.",
    portraitSecondary: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    stats: [
      { value: "10+", label: "Years of Practice" },
      { value: "85+", label: "Product Launches" },
      { value: "0", label: "Superfluous Details" }
    ]
  },
  
  projects: [
    {
      id: "proj-1",
      title: "Cerebral Note App",
      category: "Interface Design",
      tag: "Product",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      description: "A clean, distraction-free markdown writing application focusing on absolute typographic balance and soft editorial column structures.",
      specs: {
        role: "Lead UI Designer",
        client: "Cerebral Tech",
        year: "2035"
      }
    },
    {
      id: "proj-2",
      title: "Nordic Haven Directory",
      category: "Editorial Design",
      tag: "Editorial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "A minimalist digital catalogue cataloguing architectural resorts in Sweden. Curated grid patterns and custom light fonts.",
      specs: {
        role: "Visual Strategist",
        client: "Nordic Haven",
        year: "2034"
      }
    },
    {
      id: "proj-3",
      title: "Monolith Bank Ledger",
      category: "Fintech Systems",
      tag: "Fintech",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Re-imagining visual high-density account ledgers. Removing tabular borders to establish visual groupings using purely spatial typography.",
      specs: {
        role: "System Designer",
        client: "Monolith Ltd",
        year: "2033"
      }
    }
  ],
  
  approach: [
    {
      title: "Spatial Alignment",
      desc: "Treating spacing tokens not as margins, but as visual pillars. Ensuring every elements enjoys at least 24px of breathing space."
    },
    {
      title: "Refined Typography",
      desc: "Restricting layouts to 1-2 thin serif font families. Scaling font weights to establish clear hierarchy without color clutter."
    },
    {
      title: "Structural Code",
      desc: "Translating static Figma blueprints into clean, component-focused React blocks styled with minimal helper classes."
    }
  ],
  
  contact: {
    tagline: "Let's align our parameters. I am currently reviewing projects starting in Q3.",
    socials: [
      { name: "GitHub", url: "https://github.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Twitter", url: "https://twitter.com" }
    ]
  }
};
