import axios from "axios";
import Cookies from "js-cookie"; // Assuming you're using js-cookie library

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("aqarToken");

    if (token) {
      config.headers.Authorization =  token ;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
