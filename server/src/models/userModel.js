import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        phone: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ["student", "faculty", "admin", "hod", "accountant"],
            required: true
        },

        isActive: {
            type: Boolean,
            default: true
        },

        profileImage: {
            type: String
        },

        lastLogin: Date
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
