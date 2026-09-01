export const vertexData = {
  hero: {
    title: "VERTEX PROPERTIES",
    subtitle: "Strategic commercial real estate acquisitions, leasing, and valuations.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  agents: [
    {
      name: "Marcus Vance Sr.",
      role: "Commercial Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      name: "Brenda Kross",
      role: "Lead Commercial Analyst",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=500&q=80"
    }
  ],
  properties: [
    {
      id: "vp-1",
      title: "The Capital Office Tower",
      price: "₹28.50 Crore",
      rawPrice: 285000000,
      location: "Sector 62, Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      propertyType: "Office Space",
      bedrooms: 0, // Commercial
      beds: 0,
      bathrooms: 8,
      baths: 8,
      area: "120,000 sq.ft",
      rawArea: 120000,
      status: "For Rent",
      description: "Class A corporate high-rise with premium lobby design, sustainable LEED Gold rating, and triple-net long term lease tenants in Sector 62.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["LEED Gold Certified", "Triple-Net (NNN) Leased", "24/7 Security Desk", "Subway Station Connectivity"],
      capRate: "6.2%",
      occupancy: "96%",
      agent: {
        name: "Marcus Vance Sr.",
        role: "Commercial Partner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "vp-2",
      title: "The Helix Retail Pavilion",
      price: "₹14.20 Crore",
      rawPrice: 142000000,
      location: "Sector 18, Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      propertyType: "Retail Space",
      bedrooms: 0,
      beds: 0,
      bathrooms: 4,
      baths: 4,
      area: "45,000 sq.ft",
      rawArea: 45000,
      status: "For Sale",
      description: "Premier retail strip in a high-foot-traffic zoning area, currently anchor-leased by international premium fashion houses in Sector 18.",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
      ],
      featured: true,
      amenities: ["High Foot Traffic", "Anchor Tenant leases", "Modern Glass Facade", "Dedicated Loading Dock"],
      capRate: "5.8%",
      occupancy: "100%",
      agent: {
        name: "Marcus Vance Sr.",
        role: "Commercial Partner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80"
      }
    },
    {
      id: "vp-3",
      title: "Logistics Hub East",
      price: "₹18.90 Crore",
      rawPrice: 189000000,
      location: "Greater Noida Expressway, Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      propertyType: "Industrial Space",
      bedrooms: 0,
      beds: 0,
      bathrooms: 12,
      baths: 12,
      area: "250,000 sq.ft",
      rawArea: 250000,
      status: "For Rent",
      description: "Massive industrial distribution and logistics depot with cross-docking bays, 36ft clear ceiling height, and highway access on the Greater Noida Expressway.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
      ],
      featured: false,
      amenities: ["Cross-Docking Bays", "36ft Clear Height", "Highway Proximity", "ESFR Sprinkler System"],
      capRate: "7.1%",
      occupancy: "92%",
      agent: {
        name: "Brenda Kross",
        role: "Lead Commercial Analyst",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=500&q=80"
      }
    }
  ],
  interiors: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  ],
  marketStats: [
    { sector: "Office Space", vacancy: "8.5%", yield: "6.1%" },
    { sector: "Retail Plaza", vacancy: "4.2%", yield: "5.7%" },
    { sector: "Industrial/Logistics", vacancy: "3.8%", yield: "7.0%" }
  ]
};
