import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        defoult: "wait",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NoticeCategory",
    }
},
    { timestamps: true }
);

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;