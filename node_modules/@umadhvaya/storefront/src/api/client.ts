import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach Authorization Token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('umadhvaya_access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Guest Session ID for cart persistence
    let guestSessionId = localStorage.getItem('umadhvaya_guest_session');
    if (!guestSessionId) {
      guestSessionId = 'guest_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('umadhvaya_guest_session', guestSessionId);
    }
    if (config.headers) {
      config.headers['x-guest-session'] = guestSessionId;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for handling token expiry & uniform data unwrapping
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Optional: Refresh token logic or redirect to login
    }
    return Promise.reject(error);
  }
);
