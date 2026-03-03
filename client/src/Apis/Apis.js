import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

export const registerApi = (data) => API.post("/auth/register", data);
export const loginApi = (data) => API.post("/auth/login", data);



/* =========================
   GET ALL NOTICE CATEGORY
========================= */
export const getAllNoticeCategoryApi = async () => {
    try {
        const res = await API.get("/notice-category");
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


/* =========================
   GET ALL NOTICE
========================= */
export const getAllNoticeApi = async () => {
    try {
        const res = await API.get("/notice");
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
