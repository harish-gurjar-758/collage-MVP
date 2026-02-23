import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudnary.js';


const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "notice-banners",
        allowed_formats: ["jpg", "jpeg", "png"],
    }),
});

const uploadNoticeBanner = multer({ storage });

export default uploadNoticeBanner;