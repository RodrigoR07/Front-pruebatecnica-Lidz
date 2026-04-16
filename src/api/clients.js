import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const getClients = async () => {
  const response = await api.get('/clients');
  return response.data;
};