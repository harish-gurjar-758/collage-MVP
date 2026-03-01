import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../../config/cloudnary.js";
import multer from "multer";

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "user-profile-pics",
        allowed_formats: ["jpg", "jpeg", "png"],
    }),
});

const uploadUserProfilePic = multer({ storage });

export default uploadUserProfilePic;