import { rideoraImages } from './rideoraImages';

export const rideCategories = [
  {
    id: "economy",
    name: "Rideora Mini",
    type: "Hatchback & Auto",
    image: rideoraImages.vehicles.economy,
    ratePerKm: 12,
    baseFare: 40,
    etaMinutes: 3,
    capacity: 4,
    description: "Affordable every day compact rides for small groups."
  },
  {
    id: "comfort",
    name: "Rideora Comfort",
    type: "Sedan / AC Compact",
    image: rideoraImages.vehicles.comfort,
    ratePerKm: 18,
    baseFare: 60,
    etaMinutes: 5,
    capacity: 4,
    description: "Premium sedans with top-rated drivers and climate control."
  },
  {
    id: "premium",
    name: "Rideora Prime Luxe",
    type: "Executive Sedans",
    image: rideoraImages.vehicles.premium,
    ratePerKm: 32,
    baseFare: 100,
    etaMinutes: 6,
    capacity: 4,
    description: "High-end luxury vehicles (Mercedes, BMW, Audi) for business."
  },
  {
    id: "xl",
    name: "Rideora XL SUV",
    type: "6-Seater SUV",
    image: rideoraImages.vehicles.xl,
    ratePerKm: 25,
    baseFare: 90,
    etaMinutes: 8,
    capacity: 6,
    description: "Spacious SUVs for family travel and extra luggage capacity."
  }
];

export const mockDrivers = [
  {
    id: "d1",
    name: "Suresh Gowda",
    rating: 4.9,
    trips: 1840,
    vehicle: "White Suzuki Dzire (KA-03-MM-4829)",
    profileImage: rideoraImages.driver.profile,
    phone: "+91 98765 43210"
  },
  {
    id: "d2",
    name: "Vikram Rathore",
    rating: 4.8,
    trips: 920,
    vehicle: "Silver Hyundai Xcent (DL-1C-AA-9082)",
    profileImage: rideoraImages.driver.profile,
    phone: "+91 98765 00112"
  },
  {
    id: "d3",
    name: "Pradeep Joshi",
    rating: 4.7,
    trips: 2450,
    vehicle: "Black Toyota Innova (MH-12-RR-0294)",
    profileImage: rideoraImages.driver.profile,
    phone: "+91 98765 55667"
  }
];
