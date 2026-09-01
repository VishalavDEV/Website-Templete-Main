export const estatePrimeData = {
  hero: {
    title: "EXCEPTIONAL HOMES",
    subtitle: "Find a place worth calling home.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
  },
  agents: [
    {
      name: "Marcus Vance",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      name: "Evelyn Croft",
      role: "Senior Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80"
    }
  ],
  properties: [
    {
      id: "ep-1",
      title: "The Grand Crest Villa",
      price: "₹4.85 Crore",
      rawPrice: 48500000,
      location: "Whitefield, Bengaluru",
      city: "Bengaluru",
      state: "Karnataka",
      propertyType: "Villa",
      bedrooms: 5,
      beds: 5, // Backward compatibility
      bathrooms: 6,
      baths: 6, // Backward compatibility
      area: "6,200 sq.ft",
      rawArea: 6200,
      status: "For Sale",
      description: "An architectural masterpiece showcasing seamless indoor-outdoor living, complete with a private pool and panoramic canyon views in Whitefield's premier gated community.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["Infinity Pool", "Wine Cellar", "Home Cinema", "Smart Home Automation"],
      features: ["Infinity Pool", "Wine Cellar", "Home Cinema", "Smart Home Automation"], // Backward compatibility
      agent: {
        name: "Marcus Vance",
        role: "Managing Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "ep-2",
      title: "Aura Waters Estate",
      price: "₹3.20 Crore",
      rawPrice: 32000000,
      location: "Sarjapur Road, Bengaluru",
      city: "Bengaluru",
      state: "Karnataka",
      propertyType: "Estate",
      bedrooms: 4,
      beds: 4.5,
      bathrooms: 5,
      baths: 4.5,
      area: "4,500 sq.ft",
      rawArea: 4500,
      status: "For Sale",
      description: "Stunning private estate offering lush green perimeter views, custom marble finishes, open skylights, and state-of-the-art security features.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["Skylight Roof", "Marble Bathrooms", "Wrap-around Deck", "Chef's Kitchen"],
      features: ["Skylight Roof", "Marble Bathrooms", "Wrap-around Deck", "Chef's Kitchen"],
      agent: {
        name: "Evelyn Croft",
        role: "Senior Partner",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "ep-3",
      title: "Zenith Ridge House",
      price: "₹2.65 Crore",
      rawPrice: 26500000,
      location: "Indiranagar, Bengaluru",
      city: "Bengaluru",
      state: "Karnataka",
      propertyType: "Villa",
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
      baths: 3,
      area: "3,800 sq.ft",
      rawArea: 3800,
      status: "New Listing",
      description: "A mid-century modern jewel nestled in Indiranagar, featuring organic teak wood details, smart voice controls, and rooftop garden deck.",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      featured: false,
      amenities: ["Solar Backup", "Teak Wood Ceilings", "Smart Automation", "Panoramic Patio"],
      features: ["Solar Backup", "Teak Wood Ceilings", "Smart Automation", "Panoramic Patio"],
      agent: {
        name: "Evelyn Croft",
        role: "Senior Partner",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80"
      }
    }
  ],
  interiors: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
  ],
  testimonials: [
    {
      client: "The Harrison Family",
      text: "Estate Prime delivered an exceptional, tailored home buying experience. Their level of professionalism and eye for design is unmatched.",
      role: "Homeowners in Indiranagar"
    }
  ]
};
