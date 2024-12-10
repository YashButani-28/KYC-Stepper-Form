import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
