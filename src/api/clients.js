import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000,
});

export default client;
