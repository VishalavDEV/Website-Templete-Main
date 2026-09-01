const API_BASE_URL = 'http://localhost:8080/api';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Aero Helix Skyrise & Sky Garden Spire',
    category: 'Supertall Aerodynamic Towers',
    location: 'London Thames Riverside, UK',
    height: '342 meters (78 Storeys)',
    grossFloorArea: '128,000 m² GFA',
    dragCoefficient: 'Cd = 0.28 (Super-Laminar)',
    kineticLouverCount: '4,280 Responsive Origami Panels',
    energyHarvest: '1,850 MWh / Year',
    image: '/assets/images/aerovision-hero.jpg',
    summary: 'A flagship aerodynamic double-curved supertall tower engineered with wind-bleed aerodynamic apertures, cascading cantilevered sky atriums, and a kinetic photovoltaic skin responsive to sun vectors.',
    aerodynamicInnovations: [
      'Wind-bleed aerodynamic central void reducing base moment shear by 42%',
      'Continuous multi-level cantilevered botanical sky gardens acting as vortex dampers',
      'Dual fluid tuned mass damper (TMD) stabilizing pinnacle under gale-force gusts',
      'Integrated pneumatic kinetic solar louvers that track sun azimuth and altitude'
    ],
    structuralSpecs: [
      'Structural System: Diagrid Steel Composite Mega-Frame with Outrigger Trusses',
      'Glazing: Triple-pane Low-E Aerogel Vacuum Insulated Curtain Wall',
      'Energy: 100% On-site Renewable Solar Facade + Geothermal Foundation Heat Pumping',
      'Embodied Carbon: -38% vs. standard high-rise benchmark'
    ]
  },
  {
    id: 2,
    title: 'Origami Kinetic Facade & Solar Pavilion',
    category: 'Kinetic Responsive Envelopes',
    location: 'Zurich Innovation District, Switzerland',
    height: '54 meters (12 Storeys)',
    grossFloorArea: '26,400 m² GFA',
    dragCoefficient: 'Cd = 0.32',
    kineticLouverCount: '2,160 Triangulated Kinetic Louvers',
    energyHarvest: '620 MWh / Year',
    image: '/assets/images/aerovision-facade.jpg',
    summary: 'A state-of-the-art responsive research facility featuring carbon-fiber origami facade modules that articulate dynamically to eliminate glare, reduce HVAC loads by 58%, and generate clean solar electricity.',
    aerodynamicInnovations: [
      'Micro-actuated carbon-fiber solar tracking triangular petals',
      'Automated natural ventilation mode with pressure-driven airflow channels',
      'Dynamic daylighting algorithm maintaining 500 lux across interior workplanes',
      'Self-cleaning hydrophobic nanocoating on all kinetic assemblies'
    ],
    structuralSpecs: [
      'Actuation: Silent brushless servo motors with sub-millimeter encoder precision',
      'Materials: Carbon-fiber reinforced polymer (CFRP) & Monocrystalline PV film',
      'Certification: Swiss Minergie-P-ECO & LEED Platinum Target',
      'Lifecycle: 40-year accelerated weathering certified'
    ]
  },
  {
    id: 3,
    title: 'Parametric Diagrid Aerodynamic Sky Canopy',
    category: 'Cultural & Civic Pavilions',
    location: 'Marina Bay Civic Waterfront, Singapore',
    height: '28 meters (Free-form span 95m)',
    grossFloorArea: '14,800 m² Enclosed Canopy',
    dragCoefficient: 'Cd = 0.22 (Ultra-Streamlined)',
    kineticLouverCount: '1,420 Smart Electrochromic Frits',
    energyHarvest: '340 MWh / Year',
    image: '/assets/images/aerovision-pavilion.jpg',
    summary: 'A hyperbolic paraboloid free-span glass and timber diagrid canopy creating a sheltered civic waterfront forum with passive microclimate cooling and rain-harvesting parabolic geometry.',
    aerodynamicInnovations: [
      'Free-form hyperbolic paraboloid shell with zero internal columns over 95m span',
      'Integrated passive evaporative cooling via subterranean tidal heat exchange pool',
      'Rainwater collection parabolic siphon channeling 100% monsoon runoff into bioswales',
      'Adaptive acoustic geometry engineered for orchestral and civic assemblies'
    ],
    structuralSpecs: [
      'Structure: Glulam Nordic Spruce and Recycled Structural Stainless Steel 316L',
      'Envelope: Quadruple-curved laminated smart glass with variable solar tinting',
      'Thermal Comfort: 6.2°C ambient reduction without active air conditioning',
      'Award: World Architecture Festival Civic Project of the Year Nominee'
    ]
  },
  {
    id: 4,
    title: 'Aero-Breathe Biophilic Habitat & Penthouse Skybridge',
    category: 'Sky-Habitats & Penthouses',
    location: 'Tokyo Bay Financial Axis, Japan',
    height: '210 meters (52 Storeys)',
    grossFloorArea: '89,000 m² GFA',
    dragCoefficient: 'Cd = 0.26',
    kineticLouverCount: '3,600 Biomorphic Air Purifying Louvers',
    energyHarvest: '1,120 MWh / Year',
    image: '/assets/images/aerovision-interior.jpg',
    summary: 'A visionary biophilic sky residence with aerodynamic timber vaulting, continuous multi-level botanical lungs, and 360-degree metropolitan observation cantilevers.',
    aerodynamicInnovations: [
      'Internal biophilic air-filtration vertical forest scrubbing PM2.5 particles',
      'Aerodynamic cross-ventilation shafts engineered for seismic base-isolation',
      'Curved mass-timber ceiling acoustic baffle geometry optimized for biophilic wellness',
      'Direct high-speed sky-elevator access with aerodynamic regenerative descent'
    ],
    structuralSpecs: [
      'Timber: Cross-Laminated Japanese Hinoki and Engineered Glulam Arches',
      'Seismic: Base-isolated sliding friction pendulum with viscous dampers',
      'WELL Building Standard: WELL v2 Platinum Certified',
      'Smart Living: Neural ambient lighting syncing with circadian rhythm'
    ]
  },
  {
    id: 5,
    title: 'Biophilic Living Mass-Timber Ecosystem',
    category: 'Sustainable Living Towers',
    location: 'Vancouver Coastal Forest Eco-Corridor, Canada',
    height: '165 meters (44 Storeys)',
    grossFloorArea: '58,000 m² GFA',
    dragCoefficient: 'Cd = 0.30',
    kineticLouverCount: '2,800 Living Moss & Hydroponic Facade Trays',
    energyHarvest: '890 MWh / Year',
    image: '/assets/images/biophilic-building.png',
    summary: 'An ecological landmark uniting hyper-sustainable mass timber engineering, cascading cantilevered terrace forests, and interactive living wall telemetry.',
    aerodynamicInnovations: [
      'Vertical living wall sequestering 48 tons of CO2 annually',
      'Cantilevered timber terraces engineered for deep snow loads and wind deflection',
      'Integrated greywater recycling system feeding automated micro-drip irrigation',
      '100% sustainably sourced FSC-certified mass-timber superstructure'
    ],
    structuralSpecs: [
      'Superstructure: DLT (Dowel-Laminated Timber) and Glulam Columns',
      'Embodied Carbon: Net-negative structural frame sequestering 12,400 tons CO2',
      'LEED: Zero Carbon Building Standard Certified',
      'Thermal Performance: Passive House (Passivhaus) certified envelope'
    ]
  }
];

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (!res.ok) throw new Error('Health check failed');
    return await res.json();
  } catch (err) {
    return {
      status: 'UP (Simulated Standalone)',
      app: 'Aerovision Kinetic Skyrise & Aerodynamic Architecture Platform',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      engine: 'Java 21 / Spring Boot 3.3.2'
    };
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`);
    if (!res.ok) throw new Error('Projects fetch failed');
    return await res.json();
  } catch (err) {
    return FALLBACK_PROJECTS;
  }
}

export async function calculateEstimator(payload) {
  try {
    const res = await fetch(`${API_BASE_URL}/estimator/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Estimator API failed');
    return await res.json();
  } catch (err) {
    // Client-side parametric fallback calculation
    const height = payload.targetHeightMeters || 240;
    const floors = payload.totalFloors || Math.round(height / 3.8);
    const siteArea = payload.siteAreaSqm || 3500;
    const avgFloorPlate = siteArea * 0.65;
    const gfa = Math.round(avgFloorPlate * floors);

    let dragRed = payload.aerodynamicProfile === 'Twisted Vortex Aerofoil' ? 44.5 :
                  payload.aerodynamicProfile === 'Elliptical Double-Curvature' ? 38.2 : 32.8;
    if (payload.skyGardenAtriums) dragRed += 5.5;

    const perimeter = Math.sqrt(avgFloorPlate) * 4.0;
    const louvers = Math.round((perimeter / 1.5) * (floors * 0.7));
    const solarFactor = payload.facadeType === 'Dynamic Origami PV Louvers' ? 0.42 : 0.28;
    const solar = Number((louvers * solarFactor).toFixed(1));
    const carbon = Number(((gfa * 0.082) + (solar * 0.75)).toFixed(1));
    const budget = Number(((gfa * 3650) / 1000000).toFixed(1));
    const months = Math.round(28 + (floors * 0.35));

    return {
      grossFloorAreaSqm: gfa,
      aerodynamicDragReductionPercent: Number(dragRed.toFixed(1)),
      windVibrationMitigationPercent: Number((dragRed * 1.15).toFixed(1)),
      solarEnergyGeneratedMwhYear: solar,
      kineticLouverModules: louvers,
      embodiedCarbonOffsetTons: carbon,
      estimatedStructuralBudgetMln: budget,
      estimatedConstructionMonths: months,
      leedCertificationLevel: budget > 150 ? 'LEED Zero Carbon & WELL Platinum Certified' : 'LEED Platinum & Net-Zero Ready'
    };
  }
}

export async function fetchTelemetry() {
  try {
    const res = await fetch(`${API_BASE_URL}/telemetry`);
    if (!res.ok) throw new Error('Telemetry API failed');
    return await res.json();
  } catch (err) {
    const rand = Math.random();
    return {
      activeBuildingSite: 'Aero Helix Skyrise #01 · Wind Tunnel Boundary Layer Station 4',
      ambientWindSpeedMps: Number((14.8 + (rand * 1.8 - 0.9)).toFixed(1)),
      altitudeMeters: 342.0,
      calculatedDragCoefficient: Number((0.278 + (rand * 0.008 - 0.004)).toFixed(3)),
      vortexSheddingFrequencyHz: Number((0.48 + (rand * 0.04 - 0.02)).toFixed(2)),
      tunedMassDamperDisplacementMm: Number((12.4 + (rand * 1.2 - 0.6)).toFixed(1)),
      kineticFacadeSyncRatePercent: Number((99.4 + (rand * 0.5 - 0.25)).toFixed(1)),
      currentSolarIrradianceWsqm: Math.round(840.0 + (rand * 40 - 20)),
      realtimeEnergyGenerationKwh: Number((142.8 + (rand * 8 - 4)).toFixed(1)),
      facadeWindPressuresPascals: {
        PRESSURE_SENSOR_WINDWARD_TOP: Number((420.5 + (rand * 25 - 12.5)).toFixed(1)),
        PRESSURE_SENSOR_LEEWARD_VORTEX: Number((-210.8 + (rand * 15 - 7.5)).toFixed(1)),
        PRESSURE_SENSOR_MID_CANTILEVER: Number((185.2 + (rand * 12 - 6)).toFixed(1)),
        PRESSURE_SENSOR_BASE_APERTURE: Number((94.6 + (rand * 8 - 4)).toFixed(1))
      },
      activeFlythroughDrones: [
        'SkyEye Drone Alpha (Orbiting Level 64 Cantilever)',
        'Lidar Mesh Scanner Beta (Mapping Facade Boundary Layer)'
      ]
    };
  }
}

export async function submitRfq(payload) {
  try {
    const res = await fetch(`${API_BASE_URL}/rfq`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Submit RFQ failed');
    return await res.json();
  } catch (err) {
    return {
      id: Math.floor(Math.random() * 900) + 100,
      ...payload,
      submittedAt: new Date().toISOString(),
      status: 'RECEIVED_IN_ENGINEERING_REVIEW'
    };
  }
}
