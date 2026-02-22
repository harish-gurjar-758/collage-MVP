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

/*
===***===**==
DEPARTMENTS
===***===**==
 */
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
        const res = await api.get(`/department/${id}`);
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
        const res = await api.put(`/department/${id}`, data);
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
        const res = await api.delete(`/department/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


/*
===***===**==
NOTICE CATEGORY
===***===**==
 */
/* =========================
   CREATE NOTICE CATEGORY
========================= */
export const createNoticeCategoryApi = async (data) => {
    try {
        const res = await api.post("/notice-category", data);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

/* =========================
   GET ALL NOTICE CATEGORY
========================= */
export const getAllNoticeCategoryApi = async () => {
    try {
        const res = await api.get("/notice-category");
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   GET SINGLE NOTICE CATEGORY
========================= */
export const getNoticeCategoryByIdApi = async (id) => {
    try {
        const res = await api.get(`/notice-category/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   UPDATE NOTICE CATEGORY
========================= */
export const updateNoticeCategoryApi = async (id, data) => {
    try {
        const res = await api.put(`/notice-category/${id}`, data);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/* =========================
   DELETE NOTICE CATEGORY
========================= */
export const deleteNoticeCategroyApi = async (id) => {
    try {
        const res = await api.delete(`/notice-category/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};