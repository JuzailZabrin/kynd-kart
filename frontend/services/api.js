// src/api.js (or api.ts for TypeScript)
import axios from "axios";

// For development (local backend)
// const API_BASE_URL = "http://localhost:5000";

// For production (your deployed backend)
const API_BASE_URL = "https://kyndkart-app.vercel.app/"; // Replace with your actual Vercel backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
