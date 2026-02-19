import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

export const registerApi = (data) => API.post("/auth/register", data);
export const loginApi = (data) => API.post("/auth/login", data);
