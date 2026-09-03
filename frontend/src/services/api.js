const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8085/api';

export async function getSlides() {
  try {
    const res = await fetch(`${API_BASE_URL}/slides`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Falling back to local slides:', err);
    return [
      {
        id: 1,
        title: 'HI-TECH DESIGN',
        subtitle: 'Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore',
        bgImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80',
        ctaText: 'EXPLORE',
        ctaLink: '#features'
      },
      {
        id: 2,
        title: 'CREATIVE SOLUTIONS',
        subtitle: 'Pioneering digital experiences engineered with structural elegance, computational speed, and architectural beauty.',
        bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
        ctaText: 'DISCOVER',
        ctaLink: '#products'
      },
      {
        id: 3,
        title: 'MODERN ARCHITECTURE',
        subtitle: 'Transforming conceptual designs into high-performance web systems with timeless minimal aesthetics.',
        bgImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80',
        ctaText: 'GET STARTED',
        ctaLink: '#pricing'
      }
    ];
  }
}

export async function getFeatures() {
  try {
    const res = await fetch(`${API_BASE_URL}/features`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Falling back to local features:', err);
    return [
      {
        id: 1,
        title: 'Art Of Coding',
        description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor with precision and modular architecture.',
        icon: 'code'
      },
      {
        id: 2,
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor across all modern displays and screens.',
        icon: 'smartphone'
      },
      {
        id: 3,
        title: 'Feature Reach',
        description: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor empowering your brand to scale globally.',
        icon: 'award'
      }
    ];
  }
}

export async function getProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/products`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Falling back to local products:', err);
    return [];
  }
}

export async function getPricing() {
  try {
    const res = await fetch(`${API_BASE_URL}/pricing`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Falling back to local pricing:', err);
    return [];
  }
}

export async function getFaqs() {
  try {
    const res = await fetch(`${API_BASE_URL}/faq`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('Falling back to local FAQs:', err);
    return [];
  }
}

export async function submitContact(contactData) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactData)
  });
  
  const data = await res.json().catch(() => null);
  
  if (!res.ok) {
    const errorMsg = data?.message || 'Validation failed. Please verify your entries.';
    const err = new Error(errorMsg);
    err.fieldErrors = data?.data || {};
    throw err;
  }
  return data;
}