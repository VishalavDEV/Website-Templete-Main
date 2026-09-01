export const railnovaRoutes = [
  { from: "Bengaluru (SBC)", to: "Chennai Central (MAS)", distance: "360 km", duration: "5h 15m" },
  { from: "Delhi (NDLS)", to: "Mumbai Central (BCT)", distance: "1380 km", duration: "15h 45m" },
  { from: "Hyderabad (SC)", to: "Bengaluru (SBC)", distance: "620 km", duration: "10h 30m" }
];

export const mockTrains = [
  {
    id: "T-12008",
    name: "Shatabdi Express (12008)",
    from: "Bengaluru (SBC)",
    to: "Chennai Central (MAS)",
    departure: "16:20",
    arrival: "21:35",
    duration: "5h 15m",
    classes: [
      { code: "CC", name: "AC Chair Car", price: 820, seatsAvailable: 42 },
      { code: "EC", name: "Executive Chair Car", price: 1640, seatsAvailable: 15 }
    ]
  },
  {
    id: "T-20608",
    name: "MYS MAS Vande Bharat (20608)",
    from: "Bengaluru (SBC)",
    to: "Chennai Central (MAS)",
    departure: "14:50",
    arrival: "19:30",
    duration: "4h 40m",
    classes: [
      { code: "CC", name: "AC Chair Car", price: 1200, seatsAvailable: 68 },
      { code: "EC", name: "Executive Class", price: 2200, seatsAvailable: 24 }
    ]
  },
  {
    id: "T-12952",
    name: "Mumbai Rajdhani Express (12952)",
    from: "Delhi (NDLS)",
    to: "Mumbai Central (BCT)",
    departure: "16:55",
    arrival: "08:35",
    duration: "15h 40m",
    classes: [
      { code: "3A", name: "AC 3 Tier", price: 2450, seatsAvailable: 110 },
      { code: "2A", name: "AC 2 Tier", price: 3820, seatsAvailable: 48 },
      { code: "1A", name: "AC First Class", price: 5350, seatsAvailable: 12 }
    ]
  },
  {
    id: "T-12785",
    name: "Kacheguda Express (12785)",
    from: "Hyderabad (SC)",
    to: "Bengaluru (SBC)",
    departure: "19:05",
    arrival: "05:35",
    duration: "10h 30m",
    classes: [
      { code: "SL", name: "Sleeper Class", price: 380, seatsAvailable: 18 },
      { code: "3A", name: "AC 3 Tier", price: 980, seatsAvailable: 52 },
      { code: "2A", name: "AC 2 Tier", price: 1450, seatsAvailable: 19 }
    ]
  }
];

// Seating layout: Row 1 to 10, A B C D (A,B are left window/aisle, C,D are right aisle/window)
export const seatClasses = {
  "CC": { rows: 8, cols: ["A", "B", "C", "D"] },
  "EC": { rows: 6, cols: ["A", "B", "C", "D"] },
  "3A": { rows: 10, cols: ["LB", "MB", "UB", "SL", "SU"] }
};
