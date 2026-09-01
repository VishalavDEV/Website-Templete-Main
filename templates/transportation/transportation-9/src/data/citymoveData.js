import { citymoveImages } from './citymoveImages';

export const citymoveVehicles = [
  {
    id: "cm-car",
    name: "City Hatchback Car",
    category: "Car",
    image: citymoveImages.vehicles.car,
    baseFare: 60,
    perKmRate: 12,
    speed: "Medium",
    capacity: "4 Seats",
    description: "Self-drive city hatchback cars. Pickup from any designated CityMove Zone, drop off at any other zone.",
    availability: "14 cars nearby",
    co2Impact: "0.12 kg/km"
  },
  {
    id: "cm-scooter",
    name: "City Glide Scooter",
    category: "Scooter",
    image: citymoveImages.vehicles.scooter,
    baseFare: 10,
    perKmRate: 4,
    speed: "Fast (Traffic)",
    capacity: "1 Rider",
    description: "Zip through city traffic with our electric dockless kick-scooters. Unlock using QR code via the app.",
    availability: "3 scooters within 100m",
    co2Impact: "0.0 kg/km (Zero emission)"
  },
  {
    id: "cm-bike",
    name: "City Fit Bicycle",
    category: "Bike",
    image: citymoveImages.vehicles.bike,
    baseFare: 5,
    perKmRate: 2,
    speed: "Active",
    capacity: "1 Rider",
    description: "Pedal-assist smart bicycles for health and micro-mobility. Scan, ride, and park at any public cycle stand.",
    availability: "8 bikes at nearby dock",
    co2Impact: "0.0 kg/km"
  },
  {
    id: "cm-bus",
    name: "City Shuttle E-Bus",
    category: "Bus",
    image: citymoveImages.vehicles.bus,
    baseFare: 15,
    perKmRate: 3,
    speed: "Scheduled",
    capacity: "45 Seats",
    description: "Shared electric buses connecting main corporate and transit hubs in the city. High frequency services.",
    availability: "Arriving in 4 mins",
    co2Impact: "0.03 kg/km per passenger"
  }
];

export const citymoveStats = {
  co2Saved: "4,820 metric tons",
  activeRiders: "250,000+",
  fleetSize: "12,500+",
  tripsCompleted: "1.2 Million"
};
