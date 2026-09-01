import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error normalization
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // No response from server
      return Promise.reject({
        success: false,
        message: 'Unable to reach the server. Please check your connection.',
      });
    }
    return Promise.reject({ success: false, message: error.message });
  }
);

/**
 * Submit a contact form enquiry to the Spring Boot backend.
 * @param {Object} formData - { name, email, phone, company, subject, message }
 * @returns {Promise<Object>} ApiResponse from backend
 */
export const submitContactForm = async (formData) => {
  const response = await apiClient.post('/api/contact', formData);
  return response.data;
};

export default apiClient;
