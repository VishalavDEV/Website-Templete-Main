export const ticketsData = [
  {
    id: "early-bird",
    name: "EARLY BIRD",
    price: 999,
    formattedPrice: "₹999",
    originalPrice: "₹1,999",
    tagline: "Ideal for individual developers & students seeking deep tech insights.",
    popular: false,
    badge: "Limited Quantity",
    features: [
      { text: "Full 3-Day Eventora Access", included: true },
      { text: "Main Stage Keynote Sessions", included: true },
      { text: "Welcome Swag Kit & Pass", included: true },
      { text: "Exhibition Hall & Startup Showcase", included: true },
      { text: "General Networking Lunch", included: true },
      { text: "Hands-on Workshops", included: false },
      { text: "VIP Lounge & Speaker Dinner", included: false }
    ]
  },
  {
    id: "standard",
    name: "STANDARD PASS",
    price: 1499,
    formattedPrice: "₹1,499",
    originalPrice: "₹2,499",
    tagline: "Most popular choice for software engineers, architects & team leaders.",
    popular: true,
    badge: "MOST POPULAR",
    features: [
      { text: "Full 3-Day Eventora Access", included: true },
      { text: "Main Stage Keynote Sessions", included: true },
      { text: "Premium Eventora Swag Box", included: true },
      { text: "Exhibition Hall & Startup Showcase", included: true },
      { text: "Networking Lunch & Coffee Breaks", included: true },
      { text: "Hands-on Workshops Access", included: true },
      { text: "Digital Session Recordings Pass", included: true },
      { text: "VIP Lounge & Speaker Dinner", included: false }
    ]
  },
  {
    id: "vip",
    name: "VIP ACCESS",
    price: 2999,
    formattedPrice: "₹2,999",
    originalPrice: "₹4,999",
    tagline: "Exclusive executive experience with direct speaker networking & perks.",
    popular: false,
    badge: "Executive VIP",
    features: [
      { text: "Full 3-Day Eventora Access", included: true },
      { text: "Main Stage Keynote Sessions", included: true },
      { text: "Deluxe VIP Swag Box & Certificate", included: true },
      { text: "Exhibition Hall & Startup Showcase", included: true },
      { text: "Executive Dining & VIP Lounge", included: true },
      { text: "Priority Workshop Registration", included: true },
      { text: "Speaker Meet-and-Greet Dinner", included: true },
      { text: "Front-Row Reserved Seating", included: true }
    ]
  }
];
