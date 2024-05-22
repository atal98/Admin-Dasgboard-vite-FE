import axios from "axios";
// local_url = "http://127.0.0.1:8000/";
const baseURL = "https://admin-dashboard-be-2qkj.onrender.com/";
// const baseURL = "http://127.0.0.1:8000/";
// const baseURL = import.meta.env.VITE_API_URL
//   ? import.meta.env.VITE_API_URL
//   : deployment_url;
const AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default AxiosInstance;
