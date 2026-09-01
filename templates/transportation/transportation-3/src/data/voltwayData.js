import { voltwayImages } from './voltwayImages';

export const voltwayVehicles = [
  {
    id: "v1",
    name: "Voltway Ion",
    type: "Premium Sedan",
    range: 480, // km
    battery: 60, // kWh
    chargingTime: "30 mins (DC Fast)",
    price: "₹24,99,000",
    image: voltwayImages.vehicles.ev1,
    efficiency: "8.0 km/kWh"
  },
  {
    id: "v2",
    name: "Voltway Nexus SUV",
    type: "Luxury SUV",
    range: 520, // km
    battery: 85, // kWh
    chargingTime: "40 mins (DC Fast)",
    price: "₹38,50,000",
    image: voltwayImages.vehicles.ev2,
    efficiency: "6.1 km/kWh"
  },
  {
    id: "v3",
    name: "Voltway Glide Hatchback",
    type: "Urban Hatchback",
    range: 310, // km
    battery: 35, // kWh
    chargingTime: "25 mins (DC Fast)",
    price: "₹12,40,000",
    image: voltwayImages.vehicles.ev3,
    efficiency: "8.8 km/kWh"
  }
];

export const chargingStations = [
  { id: "cs1", name: "Voltway Supercharger - Indiranagar", city: "Bengaluru", type: "DC Fast (150kW)", available: 4, total: 6, costPerMin: "₹15" },
  { id: "cs2", name: "Voltway Charging Hub - T-Nagar", city: "Chennai", type: "DC Fast (120kW)", available: 2, total: 4, costPerMin: "₹12" },
  { id: "cs3", name: "GreenCharge Station - Gachibowli", city: "Hyderabad", type: "AC Slow (22kW)", available: 5, total: 8, costPerMin: "₹6" },
  { id: "cs4", name: "Voltway Premium Hub - Bandra Kurla Complex", city: "Mumbai", type: "DC Ultra Fast (250kW)", available: 0, total: 4, costPerMin: "₹20" },
  { id: "cs5", name: "Voltway Station - Connaught Place", city: "Delhi", type: "DC Fast (150kW)", available: 3, total: 6, costPerMin: "₹15" },
  { id: "cs6", name: "EcoCharge Terminal - Koregaon Park", city: "Pune", type: "AC Slow (22kW)", available: 6, total: 6, costPerMin: "₹5" }
];
