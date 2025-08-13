import axios from 'axios';

const API_URL = 'http://oyna.cubemcpe.com:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

// Token'ı dinamik olarak ayarlamak için interceptor
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
