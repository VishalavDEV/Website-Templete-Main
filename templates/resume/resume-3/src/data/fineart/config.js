export const siteConfig = {
  studioName: "AURA STUDIO",
  navLinks: [
    { label: "Collections", id: "collections" },
    { label: "Books", id: "books" },
    { label: "Initiatives", id: "initiatives" },
    { label: "Artist", id: "artist" }
  ],
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    vimeo: "https://vimeo.com"
  },
  hero: {
    title: "Chasing the Silent Dialogue of Light",
    subtitle: "A fine art photography studio dedicated to minimalist landscapes, abstract forms, and archival prints.",
    ctaText: "Explore Collections",
    bgImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80"
  },
  collections: [
    {
      title: "Silent Monoliths",
      image: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=800&q=80",
      link: "#collections-monoliths"
    },
    {
      title: "Ephemeral Waters",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      link: "#collections-waters"
    },
    {
      title: "Shadow & Textures",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
      link: "#collections-shadows"
    }
  ],
  featureBlocks: [
    {
      id: "books",
      eyebrow: "VOL I. ARCHIVAL SERIES",
      title: "The Architecture of Solitude",
      description: "A profound exploration of structural isolation in the Nordic landscapes. Captured over three winters, this series captures the quiet tension between concrete forms and blank white tundras.",
      ctaText: "Order Monograph",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      reverse: false,
      theme: "dark"
    },
    {
      id: "initiatives",
      eyebrow: "VOL II. SCULPTING VOID",
      title: "Where Shadows Align",
      description: "An ongoing study of light cast across geometric plaster models in natural morning light. Highlighting how simple gradients of charcoal and cream can transform flat planes into deep spatial dimensions.",
      ctaText: "View Exhibition",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=1200&q=80",
      reverse: true,
      theme: "light"
    }
  ],
  newsletter: {
    heading: "Acquire Archival Prints & Studio Dispatch",
    placeholder: "Your email address",
    buttonText: "Subscribe",
    consentText: "I agree to receive occasional updates and gallery invitations."
  },
  footer: {
    category: "Fine Art Photography",
    links: [
      { label: "FAQs", href: "#faqs" },
      { label: "Inquiries", href: "#inquiries" },
      { label: "Updates", href: "#updates" }
    ]
  }
};
