import api from './apiClient';

export const getAllProducts = () => api.get('/products');