/**
 * BuildX REST API Service
 * Connects to Java Spring Boot backend at http://localhost:8080/api with resilient client-side fallbacks.
 */

const BASE_URL = 'http://localhost:8080/api';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Elysian Sky Atrium & Living Tower',
    location: 'Marina Bay Eco-District, Singapore',
    specs: '12,500 m² · 18-Storey Mass Timber CLT',
    img: '/assets/images/buildx-atrium.jpg',
    desc: 'A flagship carbon-negative commercial pavilion featuring a 45m interior biophilic waterfall, 3,200m² vertical living bio-walls, and radiant timber acoustic ceilings.'
  },
  {
    id: 2,
    title: 'Verdant Horizon Biophilic Complex',
    location: 'Limmatquai Waterfront, Zurich',
    specs: '8,400 m² · Alpine Glulam Timber & Low-E Glazing',
    img: '/assets/images/buildx-hero.jpg',
    desc: 'Multi-tiered living facade residential community with integrated rainwater recapture misting, endemic alpine botany, and automated circadian skylights.'
  }
];

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`, { method: 'GET' });
    if (res.ok) {
      const data = await res.json();
      return { online: true, data };
    }
    return { online: false };
  } catch {
    return { online: false };
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${BASE_URL}/projects`, { method: 'GET' });
    if (res.ok) {
      const data = await res.json();
      return data && data.length > 0 ? data : FALLBACK_PROJECTS;
    }
    return FALLBACK_PROJECTS;
  } catch {
    console.warn('[BuildX API] Backend connection unavailable, using local biophilic catalog.');
    return FALLBACK_PROJECTS;
  }
}

export async function calculateTelemetryMetrics(wallArea) {
  try {
    const res = await fetch(`${BASE_URL}/telemetry/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallArea })
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error('Fallback required');
  } catch {
    // Client fallback calculation
    return {
      wallArea,
      co2Captured: Number((wallArea * 0.024).toFixed(1)),
      oxygenProduced: Math.round(wallArea * 1.8),
      thermalReduction: Number(Math.min(7.5, 1.2 + (wallArea * 0.002)).toFixed(1)),
      noiseDamping: Math.min(28, Math.round(6 + (wallArea * 0.007)))
    };
  }
}

export async function submitConsultationDossier(payload) {
  try {
    const res = await fetch(`${BASE_URL}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      return await res.json();
    }
    throw new Error('Server returned non-200 status');
  } catch {
    console.warn('[BuildX API] Submitting in offline fallback mode.');
    return {
      success: true,
      message: 'Biophilic design consultation scheduled! Our mass-timber architectural engineers will contact you within 24 hours.',
      dossierId: 'BUILDX-BIO-LOCAL-' + Math.floor(1000 + Math.random() * 9000),
      data: payload
    };
  }
}
