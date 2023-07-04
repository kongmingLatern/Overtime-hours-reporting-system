import axios from "axios";

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use((response) => {
  return response;
});

export default axios;
