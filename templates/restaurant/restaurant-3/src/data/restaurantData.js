/* ==========================================================================
   LUMIÈRE — COASTAL CUISINE · MODERN TABLE
   Seeder Data Engine & Centralized Store
   ========================================================================== */

export const RESTAURANT_DATA = {
  restaurantInfo: {
    name: "LUMIÈRE",
    tagline: "Coastal Cuisine · Modern Table",
    location: "Chennai · India",
    address: {
      street: "42 ECR Coastal Road",
      locality: "Kovalam",
      city: "Chennai",
      postalCode: "603112",
      state: "Tamil Nadu",
      country: "India"
    },
    hours: [
      { service: "Lunch", time: "12:30 PM – 3:30 PM" },
      { service: "Dinner", time: "7:00 PM – 11:30 PM" },
      { note: "Closed Mondays" }
    ],
    contact: {
      phone: "+91 44 8765 4321",
      email: "reservations@lumierechennai.com",
      mapUrl: "https://maps.google.com/?q=East+Coast+Road+Kovalam+Chennai"
    },
    socials: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Spotify Playlist", url: "https://spotify.com" }
    ]
  },

  menuData: [
    {
      id: "dish-01",
      number: "01",
      title: "HEIRLOOM BURRATA",
      description: "San Marzano confit · basil oil · sea salt",
      price: 650,
      category: "starters",
      image: "assets/images/dish_burrata.jpg",
      isSignature: false
    },
    {
      id: "dish-02",
      number: "02",
      title: "CHARRED KING PRAWNS",
      description: "Meyer lemon · oregano · smoked chili butter",
      price: 780,
      category: "mains",
      image: "assets/images/dish_prawns.jpg",
      isSignature: false
    },
    {
      id: "dish-03",
      number: "03",
      title: "WILD SEA BASS",
      description: "Citrus glaze · shaved fennel · Maldon salt",
      price: 1150,
      category: "mains",
      image: "assets/images/dish_seabass.jpg",
      isSignature: true
    },
    {
      id: "dish-04",
      number: "04",
      title: "WILD MUSHROOM RISOTTO",
      description: "Black truffle shavings · 36-mo parmesan · herbs",
      price: 820,
      category: "mains",
      image: "assets/images/dish_risotto.jpg",
      isSignature: false
    },
    {
      id: "dish-05",
      number: "05",
      title: "SCORCHED LEMON TART",
      description: "Vanilla bean cream · sea salt meringue",
      price: 480,
      category: "desserts",
      image: "assets/images/dish_lemontart.jpg",
      isSignature: false
    },
    {
      id: "dish-06",
      number: "06",
      title: "OCTOPUS CARPACCIO",
      description: "Caper berries · citrus oil · sea fennel",
      price: 920,
      category: "starters",
      image: "assets/images/dish_prawns.jpg",
      isSignature: false
    }
  ],

  galleryData: [
    {
      id: "gal-01",
      title: "Charred Prawns · Garden Herbs",
      category: "food",
      size: "size-portrait",
      image: "assets/images/dish_prawns.jpg"
    },
    {
      id: "gal-02",
      title: "Architectural Terrace · Midday Light",
      category: "space",
      size: "size-landscape",
      image: "assets/images/story_portrait.jpg"
    },
    {
      id: "gal-03",
      title: "Coastal Horizon · East Coast Road",
      category: "sea",
      size: "size-square",
      image: "assets/images/story_landscape.jpg"
    },
    {
      id: "gal-04",
      title: "Heirloom Burrata · Basil Oil",
      category: "food",
      size: "size-portrait",
      image: "assets/images/dish_burrata.jpg"
    },
    {
      id: "gal-05",
      title: "Counter Diners · Hearth Fire",
      category: "people",
      size: "size-landscape",
      image: "assets/images/exp_chefstable.jpg"
    }
  ],

  journalData: [
    {
      id: "article-01",
      date: "2026-07-14",
      formattedDate: "JULY 14, 2026",
      readTime: "4 MIN READ",
      title: "A Morning at the Fish Market",
      snippet: "Joining local fishermen at 5 AM to inspect silver pomfret, king prawns, and rock lobster fresh off the boats.",
      content: "As the first rays of sunlight break across the horizon along East Coast Road, the shoreline transforms into a vibrant hub of maritime tradition. Every morning at 5:00 AM, our culinary team walks the docks of Kovalam beach alongside seasoned artisanal fishermen. We select line-caught sea bass, succulent red snapper, and jumbo prawns harvested just hours before they reach our hearth. Cooking with seafood of this quality demands minimal intervention: a splash of cold-pressed olive oil, crushed sea salt, and wood smoke.",
      image: "assets/images/story_landscape.jpg"
    },
    {
      id: "article-02",
      date: "2026-06-28",
      formattedDate: "JUNE 28, 2026",
      readTime: "6 MIN READ",
      title: "Cooking With the Coast",
      snippet: "How wood smoke, citrus zests, and sea salt build complex layers without heavy creams or butter.",
      content: "In Mediterranean and coastal South Indian cooking, lightness is not a sacrifice—it is an art form. At Lumière, we forego heavy cream reductions in favor of vibrant emulsions crafted from citrus juices, cold-pressed extra virgin olive oil, and wood-fired hearth smoke. Olive wood charcoal imparts an delicate, sweet smokiness that elevates freshly seared fish without masking its inherent sweetness.",
      image: "assets/images/kitchen.jpg"
    },
    {
      id: "article-03",
      date: "2026-05-19",
      formattedDate: "MAY 19, 2026",
      readTime: "5 MIN READ",
      title: "The Art of Long Lunches",
      snippet: "Slowing down time under shaded pergolas with crisp white wine and simple grilled seafood.",
      content: "A great lunch should never be rushed. Inspired by slow coastal afternoons in Marseille and San Sebastián, our terrace seating encourages guests to linger. With open ocean breezes, natural limestone underfoot, and curated wine pairings, dining becomes a celebration of present moment mindfulness.",
      image: "assets/images/exp_terrace.jpg"
    }
  ]
};

// Helper Utility: Currency Formatting
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
