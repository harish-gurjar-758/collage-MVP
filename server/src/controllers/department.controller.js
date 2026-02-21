import Department from "../models/departmentModel.js";


/* =========================
   CREATE DEPARTMENT
========================= */
export const createDepartment = async (req, res) => {
    try {
        const { departmentName, classes } = req.body;

        const department = await Department.create({
            departmentName,
            classes,
        });

        res.status(201).json({
            success: true,
            message: "Department created successfully",
            data: department,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   GET ALL DEPARTMENTS
========================= */
export const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();

        res.status(200).json({
            success: true,
            count: departments.length,
            data: departments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   GET SINGLE DEPARTMENT
========================= */
export const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found",
            });
        }

        res.status(200).json({
            success: true,
            data: department,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   UPDATE DEPARTMENT
========================= */
export const updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Department updated successfully",
            data: department,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   DELETE DEPARTMENT
========================= */
export const deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Department deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};