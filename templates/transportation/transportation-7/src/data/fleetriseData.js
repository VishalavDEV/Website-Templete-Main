export const fleetVehicles = [
  {
    id: "FR-101",
    type: "Heavy Semi-Truck",
    driver: "Rajesh Kumar",
    location: "Tumakuru Highway, Karnataka",
    coordinates: { x: 45, y: 65 }, // Percentage of map area
    speed: "65 km/h",
    fuel: "72%",
    status: "Active",
    efficiency: "3.2 km/l",
    maintenanceDue: "14 Oct 2026",
    vin: "1HGCR2F8XHA010101"
  },
  {
    id: "FR-102",
    type: "Delivery Van",
    driver: "Amit Sharma",
    location: "Koramangala 4th Block, Bengaluru",
    coordinates: { x: 50, y: 75 },
    speed: "22 km/h",
    fuel: "88%",
    status: "Active",
    efficiency: "9.5 km/l",
    maintenanceDue: "02 Dec 2026",
    vin: "1HGCR2F8XHA010102"
  },
  {
    id: "FR-103",
    type: "Heavy Semi-Truck",
    driver: "Sukhwinder Singh",
    location: "Pune Express Toll Plaza, Maharashtra",
    coordinates: { x: 30, y: 45 },
    speed: "0 km/h",
    fuel: "45%",
    status: "Idle",
    efficiency: "2.8 km/l",
    maintenanceDue: "18 Sep 2026",
    vin: "1HGCR2F8XHA010103"
  },
  {
    id: "FR-104",
    type: "Medium Cargo Truck",
    driver: "Madan Gowda",
    location: "Hosur Industrial Zone, Tamil Nadu",
    coordinates: { x: 55, y: 80 },
    speed: "0 km/h",
    fuel: "95%",
    status: "Maintenance",
    efficiency: "5.4 km/l",
    maintenanceDue: "Immediate (Service)",
    vin: "1HGCR2F8XHA010104"
  },
  {
    id: "FR-105",
    type: "Delivery Van",
    driver: "Vijay Deverakonda",
    location: "Begumpet Road, Hyderabad",
    coordinates: { x: 62, y: 55 },
    speed: "45 km/h",
    fuel: "61%",
    status: "Active",
    efficiency: "10.2 km/l",
    maintenanceDue: "27 Nov 2026",
    vin: "1HGCR2F8XHA010105"
  },
  {
    id: "FR-106",
    type: "Container Carrier",
    driver: "Sanjay Patil",
    location: "JNPT Port, Navi Mumbai",
    coordinates: { x: 25, y: 50 },
    speed: "0 km/h",
    fuel: "18%",
    status: "Offline",
    efficiency: "2.5 km/l",
    maintenanceDue: "05 Sep 2026",
    vin: "1HGCR2F8XHA010106"
  },
  {
    id: "FR-107",
    type: "Medium Cargo Truck",
    driver: "Anil Deshmukh",
    location: "Hadapsar Industrial Area, Pune",
    coordinates: { x: 33, y: 48 },
    speed: "55 km/h",
    fuel: "82%",
    status: "Active",
    efficiency: "5.1 km/l",
    maintenanceDue: "10 Nov 2026",
    vin: "1HGCR2F8XHA010107"
  }
];

export const fleetStats = {
  totalVehicles: 48,
  active: 32,
  idle: 8,
  maintenance: 5,
  offline: 3,
  totalDistance: "12,480 km",
  avgFuelEfficiency: "6.8 km/l",
  fuelAlerts: 2
};
