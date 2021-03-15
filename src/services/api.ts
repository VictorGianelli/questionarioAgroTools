import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.27.96.1:8081',
});

export default api;
