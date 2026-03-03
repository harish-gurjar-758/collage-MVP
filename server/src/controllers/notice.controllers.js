import Notice from "../models/noticesModel.js";


/* =========================
   CREATE  NOTICE
========================= */
export const createNotice = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const { title, description, dueDate, status, category } = req.body;

        const banner = req.file ? req.file.path : null;

        const notice = await Notice.create({
            title,
            description,
            dueDate,
            status,
            category,
            banner,
        });

        res.status(201).json({
            success: true,
            message: "Notice created successfully.",
            data: notice,
        });

    } catch (error) {
        console.error("CREATE NOTICE ERROR:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
};

/* =========================
   GET ALL NOTICE
========================= */

export const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().populate("category", "noticeCategory").sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: notices.length,
            data: notices
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   GET SINGLE NOTICE
========================= */
export const getNoticeById = async (req, res) => {
    try {
        const notice = await Notice.findById(req.params.id).populate("category", "noticeCategory");

        if (!notice) {
            return res.status(404).json({
                success: false,
                message: "Notice not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: notice,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   UPDATE NOTICE
========================= */
export const updateNotice = async (req, res) => {
    try {
        const { title, description, dueDate, status, category } = req.body;

        const notice = await Notice.findById(req.params.id);

        if (!notice) {
            return res.status(404).json({
                success: false,
                message: "Notice not found.",
            });
        }

        // Update fields manually
        notice.title = title || notice.title;
        notice.description = description || notice.description;
        notice.dueDate = dueDate || notice.dueDate;
        notice.status = status || notice.status;
        notice.category = category || notice.category;

        // If new banner uploaded
        if (req.file) {
            notice.banner = req.file.path;
        }

        await notice.save();

        res.status(200).json({
            success: true,
            message: "Notice updated successfully.",
            data: notice,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

/* =========================
   DELETE NOTICE
========================= */
export const deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndDelete(req.params.id);

        if (!notice) {
            return res.status(404).json({
                success: false,
                message: "Notice not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Notice deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};