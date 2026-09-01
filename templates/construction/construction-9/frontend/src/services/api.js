const API_BASE = 'http://localhost:8080/api';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error('Health check failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend offline, using fallback:', err);
    return { status: 'OFFLINE_FALLBACK', app: 'Chronos Brutalist Platform', version: '1.0.0' };
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('Projects fetch failed');
    return await res.json();
  } catch (err) {
    console.warn('Using mock projects fallback:', err);
    return [
      {
        id: 1,
        title: "The Apex Monolith & Brutalist Tower",
        category: "Mega-Structures",
        location: "Gothenburg Industrial Port, Sweden",
        specs: "Board-Formed C80 Concrete · 142m Cantilever Spire",
        concreteGrade: "C80/95 Self-Compacting High-Density",
        height: "142 meters (38 Storeys)",
        grossFloorArea: "64,000 m² GFA",
        image: "/assets/images/chronos-tower.jpg",
        summary: "An uncompromising monolithic brutalist skyscraper engineering statement on the Baltic coastline.",
        technicalHighlights: [
          "Post-tensioned 24m structural cantilever box girder",
          "Board-formed textured volcanic basalt concrete finish",
          "Deep aerodynamic wind baffles reducing vortex shedding by 34%"
        ]
      },
      {
        id: 2,
        title: "Obsidian Citadel & Research Monolith",
        category: "Monoliths",
        location: "Reykjavik Geothermal Highlands, Iceland",
        specs: "Basalt Aggregate C70 Concrete · Sub-Zero Seismic Frame",
        concreteGrade: "C70/85 Basaltic Aggregate",
        height: "48 meters (11 Storeys)",
        grossFloorArea: "32,500 m² GFA",
        image: "/assets/images/chronos-monolith.jpg",
        summary: "A dark obsidian brutalist research fortress engineered to withstand tectonic seismic shear.",
        technicalHighlights: [
          "Black iron-oxide pigmented monolithic concrete casing",
          "Zone 4 Seismic isolation dampers at bedrock contact joints"
        ]
      },
      {
        id: 3,
        title: "Chronos Forum & Civic Grand Pavilion",
        category: "Pavilions",
        location: "Basel Rhine Terraces, Switzerland",
        specs: "Precast Ribbed Vaults · Brushed Stainless Steel Cladding",
        concreteGrade: "C60/75 Low-Carbon Pozzolanic Concrete",
        height: "28 meters (4 Storeys)",
        grossFloorArea: "18,200 m² GFA",
        image: "/assets/images/chronos-pavilion.jpg",
        summary: "A monumental public forum spanning across the river terraces with hyperbolic concrete shells.",
        technicalHighlights: [
          "60-meter column-free brutalist concrete vaulted auditorium",
          "Brushed 316L architectural stainless steel pivot portal doors"
        ]
      },
      {
        id: 4,
        title: "Titanium Ridge Industrial Headquarters",
        category: "Monoliths",
        location: "Rotterdam Maasvlakte Logistics Hub, Netherlands",
        specs: "Exposed Aggregate C55 Concrete · Steel Space Frame",
        concreteGrade: "C55/67 High-Durability Marine Concrete",
        height: "64 meters (16 Storeys)",
        grossFloorArea: "45,000 m² GFA",
        image: "/assets/images/chronos-hero.jpg",
        summary: "A heavy civil brutalist monolith commanding the industrial harbor skyline.",
        technicalHighlights: [
          "Dual concrete core shafts acting as primary vertical spine",
          "Marine-grade blast-resistant concrete mix"
        ]
      }
    ];
  }
}

export async function calculateEstimator(payload) {
  try {
    const res = await fetch(`${API_BASE}/estimator/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Estimator calculation failed');
    return await res.json();
  } catch (err) {
    console.warn('Estimator fallback calculation:', err);
    const siteArea = payload.siteAreaSqm || 2500;
    const floors = payload.buildingFloors || 8;
    const totalGfa = siteArea * floors * 0.78;
    const concreteVol = totalGfa * 0.36;
    return {
      totalGrossAreaSqm: Math.round(totalGfa),
      concreteVolumeCubicMeters: Math.round(concreteVol),
      structuralSteelMetricTons: Math.round((concreteVol * 130) / 1000),
      compressiveStrengthMpa: 75.0,
      carbonMineralizationOffsetTons: Math.round((concreteVol * 85) / 1000),
      estimatedCureDays: 28,
      estimatedStructuralBudgetUsd: Math.round(totalGfa * 780)
    };
  }
}

export async function submitRfq(payload) {
  try {
    const res = await fetch(`${API_BASE}/rfq`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('RFQ submission failed');
    return await res.json();
  } catch (err) {
    console.warn('RFQ fallback submission:', err);
    return {
      id: Date.now(),
      ...payload,
      status: 'RECEIVED_FALLBACK_SIMULATION',
      timestamp: new Date().toISOString()
    };
  }
}

export async function fetchTelemetry() {
  try {
    const res = await fetch(`${API_BASE}/telemetry`);
    if (!res.ok) throw new Error('Telemetry fetch failed');
    return await res.json();
  } catch (err) {
    return {
      activeSite: "Apex Tower Core #14 · Baltic Coast Sector",
      concreteCureIndex: 98.7,
      structuralStrainMicrostrain: 184.2,
      vibrationFrequencyHz: 1.42,
      ambientTempC: 17.8,
      humidityPercent: 64.2,
      seismicRating: "Zone 3 / UBC Seismic Damped",
      sensorNodes: {
        "SG-NORTH-CORE": 142.4,
        "SG-SOUTH-CANTILEVER": 218.7,
        "SG-EAST-BUTTRESS": 98.1,
        "SG-WEST-SHEARWALL": 164.8
      },
      activeCranes: ["Potain MDT 389 #CRANE-01 (Active Slewing)", "Liebherr 280 EC-H #CRANE-02 (Standby)"]
    };
  }
}
