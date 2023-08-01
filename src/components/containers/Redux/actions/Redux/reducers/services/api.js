import axios from 'axios';

const API_BASE_URL = 'https://my-json-server.typicode.com/your-username/ecommerce-api';

export const fetchProducts = () => {
  return axios.get(`${API_BASE_URL}/products`);
};

export const deleteProduct = (productId) => {
  return axios.delete(`${API_BASE_URL}/products/${productId}`);
};

export const addProduct = (product) => {
  return axios.post(`${API_BASE_URL}/products`, product);
};
