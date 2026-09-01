export const transitStations = [
  { id: "s1", name: "Krantivira Sangolli Rayanna (Majestic)", line: "Purple & Green Line Interchange", zone: "Zone 1" },
  { id: "s2", name: "Indiranagar Metro Station", line: "Purple Line", zone: "Zone 2" },
  { id: "s3", name: "Mahatma Gandhi Road (MG Road)", line: "Purple Line", zone: "Zone 1" },
  { id: "s4", name: "Whitefield (Kadugodi) Metro Station", line: "Purple Line Extension", zone: "Zone 4" },
  { id: "s5", name: "Jayanagar Metro Station", line: "Green Line", zone: "Zone 2" },
  { id: "s6", name: "Yeshwanthpur Junction Metro Station", line: "Green Line", zone: "Zone 3" }
];

export const transitRoutes = [
  {
    id: "r1",
    name: "Purple Line (East-West Corridor)",
    type: "Metro",
    status: "ON TIME",
    frequency: "Every 4-6 minutes",
    stations: ["Whitefield", "Marathahalli", "Indiranagar", "MG Road", "Majestic", "Mysuru Road", "Challaghatta"]
  },
  {
    id: "r2",
    name: "Green Line (North-South Corridor)",
    type: "Metro",
    status: "MINOR DELAY",
    frequency: "Every 8 minutes (Signal issue)",
    stations: ["Nagasandra", "Yeshwanthpur", "Majestic", "Jayanagar", "Banashankari", "Silk Institute"]
  },
  {
    id: "r3",
    name: "Outer Ring Road Express (500-D)",
    type: "AC Transit Bus",
    status: "SERVICE ALERT",
    frequency: "Every 15 minutes (Heavy road diversion)",
    stations: ["Hebbal", "Manyata Tech Park", "KR Puram", "Marathahalli", "Silk Board", "Banashankari"]
  }
];

export const transitSchedule = {
  "s1": [ // Majestic
    { route: "Purple Line (To Whitefield)", time: "18:32", status: "On Time" },
    { route: "Green Line (To Silk Institute)", time: "18:35", status: "On Time" },
    { route: "Purple Line (To Challaghatta)", time: "18:38", status: "On Time" },
    { route: "Green Line (To Nagasandra)", time: "18:41", status: "Delayed 4m" }
  ],
  "s2": [ // Indiranagar
    { route: "Purple Line (To Whitefield)", time: "18:45", status: "On Time" },
    { route: "Purple Line (To Challaghatta)", time: "18:50", status: "On Time" },
    { route: "Purple Line (To Whitefield)", time: "18:56", status: "On Time" }
  ],
  "s4": [ // Whitefield
    { route: "Purple Line (To Challaghatta)", time: "18:30", status: "On Time" },
    { route: "Purple Line (To Challaghatta)", time: "18:40", status: "On Time" },
    { route: "Purple Line (To Challaghatta)", time: "18:50", status: "On Time" }
  ]
};
