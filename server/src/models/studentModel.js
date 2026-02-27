import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        rollNumber: {
            type: String,
            required: true,
            unique: true
        },

        enrollmentNumber: {
            type: String,
            required: true,
            unique: true
        },

        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true
        },

        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },

        semester: {
            type: Number,
            required: true
        },

        section: {
            type: String
        },

        admissionDate: {
            type: Date,
            default: Date.now
        },

        guardianName: String,
        guardianPhone: String,
        address: String,

        status: {
            type: String,
            enum: ["active", "suspended", "graduated"],
            default: "active"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Student", studentSchema);