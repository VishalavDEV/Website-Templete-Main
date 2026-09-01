export const terraData = {
  hero: {
    title: "TERRA LIVING",
    subtitle: "Organic, carbon-neutral architectures designed in harmony with nature.",
    image: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=1600&q=80",
    sustainabilityStats: [
      { metric: "Solar Powered", rating: "100%" },
      { metric: "Rainwater Harvesting", rating: "Active" },
      { metric: "Carbon Footprint Offset", rating: "Net Zero" }
    ]
  },
  properties: [
    {
      id: "tl-1",
      title: "The Meadow Canopy",
      price: "₹1.85 Crore",
      rawPrice: 18500000,
      location: "Baner, Pune",
      city: "Pune",
      state: "Maharashtra",
      propertyType: "Eco House",
      bedrooms: 3,
      beds: 3,
      bathrooms: 2.5,
      baths: 2.5,
      area: "2,800 sq.ft",
      rawArea: 2800,
      status: "For Sale",
      description: "A breathtaking passive house wrapped in local cedar, featuring a wildflower green roof, solar grid, and natural insulation in Baner.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["Passive Solar Heating", "Cedar cladding", "Rainwater Tanks", "Wildflower Roof"],
      ecoAttributes: { solar: true, greenRoof: true, naturalMaterials: true },
      agent: {
        name: "Jasper Thorne",
        role: "Sustainability Partner",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "tl-2",
      title: "The Redwood Retreat",
      price: "₹2.20 Crore",
      rawPrice: 22000000,
      location: "Hinjawadi Phase 3, Pune",
      city: "Pune",
      state: "Maharashtra",
      propertyType: "Cabin",
      bedrooms: 4,
      beds: 4,
      bathrooms: 3,
      baths: 3,
      area: "3,400 sq.ft",
      rawArea: 3400,
      status: "For Sale",
      description: "Secluded forest cabin crafted entirely from reclaimed redwood and stone, incorporating double-vaulted solar glass panels.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["Reclaimed Redwood", "Geothermal Heating", "Natural Spring Well", "Smart Battery Store"],
      ecoAttributes: { solar: true, geothermal: true, naturalMaterials: true },
      agent: {
        name: "Jasper Thorne",
        role: "Sustainability Partner",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "tl-3",
      title: "Echo Lake Sanctuary",
      price: "₹1.15 Crore",
      rawPrice: 11500000,
      location: "Wakad, Pune",
      city: "Pune",
      state: "Maharashtra",
      propertyType: "Eco House",
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      baths: 2,
      area: "1,900 sq.ft",
      rawArea: 1900,
      status: "New Listing",
      description: "A compact, highly insulated lakeside A-frame home constructed with VOC-free materials and triple-glazed Argon windows in Wakad.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
      ],
      featured: false,
      amenities: ["Triple Glazed Windows", "VOC-Free Paints", "Bio-waste system", "Greywater Filtration"],
      ecoAttributes: { solar: false, greenRoof: false, naturalMaterials: true },
      agent: {
        name: "Elara Rivers",
        role: "Eco Architect",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=500&q=80"
      }
    }
  ],
  interiors: [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
  ],
  materials: [
    { name: "Reclaimed Cedar", desc: "Sourced locally to reduce shipping emissions while providing natural weather resistance." },
    { name: "Hempcrete Insulation", desc: "Non-toxic, high thermal mass insulation that locks in carbon for the building lifecycle." },
    { name: "Recycled Glass Countertops", desc: "Crushed local glass bound with bio-resins for a durable, non-porous kitchen surface." }
  ],
  agents: [
    {
      name: "Jasper Thorne",
      role: "Sustainability Partner",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      name: "Elara Rivers",
      role: "Eco Architect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=500&q=80"
    }
  ],
  testimonials: [
    {
      client: "Sophia & Liam Vance",
      text: "Our new passive home consumes less than 15% of the energy of our previous house, and living close to the forest has changed our lives.",
      role: "Permaculture Educators"
    }
  ]
};
