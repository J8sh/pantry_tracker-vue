import axios from 'axios';

// Define your API base URL
const apiClient = axios.create({
  baseURL: 'http://172.30.123.78:3001/' 
});

// Define your API methods
export default {
  fetchData() {
    return apiClient.get('/ingredients');
  }
};