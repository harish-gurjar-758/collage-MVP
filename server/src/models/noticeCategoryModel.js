import mongoose from "mongoose";

const noticeCategorySchema = new mongoose.Schema({
    noticeCategory: {
        type: String,
        required: true,
    }
});

const NoticeCategory = mongoose.model("NoticeCategory", noticeCategorySchema)

export default NoticeCategory;