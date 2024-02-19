import axios from "axios";
import Cookies from 'js-cookie';

const BASE_URL = "http://localhost:5000/api/v1/";
// const BASE_URL = "https://utk-b-24.onrender.com/api/v1/";


// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    },
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

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;