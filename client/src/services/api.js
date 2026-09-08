import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://smart-campus-erp-hgky.vercel.app/api';
export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '');

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add token to requests if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      delete API.defaults.headers.Authorization;
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;
