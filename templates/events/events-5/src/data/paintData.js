export const paintColors = [
  {
    id: "obsidian-black",
    name: "OBSIDIAN BLACK",
    description: "Deep glossy black with obsidian mirror-like depth.",
    hex: "#0A0B0D",
    accentHex: "#1B1D22",
    finish: "Metallic Gloss",
    code: "AVX-PAINT-01",
    estimatedPrice: "₹38,000",
    popular: true
  },
  {
    id: "crimson-red",
    name: "CRIMSON RED",
    description: "Sporty premium red infused with ruby brilliance.",
    hex: "#D91424",
    accentHex: "#FF2A3B",
    finish: "Metallic Gloss",
    code: "AVX-PAINT-02",
    estimatedPrice: "₹42,000",
    popular: true
  },
  {
    id: "electric-blue",
    name: "ELECTRIC BLUE",
    description: "Bright metallic blue with luminous sapphire sheen.",
    hex: "#0072F5",
    accentHex: "#25BFFF",
    finish: "Metallic Pearl",
    code: "AVX-PAINT-03",
    estimatedPrice: "₹44,000",
    popular: true
  },
  {
    id: "titanium-silver",
    name: "TITANIUM SILVER",
    description: "Modern metallic silver with high reflectivity.",
    hex: "#A8B2C1",
    accentHex: "#E2E8F0",
    finish: "Liquid Satin",
    code: "AVX-PAINT-04",
    estimatedPrice: "₹39,500",
    popular: false
  },
  {
    id: "pearl-white",
    name: "PEARL WHITE",
    description: "Luxury multi-layer white with iridescent pearl flakes.",
    hex: "#F8FAFC",
    accentHex: "#CBD5E1",
    finish: "Tri-Coat Pearl",
    code: "AVX-PAINT-05",
    estimatedPrice: "₹45,000",
    popular: true
  },
  {
    id: "graphite-grey",
    name: "GRAPHITE GREY",
    description: "Dark graphite finish with gunmetal metallic undertones.",
    hex: "#334155",
    accentHex: "#64748B",
    finish: "Matte Satin",
    code: "AVX-PAINT-06",
    estimatedPrice: "₹41,000",
    popular: false
  },
  {
    id: "forest-green",
    name: "FOREST GREEN",
    description: "Deep automotive green with rich emerald highlights.",
    hex: "#064E3B",
    accentHex: "#10B981",
    finish: "Deep Metallic",
    code: "AVX-PAINT-07",
    estimatedPrice: "₹43,500",
    popular: false
  },
  {
    id: "midnight-purple",
    name: "MIDNIGHT PURPLE",
    description: "Premium dark purple color-shifting under sunlight.",
    hex: "#4C1D95",
    accentHex: "#8B5CF6",
    finish: "ChromaFlair Pearl",
    code: "AVX-PAINT-08",
    estimatedPrice: "₹48,000",
    popular: true
  },
  {
    id: "champagne-gold",
    name: "CHAMPAGNE GOLD",
    description: "Elegant luxury gold with soft warm metallic shimmer.",
    hex: "#D97706",
    accentHex: "#FBBF24",
    finish: "Luxury Metallic",
    code: "AVX-PAINT-09",
    estimatedPrice: "₹46,500",
    popular: false
  },
  {
    id: "solar-yellow",
    name: "SOLAR YELLOW",
    description: "Bold performance yellow built for track presence.",
    hex: "#EAB308",
    accentHex: "#FEF08A",
    finish: "High-Gloss Solid",
    code: "AVX-PAINT-10",
    estimatedPrice: "₹40,000",
    popular: false
  },
  {
    id: "arctic-grey",
    name: "ARCTIC GREY",
    description: "Cool contemporary grey with ultra-sleek matte finish.",
    hex: "#475569",
    accentHex: "#94A3B8",
    finish: "Ultra Matte",
    code: "AVX-PAINT-11",
    estimatedPrice: "₹42,500",
    popular: false
  },
  {
    id: "copper-bronze",
    name: "COPPER BRONZE",
    description: "Premium metallic bronze with warm liquid metal sheen.",
    hex: "#78350F",
    accentHex: "#F59E0B",
    finish: "Metallic Satin",
    code: "AVX-PAINT-12",
    estimatedPrice: "₹47,000",
    popular: false
  }
];

export const paintTypes = [
  {
    name: "Solid Paint",
    description: "Classic single-pigment high-clarity paint delivering pure uniform color.",
    durability: "5 - 7 Years",
    priceRange: "₹28,000 - ₹35,000",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Metallic Paint",
    description: "Infused with fine aluminum flakes that sparkle vividly under natural light.",
    durability: "7 - 10 Years",
    priceRange: "₹35,000 - ₹45,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Pearl Paint",
    description: "Contains ceramic mica crystals reflecting light into multi-tone iridescent hues.",
    durability: "8 - 10 Years",
    priceRange: "₹42,000 - ₹55,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Matte Paint",
    description: "Non-reflective stealth finish absorbing light for an aggressive modern stance.",
    durability: "6 - 8 Years",
    priceRange: "₹45,000 - ₹60,000",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Satin Paint",
    description: "The ideal middle ground between gloss reflection and velvet matte softness.",
    durability: "7 - 9 Years",
    priceRange: "₹48,000 - ₹62,000",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Chrome Finish",
    description: "Extreme liquid mirror chrome reflection engineered for show-stopping vehicles.",
    durability: "5 - 7 Years",
    priceRange: "₹65,000 - ₹85,000",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
  }
];

export const paintProcess = [
  { step: "01", title: "Disassembly & Prep", desc: "Trims, lights, handles and badges are carefully removed for complete edge-to-edge coverage." },
  { step: "02", title: "Sanding & Primer", desc: "Old clearcoat defects are wet-sanded down to a zero-texture ultra-flat primer base." },
  { step: "03", title: "Color Atomization", desc: "Applied inside a dust-free climate controlled booth using HVLP precision spray guns." },
  { step: "04", title: "Clearcoat & Curing", desc: "Dual layers of ultra-hard ceramic UV clearcoat applied and thermal baked at 65°C." },
  { step: "05", title: "Color Correction & Polish", desc: "Wet-sanded up to 5000 grit and machine buffed for a 100% orange-peel free mirror surface." }
];
