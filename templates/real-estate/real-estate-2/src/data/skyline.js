export const skylineData = {
  hero: {
    title: "SKYLINE COLLECTIVE",
    subtitle: "High-altitude architectural landmarks designed for metropolitan living.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    buildingDetails: {
      name: "The Helix Tower",
      floors: [
        { floor: 25, unit: "Penthouse A", price: "₹6.20 Crore", status: "Available", sqft: "4,500 sq.ft", beds: 4, baths: 4.5 },
        { floor: 22, unit: "Condo 2202", price: "₹2.85 Crore", status: "Available", sqft: "2,200 sq.ft", beds: 2, baths: 2 },
        { floor: 20, unit: "Condo 2004", price: "₹2.10 Crore", status: "Sold", sqft: "1,850 sq.ft", beds: 2, baths: 2 },
        { floor: 18, unit: "Condo 1801", price: "₹3.40 Crore", status: "Available", sqft: "2,800 sq.ft", beds: 3, baths: 3 },
        { floor: 15, unit: "Condo 1505", price: "₹1.65 Crore", status: "Sold", sqft: "1,400 sq.ft", beds: 1, baths: 1.5 },
        { floor: 12, unit: "Condo 1202", price: "₹1.48 Crore", status: "Available", sqft: "1,350 sq.ft", beds: 1, baths: 1.5 }
      ]
    }
  },
  agents: [
    {
      name: "Ethan Vance",
      role: "Portfolio Director",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      name: "Celine Laurent",
      role: "Acquisitions Expert",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500&q=80"
    }
  ],
  properties: [
    {
      id: "sc-1",
      title: "The Vertex Penthouse",
      price: "₹6.20 Crore",
      rawPrice: 62000000,
      location: "Golf Course Road, Gurgaon",
      city: "Gurgaon",
      state: "Haryana",
      propertyType: "Penthouse",
      bedrooms: 4,
      beds: 4,
      bathrooms: 5,
      baths: 4.5,
      area: "4,500 sq.ft",
      rawArea: 4500,
      status: "For Sale",
      description: "A dual-level penthouse at the crest of Tower One, offering complete 360-degree views, absolute security, and private sky lobby over Golf Course Road.",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["Private Sky Deck", "360 Panoramic Views", "24/7 Concierge", "Private Elevator Access"],
      agent: {
        name: "Ethan Vance",
        role: "Portfolio Director",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "sc-2",
      title: "Horizon Duplex Flat",
      price: "₹3.40 Crore",
      rawPrice: 34000000,
      location: "Sector 54, Gurgaon",
      city: "Gurgaon",
      state: "Haryana",
      propertyType: "Duplex",
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
      baths: 3,
      area: "2,800 sq.ft",
      rawArea: 2800,
      status: "For Sale",
      description: "Sleek duplex flat with soaring 20ft double-height living room, glass balustrades, private plunge pool, and automatic temperature zones.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["Double Height Ceiling", "Plunge Pool", "Dual-Zone Climate", "Fully Automated Kitchen"],
      agent: {
        name: "Ethan Vance",
        role: "Portfolio Director",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "sc-3",
      title: "Apex High-Rise Condo",
      price: "₹2.85 Crore",
      rawPrice: 28500000,
      location: "Sector 65, Gurgaon",
      city: "Gurgaon",
      state: "Haryana",
      propertyType: "Apartment",
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      baths: 2,
      area: "2,200 sq.ft",
      rawArea: 2200,
      status: "New Listing",
      description: "An elegant, state-of-the-art corner unit overlooking the Golf Course Extension road, boasting clean silver-and-steel finishes and triple-glazing.",
      image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
      ],
      featured: false,
      amenities: ["Corner Unit", "City Views", "Triple Glazed Windows", "Smart Security App"],
      agent: {
        name: "Celine Laurent",
        role: "Acquisitions Expert",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500&q=80"
      }
    }
  ],
  interiors: [
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
  ],
  testimonials: [
    {
      client: "Maximilian Vane",
      text: "The architectural excellence of the Skyline units combined with the ease of the digital contract phase was outstanding.",
      role: "Architect & Partner"
    }
  ]
};
