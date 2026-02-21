import axios from "axios";

const MAIN_API = "http://localhost:10000/api";

// Create axios instance (recommended)
const api = axios.create({
    baseURL: MAIN_API,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // remove if not using cookies
});

/* =========================
   CREATE DEPARTMENT
========================= */
export const createDepartmentApi = async (data) => {
    try {
        const res = await api.post("/department", data);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   GET ALL DEPARTMENTS
========================= */
export const getAllDepartmentsApi = async () => {
    try {
        const res = await api.get("/department");
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   GET SINGLE DEPARTMENT
========================= */
export const getDepartmentByIdApi = async (id) => {
    try {
        const res = await api.get(`/departments/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   UPDATE DEPARTMENT
========================= */
export const updateDepartmentApi = async (id, data) => {
    try {
        const res = await api.put(`/departments/${id}`, data);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   DELETE DEPARTMENT
========================= */
export const deleteDepartmentApi = async (id) => {
    try {
        const res = await api.delete(`/departments/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};