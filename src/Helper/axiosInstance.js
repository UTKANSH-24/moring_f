import axios from "axios";
import Cookies from 'js-cookie';


// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
    // baseURL: process.env.BASE_URL,
    baseURL: "https://utkansh2024backend.onrender.com",
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials:true,
});

// Add a request interceptor to include JWT token in the headers
axiosInstance.interceptors.request.use(
    (config) => {
        console.log(Cookies);
        const token = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// axiosInstance.defaults.baseURL = process.env.BASE_URL;
axiosInstance.defaults.baseURL = "https://utkansh2024backend.onrender.com";
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
