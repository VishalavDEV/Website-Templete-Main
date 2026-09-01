const API_BASE = '/api';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error('Health check failed');
    return await res.json();
  } catch (err) {
    console.error('Error fetching health:', err);
    return null;
  }
}

export async function fetchStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('Failed to fetch stats');
    return await res.json();
  } catch (err) {
    console.error('Error fetching stats:', err);
    return null;
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
  } catch (err) {
    console.error('Error fetching projects:', err);
    return null;
  }
}

export async function fetchServices() {
  try {
    const res = await fetch(`${API_BASE}/services`);
    if (!res.ok) throw new Error('Failed to fetch services');
    return await res.json();
  } catch (err) {
    console.error('Error fetching services:', err);
    return null;
  }
}

export async function calculateEstimate(projectType, areaSqFt) {
  try {
    const res = await fetch(`${API_BASE}/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectType, areaSqFt })
    });
    if (!res.ok) throw new Error('Failed to calculate estimate');
    return await res.json();
  } catch (err) {
    console.error('Error calculating estimate:', err);
    return null;
  }
}

export async function submitConsultation(data) {
  try {
    const res = await fetch(`${API_BASE}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to submit consultation');
    return await res.json();
  } catch (err) {
    console.error('Error submitting consultation:', err);
    return null;
  }
}
