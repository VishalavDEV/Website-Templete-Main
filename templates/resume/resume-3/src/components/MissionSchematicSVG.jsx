import React from 'react';

export default function MissionSchematicSVG({ type, className = "w-full h-full" }) {
  if (type === "orbital_station") {
    return (
      <svg viewBox="0 0 800 450" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f172a" />
        {/* Blueprint Grid */}
        <path d="M0 75H800M0 150H800M0 225H800M0 300H800M0 375H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M133 0V450M266 0V450M400 0V450M533 0V450M666 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Orbital Target Rings */}
        <circle cx="400" cy="225" r="180" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
        <circle cx="400" cy="225" r="130" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
        
        {/* Solar Arrays Left & Right */}
        <g stroke="#38bdf8" strokeWidth="1.5" fill="#0284c7" fillOpacity="0.15">
          {/* Left Solar Panel Array */}
          <rect x="80" y="195" width="180" height="60" rx="3" />
          <path d="M125 195V255M170 195V255M215 195V255" stroke="#38bdf8" opacity="0.6" />
          <path d="M80 225H260" stroke="#38bdf8" opacity="0.6" />

          {/* Right Solar Panel Array */}
          <rect x="540" y="195" width="180" height="60" rx="3" />
          <path d="M585 195V255M630 195V255M675 195V255" stroke="#38bdf8" opacity="0.6" />
          <path d="M540 225H720" stroke="#38bdf8" opacity="0.6" />
        </g>

        {/* Central Hexagonal Station Core */}
        <polygon points="400,145 470,185 470,265 400,305 330,265 330,185" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
        <polygon points="400,165 450,195 450,255 400,285 350,255 350,195" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
        
        {/* Payload Docking Nodes */}
        <circle cx="400" cy="225" r="22" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="400" cy="225" r="8" fill="#38bdf8" />

        {/* Antenna & Sensors */}
        <path d="M400 145V100" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="400" cy="95" r="5" stroke="#06b6d4" strokeWidth="1.5" fill="#38bdf8" />
        <path d="M380 90 Q400 70 420 90" stroke="#06b6d4" strokeWidth="1.5" fill="none" />

        {/* Telemetry Annotations */}
        <g textAnchor="start" fontFamily="monospace" fontSize="10" fill="#94a3b8">
          <text x="50" y="40" fill="#38bdf8" fontWeight="bold">[SCHEMATIC M-01 // ORBITA-7]</text>
          <text x="50" y="55">SYS_TYPE: MODULAR LEO RESEARCH PLATFORM</text>
          <text x="50" y="70">ALT: 520.4 KM | INC: 51.6° | ORIENTATION: NADIR</text>
          
          <line x1="260" y1="225" x2="330" y2="225" stroke="#06b6d4" strokeWidth="1" />
          <text x="210" y="180" fill="#06b6d4">PORT SOLAR ARRAY [14.2kW]</text>

          <line x1="470" y1="225" x2="540" y2="225" stroke="#06b6d4" strokeWidth="1" />
          <text x="490" y="180" fill="#06b6d4">STARBOARD ARRAY</text>

          <text x="560" y="380" fill="#38bdf8">[AUTONOMOUS SWAP BAY]</text>
          <text x="560" y="395">STATUS: ALL 8 BAYS NOMINAL</text>
        </g>
      </svg>
    );
  }

  if (type === "glider_vehicle") {
    return (
      <svg viewBox="0 0 800 450" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f172a" />
        <path d="M0 75H800M0 150H800M0 225H800M0 300H800M0 375H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M133 0V450M266 0V450M400 0V450M533 0V450M666 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Stealth Wing Contour */}
        <polygon points="400,90 680,310 520,310 400,270 280,310 120,310" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
        <polygon points="400,130 620,300 500,300 400,260 300,300 180,300" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />

        {/* Control Surface Airfoil Vector Lines */}
        <path d="M400 90V270" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M280 310L400 270L520 310" stroke="#06b6d4" strokeWidth="2" />
        
        {/* Sensor Radar Pod & Solar Skin Array */}
        <circle cx="400" cy="180" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="400" y1="180" x2="400" y2="90" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Airflow Simulation Rays */}
        <g stroke="#06b6d4" opacity="0.3" strokeWidth="1">
          <path d="M350 50 C370 70 380 90 400 90 C420 90 430 70 450 50" />
          <path d="M200 120 C250 160 300 200 350 250" />
          <path d="M600 120 C550 160 500 200 450 250" />
        </g>

        {/* Technical Text Overlay */}
        <g textAnchor="start" fontFamily="monospace" fontSize="10" fill="#94a3b8">
          <text x="50" y="40" fill="#38bdf8" fontWeight="bold">[SCHEMATIC M-02 // AURORA PATHFINDER]</text>
          <text x="50" y="55">VEHICLE_TYPE: HIGH-ALTITUDE STRATOSPHERIC GLIDER</text>
          <text x="50" y="70">ALT: 22,000 M | SPEED: MACH 0.65 | ENDURANCE: 120+ HRS</text>
          <text x="500" y="380" fill="#06b6d4">AIRFOIL VECTOR: CARBON COMPOSITE</text>
          <text x="500" y="395">CONTROL: AUTONOMOUS NEURAL TURBULENCE MESH</text>
        </g>
      </svg>
    );
  }

  if (type === "deep_space_probe") {
    return (
      <svg viewBox="0 0 800 450" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f172a" />
        <path d="M0 75H800M0 150H800M0 225H800M0 300H800M0 375H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M133 0V450M266 0V450M400 0V450M533 0V450M666 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* Parabolic Antenna Dish (High Gain) */}
        <path d="M220 120 C220 225 220 225 220 330 C300 310 350 270 350 225 C350 180 300 140 220 120 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <path d="M160 225 H220" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="160" cy="225" r="6" fill="#06b6d4" />
        
        {/* Central Cylindrical Core */}
        <rect x="350" y="175" width="180" height="100" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <line x1="410" y1="175" x2="410" y2="275" stroke="#1e293b" strokeWidth="1" />
        <line x1="470" y1="175" x2="470" y2="275" stroke="#1e293b" strokeWidth="1" />

        {/* Dual Ion Engine Thruster Bus & Blue Plume */}
        <rect x="530" y="195" width="40" height="60" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
        <polygon points="570,205 660,185 680,225 660,265 570,245" fill="#0284c7" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Star Tracker Optics */}
        <line x1="440" y1="175" x2="440" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="440" cy="120" r="8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />

        <g textAnchor="start" fontFamily="monospace" fontSize="10" fill="#94a3b8">
          <text x="50" y="40" fill="#38bdf8" fontWeight="bold">[SCHEMATIC M-03 // HELIOS VECTOR]</text>
          <text x="50" y="55">VEHICLE_TYPE: DEEP-SPACE AUTONOMOUS EXPLORATION PROBE</text>
          <text x="50" y="70">RANGE: 4.2 AU | PROPULSION: DUAL ION BUS | AUTONOMY: L5</text>
          <text x="530" y="160" fill="#06b6d4">HIGH-GAIN PARABOLIC DISH [2.4m]</text>
          <text x="530" y="380" fill="#38bdf8">ION PLUME VECTOR: NOMINAL</text>
        </g>
      </svg>
    );
  }

  if (type === "relay_constellation") {
    return (
      <svg viewBox="0 0 800 450" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f172a" />
        <path d="M0 75H800M0 150H800M0 225H800M0 300H800M0 375H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M133 0V450M266 0V450M400 0V450M533 0V450M666 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* Curved Orbital Mesh Trajectories */}
        <path d="M100 350 Q 400 100 700 350" stroke="#0284c7" strokeWidth="2" fill="none" strokeDasharray="6 4" />
        <path d="M100 100 Q 400 350 700 100" stroke="#06b6d4" strokeWidth="2" fill="none" strokeDasharray="6 4" />

        {/* Satellite Mesh Nodes */}
        {[
          { x: 200, y: 220, label: "NODE-01" },
          { x: 400, y: 225, label: "NODE-02 (MASTER)" },
          { x: 600, y: 220, label: "NODE-03" }
        ].map((node, i) => (
          <g key={i}>
            <rect x={node.x - 20} y={node.y - 20} width="40" height="40" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r="6" fill="#06b6d4" />
            <line x1={node.x - 35} y1={node.y} x2={node.x + 35} y2={node.y} stroke="#38bdf8" strokeWidth="1.5" />
          </g>
        ))}

        {/* Optical Laser Links */}
        <line x1="200" y1="220" x2="400" y2="225" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="400" y1="225" x2="600" y2="220" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

        <g textAnchor="start" fontFamily="monospace" fontSize="10" fill="#94a3b8">
          <text x="50" y="40" fill="#38bdf8" fontWeight="bold">[SCHEMATIC M-04 // NOVA RELAY]</text>
          <text x="50" y="55">NETWORK: DISTRIBUTED ORBITAL OPTICAL LASER MESH</text>
          <text x="50" y="70">BANDWIDTH: 100 GBPS | NODES: 12 | LATENCY: &lt;45MS</text>
          <text x="490" y="380" fill="#06b6d4">OPTICAL INTERCONNECT: ACTIVE</text>
        </g>
      </svg>
    );
  }

  // planetary_lander default
  return (
    <svg viewBox="0 0 800 450" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0f172a" />
      <path d="M0 75H800M0 150H800M0 225H800M0 300H800M0 375H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M133 0V450M266 0V450M400 0V450M533 0V450M666 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

      {/* Surface Terrain Vector Grid */}
      <path d="M100 380 Q 250 350 400 380 T 700 370" stroke="#475569" strokeWidth="2" fill="none" />
      <path d="M100 410 H700" stroke="#1e293b" strokeWidth="1" />

      {/* Lander Main Body */}
      <polygon points="400,160 470,210 470,280 400,310 330,280 330,210" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
      <rect x="360" y="220" width="80" height="50" rx="2" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />

      {/* Shock Absorbing Landing Legs */}
      <line x1="330" y1="280" x2="250" y2="370" stroke="#38bdf8" strokeWidth="3" />
      <line x1="470" y1="280" x2="550" y2="370" stroke="#38bdf8" strokeWidth="3" />
      <line x1="230" y1="370" x2="270" y2="370" stroke="#38bdf8" strokeWidth="4" />
      <line x1="530" y1="370" x2="570" y2="370" stroke="#38bdf8" strokeWidth="4" />

      {/* Retro Propulsion Vector Flames */}
      <polygon points="385,310 400,360 415,310" fill="#0284c7" opacity="0.6" stroke="#06b6d4" strokeWidth="1" />

      {/* LiDAR Hazard Sensing Cone */}
      <polygon points="400,160 280,360 520,360" fill="#06b6d4" opacity="0.08" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 4" />

      <g textAnchor="start" fontFamily="monospace" fontSize="10" fill="#94a3b8">
        <text x="50" y="40" fill="#38bdf8" fontWeight="bold">[SCHEMATIC M-05 // POLARIS DESCENT]</text>
        <text x="50" y="55">SYSTEM: PLANETARY DESCENT & HAZARD AVOIDANCE LANDER</text>
        <text x="50" y="70">PRECISION: 5M TARGET ELLIPSE | SENSORS: 3D FLASH LiDAR</text>
        <text x="490" y="380" fill="#06b6d4">TOUCHDOWN VECTOR: 0.8 M/S</text>
      </g>
    </svg>
  );
}
