import NoticeCategory from "../models/noticeCategoryModel";


/* =======================
CREATE NOTICE CATEGORY
 ========================*/
export const createNoticeCategory = async (req, res) => {
    try {
        const { noticeCategory } = req.body;

        const category = await NoticeCategory.create({
            noticeCategory,
        });

        res.status(201).json({
            success: true,
            message: "Notice Category created successfully",
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


/* =========================
   GET ALL NOTICE CATEGORY
========================= */
export const getAllNoticeCategory = async (req, res) => {
    try {
        const categorys = await noticeCategory.find();

        res.status(200).json({
            success: true,
            count: categorys.length,
            data: categorys,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


/* =========================
   GET SINGLE NOTICE CATEGORY
========================= */
export const getNoticeCategoryById = async (req, res) => {
    try {
        const category = await NoticeCategory.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Notice Category not found",
            });
        }

        res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   UPDATE NOTICE CATEGORY
========================= */
export const updateNopticeCategory = async (req, res) => {
    try {
        const category = await NoticeCategory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Notice Category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Notice Category updated successfully.",
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   DELETE NOTICE CATEGORY
========================= */
export const deleteNoticeCategory = async (req, res) => {
    try {
        const category = await NoticeCategory.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Notice Category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Notice Category deleted successfully.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};