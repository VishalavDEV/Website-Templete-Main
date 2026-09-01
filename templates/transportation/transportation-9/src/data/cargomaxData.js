export const mockShipments = {
  "CMX-2026-10482": {
    id: "CMX-2026-10482",
    status: "Out for Delivery",
    step: 4, // 0 to 5
    origin: "Chennai Warehouse (CHE-1)",
    destination: "Whitefield Hub, Bengaluru",
    estDelivery: "27 Aug 2026, 04:00 PM",
    weight: "2,450 kg",
    serviceType: "Express Cargo LTL",
    history: [
      { status: "Order Received", time: "24 Aug 2026, 10:00 AM", location: "Chennai", done: true },
      { status: "Picked Up", time: "24 Aug 2026, 02:30 PM", location: "Chennai", done: true },
      { status: "In Transit", time: "25 Aug 2026, 09:00 PM", location: "Chennai-Bengaluru Highway", done: true },
      { status: "At Distribution Center", time: "26 Aug 2026, 07:15 AM", location: "Bengaluru East Depot", done: true },
      { status: "Out for Delivery", time: "26 Aug 2026, 12:45 PM", location: "Whitefield Hub", done: true },
      { status: "Delivered", time: "Pending", location: "Customer Office", done: false }
    ]
  },
  "CMX-2026-90518": {
    id: "CMX-2026-90518",
    status: "In Transit",
    step: 2,
    origin: "Bhiwandi Hub, Mumbai",
    destination: "Hinjawadi Phase 3, Pune",
    estDelivery: "27 Aug 2026, 11:30 AM",
    weight: "890 kg",
    serviceType: "Standard Freight FTL",
    history: [
      { status: "Order Received", time: "25 Aug 2026, 03:00 PM", location: "Mumbai", done: true },
      { status: "Picked Up", time: "26 Aug 2026, 10:30 AM", location: "Bhiwandi Hub", done: true },
      { status: "In Transit", time: "26 Aug 2026, 02:00 PM", location: "Mumbai-Pune Expressway", done: true },
      { status: "At Distribution Center", time: "Pending", location: "Pune Depot", done: false },
      { status: "Out for Delivery", time: "Pending", location: "Pune West", done: false },
      { status: "Delivered", time: "Pending", location: "Client Office", done: false }
    ]
  },
  "CMX-2026-44023": {
    id: "CMX-2026-44023",
    status: "Delivered",
    step: 5,
    origin: "Okhla Phase 1, Delhi",
    destination: "Sector 62, Noida",
    estDelivery: "25 Aug 2026, 05:30 PM (Delivered)",
    weight: "120 kg",
    serviceType: "Courier Express",
    history: [
      { status: "Order Received", time: "25 Aug 2026, 08:00 AM", location: "Delhi Office", done: true },
      { status: "Picked Up", time: "25 Aug 2026, 09:30 AM", location: "Delhi Office", done: true },
      { status: "In Transit", time: "25 Aug 2026, 11:15 AM", location: "DND Flyway", done: true },
      { status: "At Distribution Center", time: "25 Aug 2026, 02:00 PM", location: "Noida Sorting Facility", done: true },
      { status: "Out for Delivery", time: "25 Aug 2026, 03:30 PM", location: "Noida Hub", done: true },
      { status: "Delivered", time: "25 Aug 2026, 05:22 PM", location: "Sector 62 Office", done: true }
    ]
  }
};

export const freightRates = {
  baseLTL: 2.5, // per kg per km
  baseFTL: 1.8,
  expressMultiplier: 1.5,
  minCharge: 500
};
