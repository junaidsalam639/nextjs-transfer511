import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

API.interceptors.request.use((config) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('adminToken='))?.split('=')[1];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginAdmin = (data) => API.post('/admin/login', data);
export const getCars = () => API.get('/cars');
export const createCar = (data) => API.post('/cars', data);
export const updateCar = (id, data) => API.put(`/cars/${id}`, data);
export const deleteCar = (id) => API.delete(`/cars/${id}`);