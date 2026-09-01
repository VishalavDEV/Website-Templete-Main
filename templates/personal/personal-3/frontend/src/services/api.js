import {
  fallbackProfile,
  fallbackProjects,
  fallbackSkills,
  fallbackExperience,
  fallbackEducation,
  fallbackAchievements,
  fallbackCertifications,
  fallbackPlayground
} from '../data/fallbackData';

const BASE_URL = '/api';

export async function getProfile() {
  try {
    const res = await fetch(`${BASE_URL}/profile`);
    if (!res.ok) throw new Error('Failed to fetch profile');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback profile data:', err);
    return fallbackProfile;
  }
}

export async function getProjects() {
  try {
    const res = await fetch(`${BASE_URL}/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback projects data:', err);
    return fallbackProjects;
  }
}

export async function getProjectById(id) {
  try {
    const res = await fetch(`${BASE_URL}/projects/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch project ${id}`);
    return await res.json();
  } catch (err) {
    console.warn(`API Error, using fallback data for project ${id}:`, err);
    return fallbackProjects.find(p => p.id === id) || fallbackProjects[0];
  }
}

export async function getSkills() {
  try {
    const res = await fetch(`${BASE_URL}/skills`);
    if (!res.ok) throw new Error('Failed to fetch skills');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback skills data:', err);
    return fallbackSkills;
  }
}

export async function getExperience() {
  try {
    const res = await fetch(`${BASE_URL}/experience`);
    if (!res.ok) throw new Error('Failed to fetch experience');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback experience data:', err);
    return fallbackExperience;
  }
}

export async function getEducation() {
  try {
    const res = await fetch(`${BASE_URL}/education`);
    if (!res.ok) throw new Error('Failed to fetch education');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback education data:', err);
    return fallbackEducation;
  }
}

export async function getAchievements() {
  try {
    const res = await fetch(`${BASE_URL}/achievements`);
    if (!res.ok) throw new Error('Failed to fetch achievements');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback achievements data:', err);
    return fallbackAchievements;
  }
}

export async function getCertifications() {
  try {
    const res = await fetch(`${BASE_URL}/certifications`);
    if (!res.ok) throw new Error('Failed to fetch certifications');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback certifications data:', err);
    return fallbackCertifications;
  }
}

export async function getPlayground() {
  try {
    const res = await fetch(`${BASE_URL}/playground`);
    if (!res.ok) throw new Error('Failed to fetch playground');
    return await res.json();
  } catch (err) {
    console.warn('API Error, using fallback playground data:', err);
    return fallbackPlayground;
  }
}

export async function submitContact(message) {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Validation failed');
    }
    return await res.json();
  } catch (err) {
    console.error('Contact submission error:', err);
    // Mimic API responses for front-end offline demonstration
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!message.name || !message.email || !message.subject || message.message.length < 10) {
          reject(new Error('Validation failed. Message must be at least 10 characters long.'));
        } else {
          resolve({ status: 'success', message: 'THANK YOU FOR REACHING OUT. (DEMO)' });
        }
      }, 1000);
    });
  }
}
