import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../../config/cloudnary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "notice-banners",
        public_id: (req, file) =>
            `${Date.now()}-${file.originalname.split(".")[0]}`,
    },
});

const uploadNoticeBanner = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed"), false);
        }
    },
});

export default uploadNoticeBanner;