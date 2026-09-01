import { roadlineImages } from './roadlineImages';

export const roadlineRoutes = [
  { from: "Bengaluru", to: "Chennai", distance: "350 km", duration: "6h 30m" },
  { from: "Mumbai", to: "Pune", distance: "150 km", duration: "3h 15m" },
  { from: "Delhi", to: "Jaipur", distance: "270 km", duration: "5h 00m" },
  { from: "Hyderabad", to: "Bengaluru", distance: "570 km", duration: "9h 30m" }
];

export const mockBuses = [
  {
    id: "b1",
    name: "Roadline Multi-Axle Scania",
    type: "AC Sleeper 2+1",
    departure: "22:00",
    arrival: "04:30",
    duration: "6h 30m",
    price: 1250,
    rating: 4.8,
    seatsAvailable: 14,
    route: "Bengaluru → Chennai",
    from: "Bengaluru",
    to: "Chennai",
    features: ["Wi-Fi", "Charging Port", "Blanket", "Water Bottle"]
  },
  {
    id: "b2",
    name: "Roadline Club Class Volvo",
    type: "AC Seater Semi-Sleeper",
    departure: "14:15",
    arrival: "20:45",
    duration: "6h 30m",
    price: 950,
    rating: 4.6,
    seatsAvailable: 28,
    route: "Bengaluru → Chennai",
    from: "Bengaluru",
    to: "Chennai",
    features: ["Charging Port", "Water Bottle", "Movies"]
  },
  {
    id: "b3",
    name: "Roadline Star Sleeper Eicher",
    type: "Non-AC Sleeper 2+1",
    departure: "23:15",
    arrival: "06:00",
    duration: "6h 45m",
    price: 750,
    rating: 4.2,
    seatsAvailable: 8,
    route: "Bengaluru → Chennai",
    from: "Bengaluru",
    to: "Chennai",
    features: ["Charging Port"]
  },
  {
    id: "b4",
    name: "Roadline Express Volvo B11R",
    type: "AC Sleeper 2+1",
    departure: "08:00",
    arrival: "11:15",
    duration: "3h 15m",
    price: 550,
    rating: 4.9,
    seatsAvailable: 19,
    route: "Mumbai → Pune",
    from: "Mumbai",
    to: "Pune",
    features: ["Wi-Fi", "Charging Port", "Water Bottle"]
  },
  {
    id: "b5",
    name: "Roadline Intercity Benz",
    type: "AC Seater 2+2",
    departure: "17:30",
    arrival: "20:45",
    duration: "3h 15m",
    price: 380,
    rating: 4.5,
    seatsAvailable: 34,
    route: "Mumbai → Pune",
    from: "Mumbai",
    to: "Pune",
    features: ["Charging Port", "Water Bottle"]
  },
  {
    id: "b6",
    name: "Roadline Royal Cruiser Scania",
    type: "AC Sleeper 2+1",
    departure: "23:00",
    arrival: "04:00",
    duration: "5h 00m",
    price: 890,
    rating: 4.7,
    seatsAvailable: 12,
    route: "Delhi → Jaipur",
    from: "Delhi",
    to: "Jaipur",
    features: ["Wi-Fi", "Charging Port", "Blanket", "Water Bottle"]
  }
];

export const boardingPoints = {
  "Bengaluru": ["Majestic Bus Stand", "Silk Board", "Electronic City", "Marathahalli"],
  "Chennai": ["Koyambedu CMBT", "Guindy", "Tambaram", "Adyar"],
  "Mumbai": ["Borivali West", "Andheri East", "Sion", "Vashi"],
  "Pune": ["Wakad", "Swargate", "Kharadi Bypass", "Hadapsar"],
  "Delhi": ["Kashmere Gate", "Dhaula Kuan", "Karol Bagh", "IGI Airport T3"],
  "Jaipur": ["Sindhi Camp", "200 Feet Bypass", "Transport Nagar"]
};

export const droppingPoints = {
  "Chennai": ["Koyambedu CMBT", "Guindy", "Tambaram", "Adyar"],
  "Bengaluru": ["Majestic Bus Stand", "Silk Board", "Electronic City", "Marathahalli"],
  "Pune": ["Wakad", "Swargate", "Kharadi Bypass", "Hadapsar"],
  "Mumbai": ["Borivali West", "Andheri East", "Sion", "Vashi"],
  "Jaipur": ["Sindhi Camp", "200 Feet Bypass", "Transport Nagar"],
  "Delhi": ["Kashmere Gate", "Dhaula Kuan", "Karol Bagh", "IGI Airport T3"]
};
