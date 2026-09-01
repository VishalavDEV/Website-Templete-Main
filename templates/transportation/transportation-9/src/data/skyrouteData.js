import { skyrouteImages } from './skyrouteImages';

export const skyrouteAirports = [
  { code: "DEL", name: "Delhi (Indira Gandhi International)", city: "Delhi" },
  { code: "BOM", name: "Mumbai (Chhatrapati Shivaji Maharaj Intl)", city: "Mumbai" },
  { code: "BLR", name: "Bengaluru (Kempegowda International)", city: "Bengaluru" },
  { code: "MAA", name: "Chennai (Chennai International)", city: "Chennai" },
  { code: "HYD", name: "Hyderabad (Rajiv Gandhi International)", city: "Hyderabad" },
  { code: "PNQ", name: "Pune (Pune Airport)", city: "Pune" }
];

export const mockFlights = [
  {
    id: "SR-301",
    airline: "Skyroute Airways",
    flightNumber: "SR-301",
    fromCode: "DEL",
    toCode: "BOM",
    departure: "06:00",
    arrival: "08:15",
    duration: "2h 15m",
    stops: "Non-stop",
    price: 6499,
    classPrices: { economy: 6499, premium: 11200, business: 24500 }
  },
  {
    id: "SR-302",
    airline: "Skyroute Airways",
    flightNumber: "SR-302",
    fromCode: "DEL",
    toCode: "BOM",
    departure: "18:30",
    arrival: "20:50",
    duration: "2h 20m",
    stops: "Non-stop",
    price: 7200,
    classPrices: { economy: 7200, premium: 12500, business: 26800 }
  },
  {
    id: "SR-303",
    airline: "Skyroute Connect",
    flightNumber: "SR-303",
    fromCode: "DEL",
    toCode: "BOM",
    departure: "11:15",
    arrival: "14:45",
    duration: "3h 30m",
    stops: "1 Stop (via JAI)",
    price: 4999,
    classPrices: { economy: 4999, premium: 8900, business: 18900 }
  },
  {
    id: "SR-304",
    airline: "Skyroute Airways",
    flightNumber: "SR-304",
    fromCode: "BLR",
    toCode: "DEL",
    departure: "09:45",
    arrival: "12:35",
    duration: "2h 50m",
    stops: "Non-stop",
    price: 8100,
    classPrices: { economy: 8100, premium: 14900, business: 31200 }
  },
  {
    id: "SR-305",
    airline: "Skyroute Airways",
    flightNumber: "SR-305",
    fromCode: "BLR",
    toCode: "DEL",
    departure: "21:00",
    arrival: "23:55",
    duration: "2h 55m",
    stops: "Non-stop",
    price: 7500,
    classPrices: { economy: 7500, premium: 13800, business: 29500 }
  },
  {
    id: "SR-306",
    airline: "Skyroute Airways",
    flightNumber: "SR-306",
    fromCode: "BOM",
    toCode: "BLR",
    departure: "15:20",
    arrival: "17:05",
    duration: "1h 45m",
    stops: "Non-stop",
    price: 5200,
    classPrices: { economy: 5200, premium: 9500, business: 19800 }
  }
];

export const cabinClasses = [
  {
    id: "economy",
    name: "Sky Economy",
    image: skyrouteImages.services.dining,
    description: "Comfortable travel with ergonomic seating and complimentary high-quality dining.",
    features: [
      "32-inch seat pitch",
      "Complimentary hot meals",
      "25 kg checked baggage allowance",
      "Personal entertainment screens"
    ]
  },
  {
    id: "premium",
    name: "Sky Premium",
    image: skyrouteImages.hero, // Unique fallback for premium
    description: "Extra space, priority boarding, and upgraded dining options for a smoother trip.",
    features: [
      "38-inch seat pitch & footrest",
      "Upgraded chef-designed menus",
      "35 kg checked baggage allowance",
      "Priority check-in and boarding"
    ]
  },
  {
    id: "business",
    name: "Sky Business Elite",
    image: skyrouteImages.services.lounge,
    description: "Your sanctuary in the sky. Flatbed seats, lounge access, and customized gourmet dining.",
    features: [
      "180-degree lie-flat sleeper seats",
      "Access to premium airport lounges",
      "40 kg checked baggage allowance",
      "A-la-carte dining and fine refreshments"
    ]
  }
];
