import axios from "axios";
import Cookies from 'js-cookie';


// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
    baseURL: 'https://utkb.vercel.app/api/v1/',
    // baseURL: 'http://localhost:5000/api/v1/',
    // baseURL: "https://utkansh2024backend.onrender.com/api/v1/",
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Add a request interceptor to include JWT token in the headers
axiosInstance.interceptors.request.use(
    (config) => {
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

export default axiosInstance;
