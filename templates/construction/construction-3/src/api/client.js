const API_BASE = '/api';

export async function fetchStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error(`Stats HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('API fetchStats fallback:', err);
    return {
      projectsCompleted: 250,
      happyClients: 120,
      yearsExperience: 15,
      awardsWon: 35,
      liveBimDigitalTwinPct: 94,
      craneLoadTons: 480
    };
  }
}

export async function calculateEstimate(buildingType, areaSqFt, lodMultiplier) {
  try {
    const res = await fetch(`${API_BASE}/estimator/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        buildingType,
        areaSqFt: Number(areaSqFt),
        lodMultiplier: Number(lodMultiplier)
      })
    });
    if (!res.ok) throw new Error(`Estimator HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('API calculateEstimate fallback:', err);
    let baseRate = 420;
    if (buildingType === 'smart-residential') baseRate = 380;
    if (buildingType === 'datacenter') baseRate = 580;
    const total = Math.round(Number(areaSqFt) * baseRate * Number(lodMultiplier));
    return {
      totalInvestment: total,
      structuralSteelCost: Math.round(total * 0.4),
      smartFacadeCost: Math.round(total * 0.3),
      bimMepCost: Math.round(total * 0.3),
      estimatedMonths: Math.round(Math.sqrt(Number(areaSqFt)) * 0.08 + 14),
      formattedTotal: `$${total.toLocaleString()}`
    };
  }
}

export async function submitQuote(quoteData) {
  const res = await fetch(`${API_BASE}/quotes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quoteData)
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || 'Failed to submit tender quote request');
  }
  return await res.json();
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error(`Projects HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('API fetchProjects fallback:', err);
    return [
      {
        id: 'skyline-tower',
        title: 'Skyline Tower Commercial Complex',
        category: 'Commercial Architecture',
        description: 'A 42-story state-of-the-art skyscraper engineered with prefabricated composite floor plates and real-time structural sensor telemetry.',
        image: './assets/images/skyline-tower.jpg',
        area: '125,000 SQ FT',
        completionTime: '18 Months',
        status: 'Completed // Zero Clash',
        techTags: ['3D BIM', 'Smart Facade', 'Seismic Dampers']
      },
      {
        id: 'quantum-datacenter',
        title: 'Quantum Hyperscale Data Hub',
        category: 'Critical Infrastructure',
        description: 'Modular tier-4 green datacenter with robotic cooling loops and pre-cast concrete superstructure.',
        image: './assets/images/futurix-3d-wireframe.jpg',
        area: '340,000 SQ FT',
        completionTime: '14 Months',
        status: 'Under Active Construction',
        techTags: ['Prefab Modular', 'IoT Thermal', 'ISO 19650']
      },
      {
        id: 'nexus-smart-residence',
        title: 'Nexus Eco-Smart Residential Tower',
        category: 'Smart Residential',
        description: 'Ultra-luxury net-zero residential high-rise featuring self-healing concrete and automated kinetic facade panels.',
        image: './assets/images/skyline-tower.jpg',
        area: '95,000 SQ FT',
        completionTime: '20 Months',
        status: 'Handed Over',
        techTags: ['Kinetic Facade', 'Digital Twin', 'LEED Platinum']
      }
    ];
  }
}
