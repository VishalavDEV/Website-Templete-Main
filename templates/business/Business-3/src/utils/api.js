const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const error = new Error(errorData.error || errorData.message || 'API request failed');
    error.status = response.status;
    error.errors = errorData;
    throw error;
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  // Auth
  login: (username, password) => request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  }),

  // Projects
  getProjects: (category) => {
    const url = category ? `/api/projects?category=${encodeURIComponent(category)}` : '/api/projects';
    return request(url);
  },
  getProjectById: (id) => request(`/api/projects/${id}`),
  createProject: (project) => request('/api/projects', {
    method: 'POST',
    body: JSON.stringify(project),
  }),
  updateProject: (id, project) => request(`/api/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(project),
  }),
  deleteProject: (id) => request(`/api/projects/${id}`, {
    method: 'DELETE',
  }),

  // Services
  getServices: () => request('/api/services'),
  createService: (service) => request('/api/services', {
    method: 'POST',
    body: JSON.stringify(service),
  }),
  updateService: (id, service) => request(`/api/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(service),
  }),
  deleteService: (id) => request(`/api/services/${id}`, {
    method: 'DELETE',
  }),

  // Testimonials
  getTestimonials: () => request('/api/testimonials'),
  createTestimonial: (testimonial) => request('/api/testimonials', {
    method: 'POST',
    body: JSON.stringify(testimonial),
  }),
  updateTestimonial: (id, testimonial) => request(`/api/testimonials/${id}`, {
    method: 'PUT',
    body: JSON.stringify(testimonial),
  }),
  deleteTestimonial: (id) => request(`/api/testimonials/${id}`, {
    method: 'DELETE',
  }),

  // Contact
  submitContact: (contactData) => request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
  }),

  // Admin
  getEnquiries: () => request('/api/admin/enquiries'),
  deleteEnquiry: (id) => request(`/api/admin/enquiries/${id}`, {
    method: 'DELETE',
  }),
};
