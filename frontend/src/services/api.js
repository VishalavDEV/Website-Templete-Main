const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

/**
 * Fetch list of services from Spring Boot backend
 */
export async function getServices() {
  try {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.warn('Failed to fetch services from backend, using fallback data:', error);
    return [
      {
        id: 1,
        title: 'Web Development',
        description: 'High-performance, modern, and responsive web applications engineered with precision, speed, and seamless interactivity.',
        icon: 'code',
        category: 'Development'
      },
      {
        id: 2,
        title: 'UI / UX Design',
        description: 'Intuitive, elegant user interfaces crafted with an emphasis on visual harmony, minimalism, and engaging user journeys.',
        icon: 'layout',
        category: 'Design'
      },
      {
        id: 3,
        title: 'Digital Branding',
        description: 'Distinct visual identities and design systems tailored to elevate your brand presence and command attention in the market.',
        icon: 'feather',
        category: 'Branding'
      }
    ];
  }
}

/**
 * Fetch portfolio items from Spring Boot backend
 */
export async function getPortfolio() {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.warn('Failed to fetch portfolio from backend:', error);
    return [];
  }
}

/**
 * Submit contact form to Spring Boot backend
 */
export async function submitContact(contactData) {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit message');
  }
  return result;
}
