import { oceanlinkImages } from './oceanlinkImages';

export const marinePorts = [
  { code: "JNPT", name: "Jawaharlal Nehru Port Trust (Navi Mumbai)", country: "India" },
  { code: "MAA", name: "Port of Chennai", country: "India" },
  { code: "COK", name: "Cochin Port Trust (Kochi)", country: "India" },
  { code: "MUN", name: "Mundra Port (Gujarat)", country: "India" },
  { code: "SIN", name: "Port of Singapore", country: "Singapore" },
  { code: "DXB", name: "Port of Jebel Ali (Dubai)", country: "UAE" }
];

export const mockContainers = {
  "OL-99120": {
    id: "OL-99120",
    origin: "Mundra Port (MUN)",
    destination: "Port of Singapore (SIN)",
    vessel: "Oceanlink Poseidon",
    status: "In Transit",
    latLong: "5.3022° N, 95.8291° E (Strait of Malacca)",
    step: 2,
    eta: "30 Aug 2026",
    weight: "22,400 kg",
    cargoType: "Automobile Parts",
    route: ["Mundra (Origin)", "Indian Ocean", "Strait of Malacca", "Singapore (Destination)"]
  },
  "OL-45210": {
    id: "OL-45210",
    origin: "Port of Singapore (SIN)",
    destination: "Jawaharlal Nehru Port (JNPT)",
    vessel: "Oceanlink Hercules",
    status: "Customs Cleared",
    latLong: "18.9482° N, 72.9510° E (Navi Mumbai)",
    step: 4,
    eta: "26 Aug 2026 (Arrived)",
    weight: "14,800 kg",
    cargoType: "Electronics",
    route: ["Singapore (Origin)", "Strait of Malacca", "Bay of Bengal", "JNPT Mumbai (Destination)"]
  },
  "OL-78930": {
    id: "OL-78930",
    origin: "Port of Jebel Ali (DXB)",
    destination: "Cochin Port Trust (COK)",
    vessel: "Oceanlink Titan",
    status: "Departed Port",
    latLong: "24.5081° N, 56.4029° E (Gulf of Oman)",
    step: 1,
    eta: "01 Sep 2026",
    weight: "26,100 kg",
    cargoType: "Chemicals & Plastics",
    route: ["Dubai (Origin)", "Gulf of Oman", "Arabian Sea", "Kochi (Destination)"]
  }
};

export const vesselFleet = [
  {
    id: "vessel-1",
    name: "Oceanlink Poseidon",
    capacity: "14,500 TEU",
    vesselClass: "Neo-Panamax",
    status: "In Transit",
    location: "Strait of Malacca",
    image: oceanlinkImages.vehicles.ship1,
    flag: "India",
    speed: "21 knots"
  },
  {
    id: "vessel-2",
    name: "Oceanlink Hercules",
    capacity: "18,200 TEU",
    vesselClass: "Triple-E Class",
    status: "Docked",
    location: "JNPT Mumbai Terminal 3",
    image: oceanlinkImages.vehicles.ship2,
    flag: "India",
    speed: "0 knots"
  },
  {
    id: "vessel-3",
    name: "Oceanlink Titan",
    capacity: "12,000 TEU",
    vesselClass: "Suezmax",
    status: "In Transit",
    location: "Gulf of Oman",
    image: oceanlinkImages.vehicles.ship3,
    flag: "Panama",
    speed: "19.5 knots"
  }
];

export const marineRates = {
  dry20: 85000, // ₹ for 20ft container
  dry40: 145000, // ₹ for 40ft container
  reefer40: 210000, // ₹ for 40ft refrigerated container
  weightSurchargePerTon: 850 // ₹
};
