import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://127.0.0.1:8001', // Replace with your Symfony API base URL
});

export default apiService;