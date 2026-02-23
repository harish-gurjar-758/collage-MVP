import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudnary.js';


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'user-profiles',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
});

const uploadNoticeBanner = multer({ storage });

export default uploadNoticeBanner;