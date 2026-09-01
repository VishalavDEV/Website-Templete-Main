const BASE_URL = 'http://localhost:8080/api';

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const token = localStorage.getItem('ts_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || `Request failed with status ${response.status}`;
    throw new Error(errorMessage);
  }
  
  // Handle file downloads separately, otherwise return json
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/zip')) {
    return response.blob();
  }
  
  return response.json().catch(() => ({}));
};

export const api = {
  // Auth
  async login(email, password) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ email, password }),
    });
    const data = await handleResponse(res);
    if (data.token) {
      localStorage.setItem('ts_token', data.token);
      localStorage.setItem('ts_user', JSON.stringify({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role
      }));
    }
    return data;
  },

  register(name, email, password) {
    return fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ name, email, password }),
    }).then(handleResponse);
  },

  logout() {
    localStorage.removeItem('ts_token');
    localStorage.removeItem('ts_user');
    return Promise.resolve();
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('ts_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Templates
  getTemplates(params = {}) {
    const query = new URLSearchParams();
    if (params.category) query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.type) query.append('type', params.type);
    
    return fetch(`${BASE_URL}/templates?${query.toString()}`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  getTemplateById(id) {
    return fetch(`${BASE_URL}/templates/${id}`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  getTemplateBySlug(slug) {
    return fetch(`${BASE_URL}/templates/slug/${slug}`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  createTemplate(dto) {
    return fetch(`${BASE_URL}/templates`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(dto),
    }).then(handleResponse);
  },

  updateTemplate(id, dto) {
    return fetch(`${BASE_URL}/templates/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(dto),
    }).then(handleResponse);
  },

  deleteTemplate(id) {
    return fetch(`${BASE_URL}/templates/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    }).then(handleResponse);
  },

  // Categories
  getCategories() {
    return fetch(`${BASE_URL}/categories`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  // Orders
  createOrder(templateIds) {
    return fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ templateIds }),
    }).then(handleResponse);
  },

  confirmPayment(orderId) {
    return fetch(`${BASE_URL}/orders/${orderId}/confirm`, {
      method: 'POST',
      headers: getHeaders(),
    }).then(handleResponse);
  },

  getMyOrders() {
    return fetch(`${BASE_URL}/orders`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  getAllOrders() {
    return fetch(`${BASE_URL}/orders/all`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  // Licenses
  getMyLicenses() {
    return fetch(`${BASE_URL}/licenses`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  validateLicense(key) {
    return fetch(`${BASE_URL}/licenses/validate/${key}`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  // Downloads
  getDownloadToken(templateId) {
    return fetch(`${BASE_URL}/templates/${templateId}/download-token`, {
      method: 'POST',
      headers: getHeaders(),
    }).then(handleResponse);
  },

  getMyDownloadsHistory() {
    return fetch(`${BASE_URL}/templates/downloads-history`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  // Projects / Builder
  getMyProjects() {
    return fetch(`${BASE_URL}/projects`, {
      headers: getHeaders(),
    }).then(handleResponse);
  },

  saveProject(projectName, templateId, projectData) {
    return fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ projectName, templateId, projectData }),
    }).then(handleResponse);
  },

  updateProject(id, projectName, projectData) {
    return fetch(`${BASE_URL}/projects/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ projectName, projectData }),
    }).then(handleResponse);
  },

  deleteProject(id) {
    return fetch(`${BASE_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    }).then(handleResponse);
  },

  async exportProject(id) {
    const res = await fetch(`${BASE_URL}/projects/${id}/export`, {
      method: 'POST',
      headers: getHeaders(),
    });
    return handleResponse(res);
  }
};
