import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            firstName: {
                type: String,
                required: true,
                trim: true,
            },
            lastName: {
                type: String,
                required: true,
                trim: true,
            },
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        role: {
            type: String,
            enum: ["student", "teacher", "admin", "management"],
            default: "student",
        },

        enrollmentNumber: {
            type: String, // only for students
        },

        employeeId: {
            type: String, // only for teachers/admin
        },

        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
        },

        semester: {
            type: Number, // only for students
        },

        subjects: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subject",
            },
        ],

        photo: {
            type: String,
            default: "",
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        lastLogin: {
            type: Date,
        },

        address: {
            street: String,
            city: String,
            state: String,
            pincode: String,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
