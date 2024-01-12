import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/'

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});

export default instance;
